# Monaco Editor Real-Time Linting for CodeHarborHub

Your template had `[INSERT LANGUAGE]` unfilled, so I built a **modular linter registry** instead of a single-language solution. It ships with:

| Language | Strategy | Library |
|---|---|---|
| JavaScript | Real parser, exact line/column | `acorn` (lazy-loaded) |
| Python | Pure-TS heuristics: missing `:`, Py2 `print`, `if x = 5`, indentation, brackets | none |
| C, C++, Java, C#, Go | Bracket, string, and comment matching | none |

Everything runs in the browser and is pure TypeScript, and any other language can be plugged in with `registerLinter()`.

## Prerequisites / Setup

```bash
npm install @monaco-editor/react monaco-editor acorn
```

Works with Vite, CRA, and Next.js. In Next.js, keep `'use client'` at the top of the component. Folder layout:

```
src/
├─ lib/monaco-lint/
│  ├─ types.ts
│  ├─ debounce.ts
│  ├─ markers.ts
│  ├─ scanner.ts
│  ├─ linters/
│  │  ├─ javascript.ts
│  │  ├─ bracket.ts
│  │  └─ python.ts
│  ├─ registry.ts
│  ├─ attachLinter.ts
│  └─ index.ts
└─ components/LintedEditor.tsx
```

## The Complete Code

### `lib/monaco-lint/types.ts`

```ts
// A linter is a PURE function: source code in, issues out.
// It knows nothing about Monaco, so it is easy to unit-test and reuse.

export type LintSeverity = 'error' | 'warning' | 'info' | 'hint';

export interface LintIssue {
  message: string;
  severity: LintSeverity;
  // All positions are 1-based, the same convention Monaco uses.
  startLine: number;
  startColumn: number;
  endLine: number;
  endColumn: number;
  code?: string;
}

// Sync or async: async lets you lazy-load parsers or call a Web Worker.
export type Linter = (code: string) => LintIssue[] | Promise<LintIssue[]>;

export const makeIssue = (
  message: string,
  line: number,
  col: number,
  endCol: number,
  severity: LintSeverity = 'error',
): LintIssue => ({
  message,
  severity,
  startLine: line,
  startColumn: col,
  endLine: line,
  endColumn: endCol,
});
```

### `lib/monaco-lint/debounce.ts`

```ts
// Minimal debounce with cancel(): waits `wait` ms after the LAST call.
export function debounce<A extends unknown[]>(fn: (...args: A) => void, wait: number) {
  let timer: ReturnType<typeof setTimeout> | undefined;

  const debounced = (...args: A) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), wait);
  };
  debounced.cancel = () => clearTimeout(timer);

  return debounced;
}
```

### `lib/monaco-lint/markers.ts`

```ts
import type { editor } from 'monaco-editor';
import type { Monaco } from '@monaco-editor/react';
import type { LintIssue } from './types';

const clamp = (v: number, lo: number, hi: number) => Math.min(Math.max(v, lo), hi);

// Converts our neutral LintIssue[] into Monaco's IMarkerData[].
// Positions are clamped to the model so a stale or buggy linter can never crash Monaco.
export function toMarkers(
  monaco: Monaco,
  model: editor.ITextModel,
  issues: LintIssue[],
): editor.IMarkerData[] {
  const severity = {
    error: monaco.MarkerSeverity.Error,     // red squiggle
    warning: monaco.MarkerSeverity.Warning, // yellow squiggle
    info: monaco.MarkerSeverity.Info,
    hint: monaco.MarkerSeverity.Hint,
  };
  const lastLine = model.getLineCount();

  return issues.map((i) => {
    const startLineNumber = clamp(i.startLine, 1, lastLine);
    const endLineNumber = clamp(i.endLine, startLineNumber, lastLine);
    const startColumn = clamp(i.startColumn, 1, model.getLineMaxColumn(startLineNumber));
    let endColumn = clamp(i.endColumn, 1, model.getLineMaxColumn(endLineNumber));

    // Zero-width ranges are invisible, so widen them by one character.
    if (endLineNumber === startLineNumber && endColumn <= startColumn) {
      endColumn = Math.min(startColumn + 1, model.getLineMaxColumn(startLineNumber));
    }

    return {
      severity: severity[i.severity],
      message: i.message,
      startLineNumber,
      startColumn,
      endLineNumber,
      endColumn,
      source: 'CHH Lint',
      code: i.code,
    };
  });
}
```

### `lib/monaco-lint/scanner.ts`

```ts
import { makeIssue, type LintIssue } from './types';

// One tiny scanner powers the C-family AND Python linters.
// It walks the source once and tracks:
//   - strings (incl. unterminated ones), comments
//   - bracket matching with a stack
// It also returns a "cleaned" copy of the source (strings and comments masked)
// so the Python linter can run safe regex checks without false positives.

export interface ScanConfig {
  lineComments: string[];
  blockComments: [open: string, close: string][];
  quotes: string[];            // every string delimiter
  multilineQuotes?: string[];  // delimiters allowed to span lines (e.g. Go's `)
  rawQuotes?: string[];        // delimiters with NO backslash escapes
  tripleQuotes?: boolean;      // Python / Java text blocks: """ ... """
  digitSeparators?: boolean;   // C++14: 1'000'000 is not a char literal
}

export interface ScanResult {
  issues: LintIssue[];
  cleanLines: string[];        // same line count & columns as the input
  isContinuation: boolean[];   // [lineNumber] -> line starts inside ( ) or a multi-line string
}

const OPEN = new Map([['(', ')'], ['[', ']'], ['{', '}']]);
const CLOSE = new Set([')', ']', '}']);

export function scan(code: string, cfg: ScanConfig): ScanResult {
  const issues: LintIssue[] = [];
  const stack: { char: string; line: number; col: number }[] = [];
  const clean = code.split('');
  const isContinuation: boolean[] = [];
  isContinuation[1] = false;

  let i = 0;
  let line = 1;
  let col = 1;
  let inMultiline = false;

  // Moves one character forward while keeping line/column counters accurate.
  const advance = () => {
    if (code[i] === '\n') {
      line++;
      col = 1;
      isContinuation[line] = stack.length > 0 || inMultiline;
    } else {
      col++;
    }
    i++;
  };

  // Overwrites a range in the "clean" copy (newlines are preserved for alignment).
  const mask = (from: number, to: number, fill: string) => {
    for (let k = from; k < to; k++) {
      if (clean[k] !== '\n' && clean[k] !== '\r') clean[k] = fill;
    }
  };

  while (i < code.length) {
    const ch = code[i];

    // 1) Line comments: skip to end of line.
    if (cfg.lineComments.some((t) => code.startsWith(t, i))) {
      const start = i;
      while (i < code.length && code[i] !== '\n') advance();
      mask(start, i, ' ');
      continue;
    }

    // 2) Block comments: skip to the closing token.
    const block = cfg.blockComments.find(([open]) => code.startsWith(open, i));
    if (block) {
      const [open, close] = block;
      const start = i, sl = line, sc = col;
      for (let k = 0; k < open.length; k++) advance();
      let closed = false;
      while (i < code.length) {
        if (code.startsWith(close, i)) {
          for (let k = 0; k < close.length; k++) advance();
          closed = true;
          break;
        }
        advance();
      }
      mask(start, i, ' ');
      if (!closed) issues.push(makeIssue('Unterminated comment', sl, sc, sc + open.length));
      continue;
    }

    // 3) C++14 digit separators (1'000) must not start a char literal.
    if (
      ch === "'" && cfg.digitSeparators &&
      /[0-9a-fA-F]/.test(code[i - 1] ?? '') && /[0-9a-fA-F]/.test(code[i + 1] ?? '')
    ) {
      advance();
      continue;
    }

    // 4) Strings.
    if (cfg.quotes.includes(ch)) {
      const triple = !!cfg.tripleQuotes && code.startsWith(ch.repeat(3), i);
      const delim = triple ? ch.repeat(3) : ch;
      const multi = triple || !!cfg.multilineQuotes?.includes(ch);
      const raw = !!cfg.rawQuotes?.includes(ch);
      const start = i, sl = line, sc = col;

      for (let k = 0; k < delim.length; k++) advance();
      inMultiline = multi;

      let closed = false;
      while (i < code.length) {
        if (!raw && code[i] === '\\') {            // escape: skip the next char too
          advance();
          if (i < code.length) advance();
          continue;
        }
        if (code.startsWith(delim, i)) {
          for (let k = 0; k < delim.length; k++) advance();
          closed = true;
          break;
        }
        if (code[i] === '\n' && !multi) break;     // single-line string hit end of line
        advance();
      }
      inMultiline = false;

      mask(start, i, '_');                         // hide the string's contents
      if (closed) { clean[start] = '"'; clean[i - 1] = '"'; }
      else {
        issues.push(
          makeIssue(
            triple ? 'Unterminated triple-quoted string' : `Unterminated string literal (missing closing ${ch})`,
            sl, sc, sc + delim.length,
          ),
        );
      }
      continue;
    }

    // 5) Brackets.
    if (OPEN.has(ch)) {
      stack.push({ char: ch, line, col });
    } else if (CLOSE.has(ch)) {
      const top = stack.pop();
      if (!top) {
        issues.push(makeIssue(`Unexpected '${ch}': no matching opening bracket`, line, col, col + 1));
      } else if (OPEN.get(top.char) !== ch) {
        issues.push(
          makeIssue(
            `Mismatched '${ch}': expected '${OPEN.get(top.char)}' to close '${top.char}' from line ${top.line}`,
            line, col, col + 1,
          ),
        );
      }
    }
    advance();
  }

  // Anything left on the stack was never closed.
  for (const open of stack) {
    issues.push(makeIssue(`Unclosed '${open.char}'`, open.line, open.col, open.col + 1));
  }

  return { issues, cleanLines: clean.join('').split('\n'), isContinuation };
}
```

### `lib/monaco-lint/linters/bracket.ts`

```ts
import { scan, type ScanConfig } from '../scanner';
import type { Linter } from '../types';

// Factory: turns a ScanConfig into a Linter that reports bracket/string/comment problems.
export const createBracketLinter =
  (cfg: ScanConfig): Linter =>
  (code) =>
    scan(code, cfg).issues;

const C_LIKE: ScanConfig = {
  lineComments: ['//'],
  blockComments: [['/*', '*/']],
  quotes: ['"', "'"],
};

export const cLinter = createBracketLinter(C_LIKE);
export const cppLinter = createBracketLinter({ ...C_LIKE, digitSeparators: true });
export const csharpLinter = createBracketLinter(C_LIKE);
export const javaLinter = createBracketLinter({ ...C_LIKE, tripleQuotes: true }); // text blocks
export const goLinter = createBracketLinter({
  ...C_LIKE,
  quotes: ['"', "'", '`'],
  multilineQuotes: ['`'], // Go raw strings can span lines
  rawQuotes: ['`'],       // ...and have no escapes
});
```

### `lib/monaco-lint/linters/javascript.ts`

```ts
import { makeIssue, type Linter } from '../types';

// acorn throws a SyntaxError carrying `loc` ({ line (1-based), column (0-based) }) and `pos`.
type AcornError = SyntaxError & { loc?: { line: number; column: number }; pos?: number };

export const javascriptLinter: Linter = async (code) => {
  // Dynamic import: acorn is only downloaded the first time JS is linted.
  const { parse } = await import('acorn');

  try {
    parse(code, {
      ecmaVersion: 'latest',
      sourceType: 'module',        // modern JS: import/export, top-level await
      locations: true,
      allowHashBang: true,
    });
    return [];
  } catch (e) {
    const err = e as AcornError;
    if (!err.loc) throw e;          // not a syntax error, so let attachLinter log it

    // Highlight the whole offending token instead of a single character.
    const token = /^[\w$]+|^\S/.exec(code.slice(err.pos ?? 0))?.[0] ?? ' ';
    const col = err.loc.column + 1; // acorn: 0-based -> Monaco: 1-based

    return [
      makeIssue(
        err.message.replace(/\s*\(\d+:\d+\)$/, ''), // drop acorn's "(line:col)" suffix
        err.loc.line, col, col + token.length,
      ),
    ];
  }
};
```

### `lib/monaco-lint/linters/python.ts`

```ts
import { scan, type ScanConfig } from '../scanner';
import { makeIssue, type LintIssue, type Linter } from '../types';

const PY_SCAN: ScanConfig = {
  lineComments: ['#'],
  blockComments: [],
  quotes: ['"', "'"],
  tripleQuotes: true,
};

const BLOCK_START = /^(?:async\s+)?(?:if|elif|else|for|while|def|class|try|except|finally|with)\b/;
const CONDITION = /^(?:if|elif|while)\b/;
const PY2_PRINT = /^print\s+(?![=(.\[,)\]:])\S/;

// Tabs count up to the next multiple of 8, like CPython does.
const indentWidth = (ws: string) => {
  let w = 0;
  for (const c of ws) w = c === '\t' ? (Math.floor(w / 8) + 1) * 8 : w + 1;
  return w;
};

// Finds the first ':' and the first stray '=' that sit OUTSIDE any brackets.
function analyze(text: string) {
  let depth = 0, colon = -1, assign = -1;
  for (let k = 0; k < text.length; k++) {
    const c = text[k];
    if ('([{'.includes(c)) depth++;
    else if (')]}'.includes(c)) depth = Math.max(0, depth - 1);
    else if (depth === 0) {
      if (c === ':' && text[k + 1] !== '=' && colon === -1) colon = k;
      else if (
        c === '=' && assign === -1 && colon === -1 && text[k + 1] !== '=' &&
        !'=!<>:+-*/%&|^@~'.includes(text[k - 1] ?? ' ')   // skip ==, !=, <=, +=, :=, ...
      ) assign = k;
    }
  }
  return { colon, assign };
}

export const pythonLinter: Linter = (code) => {
  const { issues: scanIssues, cleanLines, isContinuation } = scan(code, PY_SCAN);
  const issues: LintIssue[] = [];

  // 1) Group physical lines into LOGICAL lines (brackets, \ and docstrings continue a line).
  const logical: { startLine: number; lines: string[] }[] = [];
  let backslash = false;
  cleanLines.forEach((text, idx) => {
    const lineNo = idx + 1;
    const cont = lineNo > 1 && (isContinuation[lineNo] || backslash);
    if (cont && logical.length) logical[logical.length - 1].lines.push(text);
    else if (text.trim() !== '') logical.push({ startLine: lineNo, lines: [text] });
    backslash = text.trimEnd().endsWith('\\');
  });

  // 2) Check each logical line.
  const indents = [0];
  let prev: { opensBlock: boolean; line: number; endCol: number } | null = null;

  for (const lg of logical) {
    const joined = lg.lines.join('\n');
    const ws = /^[ \t]*/.exec(lg.lines[0])![0];
    const stmt = joined.slice(ws.length);
    const firstCol = ws.length + 1;
    const firstWord = /^\S+/.exec(stmt)?.[0] ?? ' ';
    const indent = indentWidth(ws);
    const top = indents[indents.length - 1];

    // Indentation rules
    if (/ \t|\t /.test(ws)) {
      issues.push(makeIssue('Mixed tabs and spaces in indentation', lg.startLine, 1, ws.length + 1, 'warning'));
    }
    if (prev?.opensBlock) {
      if (indent > top) indents.push(indent);
      else issues.push(makeIssue('Expected an indented block', lg.startLine, firstCol, firstCol + firstWord.length));
    } else if (indent > top) {
      issues.push(makeIssue('Unexpected indent', lg.startLine, 1, ws.length + 1));
      indents.push(indent); // avoid a cascade of follow-up errors
    } else if (indent < top) {
      while (indents.length > 1 && indents[indents.length - 1] > indent) indents.pop();
      if (indents[indents.length - 1] !== indent) {
        issues.push(
          makeIssue('Unindent does not match any outer indentation level', lg.startLine, 1, ws.length + 1),
        );
        indents.push(indent);
      }
    }

    // Statement rules
    const { colon, assign } = analyze(joined);
    const isHeader = BLOCK_START.test(stmt);

    // Maps an index in `joined` back to a real line/column.
    const toPos = (idx: number) => {
      let l = 0, off = 0;
      while (l < lg.lines.length - 1 && idx > off + lg.lines[l].length) {
        off += lg.lines[l].length + 1;
        l++;
      }
      return { line: lg.startLine + l, col: idx - off + 1 };
    };

    // Last non-blank physical line, used to place the "missing colon" marker.
    let lastIdx = lg.lines.length - 1;
    while (lastIdx > 0 && lg.lines[lastIdx].trim() === '') lastIdx--;
    const lastLine = lg.startLine + lastIdx;
    const endCol = lg.lines[lastIdx].trimEnd().length;

    if (isHeader && colon === -1) {
      issues.push(makeIssue("Expected ':' at the end of this statement", lastLine, endCol, endCol + 1));
    } else if (isHeader && CONDITION.test(stmt) && assign !== -1 && assign < colon) {
      const p = toPos(assign);
      issues.push(makeIssue("Invalid syntax: use '==' to compare, '=' is assignment", p.line, p.col, p.col + 1));
    }

    if (PY2_PRINT.test(stmt)) {
      issues.push(
        makeIssue(
          "Missing parentheses in call to 'print'. Did you mean print(...)?",
          lg.startLine, firstCol, firstCol + lg.lines[0].trimEnd().length - ws.length,
        ),
      );
    }

    prev = {
      // A header missing its colon still "opens" a block, which avoids cascading errors.
      opensBlock: joined.trimEnd().endsWith(':') || (isHeader && colon === -1),
      line: lastLine,
      endCol,
    };
  }

  // A header on the very last line has no body yet. That is normal while typing, so warn only.
  if (prev?.opensBlock) {
    issues.push(makeIssue('Expected an indented block after this statement', prev.line, 1, prev.endCol + 1, 'warning'));
  }

  return [...scanIssues, ...issues];
};
```

### `lib/monaco-lint/registry.ts`

```ts
import type { Linter } from './types';
import { cLinter, cppLinter, csharpLinter, goLinter, javaLinter } from './linters/bracket';
import { javascriptLinter } from './linters/javascript';
import { pythonLinter } from './linters/python';

// Keys are Monaco language ids. A Map avoids prototype-key surprises.
const LINTERS = new Map<string, Linter>([
  ['javascript', javascriptLinter],
  ['python', pythonLinter],
  ['c', cLinter],
  ['cpp', cppLinter],
  ['java', javaLinter],
  ['csharp', csharpLinter],
  ['go', goLinter],
]);

export const getLinter = (languageId: string) => LINTERS.get(languageId);

// Plug in your own (e.g. Pyodide, Skulpt, a Web Worker, tree-sitter...).
export const registerLinter = (languageId: string, linter: Linter) => {
  LINTERS.set(languageId, linter);
};
```

### `lib/monaco-lint/attachLinter.ts`

```ts
import type { editor, IDisposable } from 'monaco-editor';
import type { Monaco } from '@monaco-editor/react';
import { debounce } from './debounce';
import { toMarkers } from './markers';
import { getLinter } from './registry';
import type { LintIssue, Linter } from './types';

export interface AttachLinterOptions {
  delay?: number;                                  // debounce in ms (default 300)
  owner?: string;                                  // marker owner id
  resolveLinter?: (languageId: string) => Linter | undefined;
  onIssues?: (issues: LintIssue[]) => void;        // e.g. to power a "Problems" panel
}

// Framework-agnostic: wires a linter to ONE Monaco editor and returns a disposable.
export function attachLinter(
  ed: editor.IStandaloneCodeEditor,
  monaco: Monaco,
  { delay = 300, owner = 'chh-lint', resolveLinter = getLinter, onIssues }: AttachLinterOptions = {},
): IDisposable {
  let runId = 0; // increments on every run, so slow async linters can't overwrite newer results

  const run = async () => {
    const model = ed.getModel();
    if (!model) return;

    const myRun = ++runId;
    const version = model.getVersionId();
    const linter = resolveLinter(model.getLanguageId()); // read at lint time, so language switches just work

    // No linter for this language: clear old squiggles.
    if (!linter) {
      monaco.editor.setModelMarkers(model, owner, []);
      onIssues?.([]);
      return;
    }

    let issues: LintIssue[];
    try {
      issues = await linter(model.getValue());
    } catch (err) {
      // A crashing linter must never break typing: log it and show no markers.
      console.warn('[CHH Lint] linter failed:', err);
      issues = [];
    }

    // Drop stale results (newer run started, model disposed, or text changed meanwhile).
    if (myRun !== runId || model.isDisposed() || model.getVersionId() !== version) return;

    monaco.editor.setModelMarkers(model, owner, toMarkers(monaco, model, issues));
    onIssues?.(issues);
  };

  const debouncedRun = debounce(run, delay);

  const subscriptions = [
    ed.onDidChangeModelContent(() => debouncedRun()), // typing: debounced
    ed.onDidChangeModel(() => run()),                 // new file/model: lint immediately
    ed.onDidChangeModelLanguage(() => run()),         // language switched: lint immediately
  ];

  run(); // initial pass

  return {
    dispose() {
      debouncedRun.cancel();
      runId++; // invalidate in-flight async runs
      subscriptions.forEach((s) => s.dispose());
      const model = ed.getModel();
      if (model && !model.isDisposed()) monaco.editor.setModelMarkers(model, owner, []);
    },
  };
}
```

### `lib/monaco-lint/index.ts`

```ts
export * from './types';
export { attachLinter } from './attachLinter';
export type { AttachLinterOptions } from './attachLinter';
export { getLinter, registerLinter } from './registry';
export { toMarkers } from './markers';
```

### `components/LintedEditor.tsx`

```tsx
'use client'; // required in Next.js App Router

import { useEffect, useRef, useState } from 'react';
import Editor, { type OnMount } from '@monaco-editor/react';
import type { editor, IDisposable } from 'monaco-editor';
import { attachLinter, type LintIssue } from '../lib/monaco-lint';

interface Props {
  language: string;                 // Monaco language id: python | javascript | cpp | java ...
  value: string;
  onChange: (value: string) => void;
  height?: string;
}

export default function LintedEditor({ language, value, onChange, height = '60vh' }: Props) {
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);
  const lintRef = useRef<IDisposable | null>(null);
  const [issues, setIssues] = useState<LintIssue[]>([]);

  // Runs once when Monaco is ready: attach the debounced linter (300ms).
  const handleMount: OnMount = (ed, monaco) => {
    editorRef.current = ed;
    lintRef.current?.dispose();
    lintRef.current = attachLinter(ed, monaco, { delay: 300, onIssues: setIssues });
  };

  // Clean up listeners and markers when the component unmounts.
  useEffect(() => () => lintRef.current?.dispose(), []);

  // Click a problem to jump to it.
  const jumpTo = (i: LintIssue) => {
    const ed = editorRef.current;
    if (!ed) return;
    ed.revealLineInCenter(i.startLine);
    ed.setPosition({ lineNumber: i.startLine, column: i.startColumn });
    ed.focus();
  };

  const errors = issues.filter((i) => i.severity === 'error').length;
  const warnings = issues.filter((i) => i.severity === 'warning').length;

  return (
    <div style={{ border: '1px solid #333', borderRadius: 8, overflow: 'hidden' }}>
      <Editor
        height={height}
        language={language}
        value={value}
        theme="vs-dark"
        onChange={(v) => onChange(v ?? '')}
        onMount={handleMount}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          automaticLayout: true,
          glyphMargin: true,
          scrollBeyondLastLine: false,
        }}
      />

      {/* Mini "Problems" panel */}
      <div style={{ background: '#1e1e1e', color: '#ddd', font: '13px monospace', padding: 8, maxHeight: 140, overflow: 'auto' }}>
        <strong>
          ✖ {errors} error{errors !== 1 && 's'} · ⚠ {warnings} warning{warnings !== 1 && 's'}
        </strong>
        {issues.map((i, idx) => (
          <div key={idx} onClick={() => jumpTo(i)} style={{ cursor: 'pointer', padding: '2px 0' }}>
            <span style={{ color: i.severity === 'error' ? '#f48771' : '#cca700' }}>
              {i.severity === 'error' ? '●' : '▲'}
            </span>{' '}
            [{i.startLine}:{i.startColumn}] {i.message}
          </div>
        ))}
      </div>
    </div>
  );
}
```

### `App.tsx` (demo)

```tsx
import { useState } from 'react';
import LintedEditor from './components/LintedEditor';

const SAMPLES: Record<string, string> = {
  python: `def greet(name)
    print "Hello", name

if x = 5:
    pass
`,
  javascript: `const x = ;
console.log(x);
`,
  cpp: `int main() {
    printf("Hi);
    return 0;
`,
};

export default function App() {
  const [language, setLanguage] = useState('python');
  const [code, setCode] = useState(SAMPLES.python);

  const switchLanguage = (lang: string) => {
    setLanguage(lang);
    setCode(SAMPLES[lang]);
  };

  return (
    <div style={{ maxWidth: 900, margin: '2rem auto' }}>
      <h2>CodeHarborHub · Live Linting Playground</h2>
      <select value={language} onChange={(e) => switchLanguage(e.target.value)}>
        <option value="python">Python</option>
        <option value="javascript">JavaScript</option>
        <option value="cpp">C++</option>
      </select>
      <LintedEditor language={language} value={code} onChange={setCode} />
    </div>
  );
}
```

### Optional: add your own language in 5 lines

```ts
import { registerLinter, type Linter } from './lib/monaco-lint';

const jsonLinter: Linter = (code) => {
  try { JSON.parse(code); return []; }
  catch (e) {
    // JSON.parse messages vary by browser, so highlight line 1 as a simple fallback.
    return [{ message: (e as Error).message, severity: 'error', startLine: 1, startColumn: 1, endLine: 1, endColumn: 2 }];
  }
};
registerLinter('json', jsonLinter);
```

## Example Output / Usage

After you stop typing for 300 ms, squiggles appear and the Problems bar updates.

**Python sample**

| Position | Severity | Message |
|---|---|---|
| 1:15 | 🔴 Error | Expected ':' at the end of this statement |
| 2:5 | 🔴 Error | Missing parentheses in call to 'print'. Did you mean print(...)? |
| 4:6 | 🔴 Error | Invalid syntax: use '==' to compare, '=' is assignment |

**JavaScript sample** (`const x = ;`)

| Position | Severity | Message |
|---|---|---|
| 1:11 | 🔴 Error | Unexpected token |

**C++ sample**

| Position | Severity | Message |
|---|---|---|
| 2:12 | 🔴 Error | Unterminated string literal (missing closing ") |
| 2:11 | 🔴 Error | Unclosed '(' |
| 1:12 | 🔴 Error | Unclosed '{' |

A tab/space mix in Python indentation shows as a 🟡 **warning**.

## Notes for Learners

- **JS/TS duplicate squiggles:** Monaco already has a built-in JS/TS language service. To show only CHH Lint messages for JavaScript, disable its syntax validation with `monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({ noSyntaxValidation: true })` in `beforeMount`.
- **Limits of the heuristic linters:** The Python and C-family linters are lightweight checkers, not full compilers. They catch the common beginner mistakes and avoid false positives on strings and comments, but they won't catch every error. For exact CPython errors, register an async linter that runs `compile()` in Pyodide (free, open source) inside a Web Worker. `attachLinter` already supports async linters and ignores stale results.
- **Performance:** The 300 ms debounce, stale-run guard, and lazy-loaded `acorn` keep typing smooth.

If you'd like, I can extend this with an ESLint-style rule engine for JS (e.g., `no-unused-vars` warnings via `acorn-walk`), a Pyodide Web Worker linter, or Jest/Vitest tests for the linters.
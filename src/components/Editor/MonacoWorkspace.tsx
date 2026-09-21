import React, {
  Suspense,
} from "react";
// @ts-ignore
import BrowserOnly from "@docusaurus/BrowserOnly";
import { useColorMode } from "@docusaurus/theme-common";

import type {
  EditorFile,
} from "./types";

const MonacoEditor =
  React.lazy(
    () =>
      import(
        "@monaco-editor/react"
      ).then((module) => ({
        default: module.default,
      })),
  );

interface MonacoWorkspaceProps {
  file: EditorFile | null;
  // darkMode: boolean;
  onChange: (
    value: string,
  ) => void;
}

export default function MonacoWorkspace({
  file,
  onChange,
}: MonacoWorkspaceProps): JSX.Element {
  const {
    colorMode, // the "effective" color mode, never null
    setColorMode, // set the color mode chosen by the user
  } = useColorMode();
  if (!file) {
    return (
      <div className="ch-editor-no-file">
        Select a file to start editing.
      </div>
    );
  }

  return (
    <BrowserOnly
      fallback={
        <div className="ch-editor-loading">
          Loading editor...
        </div>
      }
    >
      {() => (
        <Suspense
          fallback={
            <div className="ch-editor-loading">
              Loading Monaco...
            </div>
          }
        >
          <MonacoEditor
            height="100%"
            language={file.language}
            theme={colorMode === "dark" ? "vs-dark" : "light"
            }
            value={file.value}
            onChange={(value) =>
              onChange(value ?? "")
            }
            options={{
              automaticLayout: true,

              fontSize: 14,

              lineHeight: 22,

              fontLigatures: true,

              minimap: {
                enabled: true,
              },

              padding: {
                top: 14,
                bottom: 14,
              },

              scrollBeyondLastLine: false,

              smoothScrolling: true,

              cursorSmoothCaretAnimation:
                "on",

              bracketPairColorization: {
                enabled: true,
              },

              formatOnPaste: true,

              formatOnType: true,

              wordWrap: "on",

              tabSize: 2,

              insertSpaces: true,

              folding: true,

              foldingHighlight: true,

              renderWhitespace:
                "selection",

              quickSuggestions: true,

              suggest: {
                showMethods: true,
                showFunctions: true,
                showVariables: true,
                showClasses: true,
                showKeywords: true,
              },

              readOnly:
                file.readOnly === true,
            }}
          />
        </Suspense>
      )}
    </BrowserOnly>
  );
}
import React, { useState, useRef, useCallback, useEffect } from 'react';
import styles from './CodePlayground.module.css';

export default function CodePlayground({ language = 'javascript', initialCode = '' }) {
  const [code, setCode] = useState(initialCode || getDefaultCode(language));
  const [output, setOutput] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [error, setError] = useState('');
  const iframeRef = useRef(null);
  const consoleRef = useRef([]);

  function getDefaultCode(lang) {
    const defaults = {
      javascript: `console.log('Hello, World!');\n\n// Try writing some JavaScript code\nconst sum = (a, b) => a + b;\nconsole.log(sum(5, 3));`,
      html: `<div style="text-align: center; padding: 20px; font-family: Arial, sans-serif;">\n  <h1>Hello, World!</h1>\n  <p>This is a live HTML preview</p>\n  <button onclick="alert('Button clicked!')">Click me!</button>\n</div>`,
      css: `body {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  font-family: Arial, sans-serif;\n  margin: 0;\n}\n\n.card {\n  background: white;\n  padding: 40px;\n  border-radius: 10px;\n  box-shadow: 0 10px 30px rgba(0,0,0,0.3);\n  text-align: center;\n}\n\n.card h1 {\n  color: #333;\n  margin-bottom: 10px;\n}\n\n.card p {\n  color: #666;\n}`,
    };
    return defaults[lang] || defaults.javascript;
  }

  const executeCode = useCallback(() => {
    setIsRunning(true);
    setError('');
    consoleRef.current = [];
    setOutput([]);

    if (language === 'javascript') {
      executeJavaScript();
    } else if (language === 'html') {
      executeHTML();
    } else if (language === 'css') {
      executeCSS();
    }

    setIsRunning(false);
  }, [code, language]);

  const executeJavaScript = () => {
    try {
      const originalLog = console.log;
      const originalError = console.error;
      const originalWarn = console.warn;

      console.log = (...args) => {
        consoleRef.current.push({
          type: 'log',
          message: args.map(arg =>
            typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
          ).join(' ')
        });
        originalLog(...args);
      };

      console.error = (...args) => {
        consoleRef.current.push({
          type: 'error',
          message: args.map(arg => String(arg)).join(' ')
        });
        originalError(...args);
      };

      console.warn = (...args) => {
        consoleRef.current.push({
          type: 'warn',
          message: args.map(arg => String(arg)).join(' ')
        });
        originalWarn(...args);
      };

      const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;
      const asyncCode = new AsyncFunction(code);
      asyncCode().catch(err => {
        consoleRef.current.push({
          type: 'error',
          message: `Error: ${err.message}`
        });
      });

      console.log = originalLog;
      console.error = originalError;
      console.warn = originalWarn;

      setOutput([...consoleRef.current]);
    } catch (err) {
      setError(`Execution Error: ${err.message}`);
      console.log = console.log;
      console.error = console.error;
      console.warn = console.warn;
    }
  };

  const executeHTML = () => {
    try {
      if (iframeRef.current) {
        const iframeDoc = iframeRef.current.contentDocument || iframeRef.current.contentWindow.document;
        iframeDoc.open();
        iframeDoc.write(code);
        iframeDoc.close();
        setOutput([{ type: 'info', message: 'HTML rendered successfully' }]);
      }
    } catch (err) {
      setError(`Render Error: ${err.message}`);
    }
  };

  const executeCSS = () => {
    try {
      if (iframeRef.current) {
        const htmlContent = `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="UTF-8">
            <style>${code}</style>
          </head>
          <body>
            <div class="card">
              <h1>CSS Preview</h1>
              <p>Your CSS styles are applied above</p>
            </div>
          </body>
          </html>
        `;
        const iframeDoc = iframeRef.current.contentDocument || iframeRef.current.contentWindow.document;
        iframeDoc.open();
        iframeDoc.write(htmlContent);
        iframeDoc.close();
        setOutput([{ type: 'info', message: 'CSS rendered successfully' }]);
      }
    } catch (err) {
      setError(`Render Error: ${err.message}`);
    }
  };

  const handleReset = () => {
    setCode(getDefaultCode(language));
    setOutput([]);
    setError('');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
  };

  useEffect(() => {
    if (language === 'html' || language === 'css') {
      executeCode();
    }
  }, []);

  const showIframe = language === 'html' || language === 'css';
  const showConsole = language === 'javascript';

  return (
    <div className={styles.playground}>
      <div className={styles.header}>
        <h3 className={styles.title}>{language.toUpperCase()} Playground</h3>
        <div className={styles.actions}>
          <button
            className={styles.btn}
            onClick={executeCode}
            disabled={isRunning}
            title="Run code (Ctrl+Enter)"
            aria-label="Run code"
          >
            {isRunning ? 'Running...' : '▶ Run'}
          </button>
          <button
            className={styles.btn}
            onClick={handleCopy}
            title="Copy code to clipboard"
            aria-label="Copy code"
          >
            📋 Copy
          </button>
          <button
            className={styles.btn}
            onClick={handleReset}
            title="Reset to default code"
            aria-label="Reset code"
          >
            ↻ Reset
          </button>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.editorSection}>
          <textarea
            className={styles.editor}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            onKeyDown={(e) => {
              if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                executeCode();
              }
              if (e.key === 'Tab') {
                e.preventDefault();
                const textarea = e.target;
                const start = textarea.selectionStart;
                const end = textarea.selectionEnd;
                const newCode = code.substring(0, start) + '\t' + code.substring(end);
                setCode(newCode);
                setTimeout(() => {
                  textarea.selectionStart = textarea.selectionEnd = start + 1;
                }, 0);
              }
            }}
            placeholder="Write your code here..."
            spellCheck="false"
            aria-label="Code editor"
          />
        </div>

        <div className={styles.outputSection}>
          {error && (
            <div className={styles.error}>
              <strong>Error:</strong> {error}
            </div>
          )}

          {showConsole && (
            <div className={styles.console}>
              <div className={styles.outputLabel}>Console Output</div>
              <div className={styles.consoleContent}>
                {output.length === 0 ? (
                  <div className={styles.emptyMessage}>Run code to see output here</div>
                ) : (
                  output.map((item, idx) => (
                    <div key={idx} className={`${styles.consoleLine} ${styles[item.type]}`}>
                      <span className={styles.type}>{item.type}:</span> {item.message}
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {showIframe && (
            <div className={styles.preview}>
              <div className={styles.outputLabel}>Preview</div>
              <iframe
                ref={iframeRef}
                className={styles.iframe}
                title="Code preview"
                sandbox="allow-scripts allow-same-origin"
              />
            </div>
          )}
        </div>
      </div>

      <div className={styles.footer}>
        <small>
          Tip: Press <code>Ctrl+Enter</code> to run code. Use Tab for indentation.
        </small>
      </div>
    </div>
  );
}

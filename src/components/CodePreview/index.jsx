import React, { useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-css';
import 'prismjs/themes/prism-tomorrow.css';
import styles from './styles.module.css';

function CodePreviewContent({ defaultHtml, defaultCss, height = '320px' }) {
  const initialHtml = defaultHtml || '<div class="card">\n  <h3>CodeHarborHub</h3>\n  <p>Edit the CSS on the left to update this UI in real-time!</p>\n</div>';
  const initialCss = defaultCss || '.card {\n  padding: 1.5rem;\n  border-radius: 8px;\n  background: #2563eb;\n  color: white;\n  font-family: system-ui, sans-serif;\n}';

  const [html, setHtml] = useState(initialHtml);
  const [css, setCss] = useState(initialCss);
  const [activeTab, setActiveTab] = useState('css');

  // Check if code has been modified from the default lesson props
  const isModified = html !== initialHtml || css !== initialCss;

  const handleReset = () => {
    setHtml(initialHtml);
    setCss(initialCss);
  };

  const srcDoc = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body { padding: 1rem; font-family: system-ui, -apple-system, sans-serif; }
          ${css}
        </style>
      </head>
      <body>
        ${html}
      </body>
    </html>
  `;

  return (
    <div className={styles.container}>
      <div className={styles.editorPanel}>
        <div className={styles.tabBar}>
          <div className={styles.tabGroup}>
            <button
              className={`${styles.tabBtn} ${activeTab === 'css' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('css')}
              type="button"
            >
              CSS Editor
            </button>
            <button
              className={`${styles.tabBtn} ${activeTab === 'html' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('html')}
              type="button"
            >
              HTML Structure
            </button>
          </div>

          <button
            className={`${styles.resetBtn} ${isModified ? styles.resetActive : ''}`}
            onClick={handleReset}
            disabled={!isModified}
            type="button"
            title="Reset code to original snippet"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={styles.resetIcon}
            >
              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
              <path d="M3 3v5h5" />
            </svg>
            Reset
          </button>
        </div>

        <div className={styles.editorScrollArea}>
          {activeTab === 'css' ? (
            <Editor
              value={css}
              onValueChange={(code) => setCss(code)}
              highlight={(code) => highlight(code, languages.css || languages.clike, 'css')}
              padding={16}
              className={styles.prismEditor}
              style={{
                fontFamily: 'var(--ifm-font-family-monospace)',
                fontSize: 14,
              }}
            />
          ) : (
            <Editor
              value={html}
              onValueChange={(code) => setHtml(code)}
              highlight={(code) => highlight(code, languages.markup || languages.clike, 'html')}
              padding={16}
              className={styles.prismEditor}
              style={{
                fontFamily: 'var(--ifm-font-family-monospace)',
                fontSize: 14,
              }}
            />
          )}
        </div>
      </div>

      <div className={styles.previewPanel}>
        <div className={styles.previewHeader}>Live Preview</div>
        <iframe
          srcDoc={srcDoc}
          title="CodeHarborHub Live CSS Preview"
          className={styles.previewIframe}
          style={{ height }}
          sandbox="allow-scripts"
        />
      </div>
    </div>
  );
}

export default function CodePreview(props) {
  return (
    <BrowserOnly fallback={<div className={styles.loadingState}>Loading Interactive Editor...</div>}>
      {() => <CodePreviewContent {...props} />}
    </BrowserOnly>
  );
}
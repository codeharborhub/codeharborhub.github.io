import React from 'react';
import useColorMode from '@site/src/hooks/useColorMode';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle() {
  const { colorMode, toggleColorMode, isDark } = useColorMode();

  return (
    <button
      className={styles.themeToggle}
      onClick={toggleColorMode}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Current theme: ${colorMode}`}
    >
      {isDark ? (
        <svg
          className={styles.icon}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      ) : (
        <svg
          className={styles.icon}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.293 1.293a1 1 0 011.414 0l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 010-1.414zm2.828 2.828a1 1 0 011.414 0l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 010-1.414zm1.414 5.657a1 1 0 110-2h1a1 1 0 110 2h-1zm-16 0a1 1 0 110-2h1a1 1 0 110 2h-1zm14.142 1.142a1 1 0 011.414 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707zm2.828 2.828a1 1 0 011.414 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707zM10 15a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm-4.293-1.293a1 1 0 011.414 0l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 010-1.414zM2.707 4.707a1 1 0 010-1.414l.707-.707a1 1 0 011.414 1.414l-.707.707a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </button>
  );
}

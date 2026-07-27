import { useContext } from 'react';
import { ColorModeContext } from '@docusaurus/theme-common';

export function useColorMode() {
  const { colorMode, setColorMode } = useContext(ColorModeContext);

  const toggleColorMode = () => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light');
  };

  const setLight = () => setColorMode('light');
  const setDark = () => setColorMode('dark');

  return {
    colorMode,
    setColorMode,
    toggleColorMode,
    setLight,
    setDark,
    isDark: colorMode === 'dark',
    isLight: colorMode === 'light',
  };
}

export default useColorMode;

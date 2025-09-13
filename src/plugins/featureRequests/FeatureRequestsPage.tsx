import React, {type ReactNode, useEffect, useState} from 'react';
import clsx from 'clsx';
import {useColorMode} from '@docusaurus/theme-common';
import Layout from '@theme/Layout';

import cannyScript from './cannyScript';
import styles from './styles.module.css';

// const BOARD_TOKEN = '054e0e53-d951-b14c-7e74-9eb8f9ed2f91';
const BOARD_TOKEN = 'dc17efce-4d94-9338-127d-509732d11df3';

// TODO useColorMode() hook is not reliable on first call
function useIsColorModeReliable() {
  const [isColorModeReliable, setIsColorModeReliable] = useState(false);
  useEffect(() => {
    setIsColorModeReliable(true);
  }, []);
  return isColorModeReliable;
}

function useCannyTheme() {
  const {colorMode} = useColorMode();
  const isColorModeReliable = useIsColorModeReliable();
  if (!isColorModeReliable) {
    return null;
  }
  return colorMode === 'light' ? 'light' : 'dark';
}

function CannyWidget({basePath}: {basePath: string}) {
  useEffect(() => {
    cannyScript();
  }, []);

  const theme = useCannyTheme();
  useEffect(() => {
    if (!theme) {
      return;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const {Canny} = window as any;
    Canny('render', {
      boardToken: BOARD_TOKEN,
      basePath,
      theme,
    });
  }, [basePath, theme]);

  return (
    <main
      key={theme} // widget needs a full reset: unable to update the theme
      className={clsx('container', 'margin-vert--lg', styles.main)}
      data-canny
    />
  );
}

export default function FeatureRequests({
  basePath,
}: {
  basePath: string;
}): ReactNode {
  return (
    <Layout title="Feedback" description="Docusaurus 2 Feature Requests page">
      <CannyWidget basePath={basePath} />
    </Layout>
  );
}
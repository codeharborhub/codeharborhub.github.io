import React, { useEffect, useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import clsx from 'clsx';
import styles from './styles.module.css';

const AD_REFRESH_RATE = 20 * 1000;

// ====== Ads Variants ======
function CodeHarborHubIntro({ position }) {
  return (
    <a
      className={clsx(styles.container, styles.backgroundIntro)}
      href="https://codeharborhub.github.io/tutorial/"
      target="_blank"
      rel="noopener"
      onClick={() => window.gtag?.('event', `codeharborhub.intro.${position}.click`)}>
      <p className={styles.tagline}>
        <strong className={styles.title}>🚀 Learn. Build. Grow.</strong>
        Join <u>CodeHarborHub</u> to explore free tech roadmaps, advanced tutorials,
        and career-ready projects. <u>Start your journey today!</u>
      </p>
    </a>
  );
}

function CodeHarborHubCourses({ position }) {
  return (
    <a
      className={clsx(styles.container, styles.backgroundCourses)}
      href="https://codeharborhub.github.io/courses/"
      target="_blank"
      rel="noopener"
      onClick={() => window.gtag?.('event', `codeharborhub.courses.${position}.click`)}>
      <p className={styles.tagline}>
        <strong className={styles.title}>🎯 Master Web Development</strong>
        Beginner to advanced courses in <u>HTML, CSS, JS, React & AI</u> with hands-on
        projects. <u>Learn at your own pace!</u>
      </p>
    </a>
  );
}

function CodeHarborHubCommunity({ position }) {
  return (
    <a
      className={clsx(styles.container, styles.backgroundCommunity)}
      href="https://discord.gg/rGCZYcaHk7"
      target="_blank"
      rel="noopener"
      onClick={() => window.gtag?.('event', `codeharborhub.community.${position}.click`)}>
      <p className={styles.tagline}>
        <strong className={styles.title}>🤝 Join Our Community</strong>
        Connect with developers, get help on projects, and collaborate on open-source.
        <u>Join our Discord now!</u>
      </p>
    </a>
  );
}

// ====== Main Rotating Ad Component ======
export default React.memo(function SidebarAd({ position }) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setCounter((c) => c + 1), AD_REFRESH_RATE);
    return () => clearTimeout(timer);
  }, [counter]);

  return (
    <BrowserOnly key={counter}>
      {() => {
        const rand = Math.random();
        const path = window.location.pathname;

        // Dynamic placement based on page
        if (path.includes('roadmap')) {
          return rand < 0.5
            ? <CodeHarborHubCourses key={Math.random()} position={position} />
            : <CodeHarborHubIntro key={Math.random()} position={position} />;
        }

        if (path.includes('community')) {
          return <CodeHarborHubCommunity key={Math.random()} position={position} />;
        }

        // Default Rotation
        if (rand < 0.33) return <CodeHarborHubIntro key={Math.random()} position={position} />;
        if (rand < 0.66) return <CodeHarborHubCourses key={Math.random()} position={position} />;
        return <CodeHarborHubCommunity key={Math.random()} position={position} />;
      }}
    </BrowserOnly>
  );
});

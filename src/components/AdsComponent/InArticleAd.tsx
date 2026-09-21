import React, { useEffect, useRef } from "react";

const ADSENSE_CLIENT = "ca-pub-5832817025080991";
const ADSENSE_SLOT = "2085089858";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

type InArticleAdProps = {
  className?: string;
};

export default function InArticleAd({
  className = "",
}: InArticleAdProps): React.ReactElement {
  const adRef = useRef<HTMLModElement | null>(null);

  useEffect(() => {
    // Push the ad only after the component has mounted in the browser.
    try {
      if (adRef.current && window.adsbygoogle) {
        window.adsbygoogle.push({});
      }
    } catch (error) {
      // AdSense can throw when an ad is already initialized.
      // Avoid breaking the page because of an ad failure.
      if (process.env.NODE_ENV === "development") {
        console.warn("Google AdSense error:", error);
      }
    }
  }, []);

  return (
    <div
      className={`codeharborhub-in-article-ad ${className}`.trim()}
      aria-label="Advertisement"
    >
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{
          display: "block",
          textAlign: "center",
        }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={ADSENSE_SLOT}
      />
    </div>
  );
}
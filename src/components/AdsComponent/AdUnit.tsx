import React, { useEffect, useRef } from "react";
import "./styles.css";

const ADSENSE_CLIENT = "ca-pub-5832817025080991";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

export type AdLayout =
  | "in-article"
  | "display"
  | "autorelaxed"
  | "autorelaxed";

export type AdFormat =
  | "fluid"
  | "auto"
  | "rectangle"
  | "horizontal"
  | "vertical";

export interface AdUnitProps {
  /**
   * AdSense slot ID.
   */
  slot: string;

  /**
   * AdSense layout.
   */
  layout?: AdLayout;

  /**
   * AdSense format.
   */
  format?: AdFormat;

  /**
   * Responsive behavior.
   */
  responsive?: boolean;

  /**
   * Additional CSS class.
   */
  className?: string;

  /**
   * Minimum height reserved for the ad.
   */
  minHeight?: number;

  /**
   * Whether the ad should be centered.
   */
  centered?: boolean;

  /**
   * Optional label for accessibility.
   */
  label?: string;

  /**
   * Optional style override.
   */
  style?: React.CSSProperties;
}

export default function AdUnit({
  slot,
  layout,
  format = "auto",
  responsive = true,
  className = "",
  minHeight = 100,
  centered = true,
  label = "Advertisement",
  style,
}: AdUnitProps): React.ReactElement {
  const adRef = useRef<HTMLModElement | null>(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    if (initializedRef.current) {
      return;
    }

    const initializeAd = () => {
      if (!adRef.current) {
        return false;
      }

      if (!window.adsbygoogle) {
        return false;
      }

      /*
       * Prevent pushing the same <ins> element more than once.
       */
      const adStatus = adRef.current.getAttribute(
        "data-adsbygoogle-status",
      );

      if (adStatus) {
        initializedRef.current = true;
        return true;
      }

      try {
        window.adsbygoogle.push({});
        initializedRef.current = true;
        return true;
      } catch (error) {
        if (process.env.NODE_ENV === "development") {
          console.warn(
            "[CodeHarborHub] Failed to initialize AdSense ad:",
            error,
          );
        }

        return false;
      }
    };

    /*
     * The AdSense script is loaded asynchronously.
     * Retry briefly if it has not initialized yet.
     */
    if (initializeAd()) {
      return;
    }

    const retryDelays = [250, 500, 1000, 2000];

    const timers = retryDelays.map((delay) =>
      window.setTimeout(() => {
        initializeAd();
      }, delay),
    );

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  const adStyle: React.CSSProperties = {
    display: "block",
    width: "100%",
    minHeight,
    textAlign: centered ? "center" : "left",
    ...style,
  };

  return (
    <div
      className={`codeharborhub-ad-unit ${
        centered ? "codeharborhub-ad-unit--centered" : ""
      } ${className}`.trim()}
      aria-label={label}
      role="complementary"
    >
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={adStyle}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
        {...(layout ? { "data-ad-layout": layout } : {})}
      />
    </div>
  );
}
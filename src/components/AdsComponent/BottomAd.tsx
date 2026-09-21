import React from "react";
import AdUnit from "./AdUnit";

import "./styles.css";

export interface BottomAdProps {
  /**
   * Google AdSense slot ID.
   */
  slot?: string;

  /**
   * Optional CSS class.
   */
  className?: string;

  /**
   * Whether the ad should remain responsive.
   */
  responsive?: boolean;

  /**
   * Minimum reserved height.
   */
  minHeight?: number;
}

const DEFAULT_BOTTOM_AD_SLOT = "2085089858";

export default function BottomAd({
  slot = DEFAULT_BOTTOM_AD_SLOT,
  className = "",
  responsive = true,
  minHeight = 100,
}: BottomAdProps): React.ReactElement {
  return (
    <section
      className={`codeharborhub-bottom-ad ${className}`.trim()}
      aria-label="Advertisement"
    >
      <div className="codeharborhub-bottom-ad__container">
        <AdUnit
          slot={slot}
          format="auto"
          responsive={responsive}
          minHeight={minHeight}
          className="codeharborhub-bottom-ad__unit"
        />
      </div>
    </section>
  );
}
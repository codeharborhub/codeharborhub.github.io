import React from "react";
import AdUnit from "./AdUnit";

import "./styles.css";

export interface SidebarAdProps {
  /**
   * Google AdSense slot ID.
   */
  slot?: string;

  /**
   * Optional CSS class.
   */
  className?: string;

  /**
   * Minimum ad height.
   */
  minHeight?: number;

  /**
   * Hide sidebar ad on mobile.
   */
  hideOnMobile?: boolean;

  /**
   * Optional title above the ad.
   */
  title?: string;
}

const DEFAULT_SIDEBAR_AD_SLOT = "2085089858";

export default function SidebarAd({
  slot = DEFAULT_SIDEBAR_AD_SLOT,
  className = "",
  minHeight = 250,
  hideOnMobile = true,
  title = "Advertisement",
}: SidebarAdProps): React.ReactElement {
  return (
    <aside
      className={`codeharborhub-sidebar-ad ${
        hideOnMobile ? "codeharborhub-sidebar-ad--hide-mobile" : ""
      } ${className}`.trim()}
      aria-label="Advertisement"
    >
      {title && (
        <div className="codeharborhub-sidebar-ad__title">
          {title}
        </div>
      )}

      <div className="codeharborhub-sidebar-ad__content">
        <AdUnit
          slot={slot}
          format="auto"
          responsive
          minHeight={minHeight}
          centered
          className="codeharborhub-sidebar-ad__unit"
        />
      </div>
    </aside>
  );
}
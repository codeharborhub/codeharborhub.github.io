import React from "react";
import "./styles.css";

export interface AdPlaceholderProps {
  /**
   * Optional CSS class for custom styling.
   */
  className?: string;

  /**
   * Approximate minimum height reserved for the advertisement.
   */
  minHeight?: number;

  /**
   * Text displayed inside the placeholder.
   */
  label?: string;

  /**
   * Whether to visually show the placeholder.
   */
  visible?: boolean;
}

export default function AdPlaceholder({
  className = "",
  minHeight = 100,
  label = "Advertisement",
  visible = true,
}: AdPlaceholderProps): React.ReactElement | null {
  if (!visible) {
    return null;
  }

  return (
    <div
      className={`codeharborhub-ad-placeholder ${className}`.trim()}
      style={{ minHeight }}
      aria-label={label}
      role="complementary"
    >
      <span className="codeharborhub-ad-placeholder__label">
        {label}
      </span>
    </div>
  );
}
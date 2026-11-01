
import React from "react";

interface ProgressBarProps {
  value: number;
  max?: number;
  label?: string;
  showPercentage?: boolean;
}

export default function ProgressBar({
  value,
  max = 100,
  label,
  showPercentage = true,
}: ProgressBarProps) {
  const percentage =
    max > 0
      ? Math.min(100, Math.max(0, (value / max) * 100))
      : 0;

  return (
    <div className="w-full">
      {(label || showPercentage) && (
        <div className="mb-2 flex items-center justify-between gap-3">
          {label && (
            <span className="text-sm font-semibold text-[var(--ifm-font-color-base)]">
              {label}
            </span>
          )}

          {showPercentage && (
            <span className="text-sm font-bold text-[var(--ifm-color-primary)]">
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}

      <div
        className="h-2.5 w-full overflow-hidden rounded-full bg-[var(--ifm-color-emphasis-200)]"
        role="progressbar"
        aria-valuenow={Math.round(percentage)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label || "Learning progress"}
      >
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${percentage}%`,
            background: "var(--ifm-color-primary)",
          }}
        />
      </div>
    </div>
  );
}

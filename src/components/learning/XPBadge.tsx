
import React from "react";
// @ts-ignore
import { useLearning } from "@site/src/context/LearningContext";

export default function XPBadge() {
  const { learning, isReady } = useLearning();

  if (!isReady) return null;

  const xpInLevel = learning.xp % 100;
  const nextLevelXP = 100 - xpInLevel;

  return (
    <div className="rounded-2xl border border-[var(--ifm-color-emphasis-200)] bg-[var(--ifm-background-surface-color)] p-5">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--ifm-color-primary)]">
            YOUR LEARNING LEVEL
          </span>

          <h3 className="mb-0 mt-2 text-3xl font-extrabold text-[var(--ifm-font-color-base)]">
            Level {learning.level}
          </h3>

          <p className="mb-0 mt-1 text-sm text-[var(--ifm-color-emphasis-600)]">
            {learning.xp} total XP
          </p>
        </div>

        <span className="text-4xl">🏆</span>
      </div>

      <div className="mt-5">
        <div className="mb-2 flex justify-between text-xs text-[var(--ifm-color-emphasis-600)]">
          <span>Level progress</span>
          <span>{xpInLevel}/100 XP</span>
        </div>

        <div className="h-2.5 overflow-hidden rounded-full bg-[var(--ifm-color-emphasis-200)]">
          <div
            className="h-full rounded-full transition-all"
            style={{
              width: `${xpInLevel}%`,
              background: "var(--ifm-color-primary)",
            }}
          />
        </div>

        <p className="mb-0 mt-3 text-xs text-[var(--ifm-color-emphasis-600)]">
          Earn {nextLevelXP} more XP to reach level {learning.level + 1}.
        </p>
      </div>
    </div>
  );
}

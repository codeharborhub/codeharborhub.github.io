
import React from "react";
// @ts-ignore
import { useLearning } from "@site/src/context/LearningContext";
// @ts-ignore
import ProgressBar from "@site/src/components/learning/ProgressBar";

export default function DailyGoalCard() {
  const { learning, setDailyGoal, isReady } = useLearning();

  if (!isReady) return null;

  const completed = learning.dailyCompleted;
  const goal = learning.dailyGoal;
  const remaining = Math.max(0, goal - completed);

  return (
    <section className="rounded-2xl border border-[var(--ifm-color-emphasis-200)] bg-[var(--ifm-background-surface-color)] p-5">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--ifm-color-primary)]">
            DAILY LEARNING GOAL
          </span>

          <h3 className="mb-0 mt-1 text-lg font-bold text-[var(--ifm-font-color-base)]">
            Make today count
          </h3>
        </div>

        <span className="text-3xl">🎯</span>
      </div>

      <div className="mb-3 flex items-end justify-between">
        <p className="mb-0 text-2xl font-extrabold text-[var(--ifm-font-color-base)]">
          {completed}
          <span className="text-sm font-medium text-[var(--ifm-color-emphasis-600)]">
            {" "}/ {goal}
          </span>
        </p>

        <span className="text-xs font-semibold text-[var(--ifm-color-emphasis-600)]">
          {remaining === 0 ? "Goal completed!" : `${remaining} activities left`}
        </span>
      </div>

      <ProgressBar value={completed} max={goal} showPercentage={false} />

      <div className="mt-5 flex items-center justify-between gap-3">
        <span className="text-xs text-[var(--ifm-color-emphasis-600)]">
          Choose your daily target
        </span>

        <select
          value={goal}
          onChange={(event) => setDailyGoal(Number(event.target.value))}
          aria-label="Daily learning goal"
          className="rounded-lg border border-[var(--ifm-color-emphasis-300)] bg-[var(--ifm-background-surface-color)] px-3 py-2 text-sm text-[var(--ifm-font-color-base)]"
        >
          {[1, 2, 3, 5, 7, 10].map((number) => (
            <option key={number} value={number}>
              {number} activities
            </option>
          ))}
        </select>
      </div>
    </section>
  );
}

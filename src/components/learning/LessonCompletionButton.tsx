
import React from "react";
// @ts-ignore
import { useLearning } from "@site/src/context/LearningContext";

interface LessonCompletionButtonProps {
  id: string;
  title: string;
  courseId: string;
  courseTitle: string;
  xp?: number;
}

export default function LessonCompletionButton({
  id,
  title,
  courseId,
  courseTitle,
  xp = 20,
}: LessonCompletionButtonProps) {
  const { learning, completeLesson, isReady } = useLearning();

  const completed = learning.completedLessons.some(
    (lesson: any) => lesson.id === id,
  );

  if (!isReady) {
    return (
      <span className="text-sm text-[var(--ifm-color-emphasis-600)]">
        Loading lesson progress...
      </span>
    );
  }

  return (
    <div className="my-6 rounded-2xl border border-[var(--ifm-color-emphasis-200)] bg-[var(--ifm-background-surface-color)] p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="mb-1 text-base font-bold text-[var(--ifm-font-color-base)]">
            {completed ? "Lesson completed!" : "Finished this lesson?"}
          </p>

          <p className="mb-0 text-sm text-[var(--ifm-color-emphasis-600)]">
            {completed
              ? "Your learning progress has been updated."
              : `Complete this lesson to earn ${xp} XP.`}
          </p>
        </div>

        <button
          type="button"
          disabled={completed}
          onClick={() =>
            completeLesson(id, title, courseId, courseTitle, xp)
          }
          className="rounded-xl px-5 py-3 text-sm font-bold text-white transition disabled:cursor-not-allowed disabled:opacity-70"
          style={{
            background: completed
              ? "#16a34a"
              : "var(--ifm-color-primary)",
          }}
        >
          {completed ? "✓ Completed" : "Mark as complete"}
        </button>
      </div>
    </div>
  );
}

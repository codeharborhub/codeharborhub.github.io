
import React from "react";
// @ts-ignore
import { useLearning } from "@site/src/context/LearningContext";
// @ts-ignore
import type { BookmarkType } from "@site/src/types/learning";

interface BookmarkButtonProps {
  id: string;
  title: string;
  url: string;
  type?: BookmarkType;
  description?: string;
  compact?: boolean;
}

export default function BookmarkButton({
  id,
  title,
  url,
  type = "tutorial",
  description,
  compact = false,
}: BookmarkButtonProps) {
  const { isBookmarked, toggleBookmark } = useLearning();

  const saved = isBookmarked(id);

  function handleClick() {
    toggleBookmark({
      id,
      title,
      url,
      type,
      description,
    });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-pressed={saved}
      aria-label={
        saved
          ? `Remove ${title} from bookmarks`
          : `Bookmark ${title}`
      }
      title={saved ? "Remove bookmark" : "Save bookmark"}
      className="inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition hover:-translate-y-0.5"
      style={{
        color: saved ? "var(--ifm-color-primary)" : "var(--ifm-font-color-base)",
        borderColor: saved
          ? "var(--ifm-color-primary)"
          : "var(--ifm-color-emphasis-300)",
        background: saved
          ? "color-mix(in srgb, var(--ifm-color-primary) 10%, transparent)"
          : "var(--ifm-background-surface-color)",
      }}
    >
      <span aria-hidden="true">{saved ? "★" : "☆"}</span>
      {!compact && (saved ? "Saved" : "Bookmark")}
    </button>
  );
}

import React, { useCallback } from "react";
// @ts-ignore
import { useLearning } from "@site/src/context/LearningContext";
// @ts-ignore
import type { BookmarkType } from "@site/src/types/learning";
import { FaRegBookmark, FaBookmark } from 'react-icons/fa';

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

  const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    toggleBookmark({
      id,
      title,
      url,
      type,
      description,
    });
  }, [id, title, url, type, description, toggleBookmark]);

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-pressed={saved}
      aria-label={saved ? 'Remove bookmark' : 'Add bookmark'}
      title={saved ? 'Remove bookmark' : 'Add bookmark'}
      className={`bookmark-btn ${saved ? 'bookmark-active' : ''}`}
      style={{ 
        background: 'none', 
        border: 'none', 
        cursor: 'pointer', 
        fontSize: '1.25rem', 
        padding: '4px',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: saved ? 'var(--ifm-color-primary)' : 'var(--ifm-color-emphasis-600)',
        transition: 'color 0.2s ease'
      }}
    >
      {!compact && (saved ? <FaBookmark /> : <FaRegBookmark />)}
    </button>
  );
}

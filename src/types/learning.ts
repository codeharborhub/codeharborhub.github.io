export type BookmarkType =
  | "tutorial"
  | "article"
  | "course"
  | "documentation"
  | "resource"
  | "project"
  | "other";

export interface BookmarkItem {
  id: string;
  title: string;
  url: string;
  type: BookmarkType;
  description?: string;
  addedAt: string;
}

export interface LearningContextType {
  bookmarks: BookmarkItem[];
  isBookmarked: (id: string) => boolean;
  toggleBookmark: (bookmark: Omit<BookmarkItem, "addedAt">) => void;
  removeBookmark: (id: string) => void;
  clearBookmarks: () => void;
  exportBookmarks: () => string;
  importBookmarks: (data: string) => boolean;
}
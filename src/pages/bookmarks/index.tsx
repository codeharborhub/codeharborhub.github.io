
import React, { useMemo, useState } from "react";
import Link from "@docusaurus/Link";

import {
  Bookmark,
  BookOpen,
  GraduationCap,
  Map,
  Code2,
  Link2,
  Search,
  Clock3,
  ArrowUpRight,
  Trash2,
  X,
  Library,
  SlidersHorizontal,
  BookMarked,
  Sparkles,
  RotateCcw,
  Layers3,
} from "lucide-react";

// @ts-ignore
import ProtectedRoute from "@site/src/components/auth/ProtectedRoute";
// @ts-ignore
import DashboardLayout from "@site/src/components/auth/DashboardLayout";
// @ts-ignore
import { useLearning } from "@site/src/context/LearningContext";
// @ts-ignore
import type { BookmarkType } from "@site/src/types/learning";

// --------------------------------------------------
// Configuration
// --------------------------------------------------

const filters: {
  label: string;
  value: "all" | BookmarkType;
  icon: React.ElementType;
}[] = [
  { label: "All items", value: "all", icon: Layers3 },
  { label: "Tutorials", value: "tutorial", icon: BookOpen },
  { label: "Lessons", value: "lesson", icon: GraduationCap },
  { label: "Roadmaps", value: "roadmap", icon: Map },
  { label: "Challenges", value: "challenge", icon: Code2 },
  { label: "Resources", value: "resource", icon: Link2 },
];

function getCategoryIcon(type: string) {
  switch (type) {
    case "tutorial":
      return BookOpen;
    case "lesson":
      return GraduationCap;
    case "roadmap":
      return Map;
    case "challenge":
      return Code2;
    case "resource":
      return Link2;
    default:
      return Bookmark;
  }
}

function formatDate(date?: string) {
  if (!date) return "Recently saved";

  const parsed = new Date(date);

  if (Number.isNaN(parsed.getTime())) {
    return "Previously saved";
  }

  return parsed.toLocaleDateString(undefined, {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

// --------------------------------------------------
// Reusable Stat Card
// --------------------------------------------------

interface StatCardProps {
  label: string;
  value: number;
  icon: React.ElementType;
  description: string;
}

function StatCard({
  label,
  value,
  icon: Icon,
  description,
}: StatCardProps) {
  return (
    <div className="group rounded-2xl border border-[var(--ifm-color-emphasis-200)] bg-[var(--ifm-background-surface-color)] p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--ifm-color-primary)]">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-xs font-semibold text-[var(--ifm-color-emphasis-600)]">
          {label}
        </span>

        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--ifm-color-primary)]/10 text-[var(--ifm-color-primary)]">
          <Icon size={18} strokeWidth={2} />
        </div>
      </div>

      <div className="text-3xl font-extrabold tracking-tight text-[var(--ifm-font-color-base)]">
        {value}
      </div>

      <p className="mb-0 mt-1 text-xs text-[var(--ifm-color-emphasis-600)]">
        {description}
      </p>
    </div>
  );
}

// --------------------------------------------------
// Bookmark Card
// --------------------------------------------------

interface BookmarkCardProps {
  bookmark: {
    id: string;
    title: string;
    url: string;
    type: BookmarkType;
    description?: string;
    addedAt: string;
  };
  onRemove: (id: string) => void;
}

function BookmarkCard({
  bookmark,
  onRemove,
}: BookmarkCardProps) {
  const Icon = getCategoryIcon(bookmark.type);

  return (
    <article className="group relative flex min-w-0 flex-col rounded-2xl border border-[var(--ifm-color-emphasis-200)] bg-[var(--ifm-background-surface-color)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--ifm-color-primary)] hover:shadow-lg">

      {/* Card Header */}
      <div className="mb-5 flex items-center justify-between gap-3">

        <div className="flex min-w-0 items-center gap-2">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--ifm-color-primary)]/10 text-[var(--ifm-color-primary)]">
            <Icon size={18} strokeWidth={2} />
          </div>

          <span className="truncate text-xs font-bold capitalize text-[var(--ifm-color-emphasis-700)]">
            {bookmark.type}
          </span>
        </div>

        <button
          type="button"
          onClick={() => onRemove(bookmark.id)}
          aria-label={`Remove ${bookmark.title} from bookmarks`}
          title="Remove bookmark"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-transparent text-[var(--ifm-color-emphasis-500)] transition hover:border-red-500/20 hover:bg-red-500/10 hover:text-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
        >
          <Trash2 size={16} />
        </button>
      </div>

      {/* Card Content */}
      <div className="flex-1">
        <h3 className="mb-2 text-base font-bold leading-snug text-[var(--ifm-font-color-base)] transition-colors group-hover:text-[var(--ifm-color-primary)]">
          {bookmark.title}
        </h3>

        <p className="mb-5 text-sm leading-6 text-[var(--ifm-color-emphasis-600)]">
          {bookmark.description ||
            "Continue exploring this learning resource on CodeHarborHub."}
        </p>
      </div>

      {/* Card Footer */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--ifm-color-emphasis-200)] pt-4">

        <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[var(--ifm-color-emphasis-600)]">
          <Clock3 size={13} />
          {formatDate(bookmark.addedAt)}
        </span>

        <Link
          to={bookmark.url}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--ifm-color-primary)] no-underline transition-all hover:gap-2.5 hover:no-underline"
        >
          Open resource
          <ArrowUpRight
            size={15}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </div>
    </article>
  );
}

// --------------------------------------------------
// Empty State
// --------------------------------------------------

function EmptyState({
  hasFilters,
  onReset,
}: {
  hasFilters: boolean;
  onReset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-[var(--ifm-color-emphasis-300)] bg-[var(--ifm-background-surface-color)] px-6 py-16 text-center">

      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--ifm-color-primary)]/10 text-[var(--ifm-color-primary)]">
        {hasFilters ? (
          <Search size={30} />
        ) : (
          <BookMarked size={30} />
        )}
      </div>

      <h3 className="mb-2 text-xl font-bold text-[var(--ifm-font-color-base)]">
        {hasFilters
          ? "No matching resources"
          : "Your library is waiting"}
      </h3>

      <p className="mb-6 max-w-md text-sm leading-6 text-[var(--ifm-color-emphasis-600)]">
        {hasFilters
          ? "We couldn't find any bookmarks matching your search or selected category. Try adjusting your filters."
          : "Save your favorite tutorials, lessons, roadmaps, and coding challenges to build your personal learning library."}
      </p>

      {hasFilters ? (
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center gap-2 rounded-xl border border-[var(--ifm-color-emphasis-300)] px-5 py-3 text-sm font-bold text-[var(--ifm-font-color-base)] transition hover:border-[var(--ifm-color-primary)] hover:text-[var(--ifm-color-primary)]"
        >
          <RotateCcw size={15} />
          Reset filters
        </button>
      ) : (
        <Link
          to="/tutorials/"
          className="inline-flex items-center gap-2 rounded-xl bg-[var(--ifm-color-primary)] px-5 py-3 text-sm font-bold text-white no-underline transition hover:opacity-90 hover:no-underline"
        >
          <BookOpen size={16} />
          Explore tutorials
          <ArrowUpRight size={15} />
        </Link>
      )}
    </div>
  );
}

// --------------------------------------------------
// Main Dashboard
// --------------------------------------------------

function BookmarksContent(): JSX.Element {
  const { learning, removeBookmark, isReady } = useLearning();

  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] =
    useState<"all" | BookmarkType>("all");

  const [sortBy, setSortBy] = useState<
    "newest" | "oldest" | "title"
  >("newest");

  const allBookmarks = learning?.bookmarks ?? [];

  // Search, filter and sort.
  const bookmarks = useMemo(() => {
    const query = search.trim().toLowerCase();

    const result = allBookmarks.filter((bookmark) => {
      const title = bookmark.title ?? "";
      const description = bookmark.description ?? "";
      const url = bookmark.url ?? "";

      const matchesSearch =
        title.toLowerCase().includes(query) ||
        description.toLowerCase().includes(query) ||
        url.toLowerCase().includes(query);

      const matchesFilter =
        activeFilter === "all" ||
        bookmark.type === activeFilter;

      return matchesSearch && matchesFilter;
    });

    return result.sort((a, b) => {
      if (sortBy === "title") {
        return a.title.localeCompare(b.title);
      }

      const first = Date.parse(a.addedAt) || 0;
      const second = Date.parse(b.addedAt) || 0;

      return sortBy === "newest"
        ? second - first
        : first - second;
    });
  }, [allBookmarks, search, activeFilter, sortBy]);

  const countByType = (type: BookmarkType) =>
    allBookmarks.filter((item) => item.type === type).length;

  const hasFilters =
    Boolean(search.trim()) || activeFilter !== "all";

  const resetFilters = () => {
    setSearch("");
    setActiveFilter("all");
    setSortBy("newest");
  };

  if (!isReady) {
    return (
      <DashboardLayout
        title="My Bookmarks"
        eyebrow="SAVED LEARNING"
      >
        <div className="flex flex-col items-center justify-center gap-4 py-20">
          <div className="h-9 w-9 animate-spin rounded-full border-4 border-[var(--ifm-color-primary)] border-t-transparent" />

          <p className="text-sm font-medium text-[var(--ifm-color-emphasis-600)]">
            Loading your personal library...
          </p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout
      title="My Bookmarks"
      eyebrow="SAVED LEARNING"
    >
      <div className="mx-auto max-w-7xl space-y-7">

        {/* ----------------------------------------
            HERO SECTION
        ---------------------------------------- */}

        <section className="relative overflow-hidden rounded-3xl border border-[var(--ifm-color-emphasis-200)] bg-[var(--ifm-background-surface-color)] p-6 shadow-sm sm:p-8">

          {/* Decorative elements */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[var(--ifm-color-primary)]/10 blur-3xl" />

          <div className="relative z-10">

            <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-center">

              <div className="max-w-2xl">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--ifm-color-primary)]/20 bg-[var(--ifm-color-primary)]/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[var(--ifm-color-primary)]">
                  <Sparkles size={14} />
                  CodeHarborHub Library
                </div>

                <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-[var(--ifm-font-color-base)] sm:text-4xl">
                  Your knowledge.
                  <br />
                  <span className="text-[var(--ifm-color-primary)]">
                    Always within reach.
                  </span>
                </h2>

                <p className="mb-0 max-w-xl text-sm leading-7 text-[var(--ifm-color-emphasis-600)] sm:text-base">
                  Your personal collection of saved tutorials,
                  programming lessons, roadmaps, challenges,
                  and developer resources. Pick up exactly
                  where you left off.
                </p>
              </div>

              <div className="flex h-24 w-24 shrink-0 items-center justify-center self-start rounded-3xl border border-[var(--ifm-color-primary)]/20 bg-[var(--ifm-color-primary)]/10 text-[var(--ifm-color-primary)] lg:self-center">
                <Library size={42} strokeWidth={1.5} />
              </div>
            </div>

            {/* Statistics */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">

              <StatCard
                label="Total bookmarks"
                value={allBookmarks.length}
                icon={Bookmark}
                description="Resources in your library"
              />

              <StatCard
                label="Tutorials saved"
                value={countByType("tutorial")}
                icon={BookOpen}
                description="Technical learning content"
              />

              <StatCard
                label="Challenges saved"
                value={countByType("challenge")}
                icon={Code2}
                description="Practice and improve skills"
              />

            </div>
          </div>
        </section>

        {/* ----------------------------------------
            SEARCH & FILTER TOOLBAR
        ---------------------------------------- */}

        <section className="space-y-4">

          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">

            <div className="relative w-full lg:max-w-md">
              <Search
                size={18}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--ifm-color-emphasis-500)]"
              />

              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search your bookmarks..."
                aria-label="Search saved resources"
                className="w-full rounded-xl border border-[var(--ifm-color-emphasis-300)] bg-[var(--ifm-background-surface-color)] py-3 pl-11 pr-11 text-sm text-[var(--ifm-font-color-base)] outline-none transition focus:border-[var(--ifm-color-primary)] focus:ring-2 focus:ring-[var(--ifm-color-primary)]/10"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-lg text-[var(--ifm-color-emphasis-500)] hover:bg-[var(--ifm-color-emphasis-200)]"
                >
                  <X size={15} />
                </button>
              )}
            </div>

            <div className="flex items-center gap-2">
              <SlidersHorizontal
                size={16}
                className="text-[var(--ifm-color-emphasis-600)]"
              />

              <label
                htmlFor="bookmark-sort"
                className="text-xs font-semibold text-[var(--ifm-color-emphasis-600)]"
              >
                Sort by
              </label>

              <select
                id="bookmark-sort"
                value={sortBy}
                onChange={(event) =>
                  setSortBy(event.target.value as typeof sortBy)
                }
                className="rounded-xl border border-[var(--ifm-color-emphasis-300)] bg-[var(--ifm-background-surface-color)] px-3 py-2.5 text-sm text-[var(--ifm-font-color-base)] outline-none focus:border-[var(--ifm-color-primary)]"
              >
                <option value="newest">Newest first</option>
                <option value="oldest">Oldest first</option>
                <option value="title">Title A–Z</option>
              </select>
            </div>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap items-center gap-2">

            {filters.map((filter) => {
              const active = activeFilter === filter.value;
              const Icon = filter.icon;

              const count =
                filter.value === "all"
                  ? allBookmarks.length
                  : countByType(filter.value);

              return (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => setActiveFilter(filter.value)}
                  aria-pressed={active}
                  className={[
                    "inline-flex items-center gap-2 rounded-xl border px-3.5 py-2.5",
                    "text-xs font-bold transition-all duration-200",
                    active
                      ? "border-[var(--ifm-color-primary)] bg-[var(--ifm-color-primary)] text-white shadow-sm"
                      : "border-[var(--ifm-color-emphasis-300)] bg-[var(--ifm-background-surface-color)] text-[var(--ifm-font-color-base)] hover:border-[var(--ifm-color-primary)] hover:text-[var(--ifm-color-primary)]",
                  ].join(" ")}
                >
                  <Icon size={15} />
                  {filter.label}

                  <span
                    className={[
                      "rounded-md px-1.5 py-0.5 text-[10px]",
                      active
                        ? "bg-white/20 text-white"
                        : "bg-[var(--ifm-color-emphasis-200)] text-[var(--ifm-color-emphasis-700)]",
                    ].join(" ")}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* ----------------------------------------
            RESULTS HEADER
        ---------------------------------------- */}

        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--ifm-color-emphasis-200)] pb-4">

          <div>
            <h3 className="mb-1 flex items-center gap-2 text-base font-bold text-[var(--ifm-font-color-base)]">
              <Bookmark size={17} className="text-[var(--ifm-color-primary)]" />
              Saved resources
            </h3>

            <p className="mb-0 text-xs text-[var(--ifm-color-emphasis-600)]">
              Showing {bookmarks.length} of {allBookmarks.length} resources
            </p>
          </div>

          {hasFilters && (
            <button
              type="button"
              onClick={resetFilters}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--ifm-color-primary)] hover:underline"
            >
              <RotateCcw size={14} />
              Reset filters
            </button>
          )}
        </div>

        {/* ----------------------------------------
            BOOKMARK GRID
        ---------------------------------------- */}

        {bookmarks.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">

            {bookmarks.map((bookmark) => (
              <BookmarkCard
                key={bookmark.id}
                bookmark={bookmark}
                onRemove={removeBookmark}
              />
            ))}

          </div>
        ) : (
          <EmptyState
            hasFilters={hasFilters}
            onReset={resetFilters}
          />
        )}

        {/* Footer */}
        {allBookmarks.length > 0 && (
          <div className="flex items-center justify-center gap-2 border-t border-[var(--ifm-color-emphasis-200)] pt-6 text-center text-xs text-[var(--ifm-color-emphasis-600)]">
            <Bookmark size={14} />
            Your learning library is saved in this browser.
          </div>
        )}

      </div>
    </DashboardLayout>
  );
}

// --------------------------------------------------
// Protected Dashboard Page
// --------------------------------------------------

export default function BookmarksPage(): JSX.Element {
  return (
    <ProtectedRoute>
      <BookmarksContent />
    </ProtectedRoute>
  );
}

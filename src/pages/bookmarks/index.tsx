
import React, { useMemo, useState } from "react";
// @ts-ignore
import Link from "@docusaurus/Link";
// @ts-ignore
import ProtectedRoute from "@site/src/components/auth/ProtectedRoute";
// @ts-ignore
import DashboardLayout from "@site/src/components/auth/DashboardLayout";
// @ts-ignore
import { useLearning } from "@site/src/context/LearningContext";
// import type { BookmarkType } from "@site/src/types/learning";

const filters: Array<{ label: string; value: string }> = [
  { label: "All", value: "all" },
  { label: "Tutorials", value: "tutorial" },
  { label: "Lessons", value: "lesson" },
  { label: "Roadmaps", value: "roadmap" },
  { label: "Challenges", value: "challenge" },
  { label: "Resources", value: "resource" },
];

function BookmarksContent() {
  const { learning, removeBookmark, isReady } = useLearning();

  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const bookmarks = useMemo(() => {
    return learning.bookmarks.filter((bookmark: any) => {
      const matchesSearch =
        bookmark.title.toLowerCase().includes(search.toLowerCase()) ||
        bookmark.description?.toLowerCase().includes(search.toLowerCase());

      const matchesFilter =
        activeFilter === "all" || bookmark.type === activeFilter;

      return matchesSearch && matchesFilter;
    });
  }, [learning.bookmarks, search, activeFilter]);

  if (!isReady) {
    return (
      <DashboardLayout title="My bookmarks" eyebrow="SAVED LEARNING">
        <p className="text-sm text-[var(--ifm-color-emphasis-600)]">
          Loading your saved resources...
        </p>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout title="My bookmarks" eyebrow="SAVED LEARNING">
      <div className="space-y-6">
        {/* Header */}
        <section className="rounded-3xl border border-[var(--ifm-color-emphasis-200)] bg-[var(--ifm-background-surface-color)] p-6 sm:p-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ifm-color-primary)]">
                YOUR PERSONAL LIBRARY
              </span>

              <h2 className="mb-2 mt-2 text-2xl font-bold text-[var(--ifm-font-color-base)]">
                Saved for later
              </h2>

              <p className="mb-0 text-sm text-[var(--ifm-color-emphasis-600)]">
                Keep useful tutorials, roadmaps, and coding resources
                together.
              </p>
            </div>

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--ifm-color-emphasis-100)] text-3xl">
              🔖
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            <div className="rounded-2xl bg-[var(--ifm-color-emphasis-100)] p-4">
              <p className="mb-1 text-xs text-[var(--ifm-color-emphasis-600)]">
                Total saved
              </p>
              <p className="mb-0 text-2xl font-extrabold text-[var(--ifm-font-color-base)]">
                {learning.bookmarks.length}
              </p>
            </div>

            <div className="rounded-2xl bg-[var(--ifm-color-emphasis-100)] p-4">
              <p className="mb-1 text-xs text-[var(--ifm-color-emphasis-600)]">
                Tutorials
              </p>
              <p className="mb-0 text-2xl font-extrabold text-[var(--ifm-font-color-base)]">
                {learning.bookmarks.filter((b) => b.type === "tutorial").length}
              </p>
            </div>

            <div className="col-span-2 rounded-2xl bg-[var(--ifm-color-emphasis-100)] p-4 sm:col-span-1">
              <p className="mb-1 text-xs text-[var(--ifm-color-emphasis-600)]">
                Challenges
              </p>
              <p className="mb-0 text-2xl font-extrabold text-[var(--ifm-font-color-base)]">
                {learning.bookmarks.filter((b) => b.type === "challenge").length}
              </p>
            </div>
          </div>
        </section>

        {/* Search */}
        <section className="space-y-4">
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search your saved resources..."
            aria-label="Search bookmarks"
            className="w-full rounded-xl border border-[var(--ifm-color-emphasis-300)] bg-[var(--ifm-background-surface-color)] px-4 py-3 text-sm text-[var(--ifm-font-color-base)] outline-none transition focus:border-[var(--ifm-color-primary)]"
          />

          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter.value}
                type="button"
                onClick={() => setActiveFilter(filter.value)}
                className="rounded-full border px-4 py-2 text-xs font-bold transition"
                style={{
                  borderColor:
                    activeFilter === filter.value
                      ? "var(--ifm-color-primary)"
                      : "var(--ifm-color-emphasis-300)",
                  background:
                    activeFilter === filter.value
                      ? "var(--ifm-color-primary)"
                      : "var(--ifm-background-surface-color)",
                  color:
                    activeFilter === filter.value
                      ? "#fff"
                      : "var(--ifm-font-color-base)",
                }}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </section>

        {/* Bookmark cards */}
        {bookmarks.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2">
            {bookmarks.map((bookmark: any) => (
              <article
                key={bookmark.id}
                className="rounded-2xl border border-[var(--ifm-color-emphasis-200)] bg-[var(--ifm-background-surface-color)] p-5 transition hover:-translate-y-1 hover:border-[var(--ifm-color-primary)] hover:shadow-lg"
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="rounded-full bg-[var(--ifm-color-emphasis-100)] px-3 py-1 text-xs font-bold capitalize text-[var(--ifm-color-emphasis-700)]">
                    {bookmark.type}
                  </span>

                  <button
                    type="button"
                    onClick={() => removeBookmark(bookmark.id)}
                    aria-label={`Remove ${bookmark.title}`}
                    title="Remove bookmark"
                    className="rounded-lg p-2 text-lg text-red-500 transition hover:bg-red-500/10"
                  >
                    ×
                  </button>
                </div>

                <h3 className="mb-2 text-lg font-bold text-[var(--ifm-font-color-base)]">
                  {bookmark.title}
                </h3>

                <p className="mb-4 min-h-10 text-sm leading-6 text-[var(--ifm-color-emphasis-600)]">
                  {bookmark.description || "Saved learning resource."}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--ifm-color-emphasis-200)] pt-4">
                  <span className="text-xs text-[var(--ifm-color-emphasis-600)]">
                    Saved {new Date(bookmark.addedAt).toLocaleDateString()}
                  </span>

                  <Link
                    to={bookmark.url}
                    className="text-sm font-bold no-underline hover:underline"
                    style={{ color: "var(--ifm-color-primary)" }}
                  >
                    Open resource →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-[var(--ifm-color-emphasis-300)] bg-[var(--ifm-background-surface-color)] px-6 py-14 text-center">
            <div className="mb-4 text-5xl">🔖</div>

            <h3 className="text-xl font-bold text-[var(--ifm-font-color-base)]">
              {search || activeFilter !== "all"
                ? "No matching bookmarks"
                : "Your library is waiting"}
            </h3>

            <p className="mx-auto mb-6 max-w-md text-sm leading-6 text-[var(--ifm-color-emphasis-600)]">
              {search || activeFilter !== "all"
                ? "Try another search or select a different category."
                : "Bookmark tutorials, programming lessons, roadmaps, and challenges to find them here."}
            </p>

            <Link
              to="/tutorials"
              className="inline-flex rounded-xl px-5 py-3 text-sm font-bold text-white no-underline hover:no-underline"
              style={{ background: "var(--ifm-color-primary)" }}
            >
              Explore tutorials →
            </Link>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

export default function BookmarksPage() {
  return (
    <ProtectedRoute>
      <BookmarksContent />
    </ProtectedRoute>
  );
}

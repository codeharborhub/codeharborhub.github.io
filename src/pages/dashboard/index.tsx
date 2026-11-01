
import React, { useMemo, useState } from "react";
// @ts-ignore
import Link from "@docusaurus/Link";
// @ts-ignore
import ProtectedRoute from "@site/src/components/auth/ProtectedRoute";
// @ts-ignore
import DashboardLayout from "@site/src/components/auth/DashboardLayout";

const learningTasks = [
  {
    id: "explore",
    title: "Explore the tutorial library",
    description: "Find a technology you want to learn.",
    href: "/tutorial/",
    action: "Browse tutorials",
  },
  {
    id: "roadmap",
    title: "Choose a learning roadmap",
    description: "Build a structured learning plan.",
    href: "/roadmap",
    action: "View roadmaps",
  },
  {
    id: "project",
    title: "Explore developer projects",
    description: "Learn by exploring practical projects.",
    href: "/projects",
    action: "Explore projects",
  },
];

const resources = [
  {
    number: "01",
    icon: "▤",
    title: "Tutorial library",
    description:
      "Learn programming languages, frameworks, tools, and core computer science concepts.",
    href: "/tutorial/",
    link: "Start learning",
    category: "LEARN",
  },
  {
    number: "02",
    icon: "⌁",
    title: "Learning roadmaps",
    description:
      "Follow structured learning paths and understand what to study next.",
    href: "/roadmap",
    link: "Explore paths",
    category: "PLAN",
  },
  {
    number: "03",
    icon: "◈",
    title: "Developer projects",
    description:
      "Discover practical projects and turn your knowledge into experience.",
    href: "/projects",
    link: "Find projects",
    category: "BUILD",
  },
  {
    number: "04",
    icon: "⌘",
    title: "Open-source community",
    description:
      "Explore CodeHarborHub repositories and discover ways to contribute.",
    href: "https://github.com/CodeHarborHub",
    link: "Visit GitHub",
    category: "CONNECT",
  },
];

function DashboardContent() {
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);
  const [focusMode, setFocusMode] = useState(false);

  const completion = useMemo(
    () => Math.round((completedTasks.length / learningTasks.length) * 100),
    [completedTasks]
  );

  function toggleTask(taskId: string) {
    setCompletedTasks((current) =>
      current.includes(taskId)
        ? current.filter((id) => id !== taskId)
        : [...current, taskId]
    );
  }

  return (
    <DashboardLayout
      title="Your dashboard"
      eyebrow="YOUR DEVELOPER WORKSPACE"
    >
      <div className="space-y-6">

        {/* WELCOME HERO */}
        <section
          className="relative isolate overflow-hidden rounded-3xl p-6 text-white shadow-xl sm:p-9"
          style={{
            background:
              "linear-gradient(120deg, var(--ifm-color-primary), color-mix(in srgb, var(--ifm-color-primary) 60%, #101827))",
          }}
        >
          {/* Decorative shapes */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-24 h-72 w-72 rounded-full border border-white/15"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-2 -top-14 h-52 w-52 rounded-full border border-white/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 right-1/4 h-64 w-64 rounded-full bg-white/10 blur-3xl"
          />

          <div className="relative z-10 grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[10px] font-black tracking-[0.16em]">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300" />
                LEARN · BUILD · SHARE
              </div>

              <h2 className="mb-4 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Your next chapter
                <br />
                starts with a line of code.
              </h2>

              <p className="mb-7 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
                Explore new technologies, practice your skills, and create
                something meaningful. Your developer journey continues here.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  to="/tutorial/"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-extrabold text-slate-900 no-underline shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  Explore tutorials
                  <span>→</span>
                </Link>

                <Link
                  to="/roadmap"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-bold text-white no-underline transition-colors hover:bg-white/20"
                >
                  View roadmaps
                  <span>↗</span>
                </Link>
              </div>
            </div>

            {/* Hero visual */}
            <div className="hidden md:flex md:items-center md:justify-center">
              <div className="relative flex h-44 w-44 items-center justify-center rounded-[2.5rem] border border-white/20 bg-white/10 shadow-2xl backdrop-blur-sm lg:h-52 lg:w-52">
                <div className="text-center">
                  <div className="text-6xl font-black tracking-tighter lg:text-7xl">
                    CH<span className="text-emerald-300">.</span>
                  </div>
                  <p className="mt-2 text-[10px] font-bold tracking-[0.25em] text-white/70">
                    KEEP BUILDING
                  </p>
                </div>

                <div className="absolute -right-3 top-5 rounded-xl border border-white/20 bg-white/15 px-3 py-2 text-xs font-bold backdrop-blur-md">
                  {"</>"} Code
                </div>

                <div className="absolute -bottom-3 -left-5 rounded-xl border border-white/20 bg-white/15 px-3 py-2 text-xs font-bold backdrop-blur-md">
                  ✦ Create
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WORKSPACE STATUS */}
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">

          <article className="rounded-2xl border border-[var(--ifm-color-emphasis-200)] bg-[var(--ifm-background-surface-color)] p-5 transition-all hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-5 flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--ifm-color-emphasis-200)] text-xl" style={{ color: "var(--ifm-color-primary)" }}>
                ◉
              </div>
              <span className="rounded-full bg-[var(--ifm-color-emphasis-100)] px-3 py-1 text-[10px] font-bold text-[var(--ifm-color-emphasis-700)]">
                GET STARTED
              </span>
            </div>

            <p className="mb-1 text-3xl font-black text-[var(--ifm-font-color-base)]">
              {completedTasks.length}/{learningTasks.length}
            </p>
            <h3 className="mb-1 text-sm font-bold text-[var(--ifm-font-color-base)]">
              Starter tasks completed
            </h3>
            <p className="mb-0 text-xs leading-5 text-[var(--ifm-color-emphasis-600)]">
              Complete your suggested first steps.
            </p>
          </article>

          <article className="rounded-2xl border border-[var(--ifm-color-emphasis-200)] bg-[var(--ifm-background-surface-color)] p-5 transition-all hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-5 flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--ifm-color-emphasis-200)] text-xl" style={{ color: "var(--ifm-color-primary)" }}>
                ◷
              </div>
              <span className="rounded-full bg-[var(--ifm-color-emphasis-100)] px-3 py-1 text-[10px] font-bold text-[var(--ifm-color-emphasis-700)]">
                YOUR PACE
              </span>
            </div>

            <p className="mb-1 text-3xl font-black text-[var(--ifm-font-color-base)]">
              {completion}%
            </p>
            <h3 className="mb-1 text-sm font-bold text-[var(--ifm-font-color-base)]">
              Getting started progress
            </h3>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-[var(--ifm-color-emphasis-200)]">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${completion}%`,
                  background: "var(--ifm-color-primary)",
                }}
              />
            </div>
          </article>

          <article className="rounded-2xl border border-[var(--ifm-color-emphasis-200)] bg-[var(--ifm-background-surface-color)] p-5 transition-all hover:-translate-y-1 hover:shadow-lg sm:col-span-2 xl:col-span-1">
            <div className="mb-5 flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--ifm-color-emphasis-200)] text-xl" style={{ color: "var(--ifm-color-primary)" }}>
                ◈
              </div>
              <span className="rounded-full bg-amber-500/10 px-3 py-1 text-[10px] font-bold text-amber-600">
                LOCAL DEMO
              </span>
            </div>

            <p className="mb-1 text-3xl font-black text-[var(--ifm-font-color-base)]">
              Active
            </p>
            <h3 className="mb-1 text-sm font-bold text-[var(--ifm-font-color-base)]">
              Browser session
            </h3>
            <p className="mb-0 text-xs leading-5 text-[var(--ifm-color-emphasis-600)]">
              Your demo session is available in this browser.
            </p>
          </article>
        </section>

        {/* MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.4fr_0.8fr]">

          {/* QUICK START CHECKLIST */}
          <section className="rounded-2xl border border-[var(--ifm-color-emphasis-200)] bg-[var(--ifm-background-surface-color)] p-5 sm:p-7">
            <div className="mb-6 flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="mb-2 text-[10px] font-black uppercase tracking-[0.18em]" style={{ color: "var(--ifm-color-primary)" }}>
                  YOUR FIRST STEPS
                </p>
                <h2 className="mb-1 text-xl font-black text-[var(--ifm-font-color-base)]">
                  Quick-start checklist
                </h2>
                <p className="mb-0 text-xs text-[var(--ifm-color-emphasis-600)]">
                  A simple guide to getting started with CodeHarborHub.
                </p>
              </div>

              <span className="rounded-full bg-[var(--ifm-color-emphasis-100)] px-3 py-1.5 text-xs font-bold text-[var(--ifm-color-emphasis-700)]">
                {completedTasks.length} of 3 done
              </span>
            </div>

            <div className="mb-6 h-2 overflow-hidden rounded-full bg-[var(--ifm-color-emphasis-200)]">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${completion}%`,
                  background: "var(--ifm-color-primary)",
                }}
              />
            </div>

            <div className="space-y-3">
              {learningTasks.map((task, index) => {
                const done = completedTasks.includes(task.id);

                return (
                  <div
                    key={task.id}
                    className={`flex flex-col gap-3 rounded-xl border p-4 transition-all sm:flex-row sm:items-center sm:justify-between ${
                      done
                        ? "border-[var(--ifm-color-primary)] bg-[var(--ifm-color-emphasis-100)]"
                        : "border-[var(--ifm-color-emphasis-200)]"
                    }`}
                  >
                    <label className="flex min-w-0 cursor-pointer items-start gap-3">
                      <input
                        type="checkbox"
                        checked={done}
                        onChange={() => toggleTask(task.id)}
                        className="mt-1 h-4 w-4 shrink-0 cursor-pointer"
                        style={{ accentColor: "var(--ifm-color-primary)" }}
                      />

                      <span className="min-w-0">
                        <span className={`block text-sm font-bold ${
                          done
                            ? "text-[var(--ifm-color-emphasis-600)] line-through"
                            : "text-[var(--ifm-font-color-base)]"
                        }`}>
                          {index + 1}. {task.title}
                        </span>
                        <span className="mt-1 block text-xs leading-5 text-[var(--ifm-color-emphasis-600)]">
                          {task.description}
                        </span>
                      </span>
                    </label>

                    <Link
                      to={task.href}
                      className="inline-flex shrink-0 items-center gap-2 text-xs font-bold no-underline"
                      style={{ color: "var(--ifm-color-primary)" }}
                    >
                      {task.action} →
                    </Link>
                  </div>
                );
              })}
            </div>

            {completion === 100 && (
              <div className="mt-5 rounded-xl border border-[var(--ifm-color-primary)] bg-[var(--ifm-color-emphasis-100)] p-4">
                <p className="mb-1 text-sm font-bold" style={{ color: "var(--ifm-color-primary)" }}>
                  ✨ Your starter checklist is complete!
                </p>
                <p className="mb-0 text-xs text-[var(--ifm-color-emphasis-700)]">
                  You are ready to explore, learn, and build with CodeHarborHub.
                </p>
              </div>
            )}
          </section>

          {/* FOCUS PANEL */}
          <section className="flex flex-col rounded-2xl border border-[var(--ifm-color-emphasis-200)] bg-[var(--ifm-background-surface-color)] p-5 sm:p-7">
            <div className="mb-5">
              <p className="mb-2 text-[10px] font-black uppercase tracking-[0.18em]" style={{ color: "var(--ifm-color-primary)" }}>
                STAY PRODUCTIVE
              </p>
              <h2 className="mb-1 text-xl font-black text-[var(--ifm-font-color-base)]">
                Focus workspace
              </h2>
              <p className="mb-0 text-xs leading-5 text-[var(--ifm-color-emphasis-600)]">
                Set an intention for your next learning session.
              </p>
            </div>

            <div className="flex flex-1 flex-col items-center justify-center rounded-2xl bg-[var(--ifm-background-color)] px-4 py-7 text-center">
              <div
                className="mb-4 flex h-20 w-20 items-center justify-center rounded-full border-4 text-3xl"
                style={{
                  borderColor: "var(--ifm-color-primary)",
                  color: "var(--ifm-color-primary)",
                  background: "var(--ifm-background-surface-color)",
                }}
              >
                {focusMode ? "✦" : "⌘"}
              </div>

              <h3 className="mb-2 text-lg font-black text-[var(--ifm-font-color-base)]">
                {focusMode ? "Focus mode is on" : "Ready to focus?"}
              </h3>

              <p className="mb-5 max-w-xs text-xs leading-5 text-[var(--ifm-color-emphasis-600)]">
                {focusMode
                  ? "Your intention is set. Choose a tutorial or project and get started."
                  : "Reduce distractions and give your next learning task your attention."}
              </p>

              <button
                type="button"
                onClick={() => setFocusMode((current) => !current)}
                className="rounded-xl px-5 py-3 text-xs font-extrabold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
                style={{ background: "var(--ifm-color-primary)" }}
              >
                {focusMode ? "Turn off focus mode" : "Enable focus mode"}
              </button>
            </div>

            <p className="mb-0 mt-4 text-center text-[10px] text-[var(--ifm-color-emphasis-600)]">
              This is a visual focus toggle, not a timed productivity tracker.
            </p>
          </section>
        </div>

        {/* RESOURCE CARDS */}
        <section>
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="mb-2 text-[10px] font-black uppercase tracking-[0.18em]" style={{ color: "var(--ifm-color-primary)" }}>
                DISCOVER CODEHARBORHUB
              </p>
              <h2 className="mb-1 text-xl font-black text-[var(--ifm-font-color-base)]">
                Explore your workspace
              </h2>
              <p className="mb-0 text-xs text-[var(--ifm-color-emphasis-600)]">
                Everything you need to learn, build, and grow.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {resources.map((resource) => (
              <article
                key={resource.number}
                className="group rounded-2xl border border-[var(--ifm-color-emphasis-200)] bg-[var(--ifm-background-surface-color)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--ifm-color-primary)] hover:shadow-xl"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl text-xl transition-transform group-hover:scale-110"
                    style={{
                      color: "var(--ifm-color-primary)",
                      background: "var(--ifm-color-emphasis-200)",
                    }}
                  >
                    {resource.icon}
                  </div>

                  <span className="text-[10px] font-black tracking-[0.15em] text-[var(--ifm-color-emphasis-600)]">
                    {resource.category}
                  </span>
                </div>

                <h3 className="mb-2 text-base font-black text-[var(--ifm-font-color-base)]">
                  {resource.title}
                </h3>

                <p className="mb-5 min-h-12 text-xs leading-6 text-[var(--ifm-color-emphasis-600)]">
                  {resource.description}
                </p>

                <Link
                  to={resource.href}
                  className="inline-flex items-center gap-2 text-xs font-extrabold no-underline"
                  style={{ color: "var(--ifm-color-primary)" }}
                >
                  {resource.link}
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* DEMO ACCOUNT NOTICE */}
        <section className="flex flex-col gap-4 rounded-2xl border border-amber-500/30 bg-amber-500/5 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-xl text-amber-600">
              ⚠
            </div>

            <div>
              <p className="mb-1 text-sm font-black text-[var(--ifm-font-color-base)]">
                You are using a demo account
              </p>
              <p className="mb-0 max-w-2xl text-xs leading-6 text-[var(--ifm-color-emphasis-700)]">
                Your account and session are stored locally in this browser.
                This prototype does not provide secure server-side
                authentication, cloud synchronization, or persistent
                server-backed learning progress.
              </p>
            </div>
          </div>

          <Link
            to="/settings/security"
            className="inline-flex shrink-0 items-center justify-center rounded-xl border border-amber-500/40 px-4 py-3 text-xs font-bold text-amber-700 no-underline transition-colors hover:bg-amber-500/10 dark:text-amber-400"
          >
            Review security →
          </Link>
        </section>

        {/* BOTTOM CTA */}
        <footer className="pb-4 pt-2 text-center">
          <p className="mb-1 text-xs font-bold text-[var(--ifm-color-emphasis-700)]">
            Keep learning. Keep building. Keep sharing.
          </p>
          <p className="mb-0 text-[10px] text-[var(--ifm-color-emphasis-600)]">
            CodeHarborHub — Level Up Skills with CodeHarborHub.
          </p>
        </footer>
      </div>
    </DashboardLayout>
  );
}

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  );
}

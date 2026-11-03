import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import { useLocation } from "@docusaurus/router";
import {
  ArrowUpRight,
  BookOpen,
  Bookmark,
  ChevronRight,
  Code2,
  ExternalLink,
  FolderKanban,
  LayoutDashboard,
  LogOut,
  Menu,
  Moon,
  Settings,
  ShieldCheck,
  Sparkles,
  Sun,
  UserRound,
  X,
} from "lucide-react";

import { useAuth } from "@site/src/context/AuthContext";

type DashboardLayoutProps = {
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
};

const workspaceNavigation = [
  {
    label: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "My profile",
    href: "/profile",
    icon: UserRound,
  },
  {
    label: "Bookmarks",
    href: "/bookmarks",
    icon: Bookmark,
  },
];

const accountNavigation = [
  {
    label: "Account settings",
    href: "/settings/account",
    icon: Settings,
  },
  {
    label: "Security",
    href: "/settings/security",
    icon: ShieldCheck,
  },
];

const exploreNavigation = [
  {
    label: "Tutorials",
    href: "/tutorials/",
    icon: BookOpen,
  },
  {
    label: "Learning paths",
    href: "/roadmap",
    icon: Code2,
  },
  {
    label: "Projects",
    href: "/projects",
    icon: FolderKanban,
  },
];

function getInitials(name?: string) {
  if (!name?.trim()) return "CH";

  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");
}

function getGreeting() {
  const hour = new Date().getHours();

  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";

  return "Good evening";
}

function normalizePath(path: string) {
  return path.replace(/\/+$/, "") || "/";
}

function isRouteActive(currentPath: string, href: string) {
  const current = normalizePath(currentPath);
  const target = normalizePath(href);

  return current === target || current.startsWith(`${target}/`);
}

export default function DashboardLayout({
  title,
  eyebrow = "CODEHARBORHUB WORKSPACE",
  children,
}: DashboardLayoutProps) {
  const { user, logout } = useAuth();
  const location = useLocation();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [signingOut, setSigningOut] = useState(false);

  const displayName = user?.name?.trim() || "Developer";
  const initials = getInitials(user?.name);
  const greeting = getGreeting();

  const currentDate = new Date().toLocaleDateString([], {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // Close the mobile drawer when navigating or pressing Escape.
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  function handleSignOut() {
    if (signingOut) return;

    setSigningOut(true);

    try {
      logout();
      window.location.assign("/auth/login");
    } catch {
      setSigningOut(false);
    }
  }

  const renderNavigation = (
    items: typeof workspaceNavigation,
    label: string
  ) => (
    <div className="space-y-1">
      <p className="mb-2 px-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--ifm-color-emphasis-600)]">
        {label}
      </p>

      {items.map((item) => {
        const active = isRouteActive(
          location.pathname,
          item.href
        );

        const Icon = item.icon;

        return (
          <Link
            key={item.href}
            to={item.href}
            aria-current={active ? "page" : undefined}
            className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold no-underline hover:no-underline transition-all duration-200 ${
              active
                ? "bg-[var(--ifm-color-primary)] text-white shadow-md shadow-blue-500/15 hover:text-white"
                : "text-[var(--ifm-color-emphasis-700)] hover:bg-[var(--ifm-color-emphasis-100)] hover:text-[var(--ifm-font-color-base)]"
            }`}
          >
            <Icon
              size={18}
              strokeWidth={active ? 2.4 : 1.8}
              className="shrink-0"
            />

            <span className="flex-1">{item.label}</span>

            {active && (
              <ChevronRight
                size={15}
                className="shrink-0 opacity-80"
              />
            )}
          </Link>
        );
      })}
    </div>
  );

  const sidebar = (
    <div className="flex h-full flex-col">
      {/* Brand */}
      <Link
        to="/dashboard"
        className="mb-8 flex items-center gap-3 px-2 pt-2 no-underline"
        aria-label="CodeHarborHub workspace home"
      >
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-sm font-black text-white shadow-lg"
          style={{
            background:
              "linear-gradient(135deg, var(--ifm-color-primary), #1764b5)",
          }}
        >
          CH
        </div>

        <div className="min-w-0">
          <p className="mb-0 text-base font-extrabold tracking-tight text-[var(--ifm-font-color-base)]">
            CodeHarborHub
          </p>

          <p className="mb-0 text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--ifm-color-emphasis-600)]">
            Developer workspace
          </p>
        </div>
      </Link>

      {/* Main navigation */}
      <nav
        aria-label="Workspace navigation"
        className="flex-1 space-y-7"
      >
        {renderNavigation(workspaceNavigation, "Workspace")}

        {renderNavigation(accountNavigation, "Preferences")}

        {renderNavigation(exploreNavigation, "Explore")}
      </nav>

      {/* Community card */}
      <div className="mt-8 rounded-2xl border border-[var(--ifm-color-emphasis-200)] bg-[var(--ifm-background-color)] p-4">
        <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--ifm-color-primary)]/10 text-[var(--ifm-color-primary)]">
          <Sparkles size={18} />
        </div>

        <p className="mb-1 text-sm font-bold text-[var(--ifm-font-color-base)]">
          Keep learning
        </p>

        <p className="mb-3 text-xs leading-5 text-[var(--ifm-color-emphasis-700)]">
          Explore tutorials, build projects, and grow your developer skills.
        </p>

        <Link
          to="/tutorials/"
          className="inline-flex items-center gap-1.5 text-xs font-bold no-underline hover:no-underline"
          style={{ color: "var(--ifm-color-primary)" }}
        >
          Explore tutorials
          <ArrowUpRight size={14} />
        </Link>
      </div>

      {/* Session status */}
      <div className="mt-5 rounded-xl border border-[var(--ifm-color-emphasis-200)] px-3 py-3">
        <div className="mb-1.5 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-amber-500" />

          <span className="text-xs font-bold text-[var(--ifm-font-color-base)]">
            Demo environment
          </span>
        </div>

        <p className="mb-0 text-[11px] leading-5 text-[var(--ifm-color-emphasis-600)]">
          Your session is stored locally in this browser.
        </p>
      </div>

      {/* Sign out */}
      <button
        type="button"
        onClick={handleSignOut}
        disabled={signingOut}
        className="mt-4 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-red-500 transition-colors hover:bg-red-500/10 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <LogOut size={18} />

        {signingOut ? "Signing out..." : "Sign out"}
      </button>
    </div>
  );

  return (
    <Layout title={title}>
      <main className="relative min-h-screen overflow-hidden bg-[var(--ifm-background-color)] text-[var(--ifm-font-color-base)]">
        {/* Background decoration */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-72 opacity-[0.12]"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, var(--ifm-color-primary), transparent 70%)",
          }}
        />

        <div className="relative mx-auto w-full max-w-[1600px] px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
          {/* Header */}
          <header className="mb-6 flex min-h-14 items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-3">
              {/* Mobile menu */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open workspace navigation"
                aria-expanded={mobileMenuOpen}
                className="flex h-10 w-12 shrink-0 items-center justify-center rounded-xl border-none bg-[var(--ifm-background-surface-color)] transition-colors hover:border-[var(--ifm-color-primary)] lg:hidden"
              >
                <Menu size={20} />
              </button>

              <div className="min-w-0 lg:hidden">
                <p className="mb-0 truncate text-sm font-extrabold">
                  CodeHarborHub
                </p>
                <p className="mb-0 text-[10px] text-[var(--ifm-color-emphasis-600)]">
                  Developer workspace
                </p>
              </div>

              <div className="hidden lg:block">
                <p className="mb-0 text-xs font-semibold text-[var(--ifm-color-emphasis-600)]">
                  Workspace / {title}
                </p>
              </div>
            </div>

            {/* Header actions */}
            <div className="flex shrink-0 items-center gap-2 sm:gap-3">
              {/* <Link
                to="/"
                className="hidden items-center gap-2 rounded-xl border border-[var(--ifm-color-emphasis-200)] bg-[var(--ifm-background-surface-color)] px-3 py-2 text-xs font-semibold text-[var(--ifm-font-color-base)] no-underline transition-colors hover:border-[var(--ifm-color-primary)] sm:inline-flex"
              >
                <ExternalLink size={14} />
                Visit website
              </Link> */}

              <div className="flex items-center gap-2 rounded-xl border border-[var(--ifm-color-emphasis-200)] bg-[var(--ifm-background-surface-color)] py-1.5 pl-1.5 pr-2 sm:pr-3">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-xs font-black text-white"
                  style={{
                    background: "var(--ifm-color-primary)",
                  }}
                >
                  {initials}
                </div>

                <div className="hidden min-w-0 sm:block">
                  <p className="mb-0 max-w-32 truncate text-xs font-bold">
                    {displayName}
                  </p>
                  <p className="mb-0 text-[10px] text-[var(--ifm-color-emphasis-600)]">
                    Workspace member
                  </p>
                </div>
              </div>
            </div>
          </header>

          {/* Workspace layout */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[250px_minmax(0,1fr)] xl:gap-8">
            {/* Desktop sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-6 rounded-2xl border border-[var(--ifm-color-emphasis-200)] bg-[var(--ifm-background-surface-color)] p-4 shadow-sm">
                {sidebar}
              </div>
            </aside>

            {/* Mobile navigation drawer */}
            {mobileMenuOpen && (
              <button
                type="button"
                aria-label="Close navigation backdrop"
                onClick={() => setMobileMenuOpen(false)}
                className="fixed inset-0 z-40 cursor-default bg-black/50 backdrop-blur-[2px] lg:hidden"
              />
            )}

            <aside
              id="mobile-workspace-navigation"
              aria-label="Mobile workspace navigation"
              aria-hidden={!mobileMenuOpen}
              className={`fixed inset-y-0 left-0 z-50 w-[min(86vw,320px)] overflow-y-auto border-r border-[var(--ifm-color-emphasis-200)] bg-[var(--ifm-background-surface-color)] p-4 shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
                mobileMenuOpen
                  ? "translate-x-0"
                  : "-translate-x-full"
              }`}
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--ifm-color-emphasis-600)]">
                  Navigation
                </span>

                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close navigation"
                  className="flex h-9 w-9 items-center justify-center rounded-xl hover:bg-[var(--ifm-color-emphasis-100)]"
                >
                  <X size={19} />
                </button>
              </div>

              {sidebar}
            </aside>

            {/* Main content */}
            <section className="min-w-0">
              {/* Page heading */}
              <div className="mb-6 rounded-2xl border border-[var(--ifm-color-emphasis-200)] bg-[var(--ifm-background-surface-color)] p-5 shadow-sm sm:p-7">
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <span
                    className="rounded-full px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.14em]"
                    style={{
                      border: "1px solid var(--ifm-color-primary-lightest)",
                      color: "var(--ifm-color-primary-dark)",
                    }}
                  >
                    {eyebrow}
                  </span>

                  <span className="text-xs text-[var(--ifm-color-emphasis-600)]">
                    <span className="mx-1">/</span>
                    {currentDate}
                  </span>
                </div>

                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                  <div className="min-w-0">
                    <h1 className="mb-2 break-words text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl">
                      {title}
                    </h1>

                    <p className="mb-0 text-sm leading-6 text-[var(--ifm-color-emphasis-700)] sm:text-base">
                      {greeting}, {displayName}. Make today count.
                    </p>
                  </div>

                  <div className="hidden shrink-0 items-center gap-2 rounded-xl bg-[var(--ifm-color-emphasis-100)] px-3 py-2 text-xs font-semibold text-[var(--ifm-color-emphasis-700)] md:flex">
                    <Sparkles
                      size={15}
                      style={{ color: "var(--ifm-color-primary)" }}
                    />
                    Your learning workspace
                  </div>
                </div>
              </div>

              {/* Page content */}
              <div className="min-w-0">{children}</div>

           </section>
          </div>
        </div>
      </main>
    </Layout>
  );
}
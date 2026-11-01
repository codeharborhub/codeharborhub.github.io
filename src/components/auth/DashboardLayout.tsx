import React, { useEffect, useState } from "react";
// @ts-ignore
import Layout from "@theme/Layout";
// @ts-ignore
import Link from "@docusaurus/Link";
// @ts-ignore
import { useAuth } from "@site/src/context/AuthContext";

type DashboardLayoutProps = {
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
};

const navigation = [
  { label: "Overview", href: "/dashboard", icon: "⌂" },
  { label: "My profile", href: "/profile", icon: "◎" },
  { label: "Account", href: "/settings/account", icon: "⚙" },
  { label: "Security", href: "/settings/security", icon: "◇" },
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

function getGreeting(hour: number) {
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
}

export default function DashboardLayout({
  title,
  eyebrow = "CODEHARBORHUB WORKSPACE",
  children,
}: DashboardLayoutProps) {
  const { user, logout } = useAuth();

  const [now, setNow] = useState(() => new Date());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [signingOut, setSigningOut] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const displayName = user?.name?.trim() || "Developer";
  const initials = getInitials(user?.name);
  const greeting = getGreeting(now.getHours());

  function signOut() {
    if (signingOut) return;

    setSigningOut(true);

    try {
      logout();
      window.location.assign("/auth/login");
    } catch {
      setSigningOut(false);
    }
  }

  return (
    <Layout title={title}>
      <main className="min-h-screen bg-[var(--ifm-background-color)] text-[var(--ifm-font-color-base)]">
        {/* Workspace background decoration */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-x-0 top-0 -z-0 h-80 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, var(--ifm-color-primary), transparent 70%)",
            maskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />

        <div className="relative z-10 mx-auto w-full max-w-[1500px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          {/* TOP BAR */}
          <header className="mb-7 flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/dashboard"
              className="group flex items-center gap-3 no-underline"
              aria-label="CodeHarborHub dashboard home"
            >
              <div
                className="flex h-11 w-11 items-center justify-center rounded-2xl text-sm font-black text-white shadow-lg transition-transform group-hover:rotate-3"
                style={{ background: "var(--ifm-color-primary)" }}
              >
                CH
              </div>

              <div>
                <div className="text-base font-black tracking-tight text-[var(--ifm-font-color-base)]">
                  CodeHarborHub
                </div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--ifm-color-emphasis-600)]">
                  Developer workspace
                </div>
              </div>
            </Link>

            <div className="flex items-center gap-2 sm:gap-3">
              {/* Live clock */}
              <div className="hidden rounded-xl border border-[var(--ifm-color-emphasis-200)] bg-[var(--ifm-background-surface-color)] px-4 py-2.5 sm:block text-center">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--ifm-color-emphasis-600)]">
                  Local time
                </p>
                <p className="text-sm font-bold tabular-nums text-[var(--ifm-font-color-base)]">
                  {now.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                  })}
                </p>
              </div>

              {/* User identity */}
              <div className="flex items-center gap-2 rounded-xl border border-[var(--ifm-color-emphasis-200)] bg-[var(--ifm-background-surface-color)] py-1.5 pl-1.5 pr-4">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-xs font-black text-white"
                  style={{ background: "var(--ifm-color-primary)" }}
                >
                  {initials}
                </div>

                <div className="hidden min-w-0 sm:block">
                  <p className="max-w-32 truncate text-xs font-bold text-[var(--ifm-font-color-base)]">
                    {displayName}
                  </p>
                  <p className="text-[10px] text-[var(--ifm-color-emphasis-600)]">
                    Demo member
                  </p>
                </div>
              </div>

              {/* Mobile menu toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen((open) => !open)}
                aria-label={
                  mobileMenuOpen ? "Close navigation" : "Open navigation"
                }
                aria-expanded={mobileMenuOpen}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--ifm-color-emphasis-300)] bg-[var(--ifm-background-surface-color)] text-lg transition-colors hover:border-[var(--ifm-color-primary)] lg:hidden"
              >
                {mobileMenuOpen ? "×" : "☰"}
              </button>
            </div>
          </header>

          {/* WORKSPACE GRID */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[235px_minmax(0,1fr)]">
            {/* SIDEBAR */}
            <aside className="h-fit lg:sticky lg:top-6">
              <div className="rounded-2xl border border-[var(--ifm-color-emphasis-200)] bg-[var(--ifm-background-surface-color)] p-3">
                <div className="mb-3 px-3 pt-3">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--ifm-color-emphasis-600)]">
                    Workspace
                  </p>
                </div>

                <nav
                  aria-label="Account navigation"
                  className={`${
                    mobileMenuOpen ? "flex" : "hidden"
                  } flex-col gap-1 lg:flex`}
                >
                  {navigation.map((item) => {
                    const active =
                      item.href === "/dashboard" &&
                      title.toLowerCase().includes("dashboard");

                    return (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        aria-current={active ? "page" : undefined}
                        className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold no-underline transition-all ${
                          active
                            ? "text-white shadow-sm"
                            : "text-[var(--ifm-color-emphasis-700)] hover:bg-[var(--ifm-color-emphasis-100)] hover:text-[var(--ifm-font-color-base)]"
                        }`}
                        style={
                          active
                            ? { background: "var(--ifm-color-primary)" }
                            : undefined
                        }
                      >
                        <span className="w-5 text-center text-base">
                          {item.icon}
                        </span>
                        {item.label}
                        {active && (
                          <span className="ml-auto text-xs opacity-80">●</span>
                        )}
                      </Link>
                    );
                  })}
                </nav>

                <div className="my-4 border-t border-[var(--ifm-color-emphasis-200)]" />

                <p className="mb-2 px-3 text-[10px] font-black uppercase tracking-[0.2em] text-[var(--ifm-color-emphasis-600)]">
                  Explore
                </p>

                <div className="flex flex-col gap-1">
                  <Link
                    to="/tutorial/"
                    className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-[var(--ifm-color-emphasis-700)] no-underline transition-colors hover:bg-[var(--ifm-color-emphasis-100)] hover:text-[var(--ifm-font-color-base)]"
                  >
                    <span className="w-5 text-center">▤</span>
                    Tutorials
                  </Link>

                  <Link
                    to="/roadmap"
                    className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-[var(--ifm-color-emphasis-700)] no-underline transition-colors hover:bg-[var(--ifm-color-emphasis-100)] hover:text-[var(--ifm-font-color-base)]"
                  >
                    <span className="w-5 text-center">⌁</span>
                    Learning paths
                  </Link>

                  <Link
                    to="/projects"
                    className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-[var(--ifm-color-emphasis-700)] no-underline transition-colors hover:bg-[var(--ifm-color-emphasis-100)] hover:text-[var(--ifm-font-color-base)]"
                  >
                    <span className="w-5 text-center">◈</span>
                    Projects
                  </Link>

                  <Link
                    to="https://github.com/CodeHarborHub"
                    className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-[var(--ifm-color-emphasis-700)] no-underline transition-colors hover:bg-[var(--ifm-color-emphasis-100)] hover:text-[var(--ifm-font-color-base)]"
                  >
                    <span className="w-5 text-center">⌘</span>
                    GitHub community
                    <span className="ml-auto text-xs">↗</span>
                  </Link>
                </div>

                {/* Sidebar demo status */}
                <div className="mt-5 rounded-xl border border-[var(--ifm-color-emphasis-200)] bg-[var(--ifm-background-color)] p-3">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-amber-500" />
                    <span className="text-xs font-bold text-[var(--ifm-font-color-base)]">
                      Demo environment
                    </span>
                  </div>
                  <p className="text-[11px] leading-5 text-[var(--ifm-color-emphasis-600)]">
                    Your session is stored locally in this browser.
                  </p>
                  <Link
                    to="/settings/security"
                    className="mt-2 inline-flex text-xs font-bold no-underline"
                    style={{ color: "var(--ifm-color-primary)" }}
                  >
                    View security details →
                  </Link>
                </div>

                <button
                  type="button"
                  onClick={signOut}
                  disabled={signingOut}
                  className="mt-4 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-bold text-red-500 transition-colors hover:bg-red-500/10 disabled:opacity-50"
                >
                  <span className="w-5 text-center">⇥</span>
                  {signingOut ? "Signing out..." : "Sign out"}
                </button>
              </div>

              <p className="mt-4 px-2 text-[10px] leading-5 text-[var(--ifm-color-emphasis-600)]">
                © {now.getFullYear()} CodeHarborHub
                <br />
                Learn. Build. Share.
              </p>
            </aside>

            {/* MAIN CONTENT */}
            <section className="min-w-0">
              <div className="mb-6">
                <p
                  className="mb-2 text-[10px] font-black uppercase tracking-[0.2em]"
                  style={{ color: "var(--ifm-color-primary)" }}
                >
                  {eyebrow}
                </p>

                <div className="flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <h1 className="mb-2 text-2xl font-black tracking-tight text-[var(--ifm-font-color-base)] sm:text-3xl">
                      {title}
                    </h1>
                    <p className="mb-0 text-sm text-[var(--ifm-color-emphasis-700)]">
                      {greeting}, {displayName}. Make today count.
                    </p>
                  </div>

                  <div className="rounded-xl border border-[var(--ifm-color-emphasis-200)] bg-[var(--ifm-background-surface-color)] px-4 py-2.5">
                    <p className="text-xs font-bold text-[var(--ifm-font-color-base)]">
                      {now.toLocaleDateString([], {
                        weekday: "long",
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </div>

              {children}
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
}


import React from "react";
// @ts-ignore
import Layout from "@theme/Layout";
// @ts-ignore
import Link from "@docusaurus/Link";

interface AuthShellProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  wide?: boolean;
}

export default function AuthShell({
  title,
  subtitle,
  children,
  footer,
  wide = false,
}: AuthShellProps) {
  return (
    <Layout title={title} description={subtitle}>
      <main className="relative isolate flex min-h-[calc(100vh-60px)] items-center justify-center overflow-hidden bg-[var(--ifm-background-color)] px-4 py-12 sm:px-6 lg:py-16">

        {/* Background decoration */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[var(--ifm-color-primary)] opacity-[0.09] blur-[100px]" />
          <div className="absolute -bottom-40 -right-24 h-96 w-96 rounded-full bg-[var(--ifm-color-primary)] opacity-[0.10] blur-[120px]" />

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(var(--ifm-font-color-base) 1px, transparent 1px), linear-gradient(90deg, var(--ifm-font-color-base) 1px, transparent 1px)",
              backgroundSize: "42px 42px",
            }}
          />

          <div className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--ifm-color-emphasis-200)] opacity-30" />
          <div className="absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--ifm-color-emphasis-200)] opacity-20" />
        </div>

        {/* Main content */}
        <div
          className={`relative mx-auto w-full`}
        >
          {/* Brand */}
          <div className="mb-8 flex flex-col items-center text-center">
            <Link
              to="/"
              aria-label="CodeHarborHub homepage"
              className="group mb-5 inline-flex items-center gap-3 rounded-2xl no-underline transition-transform duration-300 hover:scale-[1.03] hover:no-underline"
            >
              <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-[var(--ifm-color-primary)] text-lg font-black tracking-tight text-white shadow-lg shadow-[var(--ifm-color-primary)]/20">
                CH
                <span className="absolute -right-2 -top-2 h-7 w-7 rounded-full border-4 border-white/20" />
              </span>

              <span className="flex flex-col text-left">
                <strong className="text-xl font-extrabold tracking-tight text-[var(--ifm-font-color-base)]">
                  CodeHarborHub
                </strong>
                <span className="text-xs font-medium tracking-wider text-[var(--ifm-color-emphasis-600)]">
                  LEVEL UP YOUR SKILLS
                </span>
              </span>
            </Link>

            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--ifm-color-emphasis-200)] bg-[var(--ifm-background-surface-color)] px-3 py-1.5 text-xs font-semibold text-[var(--ifm-color-emphasis-700)] shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--ifm-color-primary)] opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--ifm-color-primary)]" />
              </span>
              YOUR DEVELOPER JOURNEY STARTS HERE
            </div>
          </div>

          {/* Authentication card */}
          <section className="relative overflow-hidden rounded-3xl border border-[var(--ifm-color-emphasis-200)] bg-[var(--ifm-background-surface-color)] shadow-[0_25px_80px_-25px_rgba(0,0,0,0.18)]">
            {/* Top accent */}
            <div className="h-1 w-full bg-gradient-to-r from-[var(--ifm-color-primary)] via-[var(--ifm-color-primary-light)] to-transparent" />

            <div className="p-6 sm:p-9">
              {/* Heading */}
              <div className="mb-8 text-center">
                <h1 className="mb-3 text-3xl font-extrabold tracking-tight text-[var(--ifm-font-color-base)] sm:text-4xl">
                  {title}
                </h1>

                <p className="mx-auto max-w-md text-sm leading-7 text-[var(--ifm-color-emphasis-700)] sm:text-base">
                  {subtitle}
                </p>
              </div>

              {/* Page-specific form */}
              <div className="w-full">{children}</div>

              {/* Footer */}
              {footer && (
                <div className="mt-8 border-t border-[var(--ifm-color-emphasis-200)] pt-6 text-center text-sm text-[var(--ifm-color-emphasis-700)]">
                  {footer}
                </div>
              )}
            </div>
          </section>

          {/* Demo information */}
          <div className="mt-6 flex flex-col items-center justify-center gap-3 text-center">
            <div className="flex items-center gap-2 text-xs text-[var(--ifm-color-emphasis-600)]">
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span>
                Frontend demo · Your demo data stays in this browser
              </span>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}


import React, { useMemo } from "react";
import Link from "@docusaurus/Link";
import ProtectedRoute from "@site/src/components/auth/ProtectedRoute";
import DashboardLayout from "@site/src/components/auth/DashboardLayout";
import { useAuth } from "@site/src/context/AuthContext";

function formatDate(value?: string) {
  if (!value) return "Not available";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return "Not available";

  return date.toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

function AccountContent() {
  const { user } = useAuth();

  const accountDetails = useMemo(
    () => [
      {
        label: "Display name",
        value: user?.name || "Not provided",
        icon: "👤",
      },
      {
        label: "Email address",
        value: user?.email || "Not provided",
        icon: "✉️",
      },
      {
        label: "Account created",
        value: formatDate(user?.createdAt),
        icon: "📅",
      },
      {
        label: "Last profile update",
        value: formatDate(user?.updatedAt),
        icon: "🔄",
      },
    ],
    [user],
  );

  const accountInitials = (user?.name || "CH")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

  return (
    <DashboardLayout
      title="Account settings"
      eyebrow="ACCOUNT PREFERENCES"
    >
      <div className="space-y-6">

        {/* Account overview */}
        <section className="relative overflow-hidden rounded-3xl border border-[var(--ifm-color-emphasis-200)] bg-[var(--ifm-background-surface-color)] p-6 shadow-sm sm:p-8">
          <div
            className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full opacity-10 blur-3xl"
            style={{ background: "var(--ifm-color-primary)" }}
          />

          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-xl font-extrabold text-white shadow-lg sm:h-20 sm:w-20 sm:text-2xl"
                style={{ background: "var(--ifm-color-primary)" }}
              >
                {accountInitials || "CH"}
              </div>

              <div className="min-w-0">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ifm-color-primary)]">
                  ACCOUNT OVERVIEW
                </span>

                <h2 className="mb-1 mt-1 truncate text-2xl font-bold text-[var(--ifm-font-color-base)]">
                  {user?.name || "CodeHarborHub Member"}
                </h2>

                <p className="mb-2 break-all text-sm text-[var(--ifm-color-emphasis-600)]">
                  {user?.email || "No email available"}
                </p>

                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--ifm-color-emphasis-300)] px-3 py-1 text-xs font-semibold text-[var(--ifm-color-emphasis-700)]">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Browser-local demo account
                </span>
              </div>
            </div>

            <Link
              to="/profile"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-white no-underline transition hover:opacity-90 hover:no-underline"
              style={{ background: "var(--ifm-color-primary)" }}
            >
              Edit profile
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        {/* Account information */}
        <section className="rounded-3xl border border-[var(--ifm-color-emphasis-200)] bg-[var(--ifm-background-surface-color)] p-6 shadow-sm sm:p-8">
          <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ifm-color-primary)]">
                ACCOUNT INFORMATION
              </span>

              <h2 className="mb-1 mt-2 text-xl font-bold text-[var(--ifm-font-color-base)] sm:text-2xl">
                Your account details
              </h2>

              <p className="mb-0 text-sm text-[var(--ifm-color-emphasis-600)]">
                Review the information associated with your demo account.
              </p>
            </div>

            <span className="w-fit rounded-lg bg-[var(--ifm-color-emphasis-100)] px-3 py-2 text-xs font-semibold text-[var(--ifm-color-emphasis-700)]">
              Read only
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {accountDetails.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-[var(--ifm-color-emphasis-200)] p-5 transition hover:border-[var(--ifm-color-primary)] hover:shadow-sm"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--ifm-color-emphasis-100)] text-lg">
                    {item.icon}
                  </span>

                  <span className="text-sm font-medium text-[var(--ifm-color-emphasis-600)]">
                    {item.label}
                  </span>
                </div>

                <p className="mb-0 break-words text-base font-bold text-[var(--ifm-font-color-base)]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--ifm-color-emphasis-200)] pt-5">
            <p className="mb-0 text-xs text-[var(--ifm-color-emphasis-600)]">
              Account information is read from your local demo session.
            </p>

            <Link
              to="/profile"
              className="text-sm font-bold no-underline hover:underline"
              style={{ color: "var(--ifm-color-primary)" }}
            >
              Update personal details →
            </Link>
          </div>
        </section>

        {/* Privacy and storage */}
        <section className="rounded-3xl border border-[var(--ifm-color-emphasis-200)] bg-[var(--ifm-background-surface-color)] p-6 shadow-sm sm:p-8">
          <div className="mb-6 flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--ifm-color-emphasis-100)] text-2xl">
              🔐
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ifm-color-primary)]">
                DATA & PRIVACY
              </span>

              <h2 className="mb-1 mt-2 text-xl font-bold text-[var(--ifm-font-color-base)] sm:text-2xl">
                Where is your data stored?
              </h2>

              <p className="mb-0 text-sm leading-6 text-[var(--ifm-color-emphasis-600)]">
                Understand how this frontend demonstration handles your
                account information.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-[var(--ifm-color-emphasis-200)] p-5">
              <div className="mb-3 flex items-center gap-2">
                <span className="text-xl">💻</span>
                <h3 className="m-0 text-base font-bold text-[var(--ifm-font-color-base)]">
                  Browser storage
                </h3>
              </div>

              <p className="mb-0 text-sm leading-6 text-[var(--ifm-color-emphasis-600)]">
                Demo account information is stored in LocalStorage on this
                browser and website origin.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--ifm-color-emphasis-200)] p-5">
              <div className="mb-3 flex items-center gap-2">
                <span className="text-xl">☁️</span>
                <h3 className="m-0 text-base font-bold text-[var(--ifm-font-color-base)]">
                  Cloud synchronization
                </h3>
              </div>

              <p className="mb-0 text-sm leading-6 text-[var(--ifm-color-emphasis-600)]">
                This demo does not upload your account record to CodeHarborHub
                servers or synchronize it across devices.
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-amber-500/30 bg-amber-500/5 p-4">
            <div className="flex items-start gap-3">
              <span className="text-xl">⚠️</span>

              <div>
                <h3 className="mb-1 text-sm font-bold text-[var(--ifm-font-color-base)]">
                  Important security information
                </h3>

                <p className="mb-0 text-sm leading-6 text-[var(--ifm-color-emphasis-700)]">
                  LocalStorage can be inspected or modified by anyone with
                  access to this browser. This frontend demo is not production
                  authentication. Do not store real passwords, payment
                  information, or sensitive personal data here.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Settings navigation */}
        <section className="rounded-3xl border border-[var(--ifm-color-emphasis-200)] bg-[var(--ifm-background-surface-color)] p-6 shadow-sm sm:p-8">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ifm-color-primary)]">
            QUICK NAVIGATION
          </span>

          <h2 className="mb-5 mt-2 text-xl font-bold text-[var(--ifm-font-color-base)]">
            Manage your account
          </h2>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              to="/profile"
              className="group flex items-center justify-between rounded-2xl border border-[var(--ifm-color-emphasis-200)] p-4 no-underline transition hover:border-[var(--ifm-color-primary)] hover:bg-[var(--ifm-color-emphasis-100)] hover:no-underline"
            >
              <div>
                <span className="mb-1 block text-sm font-bold text-[var(--ifm-font-color-base)]">
                  Personal profile
                </span>
                <span className="text-xs text-[var(--ifm-color-emphasis-600)]">
                  Update your display name
                </span>
              </div>
              <span className="text-lg text-[var(--ifm-color-primary)] transition group-hover:translate-x-1">
                →
              </span>
            </Link>

            <Link
              to="/settings/security"
              className="group flex items-center justify-between rounded-2xl border border-[var(--ifm-color-emphasis-200)] p-4 no-underline transition hover:border-[var(--ifm-color-primary)] hover:bg-[var(--ifm-color-emphasis-100)] hover:no-underline"
            >
              <div>
                <span className="mb-1 block text-sm font-bold text-[var(--ifm-font-color-base)]">
                  Security settings
                </span>
                <span className="text-xs text-[var(--ifm-color-emphasis-600)]">
                  Review demo security options
                </span>
              </div>
              <span className="text-lg text-[var(--ifm-color-primary)] transition group-hover:translate-x-1">
                →
              </span>
            </Link>

            <Link
              to="/dashboard"
              className="group flex items-center justify-between rounded-2xl border border-[var(--ifm-color-emphasis-200)] p-4 no-underline transition hover:border-[var(--ifm-color-primary)] hover:bg-[var(--ifm-color-emphasis-100)] hover:no-underline sm:col-span-2 lg:col-span-1"
            >
              <div>
                <span className="mb-1 block text-sm font-bold text-[var(--ifm-font-color-base)]">
                  Dashboard
                </span>
                <span className="text-xs text-[var(--ifm-color-emphasis-600)]">
                  Return to your workspace
                </span>
              </div>
              <span className="text-lg text-[var(--ifm-color-primary)] transition group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </section>

        {/* Footer note */}
        <div className="flex flex-col gap-2 rounded-2xl bg-[var(--ifm-color-emphasis-100)] p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-1 text-sm font-bold text-[var(--ifm-font-color-base)]">
              CodeHarborHub Account Center
            </p>
            <p className="mb-0 text-xs text-[var(--ifm-color-emphasis-600)]">
              Manage your learning identity and account preferences.
            </p>
          </div>

          <Link
            to="/tutorial"
            className="text-sm font-bold no-underline hover:underline"
            style={{ color: "var(--ifm-color-primary)" }}
          >
            Explore tutorials →
          </Link>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default function AccountSettingsPage() {
  return (
    <ProtectedRoute>
      <AccountContent />
    </ProtectedRoute>
  );
}

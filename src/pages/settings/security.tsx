
import React, { useState } from "react";
import Link from "@docusaurus/Link";
import ProtectedRoute from "@site/src/components/auth/ProtectedRoute";
import DashboardLayout from "@site/src/components/auth/DashboardLayout";
import AuthNotice from "@site/src/components/auth/AuthNotice";
import { authService } from "@site/src/services/authService";
import { useAuth } from "@site/src/context/AuthContext";

function SecurityContent() {
  const { logout } = useAuth();

  const [showConfirm, setShowConfirm] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [notice, setNotice] = useState("");

  function clearData() {
    try {
      setIsDeleting(true);
      setNotice("");

      // Remove browser-local demo authentication data.
      authService.clearDemoData();

      setShowConfirm(false);
      setNotice("Demo account data has been deleted.");

      // Clear the current authentication context.
      logout();

      // Redirect to registration after logout.
      window.location.assign("/auth/register");
    } catch (error) {
      setIsDeleting(false);
      setNotice(
        error instanceof Error
          ? error.message
          : "Unable to delete demo data. Please try again.",
      );
    }
  }

  return (
    <DashboardLayout
      title="Security & privacy"
      eyebrow="DEMO SECURITY CENTER"
    >
      <div className="space-y-6">

        {/* Security overview */}
        <section className="relative overflow-hidden rounded-3xl border border-[var(--ifm-color-emphasis-200)] bg-[var(--ifm-background-surface-color)] p-6 shadow-sm sm:p-8">
          <div
            className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full opacity-10 blur-3xl"
            style={{ background: "var(--ifm-color-primary)" }}
          />

          <div className="relative">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--ifm-color-emphasis-100)] text-3xl">
                  🔐
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ifm-color-primary)]">
                    SECURITY CENTER
                  </span>

                  <h2 className="mb-1 mt-1 text-xl font-bold text-[var(--ifm-font-color-base)] sm:text-2xl">
                    Your account security
                  </h2>

                  <p className="mb-0 text-sm text-[var(--ifm-color-emphasis-600)]">
                    Understand how this demo handles your session and data.
                  </p>
                </div>
              </div>

              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-2 text-xs font-bold text-amber-700 dark:text-amber-300">
                <span className="h-2 w-2 rounded-full bg-amber-500" />
                Demo environment
              </span>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-[var(--ifm-color-emphasis-200)] p-4">
                <span className="text-2xl">💻</span>
                <p className="mb-1 mt-3 text-sm font-bold text-[var(--ifm-font-color-base)]">
                  Local storage
                </p>
                <p className="mb-0 text-xs leading-5 text-[var(--ifm-color-emphasis-600)]">
                  Data stays in this browser's website storage.
                </p>
              </div>

              <div className="rounded-2xl border border-[var(--ifm-color-emphasis-200)] p-4">
                <span className="text-2xl">⏱️</span>
                <p className="mb-1 mt-3 text-sm font-bold text-[var(--ifm-font-color-base)]">
                  Session duration
                </p>
                <p className="mb-0 text-xs leading-5 text-[var(--ifm-color-emphasis-600)]">
                  Demo session is designed to last up to seven days.
                </p>
              </div>

              <div className="rounded-2xl border border-[var(--ifm-color-emphasis-200)] p-4">
                <span className="text-2xl">☁️</span>
                <p className="mb-1 mt-3 text-sm font-bold text-[var(--ifm-font-color-base)]">
                  Server verification
                </p>
                <p className="mb-0 text-xs leading-5 text-[var(--ifm-color-emphasis-600)]">
                  No server-side authentication is implemented.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Session information */}
        <section className="rounded-3xl border border-[var(--ifm-color-emphasis-200)] bg-[var(--ifm-background-surface-color)] p-6 shadow-sm sm:p-8">
          <div className="mb-6 flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--ifm-color-emphasis-100)] text-2xl">
              🖥️
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ifm-color-primary)]">
                SESSION MANAGEMENT
              </span>

              <h2 className="mb-1 mt-2 text-xl font-bold text-[var(--ifm-font-color-base)]">
                Browser-local session
              </h2>

              <p className="mb-0 text-sm leading-6 text-[var(--ifm-color-emphasis-600)]">
                Your demo session is maintained using LocalStorage.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3 rounded-2xl border border-[var(--ifm-color-emphasis-200)] p-4">
              <span className="text-lg">✓</span>
              <div>
                <p className="mb-1 text-sm font-bold text-[var(--ifm-font-color-base)]">
                  Local session record
                </p>
                <p className="mb-0 text-sm text-[var(--ifm-color-emphasis-600)]">
                  The application stores a session record in your browser.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-2xl border border-[var(--ifm-color-emphasis-200)] p-4">
              <span className="text-lg">⏳</span>
              <div>
                <p className="mb-1 text-sm font-bold text-[var(--ifm-font-color-base)]">
                  Seven-day session design
                </p>
                <p className="mb-0 text-sm text-[var(--ifm-color-emphasis-600)]">
                  The demo is designed to expire the session after up to
                  seven days, depending on the authentication service logic.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-2xl border border-[var(--ifm-color-emphasis-200)] p-4">
              <span className="text-lg">⚠️</span>
              <div>
                <p className="mb-1 text-sm font-bold text-[var(--ifm-font-color-base)]">
                  Not server verified
                </p>
                <p className="mb-0 text-sm text-[var(--ifm-color-emphasis-600)]">
                  This session is not validated by a secure authentication
                  server and must not be used for production authorization.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Password recovery */}
        <section className="rounded-3xl border border-[var(--ifm-color-emphasis-200)] bg-[var(--ifm-background-surface-color)] p-6 shadow-sm sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--ifm-color-emphasis-100)] text-2xl">
              🔑
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ifm-color-primary)]">
                PASSWORD & RECOVERY
              </span>

              <h2 className="mb-2 mt-2 text-xl font-bold text-[var(--ifm-font-color-base)]">
                Demo password recovery
              </h2>

              <p className="mb-4 text-sm leading-6 text-[var(--ifm-color-emphasis-600)]">
                Password recovery is simulated in the browser. The demo does
                not send an email, issue a real verification link, or perform
                an identity check.
              </p>

              <Link
                to="/auth/forgot-password"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--ifm-color-emphasis-300)] px-4 py-2.5 text-sm font-bold text-[var(--ifm-font-color-base)] no-underline transition hover:border-[var(--ifm-color-primary)] hover:text-[var(--ifm-color-primary)] hover:no-underline"
              >
                View recovery demo
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Privacy information */}
        <section className="rounded-3xl border border-[var(--ifm-color-emphasis-200)] bg-[var(--ifm-background-surface-color)] p-6 shadow-sm sm:p-8">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ifm-color-primary)]">
            PRIVACY & DATA
          </span>

          <h2 className="mb-2 mt-2 text-xl font-bold text-[var(--ifm-font-color-base)]">
            Your data, your browser
          </h2>

          <p className="mb-5 text-sm leading-6 text-[var(--ifm-color-emphasis-600)]">
            This frontend demonstration uses browser storage rather than a
            centralized user database.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-[var(--ifm-color-emphasis-100)] p-5">
              <span className="text-2xl">📦</span>
              <h3 className="mb-2 mt-3 text-sm font-bold text-[var(--ifm-font-color-base)]">
                What is stored?
              </h3>
              <p className="mb-0 text-sm leading-6 text-[var(--ifm-color-emphasis-600)]">
                Demo user records, session information, and pending password
                reset state managed by the authentication feature.
              </p>
            </div>

            <div className="rounded-2xl bg-[var(--ifm-color-emphasis-100)] p-5">
              <span className="text-2xl">🧹</span>
              <h3 className="mb-2 mt-3 text-sm font-bold text-[var(--ifm-font-color-base)]">
                How can you remove it?
              </h3>
              <p className="mb-0 text-sm leading-6 text-[var(--ifm-color-emphasis-600)]">
                Use the delete demo data option below to clear data managed
                by this authentication feature in this browser.
              </p>
            </div>
          </div>
        </section>

        {/* Danger zone */}
        <section className="overflow-hidden rounded-3xl border border-red-500/30 bg-[var(--ifm-background-surface-color)] shadow-sm">
          <div className="border-b border-red-500/20 bg-red-500/5 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10 text-2xl">
                ⚠️
              </span>

              <div>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-red-500">
                  DANGER ZONE
                </span>

                <h2 className="mb-0 mt-1 text-xl font-bold text-[var(--ifm-font-color-base)]">
                  Delete demo account data
                </h2>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <p className="mb-5 text-sm leading-6 text-[var(--ifm-color-emphasis-700)]">
              This action removes demo users, session information, and
              pending password reset state managed by this feature in the
              current browser. It does not delete unrelated browser data or
              data stored by other applications.
            </p>

            {!showConfirm ? (
              <button
                type="button"
                onClick={() => setShowConfirm(true)}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-700"
              >
                <span>🗑️</span>
                Delete demo data
              </button>
            ) : (
              <div className="rounded-2xl border border-red-500/30 bg-red-500/5 p-5">
                <div className="mb-4">
                  <h3 className="mb-1 text-base font-bold text-[var(--ifm-font-color-base)]">
                    Are you absolutely sure?
                  </h3>

                  <p className="mb-0 text-sm leading-6 text-[var(--ifm-color-emphasis-600)]">
                    You will be signed out and redirected to the registration
                    page. This action cannot be undone.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={clearData}
                    disabled={isDeleting}
                    className="inline-flex items-center justify-center rounded-xl bg-red-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isDeleting ? "Deleting..." : "Yes, delete my demo data"}
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowConfirm(false)}
                    disabled={isDeleting}
                    className="rounded-xl border border-[var(--ifm-color-emphasis-300)] px-5 py-3 text-sm font-bold text-[var(--ifm-font-color-base)] transition hover:bg-[var(--ifm-color-emphasis-100)] disabled:opacity-60"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            {notice && (
              <div className="mt-4">
                <AuthNotice type="success">{notice}</AuthNotice>
              </div>
            )}
          </div>
        </section>

        {/* Helpful links */}
        <div className="flex flex-col gap-3 rounded-2xl bg-[var(--ifm-color-emphasis-100)] p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-1 text-sm font-bold text-[var(--ifm-font-color-base)]">
              Need help managing your account?
            </p>
            <p className="mb-0 text-xs text-[var(--ifm-color-emphasis-600)]">
              Review your account information and profile preferences.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/settings/account"
              className="text-sm font-bold no-underline hover:underline"
              style={{ color: "var(--ifm-color-primary)" }}
            >
              Account settings →
            </Link>

            <Link
              to="/profile"
              className="text-sm font-bold no-underline hover:underline"
              style={{ color: "var(--ifm-color-primary)" }}
            >
              My profile →
            </Link>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default function SecuritySettingsPage() {
  return (
    <ProtectedRoute>
      <SecurityContent />
    </ProtectedRoute>
  );
}

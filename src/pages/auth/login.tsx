import React, { FormEvent, useState } from "react";
// @ts-ignore
import Link from "@docusaurus/Link";
// @ts-ignore
import AuthShell from "@site/src/components/auth/AuthShell";
// @ts-ignore
import GuestRoute from "@site/src/components/auth/GuestRoute";
// @ts-ignore
import AuthNotice from "@site/src/components/auth/AuthNotice";
// @ts-ignore
import { useAuth } from "@site/src/context/AuthContext";

function safeNextPath(): string {
  const value = new URLSearchParams(window.location.search).get("next");

  if (
    value &&
    value.startsWith("/") &&
    !value.startsWith("//") &&
    !value.includes("\\")
  ) {
    return value;
  }

  return "/dashboard";
}

function LoginForm() {
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [remember, setRemember] = useState(true);

  const resetDone =
    typeof window !== "undefined" &&
    new URLSearchParams(window.location.search).get("reset") === "success";

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");

    if (!email.trim() || !password) {
      setError("Please enter your email and password.");
      return;
    }

    setBusy(true);

    try {
      await login(email.trim(), password);

      // The current demo session is stored by AuthContext/authService.
      // Remember-me is visual only in this LocalStorage prototype.
      void remember;

      window.location.assign(safeNextPath());
    } catch (reason) {
      setError(
        reason instanceof Error
          ? reason.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setBusy(false);
    }
  }

  return (
    <AuthShell
      title="Welcome back"
      subtitle="Continue learning, building projects, and growing with CodeHarborHub."
    >
      <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-0 lg:gap-8">

        {/* LEFT: BRANDING / VISUAL PANEL */}

        <div className="hidden lg:flex flex-col justify-between rounded-2xl p-7 bg-[var(--ifm-color-emphasis-100)] border border-[var(--ifm-color-emphasis-200)] relative overflow-hidden">

          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[var(--ifm-color-primary)] opacity-[0.12] blur-3xl pointer-events-none" />

          <div className="relative z-10">

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--ifm-color-primary)]/30 bg-[var(--ifm-color-primary)]/10 text-[var(--ifm-color-primary)] text-xs font-bold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[var(--ifm-color-primary)] animate-pulse" />
              DEVELOPER COMMUNITY
            </div>

            <h2 className="mt-7 text-3xl font-black leading-tight tracking-tight text-[var(--ifm-font-color-base)]">
              Build skills. Create projects.
              <br />
              <span className="text-[var(--ifm-color-primary)]">
                Shape the future.
              </span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-[var(--ifm-color-emphasis-700)]">
              Learn programming, explore modern technologies, practice
              development, and contribute to open-source projects with
              CodeHarborHub.
            </p>

          </div>

          {/* CODE WINDOW */}

          <div className="relative z-10 mt-4 rounded-xl border border-[var(--ifm-color-emphasis-300)] bg-[var(--ifm-background-color)] shadow-xl overflow-hidden">

            <div className="flex items-center justify-between px-4 py-2 border-b border-[var(--ifm-color-emphasis-200)]">

              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>

              <span className="text-[10px] font-mono text-[var(--ifm-color-emphasis-600)]">
                developer.js
              </span>

            </div>

            <div className="p-5 font-mono text-xs leading-7 overflow-hidden">

              <p className="text-purple-500">
                const <span className="text-[var(--ifm-color-primary)]">developer</span> = {"{"}
              </p>

              <p className="pl-5 text-[var(--ifm-color-emphasis-700)]">
                learn: <span className="text-green-500">"Every day"</span>,
              </p>

              <p className="pl-5 text-[var(--ifm-color-emphasis-700)]">
                build: <span className="text-green-500">"Real projects"</span>,
              </p>

              <p className="pl-5 text-[var(--ifm-color-emphasis-700)]">
                contribute: <span className="text-green-500">"Open source"</span>,
              </p>

              <p className="pl-5 text-[var(--ifm-color-emphasis-700)]">
                mindset: <span className="text-green-500">"Keep growing"</span>
              </p>

              <p className="text-purple-500">{"};"}</p>

              <p className="mt-3 text-[var(--ifm-color-primary)]">
                <span className="animate-pulse">▋</span> Start your journey...
              </p>

            </div>

          </div>

          <div className="relative z-10 mt-7 flex items-center justify-between text-xs text-[var(--ifm-color-emphasis-600)]">
            <span>Learn · Build · Share</span>
            <span className="font-bold text-[var(--ifm-color-primary)]">
              CodeHarborHub
            </span>
          </div>

        </div>

        {/* RIGHT: LOGIN FORM */}

        <div className="flex flex-col justify-center py-2 lg:py-5">

          <div className="mb-7">

            <div className="inline-flex items-center gap-2 text-[var(--ifm-color-primary)] text-xs font-bold tracking-widest uppercase">
              <span className="w-8 h-[2px] bg-[var(--ifm-color-primary)]" />
              Member Access
            </div>

            <h2 className="mt-4 text-3xl sm:text-4xl font-black tracking-tight text-[var(--ifm-font-color-base)]">
              Sign in to your
              <span className="block text-[var(--ifm-color-primary)]">
                account.
              </span>
            </h2>

            <p className="mt-3 text-sm leading-6 text-[var(--ifm-color-emphasis-600)]">
              Enter your details below to access your CodeHarborHub workspace.
            </p>

          </div>

          {/* NOTIFICATIONS */}

          {resetDone && (
            <div className="mb-5">
              <AuthNotice type="success">
                Your demo password was updated successfully. Sign in with
                your new password.
              </AuthNotice>
            </div>
          )}

          {error && (
            <div className="mb-5">
              <AuthNotice type="error">{error}</AuthNotice>
            </div>
          )}

          {/* FORM */}

          <form onSubmit={submit} className="space-y-5">

            {/* EMAIL */}

            <div className="space-y-2">

              <label
                htmlFor="login-email"
                className="block text-sm font-bold text-[var(--ifm-font-color-base)]"
              >
                Email address
              </label>

              <div className="relative group">

                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--ifm-color-emphasis-600)] group-focus-within:text-[var(--ifm-color-primary)] transition-colors pointer-events-none">

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="w-5 h-5"
                    aria-hidden="true"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="3" />
                    <path d="m4 7 8 6 8-6" />
                  </svg>

                </span>

                <input
                  id="login-email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  autoComplete="email"
                  maxLength={254}
                  required
                  className="w-full h-13 min-h-[52px] pl-12 pr-4 rounded-xl border border-[var(--ifm-color-emphasis-300)] bg-[var(--ifm-background-color)] text-[var(--ifm-font-color-base)] placeholder:text-[var(--ifm-color-emphasis-500)] text-sm outline-none transition-all duration-200 focus:border-[var(--ifm-color-primary)] focus:ring-4 focus:ring-[var(--ifm-color-primary)]/10 hover:border-[var(--ifm-color-primary)]/60"
                />

              </div>

            </div>

            {/* PASSWORD */}

            <div className="space-y-2">

              <div className="flex items-center justify-between gap-3">

                <label
                  htmlFor="login-password"
                  className="text-sm font-bold text-[var(--ifm-font-color-base)]"
                >
                  Password
                </label>

                <Link
                  to="/auth/forgot-password"
                  className="text-xs font-bold text-[var(--ifm-color-primary)] hover:underline"
                >
                  Forgot password?
                </Link>

              </div>

              <div className="relative group">

                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--ifm-color-emphasis-600)] group-focus-within:text-[var(--ifm-color-primary)] transition-colors pointer-events-none">

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="w-5 h-5"
                    aria-hidden="true"
                  >
                    <rect x="4" y="10" width="16" height="11" rx="2" />
                    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                    <path d="M12 14v3" />
                  </svg>

                </span>

                <input
                  id="login-password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  maxLength={128}
                  required
                  className="w-full h-13 min-h-[52px] pl-12 pr-16 rounded-xl border border-[var(--ifm-color-emphasis-300)] bg-[var(--ifm-background-color)] text-[var(--ifm-font-color-base)] placeholder:text-[var(--ifm-color-emphasis-500)] text-sm outline-none transition-all duration-200 focus:border-[var(--ifm-color-primary)] focus:ring-4 focus:ring-[var(--ifm-color-primary)]/10 hover:border-[var(--ifm-color-primary)]/60"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((value) => !value)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-[var(--ifm-color-emphasis-600)] hover:text-[var(--ifm-color-primary)] transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>

              </div>

            </div>

            {/* REMEMBER ME */}

            <div className="flex items-center justify-between gap-3">

              <label className="flex items-center gap-2.5 cursor-pointer select-none">

                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(event) => setRemember(event.target.checked)}
                  className="w-4 h-4 rounded accent-[var(--ifm-color-primary)] cursor-pointer"
                />

                <span className="text-xs text-[var(--ifm-color-emphasis-700)]">
                  Keep me signed in
                </span>

              </label>

              <span className="text-[10px] text-[var(--ifm-color-emphasis-600)]">
                Local demo session
              </span>

            </div>

            {/* SUBMIT */}

            <button
              type="submit"
              disabled={busy}
              className="group relative flex w-full min-h-[52px] items-center justify-center gap-3 overflow-hidden rounded-xl bg-[var(--ifm-color-primary)] px-5 py-3 text-sm font-extrabold text-white shadow-lg shadow-[var(--ifm-color-primary)]/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[var(--ifm-color-primary)]/25 focus:outline-none focus:ring-4 focus:ring-[var(--ifm-color-primary)]/20 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
            >

              {busy ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                  Signing you in...
                </>
              ) : (
                <>
                  Sign in to CodeHarborHub

                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </>
              )}

            </button>

          </form>

          {/* DEMO NOTICE */}

          <div className="mt-6 rounded-xl border border-[var(--ifm-color-primary)]/25 bg-[var(--ifm-color-primary)]/5 p-4">

            <div className="flex items-start gap-3">

              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--ifm-color-primary)]/10 text-[var(--ifm-color-primary)]">

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 11v5M12 8h.01" />
                </svg>

              </span>

              <div>
                <h3 className="text-xs font-extrabold text-[var(--ifm-font-color-base)]">
                  Frontend demo authentication
                </h3>

                <p className="mt-1 text-[11px] leading-5 text-[var(--ifm-color-emphasis-700)]">
                  Your account and session are stored in this browser using
                  LocalStorage. This is not secure production authentication.
                  Never enter a real or reused password.
                </p>
              </div>

            </div>

          </div>

          {/* REGISTER */}

          <div className="mt-7 text-center text-sm text-[var(--ifm-color-emphasis-700)]">

            Don't have an account yet?{" "}

            <Link
              to="/auth/register"
              className="font-extrabold text-[var(--ifm-color-primary)] hover:underline"
            >
              Create an account
              <span aria-hidden="true"> →</span>
            </Link>

          </div>

          {/* SOCIAL LOGIN PLACEHOLDER */}

          <div className="mt-7 flex items-center gap-3">

            <div className="h-px flex-1 bg-[var(--ifm-color-emphasis-300)]" />

            <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--ifm-color-emphasis-600)]">
              CodeHarborHub Community
            </span>

            <div className="h-px flex-1 bg-[var(--ifm-color-emphasis-300)]" />

          </div>

          <p className="mt-4 text-center text-[11px] leading-5 text-[var(--ifm-color-emphasis-600)]">
            Learn programming · Build projects · Contribute to open source
          </p>

        </div>

      </div>
    </AuthShell>
  );
}

export default function LoginPage() {
  return (
    <GuestRoute>
      <LoginForm />
    </GuestRoute>
  );
}

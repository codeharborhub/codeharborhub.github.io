
import React, { FormEvent, useMemo, useState } from "react";
// @ts-ignore
import Link from "@docusaurus/Link";
// @ts-ignore
import AuthShell from "@site/src/components/auth/AuthShell";
// @ts-ignore
import GuestRoute from "@site/src/components/auth/GuestRoute";
// @ts-ignore
import PasswordInput from "@site/src/components/auth/PasswordInput";
// @ts-ignore
import AuthNotice from "@site/src/components/auth/AuthNotice";
// @ts-ignore
import { useAuth } from "@site/src/context/AuthContext";

function getPasswordStrength(password: string) {
  const checks = [
    password.length >= 8,
    /[A-Z]/.test(password),
    /[a-z]/.test(password),
    /\d/.test(password),
    /[^A-Za-z0-9]/.test(password),
  ];

  const score = checks.filter(Boolean).length;

  let label = "Too weak";
  if (score >= 5) label = "Strong password";
  else if (score >= 3) label = "Getting stronger";
  else if (score >= 2) label = "Needs improvement";

  return { score, checks, label };
}

function RegisterForm() {
  const { register } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [acknowledged, setAcknowledged] = useState(false);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [focusedField, setFocusedField] = useState("");

  const passwordStrength = useMemo(
    () => getPasswordStrength(password),
    [password]
  );

  const passwordsMatch =
    confirm.length > 0 && password === confirm;

  const passwordMismatch =
    confirm.length > 0 && password !== confirm;

  const completedFields = [
    name.trim().length >= 2,
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
    password.length >= 8,
    passwordsMatch,
    acknowledged,
  ].filter(Boolean).length;

  const progress = (completedFields / 5) * 100;

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (name.trim().length < 2) {
      setError("Please enter your full name.");
      return;
    }

    if (password.length < 8) {
      setError("Your password must contain at least 8 characters.");
      return;
    }

    if (password !== confirm) {
      setError("Your passwords do not match. Please check them.");
      return;
    }

    if (!acknowledged) {
      setError("Please acknowledge the frontend-demo notice.");
      return;
    }

    setBusy(true);

    try {
      await register(
        name.trim(),
        email.trim().toLowerCase(),
        password
      );

      window.location.assign("/dashboard");
    } catch (reason) {
      setError(
        reason instanceof Error
          ? reason.message
          : "Could not create your account. Please try again."
      );
    } finally {
      setBusy(false);
    }
  }

  return (
    <AuthShell
      title="Join the CodeHarborHub community"
      subtitle="Create your learning profile and start building your future in technology."
      footer={
        <>
          Already have a demo account?{" "}
          <Link to="/auth/login" className="font-semibold">
            Sign in
          </Link>
        </>
      }
    >
      <div className="w-full">
        {/* Two-column registration layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">

          {/* LEFT COLUMN — BRAND & COMMUNITY */}
          <aside className="relative flex flex-col overflow-hidden rounded-3xl border border-[var(--ifm-color-emphasis-200)] bg-[var(--ifm-background-surface-color)] p-6 sm:p-8">

            {/* Decorative backgrounds */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-20 blur-3xl"
              style={{ background: "var(--ifm-color-primary)" }}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full opacity-10 blur-3xl"
              style={{ background: "var(--ifm-color-primary)" }}
            />

            <div className="relative z-10 flex h-full flex-col">

              {/* Brand */}
              <div className="mb-10 flex items-center gap-3">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl text-xl font-black text-white shadow-lg"
                  style={{ background: "var(--ifm-color-primary)" }}
                >
                  CH
                </div>

                <div>
                  <p className="text-base font-extrabold text-[var(--ifm-font-color-base)]">
                    CodeHarborHub
                  </p>
                  <p className="text-xs text-[var(--ifm-color-emphasis-600)]">
                    Learn. Build. Grow.
                  </p>
                </div>
              </div>

              {/* Main message */}
              <div className="mb-8">
                <div
                  className="mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold"
                  style={{
                    color: "var(--ifm-color-primary)",
                    borderColor: "var(--ifm-color-primary)",
                    background: "var(--ifm-color-emphasis-100)",
                  }}
                >
                  <span className="h-2 w-2 animate-pulse rounded-full bg-current" />
                  YOUR NEXT CHAPTER STARTS HERE
                </div>

                <h2 className="mb-4 text-3xl font-black leading-tight tracking-tight text-[var(--ifm-font-color-base)] sm:text-4xl">
                  Turn your
                  <span
                    className="block"
                    style={{ color: "var(--ifm-color-primary)" }}
                  >
                    curiosity into code.
                  </span>
                </h2>

                <p className="max-w-md text-sm leading-7 text-[var(--ifm-color-emphasis-700)]">
                  Join a community of learners and developers. Explore
                  programming tutorials, practice problem-solving, build
                  projects, and grow your technical skills.
                </p>
              </div>

              {/* Learning benefits */}
              <div className="mb-8 space-y-4">
                {[
                  {
                    icon: "⌘",
                    title: "Learn by building",
                    description:
                      "Explore structured tutorials and practical projects.",
                  },
                  {
                    icon: "⚡",
                    title: "Improve your skills",
                    description:
                      "Practice programming, DSA, and real-world concepts.",
                  },
                  {
                    icon: "◈",
                    title: "Grow with community",
                    description:
                      "Discover open-source opportunities and collaborate.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xl"
                      style={{
                        color: "var(--ifm-color-primary)",
                        background: "var(--ifm-color-emphasis-200)",
                      }}
                    >
                      {item.icon}
                    </div>

                    <div>
                      <h3 className="mb-1 text-sm font-bold text-[var(--ifm-font-color-base)]">
                        {item.title}
                      </h3>
                      <p className="text-xs leading-5 text-[var(--ifm-color-emphasis-600)]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Progress preview */}
              <div className="mt-auto rounded-2xl border border-[var(--ifm-color-emphasis-200)] bg-[var(--ifm-background-color)] p-5">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-[var(--ifm-color-emphasis-600)]">
                      YOUR LEARNING JOURNEY
                    </p>
                    <p className="mt-1 text-sm font-bold text-[var(--ifm-font-color-base)]">
                      One step at a time.
                    </p>
                  </div>

                  <div
                    className="rounded-xl px-3 py-2 text-lg"
                    style={{
                      color: "var(--ifm-color-primary)",
                      background: "var(--ifm-color-emphasis-200)",
                    }}
                  >
                    ↗
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    "Create your learning profile",
                    "Explore your interests",
                    "Start your first tutorial",
                  ].map((item, index) => (
                    <div key={item} className="flex items-center gap-3">
                      <div
                        className="flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold"
                        style={{
                          color: "var(--ifm-color-primary)",
                          background: "var(--ifm-color-emphasis-200)",
                        }}
                      >
                        {index + 1}
                      </div>

                      <span className="text-xs text-[var(--ifm-color-emphasis-700)]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-6 text-center text-xs text-[var(--ifm-color-emphasis-600)]">
                Built for curious minds and future builders.
              </p>
            </div>
          </aside>

          {/* RIGHT COLUMN — REGISTRATION FORM */}
          <section className="rounded-3xl border border-[var(--ifm-color-emphasis-200)] bg-[var(--ifm-background-surface-color)] p-5 shadow-sm sm:p-8">

            {/* Form heading */}
            <div className="mb-7">
              <div className="mb-4 flex items-center justify-between gap-3">
                <span
                  className="rounded-full px-3 py-1.5 text-xs font-bold"
                  style={{
                    color: "var(--ifm-color-primary)",
                    background: "var(--ifm-color-emphasis-200)",
                  }}
                >
                  FREE DEMO ACCOUNT
                </span>

                <span className="text-xs text-[var(--ifm-color-emphasis-600)]">
                  Step 1 of 1
                </span>
              </div>

              <h2 className="mb-2 text-2xl font-black tracking-tight text-[var(--ifm-font-color-base)]">
                Create your account
              </h2>

              <p className="text-sm leading-6 text-[var(--ifm-color-emphasis-700)]">
                Fill in your details to create your CodeHarborHub demo profile.
              </p>
            </div>

            {/* Completion progress */}
            <div className="mb-7">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-semibold text-[var(--ifm-color-emphasis-700)]">
                  Profile completion
                </span>

                <span
                  className="text-xs font-bold"
                  style={{ color: "var(--ifm-color-primary)" }}
                >
                  {Math.round(progress)}%
                </span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-[var(--ifm-color-emphasis-200)]">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${progress}%`,
                    background: "var(--ifm-color-primary)",
                  }}
                />
              </div>
            </div>

            {/* Errors */}
            {error && (
              <div className="mb-5">
                <AuthNotice type="error">{error}</AuthNotice>
              </div>
            )}

            <form onSubmit={submit} className="space-y-5">

              {/* Full name */}
              <div>
                <label
                  htmlFor="register-name"
                  className="mb-2 block text-sm font-semibold text-[var(--ifm-font-color-base)]"
                >
                  Full name
                </label>

                <div className="relative">
                  <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg text-[var(--ifm-color-emphasis-600)]">
                    ♙
                  </span>

                  <input
                    id="register-name"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField("")}
                    placeholder="Enter your full name"
                    autoComplete="name"
                    minLength={2}
                    maxLength={60}
                    required
                    className="w-full rounded-xl border bg-[var(--ifm-background-color)] py-3.5 pl-11 pr-4 text-sm text-[var(--ifm-font-color-base)] outline-none transition-all placeholder:text-[var(--ifm-color-emphasis-500)] focus:ring-2"
                    style={{
                      borderColor:
                        focusedField === "name"
                          ? "var(--ifm-color-primary)"
                          : "var(--ifm-color-emphasis-300)",
                      boxShadow:
                        focusedField === "name"
                          ? "0 0 0 3px color-mix(in srgb, var(--ifm-color-primary) 15%, transparent)"
                          : "none",
                    }}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="register-email"
                  className="mb-2 block text-sm font-semibold text-[var(--ifm-font-color-base)]"
                >
                  Email address
                </label>

                <div className="relative">
                  <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-base text-[var(--ifm-color-emphasis-600)]">
                    ✉
                  </span>

                  <input
                    id="register-email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField("")}
                    placeholder="you@example.com"
                    autoComplete="email"
                    maxLength={254}
                    required
                    className="w-full rounded-xl border bg-[var(--ifm-background-color)] py-3.5 pl-11 pr-4 text-sm text-[var(--ifm-font-color-base)] outline-none transition-all placeholder:text-[var(--ifm-color-emphasis-500)] focus:ring-2"
                    style={{
                      borderColor:
                        focusedField === "email"
                          ? "var(--ifm-color-primary)"
                          : "var(--ifm-color-emphasis-300)",
                      boxShadow:
                        focusedField === "email"
                          ? "0 0 0 3px color-mix(in srgb, var(--ifm-color-primary) 15%, transparent)"
                          : "none",
                    }}
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <PasswordInput
                  id="register-password"
                  label="Create password"
                  value={password}
                  onChange={setPassword}
                  autoComplete="new-password"
                  placeholder="At least 8 characters"
                  hint="Use a unique, throwaway demo password."
                />

                {/* Password strength */}
                {password.length > 0 && (
                  <div className="mt-3 rounded-xl border border-[var(--ifm-color-emphasis-200)] bg-[var(--ifm-background-color)] p-3">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-xs font-semibold text-[var(--ifm-color-emphasis-700)]">
                        Password strength
                      </span>

                      <span
                        className="text-xs font-bold"
                        style={{
                          color:
                            passwordStrength.score >= 4
                              ? "var(--ifm-color-primary)"
                              : "var(--ifm-color-emphasis-700)",
                        }}
                      >
                        {passwordStrength.label}
                      </span>
                    </div>

                    <div className="mb-3 flex gap-1.5">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <div
                          key={index}
                          className="h-1.5 flex-1 rounded-full transition-colors"
                          style={{
                            background:
                              index < passwordStrength.score
                                ? "var(--ifm-color-primary)"
                                : "var(--ifm-color-emphasis-200)",
                          }}
                        />
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {[
                        "8+ characters",
                        "Uppercase letter",
                        "Lowercase letter",
                        "Number",
                        "Special character",
                      ].map((label, index) => (
                        <div
                          key={label}
                          className="flex items-center gap-2 text-xs"
                          style={{
                            color: passwordStrength.checks[index]
                              ? "var(--ifm-color-primary)"
                              : "var(--ifm-color-emphasis-600)",
                          }}
                        >
                          <span>
                            {passwordStrength.checks[index] ? "✓" : "○"}
                          </span>
                          {label}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Confirm password */}
              <div>
                <PasswordInput
                  id="register-confirm"
                  label="Confirm password"
                  value={confirm}
                  onChange={setConfirm}
                  autoComplete="new-password"
                  placeholder="Enter your password again"
                />

                {passwordsMatch && (
                  <p className="mt-2 text-xs font-semibold text-[var(--ifm-color-primary)]">
                    ✓ Your passwords match.
                  </p>
                )}

                {passwordMismatch && (
                  <p className="mt-2 text-xs font-semibold text-red-500">
                    The passwords do not match.
                  </p>
                )}
              </div>

              {/* Demo acknowledgment */}
              <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-[var(--ifm-color-emphasis-200)] bg-[var(--ifm-background-color)] p-4 transition-colors hover:border-[var(--ifm-color-primary)]">
                <input
                  type="checkbox"
                  checked={acknowledged}
                  onChange={(event) =>
                    setAcknowledged(event.target.checked)
                  }
                  className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-[var(--ifm-color-primary)]"
                />

                <span className="text-xs leading-5 text-[var(--ifm-color-emphasis-700)]">
                  I understand this is a{" "}
                  <strong className="text-[var(--ifm-font-color-base)]">
                    browser-only frontend demo
                  </strong>
                  , not a secure real account. I will not use a real password
                  or sensitive information.
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                disabled={busy || !acknowledged}
                className="group flex w-full items-center justify-center gap-3 rounded-xl px-5 py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
                style={{
                  background: "var(--ifm-color-primary)",
                  boxShadow: "0 8px 24px color-mix(in srgb, var(--ifm-color-primary) 20%, transparent)",
                }}
              >
                {busy ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Creating your account...
                  </>
                ) : (
                  <>
                    Create free demo account
                    <span className="text-lg transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </>
                )}
              </button>

              {/* Footer note */}
              <div className="flex items-start gap-2 text-xs leading-5 text-[var(--ifm-color-emphasis-600)]">
                <span className="mt-0.5">ⓘ</span>
                <p>
                  This demo creates a local browser profile. No verification
                  email is sent, and your account will not sync across devices.
                </p>
              </div>
            </form>
          </section>
        </div>
      </div>
    </AuthShell>
  );
}

export default function RegisterPage() {
  return (
    <GuestRoute>
      <RegisterForm />
    </GuestRoute>
  );
}

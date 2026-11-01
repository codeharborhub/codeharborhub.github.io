
import React, {
  FormEvent,
  useEffect,
  useMemo,
  useState,
} from "react";
import Link from "@docusaurus/Link";

import ProtectedRoute from "@site/src/components/auth/ProtectedRoute";
import DashboardLayout from "@site/src/components/auth/DashboardLayout";
import AuthNotice from "@site/src/components/auth/AuthNotice";
import { useAuth } from "@site/src/context/AuthContext";

type NoticeState = {
  type: "success" | "error";
  message: string;
} | null;

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);

  if (!parts.length) return "CH";

  return parts
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");
}

function ProfileContent() {
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user?.name ?? "");
  const [notice, setNotice] = useState<NoticeState>(null);
  const [busy, setBusy] = useState(false);

  // Keep the editable value synchronized if the user context changes.
  useEffect(() => {
    setName(user?.name ?? "");
  }, [user?.name]);

  const displayName = user?.name?.trim() || "CodeHarborHub Member";
  const email = user?.email ?? "";

  const previewName = name.trim() || "Your display name";
  const initials = getInitials(name || displayName);

  const completion = useMemo(() => {
    const checks = [
      Boolean(name.trim().length >= 2),
      Boolean(email),
    ];

    return Math.round(
      (checks.filter(Boolean).length / checks.length) * 100
    );
  }, [name, email]);

  const hasChanges = name.trim() !== displayName &&
    name.trim().length >= 2;

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice(null);

    const cleanName = name.trim();

    if (cleanName.length < 2) {
      setNotice({
        type: "error",
        message: "Your display name must contain at least 2 characters.",
      });
      return;
    }

    if (cleanName.length > 60) {
      setNotice({
        type: "error",
        message: "Your display name cannot exceed 60 characters.",
      });
      return;
    }

    setBusy(true);

    try {
      updateProfile(cleanName);

      setName(cleanName);
      setNotice({
        type: "success",
        message: "Your demo profile was successfully updated.",
      });
    } catch (reason) {
      setNotice({
        type: "error",
        message:
          reason instanceof Error
            ? reason.message
            : "Could not update your profile. Please try again.",
      });
    } finally {
      setBusy(false);
    }
  }

  function resetName() {
    setName(user?.name ?? "");
    setNotice(null);
  }

  return (
    <DashboardLayout
      title="My profile"
      eyebrow="DEVELOPER IDENTITY"
    >
      <div className="space-y-6">

        {/* PROFILE HERO */}
        <section
          className="relative isolate overflow-hidden rounded-3xl border border-[var(--ifm-color-emphasis-200)] p-6 sm:p-8"
          style={{
            background:
              "linear-gradient(135deg, color-mix(in srgb, var(--ifm-color-primary) 13%, var(--ifm-background-surface-color)), var(--ifm-background-surface-color))",
          }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full border border-[var(--ifm-color-primary)] opacity-20"
          />

          <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex min-w-0 items-center gap-5">
              {/* Avatar */}
              <div
                className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl text-2xl font-black text-white shadow-xl sm:h-24 sm:w-24 sm:text-3xl"
                style={{
                  background:
                    "linear-gradient(135deg, var(--ifm-color-primary), color-mix(in srgb, var(--ifm-color-primary) 55%, #172033))",
                }}
                aria-label={`Avatar initials: ${getInitials(displayName)}`}
              >
                {getInitials(displayName)}
              </div>

              <div className="min-w-0">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span
                    className="rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-wider"
                    style={{
                      color: "var(--ifm-color-primary)",
                      background: "var(--ifm-color-emphasis-200)",
                    }}
                  >
                    Developer profile
                  </span>

                  <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 text-[10px] font-bold text-amber-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                    Demo account
                  </span>
                </div>

                <h2 className="mb-1 truncate text-2xl font-black tracking-tight text-[var(--ifm-font-color-base)] sm:text-3xl">
                  {displayName}
                </h2>

                <p className="mb-0 break-all text-sm text-[var(--ifm-color-emphasis-700)]">
                  {email || "No email available"}
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--ifm-color-emphasis-200)] bg-[var(--ifm-background-surface-color)] p-4 sm:min-w-40">
              <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-[var(--ifm-color-emphasis-600)]">
                Profile completion
              </p>

              <p className="mb-2 text-3xl font-black" style={{ color: "var(--ifm-color-primary)" }}>
                {completion}%
              </p>

              <div className="h-2 overflow-hidden rounded-full bg-[var(--ifm-color-emphasis-200)]">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${completion}%`,
                    background: "var(--ifm-color-primary)",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* PROFILE MAIN GRID */}
        <div className="grid grid-cols-1 items-start gap-6 xl:grid-cols-[1.25fr_0.75fr]">

          {/* EDIT PROFILE */}
          <section className="rounded-2xl border border-[var(--ifm-color-emphasis-200)] bg-[var(--ifm-background-surface-color)] p-5 sm:p-7">

            <div className="mb-7 flex items-start justify-between gap-3">
              <div>
                <p
                  className="mb-2 text-[10px] font-black uppercase tracking-[0.18em]"
                  style={{ color: "var(--ifm-color-primary)" }}
                >
                  PERSONAL INFORMATION
                </p>

                <h2 className="mb-1 text-xl font-black text-[var(--ifm-font-color-base)]">
                  Edit your profile
                </h2>

                <p className="mb-0 text-xs leading-5 text-[var(--ifm-color-emphasis-600)]">
                  Update how your identity appears in your workspace.
                </p>
              </div>

              <div
                className="hidden h-11 w-11 items-center justify-center rounded-xl text-xl sm:flex"
                style={{
                  color: "var(--ifm-color-primary)",
                  background: "var(--ifm-color-emphasis-200)",
                }}
              >
                ✎
              </div>
            </div>

            {notice && (
              <div className="mb-5">
                <AuthNotice type={notice.type}>
                  {notice.message}
                </AuthNotice>
              </div>
            )}

            <form onSubmit={submit} className="space-y-6">

              {/* Display name */}
              <div>
                <label
                  htmlFor="profile-name"
                  className="mb-2 block text-sm font-bold text-[var(--ifm-font-color-base)]"
                >
                  Display name
                </label>

                <input
                  id="profile-name"
                  type="text"
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                    setNotice(null);
                  }}
                  placeholder="Enter your full name"
                  autoComplete="name"
                  minLength={2}
                  maxLength={60}
                  required
                  className="w-full rounded-xl border border-[var(--ifm-color-emphasis-300)] bg-[var(--ifm-background-color)] px-4 py-3.5 text-sm text-[var(--ifm-font-color-base)] outline-none transition-all placeholder:text-[var(--ifm-color-emphasis-500)] focus:border-[var(--ifm-color-primary)] focus:ring-2 focus:ring-[var(--ifm-color-primary)]/20"
                />

                <div className="mt-2 flex justify-between gap-3">
                  <span className="text-[11px] text-[var(--ifm-color-emphasis-600)]">
                    This name appears in your workspace.
                  </span>

                  <span className="shrink-0 text-[11px] tabular-nums text-[var(--ifm-color-emphasis-600)]">
                    {name.length}/60
                  </span>
                </div>
              </div>

              {/* Email address */}
              <div>
                <label
                  htmlFor="profile-email"
                  className="mb-2 block text-sm font-bold text-[var(--ifm-font-color-base)]"
                >
                  Email address
                </label>

                <div className="relative">
                  <input
                    id="profile-email"
                    type="email"
                    value={email}
                    readOnly
                    aria-describedby="profile-email-hint"
                    className="w-full cursor-not-allowed rounded-xl border border-[var(--ifm-color-emphasis-200)] bg-[var(--ifm-color-emphasis-100)] px-4 py-3.5 pr-24 text-sm text-[var(--ifm-color-emphasis-700)] outline-none"
                  />

                  <span className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg border border-[var(--ifm-color-emphasis-300)] px-2 py-1 text-[10px] font-bold text-[var(--ifm-color-emphasis-600)]">
                    Read only
                  </span>
                </div>

                <p
                  id="profile-email-hint"
                  className="mb-0 mt-2 text-[11px] leading-5 text-[var(--ifm-color-emphasis-600)]"
                >
                  Email editing is not available in this frontend demo.
                </p>
              </div>

              {/* Save controls */}
              <div className="flex flex-wrap items-center gap-3 border-t border-[var(--ifm-color-emphasis-200)] pt-5">
                <button
                  type="submit"
                  disabled={busy || !hasChanges}
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
                  style={{ background: "var(--ifm-color-primary)" }}
                >
                  {busy ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Saving...
                    </>
                  ) : (
                    <>
                      Save changes
                      <span>→</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={resetName}
                  disabled={!hasChanges}
                  className="rounded-xl border border-[var(--ifm-color-emphasis-300)] px-5 py-3 text-sm font-bold text-[var(--ifm-color-emphasis-700)] transition-colors hover:bg-[var(--ifm-color-emphasis-100)] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Discard changes
                </button>
              </div>
            </form>
          </section>

          {/* LIVE PROFILE PREVIEW */}
          <aside className="space-y-6">

            <section className="overflow-hidden rounded-2xl border border-[var(--ifm-color-emphasis-200)] bg-[var(--ifm-background-surface-color)]">
              <div
                className="h-24"
                style={{
                  background:
                    "linear-gradient(120deg, var(--ifm-color-primary), color-mix(in srgb, var(--ifm-color-primary) 35%, #172033))",
                }}
              />

              <div className="px-5 pb-6">
                <div className="-mt-10 mb-4 flex items-end justify-between">
                  <div
                    className="flex h-20 w-20 items-center justify-center rounded-2xl border-4 border-[var(--ifm-background-surface-color)] text-xl font-black text-white shadow-lg"
                    style={{ background: "var(--ifm-color-primary)" }}
                  >
                    {initials}
                  </div>

                  <span className="mb-1 rounded-full bg-[var(--ifm-color-emphasis-100)] px-3 py-1 text-[10px] font-bold text-[var(--ifm-color-emphasis-700)]">
                    LIVE PREVIEW
                  </span>
                </div>

                <h3 className="mb-1 break-words text-xl font-black text-[var(--ifm-font-color-base)]">
                  {previewName}
                </h3>

                <p className="mb-4 break-all text-xs text-[var(--ifm-color-emphasis-600)]">
                  {email || "Email not available"}
                </p>

                <div className="rounded-xl border border-[var(--ifm-color-emphasis-200)] bg-[var(--ifm-background-color)] p-3">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-[var(--ifm-color-emphasis-600)]">
                    Profile identity
                  </p>

                  <p className="mb-0 text-xs leading-5 text-[var(--ifm-color-emphasis-700)]">
                    This is how your display name and generated avatar initials
                    will appear in your dashboard.
                  </p>
                </div>
              </div>
            </section>

            {/* ACCOUNT DETAILS */}
            <section className="rounded-2xl border border-[var(--ifm-color-emphasis-200)] bg-[var(--ifm-background-surface-color)] p-5">
              <p
                className="mb-2 text-[10px] font-black uppercase tracking-[0.18em]"
                style={{ color: "var(--ifm-color-primary)" }}
              >
                ACCOUNT OVERVIEW
              </p>

              <h3 className="mb-5 text-base font-black text-[var(--ifm-font-color-base)]">
                Your account details
              </h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs text-[var(--ifm-color-emphasis-600)]">
                    Account type
                  </span>
                  <span className="text-xs font-bold text-[var(--ifm-font-color-base)]">
                    Demo member
                  </span>
                </div>

                <div className="border-t border-[var(--ifm-color-emphasis-200)]" />

                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs text-[var(--ifm-color-emphasis-600)]">
                    Profile status
                  </span>
                  <span
                    className="text-xs font-bold"
                    style={{ color: "var(--ifm-color-primary)" }}
                  >
                    Available
                  </span>
                </div>

                <div className="border-t border-[var(--ifm-color-emphasis-200)]" />

                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs text-[var(--ifm-color-emphasis-600)]">
                    Email visibility
                  </span>
                  <span className="text-xs font-bold text-[var(--ifm-font-color-base)]">
                    Private
                  </span>
                </div>
              </div>
            </section>

            {/* QUICK LINKS */}
            <section className="rounded-2xl border border-[var(--ifm-color-emphasis-200)] bg-[var(--ifm-background-surface-color)] p-5">
              <h3 className="mb-4 text-sm font-black text-[var(--ifm-font-color-base)]">
                Manage your account
              </h3>

              <div className="space-y-2">
                <Link
                  to="/settings/account"
                  className="flex items-center justify-between rounded-xl border border-[var(--ifm-color-emphasis-200)] p-3 text-xs font-bold text-[var(--ifm-font-color-base)] no-underline transition-colors hover:border-[var(--ifm-color-primary)] hover:bg-[var(--ifm-color-emphasis-100)]"
                >
                  Account settings
                  <span style={{ color: "var(--ifm-color-primary)" }}>→</span>
                </Link>

                <Link
                  to="/settings/security"
                  className="flex items-center justify-between rounded-xl border border-[var(--ifm-color-emphasis-200)] p-3 text-xs font-bold text-[var(--ifm-font-color-base)] no-underline transition-colors hover:border-[var(--ifm-color-primary)] hover:bg-[var(--ifm-color-emphasis-100)]"
                >
                  Security settings
                  <span style={{ color: "var(--ifm-color-primary)" }}>→</span>
                </Link>

                <Link
                  to="/dashboard"
                  className="flex items-center justify-between rounded-xl border border-[var(--ifm-color-emphasis-200)] p-3 text-xs font-bold text-[var(--ifm-font-color-base)] no-underline transition-colors hover:border-[var(--ifm-color-primary)] hover:bg-[var(--ifm-color-emphasis-100)]"
                >
                  Back to dashboard
                  <span style={{ color: "var(--ifm-color-primary)" }}>→</span>
                </Link>
              </div>
            </section>
          </aside>
        </div>

        {/* DEMO INFORMATION */}
        <section className="flex items-start gap-3 rounded-2xl border border-amber-500/30 bg-amber-500/5 p-5">
          <span className="text-xl text-amber-600">ⓘ</span>

          <div>
            <h3 className="mb-1 text-sm font-black text-[var(--ifm-font-color-base)]">
              About your demo profile
            </h3>

            <p className="mb-0 text-xs leading-6 text-[var(--ifm-color-emphasis-700)]">
              Profile changes are saved through your local demo authentication
              provider. This profile does not currently support profile photos,
              public profile publishing, email changes, or cloud synchronization.
              Do not store sensitive personal information in this prototype.
            </p>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}

export default function ProfilePage() {
  return (
    <ProtectedRoute>
      <ProfileContent />
    </ProtectedRoute>
  );
}

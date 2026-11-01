import React, { FormEvent, useState } from "react";
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
import { authService } from "@site/src/services/authService";

function ResetPasswordForm() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    if (password !== confirm) {
      setError("The passwords do not match.");
      return;
    }
    setBusy(true);
    try {
      await authService.resetPassword(password);
      window.location.assign("/auth/login?reset=success");
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Could not reset password.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <AuthShell title="Choose a new password"
      subtitle="Update the password for your local demo account.">
      <form className="chh-form" onSubmit={submit}>
        {error ? <AuthNotice type="error">{error}</AuthNotice> : null}
        <PasswordInput id="new-password" label="New password" value={password}
          onChange={setPassword} autoComplete="new-password" />
        <PasswordInput id="confirm-new-password" label="Confirm new password" value={confirm}
          onChange={setConfirm} autoComplete="new-password" />
        <button className="chh-button chh-button-primary chh-button-full" disabled={busy}>
          {busy ? "Updating…" : "Update demo password"}
        </button>
        <p className="chh-form-footnote">This reset is a local simulation, not a secure email-based recovery flow.</p>
        <Link className="chh-back-link" to="/auth/login">Back to sign in</Link>
      </form>
    </AuthShell>
  );
}

export default function ResetPasswordPage() {
  return <GuestRoute><ResetPasswordForm /></GuestRoute>;
}

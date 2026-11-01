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
import { authService } from "@site/src/services/authService";

function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    try {
      authService.requestPasswordReset(email);
      setSent(true);
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Could not start reset.");
    }
  }

  return (
    <AuthShell title="Reset your password"
      subtitle="Enter the email used for your demo account to continue.">
      {sent ? (
        <div className="chh-form">
          <AuthNotice type="success">Demo account found. No email was sent and no email ownership was verified.</AuthNotice>
          <Link className="chh-button chh-button-primary chh-button-full" to="/auth/reset-password">
            Continue to demo reset <span aria-hidden="true">→</span>
          </Link>
          <Link className="chh-back-link" to="/auth/login">Back to sign in</Link>
        </div>
      ) : (
        <form className="chh-form" onSubmit={submit}>
          {error ? <AuthNotice type="error">{error}</AuthNotice> : null}
          <div className="chh-field">
            <label className="chh-label" htmlFor="reset-email">Email address</label>
            <input id="reset-email" className="chh-input" type="email" value={email}
              onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" required />
          </div>
          <button className="chh-button chh-button-primary chh-button-full">Continue</button>
          <p className="chh-form-footnote">This demo does not send a reset email or verify ownership of the address.</p>
          <Link className="chh-back-link" to="/auth/login">Back to sign in</Link>
        </form>
      )}
    </AuthShell>
  );
}

export default function ForgotPasswordPage() {
  return <GuestRoute><ForgotPasswordForm /></GuestRoute>;
}

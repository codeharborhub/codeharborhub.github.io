import React, { useEffect } from "react";
// @ts-ignore
import { useLocation } from "@docusaurus/router";
// @ts-ignore
import Link from "@docusaurus/Link";
// @ts-ignore
import { useAuth } from "@site/src/context/AuthContext";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  useEffect(() => {
    if (!loading && !user) {
      const next = encodeURIComponent(location.pathname + location.search);
      window.location.replace(`/auth/login?next=${next}`);
    }
  }, [loading, user, location.pathname, location.search]);

  if (loading) {
    return (
      <div className="chh-auth-state">
        <span className="chh-spinner" />
        <p>Checking your demo session…</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="chh-auth-state">
        <p>Sign in to access this page.</p>
        <Link className="chh-button chh-button-primary" to="/auth/login">Go to sign in</Link>
      </div>
    );
  }

  return <>{children}</>;
}

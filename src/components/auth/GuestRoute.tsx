import React, { useEffect } from "react";
// @ts-ignore
import { useAuth } from "@site/src/context/AuthContext";

export default function GuestRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && user) window.location.replace("/dashboard");
  }, [loading, user]);

  if (loading || user) {
    return (
      <div className="chh-auth-state">
        <span className="chh-spinner" />
        <p>{user ? "Taking you to your dashboard…" : "Loading…"}</p>
      </div>
    );
  }

  return <>{children}</>;
}

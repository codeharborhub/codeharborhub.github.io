import React from "react";

export default function AuthNotice({
  type = "info",
  children,
}: {
  type?: "info" | "success" | "error";
  children: React.ReactNode;
}) {
  return <div className={`chh-notice chh-notice-${type}`} role="status">{children}</div>;
}

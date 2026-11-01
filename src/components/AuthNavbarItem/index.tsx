
import React, { useEffect, useRef, useState } from "react";
// @ts-ignore
import Link from "@docusaurus/Link";
// @ts-ignore
import { useAuth } from "@site/src/context/AuthContext";

type AuthUser = {
  name?: string;
  email?: string;
};

export default function AuthNavbarItem() {
  const { user, logout } = useAuth();

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const authUser = user as AuthUser | null;

  const displayName = authUser?.name?.trim() || "Member";
  const email = authUser?.email || "";

  const initials = displayName
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");

  // Close dropdown when clicking outside.
  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  function handleLogout() {
    setIsOpen(false);

    try {
      logout();
      window.location.assign("/auth/login");
    } catch (error) {
      console.error("Unable to log out:", error);
    }
  }

  const linkStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "11px 14px",
    borderRadius: "10px",
    color: "var(--ifm-font-color-base)",
    textDecoration: "none",
    fontSize: "0.9rem",
    fontWeight: 500,
    transition: "background 0.2s ease",
  };

  // Logged-out navbar
  if (!user) {
    return (
      <div
        className="chh-auth-navbar"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Link
          to="/auth/login"
          className="navbar__link"
          style={{
            fontWeight: 600,
            fontSize: "0.9rem",
          }}
        >
          Log in
        </Link>

        <Link
          to="/auth/register"
          className="chh-auth-register"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "8px 15px",
            borderRadius: "9px",
            color: "#fff",
            background: "var(--ifm-color-primary)",
            fontWeight: 700,
            fontSize: "0.85rem",
            textDecoration: "none",
            transition: "opacity 0.2s ease",
          }}
        >
          Get started
          <span aria-hidden="true" style={{ marginLeft: 5 }}>
            →
          </span>
        </Link>
      </div>
    );
  }

  // Logged-in navbar
  return (
    <div
      ref={menuRef}
      className="chh-auth-navbar"
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
      }}
    >
      <button
        type="button"
        aria-label="Open account menu"
        aria-expanded={isOpen}
        aria-haspopup="menu"
        onClick={() => setIsOpen((previous) => !previous)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "9px",
          border: "1px solid var(--ifm-color-emphasis-300)",
          borderRadius: "999px",
          padding: "5px 10px 5px 5px",
          background: "var(--ifm-background-surface-color)",
          color: "var(--ifm-font-color-base)",
          cursor: "pointer",
          font: "inherit",
        }}
      >
        <span
          style={{
            width: 34,
            height: 34,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            background: "var(--ifm-color-primary)",
            color: "#fff",
            fontSize: "0.85rem",
            fontWeight: 800,
          }}
        >
          {initials || "C"}
        </span>

        <span
          className="chh-auth-user-name"
          style={{
            maxWidth: 110,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            fontSize: "0.85rem",
            fontWeight: 700,
          }}
        >
          {displayName}
        </span>

        <span
          aria-hidden="true"
          style={{
            fontSize: "0.7rem",
            transition: "transform 0.2s ease",
            transform: isOpen ? "rotate(180deg)" : "rotate(0)",
          }}
        >
          ▼
        </span>
      </button>

      {isOpen && (
        <div
          role="menu"
          aria-label="Account menu"
          className="chh-auth-dropdown"
          style={{
            position: "absolute",
            top: "calc(100% + 12px)",
            right: 0,
            zIndex: 1000,
            width: 270,
            padding: 10,
            border: "1px solid var(--ifm-color-emphasis-300)",
            borderRadius: 16,
            background: "var(--ifm-background-surface-color)",
            boxShadow: "0 12px 35px rgba(0,0,0,0.16)",
          }}
        >
          {/* User information */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "12px 10px 15px",
              borderBottom: "1px solid var(--ifm-color-emphasis-200)",
              marginBottom: 8,
            }}
          >
            <div
              style={{
                width: 43,
                height: 43,
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 13,
                background: "var(--ifm-color-primary)",
                color: "#fff",
                fontWeight: 800,
              }}
            >
              {initials || "C"}
            </div>

            <div style={{ minWidth: 0 }}>
              <div
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 800,
                  color: "var(--ifm-font-color-base)",
                }}
              >
                {displayName}
              </div>

              <div
                style={{
                  marginTop: 3,
                  fontSize: "0.75rem",
                  color: "var(--ifm-color-emphasis-600)",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {email}
              </div>
            </div>
          </div>

          {/* Navigation links */}
          <Link
            to="/dashboard"
            role="menuitem"
            style={linkStyle}
            onClick={() => setIsOpen(false)}
          >
            <span>▦</span>
            Dashboard
          </Link>

          <Link
            to="/profile"
            role="menuitem"
            style={linkStyle}
            onClick={() => setIsOpen(false)}
          >
            <span>👤</span>
            My profile
          </Link>

          <Link
            to="/settings/account"
            role="menuitem"
            style={linkStyle}
            onClick={() => setIsOpen(false)}
          >
            <span>⚙️</span>
            Account settings
          </Link>

          <Link
            to="/settings/security"
            role="menuitem"
            style={linkStyle}
            onClick={() => setIsOpen(false)}
          >
            <span>🔐</span>
            Security & privacy
          </Link>

          <Link
            to="/tutorial"
            role="menuitem"
            style={linkStyle}
            onClick={() => setIsOpen(false)}
          >
            <span>📚</span>
            Explore tutorials
          </Link>

          {/* Logout */}
          <div
            style={{
              borderTop: "1px solid var(--ifm-color-emphasis-200)",
              marginTop: 8,
              paddingTop: 8,
            }}
          >
            <button
              type="button"
              role="menuitem"
              onClick={handleLogout}
              style={{
                ...linkStyle,
                width: "100%",
                border: "none",
                background: "transparent",
                color: "#dc4545",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              <span>↪</span>
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

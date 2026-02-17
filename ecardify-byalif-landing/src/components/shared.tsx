"use client";

import { useState, useEffect } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const stored = localStorage.getItem("theme") as "dark" | "light" | null;
    if (stored) {
      setTheme(stored);
      document.documentElement.setAttribute("data-theme", stored);
    }
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.setAttribute("data-theme", next);
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      style={{
        background: "transparent",
        border: "1px solid var(--color-dark-border)",
        borderRadius: 8,
        padding: "6px 10px",
        cursor: "pointer",
        color: "var(--color-text-primary)",
        fontSize: "1.1rem",
        lineHeight: 1,
        transition: "border-color 0.3s",
      }}
    >
      {theme === "dark" ? "\u2600\uFE0F" : "\u{1F319}"}
    </button>
  );
}

export function ContactModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 10000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="glass-card"
        style={{
          padding: "2rem",
          maxWidth: 420,
          width: "90%",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            fontSize: "1.25rem",
            fontWeight: 700,
            marginBottom: "0.75rem",
          }}
        >
          Contact Us
        </h3>
        <p
          style={{
            color: "var(--color-text-secondary)",
            marginBottom: "1.5rem",
            fontSize: "0.95rem",
          }}
        >
          Have questions or feedback? We would love to hear from you.
        </p>
        <a
          href="mailto:addaemailservice@gmail.com?subject=eCardify%20Inquiry"
          className="btn-primary"
          style={{ display: "inline-flex", marginBottom: "1rem" }}
        >
          Send Email
        </a>
        <br />
        <button
          onClick={onClose}
          style={{
            background: "transparent",
            border: "none",
            color: "var(--color-text-secondary)",
            cursor: "pointer",
            fontSize: "0.9rem",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

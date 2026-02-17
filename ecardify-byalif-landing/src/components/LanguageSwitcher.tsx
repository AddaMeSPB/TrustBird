"use client";

import { useState, useRef, useEffect } from "react";
import { LOCALE_CONFIGS, type Locale } from "@/lib/i18n";

export function LanguageSwitcher({ current }: { current: Locale }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentConfig = LOCALE_CONFIGS.find((c) => c.code === current)!;

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <button
        onClick={() => setOpen(!open)}
        aria-label="Switch language"
        style={{
          background: "transparent",
          border: "1px solid var(--color-dark-border)",
          borderRadius: 8,
          padding: "6px 12px",
          cursor: "pointer",
          color: "var(--color-text-primary)",
          fontSize: "0.85rem",
          display: "flex",
          alignItems: "center",
          gap: 6,
          transition: "border-color 0.3s",
        }}
      >
        <span>{currentConfig.flag}</span>
        <span>{currentConfig.name}</span>
        <span style={{ fontSize: "0.7rem", opacity: 0.6 }}>
          {open ? "\u25B2" : "\u25BC"}
        </span>
      </button>

      {open && (
        <div
          className="glass-card"
          style={{
            position: "absolute",
            top: "calc(100% + 6px)",
            right: 0,
            minWidth: 180,
            padding: "0.5rem 0",
            zIndex: 100,
          }}
        >
          {LOCALE_CONFIGS.map((cfg) => (
            <a
              key={cfg.code}
              href={cfg.path}
              onClick={() => setOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "0.5rem 1rem",
                color:
                  cfg.code === current
                    ? "#06B6D4"
                    : "var(--color-text-primary)",
                textDecoration: "none",
                fontSize: "0.9rem",
                transition: "background 0.2s",
                background:
                  cfg.code === current
                    ? "rgba(6, 182, 212, 0.06)"
                    : "transparent",
              }}
            >
              <span>{cfg.flag}</span>
              <span>{cfg.name}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

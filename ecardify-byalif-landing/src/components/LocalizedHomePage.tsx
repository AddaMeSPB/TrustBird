"use client";

import { useState, useEffect, useRef } from "react";
import { type Locale, getTranslations } from "@/lib/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle, ContactModal } from "./shared";

/* ── Icon helper ── */
function FeatureIcon({ type }: { type: string }) {
  const icons: Record<string, string> = {
    card: "\uD83C\uDFB4",
    wallet: "\uD83D\uDCF1",
    tap: "\uD83D\uDC46",
    qr: "\uD83D\uDD33",
    template: "\uD83C\uDFA8",
    cloud: "\u2601\uFE0F",
  };
  return (
    <span style={{ fontSize: "2rem", lineHeight: 1 }}>
      {icons[type] || "\u2B50"}
    </span>
  );
}

/* ── Screen: Card List ── */
function ScreenCardList() {
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: "#0A0A0A" }}>
      {/* Status bar */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 16px 4px", fontSize: "0.65rem", fontWeight: 600, color: "#fff" }}>
        <span>9:41</span>
        <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
          <svg width="15" height="10" viewBox="0 0 15 10" fill="none"><rect x="0" y="3" width="3" height="7" rx="0.5" fill="#fff"/><rect x="4" y="2" width="3" height="8" rx="0.5" fill="#fff"/><rect x="8" y="1" width="3" height="9" rx="0.5" fill="#fff"/><rect x="12" y="0" width="3" height="10" rx="0.5" fill="#fff"/></svg>
          <svg width="15" height="10" viewBox="0 0 15 10" fill="none"><path d="M7.5 2C4.5 2 2 3.5 0 6l1 1c1.7-2.2 3.8-3.5 6.5-3.5S11.3 4.8 13 7l1-1c-2-2.5-4.5-4-6.5-4z" fill="#fff"/></svg>
          <svg width="22" height="10" viewBox="0 0 22 10" fill="none"><rect x="0" y="1" width="18" height="8" rx="2" stroke="#fff" strokeWidth="1"/><rect x="1.5" y="2.5" width="13" height="5" rx="1" fill="#06B6D4"/><rect x="19" y="3" width="2" height="4" rx="0.5" fill="#fff"/></svg>
        </div>
      </div>
      {/* Nav title */}
      <div style={{ padding: "12px 16px 8px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontSize: "1.25rem", fontWeight: 700, color: "#fff" }}>Digital Cards</span>
        <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#06B6D4", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.8rem", color: "#fff", fontWeight: 700 }}>+</div>
      </div>
      {/* Search bar */}
      <div style={{ margin: "0 16px 12px", background: "#1C1C1E", borderRadius: 10, padding: "8px 12px", display: "flex", alignItems: "center", gap: 6 }}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="6" cy="6" r="5" stroke="#8E8E93" strokeWidth="1.5"/><line x1="10" y1="10" x2="13" y2="13" stroke="#8E8E93" strokeWidth="1.5" strokeLinecap="round"/></svg>
        <span style={{ fontSize: "0.7rem", color: "#8E8E93" }}>Search cards</span>
      </div>
      {/* Card items */}
      {[
        { initials: "SK", name: "Saroar Khandoker", role: "iOS Developer", color: "#06B6D4" },
        { initials: "JD", name: "John Doe", role: "Product Manager", color: "#8B5CF6" },
        { initials: "AL", name: "Anna Lee", role: "UX Designer", color: "#F59E0B" },
      ].map((card, i) => (
        <div key={i} style={{ margin: "0 16px 8px", background: "#1C1C1E", borderRadius: 12, padding: "12px 14px", display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: `linear-gradient(135deg, ${card.color}, ${card.color}88)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.7rem", fontWeight: 700, color: "#fff" }}>{card.initials}</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#fff" }}>{card.name}</div>
            <div style={{ fontSize: "0.6rem", color: "#8E8E93" }}>{card.role}</div>
          </div>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="2" width="12" height="12" rx="2" stroke="#8E8E93" strokeWidth="1"/><rect x="5" y="5" width="6" height="6" rx="1" fill="#8E8E93"/></svg>
        </div>
      ))}
      {/* Tab bar */}
      <div style={{ marginTop: "auto", borderTop: "1px solid #2C2C2E", display: "flex", justifyContent: "space-around", padding: "8px 0 4px" }}>
        {[
          { label: "Cards", active: true },
          { label: "Wallet", active: false },
          { label: "Settings", active: false },
        ].map((tab) => (
          <div key={tab.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
            <div style={{ width: 20, height: 20, borderRadius: 4, background: tab.active ? "#06B6D4" : "transparent", border: tab.active ? "none" : "1.5px solid #8E8E93", display: "flex", alignItems: "center", justifyContent: "center" }}>
              {tab.active && <div style={{ width: 8, height: 8, borderRadius: 2, background: "#fff" }} />}
            </div>
            <span style={{ fontSize: "0.5rem", color: tab.active ? "#06B6D4" : "#8E8E93", fontWeight: tab.active ? 600 : 400 }}>{tab.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Screen: Card Creation Form ── */
function ScreenCardForm() {
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: "#0A0A0A" }}>
      {/* Status bar */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 16px 4px", fontSize: "0.65rem", fontWeight: 600, color: "#fff" }}>
        <span>9:41</span>
        <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
          <svg width="22" height="10" viewBox="0 0 22 10" fill="none"><rect x="0" y="1" width="18" height="8" rx="2" stroke="#fff" strokeWidth="1"/><rect x="1.5" y="2.5" width="13" height="5" rx="1" fill="#06B6D4"/><rect x="19" y="3" width="2" height="4" rx="0.5" fill="#fff"/></svg>
        </div>
      </div>
      {/* Nav */}
      <div style={{ padding: "8px 16px 12px", display: "flex", alignItems: "center", gap: 8 }}>
        <svg width="10" height="16" viewBox="0 0 10 16" fill="none"><path d="M8 2L2 8l6 6" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        <span style={{ fontSize: "1.1rem", fontWeight: 700, color: "#fff" }}>New Card</span>
      </div>
      {/* Form fields */}
      <div style={{ padding: "0 16px", display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={{ background: "#1C1C1E", borderRadius: 10, overflow: "hidden" }}>
          {[
            { label: "Organization", value: "Alif Tech" },
            { label: "Job Title", value: "iOS Developer" },
            { label: "First Name", value: "Saroar" },
            { label: "Last Name", value: "Khandoker" },
          ].map((field, i) => (
            <div key={i} style={{ padding: "10px 14px", borderBottom: i < 3 ? "0.5px solid #2C2C2E" : "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "0.7rem", color: "#8E8E93" }}>{field.label}</span>
              <span style={{ fontSize: "0.7rem", color: "#fff", fontWeight: 500 }}>{field.value}</span>
            </div>
          ))}
        </div>
        <div style={{ background: "#1C1C1E", borderRadius: 10, overflow: "hidden" }}>
          {[
            { label: "Email", value: "saroar@alif.tech" },
            { label: "Phone", value: "+49 170 1234567" },
            { label: "Website", value: "alif.tech" },
          ].map((field, i) => (
            <div key={i} style={{ padding: "10px 14px", borderBottom: i < 2 ? "0.5px solid #2C2C2E" : "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "0.7rem", color: "#8E8E93" }}>{field.label}</span>
              <span style={{ fontSize: "0.7rem", color: "#fff", fontWeight: 500 }}>{field.value}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Create button */}
      <div style={{ marginTop: "auto", padding: "16px" }}>
        <div style={{ background: "linear-gradient(135deg, #06B6D4, #0891B2)", borderRadius: 12, padding: "12px 0", textAlign: "center", fontSize: "0.75rem", fontWeight: 600, color: "#fff" }}>
          Create digital card
        </div>
      </div>
    </div>
  );
}

/* ── Screen: Card Design Picker ── */
function ScreenDesignPicker() {
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: "#0A0A0A" }}>
      {/* Status bar */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 16px 4px", fontSize: "0.65rem", fontWeight: 600, color: "#fff" }}>
        <span>9:41</span>
        <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
          <svg width="22" height="10" viewBox="0 0 22 10" fill="none"><rect x="0" y="1" width="18" height="8" rx="2" stroke="#fff" strokeWidth="1"/><rect x="1.5" y="2.5" width="13" height="5" rx="1" fill="#06B6D4"/><rect x="19" y="3" width="2" height="4" rx="0.5" fill="#fff"/></svg>
        </div>
      </div>
      {/* Nav */}
      <div style={{ padding: "8px 16px 12px" }}>
        <span style={{ fontSize: "1.1rem", fontWeight: 700, color: "#fff" }}>Card Design</span>
      </div>
      {/* Color swatches */}
      <div style={{ padding: "0 16px 12px", display: "flex", gap: 8, overflowX: "hidden" }}>
        {["#06B6D4", "#8B5CF6", "#F59E0B", "#EF4444", "#10B981", "#1C1C1E"].map((color, i) => (
          <div key={i} style={{ width: 36, height: 36, borderRadius: 10, background: color === "#1C1C1E" ? color : `linear-gradient(135deg, ${color}, ${color}99)`, flexShrink: 0, border: i === 0 ? "2px solid #fff" : "2px solid transparent", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {i === 0 && <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7l3 3 5-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
          </div>
        ))}
      </div>
      {/* Card preview */}
      <div style={{ margin: "0 16px", background: "linear-gradient(145deg, #111, #1A1A1A)", border: "1px solid rgba(6,182,212,0.3)", borderRadius: 14, padding: "16px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, right: 0, width: "60%", height: "100%", background: "radial-gradient(ellipse at top right, rgba(6,182,212,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10, position: "relative", zIndex: 1 }}>
          <div style={{ width: 28, height: 28, borderRadius: "50%", background: "linear-gradient(135deg, #06B6D4, #0891B2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.6rem", fontWeight: 700, color: "#fff" }}>SK</div>
          <div>
            <div style={{ fontSize: "0.7rem", fontWeight: 600, color: "#fff" }}>Saroar Khandoker</div>
            <div style={{ fontSize: "0.55rem", color: "#8E8E93" }}>iOS Developer</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 6, marginBottom: 10, position: "relative", zIndex: 1 }}>
          {["QR", "Wallet"].map((tag) => (
            <span key={tag} style={{ padding: "1px 8px", borderRadius: 100, fontSize: "0.5rem", fontWeight: 500, border: "1px solid rgba(6,182,212,0.3)", color: "#06B6D4" }}>{tag}</span>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", position: "relative", zIndex: 1 }}>
          <div style={{ fontSize: "0.5rem", color: "#555", fontFamily: "var(--font-mono)" }}>ecardify.byalif.app</div>
          {/* Mini QR */}
          <div style={{ width: 28, height: 28, background: "#fff", borderRadius: 4, padding: 3, display: "grid", gridTemplateColumns: "repeat(5,1fr)", gridTemplateRows: "repeat(5,1fr)", gap: 0.5 }}>
            {Array.from({ length: 25 }).map((_, i) => (
              <div key={i} style={{ background: [0,1,2,4,5,6,10,12,14,18,20,21,22,24].includes(i) ? "#000" : "#fff", borderRadius: 0.5 }} />
            ))}
          </div>
        </div>
      </div>
      {/* Layout label */}
      <div style={{ padding: "14px 16px 6px" }}>
        <span style={{ fontSize: "0.7rem", fontWeight: 600, color: "#fff" }}>Layout Style</span>
      </div>
      {/* Layout options */}
      <div style={{ padding: "0 16px", display: "flex", gap: 8 }}>
        {["Classic", "Modern", "Minimal"].map((style, i) => (
          <div key={style} style={{ flex: 1, background: i === 0 ? "rgba(6,182,212,0.15)" : "#1C1C1E", border: i === 0 ? "1px solid rgba(6,182,212,0.4)" : "1px solid #2C2C2E", borderRadius: 8, padding: "8px 0", textAlign: "center", fontSize: "0.55rem", color: i === 0 ? "#06B6D4" : "#8E8E93", fontWeight: i === 0 ? 600 : 400 }}>{style}</div>
        ))}
      </div>
    </div>
  );
}

/* ── Screen: Apple Wallet Pass ── */
function ScreenWalletPass() {
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: "#0A0A0A" }}>
      {/* Status bar */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 16px 4px", fontSize: "0.65rem", fontWeight: 600, color: "#fff" }}>
        <span>9:41</span>
        <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
          <svg width="22" height="10" viewBox="0 0 22 10" fill="none"><rect x="0" y="1" width="18" height="8" rx="2" stroke="#fff" strokeWidth="1"/><rect x="1.5" y="2.5" width="13" height="5" rx="1" fill="#06B6D4"/><rect x="19" y="3" width="2" height="4" rx="0.5" fill="#fff"/></svg>
        </div>
      </div>
      {/* Nav */}
      <div style={{ padding: "8px 16px 8px", display: "flex", alignItems: "center", gap: 8 }}>
        <svg width="10" height="16" viewBox="0 0 10 16" fill="none"><path d="M8 2L2 8l6 6" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        <span style={{ fontSize: "1.1rem", fontWeight: 700, color: "#fff" }}>Wallet Pass</span>
      </div>
      {/* Pass card */}
      <div style={{ margin: "4px 16px 0", background: "linear-gradient(145deg, #0C2D35 0%, #0A1E24 50%, #06161C 100%)", borderRadius: 14, padding: "16px", position: "relative", overflow: "hidden", border: "1px solid rgba(6,182,212,0.2)" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, #06B6D4, #22D3EE, #06B6D4)" }} />
        {/* Logo + type */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#06B6D4" }}>eCardify</span>
          <span style={{ fontSize: "0.5rem", color: "#8E8E93", textTransform: "uppercase", letterSpacing: 1 }}>Business Card</span>
        </div>
        {/* Name + position */}
        <div style={{ marginBottom: 10 }}>
          <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#fff" }}>Saroar Khandoker</div>
          <div style={{ fontSize: "0.6rem", color: "#22D3EE" }}>iOS Developer at Alif Tech</div>
        </div>
        {/* Contact info */}
        <div style={{ display: "flex", flexDirection: "column", gap: 4, marginBottom: 12 }}>
          {[
            { icon: "\u2709", value: "saroar@alif.tech" },
            { icon: "\u260E", value: "+49 170 1234567" },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ fontSize: "0.55rem" }}>{item.icon}</span>
              <span style={{ fontSize: "0.55rem", color: "#A0AEC0" }}>{item.value}</span>
            </div>
          ))}
        </div>
        {/* QR code */}
        <div style={{ display: "flex", justifyContent: "center", padding: "8px 0 4px" }}>
          <div style={{ width: 56, height: 56, background: "#fff", borderRadius: 6, padding: 4, display: "grid", gridTemplateColumns: "repeat(7,1fr)", gridTemplateRows: "repeat(7,1fr)", gap: 0.5 }}>
            {Array.from({ length: 49 }).map((_, i) => (
              <div key={i} style={{ background: [0,1,2,4,5,6,7,13,14,16,18,20,21,22,24,26,28,30,34,35,36,38,42,43,44,45,46,47,48].includes(i) ? "#000" : "#fff", borderRadius: 0.5 }} />
            ))}
          </div>
        </div>
      </div>
      {/* Add to Wallet button */}
      <div style={{ padding: "12px 16px 0" }}>
        <div style={{ background: "#000", borderRadius: 12, padding: "10px 0", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, border: "1px solid #333" }}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <rect x="1" y="4" width="16" height="11" rx="2" fill="#333"/>
            <rect x="2" y="5" width="14" height="3" rx="1" fill="#06B6D4"/>
            <rect x="2" y="9" width="14" height="2" rx="0.5" fill="#8B5CF6"/>
            <rect x="2" y="12" width="14" height="2" rx="0.5" fill="#F59E0B"/>
          </svg>
          <span style={{ fontSize: "0.7rem", fontWeight: 600, color: "#fff" }}>Add to Apple Wallet</span>
        </div>
      </div>
      {/* Share button */}
      <div style={{ padding: "8px 16px" }}>
        <div style={{ background: "linear-gradient(135deg, #06B6D4, #0891B2)", borderRadius: 12, padding: "10px 0", textAlign: "center", fontSize: "0.7rem", fontWeight: 600, color: "#fff" }}>
          Share Pass
        </div>
      </div>
    </div>
  );
}

/* ── Phone Mockup with Carousel ── */
function PhoneMockup() {
  const [activeScreen, setActiveScreen] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const screens = [ScreenCardList, ScreenCardForm, ScreenDesignPicker, ScreenWalletPass];

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveScreen((prev) => (prev + 1) % screens.length);
    }, 3500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [screens.length]);

  return (
    <div className="phone-mockup-wrapper">
      {/* Teal glow orb behind phone */}
      <div className="phone-glow-orb" />

      <div className="phone-frame">
        {/* Dynamic Island */}
        <div className="phone-dynamic-island" />

        {/* Side buttons */}
        <div className="phone-btn-power" />
        <div className="phone-btn-vol-up" />
        <div className="phone-btn-vol-down" />

        {/* Screen area */}
        <div className="phone-screen">
          {screens.map((Screen, i) => (
            <div
              key={i}
              className="phone-screen-slide"
              style={{
                opacity: activeScreen === i ? 1 : 0,
                transition: "opacity 0.7s ease-in-out",
              }}
            >
              <Screen />
            </div>
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="phone-dots">
        {screens.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setActiveScreen(i);
              if (intervalRef.current) clearInterval(intervalRef.current);
              intervalRef.current = setInterval(() => {
                setActiveScreen((prev) => (prev + 1) % screens.length);
              }, 3500);
            }}
            className={`phone-dot ${activeScreen === i ? "active" : ""}`}
            aria-label={`Screen ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ── Main Page Component ── */
export function LocalizedHomePage({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);
  const [contactOpen, setContactOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── NAV ── */}
      <nav
        className="glass-nav"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: "0 1.5rem",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 64,
          }}
        >
          <a
            href="#"
            style={{
              textDecoration: "none",
              fontWeight: 800,
              fontSize: "1.25rem",
              letterSpacing: "-0.02em",
            }}
          >
            <span className="text-gradient-teal">eCardify</span>
          </a>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 24,
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 20,
                alignItems: "center",
              }}
              className="nav-links"
            >
              {(
                [
                  ["#features", t.nav.features],
                  ["#pricing", t.nav.pricing],
                  ["#faq", t.nav.faq],
                ] as const
              ).map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  style={{
                    textDecoration: "none",
                    color: "var(--color-text-secondary)",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    transition: "color 0.2s",
                  }}
                >
                  {label}
                </a>
              ))}
            </div>
            <LanguageSwitcher current={locale} />
            <ThemeToggle />
            <a href="#cta" className="btn-primary" style={{ padding: "8px 16px", fontSize: "0.85rem" }}>
              {t.nav.download}
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "120px 1.5rem 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            gap: 80,
            flexWrap: "wrap",
            justifyContent: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div style={{ flex: "1 1 480px", maxWidth: 560 }}>
            <div className="section-badge" style={{ marginBottom: 20 }}>
              {t.hero.badge}
            </div>
            <h1
              style={{
                fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                marginBottom: 20,
              }}
            >
              {t.hero.title.split(",").map((part, i) =>
                i === 1 ? (
                  <span key={i} className="text-gradient-teal">
                    ,{part}
                  </span>
                ) : (
                  <span key={i}>{part}</span>
                )
              )}
            </h1>
            <p
              style={{
                fontSize: "1.1rem",
                color: "var(--color-text-secondary)",
                lineHeight: 1.7,
                marginBottom: 32,
                maxWidth: 500,
              }}
            >
              {t.hero.subtitle}
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 48 }}>
              <a href="#cta" className="btn-primary">
                {t.hero.cta}
              </a>
              <a href="#pricing" className="btn-outline">
                {t.hero.ctaSecondary}
              </a>
            </div>

            {/* Stats */}
            <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
              {[
                { val: "50K+", label: t.hero.stats.cards },
                { val: "30K+", label: t.hero.stats.walletPasses },
                { val: "120+", label: t.hero.stats.countries },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    className="text-gradient-teal"
                    style={{ fontSize: "1.5rem", fontWeight: 800 }}
                  >
                    {s.val}
                  </div>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--color-text-muted)",
                      marginTop: 2,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ flex: "0 0 auto" }}>
            <PhoneMockup />
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section
        id="features"
        style={{ padding: "100px 1.5rem", position: "relative" }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div className="section-badge" style={{ marginBottom: 16 }}>
              {t.features.badge}
            </div>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                fontWeight: 800,
                letterSpacing: "-0.025em",
                marginBottom: 12,
              }}
            >
              {t.features.title}
            </h2>
            <p
              style={{
                color: "var(--color-text-secondary)",
                maxWidth: 560,
                margin: "0 auto",
                fontSize: "1.05rem",
              }}
            >
              {t.features.subtitle}
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: 24,
            }}
          >
            {t.features.items.map((item, i) => (
              <div
                key={i}
                className="glass-card"
                style={{ padding: "1.75rem" }}
              >
                <div style={{ marginBottom: 16 }}>
                  <FeatureIcon type={item.icon} />
                </div>
                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    marginBottom: 8,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    color: "var(--color-text-secondary)",
                    fontSize: "0.9rem",
                    lineHeight: 1.6,
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section
        id="pricing"
        style={{
          padding: "100px 1.5rem",
          position: "relative",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div className="section-badge" style={{ marginBottom: 16 }}>
              {t.pricing.badge}
            </div>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                fontWeight: 800,
                letterSpacing: "-0.025em",
                marginBottom: 12,
              }}
            >
              {t.pricing.title}
            </h2>
            <p
              style={{
                color: "var(--color-text-secondary)",
                maxWidth: 560,
                margin: "0 auto",
                fontSize: "1.05rem",
              }}
            >
              {t.pricing.subtitle}
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: 24,
              maxWidth: 1000,
              margin: "0 auto",
            }}
          >
            {/* Free */}
            <div className="pricing-card">
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  marginBottom: 8,
                }}
              >
                {t.pricing.free.name}
              </h3>
              <div
                style={{
                  fontSize: "2.5rem",
                  fontWeight: 800,
                  marginBottom: 4,
                }}
              >
                {t.pricing.free.price}
              </div>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  fontSize: "0.9rem",
                  marginBottom: 24,
                }}
              >
                {t.pricing.free.description}
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  marginBottom: 24,
                }}
              >
                {t.pricing.free.features.map((f, i) => (
                  <li
                    key={i}
                    style={{
                      padding: "6px 0",
                      fontSize: "0.9rem",
                      color: "var(--color-text-secondary)",
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <span style={{ color: "#06B6D4" }}>&#10003;</span> {f}
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className="btn-outline"
                style={{ width: "100%", justifyContent: "center" }}
              >
                {t.pricing.free.cta}
              </a>
            </div>

            {/* BasicCard */}
            <div className="pricing-card featured glow-accent">
              <div
                style={{
                  position: "absolute",
                  top: -1,
                  right: 20,
                  background: "linear-gradient(135deg, #06B6D4, #0891B2)",
                  padding: "4px 14px",
                  borderRadius: "0 0 8px 8px",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "#fff",
                }}
              >
                {t.pricing.basic.badge}
              </div>
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  marginBottom: 8,
                }}
              >
                {t.pricing.basic.name}
              </h3>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 4 }}>
                <span
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: 800,
                  }}
                >
                  {t.pricing.basic.price}
                </span>
                <span
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--color-text-muted)",
                  }}
                >
                  {t.pricing.oneTime}
                </span>
              </div>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  fontSize: "0.9rem",
                  marginBottom: 24,
                }}
              >
                {t.pricing.basic.description}
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  marginBottom: 24,
                }}
              >
                {t.pricing.basic.features.map((f, i) => (
                  <li
                    key={i}
                    style={{
                      padding: "6px 0",
                      fontSize: "0.9rem",
                      color: "var(--color-text-secondary)",
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <span style={{ color: "#06B6D4" }}>&#10003;</span> {f}
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                {t.pricing.basic.cta}
              </a>
            </div>

            {/* FlexiCard */}
            <div className="pricing-card premium glow-gold">
              <div
                style={{
                  position: "absolute",
                  top: -1,
                  right: 20,
                  background: "linear-gradient(135deg, #D4A853, #E8C96E)",
                  padding: "4px 14px",
                  borderRadius: "0 0 8px 8px",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "#080808",
                }}
              >
                {t.pricing.flexi.badge}
              </div>
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  marginBottom: 8,
                }}
              >
                {t.pricing.flexi.name}
              </h3>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 4 }}>
                <span
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: 800,
                  }}
                >
                  {t.pricing.flexi.price}
                </span>
                <span
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--color-text-muted)",
                  }}
                >
                  {t.pricing.oneTime}
                </span>
              </div>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  fontSize: "0.9rem",
                  marginBottom: 24,
                }}
              >
                {t.pricing.flexi.description}
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  marginBottom: 24,
                }}
              >
                {t.pricing.flexi.features.map((f, i) => (
                  <li
                    key={i}
                    style={{
                      padding: "6px 0",
                      fontSize: "0.9rem",
                      color: "var(--color-text-secondary)",
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <span style={{ color: "#D4A853" }}>&#10003;</span> {f}
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className="btn-primary"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  background: "linear-gradient(135deg, #D4A853, #B8922E)",
                }}
              >
                {t.pricing.flexi.cta}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" style={{ padding: "100px 1.5rem" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div className="section-badge" style={{ marginBottom: 16 }}>
              {t.faq.badge}
            </div>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                fontWeight: 800,
                letterSpacing: "-0.025em",
              }}
            >
              {t.faq.title}
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {t.faq.items.map((item, i) => (
              <div
                key={i}
                className={`faq-item ${openFaq === i ? "open" : ""}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: "100%",
                    padding: "1rem 1.25rem",
                    background: "transparent",
                    border: "none",
                    color: "var(--color-text-primary)",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    textAlign: "left",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <span>{item.question}</span>
                  <span
                    style={{
                      fontSize: "1.2rem",
                      transition: "transform 0.3s",
                      transform:
                        openFaq === i ? "rotate(45deg)" : "rotate(0)",
                      color: "#06B6D4",
                      flexShrink: 0,
                    }}
                  >
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div
                    style={{
                      padding: "0 1.25rem 1rem",
                      color: "var(--color-text-secondary)",
                      fontSize: "0.9rem",
                      lineHeight: 1.7,
                    }}
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        id="cta"
        style={{
          padding: "100px 1.5rem",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          <h2
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              marginBottom: 16,
            }}
          >
            {t.cta.title}
          </h2>
          <p
            style={{
              color: "var(--color-text-secondary)",
              fontSize: "1.1rem",
              marginBottom: 32,
              maxWidth: 500,
              margin: "0 auto 32px",
            }}
          >
            {t.cta.subtitle}
          </p>
          <a href="#" className="btn-primary" style={{ fontSize: "1rem", padding: "14px 32px" }}>
            {t.cta.button}
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        style={{
          borderTop: "1px solid var(--color-dark-border)",
          padding: "64px 1.5rem 32px",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: 48,
            marginBottom: 48,
          }}
        >
          <div>
            <div
              style={{
                fontWeight: 800,
                fontSize: "1.25rem",
                marginBottom: 12,
              }}
            >
              <span className="text-gradient-teal">eCardify</span>
            </div>
            <p
              style={{
                color: "var(--color-text-secondary)",
                fontSize: "0.9rem",
                lineHeight: 1.6,
              }}
            >
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <h4
              style={{
                fontWeight: 600,
                fontSize: "0.85rem",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "var(--color-text-muted)",
                marginBottom: 16,
              }}
            >
              {t.footer.product}
            </h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              {[
                ["#features", t.nav.features],
                ["#pricing", t.nav.pricing],
                ["#faq", t.nav.faq],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  style={{
                    color: "var(--color-text-secondary)",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    transition: "color 0.2s",
                  }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4
              style={{
                fontWeight: 600,
                fontSize: "0.85rem",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "var(--color-text-muted)",
                marginBottom: 16,
              }}
            >
              {t.footer.legal}
            </h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <a
                href={locale === "en" ? "/privacy" : `/${locale}/privacy`}
                style={{
                  color: "var(--color-text-secondary)",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                }}
              >
                {t.footer.privacy}
              </a>
              <a
                href={locale === "en" ? "/terms" : `/${locale}/terms`}
                style={{
                  color: "var(--color-text-secondary)",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                }}
              >
                {t.footer.terms}
              </a>
            </div>
          </div>

          <div>
            <h4
              style={{
                fontWeight: 600,
                fontSize: "0.85rem",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "var(--color-text-muted)",
                marginBottom: 16,
              }}
            >
              {t.footer.contact}
            </h4>
            <button
              onClick={() => setContactOpen(true)}
              style={{
                background: "transparent",
                border: "none",
                color: "var(--color-text-secondary)",
                fontSize: "0.9rem",
                cursor: "pointer",
                padding: 0,
              }}
            >
              addaemailservice@gmail.com
            </button>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid var(--color-dark-border)",
            paddingTop: 24,
            textAlign: "center",
            color: "var(--color-text-muted)",
            fontSize: "0.8rem",
          }}
        >
          {t.footer.copyright}
        </div>
      </footer>

      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}

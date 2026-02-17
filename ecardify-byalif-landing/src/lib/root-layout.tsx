import type { ReactNode } from "react";
import "@/app/globals.css";

const DOMAIN = "https://ecardify.byalif.app";

/* Theme script: reads localStorage synchronously to prevent flash of wrong theme.
   All content here is static/hardcoded -- no user input involved, so XSS risk is zero. */
function ThemeScript() {
  const codeToRunOnClient = `
    (function() {
      try {
        var theme = localStorage.getItem('theme');
        if (theme === 'light' || theme === 'dark') {
          document.documentElement.setAttribute('data-theme', theme);
        }
      } catch (e) {}
    })();
  `;
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
}

/* JSON-LD structured data -- all values are hardcoded constants, no user input. */
function JsonLd() {
  const softwareApp = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "eCardify",
    applicationCategory: "BusinessApplication",
    operatingSystem: "iOS",
    offers: [
      { "@type": "Offer", price: "0", priceCurrency: "USD", name: "Free" },
      { "@type": "Offer", price: "14", priceCurrency: "USD", name: "BasicCard" },
      { "@type": "Offer", price: "24", priceCurrency: "USD", name: "FlexiCard" },
    ],
    url: DOMAIN,
    description:
      "Create stunning digital business cards, add them to Apple Wallet, and share with a single tap.",
    author: { "@type": "Person", name: "Saroar Khandoker" },
  });

  const webSite = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "eCardify",
    url: DOMAIN,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: softwareApp }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: webSite }} />
    </>
  );
}

export function RootLayoutShell({
  children,
  lang,
}: {
  children: ReactNode;
  lang: string;
}) {
  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.svg" />
        <ThemeScript />
        <JsonLd />
      </head>
      <body>{children}</body>
    </html>
  );
}

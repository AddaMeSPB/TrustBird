import type { Metadata } from "next";
import { LOCALE_CONFIGS, type Locale, getTranslations } from "./i18n";

const DOMAIN = "https://ecardify.byalif.app";

const seoTitles: Record<Locale, string> = {
  en: "eCardify - Digital Business Cards for Apple Wallet",
  ja: "eCardify - Apple Wallet\u5BFE\u5FDC\u30C7\u30B8\u30BF\u30EB\u540D\u523A",
  de: "eCardify - Digitale Visitenkarten f\u00FCr Apple Wallet",
  ko: "eCardify - Apple Wallet \uB514\uC9C0\uD138 \uBA85\uD568",
  fr: "eCardify - Cartes de visite num\u00E9riques pour Apple Wallet",
  pt: "eCardify - Cart\u00F5es de visita digitais para Apple Wallet",
  zh: "eCardify - Apple Wallet \u6570\u5B57\u540D\u7247",
  es: "eCardify - Tarjetas de visita digitales para Apple Wallet",
  it: "eCardify - Biglietti da visita digitali per Apple Wallet",
};

const seoDescriptions: Record<Locale, string> = {
  en: "Create stunning digital business cards, add them to Apple Wallet, and share with a single tap. No subscriptions - pay once, use forever.",
  ja: "\u7F8E\u3057\u3044\u30C7\u30B8\u30BF\u30EB\u540D\u523A\u3092\u4F5C\u6210\u3057\u3001Apple Wallet\u306B\u8FFD\u52A0\u3057\u3001\u30EF\u30F3\u30BF\u30C3\u30D7\u3067\u5171\u6709\u3002\u30B5\u30D6\u30B9\u30AF\u306A\u3057\u3001\u8CB7\u3044\u5207\u308A\u3067\u6C38\u4E45\u5229\u7528\u3002",
  de: "Erstellen Sie beeindruckende digitale Visitenkarten, f\u00FCgen Sie sie zu Apple Wallet hinzu und teilen Sie sie. Kein Abo - einmal zahlen, f\u00FCr immer nutzen.",
  ko: "\uBA4B\uC9C4 \uB514\uC9C0\uD138 \uBA85\uD568\uC744 \uB9CC\uB4E4\uACE0 Apple Wallet\uC5D0 \uCD94\uAC00\uD558\uACE0 \uD55C \uBC88\uC758 \uD0ED\uC73C\uB85C \uACF5\uC720\uD558\uC138\uC694. \uAD6C\uB3C5 \uC5C6\uC74C, \uD55C \uBC88 \uACB0\uC81C\uB85C \uC601\uC6D0\uD788.",
  fr: "Cr\u00E9ez de superbes cartes de visite num\u00E9riques, ajoutez-les \u00E0 Apple Wallet et partagez-les. Sans abonnement - payez une fois.",
  pt: "Crie cart\u00F5es de visita digitais incr\u00EDveis, adicione ao Apple Wallet e compartilhe com um toque. Sem assinatura - pague uma vez.",
  zh: "\u521B\u5EFA\u7CBE\u7F8E\u6570\u5B57\u540D\u7247\uFF0C\u6DFB\u52A0\u5230 Apple Wallet\uFF0C\u4E00\u89E6\u5206\u4EAB\u3002\u65E0\u8BA2\u9605\uFF0C\u4E00\u6B21\u4ED8\u6B3E\u6C38\u4E45\u4F7F\u7528\u3002",
  es: "Crea impresionantes tarjetas digitales, a\u00F1\u00E1delas a Apple Wallet y comp\u00E1rtelas. Sin suscripci\u00F3n - paga una vez, usa siempre.",
  it: "Crea straordinari biglietti da visita digitali, aggiungili ad Apple Wallet e condividili. Nessun abbonamento - paga una volta.",
};

function buildAlternates(currentPath: string) {
  const languages: Record<string, string> = {};
  for (const cfg of LOCALE_CONFIGS) {
    languages[cfg.hreflang] = `${DOMAIN}${cfg.path}`;
  }
  return {
    canonical: `${DOMAIN}${currentPath}`,
    languages: {
      ...languages,
      "x-default": DOMAIN,
    },
  };
}

export function getLocaleMetadata(locale: Locale): Metadata {
  const t = getTranslations(locale);
  const cfg = LOCALE_CONFIGS.find((c) => c.code === locale)!;

  return {
    title: seoTitles[locale],
    description: seoDescriptions[locale],
    alternates: buildAlternates(cfg.path),
    openGraph: {
      title: seoTitles[locale],
      description: seoDescriptions[locale],
      url: `${DOMAIN}${cfg.path}`,
      siteName: "eCardify",
      locale: cfg.hreflang,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitles[locale],
      description: seoDescriptions[locale],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

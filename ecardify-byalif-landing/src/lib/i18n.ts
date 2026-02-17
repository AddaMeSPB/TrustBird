export type Locale = "en" | "ja" | "de" | "ko" | "fr" | "pt" | "zh" | "es" | "it";

export interface LocaleConfig {
  code: Locale;
  name: string;
  flag: string;
  path: string;
  hreflang: string;
}

export const LOCALE_CONFIGS: LocaleConfig[] = [
  { code: "en", name: "English", flag: "\u{1F1FA}\u{1F1F8}", path: "/", hreflang: "en" },
  { code: "ja", name: "\u65E5\u672C\u8A9E", flag: "\u{1F1EF}\u{1F1F5}", path: "/ja", hreflang: "ja" },
  { code: "de", name: "Deutsch", flag: "\u{1F1E9}\u{1F1EA}", path: "/de", hreflang: "de" },
  { code: "ko", name: "\uD55C\uAD6D\uC5B4", flag: "\u{1F1F0}\u{1F1F7}", path: "/ko", hreflang: "ko" },
  { code: "fr", name: "Fran\u00E7ais", flag: "\u{1F1EB}\u{1F1F7}", path: "/fr", hreflang: "fr" },
  { code: "pt", name: "Portugu\u00EAs", flag: "\u{1F1E7}\u{1F1F7}", path: "/pt", hreflang: "pt-BR" },
  { code: "zh", name: "\u4E2D\u6587", flag: "\u{1F1E8}\u{1F1F3}", path: "/zh", hreflang: "zh-Hans" },
  { code: "es", name: "Espa\u00F1ol", flag: "\u{1F1EA}\u{1F1F8}", path: "/es", hreflang: "es" },
  { code: "it", name: "Italiano", flag: "\u{1F1EE}\u{1F1F9}", path: "/it", hreflang: "it" },
];

export interface Translations {
  nav: {
    features: string;
    pricing: string;
    faq: string;
    download: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    cta: string;
    ctaSecondary: string;
    stats: { cards: string; walletPasses: string; countries: string };
  };
  features: {
    badge: string;
    title: string;
    subtitle: string;
    items: Array<{ icon: string; title: string; description: string }>;
  };
  pricing: {
    badge: string;
    title: string;
    subtitle: string;
    oneTime: string;
    free: {
      name: string;
      price: string;
      description: string;
      features: string[];
      cta: string;
    };
    basic: {
      name: string;
      price: string;
      description: string;
      features: string[];
      cta: string;
      badge: string;
    };
    flexi: {
      name: string;
      price: string;
      description: string;
      features: string[];
      cta: string;
      badge: string;
    };
  };
  faq: {
    badge: string;
    title: string;
    items: Array<{ question: string; answer: string }>;
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
  footer: {
    tagline: string;
    product: string;
    legal: string;
    privacy: string;
    terms: string;
    contact: string;
    copyright: string;
  };
}

const en: Translations = {
  nav: {
    features: "Features",
    pricing: "Pricing",
    faq: "FAQ",
    download: "Download",
  },
  hero: {
    badge: "Virtual Business Cards",
    title: "Your Business Card, Reimagined",
    subtitle:
      "Create stunning digital business cards, add them to Apple Wallet, and share with a single tap. No paper, no waste, no limits.",
    cta: "Download Free",
    ctaSecondary: "View Pricing",
    stats: {
      cards: "Cards Created",
      walletPasses: "Wallet Passes",
      countries: "Countries",
    },
  },
  features: {
    badge: "Features",
    title: "Everything You Need",
    subtitle:
      "Powerful tools to create, manage, and share your professional identity.",
    items: [
      {
        icon: "card",
        title: "Digital Cards",
        description:
          "Design beautiful business cards with custom templates, colors, and layouts. Your card, your brand.",
      },
      {
        icon: "wallet",
        title: "Apple Wallet",
        description:
          "Add your card directly to Apple Wallet for instant access. Always ready, always with you.",
      },
      {
        icon: "tap",
        title: "Smart Sharing",
        description:
          "Share your card instantly via QR code or a simple link. No app needed on the receiving end.",
      },
      {
        icon: "qr",
        title: "QR Code",
        description:
          "Generate a unique QR code for your card. Perfect for conferences, meetings, and networking events.",
      },
      {
        icon: "template",
        title: "Customizable Templates",
        description:
          "Choose from dozens of professionally designed templates. Customize every detail to match your brand.",
      },
      {
        icon: "cloud",
        title: "Cloud Sync",
        description:
          "Your cards sync across all your devices with iCloud. Edit on iPhone, access on iPad.",
      },
    ],
  },
  pricing: {
    badge: "Pricing",
    title: "Simple, One-Time Pricing",
    subtitle: "No subscriptions. Pay once, use forever.",
    oneTime: "One-time purchase",
    free: {
      name: "Free",
      price: "$0",
      description: "Get started with the basics",
      features: [
        "1 digital business card",
        "Basic templates",
        "QR code sharing",
        "Contact info fields",
      ],
      cta: "Get Started",
    },
    basic: {
      name: "BasicCard",
      price: "$14",
      description: "Everything you need for professional networking",
      features: [
        "1 digital business card (per purchase)",
        "Fixed card design template",
        "Apple Wallet pass",
        "QR code sharing",
        "Contact info & phone number",
      ],
      cta: "Buy BasicCard",
      badge: "Popular",
    },
    flexi: {
      name: "FlexiCard",
      price: "$24",
      description: "For power networkers who want full flexibility",
      features: [
        "1 digital business card (per purchase)",
        "All BasicCard features",
        "Custom card designs & colors",
        "Multiple phone numbers & emails",
        "Multiple addresses",
        "Business card scan (OCR)",
        "Logo & avatar upload",
      ],
      cta: "Buy FlexiCard",
      badge: "Premium",
    },
  },
  faq: {
    badge: "FAQ",
    title: "Frequently Asked Questions",
    items: [
      {
        question: "Is eCardify really free to start?",
        answer:
          "Yes! The free tier includes one digital business card with basic templates and QR code sharing. You can upgrade anytime for more features.",
      },
      {
        question: "How does Apple Wallet integration work?",
        answer:
          "With BasicCard or FlexiCard, you can generate an Apple Wallet pass for your card. It appears alongside your boarding passes and tickets for instant access.",
      },
      {
        question: "Do recipients need the app to view my card?",
        answer:
          "No. When you share your card, recipients see it as a beautiful web page. No app download required.",
      },
      {
        question: "Is this a subscription?",
        answer:
          "No. BasicCard ($14) and FlexiCard ($24) are one-time purchases. Pay once, use forever. No recurring fees.",
      },
      {
        question: "Can I update my card after purchasing?",
        answer:
          "Absolutely. You can edit your card details, change templates, and update your information anytime. Updates sync instantly.",
      },
      {
        question: "Is my data secure?",
        answer:
          "Your data is stored securely with end-to-end encryption. We use iCloud sync so your data stays in your Apple ecosystem.",
      },
    ],
  },
  cta: {
    title: "Ready to Go Digital?",
    subtitle:
      "Join thousands of professionals who have ditched paper business cards.",
    button: "Download eCardify Free",
  },
  footer: {
    tagline: "Virtual business cards for the modern professional.",
    product: "Product",
    legal: "Legal",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    contact: "Contact",
    copyright: "\u00A9 2026 eCardify. All rights reserved.",
  },
};

const ja: Translations = {
  nav: {
    features: "\u6A5F\u80FD",
    pricing: "\u6599\u91D1",
    faq: "FAQ",
    download: "\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9",
  },
  hero: {
    badge: "\u30D0\u30FC\u30C1\u30E3\u30EB\u540D\u523A",
    title: "\u540D\u523A\u3092\u3001\u518D\u767A\u660E\u3057\u3088\u3046",
    subtitle:
      "\u7F8E\u3057\u3044\u30C7\u30B8\u30BF\u30EB\u540D\u523A\u3092\u4F5C\u6210\u3057\u3001Apple Wallet\u306B\u8FFD\u52A0\u3057\u3001\u30EF\u30F3\u30BF\u30C3\u30D7\u3067\u5171\u6709\u3002\u7D19\u4E0D\u8981\u3001\u7121\u99C4\u306A\u3057\u3001\u5236\u9650\u306A\u3057\u3002",
    cta: "\u7121\u6599\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9",
    ctaSecondary: "\u6599\u91D1\u3092\u898B\u308B",
    stats: {
      cards: "\u4F5C\u6210\u3055\u308C\u305F\u540D\u523A",
      walletPasses: "\u30A6\u30A9\u30EC\u30C3\u30C8\u30D1\u30B9",
      countries: "\u5BFE\u5FDC\u56FD",
    },
  },
  features: {
    badge: "\u6A5F\u80FD",
    title: "\u5FC5\u8981\u306A\u3082\u306E\u3092\u3059\u3079\u3066",
    subtitle:
      "\u30D7\u30ED\u30D5\u30A7\u30C3\u30B7\u30E7\u30CA\u30EB\u30A2\u30A4\u30C7\u30F3\u30C6\u30A3\u30C6\u30A3\u3092\u4F5C\u6210\u30FB\u7BA1\u7406\u30FB\u5171\u6709\u3059\u308B\u305F\u3081\u306E\u5F37\u529B\u306A\u30C4\u30FC\u30EB\u3002",
    items: [
      {
        icon: "card",
        title: "\u30C7\u30B8\u30BF\u30EB\u540D\u523A",
        description:
          "\u30AB\u30B9\u30BF\u30E0\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u3001\u30AB\u30E9\u30FC\u3001\u30EC\u30A4\u30A2\u30A6\u30C8\u3067\u7F8E\u3057\u3044\u540D\u523A\u3092\u30C7\u30B6\u30A4\u30F3\u3002\u3042\u306A\u305F\u306E\u540D\u523A\u3001\u3042\u306A\u305F\u306E\u30D6\u30E9\u30F3\u30C9\u3002",
      },
      {
        icon: "wallet",
        title: "Apple Wallet",
        description:
          "Apple Wallet\u306B\u540D\u523A\u3092\u76F4\u63A5\u8FFD\u52A0\u3002\u3044\u3064\u3067\u3082\u3059\u3050\u306B\u30A2\u30AF\u30BB\u30B9\u53EF\u80FD\u3002",
      },
      {
        icon: "tap",
        title: "\u30B9\u30DE\u30FC\u30C8\u5171\u6709",
        description:
          "QR\u30B3\u30FC\u30C9\u307E\u305F\u306F\u30EA\u30F3\u30AF\u3067\u540D\u523A\u3092\u5373\u5EA7\u306B\u5171\u6709\u3002\u53D7\u4FE1\u5074\u306B\u30A2\u30D7\u30EA\u306F\u4E0D\u8981\u3002",
      },
      {
        icon: "qr",
        title: "QR\u30B3\u30FC\u30C9",
        description:
          "\u540D\u523A\u7528\u306E\u30E6\u30CB\u30FC\u30AFQR\u30B3\u30FC\u30C9\u3092\u751F\u6210\u3002\u30AB\u30F3\u30D5\u30A1\u30EC\u30F3\u30B9\u3084\u4F1A\u8B70\u306B\u6700\u9069\u3002",
      },
      {
        icon: "template",
        title: "\u30AB\u30B9\u30BF\u30DE\u30A4\u30BA\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8",
        description:
          "\u30D7\u30ED\u30C7\u30B6\u30A4\u30F3\u306E\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u304B\u3089\u9078\u629E\u3002\u30D6\u30E9\u30F3\u30C9\u306B\u5408\u308F\u305B\u3066\u7D30\u90E8\u307E\u3067\u30AB\u30B9\u30BF\u30DE\u30A4\u30BA\u3002",
      },
      {
        icon: "cloud",
        title: "\u30AF\u30E9\u30A6\u30C9\u540C\u671F",
        description:
          "iCloud\u3067\u3059\u3079\u3066\u306E\u30C7\u30D0\u30A4\u30B9\u9593\u3067\u540D\u523A\u3092\u540C\u671F\u3002iPhone\u3067\u7DE8\u96C6\u3001iPad\u3067\u30A2\u30AF\u30BB\u30B9\u3002",
      },
    ],
  },
  pricing: {
    badge: "\u6599\u91D1",
    title: "\u30B7\u30F3\u30D7\u30EB\u306A\u8CB7\u3044\u5207\u308A\u6599\u91D1",
    subtitle:
      "\u30B5\u30D6\u30B9\u30AF\u30EA\u30D7\u30B7\u30E7\u30F3\u306A\u3057\u3002\u4E00\u5EA6\u306E\u304A\u652F\u6255\u3044\u3067\u6C38\u4E45\u306B\u5229\u7528\u3002",
    oneTime: "\u8CB7\u3044\u5207\u308A",
    free: {
      name: "\u7121\u6599",
      price: "\uFFE50",
      description: "\u57FA\u672C\u6A5F\u80FD\u3067\u59CB\u3081\u3088\u3046",
      features: [
        "\u30C7\u30B8\u30BF\u30EB\u540D\u523A1\u679A",
        "\u57FA\u672C\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8",
        "QR\u30B3\u30FC\u30C9\u5171\u6709",
        "\u9023\u7D61\u5148\u30D5\u30A3\u30FC\u30EB\u30C9",
      ],
      cta: "\u59CB\u3081\u308B",
    },
    basic: {
      name: "BasicCard",
      price: "\uFFE51,800",
      description:
        "\u30D7\u30ED\u30D5\u30A7\u30C3\u30B7\u30E7\u30CA\u30EB\u30CD\u30C3\u30C8\u30EF\u30FC\u30AD\u30F3\u30B0\u306B\u5FC5\u8981\u306A\u3059\u3079\u3066",
      features: [
        "\u30C7\u30B8\u30BF\u30EB\u540D\u523A1\u679A\uFF08\u8CFC\u5165\u3054\u3068\uFF09",
        "\u56FA\u5B9A\u30C7\u30B6\u30A4\u30F3\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8",
        "Apple Wallet\u30D1\u30B9",
        "QR\u30B3\u30FC\u30C9\u5171\u6709",
        "\u9023\u7D61\u5148\u60C5\u5831\u30FB\u96FB\u8A71\u756A\u53F7",
      ],
      cta: "BasicCard\u3092\u8CFC\u5165",
      badge: "\u4EBA\u6C17",
    },
    flexi: {
      name: "FlexiCard",
      price: "\uFFE53,200",
      description:
        "\u67D4\u8EDF\u306A\u30AB\u30B9\u30BF\u30DE\u30A4\u30BA\u3092\u6C42\u3081\u308B\u30D1\u30EF\u30FC\u30E6\u30FC\u30B6\u30FC\u5411\u3051",
      features: [
        "\u30C7\u30B8\u30BF\u30EB\u540D\u523A1\u679A\uFF08\u8CFC\u5165\u3054\u3068\uFF09",
        "BasicCard\u306E\u5168\u6A5F\u80FD",
        "\u30AB\u30B9\u30BF\u30E0\u30AB\u30FC\u30C9\u30C7\u30B6\u30A4\u30F3\u30FB\u30AB\u30E9\u30FC",
        "\u8907\u6570\u306E\u96FB\u8A71\u756A\u53F7\u30FB\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9",
        "\u8907\u6570\u306E\u4F4F\u6240",
        "\u540D\u523A\u30B9\u30AD\u30E3\u30F3\uFF08OCR\uFF09",
        "\u30ED\u30B4\u30FB\u30A2\u30D0\u30BF\u30FC\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9",
      ],
      cta: "FlexiCard\u3092\u8CFC\u5165",
      badge: "\u30D7\u30EC\u30DF\u30A2\u30E0",
    },
  },
  faq: {
    badge: "FAQ",
    title: "\u3088\u304F\u3042\u308B\u8CEA\u554F",
    items: [
      {
        question: "eCardify\u306F\u672C\u5F53\u306B\u7121\u6599\u3067\u59CB\u3081\u3089\u308C\u307E\u3059\u304B\uFF1F",
        answer:
          "\u306F\u3044\uFF01\u7121\u6599\u30D7\u30E9\u30F3\u306B\u306F\u30C7\u30B8\u30BF\u30EB\u540D\u523A1\u679A\u3001\u57FA\u672C\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u3001QR\u30B3\u30FC\u30C9\u5171\u6709\u304C\u542B\u307E\u308C\u307E\u3059\u3002\u3044\u3064\u3067\u3082\u30A2\u30C3\u30D7\u30B0\u30EC\u30FC\u30C9\u53EF\u80FD\u3067\u3059\u3002",
      },
      {
        question: "Apple Wallet\u9023\u643A\u306F\u3069\u306E\u3088\u3046\u306B\u6A5F\u80FD\u3057\u307E\u3059\u304B\uFF1F",
        answer:
          "BasicCard\u307E\u305F\u306FFlexiCard\u3067\u3001\u540D\u523A\u306EApple Wallet\u30D1\u30B9\u3092\u751F\u6210\u3067\u304D\u307E\u3059\u3002\u642D\u4E57\u5238\u3084\u30C1\u30B1\u30C3\u30C8\u3068\u4E26\u3093\u3067\u8868\u793A\u3055\u308C\u307E\u3059\u3002",
      },
      {
        question:
          "\u53D7\u4FE1\u8005\u306F\u30A2\u30D7\u30EA\u304C\u5FC5\u8981\u3067\u3059\u304B\uFF1F",
        answer:
          "\u3044\u3044\u3048\u3002\u5171\u6709\u3057\u305F\u540D\u523A\u306F\u7F8E\u3057\u3044Web\u30DA\u30FC\u30B8\u3068\u3057\u3066\u8868\u793A\u3055\u308C\u307E\u3059\u3002\u30A2\u30D7\u30EA\u306E\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u306F\u4E0D\u8981\u3067\u3059\u3002",
      },
      {
        question: "\u3053\u308C\u306F\u30B5\u30D6\u30B9\u30AF\u30EA\u30D7\u30B7\u30E7\u30F3\u3067\u3059\u304B\uFF1F",
        answer:
          "\u3044\u3044\u3048\u3002BasicCard\uFF08\uFFE51,800\uFF09\u3068FlexiCard\uFF08\uFFE53,200\uFF09\u306F\u8CB7\u3044\u5207\u308A\u3067\u3059\u3002\u4E00\u5EA6\u306E\u304A\u652F\u6255\u3044\u3067\u6C38\u4E45\u306B\u5229\u7528\u3002\u7D99\u7D9A\u8CBB\u7528\u306A\u3057\u3002",
      },
      {
        question:
          "\u8CFC\u5165\u5F8C\u306B\u540D\u523A\u3092\u66F4\u65B0\u3067\u304D\u307E\u3059\u304B\uFF1F",
        answer:
          "\u3082\u3061\u308D\u3093\u3067\u3059\u3002\u540D\u523A\u306E\u8A73\u7D30\u3001\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u3001\u60C5\u5831\u3092\u3044\u3064\u3067\u3082\u7DE8\u96C6\u3067\u304D\u307E\u3059\u3002\u66F4\u65B0\u306F\u5373\u5EA7\u306B\u540C\u671F\u3055\u308C\u307E\u3059\u3002",
      },
      {
        question: "\u30C7\u30FC\u30BF\u306F\u5B89\u5168\u3067\u3059\u304B\uFF1F",
        answer:
          "\u30C7\u30FC\u30BF\u306F\u30A8\u30F3\u30C9\u30C4\u30FC\u30A8\u30F3\u30C9\u6697\u53F7\u5316\u3067\u5B89\u5168\u306B\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002iCloud\u540C\u671F\u3092\u4F7F\u7528\u3057\u3001\u30C7\u30FC\u30BF\u306FApple\u30A8\u30B3\u30B7\u30B9\u30C6\u30E0\u5185\u306B\u7559\u307E\u308A\u307E\u3059\u3002",
      },
    ],
  },
  cta: {
    title: "\u30C7\u30B8\u30BF\u30EB\u306B\u79FB\u884C\u3057\u307E\u305B\u3093\u304B\uFF1F",
    subtitle:
      "\u7D19\u306E\u540D\u523A\u3092\u5352\u696D\u3057\u305F\u4F55\u5343\u4EBA\u3082\u306E\u30D7\u30ED\u30D5\u30A7\u30C3\u30B7\u30E7\u30CA\u30EB\u306B\u52A0\u308F\u308A\u307E\u3057\u3087\u3046\u3002",
    button: "eCardify\u3092\u7121\u6599\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9",
  },
  footer: {
    tagline:
      "\u73FE\u4EE3\u306E\u30D7\u30ED\u30D5\u30A7\u30C3\u30B7\u30E7\u30CA\u30EB\u306E\u305F\u3081\u306E\u30D0\u30FC\u30C1\u30E3\u30EB\u540D\u523A\u3002",
    product: "\u88FD\u54C1",
    legal: "\u6CD5\u7684\u60C5\u5831",
    privacy: "\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30DD\u30EA\u30B7\u30FC",
    terms: "\u5229\u7528\u898F\u7D04",
    contact: "\u304A\u554F\u3044\u5408\u308F\u305B",
    copyright: "\u00A9 2026 eCardify. All rights reserved.",
  },
};

const de: Translations = {
  nav: {
    features: "Funktionen",
    pricing: "Preise",
    faq: "FAQ",
    download: "Herunterladen",
  },
  hero: {
    badge: "Virtuelle Visitenkarten",
    title: "Ihre Visitenkarte, neu erfunden",
    subtitle:
      "Erstellen Sie beeindruckende digitale Visitenkarten, f\u00FCgen Sie sie zu Apple Wallet hinzu und teilen Sie sie mit einem Fingertipp. Kein Papier, kein Abfall, keine Grenzen.",
    cta: "Kostenlos herunterladen",
    ctaSecondary: "Preise ansehen",
    stats: {
      cards: "Erstellte Karten",
      walletPasses: "Wallet-P\u00E4sse",
      countries: "L\u00E4nder",
    },
  },
  features: {
    badge: "Funktionen",
    title: "Alles, was Sie brauchen",
    subtitle:
      "Leistungsstarke Tools zum Erstellen, Verwalten und Teilen Ihrer beruflichen Identit\u00E4t.",
    items: [
      {
        icon: "card",
        title: "Digitale Karten",
        description:
          "Gestalten Sie sch\u00F6ne Visitenkarten mit individuellen Vorlagen, Farben und Layouts. Ihre Karte, Ihre Marke.",
      },
      {
        icon: "wallet",
        title: "Apple Wallet",
        description:
          "F\u00FCgen Sie Ihre Karte direkt zu Apple Wallet hinzu. Immer bereit, immer dabei.",
      },
      {
        icon: "tap",
        title: "Intelligentes Teilen",
        description:
          "Teilen Sie Ihre Karte sofort per QR-Code oder einfachem Link. Keine App auf der Empf\u00E4ngerseite n\u00F6tig.",
      },
      {
        icon: "qr",
        title: "QR-Code",
        description:
          "Generieren Sie einen einzigartigen QR-Code. Perfekt f\u00FCr Konferenzen, Meetings und Networking-Events.",
      },
      {
        icon: "template",
        title: "Anpassbare Vorlagen",
        description:
          "W\u00E4hlen Sie aus Dutzenden professionell gestalteter Vorlagen. Passen Sie jedes Detail an Ihre Marke an.",
      },
      {
        icon: "cloud",
        title: "Cloud-Synchronisierung",
        description:
          "Ihre Karten werden \u00FCber iCloud auf allen Ger\u00E4ten synchronisiert. Auf dem iPhone bearbeiten, auf dem iPad zugreifen.",
      },
    ],
  },
  pricing: {
    badge: "Preise",
    title: "Einfache Einmalpreise",
    subtitle: "Kein Abo. Einmal zahlen, f\u00FCr immer nutzen.",
    oneTime: "Einmalkauf",
    free: {
      name: "Kostenlos",
      price: "0\u00A0\u20AC",
      description: "Starten Sie mit den Grundlagen",
      features: [
        "1 digitale Visitenkarte",
        "Basis-Vorlagen",
        "QR-Code-Teilen",
        "Kontaktdatenfelder",
      ],
      cta: "Loslegen",
    },
    basic: {
      name: "BasicCard",
      price: "14\u00A0\u20AC",
      description: "Alles f\u00FCr professionelles Networking",
      features: [
        "1 digitale Visitenkarte (pro Kauf)",
        "Festes Kartendesign-Template",
        "Apple Wallet-Pass",
        "QR-Code-Teilen",
        "Kontaktdaten & Telefonnummer",
      ],
      cta: "BasicCard kaufen",
      badge: "Beliebt",
    },
    flexi: {
      name: "FlexiCard",
      price: "24\u00A0\u20AC",
      description: "F\u00FCr Power-Networker mit vollem Gestaltungsspielraum",
      features: [
        "1 digitale Visitenkarte (pro Kauf)",
        "Alle BasicCard-Funktionen",
        "Individuelle Kartendesigns & Farben",
        "Mehrere Telefonnummern & E-Mail-Adressen",
        "Mehrere Adressen",
        "Visitenkarten-Scan (OCR)",
        "Logo- & Avatar-Upload",
      ],
      cta: "FlexiCard kaufen",
      badge: "Premium",
    },
  },
  faq: {
    badge: "FAQ",
    title: "H\u00E4ufig gestellte Fragen",
    items: [
      {
        question: "Ist eCardify wirklich kostenlos?",
        answer:
          "Ja! Die kostenlose Version enth\u00E4lt eine digitale Visitenkarte mit Basis-Vorlagen und QR-Code-Teilen. Sie k\u00F6nnen jederzeit upgraden.",
      },
      {
        question: "Wie funktioniert die Apple Wallet-Integration?",
        answer:
          "Mit BasicCard oder FlexiCard k\u00F6nnen Sie einen Apple Wallet-Pass f\u00FCr Ihre Karte generieren. Er erscheint neben Ihren Boardingp\u00E4ssen und Tickets.",
      },
      {
        question: "Brauchen Empf\u00E4nger die App?",
        answer:
          "Nein. Ihre geteilte Karte wird als sch\u00F6ne Webseite angezeigt. Kein App-Download erforderlich.",
      },
      {
        question: "Ist das ein Abonnement?",
        answer:
          "Nein. BasicCard (14\u00A0\u20AC) und FlexiCard (24\u00A0\u20AC) sind Einmalk\u00E4ufe. Einmal zahlen, f\u00FCr immer nutzen.",
      },
      {
        question: "Kann ich meine Karte nach dem Kauf aktualisieren?",
        answer:
          "Selbstverst\u00E4ndlich. Sie k\u00F6nnen Details, Vorlagen und Informationen jederzeit bearbeiten. \u00C4nderungen werden sofort synchronisiert.",
      },
      {
        question: "Sind meine Daten sicher?",
        answer:
          "Ihre Daten werden mit Ende-zu-Ende-Verschl\u00FCsselung gespeichert. Wir nutzen iCloud-Synchronisierung, damit Ihre Daten im Apple-\u00D6kosystem bleiben.",
      },
    ],
  },
  cta: {
    title: "Bereit f\u00FCr Digital?",
    subtitle:
      "Schlie\u00DFen Sie sich Tausenden von Fachleuten an, die Papiervisitenkarten hinter sich gelassen haben.",
    button: "eCardify kostenlos herunterladen",
  },
  footer: {
    tagline: "Virtuelle Visitenkarten f\u00FCr den modernen Profi.",
    product: "Produkt",
    legal: "Rechtliches",
    privacy: "Datenschutzrichtlinie",
    terms: "Nutzungsbedingungen",
    contact: "Kontakt",
    copyright: "\u00A9 2026 eCardify. Alle Rechte vorbehalten.",
  },
};

const ko: Translations = {
  nav: {
    features: "\uAE30\uB2A5",
    pricing: "\uAC00\uACA9",
    faq: "FAQ",
    download: "\uB2E4\uC6B4\uB85C\uB4DC",
  },
  hero: {
    badge: "\uAC00\uC0C1 \uBA85\uD568",
    title: "\uBA85\uD568\uC744 \uC0C8\uB86D\uAC8C \uC0C1\uC0C1\uD558\uB2E4",
    subtitle:
      "\uBA4B\uC9C4 \uB514\uC9C0\uD138 \uBA85\uD568\uC744 \uB9CC\uB4E4\uACE0 Apple Wallet\uC5D0 \uCD94\uAC00\uD558\uACE0 \uD55C \uBC88\uC758 \uD0ED\uC73C\uB85C \uACF5\uC720\uD558\uC138\uC694. \uC885\uC774 \uBD88\uD544\uC694, \uB0AD\uBE44 \uC5C6\uC74C, \uC81C\uD55C \uC5C6\uC74C.",
    cta: "\uBB34\uB8CC \uB2E4\uC6B4\uB85C\uB4DC",
    ctaSecondary: "\uAC00\uACA9 \uBCF4\uAE30",
    stats: {
      cards: "\uC0DD\uC131\uB41C \uBA85\uD568",
      walletPasses: "\uC6D4\uB82C \uD328\uC2A4",
      countries: "\uAD6D\uAC00",
    },
  },
  features: {
    badge: "\uAE30\uB2A5",
    title: "\uD544\uC694\uD55C \uBAA8\uB4E0 \uAC83",
    subtitle:
      "\uC804\uBB38 \uC544\uC774\uB374\uD2F0\uD2F0\uB97C \uB9CC\uB4E4\uACE0 \uAD00\uB9AC\uD558\uACE0 \uACF5\uC720\uD558\uB294 \uAC15\uB825\uD55C \uB3C4\uAD6C.",
    items: [
      {
        icon: "card",
        title: "\uB514\uC9C0\uD138 \uBA85\uD568",
        description:
          "\uCEE4\uC2A4\uD140 \uD15C\uD50C\uB9BF, \uC0C9\uC0C1, \uB808\uC774\uC544\uC6C3\uC73C\uB85C \uC544\uB984\uB2E4\uC6B4 \uBA85\uD568\uC744 \uB514\uC790\uC778\uD558\uC138\uC694. \uB2F9\uC2E0\uC758 \uBA85\uD568, \uB2F9\uC2E0\uC758 \uBE0C\uB79C\uB4DC.",
      },
      {
        icon: "wallet",
        title: "Apple Wallet",
        description:
          "Apple Wallet\uC5D0 \uBA85\uD568\uC744 \uBC14\uB85C \uCD94\uAC00\uD558\uC138\uC694. \uD56D\uC0C1 \uC900\uBE44\uB418\uC5B4 \uC788\uACE0 \uD56D\uC0C1 \uD568\uAED8\uD569\uB2C8\uB2E4.",
      },
      {
        icon: "tap",
        title: "\uC2A4\uB9C8\uD2B8 \uACF5\uC720",
        description:
          "QR \uCF54\uB4DC \uB610\uB294 \uAC04\uB2E8\uD55C \uB9C1\uD06C\uB85C \uBA85\uD568\uC744 \uC989\uC2DC \uACF5\uC720\uD558\uC138\uC694. \uC218\uC2E0\uC790\uB294 \uC571\uC774 \uD544\uC694\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.",
      },
      {
        icon: "qr",
        title: "QR \uCF54\uB4DC",
        description:
          "\uBA85\uD568\uC758 \uACE0\uC720 QR \uCF54\uB4DC\uB97C \uC0DD\uC131\uD558\uC138\uC694. \uCEE8\uD37C\uB7F0\uC2A4, \uD68C\uC758, \uB124\uD2B8\uC6CC\uD0B9 \uC774\uBCA4\uD2B8\uC5D0 \uC644\uBCBD\uD569\uB2C8\uB2E4.",
      },
      {
        icon: "template",
        title: "\uCEE4\uC2A4\uD130\uB9C8\uC774\uC988 \uD15C\uD50C\uB9BF",
        description:
          "\uC804\uBB38\uC801\uC73C\uB85C \uB514\uC790\uC778\uB41C \uC218\uC2ED \uAC1C\uC758 \uD15C\uD50C\uB9BF\uC5D0\uC11C \uC120\uD0DD\uD558\uC138\uC694. \uBE0C\uB79C\uB4DC\uC5D0 \uB9DE\uAC8C \uBAA8\uB4E0 \uC138\uBD80 \uC0AC\uD56D\uC744 \uCEE4\uC2A4\uD130\uB9C8\uC774\uC988\uD558\uC138\uC694.",
      },
      {
        icon: "cloud",
        title: "\uD074\uB77C\uC6B0\uB4DC \uB3D9\uAE30\uD654",
        description:
          "iCloud\uB85C \uBAA8\uB4E0 \uAE30\uAE30\uC5D0\uC11C \uBA85\uD568\uC774 \uB3D9\uAE30\uD654\uB429\uB2C8\uB2E4. iPhone\uC5D0\uC11C \uD3B8\uC9D1\uD558\uACE0 iPad\uC5D0\uC11C \uC561\uC138\uC2A4\uD558\uC138\uC694.",
      },
    ],
  },
  pricing: {
    badge: "\uAC00\uACA9",
    title: "\uAC04\uB2E8\uD55C \uC77C\uD68C\uC131 \uAC00\uACA9",
    subtitle: "\uAD6C\uB3C5 \uC5C6\uC74C. \uD55C \uBC88 \uACB0\uC81C\uD558\uACE0 \uC601\uC6D0\uD788 \uC0AC\uC6A9\uD558\uC138\uC694.",
    oneTime: "\uC77C\uD68C\uC131 \uAD6C\uB9E4",
    free: {
      name: "\uBB34\uB8CC",
      price: "\u20A90",
      description: "\uAE30\uBCF8 \uAE30\uB2A5\uC73C\uB85C \uC2DC\uC791\uD558\uC138\uC694",
      features: [
        "\uB514\uC9C0\uD138 \uBA85\uD568 1\uC7A5",
        "\uAE30\uBCF8 \uD15C\uD50C\uB9BF",
        "QR \uCF54\uB4DC \uACF5\uC720",
        "\uC5F0\uB77D\uCC98 \uD544\uB4DC",
      ],
      cta: "\uC2DC\uC791\uD558\uAE30",
    },
    basic: {
      name: "BasicCard",
      price: "\u20A918,000",
      description: "\uD504\uB85C\uD398\uC154\uB110 \uB124\uD2B8\uC6CC\uD0B9\uC5D0 \uD544\uC694\uD55C \uBAA8\uB4E0 \uAC83",
      features: [
        "\uB514\uC9C0\uD138 \uBA85\uD568 1\uC7A5(\uAD6C\uB9E4\uB2F9)",
        "\uACE0\uC815 \uCE74\uB4DC \uB514\uC790\uC778 \uD15C\uD50C\uB9BF",
        "Apple Wallet \uD328\uC2A4",
        "QR \uCF54\uB4DC \uACF5\uC720",
        "\uC5F0\uB77D\uCC98 \uBC0F \uC804\uD654\uBC88\uD638",
      ],
      cta: "BasicCard \uAD6C\uB9E4",
      badge: "\uC778\uAE30",
    },
    flexi: {
      name: "FlexiCard",
      price: "\u20A932,000",
      description: "\uC644\uC804\uD55C \uC720\uC5F0\uC131\uC744 \uC6D0\uD558\uB294 \uD30C\uC6CC \uB124\uD2B8\uC6CC\uCEE4\uB97C \uC704\uD55C",
      features: [
        "\uB514\uC9C0\uD138 \uBA85\uD568 1\uC7A5(\uAD6C\uB9E4\uB2F9)",
        "\uBAA8\uB4E0 BasicCard \uAE30\uB2A5",
        "\uCEE4\uC2A4\uD140 \uCE74\uB4DC \uB514\uC790\uC778 \uBC0F \uC0C9\uC0C1",
        "\uC5EC\uB7EC \uC804\uD654\uBC88\uD638 \uBC0F \uC774\uBA54\uC77C",
        "\uC5EC\uB7EC \uC8FC\uC18C",
        "\uBA85\uD568 \uC2A4\uCE94(OCR)",
        "\uB85C\uACE0 \uBC0F \uC544\uBC14\uD0C0 \uC5C5\uB85C\uB4DC",
      ],
      cta: "FlexiCard \uAD6C\uB9E4",
      badge: "\uD504\uB9AC\uBBF8\uC5C4",
    },
  },
  faq: {
    badge: "FAQ",
    title: "\uC790\uC8FC \uBB3B\uB294 \uC9C8\uBB38",
    items: [
      {
        question: "eCardify\uB294 \uC815\uB9D0 \uBB34\uB8CC\uB85C \uC2DC\uC791\uD560 \uC218 \uC788\uB098\uC694?",
        answer:
          "\uB124! \uBB34\uB8CC \uD50C\uB79C\uC5D0\uB294 \uB514\uC9C0\uD138 \uBA85\uD568 1\uC7A5, \uAE30\uBCF8 \uD15C\uD50C\uB9BF, QR \uCF54\uB4DC \uACF5\uC720\uAC00 \uD3EC\uD568\uB429\uB2C8\uB2E4. \uC5B8\uC81C\uB4E0 \uC5C5\uADF8\uB808\uC774\uB4DC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
      },
      {
        question: "Apple Wallet \uC5F0\uB3D9\uC740 \uC5B4\uB5BB\uAC8C \uC791\uB3D9\uD558\uB098\uC694?",
        answer:
          "BasicCard \uB610\uB294 FlexiCard\uB85C Apple Wallet \uD328\uC2A4\uB97C \uC0DD\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD0D1\uC2B9\uAD8C\uACFC \uD2F0\uCF13 \uC606\uC5D0 \uD45C\uC2DC\uB429\uB2C8\uB2E4.",
      },
      {
        question: "\uC218\uC2E0\uC790\uB3C4 \uC571\uC774 \uD544\uC694\uD55C\uAC00\uC694?",
        answer:
          "\uC544\uB2C8\uC694. \uACF5\uC720\uB41C \uBA85\uD568\uC740 \uC544\uB984\uB2E4\uC6B4 \uC6F9 \uD398\uC774\uC9C0\uB85C \uD45C\uC2DC\uB429\uB2C8\uB2E4. \uC571 \uB2E4\uC6B4\uB85C\uB4DC\uAC00 \uD544\uC694 \uC5C6\uC2B5\uB2C8\uB2E4.",
      },
      {
        question: "\uAD6C\uB3C5 \uC11C\uBE44\uC2A4\uC778\uAC00\uC694?",
        answer:
          "\uC544\uB2C8\uC694. BasicCard(\u20A918,000)\uC640 FlexiCard(\u20A932,000)\uB294 \uC77C\uD68C\uC131 \uAD6C\uB9E4\uC785\uB2C8\uB2E4. \uD55C \uBC88 \uACB0\uC81C\uD558\uACE0 \uC601\uC6D0\uD788 \uC0AC\uC6A9\uD558\uC138\uC694.",
      },
      {
        question: "\uAD6C\uB9E4 \uD6C4 \uBA85\uD568\uC744 \uC5C5\uB370\uC774\uD2B8\uD560 \uC218 \uC788\uB098\uC694?",
        answer:
          "\uBB3C\uB860\uC785\uB2C8\uB2E4. \uBA85\uD568 \uC138\uBD80 \uC0AC\uD56D, \uD15C\uD50C\uB9BF, \uC815\uBCF4\uB97C \uC5B8\uC81C\uB4E0 \uD3B8\uC9D1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC5C5\uB370\uC774\uD2B8\uB294 \uC989\uC2DC \uB3D9\uAE30\uD654\uB429\uB2C8\uB2E4.",
      },
      {
        question: "\uB370\uC774\uD130\uB294 \uC548\uC804\uD55C\uAC00\uC694?",
        answer:
          "\uB370\uC774\uD130\uB294 \uC885\uB2E8\uAC04 \uC554\uD638\uD654\uB85C \uC548\uC804\uD558\uAC8C \uC800\uC7A5\uB429\uB2C8\uB2E4. iCloud \uB3D9\uAE30\uD654\uB97C \uC0AC\uC6A9\uD558\uC5EC \uB370\uC774\uD130\uAC00 Apple \uC0DD\uD0DC\uACC4 \uB0B4\uC5D0 \uC720\uC9C0\uB429\uB2C8\uB2E4.",
      },
    ],
  },
  cta: {
    title: "\uB514\uC9C0\uD138\uB85C \uC804\uD658\uD560 \uC900\uBE44\uAC00 \uB418\uC168\uB098\uC694?",
    subtitle:
      "\uC885\uC774 \uBA85\uD568\uC744 \uBC84\uB9B0 \uC218\uCC9C \uBA85\uC758 \uD504\uB85C\uD398\uC154\uB110\uC5D0 \uD569\uB958\uD558\uC138\uC694.",
    button: "eCardify \uBB34\uB8CC \uB2E4\uC6B4\uB85C\uB4DC",
  },
  footer: {
    tagline: "\uD604\uB300 \uD504\uB85C\uD398\uC154\uB110\uC744 \uC704\uD55C \uAC00\uC0C1 \uBA85\uD568.",
    product: "\uC81C\uD488",
    legal: "\uBC95\uC801 \uC815\uBCF4",
    privacy: "\uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uBC29\uCE68",
    terms: "\uC774\uC6A9\uC57D\uAD00",
    contact: "\uBB38\uC758",
    copyright: "\u00A9 2026 eCardify. All rights reserved.",
  },
};

const fr: Translations = {
  nav: {
    features: "Fonctionnalit\u00E9s",
    pricing: "Tarifs",
    faq: "FAQ",
    download: "T\u00E9l\u00E9charger",
  },
  hero: {
    badge: "Cartes de visite virtuelles",
    title: "Votre carte de visite, r\u00E9invent\u00E9e",
    subtitle:
      "Cr\u00E9ez de superbes cartes de visite num\u00E9riques, ajoutez-les \u00E0 Apple Wallet et partagez-les d\u2019un simple tap. Sans papier, sans d\u00E9chet, sans limites.",
    cta: "T\u00E9l\u00E9charger gratuitement",
    ctaSecondary: "Voir les tarifs",
    stats: {
      cards: "Cartes cr\u00E9\u00E9es",
      walletPasses: "Pass Wallet",
      countries: "Pays",
    },
  },
  features: {
    badge: "Fonctionnalit\u00E9s",
    title: "Tout ce dont vous avez besoin",
    subtitle:
      "Des outils puissants pour cr\u00E9er, g\u00E9rer et partager votre identit\u00E9 professionnelle.",
    items: [
      {
        icon: "card",
        title: "Cartes num\u00E9riques",
        description:
          "Concevez de belles cartes de visite avec des mod\u00E8les, couleurs et mises en page personnalis\u00E9s. Votre carte, votre marque.",
      },
      {
        icon: "wallet",
        title: "Apple Wallet",
        description:
          "Ajoutez votre carte directement dans Apple Wallet. Toujours pr\u00EAte, toujours avec vous.",
      },
      {
        icon: "tap",
        title: "Partage intelligent",
        description:
          "Partagez votre carte instantan\u00E9ment via QR code ou un simple lien. Aucune app n\u00E9cessaire c\u00F4t\u00E9 destinataire.",
      },
      {
        icon: "qr",
        title: "Code QR",
        description:
          "G\u00E9n\u00E9rez un code QR unique pour votre carte. Parfait pour les conf\u00E9rences et \u00E9v\u00E9nements.",
      },
      {
        icon: "template",
        title: "Mod\u00E8les personnalisables",
        description:
          "Choisissez parmi des dizaines de mod\u00E8les professionnels. Personnalisez chaque d\u00E9tail selon votre marque.",
      },
      {
        icon: "cloud",
        title: "Synchronisation cloud",
        description:
          "Vos cartes se synchronisent sur tous vos appareils via iCloud. Modifiez sur iPhone, acc\u00E9dez sur iPad.",
      },
    ],
  },
  pricing: {
    badge: "Tarifs",
    title: "Tarification unique et simple",
    subtitle: "Pas d\u2019abonnement. Payez une fois, utilisez pour toujours.",
    oneTime: "Achat unique",
    free: {
      name: "Gratuit",
      price: "0\u00A0\u20AC",
      description: "Commencez avec les bases",
      features: [
        "1 carte de visite num\u00E9rique",
        "Mod\u00E8les de base",
        "Partage par code QR",
        "Champs de contact",
      ],
      cta: "Commencer",
    },
    basic: {
      name: "BasicCard",
      price: "14\u00A0\u20AC",
      description: "Tout pour le networking professionnel",
      features: [
        "1 carte de visite num\u00E9rique (par achat)",
        "Mod\u00E8le de design fixe",
        "Pass Apple Wallet",
        "Partage par QR code",
        "Coordonn\u00E9es & num\u00E9ro de t\u00E9l\u00E9phone",
      ],
      cta: "Acheter BasicCard",
      badge: "Populaire",
    },
    flexi: {
      name: "FlexiCard",
      price: "24\u00A0\u20AC",
      description: "Pour les super-networkers qui veulent toute la flexibilit\u00E9",
      features: [
        "1 carte de visite num\u00E9rique (par achat)",
        "Toutes les fonctions BasicCard",
        "Designs et couleurs personnalis\u00E9s",
        "Plusieurs num\u00E9ros & e-mails",
        "Plusieurs adresses",
        "Scan de carte de visite (OCR)",
        "T\u00E9l\u00E9chargement de logo & avatar",
      ],
      cta: "Acheter FlexiCard",
      badge: "Premium",
    },
  },
  faq: {
    badge: "FAQ",
    title: "Questions fr\u00E9quentes",
    items: [
      {
        question: "eCardify est-il vraiment gratuit pour commencer ?",
        answer:
          "Oui ! La version gratuite inclut une carte num\u00E9rique, des mod\u00E8les de base et le partage par QR. Vous pouvez upgrader \u00E0 tout moment.",
      },
      {
        question: "Comment fonctionne l\u2019int\u00E9gration Apple Wallet ?",
        answer:
          "Avec BasicCard ou FlexiCard, vous pouvez g\u00E9n\u00E9rer un pass Apple Wallet. Il appara\u00EEt \u00E0 c\u00F4t\u00E9 de vos cartes d\u2019embarquement et billets.",
      },
      {
        question: "Les destinataires ont-ils besoin de l\u2019app ?",
        answer:
          "Non. Votre carte partag\u00E9e s\u2019affiche comme une belle page web. Aucun t\u00E9l\u00E9chargement d\u2019app requis.",
      },
      {
        question: "Est-ce un abonnement ?",
        answer:
          "Non. BasicCard (14\u00A0\u20AC) et FlexiCard (24\u00A0\u20AC) sont des achats uniques. Payez une fois, utilisez pour toujours.",
      },
      {
        question: "Puis-je mettre \u00E0 jour ma carte apr\u00E8s l\u2019achat ?",
        answer:
          "Absolument. Vous pouvez modifier les d\u00E9tails, changer les mod\u00E8les et mettre \u00E0 jour vos informations \u00E0 tout moment.",
      },
      {
        question: "Mes donn\u00E9es sont-elles s\u00E9curis\u00E9es ?",
        answer:
          "Vos donn\u00E9es sont stock\u00E9es de mani\u00E8re s\u00E9curis\u00E9e avec chiffrement de bout en bout. Nous utilisons la synchronisation iCloud.",
      },
    ],
  },
  cta: {
    title: "Pr\u00EAt \u00E0 passer au num\u00E9rique ?",
    subtitle:
      "Rejoignez des milliers de professionnels qui ont abandonn\u00E9 les cartes de visite en papier.",
    button: "T\u00E9l\u00E9charger eCardify gratuitement",
  },
  footer: {
    tagline: "Cartes de visite virtuelles pour le professionnel moderne.",
    product: "Produit",
    legal: "Mentions l\u00E9gales",
    privacy: "Politique de confidentialit\u00E9",
    terms: "Conditions d\u2019utilisation",
    contact: "Contact",
    copyright: "\u00A9 2026 eCardify. Tous droits r\u00E9serv\u00E9s.",
  },
};

const pt: Translations = {
  nav: {
    features: "Recursos",
    pricing: "Pre\u00E7os",
    faq: "FAQ",
    download: "Baixar",
  },
  hero: {
    badge: "Cart\u00F5es de visita virtuais",
    title: "Seu cart\u00E3o de visita, reinventado",
    subtitle:
      "Crie cart\u00F5es de visita digitais incr\u00EDveis, adicione ao Apple Wallet e compartilhe com um toque. Sem papel, sem desperd\u00EDcio, sem limites.",
    cta: "Baixar gr\u00E1tis",
    ctaSecondary: "Ver pre\u00E7os",
    stats: {
      cards: "Cart\u00F5es criados",
      walletPasses: "Passes Wallet",
      countries: "Pa\u00EDses",
    },
  },
  features: {
    badge: "Recursos",
    title: "Tudo que voc\u00EA precisa",
    subtitle:
      "Ferramentas poderosas para criar, gerenciar e compartilhar sua identidade profissional.",
    items: [
      {
        icon: "card",
        title: "Cart\u00F5es digitais",
        description:
          "Crie belos cart\u00F5es de visita com modelos, cores e layouts personalizados. Seu cart\u00E3o, sua marca.",
      },
      {
        icon: "wallet",
        title: "Apple Wallet",
        description:
          "Adicione seu cart\u00E3o diretamente ao Apple Wallet. Sempre pronto, sempre com voc\u00EA.",
      },
      {
        icon: "tap",
        title: "Compartilhamento inteligente",
        description:
          "Compartilhe seu cart\u00E3o instantaneamente via QR code ou link simples. Sem app necess\u00E1rio do lado do destinat\u00E1rio.",
      },
      {
        icon: "qr",
        title: "C\u00F3digo QR",
        description:
          "Gere um c\u00F3digo QR exclusivo. Perfeito para confer\u00EAncias, reuni\u00F5es e eventos de networking.",
      },
      {
        icon: "template",
        title: "Modelos personaliz\u00E1veis",
        description:
          "Escolha entre dezenas de modelos profissionais. Personalize cada detalhe para combinar com sua marca.",
      },
      {
        icon: "cloud",
        title: "Sincroniza\u00E7\u00E3o na nuvem",
        description:
          "Seus cart\u00F5es sincronizam em todos os dispositivos via iCloud. Edite no iPhone, acesse no iPad.",
      },
    ],
  },
  pricing: {
    badge: "Pre\u00E7os",
    title: "Pre\u00E7o \u00FAnico e simples",
    subtitle: "Sem assinatura. Pague uma vez, use para sempre.",
    oneTime: "Compra \u00FAnica",
    free: {
      name: "Gr\u00E1tis",
      price: "R$0",
      description: "Comece com o b\u00E1sico",
      features: [
        "1 cart\u00E3o digital",
        "Modelos b\u00E1sicos",
        "Compartilhamento por QR",
        "Campos de contato",
      ],
      cta: "Come\u00E7ar",
    },
    basic: {
      name: "BasicCard",
      price: "R$70",
      description: "Tudo para networking profissional",
      features: [
        "1 cart\u00E3o digital (por compra)",
        "Template de design fixo",
        "Pass Apple Wallet",
        "Compartilhamento por QR code",
        "Contato & n\u00FAmero de telefone",
      ],
      cta: "Comprar BasicCard",
      badge: "Popular",
    },
    flexi: {
      name: "FlexiCard",
      price: "R$120",
      description: "Para super-networkers que querem total flexibilidade",
      features: [
        "1 cart\u00E3o digital (por compra)",
        "Todos os recursos BasicCard",
        "Designs e cores personalizados",
        "V\u00E1rios telefones & e-mails",
        "V\u00E1rios endere\u00E7os",
        "Scan de cart\u00E3o (OCR)",
        "Upload de logo & avatar",
      ],
      cta: "Comprar FlexiCard",
      badge: "Premium",
    },
  },
  faq: {
    badge: "FAQ",
    title: "Perguntas frequentes",
    items: [
      {
        question: "O eCardify \u00E9 realmente gr\u00E1tis para come\u00E7ar?",
        answer:
          "Sim! O plano gratuito inclui um cart\u00E3o digital, modelos b\u00E1sicos e compartilhamento por QR. Voc\u00EA pode fazer upgrade a qualquer momento.",
      },
      {
        question: "Como funciona a integra\u00E7\u00E3o com o Apple Wallet?",
        answer:
          "Com BasicCard ou FlexiCard, voc\u00EA pode gerar um pass Apple Wallet. Ele aparece ao lado dos seus cart\u00F5es de embarque e ingressos.",
      },
      {
        question: "Os destinat\u00E1rios precisam do app?",
        answer:
          "N\u00E3o. Seu cart\u00E3o compartilhado aparece como uma bela p\u00E1gina web. Nenhum download de app necess\u00E1rio.",
      },
      {
        question: "\u00C9 uma assinatura?",
        answer:
          "N\u00E3o. BasicCard (R$70) e FlexiCard (R$120) s\u00E3o compras \u00FAnicas. Pague uma vez, use para sempre.",
      },
      {
        question: "Posso atualizar meu cart\u00E3o ap\u00F3s a compra?",
        answer:
          "Com certeza. Voc\u00EA pode editar detalhes, trocar modelos e atualizar informa\u00E7\u00F5es a qualquer momento. As atualiza\u00E7\u00F5es sincronizam instantaneamente.",
      },
      {
        question: "Meus dados est\u00E3o seguros?",
        answer:
          "Seus dados s\u00E3o armazenados com criptografia de ponta a ponta. Usamos sincroniza\u00E7\u00E3o iCloud para manter seus dados no ecossistema Apple.",
      },
    ],
  },
  cta: {
    title: "Pronto para o digital?",
    subtitle:
      "Junte-se a milhares de profissionais que abandonaram os cart\u00F5es de papel.",
    button: "Baixar eCardify gr\u00E1tis",
  },
  footer: {
    tagline: "Cart\u00F5es de visita virtuais para o profissional moderno.",
    product: "Produto",
    legal: "Legal",
    privacy: "Pol\u00EDtica de Privacidade",
    terms: "Termos de Servi\u00E7o",
    contact: "Contato",
    copyright: "\u00A9 2026 eCardify. Todos os direitos reservados.",
  },
};

const zh: Translations = {
  nav: {
    features: "\u529F\u80FD",
    pricing: "\u4EF7\u683C",
    faq: "\u5E38\u89C1\u95EE\u9898",
    download: "\u4E0B\u8F7D",
  },
  hero: {
    badge: "\u865A\u62DF\u540D\u7247",
    title: "\u60A8\u7684\u540D\u7247\uFF0C\u91CD\u65B0\u5B9A\u4E49",
    subtitle:
      "\u521B\u5EFA\u7CBE\u7F8E\u7684\u6570\u5B57\u540D\u7247\uFF0C\u6DFB\u52A0\u5230 Apple Wallet\uFF0C\u4E00\u89E6\u5373\u53EF\u5206\u4EAB\u3002\u65E0\u7EB8\u5F20\u3001\u65E0\u6D6A\u8D39\u3001\u65E0\u9650\u5236\u3002",
    cta: "\u514D\u8D39\u4E0B\u8F7D",
    ctaSecondary: "\u67E5\u770B\u4EF7\u683C",
    stats: {
      cards: "\u5DF2\u521B\u5EFA\u540D\u7247",
      walletPasses: "\u94B1\u5305\u901A\u884C\u8BC1",
      countries: "\u56FD\u5BB6",
    },
  },
  features: {
    badge: "\u529F\u80FD",
    title: "\u60A8\u6240\u9700\u7684\u4E00\u5207",
    subtitle: "\u5F3A\u5927\u7684\u5DE5\u5177\uFF0C\u7528\u4E8E\u521B\u5EFA\u3001\u7BA1\u7406\u548C\u5206\u4EAB\u60A8\u7684\u4E13\u4E1A\u8EAB\u4EFD\u3002",
    items: [
      {
        icon: "card",
        title: "\u6570\u5B57\u540D\u7247",
        description:
          "\u4F7F\u7528\u81EA\u5B9A\u4E49\u6A21\u677F\u3001\u989C\u8272\u548C\u5E03\u5C40\u8BBE\u8BA1\u7CBE\u7F8E\u540D\u7247\u3002\u60A8\u7684\u540D\u7247\uFF0C\u60A8\u7684\u54C1\u724C\u3002",
      },
      {
        icon: "wallet",
        title: "Apple Wallet",
        description:
          "\u5C06\u540D\u7247\u76F4\u63A5\u6DFB\u52A0\u5230 Apple Wallet\u3002\u968F\u65F6\u53EF\u7528\uFF0C\u968F\u8EAB\u643A\u5E26\u3002",
      },
      {
        icon: "tap",
        title: "\u667A\u80FD\u5206\u4EAB",
        description:
          "\u901A\u8FC7\u4E8C\u7EF4\u7801\u6216\u7B80\u5355\u94FE\u63A5\u5373\u65F6\u5206\u4EAB\u540D\u7247\u3002\u63A5\u6536\u65B9\u65E0\u9700\u5B89\u88C5\u5E94\u7528\u3002",
      },
      {
        icon: "qr",
        title: "\u4E8C\u7EF4\u7801",
        description:
          "\u4E3A\u540D\u7247\u751F\u6210\u552F\u4E00\u4E8C\u7EF4\u7801\u3002\u975E\u5E38\u9002\u5408\u4F1A\u8BAE\u3001\u6D3B\u52A8\u548C\u793E\u4EA4\u573A\u5408\u3002",
      },
      {
        icon: "template",
        title: "\u53EF\u5B9A\u5236\u6A21\u677F",
        description:
          "\u4ECE\u6570\u5341\u4E2A\u4E13\u4E1A\u8BBE\u8BA1\u6A21\u677F\u4E2D\u9009\u62E9\u3002\u81EA\u5B9A\u4E49\u6BCF\u4E2A\u7EC6\u8282\u4EE5\u5339\u914D\u60A8\u7684\u54C1\u724C\u3002",
      },
      {
        icon: "cloud",
        title: "\u4E91\u540C\u6B65",
        description:
          "\u901A\u8FC7 iCloud \u5728\u6240\u6709\u8BBE\u5907\u4E0A\u540C\u6B65\u540D\u7247\u3002\u5728 iPhone \u4E0A\u7F16\u8F91\uFF0C\u5728 iPad \u4E0A\u8BBF\u95EE\u3002",
      },
    ],
  },
  pricing: {
    badge: "\u4EF7\u683C",
    title: "\u7B80\u5355\u7684\u4E00\u6B21\u6027\u4EF7\u683C",
    subtitle: "\u65E0\u8BA2\u9605\u3002\u4E00\u6B21\u4ED8\u6B3E\uFF0C\u6C38\u4E45\u4F7F\u7528\u3002",
    oneTime: "\u4E00\u6B21\u6027\u8D2D\u4E70",
    free: {
      name: "\u514D\u8D39",
      price: "\uFFE50",
      description: "\u4ECE\u57FA\u7840\u5F00\u59CB",
      features: [
        "1\u5F20\u6570\u5B57\u540D\u7247",
        "\u57FA\u7840\u6A21\u677F",
        "\u4E8C\u7EF4\u7801\u5206\u4EAB",
        "\u8054\u7CFB\u4FE1\u606F\u5B57\u6BB5",
      ],
      cta: "\u5F00\u59CB\u4F7F\u7528",
    },
    basic: {
      name: "BasicCard",
      price: "\uFFE5100",
      description: "\u4E13\u4E1A\u793E\u4EA4\u6240\u9700\u7684\u4E00\u5207",
      features: [
        "1\u5F20\u6570\u5B57\u540D\u7247\uFF08\u6BCF\u6B21\u8D2D\u4E70\uFF09",
        "\u56FA\u5B9A\u5361\u7247\u8BBE\u8BA1\u6A21\u677F",
        "Apple Wallet \u901A\u884C\u8BC1",
        "\u4E8C\u7EF4\u7801\u5206\u4EAB",
        "\u8054\u7CFB\u4FE1\u606F\u548C\u7535\u8BDD\u53F7\u7801",
      ],
      cta: "\u8D2D\u4E70 BasicCard",
      badge: "\u70ED\u95E8",
    },
    flexi: {
      name: "FlexiCard",
      price: "\uFFE5170",
      description: "\u9002\u5408\u8FFD\u6C42\u5B8C\u5168\u7075\u6D3B\u6027\u7684\u8D85\u7EA7\u793E\u4EA4\u8FBE\u4EBA",
      features: [
        "1\u5F20\u6570\u5B57\u540D\u7247\uFF08\u6BCF\u6B21\u8D2D\u4E70\uFF09",
        "\u6240\u6709 BasicCard \u529F\u80FD",
        "\u81EA\u5B9A\u4E49\u5361\u7247\u8BBE\u8BA1\u548C\u989C\u8272",
        "\u591A\u4E2A\u7535\u8BDD\u548C\u7535\u5B50\u90AE\u4EF6",
        "\u591A\u4E2A\u5730\u5740",
        "\u540D\u7247\u626B\u63CF\uFF08OCR\uFF09",
        "\u6807\u5FD7\u548C\u5934\u50CF\u4E0A\u4F20",
      ],
      cta: "\u8D2D\u4E70 FlexiCard",
      badge: "\u9AD8\u7EA7",
    },
  },
  faq: {
    badge: "\u5E38\u89C1\u95EE\u9898",
    title: "\u5E38\u89C1\u95EE\u9898\u89E3\u7B54",
    items: [
      {
        question: "eCardify \u771F\u7684\u53EF\u4EE5\u514D\u8D39\u5F00\u59CB\u5417\uFF1F",
        answer:
          "\u662F\u7684\uFF01\u514D\u8D39\u7248\u5305\u62EC1\u5F20\u6570\u5B57\u540D\u7247\u3001\u57FA\u7840\u6A21\u677F\u548C\u4E8C\u7EF4\u7801\u5206\u4EAB\u3002\u60A8\u53EF\u4EE5\u968F\u65F6\u5347\u7EA7\u3002",
      },
      {
        question: "Apple Wallet \u96C6\u6210\u5982\u4F55\u5DE5\u4F5C\uFF1F",
        answer:
          "\u4F7F\u7528 BasicCard \u6216 FlexiCard\uFF0C\u60A8\u53EF\u4EE5\u751F\u6210 Apple Wallet \u901A\u884C\u8BC1\u3002\u5B83\u4F1A\u4E0E\u60A8\u7684\u767B\u673A\u724C\u548C\u95E8\u7968\u4E00\u8D77\u663E\u793A\u3002",
      },
      {
        question: "\u63A5\u6536\u65B9\u9700\u8981\u5B89\u88C5\u5E94\u7528\u5417\uFF1F",
        answer:
          "\u4E0D\u9700\u8981\u3002\u60A8\u5206\u4EAB\u7684\u540D\u7247\u4F1A\u4EE5\u7CBE\u7F8E\u7684\u7F51\u9875\u5F62\u5F0F\u663E\u793A\u3002\u65E0\u9700\u4E0B\u8F7D\u5E94\u7528\u3002",
      },
      {
        question: "\u8FD9\u662F\u8BA2\u9605\u670D\u52A1\u5417\uFF1F",
        answer:
          "\u4E0D\u662F\u3002BasicCard\uFF08\uFFE5100\uFF09\u548C FlexiCard\uFF08\uFFE5170\uFF09\u662F\u4E00\u6B21\u6027\u8D2D\u4E70\u3002\u4E00\u6B21\u4ED8\u6B3E\uFF0C\u6C38\u4E45\u4F7F\u7528\u3002",
      },
      {
        question: "\u8D2D\u4E70\u540E\u53EF\u4EE5\u66F4\u65B0\u540D\u7247\u5417\uFF1F",
        answer:
          "\u5F53\u7136\u53EF\u4EE5\u3002\u60A8\u53EF\u4EE5\u968F\u65F6\u7F16\u8F91\u540D\u7247\u8BE6\u60C5\u3001\u66F4\u6362\u6A21\u677F\u548C\u66F4\u65B0\u4FE1\u606F\u3002\u66F4\u65B0\u4F1A\u5373\u65F6\u540C\u6B65\u3002",
      },
      {
        question: "\u6211\u7684\u6570\u636E\u5B89\u5168\u5417\uFF1F",
        answer:
          "\u60A8\u7684\u6570\u636E\u901A\u8FC7\u7AEF\u5230\u7AEF\u52A0\u5BC6\u5B89\u5168\u5B58\u50A8\u3002\u6211\u4EEC\u4F7F\u7528 iCloud \u540C\u6B65\uFF0C\u786E\u4FDD\u6570\u636E\u7559\u5728 Apple \u751F\u6001\u7CFB\u7EDF\u5185\u3002",
      },
    ],
  },
  cta: {
    title: "\u51C6\u5907\u597D\u8D70\u5411\u6570\u5B57\u5316\u4E86\u5417\uFF1F",
    subtitle: "\u52A0\u5165\u6570\u5343\u540D\u5DF2\u653E\u5F03\u7EB8\u8D28\u540D\u7247\u7684\u4E13\u4E1A\u4EBA\u58EB\u3002",
    button: "\u514D\u8D39\u4E0B\u8F7D eCardify",
  },
  footer: {
    tagline: "\u4E3A\u73B0\u4EE3\u4E13\u4E1A\u4EBA\u58EB\u6253\u9020\u7684\u865A\u62DF\u540D\u7247\u3002",
    product: "\u4EA7\u54C1",
    legal: "\u6CD5\u5F8B\u4FE1\u606F",
    privacy: "\u9690\u79C1\u653F\u7B56",
    terms: "\u670D\u52A1\u6761\u6B3E",
    contact: "\u8054\u7CFB\u6211\u4EEC",
    copyright: "\u00A9 2026 eCardify. \u4FDD\u7559\u6240\u6709\u6743\u5229\u3002",
  },
};

const es: Translations = {
  nav: {
    features: "Funciones",
    pricing: "Precios",
    faq: "FAQ",
    download: "Descargar",
  },
  hero: {
    badge: "Tarjetas de visita virtuales",
    title: "Tu tarjeta de visita, reinventada",
    subtitle:
      "Crea impresionantes tarjetas digitales, a\u00F1\u00E1delas a Apple Wallet y comp\u00E1rtelas con un toque. Sin papel, sin desperdicio, sin l\u00EDmites.",
    cta: "Descargar gratis",
    ctaSecondary: "Ver precios",
    stats: {
      cards: "Tarjetas creadas",
      walletPasses: "Pases Wallet",
      countries: "Pa\u00EDses",
    },
  },
  features: {
    badge: "Funciones",
    title: "Todo lo que necesitas",
    subtitle:
      "Herramientas poderosas para crear, gestionar y compartir tu identidad profesional.",
    items: [
      {
        icon: "card",
        title: "Tarjetas digitales",
        description:
          "Dise\u00F1a hermosas tarjetas con plantillas, colores y dise\u00F1os personalizados. Tu tarjeta, tu marca.",
      },
      {
        icon: "wallet",
        title: "Apple Wallet",
        description:
          "A\u00F1ade tu tarjeta directamente a Apple Wallet. Siempre lista, siempre contigo.",
      },
      {
        icon: "tap",
        title: "Compartir inteligente",
        description:
          "Comparte tu tarjeta al instante por c\u00F3digo QR o un simple enlace. Sin app necesaria para el receptor.",
      },
      {
        icon: "qr",
        title: "C\u00F3digo QR",
        description:
          "Genera un c\u00F3digo QR \u00FAnico. Perfecto para conferencias, reuniones y eventos de networking.",
      },
      {
        icon: "template",
        title: "Plantillas personalizables",
        description:
          "Elige entre decenas de plantillas profesionales. Personaliza cada detalle seg\u00FAn tu marca.",
      },
      {
        icon: "cloud",
        title: "Sincronizaci\u00F3n en la nube",
        description:
          "Tus tarjetas se sincronizan en todos los dispositivos con iCloud. Edita en iPhone, accede en iPad.",
      },
    ],
  },
  pricing: {
    badge: "Precios",
    title: "Precios simples, pago \u00FAnico",
    subtitle: "Sin suscripci\u00F3n. Paga una vez, usa para siempre.",
    oneTime: "Compra \u00FAnica",
    free: {
      name: "Gratis",
      price: "0\u00A0\u20AC",
      description: "Empieza con lo b\u00E1sico",
      features: [
        "1 tarjeta digital",
        "Plantillas b\u00E1sicas",
        "Compartir por QR",
        "Campos de contacto",
      ],
      cta: "Comenzar",
    },
    basic: {
      name: "BasicCard",
      price: "14\u00A0\u20AC",
      description: "Todo para el networking profesional",
      features: [
        "1 tarjeta digital (por compra)",
        "Plantilla de dise\u00F1o fija",
        "Pass Apple Wallet",
        "Compartir por c\u00F3digo QR",
        "Datos de contacto & tel\u00E9fono",
      ],
      cta: "Comprar BasicCard",
      badge: "Popular",
    },
    flexi: {
      name: "FlexiCard",
      price: "24\u00A0\u20AC",
      description: "Para super-networkers que quieren total flexibilidad",
      features: [
        "1 tarjeta digital (por compra)",
        "Todas las funciones BasicCard",
        "Dise\u00F1os y colores personalizados",
        "M\u00FAltiples tel\u00E9fonos & e-mails",
        "M\u00FAltiples direcciones",
        "Esc\u00E1ner de tarjeta (OCR)",
        "Subida de logo & avatar",
      ],
      cta: "Comprar FlexiCard",
      badge: "Premium",
    },
  },
  faq: {
    badge: "FAQ",
    title: "Preguntas frecuentes",
    items: [
      {
        question: "\u00BFeCardify es realmente gratis para empezar?",
        answer:
          "\u00A1S\u00ED! El plan gratuito incluye una tarjeta digital, plantillas b\u00E1sicas y compartir por QR. Puedes actualizar en cualquier momento.",
      },
      {
        question: "\u00BFC\u00F3mo funciona la integraci\u00F3n con Apple Wallet?",
        answer:
          "Con BasicCard o FlexiCard, puedes generar un pass de Apple Wallet. Aparece junto a tus tarjetas de embarque y entradas.",
      },
      {
        question: "\u00BFLos destinatarios necesitan la app?",
        answer:
          "No. Tu tarjeta compartida se muestra como una hermosa p\u00E1gina web. No se requiere descarga de app.",
      },
      {
        question: "\u00BFEs una suscripci\u00F3n?",
        answer:
          "No. BasicCard (14\u00A0\u20AC) y FlexiCard (24\u00A0\u20AC) son compras \u00FAnicas. Paga una vez, usa para siempre.",
      },
      {
        question: "\u00BFPuedo actualizar mi tarjeta despu\u00E9s de la compra?",
        answer:
          "Por supuesto. Puedes editar detalles, cambiar plantillas y actualizar informaci\u00F3n en cualquier momento. Las actualizaciones se sincronizan al instante.",
      },
      {
        question: "\u00BFMis datos est\u00E1n seguros?",
        answer:
          "Tus datos se almacenan de forma segura con cifrado de extremo a extremo. Usamos sincronizaci\u00F3n iCloud para mantener tus datos en el ecosistema Apple.",
      },
    ],
  },
  cta: {
    title: "\u00BFListo para lo digital?",
    subtitle:
      "\u00DAnete a miles de profesionales que han dejado atr\u00E1s las tarjetas de papel.",
    button: "Descargar eCardify gratis",
  },
  footer: {
    tagline: "Tarjetas de visita virtuales para el profesional moderno.",
    product: "Producto",
    legal: "Legal",
    privacy: "Pol\u00EDtica de Privacidad",
    terms: "T\u00E9rminos de Servicio",
    contact: "Contacto",
    copyright: "\u00A9 2026 eCardify. Todos los derechos reservados.",
  },
};

const it: Translations = {
  nav: {
    features: "Funzionalit\u00E0",
    pricing: "Prezzi",
    faq: "FAQ",
    download: "Scarica",
  },
  hero: {
    badge: "Biglietti da visita virtuali",
    title: "Il tuo biglietto da visita, reinventato",
    subtitle:
      "Crea straordinari biglietti da visita digitali, aggiungili ad Apple Wallet e condividili con un tocco. Niente carta, niente spreco, nessun limite.",
    cta: "Scarica gratis",
    ctaSecondary: "Vedi prezzi",
    stats: {
      cards: "Biglietti creati",
      walletPasses: "Pass Wallet",
      countries: "Paesi",
    },
  },
  features: {
    badge: "Funzionalit\u00E0",
    title: "Tutto ci\u00F2 di cui hai bisogno",
    subtitle:
      "Strumenti potenti per creare, gestire e condividere la tua identit\u00E0 professionale.",
    items: [
      {
        icon: "card",
        title: "Biglietti digitali",
        description:
          "Progetta bellissimi biglietti da visita con modelli, colori e layout personalizzati. Il tuo biglietto, il tuo brand.",
      },
      {
        icon: "wallet",
        title: "Apple Wallet",
        description:
          "Aggiungi il tuo biglietto direttamente ad Apple Wallet. Sempre pronto, sempre con te.",
      },
      {
        icon: "tap",
        title: "Condivisione intelligente",
        description:
          "Condividi il tuo biglietto all\u2019istante via QR code o un semplice link. Nessuna app necessaria per il destinatario.",
      },
      {
        icon: "qr",
        title: "Codice QR",
        description:
          "Genera un codice QR unico. Perfetto per conferenze, riunioni ed eventi di networking.",
      },
      {
        icon: "template",
        title: "Modelli personalizzabili",
        description:
          "Scegli tra decine di modelli professionali. Personalizza ogni dettaglio per il tuo brand.",
      },
      {
        icon: "cloud",
        title: "Sincronizzazione cloud",
        description:
          "I tuoi biglietti si sincronizzano su tutti i dispositivi con iCloud. Modifica su iPhone, accedi su iPad.",
      },
    ],
  },
  pricing: {
    badge: "Prezzi",
    title: "Prezzi semplici, acquisto unico",
    subtitle: "Nessun abbonamento. Paga una volta, usa per sempre.",
    oneTime: "Acquisto unico",
    free: {
      name: "Gratuito",
      price: "0\u00A0\u20AC",
      description: "Inizia con le basi",
      features: [
        "1 biglietto digitale",
        "Modelli base",
        "Condivisione QR",
        "Campi contatto",
      ],
      cta: "Inizia",
    },
    basic: {
      name: "BasicCard",
      price: "14\u00A0\u20AC",
      description: "Tutto per il networking professionale",
      features: [
        "1 biglietto digitale (per acquisto)",
        "Template di design fisso",
        "Pass Apple Wallet",
        "Condivisione tramite QR code",
        "Contatti & numero di telefono",
      ],
      cta: "Acquista BasicCard",
      badge: "Popolare",
    },
    flexi: {
      name: "FlexiCard",
      price: "24\u00A0\u20AC",
      description: "Per super-networker che vogliono la massima flessibilit\u00E0",
      features: [
        "1 biglietto digitale (per acquisto)",
        "Tutte le funzioni BasicCard",
        "Design e colori personalizzati",
        "Pi\u00F9 numeri di telefono & e-mail",
        "Pi\u00F9 indirizzi",
        "Scansione biglietto da visita (OCR)",
        "Caricamento logo & avatar",
      ],
      cta: "Acquista FlexiCard",
      badge: "Premium",
    },
  },
  faq: {
    badge: "FAQ",
    title: "Domande frequenti",
    items: [
      {
        question: "eCardify \u00E8 davvero gratuito per iniziare?",
        answer:
          "S\u00EC! Il piano gratuito include un biglietto digitale, modelli base e condivisione QR. Puoi aggiornare in qualsiasi momento.",
      },
      {
        question: "Come funziona l\u2019integrazione con Apple Wallet?",
        answer:
          "Con BasicCard o FlexiCard, puoi generare un pass Apple Wallet. Appare accanto alle tue carte d\u2019imbarco e biglietti.",
      },
      {
        question: "I destinatari hanno bisogno dell\u2019app?",
        answer:
          "No. Il tuo biglietto condiviso viene visualizzato come una bella pagina web. Nessun download necessario.",
      },
      {
        question: "\u00C8 un abbonamento?",
        answer:
          "No. BasicCard (14\u00A0\u20AC) e FlexiCard (24\u00A0\u20AC) sono acquisti unici. Paga una volta, usa per sempre.",
      },
      {
        question: "Posso aggiornare il mio biglietto dopo l\u2019acquisto?",
        answer:
          "Assolutamente. Puoi modificare dettagli, cambiare modelli e aggiornare informazioni in qualsiasi momento. Gli aggiornamenti si sincronizzano istantaneamente.",
      },
      {
        question: "I miei dati sono al sicuro?",
        answer:
          "I tuoi dati sono archiviati in modo sicuro con crittografia end-to-end. Utilizziamo la sincronizzazione iCloud per mantenere i dati nel tuo ecosistema Apple.",
      },
    ],
  },
  cta: {
    title: "Pronto per il digitale?",
    subtitle:
      "Unisciti a migliaia di professionisti che hanno abbandonato i biglietti di carta.",
    button: "Scarica eCardify gratis",
  },
  footer: {
    tagline: "Biglietti da visita virtuali per il professionista moderno.",
    product: "Prodotto",
    legal: "Legale",
    privacy: "Informativa sulla Privacy",
    terms: "Termini di Servizio",
    contact: "Contatti",
    copyright: "\u00A9 2026 eCardify. Tutti i diritti riservati.",
  },
};

const translations: Record<Locale, Translations> = {
  en,
  ja,
  de,
  ko,
  fr,
  pt,
  zh,
  es,
  it,
};

export function getTranslations(locale: Locale): Translations {
  return translations[locale];
}

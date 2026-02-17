import type { Metadata } from "next";
import { PrivacyContent } from "@/components/PrivacyContent";

export const metadata: Metadata = {
  title: "Politica de Privacidad - eCardify",
  description: "Politica de privacidad de eCardify.",
  alternates: {
    canonical: "https://ecardify.byalif.app/es/privacy",
  },
};

export default function PrivacyPage() {
  return <PrivacyContent backHref="/es" />;
}

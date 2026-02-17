import type { Metadata } from "next";
import { PrivacyContent } from "@/components/PrivacyContent";

export const metadata: Metadata = {
  title: "Politique de Confidentialite - eCardify",
  description: "Politique de confidentialite d'eCardify.",
  alternates: {
    canonical: "https://ecardify.byalif.app/fr/privacy",
  },
};

export default function PrivacyPage() {
  return <PrivacyContent backHref="/fr" />;
}

import type { Metadata } from "next";
import { PrivacyContent } from "@/components/PrivacyContent";

export const metadata: Metadata = {
  title: "Politica de Privacidade - eCardify",
  description: "Politica de privacidade do eCardify.",
  alternates: {
    canonical: "https://ecardify.byalif.app/pt/privacy",
  },
};

export default function PrivacyPage() {
  return <PrivacyContent backHref="/pt" />;
}

import type { Metadata } from "next";
import { TermsContent } from "@/components/TermsContent";

export const metadata: Metadata = {
  title: "Conditions d'Utilisation - eCardify",
  description: "Conditions d'utilisation d'eCardify.",
  alternates: {
    canonical: "https://ecardify.byalif.app/fr/terms",
  },
};

export default function TermsPage() {
  return <TermsContent backHref="/fr" />;
}

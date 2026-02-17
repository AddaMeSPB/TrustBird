import type { Metadata } from "next";
import { TermsContent } from "@/components/TermsContent";

export const metadata: Metadata = {
  title: "Nutzungsbedingungen - eCardify",
  description: "eCardify Nutzungsbedingungen.",
  alternates: {
    canonical: "https://ecardify.byalif.app/de/terms",
  },
};

export default function TermsPage() {
  return <TermsContent backHref="/de" />;
}

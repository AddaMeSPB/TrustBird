import type { Metadata } from "next";
import { TermsContent } from "@/components/TermsContent";

export const metadata: Metadata = {
  title: "Termini di Servizio - eCardify",
  description: "Termini di servizio di eCardify.",
  alternates: {
    canonical: "https://ecardify.byalif.app/it/terms",
  },
};

export default function TermsPage() {
  return <TermsContent backHref="/it" />;
}

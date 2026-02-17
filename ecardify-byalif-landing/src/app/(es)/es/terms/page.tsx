import type { Metadata } from "next";
import { TermsContent } from "@/components/TermsContent";

export const metadata: Metadata = {
  title: "Terminos de Servicio - eCardify",
  description: "Terminos de servicio de eCardify.",
  alternates: {
    canonical: "https://ecardify.byalif.app/es/terms",
  },
};

export default function TermsPage() {
  return <TermsContent backHref="/es" />;
}

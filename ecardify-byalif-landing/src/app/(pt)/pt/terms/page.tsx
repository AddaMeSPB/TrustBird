import type { Metadata } from "next";
import { TermsContent } from "@/components/TermsContent";

export const metadata: Metadata = {
  title: "Termos de Servico - eCardify",
  description: "Termos de servico do eCardify.",
  alternates: {
    canonical: "https://ecardify.byalif.app/pt/terms",
  },
};

export default function TermsPage() {
  return <TermsContent backHref="/pt" />;
}

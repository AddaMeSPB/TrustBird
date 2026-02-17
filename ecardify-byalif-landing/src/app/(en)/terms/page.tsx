import type { Metadata } from "next";
import { TermsContent } from "@/components/TermsContent";

export const metadata: Metadata = {
  title: "Terms of Service - eCardify",
  description: "eCardify terms of service. Read our terms and conditions.",
  alternates: {
    canonical: "https://ecardify.byalif.app/terms",
  },
};

export default function TermsPage() {
  return <TermsContent backHref="/" />;
}

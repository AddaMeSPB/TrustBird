import type { Metadata } from "next";
import { TermsContent } from "@/components/TermsContent";

export const metadata: Metadata = {
  title: "이용약관 - eCardify",
  description: "eCardify 이용약관.",
  alternates: {
    canonical: "https://ecardify.byalif.app/ko/terms",
  },
};

export default function TermsPage() {
  return <TermsContent backHref="/ko" />;
}

import type { Metadata } from "next";
import { TermsContent } from "@/components/TermsContent";

export const metadata: Metadata = {
  title: "利用規約 - eCardify",
  description: "eCardifyの利用規約。",
  alternates: {
    canonical: "https://ecardify.byalif.app/ja/terms",
  },
};

export default function TermsPage() {
  return <TermsContent backHref="/ja" />;
}

import type { Metadata } from "next";
import { TermsContent } from "@/components/TermsContent";

export const metadata: Metadata = {
  title: "服务条款 - eCardify",
  description: "eCardify服务条款。",
  alternates: {
    canonical: "https://ecardify.byalif.app/zh/terms",
  },
};

export default function TermsPage() {
  return <TermsContent backHref="/zh" />;
}

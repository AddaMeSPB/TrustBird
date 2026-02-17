import type { Metadata } from "next";
import { PrivacyContent } from "@/components/PrivacyContent";

export const metadata: Metadata = {
  title: "隐私政策 - eCardify",
  description: "eCardify隐私政策。",
  alternates: {
    canonical: "https://ecardify.byalif.app/zh/privacy",
  },
};

export default function PrivacyPage() {
  return <PrivacyContent backHref="/zh" />;
}

import type { Metadata } from "next";
import { PrivacyContent } from "@/components/PrivacyContent";

export const metadata: Metadata = {
  title: "개인정보 보호정책 - eCardify",
  description: "eCardify 개인정보 보호정책.",
  alternates: {
    canonical: "https://ecardify.byalif.app/ko/privacy",
  },
};

export default function PrivacyPage() {
  return <PrivacyContent backHref="/ko" />;
}

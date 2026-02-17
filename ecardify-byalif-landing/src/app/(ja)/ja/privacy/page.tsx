import type { Metadata } from "next";
import { PrivacyContent } from "@/components/PrivacyContent";

export const metadata: Metadata = {
  title: "プライバシーポリシー - eCardify",
  description: "eCardifyのプライバシーポリシー。",
  alternates: {
    canonical: "https://ecardify.byalif.app/ja/privacy",
  },
};

export default function PrivacyPage() {
  return <PrivacyContent backHref="/ja" />;
}

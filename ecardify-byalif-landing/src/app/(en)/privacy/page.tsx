import type { Metadata } from "next";
import { PrivacyContent } from "@/components/PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy - eCardify",
  description: "eCardify privacy policy. Learn how we handle your data.",
  alternates: {
    canonical: "https://ecardify.byalif.app/privacy",
  },
};

export default function PrivacyPage() {
  return <PrivacyContent backHref="/" />;
}

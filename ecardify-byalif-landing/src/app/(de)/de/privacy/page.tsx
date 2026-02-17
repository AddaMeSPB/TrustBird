import type { Metadata } from "next";
import { PrivacyContent } from "@/components/PrivacyContent";

export const metadata: Metadata = {
  title: "Datenschutzrichtlinie - eCardify",
  description: "eCardify Datenschutzrichtlinie.",
  alternates: {
    canonical: "https://ecardify.byalif.app/de/privacy",
  },
};

export default function PrivacyPage() {
  return <PrivacyContent backHref="/de" />;
}

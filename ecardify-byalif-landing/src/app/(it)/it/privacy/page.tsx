import type { Metadata } from "next";
import { PrivacyContent } from "@/components/PrivacyContent";

export const metadata: Metadata = {
  title: "Informativa sulla Privacy - eCardify",
  description: "Informativa sulla privacy di eCardify.",
  alternates: {
    canonical: "https://ecardify.byalif.app/it/privacy",
  },
};

export default function PrivacyPage() {
  return <PrivacyContent backHref="/it" />;
}

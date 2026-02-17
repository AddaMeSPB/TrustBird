import type { Metadata } from "next";
import { getLocaleMetadata } from "@/lib/locale-metadata";
import { LocalizedHomePage } from "@/components/LocalizedHomePage";

export const metadata: Metadata = getLocaleMetadata("fr");

export default function FrPage() {
  return <LocalizedHomePage locale="fr" />;
}

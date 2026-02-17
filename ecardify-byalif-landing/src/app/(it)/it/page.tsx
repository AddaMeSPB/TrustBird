import type { Metadata } from "next";
import { getLocaleMetadata } from "@/lib/locale-metadata";
import { LocalizedHomePage } from "@/components/LocalizedHomePage";

export const metadata: Metadata = getLocaleMetadata("it");

export default function ItPage() {
  return <LocalizedHomePage locale="it" />;
}

import type { Metadata } from "next";
import { getLocaleMetadata } from "@/lib/locale-metadata";
import { LocalizedHomePage } from "@/components/LocalizedHomePage";

export const metadata: Metadata = getLocaleMetadata("pt");

export default function PtPage() {
  return <LocalizedHomePage locale="pt" />;
}

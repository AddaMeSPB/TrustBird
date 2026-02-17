import type { Metadata } from "next";
import { getLocaleMetadata } from "@/lib/locale-metadata";
import { LocalizedHomePage } from "@/components/LocalizedHomePage";

export const metadata: Metadata = getLocaleMetadata("ko");

export default function KoPage() {
  return <LocalizedHomePage locale="ko" />;
}

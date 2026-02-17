import type { Metadata } from "next";
import { getLocaleMetadata } from "@/lib/locale-metadata";
import { LocalizedHomePage } from "@/components/LocalizedHomePage";

export const metadata: Metadata = getLocaleMetadata("zh");

export default function ZhPage() {
  return <LocalizedHomePage locale="zh" />;
}

import type { ReactNode } from "react";
import { RootLayoutShell } from "@/lib/root-layout";

export default function ZhLayout({ children }: { children: ReactNode }) {
  return <RootLayoutShell lang="zh-Hans">{children}</RootLayoutShell>;
}

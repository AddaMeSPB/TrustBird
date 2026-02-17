import type { ReactNode } from "react";
import { RootLayoutShell } from "@/lib/root-layout";

export default function JaLayout({ children }: { children: ReactNode }) {
  return <RootLayoutShell lang="ja">{children}</RootLayoutShell>;
}

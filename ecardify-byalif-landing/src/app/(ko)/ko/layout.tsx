import type { ReactNode } from "react";
import { RootLayoutShell } from "@/lib/root-layout";

export default function KoLayout({ children }: { children: ReactNode }) {
  return <RootLayoutShell lang="ko">{children}</RootLayoutShell>;
}

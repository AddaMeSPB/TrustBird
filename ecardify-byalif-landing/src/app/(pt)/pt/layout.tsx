import type { ReactNode } from "react";
import { RootLayoutShell } from "@/lib/root-layout";

export default function PtLayout({ children }: { children: ReactNode }) {
  return <RootLayoutShell lang="pt-BR">{children}</RootLayoutShell>;
}

import type { ReactNode } from "react";
import { RootLayoutShell } from "@/lib/root-layout";

export default function FrLayout({ children }: { children: ReactNode }) {
  return <RootLayoutShell lang="fr">{children}</RootLayoutShell>;
}

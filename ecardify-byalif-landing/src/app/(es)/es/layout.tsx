import type { ReactNode } from "react";
import { RootLayoutShell } from "@/lib/root-layout";

export default function EsLayout({ children }: { children: ReactNode }) {
  return <RootLayoutShell lang="es">{children}</RootLayoutShell>;
}

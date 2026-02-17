import type { ReactNode } from "react";
import { RootLayoutShell } from "@/lib/root-layout";

export default function ItLayout({ children }: { children: ReactNode }) {
  return <RootLayoutShell lang="it">{children}</RootLayoutShell>;
}

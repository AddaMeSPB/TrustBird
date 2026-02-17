import type { ReactNode } from "react";
import { RootLayoutShell } from "@/lib/root-layout";

export default function EnLayout({ children }: { children: ReactNode }) {
  return <RootLayoutShell lang="en">{children}</RootLayoutShell>;
}

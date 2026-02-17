import type { ReactNode } from "react";
import { RootLayoutShell } from "@/lib/root-layout";

export default function DeLayout({ children }: { children: ReactNode }) {
  return <RootLayoutShell lang="de">{children}</RootLayoutShell>;
}

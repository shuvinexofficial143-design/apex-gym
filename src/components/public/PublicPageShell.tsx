import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

type PublicPageShellProps = {
  children: ReactNode;
};

export function PublicPageShell({ children }: PublicPageShellProps) {
  return (
    <main>
      <Navbar />
      <div style={{ paddingTop: 76 }}>{children}</div>
      <Footer />
    </main>
  );
}

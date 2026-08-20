import type { ReactNode } from "react";
import { MemberSidebar } from "./MemberSidebar";
import { MemberTopbar } from "./MemberTopbar";

export function MemberShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <main style={{ minHeight: "100svh", background: "#090909" }}>
      <MemberSidebar />
      <div className="member-main" style={{ marginLeft: 260, minWidth: 0 }}>
        <MemberTopbar />
        <section style={{ padding: "32px clamp(16px,4vw,46px) 60px", minWidth: 0 }}>
          <div style={{ marginBottom: 28 }}>
            <div className="eyebrow">Member portal</div>
            <h1 style={{ fontSize: "clamp(38px,5vw,64px)", margin: "12px 0 8px", letterSpacing: "-.05em" }}>{title}</h1>
            {subtitle ? <p className="muted" style={{ maxWidth: 820, margin: 0, lineHeight: 1.7 }}>{subtitle}</p> : null}
          </div>
          {children}
        </section>
      </div>

      <style>{`
        @media(max-width:980px){
          .member-main{margin-left:0!important;padding-bottom:76px}
        }
      `}</style>
    </main>
  );
}

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
          <div className="workspace-heading">
            <div className="eyebrow">Member workspace</div>
            <span className="workspace-pill">Experience preview</span>
            <h1>{title}</h1>
            {subtitle ? <p className="muted">{subtitle}</p> : null}
          </div>
          {children}
        </section>
      </div>

      <style>{`
        .workspace-heading{margin-bottom:28px;position:relative}
        .workspace-heading h1{font-size:clamp(38px,5vw,64px);margin:12px 0 8px;letter-spacing:-.05em}
        .workspace-heading p{max-width:820px;margin:0;line-height:1.7}
        .workspace-pill{display:inline-flex;margin-left:10px;min-height:27px;align-items:center;padding:0 9px;border-radius:999px;border:1px solid var(--line);color:var(--muted);font-size:9px;font-weight:1000;letter-spacing:.09em;text-transform:uppercase;vertical-align:middle}
        @media(max-width:980px){.member-main{margin-left:0!important;padding-bottom:76px}}
        @media(max-width:540px){.workspace-pill{margin:9px 0 0;display:flex;width:max-content}}
      `}</style>
    </main>
  );
}

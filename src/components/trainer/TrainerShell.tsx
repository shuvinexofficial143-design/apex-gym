"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const groups: Array<[string, Array<[string, string]>]> = [
  ["Coach",[["Overview","/trainer"],["Clients","/trainer/clients"],["Schedule","/trainer/schedule"],["Sessions","/trainer/sessions"]]],
  ["Programming",[["Assign Workout","/trainer/assign-workout"],["Assign Diet","/trainer/assign-diet"],["Progress","/trainer/progress"],["Notes","/trainer/notes"]]],
  ["Business",[["Earnings","/trainer/earnings"]]]
];

export function TrainerShell({title,subtitle,children}:{title:string;subtitle?:string;children:ReactNode}){
  const pathname=usePathname();
  const active=(href:string)=>href==="/trainer"?pathname===href:pathname===href||pathname.startsWith(href+"/");

  return (
    <main className="trainer-workspace">
      <aside className="trainer-sidebar apex-scroll">
        <Link href="/" className="trainer-brand"><span>T</span>APEX TRAINER</Link>
        <div className="trainer-groups">
          {groups.map(([group,items])=>(
            <section key={group}>
              <div className="trainer-group-label">{group}</div>
              <nav>
                {items.map(([label,href])=>{
                  const isActive=active(href);
                  return <Link key={href} href={href} className={isActive?"trainer-link active":"trainer-link"}>{label}</Link>;
                })}
              </nav>
            </section>
          ))}
        </div>
      </aside>

      <div className="trainer-main">
        <header className="trainer-topbar">
          <div><strong>APEX Coach Workspace</strong><div className="muted">Clients, programming and progress.</div></div>
          <div className="trainer-avatar">TR</div>
        </header>

        <section className="trainer-content">
          <div className="trainer-heading">
            <div className="eyebrow">Coach workspace</div>
            <span className="workspace-pill">Interface preview</span>
            <h1>{title}</h1>
            {subtitle ? <p className="muted">{subtitle}</p> : null}
          </div>
          {children}
        </section>
      </div>

      <style>{`
        .trainer-workspace{min-height:100svh;background:#090909}
        .trainer-sidebar{position:fixed;inset:0 auto 0 0;width:260px;padding:20px;border-right:1px solid var(--line);background:radial-gradient(circle at 15% 8%,rgba(223,255,0,.065),transparent 22%),#0b0b0b;z-index:40;overflow-y:auto}
        .trainer-brand{display:flex;gap:10px;align-items:center;font-weight:1000;font-size:18px}
        .trainer-brand span{width:38px;height:38px;border-radius:12px;display:grid;place-items:center;background:var(--accent);color:#080808}
        .trainer-groups{margin-top:26px;display:grid;gap:20px;padding-bottom:26px}
        .trainer-group-label{color:var(--muted);font-size:9px;font-weight:1000;letter-spacing:.16em;margin:0 10px 8px;text-transform:uppercase}
        .trainer-groups nav{display:grid;gap:6px}
        .trainer-link{min-height:42px;display:flex;align-items:center;padding:0 12px;border-radius:12px;border:1px solid transparent;color:#f4f4f4;font-size:12px;font-weight:800}
        .trainer-link.active{border-color:rgba(223,255,0,.42);background:rgba(223,255,0,.09);color:var(--accent);font-weight:1000}
        .trainer-main{margin-left:260px;min-width:0}
        .trainer-topbar{min-height:76px;display:flex;align-items:center;justify-content:space-between;padding:12px clamp(18px,4vw,46px);border-bottom:1px solid var(--line);position:sticky;top:0;z-index:20;background:rgba(9,9,9,.9);backdrop-filter:blur(16px)}
        .trainer-topbar .muted{font-size:12px;margin-top:4px}
        .trainer-avatar{width:42px;height:42px;border-radius:13px;display:grid;place-items:center;background:var(--accent);color:#080808;font-weight:1000}
        .trainer-content{padding:34px clamp(18px,4vw,46px) 64px;min-width:0}
        .trainer-heading{margin-bottom:30px}
        .trainer-heading h1{font-size:clamp(40px,5vw,68px);margin:12px 0 8px;letter-spacing:-.055em}
        .trainer-heading p{max-width:820px;margin:0;line-height:1.7}
        .workspace-pill{display:inline-flex;margin-left:10px;min-height:27px;align-items:center;padding:0 9px;border-radius:999px;border:1px solid var(--line);color:var(--muted);font-size:9px;font-weight:1000;letter-spacing:.09em;text-transform:uppercase}
        @media(max-width:1040px){
          .trainer-main{margin-left:0!important;padding-bottom:78px}
          .trainer-sidebar{inset:auto 0 0 0!important;width:auto!important;height:70px;display:flex;align-items:center;overflow-x:auto;overflow-y:hidden;padding:10px 12px!important;border-right:none!important;border-top:1px solid var(--line)}
          .trainer-brand{display:none!important}
          .trainer-groups{display:flex!important;margin:0!important;padding:0!important;gap:8px!important}
          .trainer-groups section{display:contents!important}
          .trainer-group-label{display:none!important}
          .trainer-groups nav{display:flex!important;gap:8px!important}
          .trainer-link{white-space:nowrap;padding:0 13px!important}
        }
      `}</style>
    </main>
  );
}

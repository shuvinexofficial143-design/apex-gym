"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const groups: Array<[string, Array<[string, string]>]> = [
  ["Core",[["Overview","/admin"],["Members","/admin/members"],["Trainers","/admin/trainers"],["Staff","/admin/staff"]]],
  ["Operations",[["Memberships","/admin/memberships"],["Payments","/admin/payments"],["Attendance","/admin/attendance"],["Classes","/admin/classes"],["Bookings","/admin/bookings"]]],
  ["Growth",[["Leads / CRM","/admin/leads"],["Revenue","/admin/revenue"],["Expenses","/admin/expenses"],["Analytics","/admin/analytics"]]],
  ["System",[["Roles","/admin/roles"],["Notifications","/admin/notifications"],["Content","/admin/content"]]]
];

export function AdminShell({title,subtitle,children}:{title:string;subtitle?:string;children:ReactNode}){
  const pathname=usePathname();
  const active=(href:string)=>href==="/admin"?pathname===href:pathname===href||pathname.startsWith(href+"/");

  return (
    <main className="admin-workspace">
      <aside className="admin-sidebar apex-scroll">
        <Link href="/" className="admin-brand"><span>A</span>APEX ADMIN</Link>
        <div className="admin-groups">
          {groups.map(([group,items])=>(
            <section key={group}>
              <div className="admin-group-label">{group}</div>
              <nav>
                {items.map(([label,href])=>{
                  const isActive=active(href);
                  return <Link key={href} href={href} className={isActive?"admin-link active":"admin-link"}>{label}</Link>;
                })}
              </nav>
            </section>
          ))}
        </div>
      </aside>

      <div className="admin-main">
        <header className="admin-topbar">
          <div><strong>APEX Operations</strong><div className="muted">Members, finance, growth and club health.</div></div>
          <div className="admin-avatar">AD</div>
        </header>
        <section className="admin-content">
          <div className="admin-heading">
            <div className="eyebrow">Operations workspace</div>
            <span className="workspace-pill">Interface preview</span>
            <h1>{title}</h1>
            {subtitle ? <p className="muted">{subtitle}</p> : null}
          </div>
          {children}
        </section>
      </div>

      <style>{`
        .admin-workspace{min-height:100svh;background:#090909}
        .admin-sidebar{position:fixed;inset:0 auto 0 0;width:270px;padding:20px;border-right:1px solid var(--line);background:radial-gradient(circle at 15% 8%,rgba(223,255,0,.065),transparent 22%),#0b0b0b;z-index:40;overflow-y:auto}
        .admin-brand{display:flex;gap:10px;align-items:center;font-weight:1000;font-size:18px}
        .admin-brand span{width:38px;height:38px;border-radius:12px;display:grid;place-items:center;background:var(--accent);color:#080808}
        .admin-groups{margin-top:26px;display:grid;gap:20px;padding-bottom:26px}
        .admin-group-label{color:var(--muted);font-size:9px;font-weight:1000;letter-spacing:.16em;margin:0 10px 8px;text-transform:uppercase}
        .admin-groups nav{display:grid;gap:6px}
        .admin-link{min-height:42px;display:flex;align-items:center;padding:0 12px;border-radius:12px;border:1px solid transparent;color:#f4f4f4;font-size:12px;font-weight:800}
        .admin-link.active{border-color:rgba(223,255,0,.42);background:rgba(223,255,0,.09);color:var(--accent);font-weight:1000}
        .admin-main{margin-left:270px;min-width:0}
        .admin-topbar{min-height:76px;display:flex;align-items:center;justify-content:space-between;padding:12px clamp(18px,4vw,46px);border-bottom:1px solid var(--line);position:sticky;top:0;z-index:20;background:rgba(9,9,9,.9);backdrop-filter:blur(16px)}
        .admin-topbar .muted{font-size:12px;margin-top:4px}
        .admin-avatar{width:42px;height:42px;border-radius:13px;display:grid;place-items:center;background:var(--accent);color:#080808;font-weight:1000}
        .admin-content{padding:34px clamp(18px,4vw,46px) 64px;min-width:0}
        .admin-heading{margin-bottom:30px}
        .admin-heading h1{font-size:clamp(40px,5vw,68px);margin:12px 0 8px;letter-spacing:-.055em}
        .admin-heading p{max-width:820px;margin:0;line-height:1.7}
        .workspace-pill{display:inline-flex;margin-left:10px;min-height:27px;align-items:center;padding:0 9px;border-radius:999px;border:1px solid var(--line);color:var(--muted);font-size:9px;font-weight:1000;letter-spacing:.09em;text-transform:uppercase}
        @media(max-width:1040px){
          .admin-main{margin-left:0!important;padding-bottom:78px}
          .admin-sidebar{inset:auto 0 0 0!important;width:auto!important;height:70px;display:flex;align-items:center;overflow-x:auto;overflow-y:hidden;padding:10px 12px!important;border-right:none!important;border-top:1px solid var(--line)}
          .admin-brand{display:none!important}
          .admin-groups{display:flex!important;margin:0!important;padding:0!important;gap:8px!important}
          .admin-groups section{display:contents!important}
          .admin-group-label{display:none!important}
          .admin-groups nav{display:flex!important;gap:8px!important}
          .admin-link{white-space:nowrap;padding:0 13px!important}
        }
      `}</style>
    </main>
  );
}

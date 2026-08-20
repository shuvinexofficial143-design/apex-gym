"use client";

import { useState } from "react";
import { AdminShell } from "@/components/admin/AdminShell";

export default function Page() {
  const [saved,setSaved]=useState(false);

  return <AdminShell title="Website Content" subtitle="Edit key public-facing gym content from the admin panel.">
    <div className="content-grid" style={{display:"grid",gridTemplateColumns:".8fr 1.2fr",gap:18}}>
      <div className="glass-card" style={{padding:24}}>
        <div className="eyebrow">Sections</div>
        <div style={{display:"grid",gap:9,marginTop:18}}>
          {["Homepage Hero","Membership Offer","About Section","Contact Details","Announcements"].map(x=><button key={x} type="button" style={{minHeight:44,borderRadius:12,border:"1px solid var(--line)",background:"#101010",color:"#fff",textAlign:"left",padding:"0 14px",fontWeight:800}}>{x}</button>)}
        </div>
      </div>
      <div className="glass-card" style={{padding:24,display:"grid",gap:14}}>
        <label style={label}><span>Headline</span><input defaultValue="Train Beyond Limits" style={field}/></label>
        <label style={label}><span>Supporting text</span><textarea defaultValue="Premium coaching, measurable progress and a stronger member experience." style={{...field,minHeight:140,padding:14}}/></label>
        <label style={label}><span>CTA label</span><input defaultValue="Start Free Trial" style={field}/></label>
        <button type="button" onClick={()=>setSaved(true)} style={button}>Save Content</button>
        {saved&&<div className="accent" style={{fontWeight:900}}>Content saved in demo mode.</div>}
      </div>
    </div>
    <style>{`@media(max-width:760px){.content-grid{grid-template-columns:1fr!important}}`}</style>
  </AdminShell>
}
const label={display:"grid",gap:8,fontSize:13,fontWeight:800};
const field={minHeight:48,borderRadius:13,border:"1px solid var(--line)",background:"#0e0e0e",color:"#fff",padding:"0 14px",outline:"none"};
const button={minHeight:48,border:"none",borderRadius:13,background:"var(--accent)",color:"#080808",fontWeight:1000,cursor:"pointer"};

"use client";

import { useState } from "react";
import { AdminShell } from "@/components/admin/AdminShell";

export default function Page() {
  const [saved,setSaved]=useState(false);

  return (
    <AdminShell title="Website Content" subtitle="Review key public-facing content from the operations workspace.">
      <div className="content-grid">
        <div className="glass-card content-sections">
          <div className="eyebrow">Sections</div>
          <div>
            {["Homepage Hero","Membership Offer","About Section","Contact Details","Announcements"].map(item=>(
              <button key={item} type="button">{item}</button>
            ))}
          </div>
        </div>

        <div className="glass-card content-editor">
          <label style={label}><span>Headline</span><input defaultValue="Train hard. Look stronger." style={field}/></label>
          <label style={label}><span>Supporting text</span><textarea defaultValue="Coach-led training, structured programs and a modern member experience." style={{...field,minHeight:140,padding:14}}/></label>
          <label style={label}><span>CTA label</span><input defaultValue="Start Free Trial" style={field}/></label>
          <button type="button" onClick={()=>setSaved(true)} style={button}>Update Draft</button>
          {saved ? <div className="accent" style={{fontWeight:900}}>Content draft updated in the workspace.</div> : null}
        </div>
      </div>

      <style>{`
        .content-grid{display:grid;grid-template-columns:.8fr 1.2fr;gap:18px}
        .content-sections,.content-editor{padding:24px}.content-sections>div:last-child{display:grid;gap:9px;margin-top:18px}
        .content-sections button{min-height:44px;border-radius:12px;border:1px solid var(--line);background:#101010;color:#fff;text-align:left;padding:0 14px;font-weight:800}
        .content-editor{display:grid;gap:14px}
        @media(max-width:760px){.content-grid{grid-template-columns:1fr}}
      `}</style>
    </AdminShell>
  );
}

const label={display:"grid",gap:8,fontSize:13,fontWeight:800};
const field={minHeight:48,borderRadius:13,border:"1px solid var(--line)",background:"#0e0e0e",color:"#fff",padding:"0 14px",outline:"none"};
const button={minHeight:48,border:"none",borderRadius:13,background:"var(--accent)",color:"#080808",fontWeight:1000,cursor:"pointer"};

import { MemberShell } from "@/components/member/MemberShell";
import { membershipStatus } from "@/lib/member-data";
export default function Page(){return <MemberShell title="Membership" subtitle="Plan status, renewal timeline and benefits.">
  <div className="plan-grid" style={{display:"grid",gridTemplateColumns:"1.1fr .9fr",gap:18}}>
    <div className="glass-card" style={{padding:30,borderColor:"rgba(223,255,0,.3)"}}><div className="accent" style={{fontWeight:1000}}>ACTIVE MEMBERSHIP</div><h2 style={{fontSize:44,margin:"12px 0 6px"}}>{membershipStatus.plan}</h2><div className="muted">{membershipStatus.validity}</div><div style={{marginTop:28,display:"grid",gap:12}}>{membershipStatus.features.map(x=><div key={x}>✓ {x}</div>)}</div></div>
    <div className="glass-card" style={{padding:30}}><div className="muted">RENEWAL</div><div style={{fontSize:54,fontWeight:1000,marginTop:14}}>{membershipStatus.daysLeft}</div><div className="muted">days remaining</div><div className="divider" style={{margin:"24px 0"}}/><strong>Auto-renewal</strong><div className="muted">{membershipStatus.autoRenew}</div></div>
  </div><style>{`@media(max-width:760px){.plan-grid{grid-template-columns:1fr!important}}`}</style>
</MemberShell>}

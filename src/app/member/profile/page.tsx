import { MemberShell } from "@/components/member/MemberShell";
import { memberProfile } from "@/lib/member-data";
export default function Page(){return <MemberShell title="Profile" subtitle="Your personal details and member identity.">
  <div className="glass-card" style={{padding:28}}>
    <div style={{display:"flex",alignItems:"center",gap:18,flexWrap:"wrap"}}><div style={{width:84,height:84,borderRadius:24,display:"grid",placeItems:"center",background:"var(--accent)",color:"#080808",fontSize:28,fontWeight:1000}}>VP</div><div><h2 style={{margin:0,fontSize:32}}>{memberProfile.name}</h2><div className="muted">{memberProfile.memberId}</div></div></div>
    <div className="profile-grid" style={{marginTop:30,display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:14}}>{memberProfile.details.map(x=><div key={x.label} style={{padding:18,borderRadius:16,background:"#101010",border:"1px solid var(--line)"}}><div className="muted" style={{fontSize:12}}>{x.label}</div><strong style={{display:"block",marginTop:7}}>{x.value}</strong></div>)}</div>
  </div><style>{`@media(max-width:650px){.profile-grid{grid-template-columns:1fr!important}}`}</style>
</MemberShell>}

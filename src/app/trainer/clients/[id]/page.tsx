import { notFound } from "next/navigation";
import { TrainerShell } from "@/components/trainer/TrainerShell";
import { trainerClients } from "@/lib/trainer-data";

export default async function Page({params}:{params:Promise<{id:string}>}) {
  const {id}=await params;
  const c=trainerClients.find(x=>x.id===id);
  if(!c) notFound();
  return <TrainerShell title={c.name} subtitle={`${c.goal} · ${c.plan}`}>
    <div className="client-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:18}}>
      <div className="glass-card" style={{padding:26}}>
        <div className="eyebrow">Client summary</div>
        <div style={{display:"grid",gap:12,marginTop:18}}>
          <span>Member ID <strong style={{float:"right"}}>{c.id}</strong></span>
          <span>Goal <strong style={{float:"right"}}>{c.goal}</strong></span>
          <span>Plan <strong style={{float:"right"}}>{c.plan}</strong></span>
          <span>Progress <strong className="accent" style={{float:"right"}}>{c.progress}</strong></span>
        </div>
      </div>
      <div className="glass-card" style={{padding:26}}><div className="eyebrow">Next action</div><h2 style={{fontSize:28,margin:"12px 0"}}>Coach review</h2><p className="muted">Review attendance, adherence and training progression before adjusting next week.</p></div>
    </div>
    <style>{`@media(max-width:760px){.client-grid{grid-template-columns:1fr!important}}`}</style>
  </TrainerShell>
}

import { clientProgress } from "@/lib/trainer-data";
export function ClientProgressGrid(){
  return <div className="grid-3">{clientProgress.map(x=><article key={x.name} className="glass-card" style={{padding:22}}>
    <h3 style={{fontSize:24,margin:"0 0 10px"}}>{x.name}</h3>
    <div className="muted" style={{fontSize:13}}>{x.goal}</div>
    <div style={{height:10,borderRadius:999,background:"#1b1b1b",overflow:"hidden",marginTop:18}}><div style={{width:`${x.progress}%`,height:"100%",background:"var(--accent)"}}/></div>
    <div style={{display:"flex",justifyContent:"space-between",marginTop:10}}><span className="muted">Progress</span><strong className="accent">{x.progress}%</strong></div>
  </article>)}</div>
}

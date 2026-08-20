import { trainerSchedule } from "@/lib/trainer-data";
export function ScheduleBoard(){
  return <div style={{display:"grid",gap:12}}>
    {trainerSchedule.map(day=><article key={day.day} className="glass-card" style={{padding:22}}>
      <div style={{display:"flex",justifyContent:"space-between",gap:14,flexWrap:"wrap"}}><h3 style={{margin:0,fontSize:24}}>{day.day}</h3><span className="muted">{day.total} sessions</span></div>
      <div style={{display:"flex",gap:8,flexWrap:"wrap",marginTop:16}}>{day.items.map(item=><span key={item} style={{padding:"9px 11px",borderRadius:999,border:"1px solid var(--line)",fontSize:12}}>{item}</span>)}</div>
    </article>)}
  </div>
}

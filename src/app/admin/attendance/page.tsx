import { AdminShell } from "@/components/admin/AdminShell";
import { AdminMetricCard } from "@/components/admin/AdminMetricCard";
import { attendanceAdmin } from "@/lib/admin-data";

export default function Page() {
  return <AdminShell title="Attendance" subtitle="Daily gym traffic, check-ins and peak-hour insights.">
    <div className="grid-3">
      {attendanceAdmin.metrics.map(x=><AdminMetricCard key={x.label}{...x}/>)}
    </div>
    <div className="glass-card" style={{padding:24,marginTop:18}}>
      <h2 style={{marginTop:0}}>Hourly occupancy</h2>
      <div style={{display:"grid",gap:12}}>
        {attendanceAdmin.hours.map(x=><div key={x.time} style={{display:"grid",gridTemplateColumns:"90px 1fr 70px",gap:14,alignItems:"center"}}>
          <strong>{x.time}</strong>
          <div style={{height:12,borderRadius:999,background:"#1b1b1b",overflow:"hidden"}}><div style={{width:`${x.percent}%`,height:"100%",background:"var(--accent)"}}/></div>
          <span className="muted">{x.count} people</span>
        </div>)}
      </div>
    </div>
  </AdminShell>
}

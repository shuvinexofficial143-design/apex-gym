import { occupancy } from "@/lib/advanced-data";

export function OccupancyGauge(){
  const percent=Math.round(occupancy.current/occupancy.capacity*100);

  return (
    <div className="occupancy-grid">
      <div className="glass-card occupancy-gauge-card">
        <div className="occupancy-ring" style={{background:`conic-gradient(var(--accent) ${percent}%,#1a1a1a ${percent}% 100%)`}}>
          <div>
            <strong>{percent}%</strong>
            <span className="muted">LOAD INDEX</span>
          </div>
        </div>
      </div>

      <div className="glass-card occupancy-detail">
        <div className="eyebrow">Estimated gym load</div>
        <h2>{percent}% capacity indicator</h2>
        <p className="muted">Suggested lower-traffic window: <strong className="accent">{occupancy.bestTime}</strong></p>
        {occupancy.hours.map(item=>(
          <div key={item.time} className="occupancy-row">
            <strong>{item.time}</strong>
            <div><span style={{width:`${item.level}%`}} /></div>
            <span className="muted">{item.level}%</span>
          </div>
        ))}
      </div>

      <style>{`
        .occupancy-grid{display:grid;grid-template-columns:.78fr 1.22fr;gap:18px}
        .occupancy-gauge-card{padding:28px;display:grid;place-items:center}
        .occupancy-ring{width:220px;height:220px;border-radius:50%;display:grid;place-items:center}
        .occupancy-ring>div{width:168px;height:168px;border-radius:50%;display:grid;place-items:center;background:#0c0c0c;text-align:center}
        .occupancy-ring strong{display:block;font-size:52px}.occupancy-ring span{display:block;font-size:11px}
        .occupancy-detail{padding:28px}.occupancy-detail h2{font-size:34px;margin:14px 0 8px}
        .occupancy-row{display:grid;grid-template-columns:70px 1fr 60px;gap:12px;align-items:center;margin-top:14px}
        .occupancy-row>div{height:10px;border-radius:999px;background:#1a1a1a;overflow:hidden}.occupancy-row>div span{display:block;height:100%;background:var(--accent)}
        @media(max-width:760px){.occupancy-grid{grid-template-columns:1fr}}
      `}</style>
    </div>
  );
}

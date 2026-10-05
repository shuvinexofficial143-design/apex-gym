import { revenueByMonth } from "@/lib/admin-data";

export function RevenueBars(){
  const max=Math.max(...revenueByMonth.map(item=>item.value));

  return (
    <div className="glass-card revenue-card">
      <div className="revenue-head">
        <div>
          <div className="eyebrow">Revenue trend</div>
          <h2>Six-cycle view</h2>
        </div>
        <div className="accent revenue-label">TREND OVERVIEW</div>
      </div>

      <div className="revenue-bars">
        {revenueByMonth.map(item=>(
          <div key={item.month} className="revenue-column">
            <div className="revenue-track">
              <div style={{height:`${Math.max(12,(item.value/max)*100)}%`}} />
            </div>
            <div className="muted">{item.month}</div>
          </div>
        ))}
      </div>

      <style>{`
        .revenue-card{padding:28px}.revenue-head{display:flex;justify-content:space-between;gap:16px;align-items:end}.revenue-head h2{margin:12px 0 0;font-size:32px}.revenue-label{font-weight:1000;font-size:11px}
        .revenue-bars{display:grid;grid-template-columns:repeat(6,1fr);gap:13px;align-items:end;height:245px;margin-top:34px}
        .revenue-column{display:grid;gap:9px;align-items:end;height:100%}.revenue-track{display:flex;align-items:end;height:100%}.revenue-track>div{width:100%;border-radius:13px 13px 5px 5px;background:linear-gradient(180deg,var(--accent),#a8c900)}.revenue-column>.muted{text-align:center;font-size:11px}
      `}</style>
    </div>
  );
}

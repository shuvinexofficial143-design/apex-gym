import { leadPipeline } from "@/lib/admin-data";

export function LeadPipeline() {
  return (
    <div className="pipeline-grid" style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 12 }}>
      {leadPipeline.map((stage) => (
        <section key={stage.stage} className="glass-card" style={{ padding: 16 }}>
          <div className="accent" style={{ fontSize: 11, fontWeight: 1000 }}>{stage.stage}</div>
          <div style={{ fontSize: 30, fontWeight: 1000, margin: "8px 0 16px" }}>{stage.count}</div>
          <div style={{ display: "grid", gap: 9 }}>
            {stage.items.map((item) => (
              <div key={item} style={{ padding: 11, borderRadius: 12, border: "1px solid var(--line)", background: "#101010", fontSize: 12 }}>
                {item}
              </div>
            ))}
          </div>
        </section>
      ))}

      <style>{`
        @media(max-width:1100px){.pipeline-grid{grid-template-columns:repeat(2,1fr)!important}}
        @media(max-width:620px){.pipeline-grid{grid-template-columns:1fr!important}}
      `}</style>
    </div>
  );
}

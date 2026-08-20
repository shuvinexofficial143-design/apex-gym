import { gymStats } from "@/lib/constants";

export function Stats() {
  return (
    <section className="section-tight" style={{ borderBottom: "1px solid var(--line)" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 14,
          }}
          className="stats-grid"
        >
          {gymStats.map((item) => (
            <div
              key={item.label}
              style={{
                padding: "26px 8px",
                borderRight: "1px solid var(--line)",
              }}
            >
              <div style={{ fontSize: "clamp(34px, 5vw, 58px)", fontWeight: 1000, letterSpacing: "-.06em" }}>
                {item.value}
              </div>
              <div className="muted" style={{ marginTop: 7, fontSize: 13, textTransform: "uppercase", letterSpacing: ".12em" }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}

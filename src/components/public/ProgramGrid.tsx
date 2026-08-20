import { programDetails } from "@/lib/public-data";

export function ProgramGrid() {
  return (
    <div style={{ display: "grid", gap: 18, marginTop: 42 }}>
      {programDetails.map((program, index) => (
        <article
          key={program.name}
          className="glass-card card-hover"
          style={{
            padding: "clamp(24px, 5vw, 44px)",
            display: "grid",
            gridTemplateColumns: "120px 1fr auto",
            alignItems: "center",
            gap: 24,
          }}
        >
          <div className="accent" style={{ fontSize: 48, fontWeight: 1000, letterSpacing: "-.06em" }}>
            0{index + 1}
          </div>
          <div>
            <h3 style={{ margin: 0, fontSize: 34, letterSpacing: "-.045em" }}>{program.name}</h3>
            <p className="muted" style={{ maxWidth: 660, lineHeight: 1.7 }}>{program.copy}</p>
          </div>
          <div
            style={{
              padding: "11px 14px",
              borderRadius: 999,
              border: "1px solid var(--line)",
              whiteSpace: "nowrap",
              fontSize: 12,
              fontWeight: 800,
            }}
          >
            {program.level}
          </div>
        </article>
      ))}

      <style>{`
        @media (max-width: 760px) {
          article { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

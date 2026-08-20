import { trainersDetailed } from "@/lib/public-data";

export function TrainerGrid() {
  return (
    <div className="grid-3" style={{ marginTop: 42 }}>
      {trainersDetailed.map((trainer) => (
        <article key={trainer.name} className="glass-card card-hover" style={{ overflow: "hidden" }}>
          <div
            style={{
              minHeight: 260,
              display: "grid",
              placeItems: "center",
              background:
                "radial-gradient(circle at 50% 30%, rgba(223,255,0,.22), transparent 28%), linear-gradient(150deg,#1b1b1b,#090909)",
            }}
          >
            <span style={{ fontSize: 100, fontWeight: 1000, opacity: 0.14, letterSpacing: "-.08em" }}>
              {trainer.initials}
            </span>
          </div>
          <div style={{ padding: 24 }}>
            <div className="accent" style={{ fontSize: 12, fontWeight: 900, textTransform: "uppercase" }}>
              {trainer.speciality}
            </div>
            <h3 style={{ fontSize: 25, margin: "8px 0" }}>{trainer.name}</h3>
            <p className="muted" style={{ lineHeight: 1.65 }}>{trainer.bio}</p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", fontSize: 12 }}>
              <span>{trainer.experience}</span>
              <span className="muted">•</span>
              <span>{trainer.certification}</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

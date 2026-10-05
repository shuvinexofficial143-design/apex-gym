import { FitnessPhoto } from "@/components/home/FitnessPhoto";
import { trainersDetailed } from "@/lib/public-data";

export function TrainerGrid() {
  return (
    <div className="grid-3" style={{ marginTop: 42 }}>
      {trainersDetailed.map((trainer) => (
        <article key={trainer.name} className="glass-card card-hover trainer-grid-card">
          <div className="trainer-grid-visual">
            <FitnessPhoto src={trainer.src} alt={`${trainer.name} — ${trainer.speciality}`} className="trainer-grid-photo" />
            <div className="trainer-grid-overlay" />
            <div className="trainer-grid-badge">{trainer.speciality}</div>
          </div>
          <div style={{ padding: 24 }}>
            <h3 style={{ fontSize: 25, margin: "0 0 8px" }}>{trainer.name}</h3>
            <p className="muted" style={{ lineHeight: 1.65 }}>{trainer.bio}</p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", fontSize: 12 }}>
              <span>{trainer.experience}</span>
              <span className="muted">•</span>
              <span>{trainer.certification}</span>
            </div>
          </div>

          <style>{`
            .trainer-grid-card{overflow:hidden}
            .trainer-grid-visual{position:relative;min-height:310px;overflow:hidden}
            .trainer-grid-photo{position:absolute!important;inset:0}
            .trainer-grid-overlay{position:absolute;inset:0;background:linear-gradient(180deg,transparent 45%,rgba(0,0,0,.82))}
            .trainer-grid-badge{
              position:absolute;
              left:18px;
              bottom:18px;
              z-index:2;
              padding:9px 12px;
              border-radius:999px;
              background:rgba(8,8,8,.72);
              border:1px solid rgba(255,255,255,.12);
              color:var(--accent);
              font-size:11px;
              font-weight:1000;
              backdrop-filter:blur(12px);
            }
          `}</style>
        </article>
      ))}
    </div>
  );
}

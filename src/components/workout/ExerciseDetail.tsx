import type { Exercise } from "@/lib/exercise-data";

export function ExerciseDetail({ exercise }: { exercise: Exercise }) {
  return (
    <div style={{ display: "grid", gap: 18 }}>
      <div className="exercise-detail-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
        <div
          className="glass-card"
          style={{
            minHeight: 420,
            display: "grid",
            placeItems: "center",
            background:
              "radial-gradient(circle at 55% 30%, rgba(223,255,0,.22), transparent 26%), linear-gradient(145deg,#1b1b1b,#090909)",
          }}
        >
          <div style={{ fontSize: 110, fontWeight: 1000, letterSpacing: "-.08em", opacity: .14 }}>{exercise.short}</div>
        </div>

        <div className="glass-card" style={{ padding: 30 }}>
          <div className="accent" style={{ fontSize: 12, fontWeight: 1000, textTransform: "uppercase" }}>{exercise.muscle}</div>
          <h2 style={{ fontSize: 42, margin: "10px 0 14px", letterSpacing: "-.05em" }}>{exercise.name}</h2>
          <p className="muted" style={{ lineHeight: 1.75 }}>{exercise.description}</p>
          <div style={{ display: "grid", gap: 12, marginTop: 24 }}>
            {[
              ["Equipment", exercise.equipment],
              ["Level", exercise.level],
              ["Primary muscle", exercise.muscle],
              ["Recommended", exercise.recommended],
            ].map(([label, value]) => (
              <div key={label} style={{ display: "flex", justifyContent: "space-between", gap: 18, padding: "12px 0", borderBottom: "1px solid var(--line)" }}>
                <span className="muted">{label}</span><strong>{value}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="exercise-detail-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
        <div className="glass-card" style={{ padding: 26 }}>
          <h3 style={{ marginTop: 0, fontSize: 26 }}>How to perform</h3>
          <ol className="muted" style={{ lineHeight: 1.9, paddingLeft: 20 }}>
            {exercise.steps.map((step) => <li key={step}>{step}</li>)}
          </ol>
        </div>
        <div className="glass-card" style={{ padding: 26 }}>
          <h3 style={{ marginTop: 0, fontSize: 26 }}>Coach cues</h3>
          <ul className="muted" style={{ lineHeight: 1.9, paddingLeft: 20 }}>
            {exercise.cues.map((cue) => <li key={cue}>{cue}</li>)}
          </ul>
        </div>
      </div>

      <style>{`@media(max-width:780px){.exercise-detail-grid{grid-template-columns:1fr!important}}`}</style>
    </div>
  );
}

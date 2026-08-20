import { workoutHistory } from "@/lib/workout-data";

export function WorkoutHistoryList() {
  return (
    <div style={{ display: "grid", gap: 12 }}>
      {workoutHistory.map((item) => (
        <article key={`${item.date}-${item.title}`} className="glass-card" style={{ padding: 22 }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 18, flexWrap: "wrap" }}>
            <div>
              <div className="accent" style={{ fontSize: 11, fontWeight: 1000 }}>{item.date}</div>
              <h3 style={{ margin: "7px 0", fontSize: 25 }}>{item.title}</h3>
              <div className="muted" style={{ fontSize: 13 }}>{item.exercises} exercises · {item.sets} sets</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <strong>{item.duration}</strong>
              <div className="muted" style={{ fontSize: 12, marginTop: 5 }}>{item.volume} kg volume</div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

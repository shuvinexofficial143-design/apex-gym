import { trainerSessions } from "@/lib/trainer-data";

export function SessionTable() {
  return (
    <div className="glass-card responsive-table apex-scroll">
      <div style={{ minWidth: 760 }}>
        {trainerSessions.map((session, index) => (
          <div
            key={session.id}
            style={{
              display: "grid",
              gridTemplateColumns: ".8fr 1.1fr 1fr .8fr .8fr",
              gap: 14,
              padding: 20,
              borderBottom: index === trainerSessions.length - 1 ? "none" : "1px solid var(--line)",
            }}
          >
            <strong>{session.time}</strong>
            <span>{session.client}</span>
            <span className="muted">{session.focus}</span>
            <span>{session.duration}</span>
            <span className="accent">{session.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

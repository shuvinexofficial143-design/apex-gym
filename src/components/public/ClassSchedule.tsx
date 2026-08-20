import { classSchedule } from "@/lib/public-data";

export function ClassSchedule() {
  return (
    <div className="glass-card" style={{ overflow: "hidden", marginTop: 42 }}>
      {classSchedule.map((item, index) => (
        <div
          key={`${item.day}-${item.name}`}
          style={{
            display: "grid",
            gridTemplateColumns: ".7fr 1.2fr .9fr .9fr",
            gap: 18,
            alignItems: "center",
            padding: 22,
            borderBottom: index === classSchedule.length - 1 ? "none" : "1px solid var(--line)",
          }}
        >
          <strong>{item.day}</strong>
          <div>
            <div style={{ fontWeight: 900 }}>{item.name}</div>
            <div className="muted" style={{ fontSize: 12, marginTop: 4 }}>{item.focus}</div>
          </div>
          <span>{item.time}</span>
          <span className="accent">{item.coach}</span>
        </div>
      ))}

      <style>{`
        @media (max-width: 700px) {
          .glass-card > div { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </div>
  );
}

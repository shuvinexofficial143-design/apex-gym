import { bookingHistory } from "@/lib/trainer-data";

export function BookingHistory() {
  return (
    <div className="responsive-table apex-scroll">
      <div style={{ minWidth: 720, display: "grid", gap: 12 }}>
        {bookingHistory.map((item) => (
          <article
            key={item.id}
            className="glass-card"
            style={{
              padding: 20,
              display: "grid",
              gridTemplateColumns: "1.2fr .9fr .8fr .7fr",
              gap: 14,
              alignItems: "center",
            }}
          >
            <div><strong>{item.name}</strong><div className="muted" style={{ fontSize: 12, marginTop: 4 }}>{item.coach}</div></div>
            <span>{item.date}</span>
            <span>{item.time}</span>
            <span className={item.status === "Completed" ? "accent" : "muted"}>{item.status}</span>
          </article>
        ))}
      </div>
    </div>
  );
}

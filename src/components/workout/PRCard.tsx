export function PRCard({ lift, value, change, date }: { lift: string; value: string; change: string; date: string }) {
  return (
    <article className="glass-card card-hover" style={{ padding: 24 }}>
      <div className="accent" style={{ fontSize: 12, fontWeight: 1000 }}>PERSONAL RECORD</div>
      <h3 style={{ fontSize: 25, margin: "10px 0 20px" }}>{lift}</h3>
      <div style={{ fontSize: 48, fontWeight: 1000, letterSpacing: "-.06em" }}>{value}</div>
      <div className="accent" style={{ marginTop: 8, fontWeight: 900 }}>{change}</div>
      <div className="muted" style={{ marginTop: 20, fontSize: 12 }}>{date}</div>
    </article>
  );
}

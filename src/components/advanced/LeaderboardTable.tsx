import { leaderboard } from "@/lib/advanced-data";

export function LeaderboardTable() {
  return (
    <div className="glass-card" style={{ overflow: "hidden" }}>
      {leaderboard.map((item, index) => (
        <div
          key={item.id}
          style={{
            display: "grid",
            gridTemplateColumns: "70px 1.2fr 1fr .8fr",
            gap: 16,
            alignItems: "center",
            padding: 20,
            borderBottom: index === leaderboard.length - 1 ? "none" : "1px solid var(--line)",
            background: item.me ? "rgba(223,255,0,.07)" : "transparent",
          }}
        >
          <strong className={index < 3 ? "accent" : ""}>#{index + 1}</strong>
          <div>
            <strong>{item.name}</strong>
            <div className="muted" style={{ fontSize: 12, marginTop: 4 }}>{item.branch}</div>
          </div>
          <span>{item.score.toLocaleString()} pts</span>
          <span className="muted">{item.streak} day streak</span>
        </div>
      ))}
    </div>
  );
}

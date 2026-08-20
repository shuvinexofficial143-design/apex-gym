"use client";

import { useState } from "react";

export function ChallengeCard({
  title,
  copy,
  progress,
  reward,
  daysLeft,
}: {
  title: string;
  copy: string;
  progress: number;
  reward: string;
  daysLeft: number;
}) {
  const [joined, setJoined] = useState(false);

  return (
    <article className="glass-card card-hover" style={{ padding: 22 }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 14 }}>
        <div className="accent" style={{ fontSize: 11, fontWeight: 1000 }}>{daysLeft} DAYS LEFT</div>
        <div className="muted" style={{ fontSize: 11 }}>{reward}</div>
      </div>
      <h3 style={{ fontSize: 25, margin: "10px 0" }}>{title}</h3>
      <p className="muted" style={{ lineHeight: 1.65 }}>{copy}</p>

      <div style={{ height: 10, borderRadius: 999, background: "#1a1a1a", overflow: "hidden", marginTop: 18 }}>
        <div style={{ width: `${progress}%`, height: "100%", background: "var(--accent)" }} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, marginTop: 8, fontSize: 12 }}>
        <span className="muted">Progress</span>
        <strong>{progress}%</strong>
      </div>

      <button
        type="button"
        onClick={() => setJoined((value) => !value)}
        style={{
          marginTop: 18,
          minHeight: 42,
          padding: "0 15px",
          borderRadius: 12,
          border: joined ? "1px solid var(--accent)" : "1px solid var(--line)",
          background: joined ? "var(--accent)" : "#111",
          color: joined ? "#080808" : "#fff",
          fontWeight: 1000,
          cursor: "pointer",
        }}
      >
        {joined ? "Joined ✓" : "Join Challenge"}
      </button>
    </article>
  );
}

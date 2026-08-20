"use client";

import { useState } from "react";

const recommendations = [
  {
    id: "R1",
    type: "Training",
    title: "Reduce pressing volume today",
    copy: "You logged two high-volume upper-body sessions in the last four days. Keep today’s pressing work controlled and leave 2–3 reps in reserve.",
  },
  {
    id: "R2",
    type: "Nutrition",
    title: "Protein target is behind",
    copy: "Your sample dashboard is at 108g against a 150g target. Add one protein-focused meal or snack instead of pushing most protein to dinner.",
  },
  {
    id: "R3",
    type: "Attendance",
    title: "Train before the evening peak",
    copy: "The occupancy preview shows 6–8 PM as the busiest period. A 4:30–5:30 PM session should be quieter.",
  },
  {
    id: "R4",
    type: "Recovery",
    title: "Use a lower-fatigue session",
    copy: "If sleep or readiness feels poor, keep the habit with mobility, easy cardio and technique work rather than forcing a maximal day.",
  },
];

export function RecommendationsPanel() {
  const [dismissed, setDismissed] = useState<string[]>([]);
  const visible = recommendations.filter((item) => !dismissed.includes(item.id));

  return (
    <div style={{ display: "grid", gap: 14 }}>
      {visible.map((item) => (
        <article key={item.id} className="glass-card" style={{ padding: 24 }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 16 }}>
            <div>
              <div className="accent" style={{ fontSize: 11, fontWeight: 1000 }}>{item.type.toUpperCase()}</div>
              <h2 style={{ fontSize: 26, margin: "9px 0" }}>{item.title}</h2>
            </div>
            <button
              type="button"
              onClick={() => setDismissed((current) => [...current, item.id])}
              style={{ width: 38, height: 38, borderRadius: 12, border: "1px solid var(--line)", background: "#101010", color: "#fff", cursor: "pointer" }}
              aria-label={`Dismiss ${item.title}`}
            >
              ×
            </button>
          </div>
          <p className="muted" style={{ lineHeight: 1.75, marginBottom: 0 }}>{item.copy}</p>
        </article>
      ))}

      {visible.length === 0 ? (
        <div className="glass-card muted" style={{ padding: 24 }}>You cleared all current recommendations.</div>
      ) : null}
    </div>
  );
}

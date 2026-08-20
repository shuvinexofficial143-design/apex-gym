"use client";

import { useState } from "react";
import { rewardsCatalog } from "@/lib/advanced-data";

export function RewardsWallet() {
  const [points, setPoints] = useState(2400);
  const [message, setMessage] = useState("");

  function redeem(cost: number, label: string) {
    if (points < cost) {
      setMessage("Not enough points for this reward.");
      return;
    }
    setPoints((value) => value - cost);
    setMessage(`${label} redeemed in demo mode.`);
  }

  return (
    <div>
      <div className="glass-card" style={{ padding: 28, marginBottom: 18 }}>
        <div className="eyebrow">Rewards wallet</div>
        <div style={{ fontSize: 64, fontWeight: 1000, letterSpacing: "-.06em", marginTop: 12 }}>{points.toLocaleString()}</div>
        <div className="muted">available APEX points</div>
        {message ? <div className="accent" style={{ marginTop: 14, fontWeight: 900 }}>{message}</div> : null}
      </div>

      <div className="grid-3">
        {rewardsCatalog.map((reward) => (
          <article key={reward.id} className="glass-card card-hover" style={{ padding: 22 }}>
            <div className="accent" style={{ fontSize: 11, fontWeight: 1000 }}>{reward.cost} POINTS</div>
            <h3 style={{ fontSize: 24, margin: "9px 0" }}>{reward.name}</h3>
            <p className="muted" style={{ lineHeight: 1.6 }}>{reward.copy}</p>
            <button type="button" onClick={() => redeem(reward.cost, reward.name)} style={button}>Redeem</button>
          </article>
        ))}
      </div>
    </div>
  );
}

const button = {
  minHeight: 42,
  padding: "0 15px",
  borderRadius: 12,
  border: "1px solid var(--line)",
  background: "#111",
  color: "#fff",
  fontWeight: 900,
  cursor: "pointer",
};

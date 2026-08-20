"use client";

import { useState } from "react";

export function ReferralCard() {
  const [copied, setCopied] = useState(false);
  const code = "APEX-VP20481";

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
    } catch {
      setCopied(true);
    }
  }

  return (
    <div className="glass-card" style={{ padding: 28 }}>
      <div className="eyebrow">Referral program</div>
      <h2 style={{ fontSize: 38, margin: "14px 0 8px" }}>Invite friends. Earn rewards.</h2>
      <p className="muted" style={{ lineHeight: 1.7 }}>
        Share your referral code. Future backend logic can award points after a verified trial or paid membership.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
          padding: 18,
          borderRadius: 16,
          border: "1px solid var(--line)",
          background: "#0f0f0f",
          marginTop: 22,
          flexWrap: "wrap",
        }}
      >
        <strong style={{ fontSize: 24, letterSpacing: ".08em" }}>{code}</strong>
        <button type="button" onClick={copyCode} style={button}>{copied ? "Copied ✓" : "Copy Code"}</button>
      </div>

      <div className="grid-3" style={{ marginTop: 18 }}>
        {[
          ["8", "Successful invites"],
          ["2,400", "Reward points"],
          ["₹600", "Estimated rewards"],
        ].map(([value, label]) => (
          <div key={label} style={{ padding: 18, borderRadius: 15, border: "1px solid var(--line)", background: "#101010" }}>
            <div style={{ fontSize: 30, fontWeight: 1000 }}>{value}</div>
            <div className="muted" style={{ fontSize: 12, marginTop: 6 }}>{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const button = {
  minHeight: 42,
  padding: "0 15px",
  borderRadius: 12,
  border: "none",
  background: "var(--accent)",
  color: "#080808",
  fontWeight: 1000,
  cursor: "pointer",
};

"use client";

import { useState } from "react";

export function ReferralCard() {
  const [copied, setCopied] = useState(false);
  const code = "APEX-MEMBER";

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
        Share a member referral code and keep successful invites connected to your rewards activity.
      </p>

      <div className="ref-code">
        <strong>{code}</strong>
        <button type="button" onClick={copyCode} style={button}>{copied ? "Copied ✓" : "Copy Code"}</button>
      </div>

      <div className="grid-3" style={{ marginTop: 18 }}>
        {[
          ["INVITES", "Referral activity"],
          ["POINTS", "Reward tracking"],
          ["BENEFITS", "Member rewards"],
        ].map(([value, label]) => (
          <div key={label} className="ref-stat">
            <div>{value}</div>
            <span className="muted">{label}</span>
          </div>
        ))}
      </div>

      <style>{`
        .ref-code{display:flex;justify-content:space-between;align-items:center;gap:16px;padding:18px;border-radius:16px;border:1px solid var(--line);background:#0f0f0f;margin-top:22px;flex-wrap:wrap}
        .ref-code strong{font-size:24px;letter-spacing:.08em}
        .ref-stat{padding:18px;border-radius:15px;border:1px solid var(--line);background:#101010}
        .ref-stat>div{font-size:20px;font-weight:1000}.ref-stat span{font-size:12px;display:block;margin-top:6px}
      `}</style>
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

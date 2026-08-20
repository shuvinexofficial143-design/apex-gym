"use client";

import { useState } from "react";
import { renewalOptions } from "@/lib/advanced-data";

export function RenewalPanel() {
  const [selected, setSelected] = useState(renewalOptions[1].id);
  const [renewed, setRenewed] = useState(false);

  const plan = renewalOptions.find((item) => item.id === selected) ?? renewalOptions[0];

  return (
    <div className="renew-grid" style={{ display: "grid", gridTemplateColumns: "1fr .8fr", gap: 18 }}>
      <div className="glass-card" style={{ padding: 26 }}>
        <div className="eyebrow">Renew membership</div>
        <h2 style={{ fontSize: 34, margin: "14px 0 8px" }}>Keep your streak going.</h2>
        <p className="muted">Choose a renewal period. Payment gateway connection will be added in the backend/payment phase.</p>

        <div style={{ display: "grid", gap: 12, marginTop: 22 }}>
          {renewalOptions.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => { setSelected(option.id); setRenewed(false); }}
              style={{
                padding: 18,
                borderRadius: 15,
                border: selected === option.id ? "1px solid var(--accent)" : "1px solid var(--line)",
                background: selected === option.id ? "rgba(223,255,0,.08)" : "#101010",
                color: "#fff",
                display: "flex",
                justifyContent: "space-between",
                gap: 16,
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              <div><strong>{option.label}</strong><div className="muted" style={{ fontSize: 12, marginTop: 4 }}>{option.note}</div></div>
              <strong>₹{option.price.toLocaleString("en-IN")}</strong>
            </button>
          ))}
        </div>
      </div>

      <div className="glass-card" style={{ padding: 26, alignSelf: "start" }}>
        <div className="muted">Selected renewal</div>
        <div style={{ fontSize: 34, fontWeight: 1000, marginTop: 10 }}>{plan.label}</div>
        <div className="accent" style={{ fontSize: 38, fontWeight: 1000, marginTop: 12 }}>₹{plan.price.toLocaleString("en-IN")}</div>
        <button type="button" onClick={() => setRenewed(true)} style={button}>Continue to Payment</button>
        {renewed ? <div className="accent" style={{ marginTop: 14, fontWeight: 900 }}>Renewal checkout prepared in demo mode.</div> : null}
      </div>

      <style>{`@media(max-width:760px){.renew-grid{grid-template-columns:1fr!important}}`}</style>
    </div>
  );
}

const button = { width: "100%", minHeight: 48, marginTop: 22, borderRadius: 13, border: "none", background: "var(--accent)", color: "#080808", fontWeight: 1000, cursor: "pointer" };

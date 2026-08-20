"use client";

import { useMemo, useState } from "react";

export function QRPass() {
  const [active, setActive] = useState(true);

  const cells = useMemo(() => {
    const seed = "APX-20481-2026";
    return Array.from({ length: 21 * 21 }, (_, index) => {
      const code = seed.charCodeAt(index % seed.length);
      return ((index * 17 + code * 7 + Math.floor(index / 21) * 11) % 13) < 6;
    });
  }, []);

  return (
    <div className="qr-layout" style={{ display: "grid", gridTemplateColumns: ".9fr 1.1fr", gap: 18 }}>
      <div className="glass-card" style={{ padding: 28, display: "grid", placeItems: "center" }}>
        <div
          style={{
            background: "#fff",
            padding: 18,
            borderRadius: 22,
            opacity: active ? 1 : 0.35,
            filter: active ? "none" : "grayscale(1)",
          }}
        >
          <div
            style={{
              width: 252,
              height: 252,
              display: "grid",
              gridTemplateColumns: "repeat(21, 1fr)",
              gridTemplateRows: "repeat(21, 1fr)",
              gap: 1,
              background: "#fff",
            }}
          >
            {cells.map((on, index) => (
              <span key={index} style={{ background: on ? "#080808" : "#fff" }} />
            ))}
          </div>
        </div>
      </div>

      <div className="glass-card" style={{ padding: 30 }}>
        <div className="accent" style={{ fontSize: 12, fontWeight: 1000 }}>DIGITAL MEMBER PASS</div>
        <h2 style={{ fontSize: 40, margin: "12px 0 6px" }}>Vishal Parmar</h2>
        <div className="muted">Member ID · APX-20481</div>

        <div style={{ display: "grid", gap: 12, marginTop: 28 }}>
          <div style={row}><span className="muted">Plan</span><strong>Performance</strong></div>
          <div style={row}><span className="muted">Branch</span><strong>APEX Central</strong></div>
          <div style={row}><span className="muted">Valid until</span><strong>31 Oct 2026</strong></div>
          <div style={row}><span className="muted">Status</span><strong className={active ? "accent" : "muted"}>{active ? "ACTIVE" : "PAUSED"}</strong></div>
        </div>

        <button
          type="button"
          onClick={() => setActive((value) => !value)}
          style={{
            marginTop: 24,
            minHeight: 46,
            padding: "0 17px",
            borderRadius: 12,
            border: "1px solid var(--line)",
            background: active ? "#111" : "var(--accent)",
            color: active ? "#fff" : "#080808",
            fontWeight: 1000,
            cursor: "pointer",
          }}
        >
          {active ? "Demo: Pause Pass" : "Demo: Activate Pass"}
        </button>
      </div>

      <style>{`
        @media(max-width:760px){
          .qr-layout{grid-template-columns:1fr!important}
        }
      `}</style>
    </div>
  );
}

const row = {
  display: "flex",
  justifyContent: "space-between",
  gap: 18,
  padding: "12px 0",
  borderBottom: "1px solid var(--line)",
};

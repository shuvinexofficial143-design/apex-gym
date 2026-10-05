"use client";

import { useMemo, useState } from "react";

export function QRPass() {
  const [active, setActive] = useState(true);

  const cells = useMemo(() => {
    const seed = "APX-MEMBER-PASS";
    return Array.from({ length: 21 * 21 }, (_, index) => {
      const code = seed.charCodeAt(index % seed.length);
      return ((index * 17 + code * 7 + Math.floor(index / 21) * 11) % 13) < 6;
    });
  }, []);

  return (
    <div className="qr-layout">
      <div className="glass-card qr-code-card">
        <div className="qr-code" style={{ opacity: active ? 1 : .35, filter: active ? "none" : "grayscale(1)" }}>
          <div className="qr-cells">
            {cells.map((on, index) => <span key={index} style={{ background: on ? "#080808" : "#fff" }} />)}
          </div>
        </div>
      </div>

      <div className="glass-card qr-info">
        <div className="accent qr-kicker">DIGITAL MEMBER PASS</div>
        <h2>APEX Member</h2>
        <div className="muted">Member ID · APX-20481</div>

        <div className="qr-rows">
          <div><span className="muted">Plan</span><strong>Performance</strong></div>
          <div><span className="muted">Club</span><strong>APEX Performance Club</strong></div>
          <div><span className="muted">Access</span><strong>Member entry</strong></div>
          <div><span className="muted">Status</span><strong className={active ? "accent" : "muted"}>{active ? "ACTIVE" : "PAUSED"}</strong></div>
        </div>

        <button type="button" onClick={() => setActive((value) => !value)} className={active ? "pass-toggle" : "pass-toggle active"}>
          {active ? "Pause pass" : "Activate pass"}
        </button>
      </div>

      <style>{`
        .qr-layout{display:grid;grid-template-columns:.9fr 1.1fr;gap:18px}
        .qr-code-card{padding:28px;display:grid;place-items:center}
        .qr-code{background:#fff;padding:18px;border-radius:22px}
        .qr-cells{width:252px;height:252px;display:grid;grid-template-columns:repeat(21,1fr);grid-template-rows:repeat(21,1fr);gap:1px;background:#fff}
        .qr-info{padding:30px}.qr-kicker{font-size:12px;font-weight:1000}.qr-info h2{font-size:40px;margin:12px 0 6px}
        .qr-rows{display:grid;gap:12px;margin-top:28px}.qr-rows>div{display:flex;justify-content:space-between;gap:18px;padding:12px 0;border-bottom:1px solid var(--line)}
        .pass-toggle{margin-top:24px;min-height:46px;padding:0 17px;border-radius:12px;border:1px solid var(--line);background:#111;color:#fff;font-weight:1000;cursor:pointer}.pass-toggle.active{background:var(--accent);color:#080808;border-color:var(--accent)}
        @media(max-width:760px){.qr-layout{grid-template-columns:1fr}.qr-cells{width:min(252px,68vw);height:min(252px,68vw)}}
      `}</style>
    </div>
  );
}

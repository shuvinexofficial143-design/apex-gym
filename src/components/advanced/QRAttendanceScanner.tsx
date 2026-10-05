"use client";

import { useState } from "react";

export function QRAttendanceScanner() {
  const [status, setStatus] = useState<"idle" | "scanning" | "success">("idle");

  function scan() {
    setStatus("scanning");
    window.setTimeout(() => setStatus("success"), 900);
  }

  return (
    <div className="scanner-grid">
      <div className="glass-card scanner-visual">
        <div className="scanner-frame">
          <div className={status === "scanning" ? "scanner-line scanning" : "scanner-line"} />
        </div>
      </div>

      <div className="glass-card scanner-copy">
        <div className="eyebrow">QR attendance</div>
        <h2>Member pass scanner</h2>
        <p className="muted">
          Review the check-in experience and member-pass validation flow inside the APEX workspace.
        </p>

        <button type="button" onClick={scan} disabled={status === "scanning"} className="scanner-button">
          {status === "scanning" ? "Checking..." : "Test Scanner"}
        </button>

        {status === "success" ? (
          <div className="scanner-result">
            <strong className="accent">PASS INTERFACE VERIFIED</strong>
            <div>APX-20481 · APEX Performance Club</div>
            <div className="muted">Member access flow ready</div>
          </div>
        ) : null}
      </div>

      <style>{`
        .scanner-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px}
        .scanner-visual{min-height:390px;padding:24px;display:grid;place-items:center;background:radial-gradient(circle at 50% 50%,rgba(223,255,0,.12),transparent 34%),linear-gradient(145deg,#141414,#090909)}
        .scanner-frame{width:250px;height:250px;border:2px solid var(--accent);border-radius:28px;position:relative}
        .scanner-line{position:absolute;left:18px;right:18px;top:18%;height:2px;background:var(--accent);transition:top .8s ease}
        .scanner-line.scanning{top:72%;box-shadow:0 0 35px rgba(223,255,0,.26)}
        .scanner-copy{padding:30px}.scanner-copy h2{font-size:34px;margin:14px 0 10px}.scanner-copy p{line-height:1.7}
        .scanner-button{min-height:48px;padding:0 18px;border-radius:13px;border:none;background:var(--accent);color:#080808;font-weight:1000;cursor:pointer}
        .scanner-result{margin-top:22px;padding:18px;border-radius:16px;border:1px solid rgba(223,255,0,.35);background:rgba(223,255,0,.08);display:grid;gap:6px}
        @media(max-width:760px){.scanner-grid{grid-template-columns:1fr}.scanner-frame{width:min(250px,68vw);height:min(250px,68vw)}}
      `}</style>
    </div>
  );
}

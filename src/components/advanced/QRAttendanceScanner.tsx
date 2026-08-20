"use client";

import { useState } from "react";

export function QRAttendanceScanner() {
  const [status, setStatus] = useState<"idle" | "scanning" | "success">("idle");

  function scan() {
    setStatus("scanning");
    window.setTimeout(() => setStatus("success"), 900);
  }

  return (
    <div className="scanner-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
      <div
        className="glass-card"
        style={{
          minHeight: 390,
          padding: 24,
          display: "grid",
          placeItems: "center",
          background:
            "radial-gradient(circle at 50% 50%, rgba(223,255,0,.12), transparent 34%), linear-gradient(145deg,#141414,#090909)",
        }}
      >
        <div
          style={{
            width: 250,
            height: 250,
            border: "2px solid var(--accent)",
            borderRadius: 28,
            position: "relative",
            boxShadow: status === "scanning" ? "0 0 35px rgba(223,255,0,.26)" : "none",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 18,
              right: 18,
              top: status === "scanning" ? "72%" : "18%",
              height: 2,
              background: "var(--accent)",
              transition: "top .8s ease",
            }}
          />
        </div>
      </div>

      <div className="glass-card" style={{ padding: 30 }}>
        <div className="eyebrow">QR attendance</div>
        <h2 style={{ fontSize: 34, margin: "14px 0 10px" }}>Scan member pass</h2>
        <p className="muted" style={{ lineHeight: 1.7 }}>
          This is the front-end scanner simulation. Camera permission and backend attendance verification will be connected later.
        </p>

        <button
          type="button"
          onClick={scan}
          disabled={status === "scanning"}
          style={{
            minHeight: 48,
            padding: "0 18px",
            borderRadius: 13,
            border: "none",
            background: "var(--accent)",
            color: "#080808",
            fontWeight: 1000,
            cursor: "pointer",
          }}
        >
          {status === "scanning" ? "Scanning..." : "Simulate Scan"}
        </button>

        {status === "success" ? (
          <div style={{ marginTop: 22, padding: 18, borderRadius: 16, border: "1px solid rgba(223,255,0,.35)", background: "rgba(223,255,0,.08)" }}>
            <strong className="accent">CHECK-IN SUCCESSFUL</strong>
            <div style={{ marginTop: 8 }}>APX-20481 · APEX Central</div>
            <div className="muted" style={{ marginTop: 5 }}>20 Aug 2026 · 7:42 PM</div>
          </div>
        ) : null}
      </div>

      <style>{`@media(max-width:760px){.scanner-grid{grid-template-columns:1fr!important}}`}</style>
    </div>
  );
}

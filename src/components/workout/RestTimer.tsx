"use client";

import { useEffect, useState } from "react";

export function RestTimer() {
  const [seconds, setSeconds] = useState(90);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running || seconds <= 0) return;
    const id = window.setInterval(() => setSeconds((value) => value - 1), 1000);
    return () => window.clearInterval(id);
  }, [running, seconds]);

  const minutes = Math.floor(seconds / 60);
  const secs = String(seconds % 60).padStart(2, "0");

  return (
    <div className="glass-card" style={{ padding: 24 }}>
      <div className="eyebrow">Rest timer</div>
      <div style={{ fontSize: 58, fontWeight: 1000, letterSpacing: "-.06em", marginTop: 16 }}>{minutes}:{secs}</div>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 18 }}>
        <button type="button" onClick={() => setRunning((value) => !value)} style={primary}>{running ? "Pause" : "Start"}</button>
        <button type="button" onClick={() => { setSeconds(90); setRunning(false); }} style={secondary}>Reset</button>
        <button type="button" onClick={() => setSeconds((value) => value + 30)} style={secondary}>+30 sec</button>
      </div>
    </div>
  );
}

const primary = { minHeight: 42, padding: "0 16px", borderRadius: 12, border: "none", background: "var(--accent)", color: "#080808", fontWeight: 1000, cursor: "pointer" };
const secondary = { ...primary, background: "#111", color: "#fff", border: "1px solid var(--line)" };

"use client";

import { useState } from "react";
import { SetRow } from "./SetRow";
import { RestTimer } from "./RestTimer";

type SetData = { weight: number; reps: number; completed: boolean };

export function WorkoutLogger() {
  const [exercise, setExercise] = useState("Bench Press");
  const [sets, setSets] = useState<SetData[]>([
    { weight: 40, reps: 12, completed: true },
    { weight: 50, reps: 10, completed: false },
    { weight: 55, reps: 8, completed: false },
  ]);
  const [saved, setSaved] = useState(false);

  function updateSet(index: number, field: "weight" | "reps" | "completed", value: number | boolean) {
    setSets((current) => current.map((item, itemIndex) => itemIndex === index ? { ...item, [field]: value } : item));
    setSaved(false);
  }

  return (
    <div className="logger-grid" style={{ display: "grid", gridTemplateColumns: "1.2fr .8fr", gap: 18 }}>
      <div className="glass-card" style={{ padding: 24 }}>
        <label style={{ display: "grid", gap: 8 }}>
          <span style={{ fontSize: 12, fontWeight: 900 }}>Exercise</span>
          <select
            value={exercise}
            onChange={(event) => { setExercise(event.target.value); setSaved(false); }}
            style={{ minHeight: 48, borderRadius: 13, border: "1px solid var(--line)", background: "#0e0e0e", color: "#fff", padding: "0 14px" }}
          >
            <option>Bench Press</option>
            <option>Back Squat</option>
            <option>Lat Pulldown</option>
            <option>Romanian Deadlift</option>
            <option>Shoulder Press</option>
          </select>
        </label>

        <div className="muted" style={{ display: "grid", gridTemplateColumns: "54px 1fr 1fr 90px", gap: 10, marginTop: 22, fontSize: 11, textTransform: "uppercase" }}>
          <span>Set</span><span>Kg</span><span>Reps</span><span>Status</span>
        </div>

        {sets.map((set, index) => (
          <SetRow key={index} index={index} {...set} onChange={(field, value) => updateSet(index, field, value)} />
        ))}

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 18 }}>
          <button type="button" onClick={() => setSets((current) => [...current, { weight: 0, reps: 0, completed: false }])} style={secondary}>+ Add Set</button>
          <button type="button" onClick={() => setSaved(true)} style={primary}>Save {exercise}</button>
        </div>

        {saved ? <div className="accent" style={{ marginTop: 16, fontWeight: 900 }}>Workout entry saved in demo mode.</div> : null}
      </div>

      <RestTimer />

      <style>{`@media(max-width:820px){.logger-grid{grid-template-columns:1fr!important}}`}</style>
    </div>
  );
}

const primary = { minHeight: 44, padding: "0 17px", borderRadius: 12, border: "none", background: "var(--accent)", color: "#080808", fontWeight: 1000, cursor: "pointer" };
const secondary = { ...primary, background: "#111", color: "#fff", border: "1px solid var(--line)" };

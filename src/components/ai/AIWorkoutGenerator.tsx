"use client";

import { FormEvent, useState } from "react";

export function AIWorkoutGenerator() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setResult("");

    const form = new FormData(event.currentTarget);
    const prompt = [
      `Goal: ${form.get("goal")}`,
      `Level: ${form.get("level")}`,
      `Days per week: ${form.get("days")}`,
      `Session length: ${form.get("minutes")} minutes`,
      `Equipment: ${form.get("equipment")}`,
      `Notes/limitations: ${form.get("notes") || "None stated"}`,
      "Create a clear weekly workout plan with exercises, sets, reps and progression notes.",
    ].join("\n");

    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode: "workout",
          messages: [{ role: "user", content: prompt }],
        }),
      });
      const data = (await response.json()) as { text?: string; error?: string };
      setResult(data.text || data.error || "No plan generated.");
    } catch {
      setResult("The AI service could not be reached. Try again after checking your server configuration.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="generator-grid" style={{ display: "grid", gridTemplateColumns: ".8fr 1.2fr", gap: 18 }}>
      <form onSubmit={submit} className="glass-card" style={{ padding: 24, display: "grid", gap: 14 }}>
        <label style={label}><span>Goal</span><select name="goal" style={field}><option>Muscle Gain</option><option>Fat Loss</option><option>Strength</option><option>General Fitness</option><option>Performance</option></select></label>
        <label style={label}><span>Experience</span><select name="level" style={field}><option>Beginner</option><option>Intermediate</option><option>Advanced</option></select></label>
        <label style={label}><span>Days per week</span><input name="days" type="number" min={2} max={7} defaultValue={4} style={field} /></label>
        <label style={label}><span>Minutes per session</span><input name="minutes" type="number" min={30} max={120} defaultValue={60} style={field} /></label>
        <label style={label}><span>Equipment</span><select name="equipment" style={field}><option>Full Gym</option><option>Dumbbells + Bench</option><option>Home / Bodyweight</option></select></label>
        <label style={label}><span>Notes</span><textarea name="notes" placeholder="Optional preferences or limitations..." style={{ ...field, minHeight: 100, padding: 14 }} /></label>
        <button disabled={loading} style={button}>{loading ? "Generating…" : "Generate Workout"}</button>
      </form>

      <div className="glass-card" style={{ padding: 26, minHeight: 560 }}>
        <div className="eyebrow">AI workout plan</div>
        {result ? (
          <div style={{ marginTop: 18, whiteSpace: "pre-wrap", lineHeight: 1.8 }}>{result}</div>
        ) : (
          <p className="muted" style={{ lineHeight: 1.7 }}>
            Complete the form to generate a structured workout. The assistant will avoid medical diagnosis and will not treat pain or injury as a normal programming problem.
          </p>
        )}
      </div>

      <style>{`@media(max-width:800px){.generator-grid{grid-template-columns:1fr!important}}`}</style>
    </div>
  );
}

const label = { display: "grid", gap: 8, fontSize: 13, fontWeight: 800 };
const field = { minHeight: 48, borderRadius: 13, border: "1px solid var(--line)", background: "#0e0e0e", color: "#fff", padding: "0 14px", outline: "none" };
const button = { minHeight: 50, borderRadius: 13, border: "none", background: "var(--accent)", color: "#080808", fontWeight: 1000, cursor: "pointer" };

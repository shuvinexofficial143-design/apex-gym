"use client";

import { FormEvent, useState } from "react";

export function AIDietGenerator() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setResult("");

    const form = new FormData(event.currentTarget);
    const prompt = [
      `Goal: ${form.get("goal")}`,
      `Diet preference: ${form.get("diet")}`,
      `Calories: ${form.get("calories")} kcal/day`,
      `Protein target: ${form.get("protein")} g/day`,
      `Meals per day: ${form.get("meals")}`,
      `Foods to avoid/preferences: ${form.get("notes") || "None stated"}`,
      "Create a practical one-day meal structure with approximate calories and protein per meal. Keep it general and non-medical.",
    ].join("\n");

    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode: "diet",
          messages: [{ role: "user", content: prompt }],
        }),
      });
      const data = (await response.json()) as { text?: string; error?: string };
      setResult(data.text || data.error || "No plan generated.");
    } catch {
      setResult("The AI service could not be reached. Check the server configuration and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="generator-grid" style={{ display: "grid", gridTemplateColumns: ".8fr 1.2fr", gap: 18 }}>
      <form onSubmit={submit} className="glass-card" style={{ padding: 24, display: "grid", gap: 14 }}>
        <label style={label}><span>Goal</span><select name="goal" style={field}><option>Muscle Gain</option><option>Fat Loss</option><option>Maintenance</option></select></label>
        <label style={label}><span>Diet preference</span><select name="diet" style={field}><option>Vegetarian</option><option>Non-Vegetarian</option><option>Vegan</option></select></label>
        <label style={label}><span>Daily calories</span><input name="calories" type="number" min={1200} max={5000} defaultValue={2400} style={field} /></label>
        <label style={label}><span>Protein target</span><input name="protein" type="number" min={40} max={300} defaultValue={150} style={field} /></label>
        <label style={label}><span>Meals per day</span><input name="meals" type="number" min={2} max={7} defaultValue={4} style={field} /></label>
        <label style={label}><span>Preferences</span><textarea name="notes" placeholder="Example: simple Indian foods, no peanuts..." style={{ ...field, minHeight: 100, padding: 14 }} /></label>
        <button disabled={loading} style={button}>{loading ? "Generating…" : "Generate Diet Structure"}</button>
      </form>

      <div className="glass-card" style={{ padding: 26, minHeight: 560 }}>
        <div className="eyebrow">AI nutrition plan</div>
        {result ? <div style={{ marginTop: 18, whiteSpace: "pre-wrap", lineHeight: 1.8 }}>{result}</div> : (
          <p className="muted" style={{ lineHeight: 1.7 }}>
            Generate a practical food structure from your own calorie and protein targets. This feature is not a substitute for medical nutrition care.
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

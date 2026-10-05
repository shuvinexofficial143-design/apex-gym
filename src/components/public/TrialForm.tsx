"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { getWhatsAppHref } from "@/lib/site-config";

type TrialSummary = {
  name: string;
  phone: string;
  goal: string;
  time: string;
  experience: string;
};

export function TrialForm() {
  const [submitted, setSubmitted] = useState<TrialSummary | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    setSubmitted({
      name: String(data.get("name") || ""),
      phone: String(data.get("phone") || ""),
      goal: String(data.get("goal") || ""),
      time: String(data.get("time") || ""),
      experience: String(data.get("experience") || ""),
    });
  }

  if (submitted) {
    const message = [
      "Hi APEX GYM, I want to confirm a free trial.",
      `Name: ${submitted.name}`,
      `Phone: ${submitted.phone}`,
      `Goal: ${submitted.goal}`,
      `Preferred time: ${submitted.time}`,
      `Experience: ${submitted.experience}`,
    ].join("\n");
    const whatsappHref = getWhatsAppHref(message);

    return (
      <div className="glass-card trial-success">
        <div className="accent trial-kicker">TRIAL DETAILS READY</div>
        <h3>Confirm your first visit.</h3>
        <p className="muted">
          Your preferences are ready. Use WhatsApp when it is configured for the gym, or contact the APEX team to confirm the visit.
        </p>
        <div className="trial-success-actions">
          {whatsappHref ? <a href={whatsappHref} target="_blank" rel="noreferrer" className="trial-primary">Confirm on WhatsApp</a> : null}
          <Link href="/contact" className={whatsappHref ? "trial-secondary" : "trial-primary"}>Contact APEX</Link>
        </div>

        <style>{`
          .trial-success{margin-top:42px;padding:34px}
          .trial-kicker{font-weight:1000}
          .trial-success h3{font-size:34px;margin:10px 0}
          .trial-success p{line-height:1.7;max-width:680px}
          .trial-success-actions{display:flex;flex-wrap:wrap;gap:10px;margin-top:20px}
          .trial-primary,.trial-secondary{min-height:50px;padding:0 18px;border-radius:14px;display:inline-flex;align-items:center;justify-content:center;font-weight:1000}
          .trial-primary{background:var(--accent);color:#080808}
          .trial-secondary{background:#111;border:1px solid var(--line)}
        `}</style>
      </div>
    );
  }

  const inputStyle = {
    width: "100%",
    minHeight: 52,
    borderRadius: 14,
    border: "1px solid var(--line)",
    background: "#0f0f0f",
    color: "#fff",
    padding: "0 16px",
    outline: "none",
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card" style={{ marginTop: 42, padding: 30 }}>
      <div className="trial-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <input required name="name" placeholder="Full name" autoComplete="name" style={inputStyle} />
        <input required name="phone" placeholder="Phone number" inputMode="tel" autoComplete="tel" style={inputStyle} />
        <input type="email" name="email" placeholder="Email address" autoComplete="email" style={inputStyle} />
        <select required name="goal" defaultValue="" style={inputStyle}>
          <option value="" disabled>Select fitness goal</option>
          <option>Fat loss</option>
          <option>Muscle gain</option>
          <option>Strength</option>
          <option>General fitness</option>
        </select>
        <select required name="time" defaultValue="" style={inputStyle}>
          <option value="" disabled>Preferred training time</option>
          <option>Morning</option>
          <option>Afternoon</option>
          <option>Evening</option>
        </select>
        <select required name="experience" defaultValue="" style={inputStyle}>
          <option value="" disabled>Experience level</option>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>
      </div>

      <button type="submit" className="trial-submit">Continue Trial Request</button>

      <style>{`
        .trial-submit{margin-top:18px;min-height:52px;padding:0 24px;border:none;border-radius:14px;background:var(--accent);color:#090909;font-weight:1000;cursor:pointer}
        @media(max-width:680px){.trial-grid{grid-template-columns:1fr!important}.trial-submit{width:100%}}
      `}</style>
    </form>
  );
}

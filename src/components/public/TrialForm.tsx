"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export function TrialForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="glass-card" style={{ marginTop: 42, padding: 34 }}>
        <div className="accent" style={{ fontWeight: 1000 }}>TRIAL DETAILS READY</div>
        <h3 style={{ fontSize: 34, margin: "10px 0" }}>Choose the best way to confirm your visit.</h3>
        <p className="muted" style={{ lineHeight: 1.7 }}>
          Your preferred goal and training time are ready. Contact the APEX team to confirm your first visit.
        </p>
        <Link href="/contact" className="accent" style={{ fontWeight: 1000 }}>
          Contact APEX →
        </Link>
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
        <input required name="name" placeholder="Full name" style={inputStyle} />
        <input required name="phone" placeholder="Phone number" style={inputStyle} />
        <input type="email" name="email" placeholder="Email address" style={inputStyle} />
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

      <button
        type="submit"
        style={{
          marginTop: 18,
          minHeight: 52,
          padding: "0 24px",
          border: "none",
          borderRadius: 14,
          background: "var(--accent)",
          color: "#090909",
          fontWeight: 1000,
          cursor: "pointer",
        }}
      >
        Continue Trial Request
      </button>

      <style>{`
        @media (max-width: 680px) {
          .trial-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </form>
  );
}

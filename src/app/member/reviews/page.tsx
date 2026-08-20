"use client";

import { FormEvent, useState } from "react";
import { MemberShell } from "@/components/member/MemberShell";
import { reviews } from "@/lib/advanced-data";

export default function Page() {
  const [submitted, setSubmitted] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <MemberShell title="Reviews" subtitle="Share feedback about the gym, trainers and member experience.">
      <div className="review-grid" style={{ display: "grid", gridTemplateColumns: ".8fr 1.2fr", gap: 18 }}>
        <form onSubmit={submit} className="glass-card" style={{ padding: 24, display: "grid", gap: 13 }}>
          <h2 style={{ marginTop: 0 }}>Write a review</h2>
          <select style={field}><option>★★★★★ · 5</option><option>★★★★☆ · 4</option><option>★★★☆☆ · 3</option></select>
          <textarea required placeholder="Tell us about your experience..." style={{ ...field, minHeight: 140, padding: 14 }} />
          <button style={button}>Submit Review</button>
          {submitted ? <div className="accent" style={{ fontWeight: 900 }}>Review submitted in demo mode.</div> : null}
        </form>

        <div style={{ display: "grid", gap: 12 }}>
          {reviews.map((review) => (
            <article key={review.id} className="glass-card" style={{ padding: 20 }}>
              <div className="accent" style={{ letterSpacing: 3 }}>★★★★★</div>
              <p style={{ lineHeight: 1.7 }}>{review.copy}</p>
              <div className="muted" style={{ fontSize: 12 }}>{review.name} · {review.type}</div>
            </article>
          ))}
        </div>
      </div>

      <style>{`@media(max-width:760px){.review-grid{grid-template-columns:1fr!important}}`}</style>
    </MemberShell>
  );
}

const field = { minHeight: 48, borderRadius: 13, border: "1px solid var(--line)", background: "#0e0e0e", color: "#fff", padding: "0 14px", outline: "none" };
const button = { minHeight: 48, borderRadius: 13, border: "none", background: "var(--accent)", color: "#080808", fontWeight: 1000, cursor: "pointer" };

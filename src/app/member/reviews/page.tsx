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
    <MemberShell title="Reviews" subtitle="Share feedback about training, coaching and the member experience.">
      <div className="review-grid">
        <form onSubmit={submit} className="glass-card review-form">
          <h2>Share feedback</h2>
          <select style={field}><option>★★★★★ · 5</option><option>★★★★☆ · 4</option><option>★★★☆☆ · 3</option></select>
          <textarea required placeholder="Tell us about your experience..." style={{ ...field, minHeight: 140, padding: 14 }} />
          <button style={button}>Save Feedback</button>
          {submitted ? <div className="accent review-message">Feedback captured in this workspace.</div> : null}
        </form>

        <div className="review-list">
          {reviews.map((review) => (
            <article key={review.id} className="glass-card review-card">
              <div className="accent" style={{ letterSpacing: 3 }}>★★★★★</div>
              <p>{review.copy}</p>
              <div className="muted">{review.name} · {review.type}</div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .review-grid{display:grid;grid-template-columns:.8fr 1.2fr;gap:18px}
        .review-form{padding:24px;display:grid;gap:13px}.review-form h2{margin-top:0}
        .review-list{display:grid;gap:12px}.review-card{padding:20px}.review-card p{line-height:1.7}.review-card .muted{font-size:12px}
        .review-message{font-weight:900}
        @media(max-width:760px){.review-grid{grid-template-columns:1fr}}
      `}</style>
    </MemberShell>
  );
}

const field = { minHeight: 48, borderRadius: 13, border: "1px solid var(--line)", background: "#0e0e0e", color: "#fff", padding: "0 14px", outline: "none" };
const button = { minHeight: 48, borderRadius: 13, border: "none", background: "var(--accent)", color: "#080808", fontWeight: 1000, cursor: "pointer" };

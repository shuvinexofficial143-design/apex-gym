"use client";

import { FormEvent, useState } from "react";

export function NotificationComposer() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <form onSubmit={submit} className="glass-card" style={{ padding: 26, display: "grid", gap: 15 }}>
      <label style={label}>
        <span>Audience</span>
        <select style={field}>
          <option>All Members</option>
          <option>Expiring Memberships</option>
          <option>Trainers</option>
          <option>Inactive Members</option>
          <option>Class Participants</option>
        </select>
      </label>

      <label style={label}>
        <span>Channel</span>
        <select style={field}>
          <option>In-app</option>
          <option>Email</option>
          <option>WhatsApp Ready</option>
          <option>SMS Ready</option>
        </select>
      </label>

      <label style={label}>
        <span>Title</span>
        <input required placeholder="Membership reminder" style={field} />
      </label>

      <label style={label}>
        <span>Message</span>
        <textarea required placeholder="Write notification..." style={{ ...field, minHeight: 140, padding: 14 }} />
      </label>

      <button style={button}>Send Notification</button>
      {sent ? <div className="accent" style={{ fontWeight: 900 }}>Notification queued in demo mode.</div> : null}
    </form>
  );
}

const label = { display: "grid", gap: 8, fontSize: 13, fontWeight: 800 };
const field = { minHeight: 48, borderRadius: 13, border: "1px solid var(--line)", background: "#0e0e0e", color: "#fff", padding: "0 14px", outline: "none" };
const button = { minHeight: 48, border: "none", borderRadius: 13, background: "var(--accent)", color: "#080808", fontWeight: 1000, cursor: "pointer" };

"use client";

import { FormEvent, useState } from "react";
import { MemberShell } from "@/components/member/MemberShell";

export default function Page() {
  const [placed, setPlaced] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPlaced(true);
  }

  return (
    <MemberShell title="Checkout" subtitle="Complete member-store order details.">
      <form onSubmit={submit} className="checkout-grid" style={{ display: "grid", gridTemplateColumns: "1fr .8fr", gap: 18 }}>
        <div className="glass-card" style={{ padding: 26, display: "grid", gap: 14 }}>
          <label style={label}><span>Full name</span><input required defaultValue="Vishal Parmar" style={field} /></label>
          <label style={label}><span>Mobile</span><input required defaultValue="+91 98765 43210" style={field} /></label>
          <label style={label}><span>Delivery option</span><select style={field}><option>Collect from gym reception</option><option>Home delivery</option></select></label>
          <label style={label}><span>Payment</span><select style={field}><option>UPI</option><option>Card</option><option>Pay at Reception</option></select></label>
          <button style={button}>Place Demo Order</button>
        </div>

        <div className="glass-card" style={{ padding: 26, alignSelf: "start" }}>
          <div className="eyebrow">Summary</div>
          <h2 style={{ fontSize: 32, margin: "14px 0" }}>₹2,373</h2>
          <div className="muted">Includes 5% member discount.</div>
          {placed ? <div className="accent" style={{ marginTop: 18, fontWeight: 900 }}>Order created in demo mode.</div> : null}
        </div>

        <style>{`@media(max-width:760px){.checkout-grid{grid-template-columns:1fr!important}}`}</style>
      </form>
    </MemberShell>
  );
}

const label = { display: "grid", gap: 8, fontSize: 13, fontWeight: 800 };
const field = { minHeight: 48, borderRadius: 13, border: "1px solid var(--line)", background: "#0e0e0e", color: "#fff", padding: "0 14px", outline: "none" };
const button = { minHeight: 48, borderRadius: 13, border: "none", background: "var(--accent)", color: "#080808", fontWeight: 1000, cursor: "pointer" };

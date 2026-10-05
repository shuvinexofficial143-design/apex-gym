"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { MemberShell } from "@/components/member/MemberShell";

export default function Page() {
  const [prepared, setPrepared] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPrepared(true);
  }

  return (
    <MemberShell title="Checkout" subtitle="Review member-store order details before confirming with the club.">
      <form onSubmit={submit} className="checkout-grid">
        <div className="glass-card checkout-form">
          <label style={label}><span>Full name</span><input required placeholder="Member name" autoComplete="name" style={field} /></label>
          <label style={label}><span>Mobile</span><input required placeholder="Mobile number" inputMode="tel" autoComplete="tel" style={field} /></label>
          <label style={label}><span>Collection option</span><select style={field}><option>Collect from gym reception</option><option>Home delivery enquiry</option></select></label>
          <label style={label}><span>Payment preference</span><select style={field}><option>Confirm at reception</option><option>UPI preference</option><option>Card preference</option></select></label>
          <button style={button}>Prepare Order Request</button>
        </div>

        <div className="glass-card checkout-summary">
          <div className="eyebrow">Order request</div>
          <h2>APEX Member Store</h2>
          <p className="muted">Final stock, price and payment are confirmed by the club before fulfilment.</p>
          {prepared ? (
            <div className="checkout-ready">
              <strong>Order request prepared.</strong>
              <span className="muted">Continue with the APEX team to confirm availability and payment.</span>
              <Link href="/contact">Contact APEX →</Link>
            </div>
          ) : null}
        </div>

        <style>{`
          .checkout-grid{display:grid;grid-template-columns:1fr .8fr;gap:18px}
          .checkout-form{padding:26px;display:grid;gap:14px}
          .checkout-summary{padding:26px;align-self:start}.checkout-summary h2{font-size:32px;margin:14px 0 8px}.checkout-summary p{line-height:1.7}
          .checkout-ready{margin-top:20px;padding:16px;border-radius:15px;border:1px solid rgba(223,255,0,.28);background:rgba(223,255,0,.055);display:grid;gap:8px}
          .checkout-ready a{color:var(--accent);font-weight:1000}
          @media(max-width:760px){.checkout-grid{grid-template-columns:1fr}}
        `}</style>
      </form>
    </MemberShell>
  );
}

const label = { display: "grid", gap: 8, fontSize: 13, fontWeight: 800 };
const field = { minHeight: 48, borderRadius: 13, border: "1px solid var(--line)", background: "#0e0e0e", color: "#fff", padding: "0 14px", outline: "none" };
const button = { minHeight: 48, borderRadius: 13, border: "none", background: "var(--accent)", color: "#080808", fontWeight: 1000, cursor: "pointer" };

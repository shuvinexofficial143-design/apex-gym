"use client";

import { useState } from "react";
import { renewalOptions } from "@/lib/advanced-data";
import Link from "next/link";

export function RenewalPanel() {
  const [selected, setSelected] = useState(renewalOptions[1].id);
  const plan = renewalOptions.find((item) => item.id === selected) ?? renewalOptions[0];

  return (
    <div className="renew-grid">
      <div className="glass-card renew-options">
        <div className="eyebrow">Renew membership</div>
        <h2>Keep your training momentum.</h2>
        <p className="muted">Choose the renewal period you want to discuss with the APEX team.</p>

        <div className="renew-list">
          {renewalOptions.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => setSelected(option.id)}
              className={selected === option.id ? "renew-option active" : "renew-option"}
            >
              <div><strong>{option.label}</strong><div className="muted">{option.note}</div></div>
              <span>View option</span>
            </button>
          ))}
        </div>
      </div>

      <div className="glass-card renew-summary">
        <div className="muted">Selected renewal</div>
        <div className="renew-title">{plan.label}</div>
        <p className="muted">{plan.note}</p>
        <Link href="/contact" className="renew-primary">Confirm with APEX</Link>
      </div>

      <style>{`
        .renew-grid{display:grid;grid-template-columns:1fr .8fr;gap:18px}
        .renew-options,.renew-summary{padding:26px}
        .renew-options h2{font-size:34px;margin:14px 0 8px}
        .renew-options p{line-height:1.7}
        .renew-list{display:grid;gap:12px;margin-top:22px}
        .renew-option{padding:18px;border-radius:15px;border:1px solid var(--line);background:#101010;color:#fff;display:flex;justify-content:space-between;gap:16px;cursor:pointer;text-align:left}
        .renew-option.active{border-color:var(--accent);background:rgba(223,255,0,.08)}
        .renew-option .muted{font-size:12px;margin-top:4px}
        .renew-option>span{color:var(--accent);font-size:11px;font-weight:1000;align-self:center;white-space:nowrap}
        .renew-summary{align-self:start}.renew-title{font-size:34px;font-weight:1000;margin-top:10px}.renew-summary p{line-height:1.6}
        .renew-primary{width:100%;min-height:48px;margin-top:18px;border-radius:13px;background:var(--accent);color:#080808;font-weight:1000;display:flex;align-items:center;justify-content:center}
        @media(max-width:760px){.renew-grid{grid-template-columns:1fr}}
      `}</style>
    </div>
  );
}

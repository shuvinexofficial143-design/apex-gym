"use client";

import { useState } from "react";
import Link from "next/link";

const publicLinks = [
  ["Home", "/"],
  ["Programs", "/programs"],
  ["Membership", "/membership"],
  ["Trainers", "/trainers"],
  ["Classes", "/classes"],
  ["Gallery", "/gallery"],
  ["Transformations", "/transformations"],
  ["Visit APEX", "/locations"],
  ["Contact", "/contact"],
];

const memberLinks = [
  ["Member Experience", "/member"],
  ["APEX AI Coach", "/member/ai"],
  ["Smart Search", "/search"],
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mobile-menu-wrap">
      <button
        type="button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((value) => !value)}
        className="mobile-menu-button"
      >
        {open ? "×" : "☰"}
      </button>

      {open ? (
        <div id="mobile-navigation" className="apex-scroll mobile-menu-panel">
          <div className="mobile-menu-label">EXPLORE</div>
          {publicLinks.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)} className="mobile-menu-item">
              {label}
            </Link>
          ))}

          <div className="divider" style={{ margin: "10px 0" }} />
          <div className="mobile-menu-label">DIGITAL APEX</div>
          {memberLinks.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)} className="mobile-menu-item">
              {label}
            </Link>
          ))}

          <Link href="/free-trial" onClick={() => setOpen(false)} className="mobile-trial">
            Book Free Trial
          </Link>
        </div>
      ) : null}

      <style>{`
        .mobile-menu-wrap{display:none;position:relative}
        .mobile-menu-button{width:44px;height:44px;border-radius:14px;border:1px solid var(--line);background:#111;color:#fff;font-size:21px;cursor:pointer}
        .mobile-menu-panel{position:absolute;top:58px;right:0;width:min(350px,calc(100vw - 28px));max-height:calc(100svh - 92px);overflow-y:auto;padding:14px;border:1px solid var(--line);border-radius:20px;background:#111;box-shadow:0 20px 60px rgba(0,0,0,.55)}
        .mobile-menu-label{color:var(--muted);font-size:10px;font-weight:1000;letter-spacing:.14em;padding:7px 12px}
        .mobile-menu-item{display:block;padding:12px 13px;border-radius:11px;font-weight:800;font-size:13px}
        .mobile-trial{display:block;margin-top:12px;padding:15px;border-radius:14px;text-align:center;background:var(--accent);color:#090909;font-weight:1000}
        @media(max-width:980px){.mobile-menu-wrap{display:block}}
      `}</style>
    </div>
  );
}

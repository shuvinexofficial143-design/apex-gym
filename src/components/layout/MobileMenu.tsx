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
  ["Locations", "/locations"],
  ["Contact", "/contact"],
];

const appLinks = [
  ["Search", "/search"],
  ["AI Coach", "/member/ai"],
  ["Member Login", "/auth/login"],
  ["Member Dashboard", "/member"],
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mobile-menu-wrap">
      <button
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        style={{
          width: 44,
          height: 44,
          borderRadius: 14,
          border: "1px solid var(--line)",
          background: "#111",
          color: "#fff",
          fontSize: 21,
          cursor: "pointer",
        }}
      >
        {open ? "×" : "☰"}
      </button>

      {open ? (
        <div
          className="apex-scroll"
          style={{
            position: "absolute",
            top: 58,
            right: 0,
            width: "min(350px, calc(100vw - 28px))",
            maxHeight: "calc(100svh - 92px)",
            overflowY: "auto",
            padding: 14,
            border: "1px solid var(--line)",
            borderRadius: 20,
            background: "#111",
            boxShadow: "0 20px 60px rgba(0,0,0,.55)",
          }}
        >
          <div className="muted" style={{ fontSize: 10, fontWeight: 1000, letterSpacing: ".14em", padding: "7px 12px" }}>
            EXPLORE
          </div>
          {publicLinks.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)} style={itemStyle}>
              {label}
            </Link>
          ))}

          <div className="divider" style={{ margin: "10px 0" }} />
          <div className="muted" style={{ fontSize: 10, fontWeight: 1000, letterSpacing: ".14em", padding: "7px 12px" }}>
            DIGITAL APEX
          </div>
          {appLinks.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)} style={itemStyle}>
              {label}
            </Link>
          ))}

          <Link
            href="/free-trial"
            onClick={() => setOpen(false)}
            style={{
              display: "block",
              marginTop: 12,
              padding: 15,
              borderRadius: 14,
              textAlign: "center",
              background: "var(--accent)",
              color: "#090909",
              fontWeight: 1000,
            }}
          >
            Book Free Trial
          </Link>
        </div>
      ) : null}

      <style>{`
        .mobile-menu-wrap{display:none;position:relative}
        @media(max-width:930px){.mobile-menu-wrap{display:block}}
      `}</style>
    </div>
  );
}

const itemStyle = {
  display: "block",
  padding: "12px 13px",
  borderRadius: 11,
  fontWeight: 800,
  fontSize: 13,
};

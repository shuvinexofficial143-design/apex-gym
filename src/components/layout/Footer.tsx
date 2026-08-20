import Link from "next/link";

export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--line)", padding: "58px 0 28px" }}>
      <div className="container footer-grid" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 34 }}>
        <div>
          <div style={{ fontSize: 28, fontWeight: 1000, letterSpacing: "-.05em" }}>APEX GYM</div>
          <p className="muted" style={{ maxWidth: 440, lineHeight: 1.7 }}>
            Premium coaching, structured training and a modern digital member experience in one fitness platform.
          </p>
        </div>

        <div>
          <strong>Explore</strong>
          <div style={links}>
            <Link href="/programs" className="muted">Programs</Link>
            <Link href="/membership" className="muted">Membership</Link>
            <Link href="/trainers" className="muted">Trainers</Link>
            <Link href="/classes" className="muted">Classes</Link>
          </div>
        </div>

        <div>
          <strong>Member</strong>
          <div style={links}>
            <Link href="/auth/login" className="muted">Login</Link>
            <Link href="/member" className="muted">Dashboard</Link>
            <Link href="/member/ai" className="muted">AI Coach</Link>
            <Link href="/search" className="muted">Smart Search</Link>
          </div>
        </div>

        <div>
          <strong>Contact</strong>
          <div className="muted" style={links}>
            <a href="tel:+919876543210">+91 98765 43210</a>
            <a href="mailto:hello@apexgym.com">hello@apexgym.com</a>
            <span>Mon–Sat · 5 AM–11 PM</span>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="divider" style={{ margin: "40px 0 22px" }} />
        <div className="muted" style={{ display: "flex", justifyContent: "space-between", gap: 14, flexWrap: "wrap", fontSize: 12 }}>
          <span>© 2026 APEX GYM. Built for performance.</span>
          <span>Training guidance is informational, not medical care.</span>
        </div>
      </div>

      <style>{`
        @media(max-width:920px){.footer-grid{grid-template-columns:repeat(2,1fr)!important}}
        @media(max-width:620px){.footer-grid{grid-template-columns:1fr!important}}
      `}</style>
    </footer>
  );
}

const links = { display: "grid", gap: 10, marginTop: 16, lineHeight: 1.5 };

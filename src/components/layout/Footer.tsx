import Link from "next/link";
import { getWhatsAppHref, siteConfig } from "@/lib/site-config";

export function Footer() {
  const whatsappHref = getWhatsAppHref();

  return (
    <footer style={{ borderTop: "1px solid var(--line)", padding: "58px 0 28px" }}>
      <div className="container footer-grid" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 34 }}>
        <div>
          <div style={{ fontSize: 28, fontWeight: 1000, letterSpacing: "-.05em" }}>{siteConfig.name}</div>
          <p className="muted" style={{ maxWidth: 440, lineHeight: 1.7 }}>
            Coach-led training, structured programs and a modern member experience built around measurable progress.
          </p>
        </div>

        <div>
          <strong>Explore</strong>
          <div style={links}>
            <Link href="/programs" className="muted">Programs</Link>
            <Link href="/membership" className="muted">Membership</Link>
            <Link href="/trainers" className="muted">Trainers</Link>
            <Link href="/classes" className="muted">Classes</Link>
            <Link href="/gallery" className="muted">Gallery</Link>
          </div>
        </div>

        <div>
          <strong>Start</strong>
          <div style={links}>
            <Link href="/free-trial" className="muted">Book Free Trial</Link>
            <Link href="/contact" className="muted">Contact</Link>
            <Link href="/locations" className="muted">Visit APEX</Link>
            <Link href="/member" className="muted">Member Experience</Link>
          </div>
        </div>

        <div>
          <strong>Contact</strong>
          <div className="muted" style={links}>
            {siteConfig.phone ? <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>{siteConfig.phone}</a> : null}
            {siteConfig.email ? <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> : null}
            {whatsappHref ? <a href={whatsappHref} target="_blank" rel="noreferrer">WhatsApp APEX</a> : null}
            {siteConfig.address ? <span>{siteConfig.address}</span> : <Link href="/contact">Contact the team</Link>}
            {siteConfig.hours ? <span>{siteConfig.hours}</span> : null}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="divider" style={{ margin: "40px 0 22px" }} />
        <div className="muted" style={{ display: "flex", justifyContent: "space-between", gap: 14, flexWrap: "wrap", fontSize: 12 }}>
          <span>© 2026 {siteConfig.name}. Built for performance.</span>
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

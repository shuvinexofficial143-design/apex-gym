import Link from "next/link";
import { getWhatsAppHref, siteConfig } from "@/lib/site-config";

export function ContactPanel() {
  const whatsappHref = getWhatsAppHref("Hi APEX GYM, I want to ask about membership, facilities and a free trial.");
  const hasDirectContact = Boolean(siteConfig.phone || siteConfig.email || whatsappHref);

  return (
    <div className="contact-grid">
      <div className="glass-card contact-card">
        <div className="eyebrow">Talk to APEX</div>
        <h3>Start with the right conversation.</h3>
        <p className="muted">
          Ask about memberships, coaching, class timings, facilities or the best program for your goal.
        </p>

        <div className="contact-actions">
          {siteConfig.phone ? <a className="contact-primary" href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>Call APEX</a> : null}
          {whatsappHref ? <a className="contact-primary" href={whatsappHref} target="_blank" rel="noreferrer">WhatsApp</a> : null}
          {siteConfig.email ? <a className="contact-secondary" href={`mailto:${siteConfig.email}`}>Email</a> : null}
          {!hasDirectContact ? <Link className="contact-primary" href="/free-trial">Book Free Trial</Link> : null}
        </div>
      </div>

      <div className="glass-card visit-card">
        <div className="eyebrow">Visit the club</div>
        <h3>Your strongest hour starts here.</h3>
        <div className="visit-details">
          <div>
            <span>Location</span>
            <strong>{siteConfig.address || "Club address shared during visit confirmation"}</strong>
          </div>
          <div>
            <span>Hours</span>
            <strong>{siteConfig.hours || "Training hours available from the APEX team"}</strong>
          </div>
        </div>
        <Link href="/locations" className="contact-secondary">View club details →</Link>
      </div>

      <style>{`
        .contact-grid{margin-top:42px;display:grid;grid-template-columns:1fr 1fr;gap:18px}
        .contact-card,.visit-card{padding:30px}
        .contact-card h3,.visit-card h3{font-size:clamp(30px,4vw,42px);margin:14px 0 10px}
        .contact-card p{line-height:1.7;max-width:560px}
        .contact-actions{display:flex;flex-wrap:wrap;gap:10px;margin-top:24px}
        .contact-primary,.contact-secondary{min-height:48px;padding:0 17px;border-radius:14px;display:inline-flex;align-items:center;justify-content:center;font-weight:1000}
        .contact-primary{background:var(--accent);color:#080808}
        .contact-secondary{border:1px solid var(--line);background:#111;color:#fff}
        .visit-card{min-height:360px;background:radial-gradient(circle at 70% 30%,rgba(223,255,0,.22),transparent 24%),linear-gradient(145deg,#181818,#090909)}
        .visit-details{display:grid;gap:18px;margin:28px 0}
        .visit-details div{display:grid;gap:6px}
        .visit-details span{color:var(--muted);font-size:11px;text-transform:uppercase;letter-spacing:.12em;font-weight:900}
        .visit-details strong{line-height:1.55}
        @media(max-width:760px){.contact-grid{grid-template-columns:1fr}}
      `}</style>
    </div>
  );
}

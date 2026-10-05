import Link from "next/link";
import { getWhatsAppHref, siteConfig } from "@/lib/site-config";

const facilityHighlights = [
  "Strength & free weights",
  "Conditioning & cardio",
  "Coach-led programs",
  "Group training",
  "Progress tracking",
  "Member tools",
];

export function LocationsGrid() {
  const whatsappHref = getWhatsAppHref("Hi APEX GYM, please share the club location and the best time for a visit.");

  return (
    <div className="location-showcase">
      <article className="glass-card location-main">
        <div>
          <div className="eyebrow">APEX PERFORMANCE CLUB</div>
          <h3>One serious place to train.</h3>
          <p className="muted">
            Visit the club, see the training environment and speak with the team about the right membership and coaching path.
          </p>
        </div>

        <div className="location-facts">
          <div><span>Address</span><strong>{siteConfig.address || "Confirmed with your trial or visit booking"}</strong></div>
          <div><span>Training hours</span><strong>{siteConfig.hours || "Available from the APEX team"}</strong></div>
        </div>

        <div className="location-actions">
          <Link href="/free-trial" className="location-primary">Book Free Trial</Link>
          {whatsappHref ? <a href={whatsappHref} target="_blank" rel="noreferrer" className="location-secondary">Ask on WhatsApp</a> : <Link href="/contact" className="location-secondary">Contact APEX</Link>}
        </div>
      </article>

      <div className="location-highlights">
        {facilityHighlights.map((item) => <div key={item} className="glass-card">{item}</div>)}
      </div>

      <style>{`
        .location-showcase{display:grid;grid-template-columns:1.25fr .75fr;gap:18px;margin-top:42px}
        .location-main{padding:clamp(26px,5vw,48px);display:grid;gap:28px;align-content:center;min-height:470px;background:radial-gradient(circle at 84% 16%,rgba(223,255,0,.18),transparent 24%),linear-gradient(145deg,#171717,#090909)}
        .location-main h3{font-size:clamp(38px,6vw,70px);line-height:.95;margin:14px 0}
        .location-main p{max-width:650px;line-height:1.75}
        .location-facts{display:grid;grid-template-columns:1fr 1fr;gap:12px}
        .location-facts div{padding:18px;border-radius:18px;border:1px solid var(--line);background:rgba(255,255,255,.025);display:grid;gap:7px}
        .location-facts span{color:var(--muted);font-size:10px;letter-spacing:.12em;text-transform:uppercase;font-weight:900}
        .location-facts strong{line-height:1.5}
        .location-actions{display:flex;flex-wrap:wrap;gap:10px}
        .location-primary,.location-secondary{min-height:50px;padding:0 18px;border-radius:14px;display:inline-flex;align-items:center;justify-content:center;font-weight:1000}
        .location-primary{background:var(--accent);color:#080808}
        .location-secondary{background:#111;border:1px solid var(--line)}
        .location-highlights{display:grid;grid-template-columns:1fr 1fr;gap:12px}
        .location-highlights div{padding:20px;display:flex;align-items:end;font-weight:900;min-height:140px;background:linear-gradient(145deg,#171717,#0c0c0c)}
        @media(max-width:900px){.location-showcase{grid-template-columns:1fr}.location-highlights{grid-template-columns:repeat(3,1fr)}}
        @media(max-width:640px){.location-facts,.location-highlights{grid-template-columns:1fr}.location-highlights div{min-height:96px}}
      `}</style>
    </div>
  );
}

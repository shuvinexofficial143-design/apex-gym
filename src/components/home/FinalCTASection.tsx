import Link from "next/link";
import { getWhatsAppHref } from "@/lib/site-config";

export function FinalCTASection() {
  const whatsappHref = getWhatsAppHref("Hi APEX GYM, I want to book a trial and understand the best membership for my goal.");

  return (
    <section className="section-shell" style={{ paddingTop: 38 }}>
      <div className="final-cta-wrap">
        <div className="final-cta-copy">
          <div className="eyebrow">READY TO START?</div>
          <h2>Come train with a plan.</h2>
          <p className="muted">
            See the training floor, meet the coaching approach and choose the level of support that fits your goal.
          </p>

          <div className="final-cta-actions">
            <Link href="/free-trial" className="final-cta-primary">Book Free Trial</Link>
            <Link href="/membership" className="final-cta-secondary">View Membership</Link>
            {whatsappHref ? <a href={whatsappHref} target="_blank" rel="noreferrer" className="final-cta-secondary">WhatsApp APEX</a> : null}
          </div>
        </div>

        <div className="final-cta-points">
          <div><span>01</span><strong>Coach-led training</strong><p>Clear direction instead of random workouts.</p></div>
          <div><span>02</span><strong>Flexible support</strong><p>Choose gym access, classes or higher-touch coaching.</p></div>
          <div><span>03</span><strong>Visible progress</strong><p>Keep training consistency and performance in view.</p></div>
        </div>
      </div>

      <style>{`
        .final-cta-wrap{border-radius:42px;padding:clamp(24px,5vw,48px);display:grid;grid-template-columns:1.05fr .95fr;gap:28px;background:radial-gradient(circle at 18% 18%,rgba(223,255,0,.18),transparent 24%),linear-gradient(145deg,#111b22,#080b0e 60%);border:1px solid rgba(223,255,0,.14);overflow:hidden}
        .final-cta-copy{display:grid;gap:16px;align-content:center}
        .final-cta-copy h2{font-size:clamp(44px,7vw,82px);line-height:.9;letter-spacing:-.055em;margin:0;text-transform:uppercase}
        .final-cta-copy p{line-height:1.75;max-width:650px;margin:0}
        .final-cta-actions{display:flex;flex-wrap:wrap;gap:10px;margin-top:8px}
        .final-cta-primary,.final-cta-secondary{min-height:54px;padding:0 20px;display:inline-flex;align-items:center;justify-content:center;border-radius:16px;font-weight:1000}
        .final-cta-primary{background:var(--accent);color:#071017}
        .final-cta-secondary{background:#111;color:#fff;border:1px solid var(--line)}
        .final-cta-points{display:grid;gap:12px}
        .final-cta-points>div{padding:22px;border-radius:22px;border:1px solid rgba(255,255,255,.07);background:rgba(255,255,255,.035);display:grid;grid-template-columns:44px 1fr;column-gap:12px;align-items:start}
        .final-cta-points span{grid-row:span 2;width:38px;height:38px;border-radius:12px;display:grid;place-items:center;background:var(--accent);color:#080808;font-weight:1000;font-size:11px}
        .final-cta-points strong{font-size:18px}
        .final-cta-points p{grid-column:2;color:var(--muted);margin:6px 0 0;line-height:1.55;font-size:13px}
        @media(max-width:900px){.final-cta-wrap{grid-template-columns:1fr}}
        @media(max-width:620px){.final-cta-wrap{border-radius:28px}.final-cta-actions>a{width:100%}}
      `}</style>
    </section>
  );
}

import type { ShowcaseSlide } from "./home-showcase-data";

export function ShowcaseGallery({
  eyebrow,
  title,
  subtitle,
  slides,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  slides: ShowcaseSlide[];
}) {
  return (
    <section className="section-shell">
      <div style={{ marginBottom: 24 }}>
        <div className="eyebrow">{eyebrow}</div>
        <h2 style={{ fontSize: "clamp(34px,6vw,64px)", lineHeight: 1, margin: "10px 0" }}>{title}</h2>
        <p className="muted" style={{ maxWidth: 880, lineHeight: 1.75 }}>{subtitle}</p>
      </div>

      <div className="sg-grid">
        {slides.map((slide, index) => (
          <article key={slide.title} className="sg-card">
            <div className={`sg-glow sg-glow-${index + 1}`} />
            <div className="sg-copy">
              <span className="eyebrow">{slide.tagline}</span>
              <h3>{slide.title}</h3>
              <p>{slide.copy}</p>
              <div className="sg-chips">
                <span>{slide.badge}</span>
                <span>{slide.chip}</span>
              </div>
            </div>
            <div className="sg-phone">
              <div className="sg-phone-head">
                <span>{slide.accent}</span>
                <b>•••</b>
              </div>
              <div className={`sg-phone-art sg-phone-art-${index + 1}`} />
              <div className="sg-stat">
                <strong>{slide.stat}</strong>
                <span>{slide.statLabel}</span>
              </div>
              <div className="sg-nav"><span>Plan</span><span>Workouts</span><span>Food</span><span>Mind</span></div>
            </div>
          </article>
        ))}
      </div>

      <style>{`
        .sg-grid{display:grid;gap:16px}
        .sg-card{
          position:relative;
          min-height:560px;
          overflow:hidden;
          border-radius:36px;
          padding:24px;
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:18px;
          background:linear-gradient(180deg,#06162d,#05080d);
          border:1px solid rgba(255,255,255,.07);
        }
        .sg-glow{
          position:absolute;
          width:360px;height:360px;border-radius:50%;
          filter:blur(32px);
          opacity:.38;
          right:-80px;top:-70px;
        }
        .sg-glow-1{background:#2b7fff}
        .sg-glow-2{background:#dfff00}
        .sg-glow-3{background:#58d6ff}
        .sg-copy{
          position:relative;z-index:1;
          align-self:center;
          display:grid;gap:12px;
        }
        .sg-copy h3{
          white-space:pre-line;
          font-size:clamp(34px,5vw,58px);
          line-height:.98;
          margin:0;
        }
        .sg-copy p{
          color:#bbc3cd;
          line-height:1.7;
          margin:0;
        }
        .sg-chips{display:flex;flex-wrap:wrap;gap:8px;margin-top:8px}
        .sg-chips span{
          min-height:36px;padding:0 12px;border-radius:999px;
          display:inline-flex;align-items:center;
          background:rgba(255,255,255,.07);
          border:1px solid rgba(255,255,255,.07);
          font-size:11px;font-weight:900;
        }
        .sg-phone{
          position:relative;z-index:1;
          width:min(100%,340px);
          min-height:490px;
          justify-self:center;
          border-radius:34px;
          padding:17px;
          background:linear-gradient(180deg,#f8fbff,#edf3fa);
          color:#09111c;
          border:6px solid rgba(68,131,219,.76);
          box-shadow:0 25px 60px rgba(0,0,0,.28);
          display:grid;
          grid-template-rows:auto 1fr auto auto;
        }
        .sg-phone-head{display:flex;justify-content:space-between;font-weight:1000}
        .sg-phone-art{
          margin-top:14px;
          border-radius:26px;
          min-height:290px;
        }
        .sg-phone-art-1{background:linear-gradient(135deg,#337dff,#98d1ff 48%,#0b1c3e)}
        .sg-phone-art-2{background:linear-gradient(135deg,#ffcb8c,#dcff9a 48%,#53a95e)}
        .sg-phone-art-3{background:linear-gradient(135deg,#a8e3ff,#d3e8ff 45%,#396fd4)}
        .sg-stat{
          margin-top:12px;
          padding:14px;
          border-radius:20px;
          background:#fff;
          display:flex;
          justify-content:space-between;
          align-items:end;
          gap:12px;
        }
        .sg-stat strong{font-size:28px}
        .sg-stat span{color:#5c6675;font-size:11px;font-weight:900}
        .sg-nav{
          display:flex;justify-content:space-between;
          padding-top:12px;color:#5b6676;font-size:10px;font-weight:900
        }
        @media(max-width:900px){.sg-card{grid-template-columns:1fr}}
        @media(max-width:620px){
          .sg-card{padding:18px;border-radius:28px;min-height:auto}
          .sg-phone{width:min(100%,300px);min-height:440px}
          .sg-phone-art{min-height:250px}
        }
      `}</style>
    </section>
  );
}

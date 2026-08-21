import Link from "next/link";

export function FinalCTASection() {
  return (
    <section className="section-shell" style={{ paddingTop: 38 }}>
      <div className="final-cta-wrap">
        <div className="final-cta-copy">
          <div className="eyebrow">READY TO BUILD THE APP FEEL?</div>
          <h2 style={{ fontSize: "clamp(34px, 6vw, 64px)", lineHeight: .96, margin: 0 }}>
            Strong visuals, smart coaching and premium member journeys.
          </h2>
          <p className="muted" style={{ lineHeight: 1.8, maxWidth: 720 }}>
            Turn the landing page into a richer app-showcase experience while keeping all the portals,
            AI tools and gym features already built in the project.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
            <Link href="/free-trial" className="final-cta-primary">Claim Free Trial</Link>
            <Link href="/member/ai" className="final-cta-secondary">Try APEX AI</Link>
          </div>
        </div>

        <div className="final-cta-visual">
          <div className="final-card final-card-a" />
          <div className="final-card final-card-b" />
          <div className="final-card final-card-c" />
          <div className="final-member-badge">
            <div style={{ fontSize: 44, fontWeight: 1000, lineHeight: 1 }}>20M+</div>
            <div className="muted" style={{ fontWeight: 900, textTransform: "uppercase", letterSpacing: ".08em" }}>
              workout seekers inspired
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .final-cta-wrap{
          border-radius:42px;
          padding:28px;
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:22px;
          background:
            radial-gradient(circle at 22% 16%, rgba(217,255,0,.18), transparent 24%),
            radial-gradient(circle at 82% 84%, rgba(52,137,255,.28), transparent 28%),
            linear-gradient(180deg, rgba(4,18,39,.95), rgba(5,10,18,.98));
          border:1px solid rgba(111,186,255,.14);
          overflow:hidden;
        }
        .final-cta-copy{
          display:grid;
          gap:14px;
          align-self:center;
        }
        .final-cta-primary,
        .final-cta-secondary{
          min-height:54px;
          padding:0 22px;
          display:inline-flex;
          align-items:center;
          justify-content:center;
          text-decoration:none;
          border-radius:16px;
          font-weight:1000;
        }
        .final-cta-primary{ background:var(--accent); color:#071017; }
        .final-cta-secondary{ background:#111; color:#fff; border:1px solid var(--line); }

        .final-cta-visual{
          position:relative;
          min-height:380px;
        }
        .final-card{
          position:absolute;
          border-radius:28px;
          box-shadow:0 22px 50px rgba(4,12,22,.34);
        }
        .final-card-a{
          width:220px; height:300px; left:20px; top:46px;
          background:linear-gradient(180deg,#eef3fb,#95bfff 45%, #2b65d7);
        }
        .final-card-b{
          width:250px; height:340px; left:170px; top:18px;
          background:linear-gradient(180deg,#edf2fa,#9fc7ff 45%, #3b74e2);
        }
        .final-card-c{
          width:220px; height:240px; left:100px; bottom:0;
          background:linear-gradient(180deg,#dfe9f6,#83bcff 45%, #2d66d7);
        }
        .final-member-badge{
          position:absolute;
          right:8px; bottom:18px;
          min-width:220px;
          padding:18px 20px;
          border-radius:24px;
          background:rgba(10,16,24,.74);
          border:1px solid rgba(255,255,255,.06);
          backdrop-filter:blur(16px);
        }
        @media(max-width:1040px){
          .final-cta-wrap{ grid-template-columns:1fr; }
          .final-cta-visual{ min-height:330px; }
        }
        @media(max-width:760px){
          .final-cta-wrap{ border-radius:30px; padding:18px; }
          .final-card-a{ width:140px; height:200px; left:0; top:64px; }
          .final-card-b{ width:170px; height:230px; left:92px; top:28px; }
          .final-card-c{ width:150px; height:165px; left:36px; bottom:0; }
          .final-member-badge{ right:0; min-width:160px; padding:14px; }
        }
      `}</style>
    </section>
  );
}

import Link from "next/link";
import { FitnessPhoto } from "./FitnessPhoto";

export function MobilePromoSection() {
  return (
    <section className="section-shell" style={{ paddingBottom: 80 }}>
      <div className="mobile-promo">
        <div className="mobile-promo-copy">
          <div className="eyebrow">YOUR GYM IN YOUR POCKET</div>
          <h2>Workouts, food, recovery, progress.</h2>
          <p>
            Keep your training plan, nutrition guidance, classes and progress tools together between gym sessions.
          </p>

          <div className="mobile-promo-tags">
            <span>AI workouts</span>
            <span>Nutrition</span>
            <span>Classes</span>
            <span>Progress</span>
          </div>

          <Link href="/member" className="mobile-promo-btn">Explore Member Experience</Link>
        </div>

        <div className="mobile-promo-phone">
          <div className="mobile-promo-phone-screen">
            <div className="mobile-promo-photo">
              <FitnessPhoto
                src="https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=800&q=85"
                alt="Fitness app exercise view"
              />
            </div>
            <div className="mobile-promo-panel">
              <span className="accent">{"TODAY'S PLAN"}</span>
              <strong>Push • Pull • Core</strong>
              <div className="mobile-promo-progress"><span /></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .mobile-promo{
          min-height:620px;
          border-radius:40px;
          overflow:hidden;
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:18px;
          background:
            radial-gradient(circle at 80% 22%, rgba(59,140,255,.34), transparent 25%),
            radial-gradient(circle at 15% 82%, rgba(217,255,0,.14), transparent 24%),
            linear-gradient(135deg,#06162d,#09101d 52%,#05080c);
          border:1px solid rgba(255,255,255,.07);
          padding:28px;
        }
        .mobile-promo-copy{
          display:grid;
          gap:16px;
          align-content:center;
        }
        .mobile-promo-copy h2{
          font-size:clamp(38px,6vw,72px);
          line-height:.94;
          margin:0;
        }
        .mobile-promo-copy p{
          color:#bec5ce;
          line-height:1.75;
          max-width:600px;
          margin:0;
        }
        .mobile-promo-tags{
          display:flex;
          flex-wrap:wrap;
          gap:9px;
        }
        .mobile-promo-tags span{
          min-height:36px;
          padding:0 12px;
          border-radius:999px;
          display:inline-flex;
          align-items:center;
          background:rgba(255,255,255,.06);
          border:1px solid rgba(255,255,255,.07);
          font-size:11px;
          font-weight:900;
        }
        .mobile-promo-btn{
          justify-self:start;
          min-height:54px;
          padding:0 22px;
          border-radius:16px;
          display:inline-flex;
          align-items:center;
          text-decoration:none;
          background:var(--accent);
          color:#081016;
          font-weight:1000;
        }
        .mobile-promo-phone{
          display:grid;
          place-items:center;
        }
        .mobile-promo-phone-screen{
          width:min(90%,350px);
          min-height:520px;
          border-radius:38px;
          padding:14px;
          background:linear-gradient(180deg,#f8fbff,#edf3fa);
          border:6px solid rgba(67,132,218,.76);
          box-shadow:0 30px 80px rgba(0,0,0,.34);
          display:grid;
          grid-template-rows:1fr auto;
          gap:14px;
        }
        .mobile-promo-photo{
          position:relative;
          border-radius:26px;
          overflow:hidden;
          min-height:360px;
        }
        .mobile-promo-photo .fitness-photo{
          position:absolute!important;
          inset:0;
        }
        .mobile-promo-panel{
          border-radius:24px;
          padding:16px;
          background:#fff;
          color:#101724;
          display:grid;
          gap:8px;
        }
        .mobile-promo-panel strong{ font-size:22px; }
        .mobile-promo-progress{
          height:9px;
          border-radius:999px;
          background:#e5ebf2;
          overflow:hidden;
        }
        .mobile-promo-progress span{
          display:block;
          width:74%;
          height:100%;
          background:linear-gradient(90deg,#87ff00,var(--accent));
        }
        @media(max-width:920px){
          .mobile-promo{ grid-template-columns:1fr; }
        }
        @media(max-width:620px){
          .mobile-promo{ border-radius:28px; padding:18px; min-height:auto; }
          .mobile-promo-phone-screen{ width:min(100%,320px); min-height:470px; }
          .mobile-promo-photo{ min-height:320px; }
        }
      `}</style>
    </section>
  );
}

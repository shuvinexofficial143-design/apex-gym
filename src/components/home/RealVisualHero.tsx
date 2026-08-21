import Link from "next/link";
import { FitnessPhoto } from "./FitnessPhoto";

const heroImage =
  "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1400&q=85";

export function RealVisualHero() {
  return (
    <section className="rv-hero">
      <div className="rv-hero-bg">
        <FitnessPhoto src={heroImage} alt="Athlete training in a premium gym" priority className="rv-hero-photo" />
        <div className="rv-hero-overlay" />
      </div>

      <div className="section-shell rv-hero-inner">
        <div className="rv-copy">
          <div className="eyebrow">APEX PERFORMANCE CLUB</div>

          <h1 className="rv-title">
            Train hard.
            <br />
            <span className="accent">Look stronger.</span>
          </h1>

          <p className="rv-subtitle">
            Premium coaching, AI-assisted planning, nutrition, recovery and a member app designed around
            visible progress.
          </p>

          <div className="rv-actions">
            <Link href="/free-trial" className="rv-primary">Start Free Trial</Link>
            <Link href="/member/ai" className="rv-secondary">Try APEX AI</Link>
          </div>

          <div className="rv-proof">
            <div><strong>18+</strong><span>Coaches</span></div>
            <div><strong>90+</strong><span>Weekly sessions</span></div>
            <div><strong>4.9★</strong><span>Member rating</span></div>
          </div>
        </div>

        <div className="rv-phone-wrap">
          <div className="rv-phone">
            <div className="rv-phone-top">
              <span>9:30</span>
              <span className="rv-notch" />
              <span>●●●</span>
            </div>

            <div style={{ padding: "20px 16px 0" }}>
              <div className="rv-app-label">TODAY</div>
              <h2 style={{ margin: "7px 0 0", fontSize: 31, lineHeight: 1.05 }}>Upper Strength</h2>
            </div>

            <div className="rv-session-image">
              <FitnessPhoto
                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=85"
                alt="Strength training"
              />
              <span className="rv-session-pill">60 MIN</span>
            </div>

            <div className="rv-progress-box">
              <div className="rv-progress-row">
                <span>Weekly target</span><strong>4 / 5</strong>
              </div>
              <div className="rv-progress-track"><span /></div>
            </div>

            <div className="rv-bottom-nav">
              <span>Plan</span>
              <span className="active">Workout</span>
              <span>Food</span>
              <span>Mind</span>
              <span>Profile</span>
            </div>
          </div>

          <div className="rv-floating rv-floating-a">
            <span className="rv-floating-kicker">AI COACH</span>
            <strong>Personal plan ready</strong>
          </div>

          <div className="rv-floating rv-floating-b">
            <span className="rv-floating-kicker">PROGRESS</span>
            <strong>+12% this month</strong>
          </div>
        </div>
      </div>

      <style>{`
        .rv-hero{
          position:relative;
          min-height:920px;
          overflow:hidden;
          background:#05070a;
        }
        .rv-hero-bg{
          position:absolute;
          inset:0;
        }
        .fitness-photo{
          position:relative;
          overflow:hidden;
        }
        .rv-hero-photo{
          position:absolute!important;
          inset:0;
        }
        .rv-hero-overlay{
          position:absolute;
          inset:0;
          background:
            linear-gradient(90deg, rgba(3,5,8,.98) 0%, rgba(3,5,8,.9) 38%, rgba(3,5,8,.26) 68%, rgba(3,5,8,.74) 100%),
            linear-gradient(180deg, rgba(5,7,10,.12), rgba(5,7,10,.84) 88%);
        }
        .rv-hero-inner{
          position:relative;
          z-index:2;
          min-height:920px;
          display:grid;
          grid-template-columns:1.05fr .95fr;
          align-items:center;
          gap:28px;
          padding-top:108px;
          padding-bottom:54px;
        }
        .rv-copy{
          display:grid;
          gap:19px;
          max-width:760px;
        }
        .rv-title{
          font-size:clamp(58px,9vw,126px);
          line-height:.84;
          letter-spacing:-.065em;
          margin:0;
          text-transform:uppercase;
        }
        .rv-subtitle{
          max-width:640px;
          color:#c1c5cc;
          font-size:18px;
          line-height:1.75;
          margin:0;
        }
        .rv-actions{
          display:flex;
          flex-wrap:wrap;
          gap:12px;
        }
        .rv-primary,.rv-secondary{
          min-height:58px;
          padding:0 24px;
          border-radius:17px;
          display:inline-flex;
          align-items:center;
          justify-content:center;
          text-decoration:none;
          font-weight:1000;
        }
        .rv-primary{
          background:var(--accent);
          color:#091016;
          box-shadow:0 20px 50px rgba(217,255,0,.15);
        }
        .rv-secondary{
          background:rgba(8,10,14,.72);
          border:1px solid rgba(255,255,255,.13);
          color:#fff;
          backdrop-filter:blur(16px);
        }
        .rv-proof{
          display:flex;
          gap:28px;
          flex-wrap:wrap;
          padding-top:10px;
        }
        .rv-proof div{
          display:grid;
          gap:5px;
        }
        .rv-proof strong{
          font-size:30px;
          line-height:1;
        }
        .rv-proof span{
          color:#9fa6b0;
          font-size:11px;
          letter-spacing:.12em;
          text-transform:uppercase;
          font-weight:900;
        }
        .rv-phone-wrap{
          position:relative;
          display:grid;
          place-items:center;
          min-height:720px;
        }
        .rv-phone{
          width:min(82%,390px);
          min-height:660px;
          border-radius:46px;
          background:linear-gradient(180deg,#f9fbff,#eef3fa);
          color:#09101a;
          border:7px solid rgba(73,132,212,.75);
          box-shadow:
            0 30px 90px rgba(0,0,0,.48),
            0 0 80px rgba(58,126,255,.12);
          overflow:hidden;
          display:grid;
          grid-template-rows:auto auto auto auto 1fr;
          position:relative;
        }
        .rv-phone-top{
          min-height:44px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          padding:0 17px;
          color:#5b6470;
          font-size:11px;
          font-weight:900;
        }
        .rv-notch{
          width:94px;
          height:10px;
          border-radius:999px;
          background:#10151d;
        }
        .rv-app-label{
          color:#4d6a92;
          font-size:11px;
          font-weight:1000;
          letter-spacing:.12em;
        }
        .rv-session-image{
          height:270px;
          margin:18px 16px 0;
          border-radius:28px;
          position:relative;
          overflow:hidden;
        }
        .rv-session-image .fitness-photo{
          position:absolute;
          inset:0;
        }
        .rv-session-pill{
          position:absolute;
          left:14px;
          bottom:14px;
          min-height:34px;
          padding:0 12px;
          border-radius:999px;
          display:inline-flex;
          align-items:center;
          background:var(--accent);
          color:#091016;
          font-weight:1000;
          font-size:11px;
        }
        .rv-progress-box{
          margin:14px 16px 0;
          padding:16px;
          border-radius:22px;
          background:#fff;
          border:1px solid rgba(30,49,75,.08);
        }
        .rv-progress-row{
          display:flex;
          justify-content:space-between;
          gap:12px;
          color:#344155;
          font-size:12px;
        }
        .rv-progress-track{
          height:9px;
          margin-top:11px;
          border-radius:999px;
          background:#e4eaf2;
          overflow:hidden;
        }
        .rv-progress-track span{
          display:block;
          width:80%;
          height:100%;
          background:linear-gradient(90deg,#87ff00,var(--accent));
        }
        .rv-bottom-nav{
          margin-top:auto;
          display:flex;
          justify-content:space-between;
          gap:6px;
          padding:20px 16px 22px;
          color:#5c6676;
          font-size:11px;
          font-weight:900;
        }
        .rv-bottom-nav .active{ color:#2577f4; }
        .rv-floating{
          position:absolute;
          min-width:180px;
          padding:14px 16px;
          border-radius:20px;
          background:rgba(8,12,18,.78);
          border:1px solid rgba(255,255,255,.09);
          backdrop-filter:blur(18px);
          box-shadow:0 18px 45px rgba(0,0,0,.28);
          display:grid;
          gap:6px;
        }
        .rv-floating-kicker{
          color:var(--accent);
          font-size:10px;
          font-weight:1000;
          letter-spacing:.14em;
        }
        .rv-floating-a{ right:0; top:110px; }
        .rv-floating-b{ left:0; bottom:120px; }

        @media(max-width:1040px){
          .rv-hero-inner{ grid-template-columns:1fr; }
          .rv-copy{ padding-top:30px; }
          .rv-phone-wrap{ min-height:700px; }
        }
        @media(max-width:680px){
          .rv-hero{ min-height:auto; }
          .rv-hero-inner{
            min-height:auto;
            padding-top:100px;
            grid-template-columns:1fr;
          }
          .rv-title{ font-size:clamp(48px,15vw,78px); }
          .rv-subtitle{ font-size:15px; }
          .rv-proof{ gap:18px; }
          .rv-proof strong{ font-size:25px; }
          .rv-phone-wrap{ min-height:620px; }
          .rv-phone{
            width:min(100%,332px);
            min-height:570px;
            border-radius:36px;
          }
          .rv-session-image{ height:205px; }
          .rv-floating{
            min-width:unset;
            max-width:150px;
            padding:11px 12px;
          }
          .rv-floating-a{ right:-2px; top:68px; }
          .rv-floating-b{ left:-2px; bottom:52px; }
        }
      `}</style>
    </section>
  );
}

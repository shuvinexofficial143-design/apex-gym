import Link from "next/link";

export function AppHero() {
  return (
    <section className="section-shell hero-shell" style={{ paddingTop: 28, overflowX: "clip" }}>
      <div className="hero-grid">
        <div style={{ display: "grid", gap: 18, alignSelf: "center" }}>
          <div className="eyebrow">APP-FIRST FITNESS EXPERIENCE</div>

          <h1
            style={{
              fontSize: "clamp(44px, 9vw, 118px)",
              lineHeight: 0.92,
              margin: 0,
              letterSpacing: "-.05em",
              maxWidth: 760,
            }}
          >
            <span>TRAIN</span>
            <br />
            <span>SMART.</span>
            <br />
            <span className="accent">LOOK</span>
            <span> PREMIUM.</span>
          </h1>

          <p className="muted" style={{ maxWidth: 680, lineHeight: 1.8, fontSize: 17 }}>
            APEX GYM now feels more like a modern fitness app launch page—visual, energetic and packed with
            workout, nutrition, recovery and transformation storytelling.
          </p>

          <div className="hero-cta-row">
            <Link href="/free-trial" className="hero-primary-btn">
              Start Free Trial
            </Link>
            <Link href="/programs" className="hero-secondary-btn">
              Explore Programs
            </Link>
          </div>

          <div className="hero-mini-stats">
            <StatCard value="24/7" label="digital coaching" />
            <StatCard value="18+" label="expert coaches" />
            <StatCard value="90+" label="sessions weekly" />
          </div>
        </div>

        <div className="hero-visual-wrap">
          <div className="hero-orb hero-orb-a" />
          <div className="hero-orb hero-orb-b" />
          <div className="hero-phone">
            <div className="hero-phone-top">
              <div>
                <div style={{ fontSize: 13, color: "var(--muted)" }}>My Plan</div>
                <div style={{ fontSize: 34, fontWeight: 1000, lineHeight: 1.05 }}>Workout Studio</div>
              </div>
              <div className="hero-avatar-circle">AI</div>
            </div>

            <div className="hero-workout-grid">
              <article className="hero-workout-card">
                <div className="hero-thumb hero-thumb-a" />
                <div className="hero-workout-title">HIIT, Cardio</div>
              </article>
              <article className="hero-workout-card">
                <div className="hero-thumb hero-thumb-b" />
                <div className="hero-workout-title">Yoga, Stretching</div>
              </article>
              <article className="hero-workout-card">
                <div className="hero-thumb hero-thumb-c" />
                <div className="hero-workout-title">Strength Builder</div>
              </article>
              <article className="hero-workout-card">
                <div className="hero-thumb hero-thumb-d" />
                <div className="hero-workout-title">Warm Up, Recovery</div>
              </article>
            </div>

            <div className="hero-bottom-bar">
              <span>My Plan</span>
              <span className="accent">Workouts</span>
              <span>Food</span>
              <span>Mind</span>
              <span>Profile</span>
            </div>
          </div>

          <div className="hero-float-card hero-float-card-left">
            <div className="hero-float-label">10–30 MIN</div>
            <div className="hero-float-value">Daily workouts</div>
          </div>

          <div className="hero-float-card hero-float-card-right">
            <div className="hero-float-label">TRACK</div>
            <div className="hero-float-value">Body scan & progress</div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-shell{
          position:relative;
        }
        .hero-grid{
          display:grid;
          grid-template-columns:1.02fr .98fr;
          gap:28px;
          align-items:center;
        }
        .hero-cta-row{
          display:flex;
          flex-wrap:wrap;
          gap:14px;
        }
        .hero-primary-btn,
        .hero-secondary-btn{
          min-height:58px;
          padding:0 24px;
          border-radius:18px;
          display:inline-flex;
          align-items:center;
          justify-content:center;
          font-weight:1000;
          text-decoration:none;
        }
        .hero-primary-btn{
          background:var(--accent);
          color:#091015;
          box-shadow:0 20px 44px rgba(217,255,0,.14);
        }
        .hero-secondary-btn{
          border:1px solid var(--line);
          background:#111;
          color:#fff;
        }
        .hero-mini-stats{
          display:grid;
          grid-template-columns:repeat(3,minmax(0,1fr));
          gap:14px;
          margin-top:8px;
        }
        .hero-visual-wrap{
          position:relative;
          min-height:780px;
          display:grid;
          place-items:center;
          overflow:clip;
          border-radius:42px;
          background:
            radial-gradient(circle at 70% 18%, rgba(111,186,255,.25), transparent 24%),
            radial-gradient(circle at 28% 82%, rgba(217,255,0,.18), transparent 25%),
            linear-gradient(180deg, rgba(6,20,42,.92), rgba(7,12,20,.94));
          border:1px solid rgba(111,186,255,.14);
        }
        .hero-orb{
          position:absolute;
          border-radius:50%;
          filter:blur(18px);
          opacity:.85;
        }
        .hero-orb-a{
          width:300px;height:300px;
          right:-60px;top:54px;
          background:radial-gradient(circle, rgba(71,144,255,.42), transparent 68%);
        }
        .hero-orb-b{
          width:360px;height:360px;
          left:-90px;bottom:-40px;
          background:radial-gradient(circle, rgba(217,255,0,.18), transparent 68%);
        }
        .hero-phone{
          width:min(86%,420px);
          min-height:650px;
          border-radius:44px;
          padding:18px 18px 24px;
          background:linear-gradient(180deg, #f4f7fb, #dfe8f5 55%, #edf2f8);
          color:#091015;
          border:7px solid rgba(78,143,225,.75);
          box-shadow:
            0 30px 80px rgba(11,47,104,.42),
            inset 0 0 0 2px rgba(255,255,255,.6);
          display:grid;
          grid-template-rows:auto 1fr auto;
          position:relative;
          z-index:2;
        }
        .hero-phone::before{
          content:"";
          position:absolute;
          top:12px;left:50%;
          transform:translateX(-50%);
          width:92px;height:8px;border-radius:999px;
          background:rgba(6,20,42,.22);
        }
        .hero-phone-top{
          display:flex;
          justify-content:space-between;
          gap:14px;
          align-items:start;
          padding:26px 8px 12px;
        }
        .hero-avatar-circle{
          width:56px;height:56px;border-radius:50%;
          display:grid;place-items:center;
          font-weight:1000;
          background:linear-gradient(135deg,#367dff,#1a2c68);
          color:#fff;
          box-shadow:0 10px 20px rgba(53,96,205,.25);
        }
        .hero-workout-grid{
          display:grid;
          gap:12px;
          padding:4px 6px 0;
        }
        .hero-workout-card{
          background:#fff;
          border-radius:24px;
          border:1px solid rgba(24,39,67,.08);
          overflow:hidden;
          box-shadow:0 12px 30px rgba(17,33,62,.08);
        }
        .hero-thumb{
          height:112px;
        }
        .hero-thumb-a{
          background:linear-gradient(135deg,#2f7cff,#45b4ff 55%, #071731);
        }
        .hero-thumb-b{
          background:linear-gradient(135deg,#f7b478,#fd8cb0 48%, #fff2cb);
        }
        .hero-thumb-c{
          background:linear-gradient(135deg,#95f279,#5ecec2 48%, #0e2445);
        }
        .hero-thumb-d{
          background:linear-gradient(135deg,#80c8ff,#2a6fff 45%, #091528);
        }
        .hero-workout-title{
          font-weight:900;
          padding:14px 16px 16px;
          font-size:19px;
        }
        .hero-bottom-bar{
          display:flex;
          justify-content:space-between;
          gap:6px;
          padding:16px 8px 4px;
          font-size:12px;
          font-weight:900;
          color:#56647c;
        }
        .hero-float-card{
          position:absolute;
          min-width:180px;
          padding:16px 18px;
          border-radius:22px;
          backdrop-filter:blur(16px);
          background:rgba(14,19,28,.72);
          border:1px solid rgba(255,255,255,.08);
          box-shadow:0 18px 45px rgba(0,0,0,.22);
          z-index:3;
        }
        .hero-float-card-left{ left:14px; bottom:80px; }
        .hero-float-card-right{ right:14px; top:96px; }
        .hero-float-label{
          color:var(--accent);
          letter-spacing:.15em;
          text-transform:uppercase;
          font-size:11px;
          font-weight:1000;
          margin-bottom:8px;
        }
        .hero-float-value{
          font-size:18px;
          font-weight:900;
          line-height:1.35;
        }

        @media(max-width:1080px){
          .hero-grid{ grid-template-columns:1fr; }
          .hero-visual-wrap{ min-height:720px; }
        }
        @media(max-width:760px){
          .hero-mini-stats{ grid-template-columns:1fr; }
          .hero-visual-wrap{ min-height:660px; }
          .hero-phone{
            width:min(100%,350px);
            min-height:560px;
            border-radius:34px;
            padding:16px 14px 18px;
          }
          .hero-workout-grid{ gap:10px; }
          .hero-thumb{ height:82px; }
          .hero-workout-title{ font-size:16px;padding:10px 14px 14px; }
          .hero-phone-top{ padding-top:22px; }
          .hero-float-card{
            min-width:unset;
            padding:12px 14px;
            border-radius:18px;
            max-width:140px;
          }
          .hero-float-card-left{ left:8px; bottom:34px; }
          .hero-float-card-right{ right:8px; top:60px; }
        }
      `}</style>
    </section>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <article
      className="glass-card"
      style={{
        padding: 18,
        borderRadius: 22,
        background: "linear-gradient(180deg, rgba(8,12,18,.88), rgba(10,16,26,.94))",
      }}
    >
      <div style={{ fontSize: 34, fontWeight: 1000, lineHeight: 1 }}>{value}</div>
      <div className="muted" style={{ marginTop: 8, fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase" }}>
        {label}
      </div>
    </article>
  );
}

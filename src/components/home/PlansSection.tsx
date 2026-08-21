export function PlansSection({
  days,
  plans,
}: {
  days: string[];
  plans: { title: string; meta: string; copy: string; tags: string[] }[];
}) {
  return (
    <section className="section-shell" style={{ paddingTop: 34 }}>
      <div className="plans-grid">
        <article className="glass-card plans-calendar-card">
          <div className="eyebrow">DAILY TRAINING</div>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 54px)", lineHeight: 1, margin: "8px 0 0" }}>
            10–30 min daily workouts
          </h2>
          <div className="days-grid">
            {days.map((day, index) => (
              <div key={day} className={`day-pill ${index === 8 ? "day-pill-active" : ""}`}>
                <span>{day}</span>
              </div>
            ))}
          </div>

          <div className="calendar-preview">
            <div className="calendar-preview-top">
              <span>09:56</span>
              <span>♥ 132</span>
              <span>24 Cal</span>
            </div>
            <div className="calendar-preview-image" />
          </div>
        </article>

        <article className="glass-card plans-smart-card">
          <div className="eyebrow">SMART PLANS</div>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 54px)", lineHeight: 1, margin: "8px 0 0 0" }}>
            Plans made for you
          </h2>

          <div className="plans-stack">
            {plans.map((plan, index) => (
              <div key={plan.title} className="plan-item">
                <div className={`plan-visual plan-visual-${index + 1}`} />
                <div style={{ display: "grid", gap: 8 }}>
                  <div className="muted" style={{ fontSize: 12, letterSpacing: ".08em", textTransform: "uppercase" }}>
                    {plan.meta}
                  </div>
                  <div style={{ fontWeight: 1000, fontSize: 24, lineHeight: 1.15 }}>{plan.title}</div>
                  <p className="muted" style={{ margin: 0, lineHeight: 1.65 }}>{plan.copy}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {plan.tags.map((tag) => (
                      <span key={tag} className="plan-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>

      <style>{`
        .plans-grid{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:18px;
        }
        .plans-calendar-card,
        .plans-smart-card{
          padding:24px;
          border-radius:36px;
        }
        .plans-calendar-card{
          background:
            radial-gradient(circle at 85% 18%, rgba(52,137,255,.32), transparent 25%),
            linear-gradient(180deg, rgba(4,20,44,.95), rgba(5,12,21,.98));
        }
        .plans-smart-card{
          background:
            radial-gradient(circle at 15% 82%, rgba(217,255,0,.16), transparent 24%),
            linear-gradient(180deg, rgba(5,19,42,.95), rgba(5,12,21,.98));
        }
        .days-grid{
          display:grid;
          grid-template-columns:repeat(4,minmax(0,1fr));
          gap:12px;
          margin-top:20px;
        }
        .day-pill{
          min-height:84px;
          border-radius:24px;
          background:linear-gradient(180deg,#0d3d84,#1958ad 60%, #0b2960);
          display:grid;
          place-items:center;
          font-weight:1000;
          box-shadow:0 12px 24px rgba(18,69,147,.24);
        }
        .day-pill-active{
          background:linear-gradient(180deg,#fff,#edf4ff);
          color:#0b1220;
        }
        .calendar-preview{
          margin-top:18px;
          border-radius:30px;
          padding:16px;
          background:linear-gradient(180deg,#f7fbff,#edf4fb);
          color:#081019;
          min-height:230px;
        }
        .calendar-preview-top{
          display:flex;
          gap:12px;
          flex-wrap:wrap;
          font-weight:900;
          color:#576377;
        }
        .calendar-preview-image{
          margin-top:16px;
          min-height:150px;
          border-radius:22px;
          background:linear-gradient(135deg,#ffffff,#dfeaf9 45%, #9cc7ff);
        }
        .plans-stack{
          display:grid;
          gap:16px;
          margin-top:20px;
        }
        .plan-item{
          display:grid;
          grid-template-columns:150px 1fr;
          gap:16px;
          padding:16px;
          border-radius:26px;
          background:rgba(255,255,255,.03);
          border:1px solid rgba(255,255,255,.06);
        }
        .plan-visual{
          min-height:150px;
          border-radius:22px;
        }
        .plan-visual-1{
          background:linear-gradient(135deg,#dbe7f4,#97bcff 42%, #2d63cf);
        }
        .plan-visual-2{
          background:linear-gradient(135deg,#ffe6b8,#fdd692 42%, #f48c3f);
        }
        .plan-visual-3{
          background:linear-gradient(135deg,#dce7f9,#9bd2ff 42%, #4c8fff);
        }
        .plan-tag{
          min-height:32px;
          padding:0 12px;
          display:inline-flex;
          align-items:center;
          border-radius:999px;
          background:rgba(255,255,255,.08);
          border:1px solid rgba(255,255,255,.06);
          font-size:12px;
          font-weight:900;
        }
        @media(max-width:1080px){
          .plans-grid{ grid-template-columns:1fr; }
        }
        @media(max-width:760px){
          .plans-calendar-card,.plans-smart-card{ padding:18px; border-radius:28px; }
          .days-grid{ grid-template-columns:repeat(3,minmax(0,1fr)); }
          .plan-item{ grid-template-columns:1fr; }
          .plan-visual{ min-height:180px; }
        }
      `}</style>
    </section>
  );
}

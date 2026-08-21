import Image from "next/image";

type Slide = {
  id: string;
  eyebrow: string;
  title: string;
  badge: string;
  variant: string;
  image: string;
};

export function ReferencePromoSection({ slide }: { slide: Slide }) {
  return (
    <section className="rp-section">
      <div className="rp-inner">
        <div className="rp-heading">
          <span>{slide.eyebrow}</span>
          <h2>{slide.title}</h2>
        </div>

        <div className="rp-stage">
          <div className="rp-phone">
            <div className="rp-phone-top"><span>9:30</span><b>●</b><span>•••</span></div>

            <div className="rp-screen">
              <h3>{screenTitle(slide.variant)}</h3>
              <p>{screenSub(slide.variant)}</p>

              {slide.variant === "daily" ? (
                <div className="rp-days">
                  {["1","2","3","4","8","9","10","11","TODAY","16","17","18"].map((d) => (
                    <div className={d === "TODAY" ? "today" : ""} key={d}>{d}</div>
                  ))}
                </div>
              ) : null}

              {slide.variant === "workout" ? (
                <div className="rp-list">
                  {["Strength","HIIT, Cardio","Yoga, Stretching","Warm Up, Recovery"].map((x) => (
                    <div className="rp-row" key={x}>
                      <strong>{x}</strong>
                      <div className="rp-thumb"><Image src={slide.image} alt={x} fill sizes="72px" /></div>
                    </div>
                  ))}
                </div>
              ) : null}

              {slide.variant === "body" ? (
                <div className="rp-body">
                  <div className="rp-silhouette" />
                  <div className="rp-ring r1" />
                  <div className="rp-ring r2" />
                  <div className="rp-ring r3" />
                  <div className="rp-metric m1">BODY FAT<strong>16.1%</strong></div>
                  <div className="rp-metric m2">LEAN MASS<strong>53.6 kg</strong></div>
                </div>
              ) : null}

              {slide.variant === "food" ? (
                <>
                  <div className="rp-food-grid">
                    <div className="rp-image"><Image src={slide.image} alt="Healthy meal" fill sizes="140px" /></div>
                    <div className="rp-image"><Image src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=85" alt="Recipe" fill sizes="140px" /></div>
                  </div>
                  <div className="rp-green-banner">Snap your meal for instant insights</div>
                  <div className="rp-cats">{["Breakfast","Lunch","Dinner","Low Calories","Vegetarian","High Protein"].map((x)=><span key={x}>{x}</span>)}</div>
                </>
              ) : null}

              {slide.variant === "mind" ? (
                <>
                  <div className="rp-mind-grid">
                    <div><i /><strong>Focusing to Sleep</strong></div>
                    <div><i /><strong>Deep Relaxation</strong></div>
                  </div>
                  <div className="rp-cats">{["Stress Relief","Focus","Positivity","Energy","Growth","Relax"].map((x)=><span key={x}>{x}</span>)}</div>
                </>
              ) : null}

              {!["daily","workout","body","food","mind"].includes(slide.variant) ? (
                <>
                  <div className="rp-main-image"><Image src={slide.image} alt={slide.title} fill sizes="300px" /></div>
                  <div className="rp-card">
                    <span className="rp-chip">{slide.variant === "plan" ? "Your Personal Plan" : "APEX Progress"}</span>
                    <strong>{slide.variant === "plan" ? "Muscle & Strength Starter" : "Your transformation"}</strong>
                    <small>{slide.variant === "plan" ? "12 Weeks • Strength • Cardio" : "Progress • Strength • Consistency"}</small>
                  </div>
                </>
              ) : null}
            </div>

            <div className="rp-nav">
              <span>My Plan</span><span>Workouts</span><span>Food</span><span>Mind</span><span>Profile</span>
            </div>
          </div>

          <div className="rp-badge"><span>{slide.badge}</span></div>
        </div>
      </div>

      <style>{`
        .rp-section{
          min-height:900px;
          overflow:hidden;
          background:linear-gradient(180deg,#03172d 0%,#03172d 24%,#0c63c2 62%,#2198ff 100%);
          position:relative;
        }
        .rp-section:after{
          content:"";position:absolute;left:50%;bottom:-220px;transform:translateX(-50%);
          width:820px;height:520px;border-radius:50%;
          background:radial-gradient(circle,rgba(106,193,255,.7),rgba(35,146,255,.2) 48%,transparent 72%);
          filter:blur(20px)
        }
        .rp-inner{
          width:min(calc(100% - 36px),1080px);
          min-height:900px;margin:0 auto;
          display:grid;grid-template-columns:.8fr 1.2fr;gap:24px;
          align-items:center;padding:58px 0;position:relative;z-index:2
        }
        .rp-heading span{
          color:#7bc2ff;font-size:11px;font-weight:1000;letter-spacing:.16em
        }
        .rp-heading h2{
          font-size:clamp(52px,6.5vw,86px);line-height:.93;letter-spacing:-.055em;
          margin:13px 0 0;max-width:480px
        }
        .rp-stage{min-height:700px;display:grid;place-items:center;position:relative}
        .rp-phone{
          width:min(82vw,360px);height:620px;border-radius:45px;
          border:7px solid rgba(82,154,244,.84);
          background:linear-gradient(180deg,#f7fbff,#edf3f9);
          color:#111923;overflow:hidden;display:grid;grid-template-rows:40px 1fr 58px;
          box-shadow:0 28px 60px rgba(0,29,74,.42),0 0 80px rgba(70,147,255,.22)
        }
        .rp-phone-top{display:flex;justify-content:space-between;align-items:center;padding:0 18px;color:#596473;font-size:11px;font-weight:900}
        .rp-screen{padding:10px 15px 8px;overflow:hidden;display:grid;align-content:start;gap:11px}
        .rp-screen h3{font-size:31px;line-height:1;margin:0}
        .rp-screen p{margin:-4px 0 2px;color:#818b98;font-size:11px}
        .rp-main-image,.rp-image,.rp-thumb{position:relative;overflow:hidden}
        .rp-main-image{min-height:255px;border-radius:22px}
        .rp-main-image img,.rp-image img,.rp-thumb img{object-fit:cover}
        .rp-card{background:#fff;border-radius:20px;padding:13px;display:grid;gap:6px;border:1px solid rgba(34,55,84,.07)}
        .rp-card strong{font-size:18px}
        .rp-card small{color:#7a8491}
        .rp-chip{justify-self:start;padding:7px 9px;border-radius:999px;background:#a7ff23;font-size:9px;font-weight:1000}
        .rp-nav{display:flex;justify-content:space-between;align-items:center;padding:0 13px;color:#697484;font-size:9px;font-weight:900;background:#f8fbff}
        .rp-badge{
          position:absolute;right:4%;top:5%;width:100px;height:100px;border-radius:50%;
          background:linear-gradient(135deg,#2d8dff,#0b4fa4);padding:8px;box-shadow:0 18px 44px rgba(0,54,130,.4)
        }
        .rp-badge span{
          width:100%;height:100%;border-radius:50%;display:grid;place-items:center;color:#fff;
          font-size:29px;font-weight:1000;background:#1365bd;border:6px solid rgba(255,255,255,.14);
          box-shadow:inset 0 0 0 4px #a4ff28
        }
        .rp-days{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}
        .rp-days div{
          height:70px;border-radius:18px;background:linear-gradient(180deg,#124685,#1761b5 55%,#0b356e);
          color:#fff;display:grid;place-items:center;font-size:10px;font-weight:1000
        }
        .rp-days .today{background:#fff;color:#111923;border:2px solid #3994ff}
        .rp-list{display:grid;gap:8px}
        .rp-row{min-height:72px;border-radius:15px;background:#fff;padding:9px 11px;display:grid;grid-template-columns:1fr 72px;gap:9px;align-items:center}
        .rp-thumb{height:54px;border-radius:12px}
        .rp-body{height:360px;position:relative}
        .rp-silhouette{
          position:absolute;left:50%;top:15px;transform:translateX(-50%);
          width:175px;height:300px;border-radius:48% 48% 44% 44%/16% 16% 20% 20%;
          background:linear-gradient(180deg,#fff,#e7edf4)
        }
        .rp-ring{position:absolute;left:50%;transform:translateX(-50%);border:3px solid #9cff1c;border-left-color:transparent;border-right-color:transparent;border-radius:50%}
        .rp-ring.r1{width:148px;height:24px;top:126px}.rp-ring.r2{width:116px;height:20px;top:205px}.rp-ring.r3{width:74px;height:16px;bottom:38px}
        .rp-metric{position:absolute;min-width:110px;padding:9px;border-radius:14px;background:#101820;color:#fff;font-size:8px}
        .rp-metric strong{font-size:18px;display:block}.rp-metric.m1{left:0;top:145px}.rp-metric.m2{right:0;top:225px}
        .rp-food-grid,.rp-mind-grid{display:grid;grid-template-columns:1fr 1fr;gap:9px}
        .rp-image{height:150px;border-radius:18px}
        .rp-green-banner{min-height:82px;border-radius:20px;background:#a7ff23;padding:14px;display:grid;align-items:center;font-weight:1000}
        .rp-cats{display:grid;grid-template-columns:1fr 1fr;gap:7px}
        .rp-cats span{padding:9px;border-radius:12px;background:#fff;font-size:9px;font-weight:900}
        .rp-mind-grid>div{background:#fff;border-radius:17px;overflow:hidden}
        .rp-mind-grid i{display:block;height:100px;background:radial-gradient(circle at 40% 45%,#fde9ff,#c9f4d8 35%,#b7d7ff 70%,#fff)}
        .rp-mind-grid strong{display:block;padding:9px;font-size:9px}
        @media(max-width:900px){
          .rp-inner{grid-template-columns:1fr;text-align:center;align-content:start;padding-top:48px}
          .rp-heading{display:grid;justify-items:center}
          .rp-stage{min-height:650px}
          .rp-badge{right:calc(50% - 180px);top:1%}
        }
        @media(max-width:520px){
          .rp-section,.rp-inner{min-height:830px}
          .rp-inner{width:min(calc(100% - 22px),1080px);padding-top:42px}
          .rp-heading h2{font-size:clamp(39px,10.8vw,52px);max-width:360px}
          .rp-stage{min-height:595px}
          .rp-phone{width:min(86vw,330px);height:570px;border-radius:39px}
          .rp-screen h3{font-size:28px}
          .rp-badge{width:86px;height:86px;right:calc(50% - 163px)}
          .rp-badge span{font-size:23px}
        }
      `}</style>
    </section>
  );
}

function screenTitle(variant: string) {
  if (variant === "plan") return "Select a fitness plan!";
  if (variant === "daily") return "Daily streak";
  if (variant === "workout") return "Workouts";
  if (variant === "body") return "AI-powered body scanner";
  if (variant === "food") return "Cookbook";
  if (variant === "mind") return "Mind";
  return "Your transformation";
}

function screenSub(variant: string) {
  if (variant === "plan") return "All plans are personalized for you.";
  if (variant === "food") return "Healthy recipes and instant insights.";
  if (variant === "mind") return "Get inspired • recover better.";
  if (variant === "body") return "Track more than body weight.";
  return "Built around your APEX member journey.";
}

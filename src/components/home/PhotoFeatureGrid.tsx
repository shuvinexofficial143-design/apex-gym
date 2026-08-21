import { FitnessPhoto } from "./FitnessPhoto";

const features = [
  {
    title: "Strength that shows",
    copy: "Progressive plans, coach guidance and performance tracking.",
    label: "STRENGTH",
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Train with expert coaches",
    copy: "Personal training, class booking and workout feedback in one member journey.",
    label: "COACHING",
    src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Nutrition that fits real life",
    copy: "Meal structure, calorie targets, protein tracking and AI-assisted suggestions.",
    label: "NUTRITION",
    src: "https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Recovery is part of progress",
    copy: "Mobility, recovery sessions and smarter training load decisions.",
    label: "RECOVERY",
    src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=85",
  },
];

export function PhotoFeatureGrid() {
  return (
    <section className="section-shell">
      <div className="eyebrow">VISUAL FITNESS SYSTEM</div>
      <h2 className="pfg-title">Everything feels like part of one premium app.</h2>

      <div className="pfg-grid">
        {features.map((feature, index) => (
          <article key={feature.title} className={`pfg-card pfg-card-${index + 1}`}>
            <FitnessPhoto src={feature.src} alt={feature.title} className="pfg-photo" />
            <div className="pfg-overlay" />
            <div className="pfg-copy">
              <span className="pfg-label">{feature.label}</span>
              <h3>{feature.title}</h3>
              <p>{feature.copy}</p>
            </div>
          </article>
        ))}
      </div>

      <style>{`
        .pfg-title{
          font-size:clamp(34px,6vw,64px);
          line-height:1;
          max-width:900px;
          margin:12px 0 26px;
        }
        .pfg-grid{
          display:grid;
          grid-template-columns:1.2fr .8fr;
          grid-template-rows:360px 360px;
          gap:16px;
        }
        .pfg-card{
          position:relative;
          overflow:hidden;
          border-radius:34px;
          min-width:0;
          border:1px solid rgba(255,255,255,.08);
        }
        .pfg-card-1{ grid-row:span 2; }
        .pfg-photo{
          position:absolute!important;
          inset:0;
        }
        .pfg-overlay{
          position:absolute;
          inset:0;
          background:linear-gradient(180deg, rgba(0,0,0,.04), rgba(0,0,0,.7) 72%, rgba(0,0,0,.93));
        }
        .pfg-copy{
          position:absolute;
          inset:auto 0 0;
          z-index:2;
          padding:24px;
        }
        .pfg-label{
          color:var(--accent);
          font-size:10px;
          letter-spacing:.15em;
          font-weight:1000;
        }
        .pfg-copy h3{
          font-size:clamp(26px,3vw,44px);
          line-height:1.02;
          margin:9px 0;
        }
        .pfg-copy p{
          margin:0;
          max-width:540px;
          color:#c4c9d0;
          line-height:1.65;
        }
        @media(max-width:920px){
          .pfg-grid{
            grid-template-columns:1fr;
            grid-template-rows:auto;
          }
          .pfg-card,.pfg-card-1{
            grid-row:auto;
            min-height:420px;
          }
        }
        @media(max-width:620px){
          .pfg-card,.pfg-card-1{ min-height:330px; border-radius:26px; }
          .pfg-copy{ padding:18px; }
        }
      `}</style>
    </section>
  );
}

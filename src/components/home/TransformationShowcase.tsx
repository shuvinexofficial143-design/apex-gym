import { FitnessPhoto } from "./FitnessPhoto";

export function TransformationShowcase() {
  return (
    <section className="section-shell">
      <div className="transform-wrap">
        <div className="transform-copy">
          <div className="eyebrow">VISIBLE PROGRESS</div>
          <h2>Track more than just weight.</h2>
          <p>
            Combine body metrics, progress photos, strength records and training consistency in one visual story.
          </p>

          <div className="transform-stats">
            <div><strong>-6.4 kg</strong><span>sample change</span></div>
            <div><strong>+22%</strong><span>strength trend</span></div>
            <div><strong>84%</strong><span>plan adherence</span></div>
          </div>
        </div>

        <div className="transform-images">
          <div className="transform-image-card transform-before">
            <FitnessPhoto
              src="https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&w=900&q=85"
              alt="Fitness progress before training"
            />
            <span>BEFORE</span>
          </div>
          <div className="transform-image-card transform-after">
            <FitnessPhoto
              src="https://images.unsplash.com/photo-1584863231364-2edc166de576?auto=format&fit=crop&w=900&q=85"
              alt="Fitness progress after training"
            />
            <span>AFTER</span>
          </div>
        </div>
      </div>

      <style>{`
        .transform-wrap{
          display:grid;
          grid-template-columns:.86fr 1.14fr;
          gap:18px;
          border-radius:38px;
          padding:26px;
          background:
            radial-gradient(circle at 12% 20%, rgba(217,255,0,.12), transparent 24%),
            linear-gradient(135deg,#071427,#08101d 48%,#05080d);
          border:1px solid rgba(255,255,255,.07);
        }
        .transform-copy{
          display:grid;
          gap:16px;
          align-content:center;
        }
        .transform-copy h2{
          font-size:clamp(38px,6vw,68px);
          line-height:.96;
          margin:0;
        }
        .transform-copy p{
          color:#bcc3cc;
          line-height:1.75;
          margin:0;
        }
        .transform-stats{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:10px;
          margin-top:8px;
        }
        .transform-stats div{
          padding:14px;
          border-radius:18px;
          background:rgba(255,255,255,.04);
          border:1px solid rgba(255,255,255,.05);
          display:grid;
          gap:5px;
        }
        .transform-stats strong{ font-size:22px; }
        .transform-stats span{
          color:#aeb5c0;
          font-size:10px;
          text-transform:uppercase;
          letter-spacing:.08em;
        }
        .transform-images{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:12px;
          min-height:560px;
        }
        .transform-image-card{
          position:relative;
          border-radius:30px;
          overflow:hidden;
        }
        .transform-image-card .fitness-photo{
          position:absolute!important;
          inset:0;
        }
        .transform-image-card::after{
          content:"";
          position:absolute;inset:0;
          background:linear-gradient(180deg, transparent 55%, rgba(0,0,0,.78));
        }
        .transform-image-card span{
          position:absolute;
          left:16px;bottom:16px;
          z-index:2;
          padding:9px 12px;
          border-radius:999px;
          background:rgba(7,10,15,.72);
          color:#fff;
          font-size:10px;
          font-weight:1000;
          letter-spacing:.13em;
        }
        .transform-after span{
          background:var(--accent);
          color:#071017;
        }
        @media(max-width:980px){
          .transform-wrap{ grid-template-columns:1fr; }
        }
        @media(max-width:640px){
          .transform-wrap{ padding:18px; border-radius:28px; }
          .transform-stats{ grid-template-columns:1fr; }
          .transform-images{ min-height:430px; }
        }
      `}</style>
    </section>
  );
}

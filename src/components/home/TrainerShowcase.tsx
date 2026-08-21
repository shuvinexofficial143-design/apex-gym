import Link from "next/link";
import { FitnessPhoto } from "./FitnessPhoto";

const trainers = [
  {
    name: "Arjun",
    specialty: "Strength & Hypertrophy",
    src: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Maya",
    specialty: "HIIT & Conditioning",
    src: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Kabir",
    specialty: "Mobility & Performance",
    src: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=85",
  },
];

export function TrainerShowcase() {
  return (
    <section className="section-shell">
      <div className="trainer-head">
        <div>
          <div className="eyebrow">EXPERT COACHES</div>
          <h2>Real people behind the progress.</h2>
        </div>
        <Link href="/trainers" className="trainer-link">View all trainers →</Link>
      </div>

      <div className="trainer-grid">
        {trainers.map((trainer) => (
          <article key={trainer.name} className="trainer-card">
            <FitnessPhoto src={trainer.src} alt={`${trainer.name} trainer`} className="trainer-photo" />
            <div className="trainer-overlay" />
            <div className="trainer-copy">
              <h3>{trainer.name}</h3>
              <p>{trainer.specialty}</p>
            </div>
          </article>
        ))}
      </div>

      <style>{`
        .trainer-head{
          display:flex;
          justify-content:space-between;
          align-items:end;
          gap:20px;
          margin-bottom:24px;
        }
        .trainer-head h2{
          font-size:clamp(34px,6vw,64px);
          line-height:1;
          margin:10px 0 0;
        }
        .trainer-link{
          color:var(--accent);
          font-weight:1000;
          text-decoration:none;
          white-space:nowrap;
        }
        .trainer-grid{
          display:grid;
          grid-template-columns:repeat(3,minmax(0,1fr));
          gap:16px;
        }
        .trainer-card{
          min-height:510px;
          border-radius:32px;
          position:relative;
          overflow:hidden;
          border:1px solid rgba(255,255,255,.08);
        }
        .trainer-photo{
          position:absolute!important;
          inset:0;
        }
        .trainer-overlay{
          position:absolute;
          inset:0;
          background:linear-gradient(180deg, transparent 40%, rgba(0,0,0,.88) 100%);
        }
        .trainer-copy{
          position:absolute;
          left:0; right:0; bottom:0;
          padding:22px;
          z-index:2;
        }
        .trainer-copy h3{
          font-size:34px;
          margin:0;
        }
        .trainer-copy p{
          color:#c4c9d0;
          margin:7px 0 0;
        }
        @media(max-width:900px){
          .trainer-grid{ grid-template-columns:1fr 1fr; }
          .trainer-card:last-child{ grid-column:span 2; }
        }
        @media(max-width:620px){
          .trainer-head{ align-items:start; flex-direction:column; }
          .trainer-grid{ grid-template-columns:1fr; }
          .trainer-card,.trainer-card:last-child{ grid-column:auto; min-height:410px; }
        }
      `}</style>
    </section>
  );
}

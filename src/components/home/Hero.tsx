import { Button } from "@/components/ui/Button";
import { AnimatedHeroBackground } from "./AnimatedHeroBackground";
import { HeroStatsPanel } from "./HeroStatsPanel";
import { HeroScrollCue } from "./HeroScrollCue";

export function Hero() {
  return (
    <section
      className="apex-hero"
      style={{
        minHeight: "100svh",
        paddingTop: 76,
        display: "grid",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <AnimatedHeroBackground />

      <div
        className="container apex-hero__layout"
        style={{
          display: "grid",
          gridTemplateColumns: "1.14fr .86fr",
          gap: 42,
          alignItems: "end",
          position: "relative",
          zIndex: 1,
          paddingTop: 44,
          paddingBottom: 58,
        }}
      >
        <div className="apex-hero__copy">
          <div className="eyebrow apex-hero__eyebrow">Built for stronger humans</div>

          <h1 className="apex-hero__title">
            <span className="apex-hero__word apex-hero__word--1">Train</span>
            <span className="apex-hero__word apex-hero__word--2">Hard.</span>
            <span className="apex-hero__word apex-hero__word--3 accent">Live</span>
            <span className="apex-hero__word apex-hero__word--4 accent">Stronger.</span>
          </h1>

          <p className="muted apex-hero__description">
            Premium strength training, elite coaching, intelligent programming and a
            member experience designed to keep you progressing every week.
          </p>
        </div>

        <div className="apex-hero__side">
          <HeroStatsPanel />

          <div className="apex-hero__actions">
            <Button href="/free-trial">Start Free Trial</Button>
            <Button href="/programs" variant="ghost">Explore Programs</Button>
          </div>

          <div className="apex-hero__micro">
            <span className="apex-live-dot" />
            LIVE MEMBER EXPERIENCE
          </div>
        </div>
      </div>

      <HeroScrollCue />

      <style>{`
        .apex-hero__title {
          display: flex;
          flex-direction: column;
          width: max-content;
          max-width: 100%;
          margin: 22px 0 0;
          font-size: clamp(66px,9.4vw,138px);
          line-height: .76;
          letter-spacing: -.075em;
          text-transform: uppercase;
        }

        .apex-hero__word {
          display: block;
          opacity: 0;
          transform: translateY(38px);
          animation: apexHeroWordIn .78s cubic-bezier(.2,.8,.2,1) forwards;
        }

        .apex-hero__word--1 { animation-delay: .08s; }
        .apex-hero__word--2 { animation-delay: .18s; }
        .apex-hero__word--3 { animation-delay: .30s; }
        .apex-hero__word--4 { animation-delay: .42s; }

        .apex-hero__eyebrow {
          opacity: 0;
          animation: apexHeroFadeIn .7s ease .06s forwards;
        }

        .apex-hero__description {
          max-width: 620px;
          margin: 32px 0 0;
          font-size: 17px;
          line-height: 1.75;
          opacity: 0;
          transform: translateY(16px);
          animation: apexHeroFadeUp .7s ease .52s forwards;
        }

        .apex-hero__side {
          display: grid;
          align-content: end;
          gap: 18px;
          padding-bottom: 8px;
          opacity: 0;
          transform: translateX(24px);
          animation: apexHeroSideIn .85s cubic-bezier(.2,.8,.2,1) .36s forwards;
        }

        .apex-hero__actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .apex-hero__micro {
          display: flex;
          align-items: center;
          gap: 8px;
          color: rgba(255,255,255,.42);
          font-size: 9px;
          font-weight: 1000;
          letter-spacing: .16em;
        }

        .apex-live-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--accent);
          box-shadow: 0 0 0 0 rgba(223,255,0,.45);
          animation: apexLivePulse 1.8s ease-out infinite;
        }

        @keyframes apexHeroWordIn {
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes apexHeroFadeIn {
          to { opacity: 1; }
        }

        @keyframes apexHeroFadeUp {
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes apexHeroSideIn {
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes apexLivePulse {
          0% { box-shadow: 0 0 0 0 rgba(223,255,0,.42); }
          70% { box-shadow: 0 0 0 9px rgba(223,255,0,0); }
          100% { box-shadow: 0 0 0 0 rgba(223,255,0,0); }
        }

        @media(max-width:900px){
          .apex-hero__layout{
            grid-template-columns:1fr!important;
            padding-top:88px!important;
          }

          .apex-hero__side{
            max-width:620px;
          }

          .apex-hero__title{
            font-size:clamp(64px,14vw,112px);
          }
        }

        @media(max-width:620px){
          .apex-hero__layout{
            padding-bottom:50px!important;
          }

          .apex-hero__title{
            font-size:clamp(56px,18vw,86px);
            line-height:.80;
          }

          .apex-hero__description{
            font-size:15px;
            margin-top:24px;
          }
        }

        @media(prefers-reduced-motion:reduce){
          .apex-hero__word,
          .apex-hero__eyebrow,
          .apex-hero__description,
          .apex-hero__side {
            animation:none!important;
            opacity:1!important;
            transform:none!important;
          }

          .apex-live-dot{animation:none}
        }
      `}</style>
    </section>
  );
}

export function HeroScrollCue() {
  return (
    <div className="hero-scroll-cue" aria-hidden="true">
      <span>SCROLL</span>
      <i />
      <style>{`
        .hero-scroll-cue {
          position: absolute;
          left: clamp(22px,4vw,70px);
          bottom: 22px;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 10px;
          color: rgba(255,255,255,.45);
          font-size: 9px;
          font-weight: 900;
          letter-spacing: .18em;
          writing-mode: vertical-rl;
        }

        .hero-scroll-cue i {
          width: 1px;
          height: 42px;
          background: linear-gradient(to bottom,var(--accent),transparent);
          animation: apexScrollCue 1.8s ease-in-out infinite;
        }

        @keyframes apexScrollCue {
          0%,100% { transform: scaleY(.45); transform-origin: top; opacity: .35; }
          50% { transform: scaleY(1); transform-origin: top; opacity: 1; }
        }

        @media(max-width:900px){
          .hero-scroll-cue{display:none}
        }

        @media(prefers-reduced-motion:reduce){
          .hero-scroll-cue i{animation:none}
        }
      `}</style>
    </div>
  );
}

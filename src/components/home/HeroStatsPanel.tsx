export function HeroStatsPanel() {
  const stats = [
    ["24/7", "Digital"],
    ["18+", "Coaches"],
    ["90+", "Sessions"],
  ];

  return (
    <div className="hero-stats-panel glass-card">
      <div className="hero-stats-panel__title">
        <span />
        APEX PERFORMANCE
      </div>

      <div className="hero-stats-panel__grid">
        {stats.map(([value, label], index) => (
          <div key={label} className="hero-stats-panel__stat">
            <strong>{value}</strong>
            <span>{label}</span>
            {index < stats.length - 1 ? <i /> : null}
          </div>
        ))}
      </div>

      <style>{`
        .hero-stats-panel {
          padding: 23px;
          background: rgba(10,10,10,.68);
          backdrop-filter: blur(18px);
          border-color: rgba(223,255,0,.16);
          box-shadow:
            0 24px 80px rgba(0,0,0,.32),
            inset 0 1px rgba(255,255,255,.025);
          animation: apexPanelFloat 5.8s ease-in-out infinite;
        }

        .hero-stats-panel__title {
          display: flex;
          align-items: center;
          gap: 9px;
          color: var(--accent);
          font-size: 10px;
          font-weight: 1000;
          letter-spacing: .14em;
        }

        .hero-stats-panel__title span {
          width: 26px;
          height: 2px;
          background: var(--accent);
          box-shadow: 0 0 12px rgba(223,255,0,.7);
        }

        .hero-stats-panel__grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 12px;
          margin-top: 20px;
        }

        .hero-stats-panel__stat {
          position: relative;
        }

        .hero-stats-panel__stat strong {
          display: block;
          font-size: 29px;
          letter-spacing: -.04em;
        }

        .hero-stats-panel__stat span {
          display: block;
          margin-top: 5px;
          color: var(--muted);
          font-size: 9px;
          letter-spacing: .12em;
          text-transform: uppercase;
        }

        .hero-stats-panel__stat i {
          position: absolute;
          right: 0;
          top: 7px;
          width: 1px;
          height: 35px;
          background: var(--line);
        }

        @keyframes apexPanelFloat {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        @media(max-width:620px){
          .hero-stats-panel__stat strong{font-size:24px}
        }

        @media(prefers-reduced-motion:reduce){
          .hero-stats-panel{animation:none}
        }
      `}</style>
    </div>
  );
}

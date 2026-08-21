export function FeatureRibbon() {
  const items = [
    ["AI coach", "Personal workout and nutrition guidance."],
    ["Smart tracking", "Strength, attendance and body metrics."],
    ["Classes", "Book sessions and coach-led training."],
    ["Recovery", "Mobility, rest and consistency support."],
  ];

  return (
    <section className="section-shell" style={{ paddingTop: 24 }}>
      <div className="fr-grid">
        {items.map(([title, copy]) => (
          <article key={title} className="fr-card">
            <div className="fr-icon">{title.charAt(0)}</div>
            <div>
              <strong>{title}</strong>
              <p>{copy}</p>
            </div>
          </article>
        ))}
      </div>
      <style>{`
        .fr-grid{
          display:grid;
          grid-template-columns:repeat(4,minmax(0,1fr));
          gap:12px;
        }
        .fr-card{
          padding:18px;
          border-radius:22px;
          border:1px solid rgba(255,255,255,.07);
          background:linear-gradient(180deg,#0e131c,#090d13);
          display:grid;
          grid-template-columns:44px 1fr;
          gap:12px;
          align-items:start;
        }
        .fr-icon{
          width:44px;height:44px;border-radius:14px;
          display:grid;place-items:center;
          background:linear-gradient(135deg,var(--accent),#95b900);
          color:#071017;
          font-weight:1000;
        }
        .fr-card p{
          margin:7px 0 0;
          color:#9fa8b4;
          font-size:12px;
          line-height:1.55;
        }
        @media(max-width:900px){.fr-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:560px){.fr-grid{grid-template-columns:1fr}}
      `}</style>
    </section>
  );
}

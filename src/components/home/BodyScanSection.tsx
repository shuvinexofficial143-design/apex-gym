export function BodyScanSection({
  cards,
}: {
  cards: {
    title: string;
    metricA: string;
    metricALabel: string;
    metricB: string;
    metricBLabel: string;
    metricC: string;
    metricCLabel: string;
    cta: string;
  }[];
}) {
  return (
    <section className="section-shell" style={{ paddingTop: 26 }}>
      <div className="body-grid">
        {cards.map((card, index) => (
          <article key={card.title} className="glass-card body-card">
            <div className={`body-card-bg body-card-bg-${index + 1}`} />
            <div className="body-copy">
              <div className="eyebrow" style={{ marginBottom: 12 }}>
                {index === 0 ? "3D PROGRESS" : "SOCIAL PROOF"}
              </div>
              <h3 style={{ fontSize: "clamp(30px, 5vw, 54px)", lineHeight: 1, margin: 0, maxWidth: 520 }}>
                {card.title}
              </h3>
              <div className="body-metric-stack">
                <MetricBox value={card.metricA} label={card.metricALabel} />
                <MetricBox value={card.metricB} label={card.metricBLabel} />
                <MetricBox value={card.metricC} label={card.metricCLabel} />
              </div>
              <button className="body-cta-btn">{card.cta}</button>
            </div>

            <div className="body-visual">
              {index === 0 ? (
                <div className="scan-phone">
                  <div className="scan-silhouette" />
                  <div className="scan-ring scan-ring-a" />
                  <div className="scan-ring scan-ring-b" />
                  <div className="scan-ring scan-ring-c" />
                </div>
              ) : (
                <div className="transform-grid">
                  <div className="transform-card transform-card-tall" />
                  <div className="transform-card transform-card-small" />
                  <div className="transform-card transform-card-small" />
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      <style>{`
        .body-grid{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:18px;
        }
        .body-card{
          position:relative;
          overflow:hidden;
          border-radius:36px;
          min-height:560px;
          padding:24px;
          display:grid;
          grid-template-columns:.94fr 1.06fr;
          gap:12px;
          background:linear-gradient(180deg, rgba(8,10,16,.95), rgba(8,10,16,.98));
        }
        .body-card-bg{
          position:absolute; inset:0; opacity:.92; pointer-events:none;
        }
        .body-card-bg-1{
          background:
            radial-gradient(circle at 84% 76%, rgba(44,133,255,.36), transparent 22%),
            radial-gradient(circle at 50% 50%, rgba(217,255,0,.12), transparent 34%),
            linear-gradient(180deg, rgba(5,20,40,.94), rgba(3,8,15,.98));
        }
        .body-card-bg-2{
          background:
            radial-gradient(circle at 70% 18%, rgba(52,137,255,.36), transparent 22%),
            radial-gradient(circle at 18% 84%, rgba(217,255,0,.12), transparent 28%),
            linear-gradient(180deg, rgba(5,20,40,.94), rgba(3,8,15,.98));
        }
        .body-copy,
        .body-visual{ position:relative; z-index:1; }
        .body-copy{
          align-self:center;
          display:grid;
          gap:16px;
        }
        .body-metric-stack{
          display:grid;
          gap:12px;
        }
        .body-cta-btn{
          min-height:54px;
          padding:0 20px;
          border:none;
          border-radius:16px;
          background:var(--accent);
          color:#081017;
          font-weight:1000;
          justify-self:start;
        }
        .body-visual{
          display:grid;
          place-items:center;
        }
        .scan-phone{
          width:min(100%,320px);
          min-height:450px;
          border-radius:34px;
          background:linear-gradient(180deg,#f7fbff,#edf4fb);
          border:6px solid rgba(66,130,220,.75);
          position:relative;
          overflow:hidden;
          box-shadow:0 20px 55px rgba(9,23,44,.32);
        }
        .scan-silhouette{
          position:absolute;
          left:50%; top:50%;
          transform:translate(-50%,-42%);
          width:42%;
          height:58%;
          border-radius:48% 48% 42% 42%/18% 18% 20% 20%;
          background:linear-gradient(180deg,#ffffff,#e8edf4);
          box-shadow:inset 0 0 0 1px rgba(0,0,0,.03);
        }
        .scan-ring{
          position:absolute; left:50%;
          transform:translateX(-50%);
          border:3px solid rgba(173,255,0,.85);
          border-left-color:transparent;
          border-right-color:transparent;
          border-radius:50%;
        }
        .scan-ring-a{ width:144px; height:26px; top:172px; }
        .scan-ring-b{ width:116px; height:22px; top:260px; }
        .scan-ring-c{ width:84px; height:18px; bottom:74px; }
        .transform-grid{
          width:min(100%,340px);
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:14px;
        }
        .transform-card{
          border-radius:28px;
          min-height:180px;
          background:linear-gradient(180deg,#a9d1ff,#5b9dff 58%,#2454b7);
          box-shadow:0 20px 45px rgba(9,23,44,.28);
        }
        .transform-card-tall{
          min-height:370px;
          grid-row:span 2;
          background:linear-gradient(180deg,#dde6f4,#8cb8ff 42%,#3267d8);
        }
        .transform-card-small:nth-child(2){
          background:linear-gradient(180deg,#d9e6ff,#96beff 44%,#3b70db);
        }
        .transform-card-small:nth-child(3){
          background:linear-gradient(180deg,#cfe4ff,#7eb7ff 44%,#2c63d4);
        }
        @media(max-width:1080px){
          .body-grid{ grid-template-columns:1fr; }
        }
        @media(max-width:760px){
          .body-card{ grid-template-columns:1fr; min-height:auto; padding:18px; border-radius:28px; }
        }
      `}</style>
    </section>
  );
}

function MetricBox({ value, label }: { value: string; label: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "baseline",
        gap: 12,
        flexWrap: "wrap",
        padding: "14px 16px",
        borderRadius: 18,
        background: "rgba(9,14,22,.64)",
        border: "1px solid rgba(255,255,255,.06)",
      }}
    >
      <div style={{ fontSize: 34, fontWeight: 1000, lineHeight: 1 }}>{value}</div>
      <div className="muted" style={{ fontWeight: 900, letterSpacing: ".08em", textTransform: "uppercase" }}>
        {label}
      </div>
    </div>
  );
}

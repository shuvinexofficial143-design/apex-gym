import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutPreview() {
  return (
    <section className="section">
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 24,
            alignItems: "stretch",
          }}
          className="about-grid"
        >
          <div
            className="glass-card"
            style={{
              minHeight: 510,
              padding: 28,
              position: "relative",
              overflow: "hidden",
              background:
                "radial-gradient(circle at 30% 20%, rgba(223,255,0,.18), transparent 25%), linear-gradient(160deg,#161616,#090909)",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 28,
                border: "1px solid rgba(255,255,255,.08)",
                borderRadius: 22,
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 38,
                left: 38,
                right: 38,
                fontSize: "clamp(54px, 8vw, 108px)",
                fontWeight: 1000,
                lineHeight: 0.82,
                letterSpacing: "-.08em",
                opacity: 0.95,
              }}
            >
              NO
              <br />
              EXCUSES.
            </div>
          </div>

          <div className="glass-card" style={{ padding: "clamp(28px, 5vw, 62px)" }}>
            <SectionHeading
              eyebrow="Why APEX"
              title="A gym built around your progress."
              copy="Every part of APEX is designed to remove friction: serious equipment, structured coaching, measurable progress and a community that expects you to show up."
            />

            <div style={{ display: "grid", gap: 14, marginTop: 34 }}>
              {[
                "Performance-first equipment and training zones",
                "Certified coaches with goal-based programming",
                "Progress tracking, challenges and smart member tools",
              ].map((item, index) => (
                <div
                  key={item}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "46px 1fr",
                    alignItems: "center",
                    gap: 14,
                    padding: 16,
                    borderRadius: 16,
                    background: "#101010",
                    border: "1px solid var(--line)",
                  }}
                >
                  <span className="accent" style={{ fontWeight: 1000 }}>
                    0{index + 1}
                  </span>
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 850px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

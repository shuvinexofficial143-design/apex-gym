import { SectionHeading } from "@/components/ui/SectionHeading";
import { trainers } from "@/lib/constants";

export function TrainersPreview() {
  return (
    <section id="trainers" className="section" style={{ background: "#0d0d0d" }}>
      <div className="container">
        <SectionHeading
          eyebrow="Expert coaching"
          title="Coaches who raise the standard."
          copy="Our trainers specialize across strength, transformation and athletic performance, with future booking and trainer dashboards planned."
        />

        <div className="grid-3" style={{ marginTop: 44 }}>
          {trainers.map((trainer) => (
            <article key={trainer.name} className="glass-card card-hover" style={{ overflow: "hidden" }}>
              <div
                style={{
                  height: 270,
                  position: "relative",
                  background:
                    "radial-gradient(circle at 50% 30%, rgba(223,255,0,.18), transparent 28%), linear-gradient(150deg,#1d1d1d,#090909)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: "auto 24px 20px",
                    fontSize: 88,
                    fontWeight: 1000,
                    opacity: 0.12,
                    letterSpacing: "-.08em",
                  }}
                >
                  {trainer.initials}
                </div>
              </div>
              <div style={{ padding: 24 }}>
                <h3 style={{ fontSize: 25, margin: 0 }}>{trainer.name}</h3>
                <div className="accent" style={{ marginTop: 7, fontWeight: 800 }}>
                  {trainer.role}
                </div>
                <p className="muted" style={{ lineHeight: 1.7 }}>
                  {trainer.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

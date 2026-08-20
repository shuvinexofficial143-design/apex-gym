import { SectionHeading } from "@/components/ui/SectionHeading";
import { programs } from "@/lib/constants";

export function ProgramsPreview() {
  return (
    <section id="programs" className="section" style={{ background: "#0d0d0d" }}>
      <div className="container">
        <SectionHeading
          eyebrow="Training programs"
          title="Choose your arena."
          copy="From first-day foundations to advanced strength work, our programs are built around clear outcomes instead of random workouts."
        />

        <div className="grid-3" style={{ marginTop: 44 }}>
          {programs.map((program, index) => (
            <article
              key={program.title}
              className="glass-card card-hover"
              style={{
                minHeight: 360,
                padding: 28,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <span className="accent" style={{ fontSize: 13, fontWeight: 900 }}>
                  0{index + 1}
                </span>
                <h3 style={{ fontSize: 34, margin: "22px 0 12px", letterSpacing: "-.045em" }}>
                  {program.title}
                </h3>
                <p className="muted" style={{ lineHeight: 1.7 }}>
                  {program.description}
                </p>
              </div>
              <div style={{ paddingTop: 24, borderTop: "1px solid var(--line)", fontWeight: 800 }}>
                {program.meta}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

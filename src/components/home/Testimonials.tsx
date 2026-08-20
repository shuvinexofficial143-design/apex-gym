import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/constants";

export function Testimonials() {
  return (
    <section className="section" style={{ background: "#0d0d0d" }}>
      <div className="container">
        <SectionHeading
          eyebrow="Member stories"
          title="Built on consistency."
          copy="A premium gym experience is only valuable when members stay engaged, supported and able to see their progress."
        />

        <div className="grid-3" style={{ marginTop: 44 }}>
          {testimonials.map((item) => (
            <blockquote
              key={item.name}
              className="glass-card"
              style={{ margin: 0, padding: 28, minHeight: 280 }}
            >
              <div className="accent" style={{ letterSpacing: 4 }}>★★★★★</div>
              <p style={{ fontSize: 19, lineHeight: 1.7, margin: "26px 0 34px" }}>
                “{item.quote}”
              </p>
              <footer>
                <strong>{item.name}</strong>
                <div className="muted" style={{ marginTop: 5, fontSize: 13 }}>
                  {item.result}
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

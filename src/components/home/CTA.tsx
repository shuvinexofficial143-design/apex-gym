import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section id="cta" className="section">
      <div className="container">
        <div
          className="glass-card"
          style={{
            padding: "clamp(34px, 7vw, 80px)",
            background:
              "radial-gradient(circle at 85% 20%, rgba(223,255,0,.28), transparent 24%), linear-gradient(135deg,#171717,#0b0b0b)",
          }}
        >
          <span className="eyebrow">Your next chapter</span>
          <h2
            style={{
              margin: "16px 0 24px",
              fontSize: "clamp(48px, 8vw, 100px)",
              lineHeight: 0.9,
              letterSpacing: "-.065em",
              textTransform: "uppercase",
              maxWidth: 900,
            }}
          >
            Stop planning.
            <br />
            Start training.
          </h2>
          <p className="muted" style={{ maxWidth: 560, lineHeight: 1.7, marginBottom: 28 }}>
            Book a complimentary trial session and experience the APEX training floor,
            coaching system and member journey.
          </p>
          <Button href="mailto:hello@apexgym.com">Book Free Trial</Button>
        </div>
      </div>
    </section>
  );
}

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { plans } from "@/lib/constants";

export function MembershipPreview() {
  return (
    <section id="membership" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Membership"
          title="Simple plans. Serious results."
          copy="Choose the level of gym access and coaching support that fits your goals, schedule and training style."
        />

        <div className="grid-3" style={{ marginTop: 44 }}>
          {plans.map((plan) => (
            <article
              key={plan.name}
              className="glass-card card-hover"
              style={{
                padding: 30,
                position: "relative",
                borderColor: plan.featured ? "rgba(223,255,0,.36)" : undefined,
              }}
            >
              {plan.featured ? (
                <div
                  style={{
                    position: "absolute",
                    top: 18,
                    right: 18,
                    padding: "7px 10px",
                    borderRadius: 999,
                    background: "var(--accent)",
                    color: "#080808",
                    fontSize: 11,
                    fontWeight: 1000,
                    textTransform: "uppercase",
                  }}
                >
                  Most popular
                </div>
              ) : null}

              <div className="muted" style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: ".13em" }}>
                {plan.name}
              </div>
              <div style={{ marginTop: 22 }}>
                <span style={{ fontSize: 50, fontWeight: 1000, letterSpacing: "-.06em" }}>
                  ₹{plan.price}
                </span>
                <span className="muted"> / month</span>
              </div>

              <div style={{ display: "grid", gap: 12, margin: "30px 0" }}>
                {plan.features.map((feature) => (
                  <div key={feature} style={{ display: "flex", gap: 10 }}>
                    <span className="accent">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Button href="/free-trial" variant={plan.featured ? "primary" : "ghost"} full>
                Start Free Trial
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

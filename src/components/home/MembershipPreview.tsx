import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { plans } from "@/lib/constants";

export function MembershipPreview() {
  return (
    <section id="membership" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Membership"
          title="Simple levels. Clear support."
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
                <div className="plan-badge">Most popular</div>
              ) : null}

              <div className="muted plan-name">{plan.name}</div>
              <div className="plan-pricing">
                <strong>Pricing on request</strong>
                <span className="muted">Choose after your trial or consultation</span>
              </div>

              <div className="plan-features">
                {plan.features.map((feature) => (
                  <div key={feature}>
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

        <style>{`
          .plan-badge{position:absolute;top:18px;right:18px;padding:7px 10px;border-radius:999px;background:var(--accent);color:#080808;font-size:11px;font-weight:1000;text-transform:uppercase}
          .plan-name{font-size:13px;text-transform:uppercase;letter-spacing:.13em}
          .plan-pricing{display:grid;gap:5px;margin-top:24px}
          .plan-pricing strong{font-size:26px}
          .plan-pricing span{font-size:12px;line-height:1.5}
          .plan-features{display:grid;gap:12px;margin:30px 0}
          .plan-features>div{display:flex;gap:10px}
        `}</style>
      </div>
    </section>
  );
}

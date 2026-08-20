import { Button } from "@/components/ui/Button";
import { membershipPlans } from "@/lib/public-data";

export function MembershipTable() {
  return (
    <div style={{ display: "grid", gap: 18, marginTop: 42 }}>
      {membershipPlans.map((plan) => (
        <article
          key={plan.name}
          className="glass-card"
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr .8fr 1.4fr auto",
            gap: 24,
            alignItems: "center",
            padding: 26,
            borderColor: plan.featured ? "rgba(223,255,0,.38)" : undefined,
          }}
        >
          <div>
            <div className="muted" style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: ".12em" }}>
              {plan.tag}
            </div>
            <h3 style={{ margin: "7px 0 0", fontSize: 26 }}>{plan.name}</h3>
          </div>
          <div>
            <strong style={{ fontSize: 32, letterSpacing: "-.04em" }}>₹{plan.price}</strong>
            <div className="muted" style={{ fontSize: 12 }}>/ month</div>
          </div>
          <div className="muted" style={{ lineHeight: 1.6 }}>
            {plan.features.slice(0, 3).join(" • ")}
          </div>
          <Button href="/free-trial" size="sm" variant={plan.featured ? "primary" : "ghost"}>
            Start Trial
          </Button>
        </article>
      ))}

      <style>{`
        @media (max-width: 880px) {
          article { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

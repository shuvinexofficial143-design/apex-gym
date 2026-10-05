import { Button } from "@/components/ui/Button";
import { membershipPlans } from "@/lib/public-data";

export function MembershipTable() {
  return (
    <div style={{ display: "grid", gap: 18, marginTop: 42 }}>
      {membershipPlans.map((plan) => (
        <article
          key={plan.name}
          className="glass-card membership-row"
          style={{
            borderColor: plan.featured ? "rgba(223,255,0,.38)" : undefined,
          }}
        >
          <div>
            <div className="muted membership-tag">{plan.tag}</div>
            <h3>{plan.name}</h3>
          </div>
          <div className="membership-price">
            <strong>Pricing on request</strong>
            <span className="muted">Confirm the best option with the APEX team</span>
          </div>
          <div className="muted membership-features">
            {plan.features.slice(0, 4).join(" • ")}
          </div>
          <Button href="/free-trial" size="sm" variant={plan.featured ? "primary" : "ghost"}>
            Start Trial
          </Button>
        </article>
      ))}

      <style>{`
        .membership-row{display:grid;grid-template-columns:1fr 1fr 1.4fr auto;gap:24px;align-items:center;padding:26px}
        .membership-tag{font-size:12px;text-transform:uppercase;letter-spacing:.12em}
        .membership-row h3{margin:7px 0 0;font-size:26px}
        .membership-price{display:grid;gap:4px}
        .membership-price strong{font-size:20px}
        .membership-price span{font-size:11px;line-height:1.5}
        .membership-features{line-height:1.6}
        @media(max-width:880px){.membership-row{grid-template-columns:1fr 1fr}}
        @media(max-width:620px){.membership-row{grid-template-columns:1fr}}
      `}</style>
    </div>
  );
}

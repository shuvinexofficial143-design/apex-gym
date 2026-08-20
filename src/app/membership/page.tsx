import { MembershipTable } from "@/components/public/MembershipTable";
import { PageHero } from "@/components/public/PageHero";
import { PublicPageShell } from "@/components/public/PublicPageShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { membershipFaq } from "@/lib/public-data";

export default function MembershipPage() {
  return (
    <PublicPageShell>
      <PageHero
        eyebrow="Membership"
        title="Pick your level."
        copy="Flexible membership tiers for members who want gym access, structured coaching or a higher-touch transformation experience."
        note="Upgrade anytime"
      />
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Plans" title="Membership without confusion." />
          <MembershipTable />

          <div style={{ marginTop: 70 }}>
            <SectionHeading eyebrow="Questions" title="Know before you join." />
            <div style={{ display: "grid", gap: 12, marginTop: 40 }}>
              {membershipFaq.map((item) => (
                <details key={item.question} className="glass-card" style={{ padding: "20px 22px" }}>
                  <summary style={{ cursor: "pointer", fontWeight: 900 }}>{item.question}</summary>
                  <p className="muted" style={{ lineHeight: 1.7, marginBottom: 0 }}>
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PublicPageShell>
  );
}

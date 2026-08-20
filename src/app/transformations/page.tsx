import { PageHero } from "@/components/public/PageHero";
import { PublicPageShell } from "@/components/public/PublicPageShell";
import { TransformationStories } from "@/components/public/TransformationStories";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function TransformationsPage() {
  return (
    <PublicPageShell>
      <PageHero
        eyebrow="Transformations"
        title="Proof over promises."
        copy="Member stories will combine progress photos, weight changes, strength milestones and coaching context instead of empty before-and-after claims."
      />
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Member progress"
            title="Consistency becomes visible."
          />
          <TransformationStories />
        </div>
      </section>
    </PublicPageShell>
  );
}

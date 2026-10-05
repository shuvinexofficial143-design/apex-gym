import { PageHero } from "@/components/public/PageHero";
import { PublicPageShell } from "@/components/public/PublicPageShell";
import { TransformationStories } from "@/components/public/TransformationStories";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata = {
  title: "Progress Tracking",
  description: "See how APEX tracks body composition, strength progression and training consistency over time.",
};

export default function TransformationsPage() {
  return (
    <PublicPageShell>
      <PageHero
        eyebrow="Transformations"
        title="Proof over promises."
        copy="Member progress is shown with measurable training context, strength milestones and consistent coaching support."
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

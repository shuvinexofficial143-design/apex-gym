import { PageHero } from "@/components/public/PageHero";
import { ProgramGrid } from "@/components/public/ProgramGrid";
import { PublicPageShell } from "@/components/public/PublicPageShell";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function ProgramsPage() {
  return (
    <PublicPageShell>
      <PageHero
        eyebrow="Programs"
        title="Train for an outcome."
        copy="Programs are organized around clear goals so members know what they are working toward and how progress will be measured."
      />
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Training paths"
            title="A plan for every starting point."
          />
          <ProgramGrid />
        </div>
      </section>
    </PublicPageShell>
  );
}

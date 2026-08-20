import { ClassSchedule } from "@/components/public/ClassSchedule";
import { PageHero } from "@/components/public/PageHero";
import { PublicPageShell } from "@/components/public/PublicPageShell";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function ClassesPage() {
  return (
    <PublicPageShell>
      <PageHero
        eyebrow="Group training"
        title="Energy meets structure."
        copy="Explore strength, mobility, conditioning and high-energy group sessions. Live seat booking will be connected in a later batch."
        note="Weekly schedule"
      />
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="This week"
            title="Find your next session."
            copy="The schedule UI is ready for future real-time capacity, waiting list, trainer assignment and member booking."
          />
          <ClassSchedule />
        </div>
      </section>
    </PublicPageShell>
  );
}

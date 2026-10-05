import { ClassSchedule } from "@/components/public/ClassSchedule";
import { PageHero } from "@/components/public/PageHero";
import { PublicPageShell } from "@/components/public/PublicPageShell";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata = {
  title: "Fitness Classes",
  description: "Explore the APEX group training schedule for strength, conditioning, mobility and high-energy fitness sessions.",
};

export default function ClassesPage() {
  return (
    <PublicPageShell>
      <PageHero
        eyebrow="Group training"
        title="Energy meets structure."
        copy="Explore strength, mobility, conditioning and high-energy group sessions across the weekly schedule."
        note="Weekly schedule"
      />
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="This week"
            title="Find your next session."
            copy="Choose a session that matches your goal, preferred time and training style."
          />
          <ClassSchedule />
        </div>
      </section>
    </PublicPageShell>
  );
}

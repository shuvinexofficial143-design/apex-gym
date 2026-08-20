import { PageHero } from "@/components/public/PageHero";
import { PublicPageShell } from "@/components/public/PublicPageShell";
import { TrainerGrid } from "@/components/public/TrainerGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function TrainersPage() {
  return (
    <PublicPageShell>
      <PageHero
        eyebrow="Coaching team"
        title="Train with experts."
        copy="Meet coaches focused on strength, body transformation and performance, with trainer booking and client dashboards planned next."
      />
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="APEX coaches"
            title="Different specialties. One standard."
            copy="Every coaching profile is designed to make expertise, experience and training focus clear before a member books."
          />
          <TrainerGrid />
        </div>
      </section>
    </PublicPageShell>
  );
}

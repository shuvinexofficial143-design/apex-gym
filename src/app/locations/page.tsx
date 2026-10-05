import { LocationsGrid } from "@/components/public/LocationsGrid";
import { PageHero } from "@/components/public/PageHero";
import { PublicPageShell } from "@/components/public/PublicPageShell";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata = {
  title: "Visit APEX",
  description: "Find APEX club details, training hours, facilities and the best way to arrange a visit.",
};

export default function LocationsPage() {
  return (
    <PublicPageShell>
      <PageHero
        eyebrow="Locations"
        title="Find your APEX."
        copy="See the club environment, training support and the easiest way to arrange your first visit."
      />
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Branches"
            title="Your training base."
          />
          <LocationsGrid />
        </div>
      </section>
    </PublicPageShell>
  );
}

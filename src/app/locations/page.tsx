import { LocationsGrid } from "@/components/public/LocationsGrid";
import { PageHero } from "@/components/public/PageHero";
import { PublicPageShell } from "@/components/public/PublicPageShell";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function LocationsPage() {
  return (
    <PublicPageShell>
      <PageHero
        eyebrow="Locations"
        title="Find your APEX."
        copy="A multi-branch structure ready for maps, live occupancy, branch-specific trainers, classes and membership availability."
      />
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Branches"
            title="One membership. Multiple training environments."
          />
          <LocationsGrid />
        </div>
      </section>
    </PublicPageShell>
  );
}

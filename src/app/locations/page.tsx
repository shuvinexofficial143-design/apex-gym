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
        copy="Explore APEX locations, training hours and the facilities available at each branch."
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

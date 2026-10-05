import { GalleryGrid } from "@/components/public/GalleryGrid";
import { PageHero } from "@/components/public/PageHero";
import { PublicPageShell } from "@/components/public/PublicPageShell";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata = {
  title: "Gym Gallery",
  description: "See the training zones, equipment, coaching environment and fitness atmosphere inside APEX.",
};

export default function GalleryPage() {
  return (
    <PublicPageShell>
      <PageHero
        eyebrow="Inside APEX"
        title="See the energy."
        copy="Explore facility zones, member energy, coaching sessions, equipment areas and the atmosphere inside APEX."
      />
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Gallery" title="Built to look as serious as you train." />
          <GalleryGrid />
        </div>
      </section>
    </PublicPageShell>
  );
}

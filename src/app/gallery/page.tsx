import { GalleryGrid } from "@/components/public/GalleryGrid";
import { PageHero } from "@/components/public/PageHero";
import { PublicPageShell } from "@/components/public/PublicPageShell";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function GalleryPage() {
  return (
    <PublicPageShell>
      <PageHero
        eyebrow="Inside APEX"
        title="See the energy."
        copy="A premium gallery shell for facility photography, member events, coaching sessions, equipment zones and future social media content."
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

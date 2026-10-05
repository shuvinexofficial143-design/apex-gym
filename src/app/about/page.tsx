import { FeatureGrid } from "@/components/public/FeatureGrid";
import { PageHero } from "@/components/public/PageHero";
import { PublicPageShell } from "@/components/public/PublicPageShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutFeatures } from "@/lib/public-data";

export const metadata = {
  title: "About APEX",
  description: "Learn how APEX combines coach-led training, structured programs, progress tracking and a premium gym experience.",
};

export default function AboutPage() {
  return (
    <PublicPageShell>
      <PageHero
        eyebrow="About APEX"
        title="Built for progress."
        copy="APEX combines serious equipment, high-standard coaching and a digital member journey so every visit has purpose."
        note="Performance · Coaching · Community"
      />
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Our standard"
            title="More than a room full of machines."
            copy="APEX brings training, accountability, progress tracking and member service together in one modern fitness experience."
          />
          <FeatureGrid items={aboutFeatures} />
        </div>
      </section>
    </PublicPageShell>
  );
}

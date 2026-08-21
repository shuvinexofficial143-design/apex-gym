import { RealVisualHero } from "@/components/home/RealVisualHero";
import { FeatureRibbon } from "@/components/home/FeatureRibbon";
import { PhotoFeatureGrid } from "@/components/home/PhotoFeatureGrid";
import { TrainerShowcase } from "@/components/home/TrainerShowcase";
import { TransformationShowcase } from "@/components/home/TransformationShowcase";
import { MobilePromoSection } from "@/components/home/MobilePromoSection";
import { ShowcaseGallery } from "@/components/home/ShowcaseGallery";
import { appShowcaseSlides } from "@/components/home/home-showcase-data";

export default function Page() {
  return (
    <main style={{ overflowX: "clip" }}>
      <RealVisualHero />
      <FeatureRibbon />
      <PhotoFeatureGrid />
      <ShowcaseGallery
        eyebrow="APEX MOBILE"
        title="One app. Every part of your fitness."
        subtitle="Workout planning, food, recovery and member progress are shown with richer app-style visuals."
        slides={appShowcaseSlides}
      />
      <TrainerShowcase />
      <TransformationShowcase />
      <MobilePromoSection />
    </main>
  );
}

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RealVisualHero } from "@/components/home/RealVisualHero";
import { FeatureRibbon } from "@/components/home/FeatureRibbon";
import { PhotoFeatureGrid } from "@/components/home/PhotoFeatureGrid";
import { ProgramsPreview } from "@/components/home/ProgramsPreview";
import { MembershipPreview } from "@/components/home/MembershipPreview";
import { TrainerShowcase } from "@/components/home/TrainerShowcase";
import { TransformationShowcase } from "@/components/home/TransformationShowcase";
import { MobilePromoSection } from "@/components/home/MobilePromoSection";
import { ShowcaseGallery } from "@/components/home/ShowcaseGallery";
import { appShowcaseSlides } from "@/components/home/home-showcase-data";

export default function Page() {
  return (
    <>
      <Navbar />
      <main style={{ overflowX: "clip" }}>
        <RealVisualHero />
        <FeatureRibbon />
        <PhotoFeatureGrid />
        <ProgramsPreview />
        <MembershipPreview />
        <TrainerShowcase />
        <TransformationShowcase />
        <ShowcaseGallery
          eyebrow="APEX MOBILE"
          title="One app. Every part of your fitness."
          subtitle="Keep workouts, nutrition, recovery and member progress connected in one focused digital experience."
          slides={appShowcaseSlides}
        />
        <MobilePromoSection />
      </main>
      <Footer />
    </>
  );
}

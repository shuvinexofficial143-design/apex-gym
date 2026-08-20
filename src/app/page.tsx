import { AboutPreview } from "@/components/home/AboutPreview";
import { CTA } from "@/components/home/CTA";
import { Hero } from "@/components/home/Hero";
import { MembershipPreview } from "@/components/home/MembershipPreview";
import { ProgramsPreview } from "@/components/home/ProgramsPreview";
import { Stats } from "@/components/home/Stats";
import { Testimonials } from "@/components/home/Testimonials";
import { TrainersPreview } from "@/components/home/TrainersPreview";
import { TransformationSlider } from "@/components/home/TransformationSlider";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <AboutPreview />
      <ProgramsPreview />
      <MembershipPreview />
      <TrainersPreview />
      <TransformationSlider />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}

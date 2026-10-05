import { PageHero } from "@/components/public/PageHero";
import { PublicPageShell } from "@/components/public/PublicPageShell";
import { TrialForm } from "@/components/public/TrialForm";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata = {
  title: "Book a Free Trial",
  description: "Book an APEX gym trial by sharing your fitness goal, experience level and preferred training time.",
};

export default function FreeTrialPage() {
  return (
    <PublicPageShell>
      <PageHero
        eyebrow="Free trial"
        title="Experience APEX first."
        copy="Tell us your goal and preferred training time so the APEX team can prepare the right first-visit experience."
        note="No commitment"
      />
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Book a visit"
            title="Your first session starts here."
          />
          <TrialForm />
        </div>
      </section>
    </PublicPageShell>
  );
}

import { PageHero } from "@/components/public/PageHero";
import { PublicPageShell } from "@/components/public/PublicPageShell";
import { TrialForm } from "@/components/public/TrialForm";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function FreeTrialPage() {
  return (
    <PublicPageShell>
      <PageHero
        eyebrow="Free trial"
        title="Experience APEX first."
        copy="Tell us your goal and preferred training time. This form is prepared for future OTP verification, CRM lead creation and WhatsApp confirmation."
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

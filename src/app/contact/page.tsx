import { ContactPanel } from "@/components/public/ContactPanel";
import { PageHero } from "@/components/public/PageHero";
import { PublicPageShell } from "@/components/public/PublicPageShell";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function ContactPage() {
  return (
    <PublicPageShell>
      <PageHero
        eyebrow="Contact"
        title="Talk to the team."
        copy="Questions about memberships, trials, trainers or facilities? Reach the APEX team through the contact options below."
      />
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Get in touch" title="We make starting simple." />
          <ContactPanel />
        </div>
      </section>
    </PublicPageShell>
  );
}

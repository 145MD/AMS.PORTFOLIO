import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, Container, SectionHeading } from "@/components/primitives";
import { PricingTable } from "@/components/PricingTable";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CtaSection } from "@/components/CtaSection";
import { faqs } from "@/lib/content";

const pricingFaqs = faqs.filter((f) =>
  ["hardware", "SMS", "several institutes"].some((k) => f.q.includes(k) || f.a.includes(k)),
);

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple per-institute plans for ClassPass — start on a trial and scale as you grow. Placeholder LKR figures, confirmed during onboarding.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Priced per institute, not per headache"
        description="Pick a plan that fits your size today and move up when you grow. The figures below are placeholders — we confirm final pricing during onboarding."
      />

      <Section>
        <PricingTable />
      </Section>

      <Section tone="muted">
        <Container>
          <SectionHeading
            eyebrow="Good to know"
            title="Pricing questions"
            align="center"
            className="mx-auto mb-12 items-center"
          />
          <FaqAccordion items={pricingFaqs.length ? pricingFaqs : faqs.slice(0, 4)} />
        </Container>
      </Section>

      <Section className="pt-0">
        <CtaSection title="Not sure which plan fits?" description="Tell us how many classes and students you run and we'll point you to the right one." />
      </Section>
    </>
  );
}

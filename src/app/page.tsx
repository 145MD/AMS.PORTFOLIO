import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { StatStrip } from "@/components/StatStrip";
import { FeatureBento } from "@/components/FeatureBento";
import { HowItWorksSteps } from "@/components/HowItWorksSteps";
import { ReceiptShowcase } from "@/components/ReceiptShowcase";
import { AudienceSplit } from "@/components/AudienceSplit";
import { RoleCards } from "@/components/RoleCards";
import { PricingTable } from "@/components/PricingTable";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CtaSection } from "@/components/CtaSection";
import { Section, SectionHeading, Container } from "@/components/primitives";
import { faqs } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Hero />
      <StatStrip />

      <Section>
        <FeatureBento />
      </Section>

      <Section tone="muted">
        <HowItWorksSteps />
      </Section>

      <Section>
        <ReceiptShowcase />
      </Section>

      <Section tone="muted">
        <Container>
          <SectionHeading
            eyebrow="Two sides, one platform"
            title="Owners run the institute. Instructors run their classes."
            className="mb-14"
          />
        </Container>
        <AudienceSplit />
      </Section>

      <Section>
        <RoleCards />
      </Section>

      <Section tone="muted">
        <Container>
          <SectionHeading
            eyebrow="Pricing"
            title="Simple plans, per institute"
            description="Start on a trial, scale as you grow. Placeholder figures — final pricing set during onboarding."
            align="center"
            className="mx-auto mb-14 items-center"
          />
        </Container>
        <PricingTable />
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Questions"
            title="The things institutes ask first"
            align="center"
            className="mx-auto mb-12 items-center"
          />
          <FaqAccordion items={faqs.slice(0, 5)} />
          <div className="mt-8 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-violet underline-offset-4 hover:underline"
            >
              See all questions <ArrowRight className="size-4" />
            </Link>
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <CtaSection />
      </Section>
    </>
  );
}

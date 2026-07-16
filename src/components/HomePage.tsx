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
import { localizePath, type Locale } from "@/lib/i18n";
import type { MarketingContent } from "@/lib/localized-content";

export function HomePage({
  locale,
  content,
}: {
  locale: Locale;
  content: MarketingContent;
}) {
  const home = content.pages.home;

  return (
    <>
      <Hero locale={locale} content={content} />
      <StatStrip stats={content.stats} />

      <Section>
        <FeatureBento content={content} />
      </Section>

      <Section tone="muted">
        <HowItWorksSteps content={content} />
      </Section>

      <Section>
        <ReceiptShowcase locale={locale} content={content} />
      </Section>

      <Section tone="muted">
        <Container>
          <SectionHeading
            eyebrow={home.audienceHeading.eyebrow}
            title={home.audienceHeading.title}
            className="mb-14"
          />
        </Container>
        <AudienceSplit locale={locale} content={content} />
      </Section>

      <Section>
        <RoleCards content={content} />
      </Section>

      <Section tone="muted">
        <Container>
          <SectionHeading
            eyebrow={home.pricingHeading.eyebrow}
            title={home.pricingHeading.title}
            description={home.pricingHeading.description}
            align="center"
            className="mx-auto mb-14 items-center"
          />
        </Container>
        <PricingTable locale={locale} content={content} />
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow={home.questionsHeading.eyebrow}
            title={home.questionsHeading.title}
            align="center"
            className="mx-auto mb-12 items-center"
          />
          <FaqAccordion items={content.faqs.slice(0, 5)} />
          <div className="mt-8 text-center">
            <Link
              href={localizePath("/faq", locale)}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-violet underline-offset-4 hover:underline"
            >
              {content.components.questions.seeAll} <ArrowRight className="size-4" />
            </Link>
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <CtaSection locale={locale} content={content} />
      </Section>
    </>
  );
}


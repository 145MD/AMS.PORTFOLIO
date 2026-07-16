import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { Section, Container, SectionHeading } from "@/components/primitives";
import { PricingTable } from "@/components/PricingTable";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CtaSection } from "@/components/CtaSection";
import { hasLocale, locales } from "@/lib/i18n";
import { getContent } from "@/lib/localized-content";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/pricing">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  return getContent(lang).pages.pricing.metadata;
}

export default async function PricingPage({ params }: PageProps<"/[lang]/pricing">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const content = getContent(lang);
  const page = content.pages.pricing;
  const pricingFaqs = content.faqs.filter((f) =>
    ["hardware", "SMS", "several institutes"].some((k) => f.q.includes(k) || f.a.includes(k)),
  );

  return (
    <>
      <PageHero
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        description={page.hero.description}
      />

      <Section>
        <PricingTable locale={lang} content={content} />
      </Section>

      <Section tone="muted">
        <Container>
          <SectionHeading
            eyebrow={page.faqHeading.eyebrow}
            title={page.faqHeading.title}
            align="center"
            className="mx-auto mb-12 items-center"
          />
          <FaqAccordion items={pricingFaqs.length ? pricingFaqs : content.faqs.slice(0, 4)} />
        </Container>
      </Section>

      <Section className="pt-0">
        <CtaSection locale={lang} content={content} title={page.ctaTitle} description={page.ctaDescription} />
      </Section>
    </>
  );
}

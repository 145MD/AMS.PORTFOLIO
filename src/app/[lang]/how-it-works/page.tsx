import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { Section, Container, SectionHeading } from "@/components/primitives";
import { HowItWorksSteps } from "@/components/HowItWorksSteps";
import { ReceiptShowcase } from "@/components/ReceiptShowcase";
import { CtaSection } from "@/components/CtaSection";
import { Reveal } from "@/components/Reveal";
import { hasLocale, locales } from "@/lib/i18n";
import { getContent } from "@/lib/localized-content";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/how-it-works">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  return getContent(lang).pages.howItWorks.metadata;
}

export default async function HowItWorksPage({ params }: PageProps<"/[lang]/how-it-works">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const content = getContent(lang);
  const page = content.pages.howItWorks;

  return (
    <>
      <PageHero
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        description={page.hero.description}
      />

      <Section>
        <HowItWorksSteps heading={false} content={content} />
      </Section>

      <Section tone="muted">
        <Container>
          <SectionHeading eyebrow={page.detailHeading.eyebrow} title={page.detailHeading.title} className="mb-14" />
          <div className="grid gap-5 md:grid-cols-3">
            {page.details.map((d, i) => (
              <Reveal key={d.title} delay={i * 0.07}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:border-violet/40 hover:shadow-xl hover:shadow-ink/10 motion-reduce:hover:translate-y-0">
                  <span className="text-display text-sm text-signal-foreground">0{i + 1}</span>
                  <h3 className="text-display mt-2 text-lg">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <ReceiptShowcase locale={lang} content={content} />
      </Section>

      <Section className="pt-0">
        <CtaSection locale={lang} content={content} title={page.ctaTitle} />
      </Section>
    </>
  );
}

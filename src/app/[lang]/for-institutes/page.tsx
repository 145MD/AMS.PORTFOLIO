import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { Section, Container, SectionHeading } from "@/components/primitives";
import { Reveal } from "@/components/Reveal";
import { FeatureBento } from "@/components/FeatureBento";
import { HowItWorksSteps } from "@/components/HowItWorksSteps";
import { CtaSection } from "@/components/CtaSection";
import { getIcon } from "@/lib/icons";
import { hasLocale, locales } from "@/lib/i18n";
import { getContent } from "@/lib/localized-content";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/for-institutes">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  return getContent(lang).pages.institutes.metadata;
}

export default async function ForInstitutesPage({ params }: PageProps<"/[lang]/for-institutes">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const content = getContent(lang);
  const page = content.pages.institutes;
  const audience = content.audiences.find((a) => a.id === "institutes")!;
  const subset = content.features.filter((f) =>
    ["attendance", "fees", "receipts", "notifications"].includes(f.id),
  );

  return (
    <>
      <PageHero eyebrow={audience.eyebrow} title={audience.title} description={audience.body} />

      <Section>
        <Container>
          <div className="grid gap-5 sm:grid-cols-2">
            {audience.points.map((p, i) => {
              const Icon = getIcon(p.icon);
              return (
                <Reveal key={p.title} delay={(i % 2) * 0.06}>
                  <div className="flex h-full gap-4 rounded-2xl border border-border bg-card p-6">
                    <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-ink text-signal">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <h3 className="text-display text-base">{p.title}</h3>
                      <p className="mt-1.5 text-sm text-muted-foreground">{p.body}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <SectionHeading eyebrow={page.featuresHeading.eyebrow} title={page.featuresHeading.title} className="mb-14" />
        </Container>
        <FeatureBento heading={false} features={subset} content={content} />
      </Section>

      <Section>
        <HowItWorksSteps content={content} />
      </Section>

      <Section className="pt-0">
        <CtaSection locale={lang} content={content} title={page.ctaTitle} />
      </Section>
    </>
  );
}

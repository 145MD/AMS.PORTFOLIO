import type { Metadata } from "next";
import { Check } from "lucide-react";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { Section, Container, SectionHeading } from "@/components/primitives";
import { Reveal } from "@/components/Reveal";
import { CtaSection } from "@/components/CtaSection";
import { getIcon } from "@/lib/icons";
import { hasLocale, locales } from "@/lib/i18n";
import { getContent } from "@/lib/localized-content";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/for-instructors">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  return getContent(lang).pages.instructors.metadata;
}

export default async function ForInstructorsPage({ params }: PageProps<"/[lang]/for-instructors">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const content = getContent(lang);
  const page = content.pages.instructors;
  const audience = content.audiences.find((a) => a.id === "instructors")!;
  const instructorFeature = content.features.find((f) => f.id === "instructors")!;

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
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <SectionHeading eyebrow={page.selfScopedHeading.eyebrow} title={instructorFeature.title} description={instructorFeature.summary} />
              <ul className="mt-6 space-y-3">
                {instructorFeature.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-signal/20 text-signal-foreground">
                      <Check className="size-3.5" strokeWidth={3} />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="section-ink rounded-3xl border border-ink-line p-8">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{page.earningsLabel}</p>
                <p className="text-display mt-2 text-4xl text-paper">
                  LKR <span className="text-signal">84,500</span>
                </p>
                <div className="mt-6 space-y-3">
                  {page.earningsRows.map((row) => (
                    <div key={row.c} className="flex items-center justify-between border-b border-ink-line pb-3 text-sm">
                      <span className="text-paper/90">{row.c}</span>
                      <span className="font-mono text-muted-foreground">LKR {row.v}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-muted-foreground">{page.illustrative}</p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <CtaSection locale={lang} content={content} title={page.ctaTitle} />
      </Section>
    </>
  );
}

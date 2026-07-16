import type { Metadata } from "next";
import { Check, ShieldCheck } from "lucide-react";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { Section, Container, Cta } from "@/components/primitives";
import { Reveal } from "@/components/Reveal";
import { RoleCards } from "@/components/RoleCards";
import { CtaSection } from "@/components/CtaSection";
import { FeatureVideo } from "@/components/FeatureVideo";
import { getIcon } from "@/lib/icons";
import { hasLocale, locales } from "@/lib/i18n";
import { getContent } from "@/lib/localized-content";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/features">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  return getContent(lang).pages.features.metadata;
}

export default async function FeaturesPage({ params }: PageProps<"/[lang]/features">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const content = getContent(lang);
  const page = content.pages.features;

  return (
    <>
      <PageHero
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        description={page.hero.description}
      />

      <Section>
        <Container>
          <div className="flex flex-col gap-20">
            {content.features.map((f, i) => {
              const Icon = getIcon(f.icon);
              const flip = i % 2 === 1;
              return (
                <Reveal key={f.id}>
                  <div
                    id={f.id}
                    className="grid scroll-mt-24 items-center gap-8 lg:grid-cols-2 lg:gap-14"
                  >
                    <div className={cn(flip && "lg:order-2")}>
                      <div className="grid size-12 place-items-center rounded-xl bg-ink text-signal">
                        <Icon className="size-6" />
                      </div>
                      <h2 className="text-display mt-5 text-2xl sm:text-3xl">{f.title}</h2>
                      <p className="mt-3 text-muted-foreground">{f.summary}</p>
                      <ul className="mt-6 space-y-3">
                        {f.points.map((p) => (
                          <li key={p} className="flex items-start gap-3 text-sm">
                            <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-signal/20 text-signal-foreground">
                              <Check className="size-3.5" strokeWidth={3} />
                            </span>
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={cn("relative", flip && "lg:order-1")}>
                      <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-muted/60">
                        <FeatureVideo
                          id={f.id}
                          title={f.title}
                          Icon={Icon}
                          video={content.featureVideos[f.id]}
                        />
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <RoleCards content={content} />
      </Section>

      <Section>
        <Container>
          <div className="section-ink flex flex-col items-start gap-6 rounded-3xl border border-ink-line p-8 sm:flex-row sm:items-center sm:p-10">
            <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-signal text-signal-foreground">
              <ShieldCheck className="size-6" />
            </div>
            <div className="flex-1">
              <h2 className="text-display text-xl sm:text-2xl">{page.security.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {page.security.description}
              </p>
            </div>
            <Cta href="/how-it-works" locale={lang} variant="signal" withArrow>
              {page.security.cta}
            </Cta>
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <CtaSection locale={lang} content={content} />
      </Section>
    </>
  );
}

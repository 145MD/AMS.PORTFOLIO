import type { Metadata } from "next";
import Image from "next/image";
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
}: PageProps<"/[lang]/about">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  return getContent(lang).pages.about.metadata;
}

export default async function AboutPage({ params }: PageProps<"/[lang]/about">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const content = getContent(lang);
  const page = content.pages.about;

  return (
    <>
      <PageHero
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        description={page.hero.description}
      />

      <Section>
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            <Reveal>
              <div>
                <h2 className="text-display text-2xl sm:text-3xl">{page.story.title}</h2>
                <div className="mt-5 space-y-5 text-muted-foreground">
                  {page.story.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <figure className="group relative">
                <div
                  className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] border border-border bg-ink/5"
                  aria-hidden
                />
                <div className="relative overflow-hidden rounded-[2rem] border border-border bg-white p-2 shadow-xl shadow-ink/10 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-violet/30 hover:shadow-2xl hover:shadow-ink/15 motion-reduce:hover:translate-y-0">
                  <div className="relative overflow-hidden rounded-[1.45rem] bg-ink">
                    <Image
                      src="/about2.png"
                      alt={page.imageAlt}
                      width={1693}
                      height={929}
                      sizes="(min-width: 1024px) 52vw, 100vw"
                      className="h-auto w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02] motion-reduce:group-hover:scale-100"
                    />
                    <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between gap-3 p-4">
                      <span className="rounded-full border border-white/15 bg-ink/70 px-3 py-1 text-xs font-medium text-paper shadow-sm backdrop-blur">
                        {page.imageBadges[0]}
                      </span>
                      <span className="rounded-full bg-signal px-3 py-1 text-white text-xs font-semibold text-signal-foreground shadow-sm shadow-signal/30">
                        {page.imageBadges[1]}
                      </span>
                    </div>
                  </div>
                  <figcaption className="grid gap-2 px-2 pb-2 pt-3 text-xs font-medium text-muted-foreground sm:grid-cols-3">
                    {page.imageCaption.map((label) => (
                      <span key={label} className="rounded-xl text-center bg-muted px-3 py-2 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-ink hover:text-paper hover:shadow-sm motion-reduce:hover:translate-y-0">
                        {label}
                      </span>
                    ))}
                  </figcaption>
                </div>
              </figure>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <SectionHeading eyebrow={page.valuesHeading.eyebrow} title={page.valuesHeading.title} className="mb-14" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {page.values.map((v, i) => {
              const Icon = getIcon(v.icon);
              return (
                <Reveal key={v.title} delay={(i % 4) * 0.06}>
                  <div className="h-full rounded-2xl border border-border bg-card p-6">
                    <div className="grid size-10 place-items-center rounded-xl bg-ink text-signal">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="text-display mt-4 text-base">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <CtaSection locale={lang} content={content} title={page.ctaTitle} />
      </Section>
    </>
  );
}

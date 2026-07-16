import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { Section, Container } from "@/components/primitives";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CtaSection } from "@/components/CtaSection";
import { hasLocale, locales, localizePath } from "@/lib/i18n";
import { getContent } from "@/lib/localized-content";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/faq">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  return getContent(lang).pages.faq.metadata;
}

export default async function FaqPage({ params }: PageProps<"/[lang]/faq">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const content = getContent(lang);
  const page = content.pages.faq;

  return (
    <>
      <PageHero
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        description={page.hero.description}
      />

      <Section>
        <Container>
          <FaqAccordion items={content.faqs} />
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-muted-foreground">
            {page.stillCurious}{" "}
            <Link href={localizePath("/contact", lang)} className="font-medium text-violet underline-offset-4 hover:underline">
              {page.getInTouch}
            </Link>{" "}
            {page.orEmail}{" "}
            <a href={`mailto:${content.site.email}`} className="font-medium text-foreground underline underline-offset-4">
              {content.site.email}
            </a>
            .
          </p>
        </Container>
      </Section>

      <Section className="pt-0">
        <CtaSection locale={lang} content={content} />
      </Section>
    </>
  );
}

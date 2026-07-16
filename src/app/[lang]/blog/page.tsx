import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { Section, Container } from "@/components/primitives";
import { Reveal } from "@/components/Reveal";
import { CtaSection } from "@/components/CtaSection";
import { hasLocale, locales, localizePath, type Locale } from "@/lib/i18n";
import { getContent } from "@/lib/localized-content";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/blog">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  return getContent(lang).pages.blog.metadata;
}

function formatDate(iso: string, locale: Locale) {
  return new Date(iso).toLocaleDateString(locale === "si" ? "si-LK" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPage({ params }: PageProps<"/[lang]/blog">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const content = getContent(lang);
  const page = content.pages.blog;
  const sorted = [...content.posts].sort((a, b) => +new Date(b.date) - +new Date(a.date));

  return (
    <>
      <PageHero
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        description={page.hero.description}
      />

      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sorted.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 0.06}>
                <Link
                  href={localizePath(`/blog/${post.slug}`, lang)}
                  className="group flex h-full flex-col rounded-3xl border border-border bg-card p-6 outline-none transition-colors hover:border-violet/50 focus-visible:ring-3 focus-visible:ring-violet/40"
                >
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="rounded-full bg-muted px-2.5 py-0.5 font-medium text-foreground">{post.tag}</span>
                    <span>{post.readMins} {page.minRead}</span>
                  </div>
                  <h2 className="text-display mt-4 text-xl leading-snug">{post.title}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-sm">
                    <time dateTime={post.date} className="text-muted-foreground">
                      {formatDate(post.date, lang)}
                    </time>
                    <span className="inline-flex items-center gap-1 font-medium text-violet">
                      {page.read} <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-center text-xs text-muted-foreground">{page.placeholderNotice}</p>
        </Container>
      </Section>

      <Section className="pt-0">
        <CtaSection locale={lang} content={content} />
      </Section>
    </>
  );
}

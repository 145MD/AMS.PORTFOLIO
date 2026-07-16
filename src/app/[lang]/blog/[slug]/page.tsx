import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container, Cta } from "@/components/primitives";
import { CtaSection } from "@/components/CtaSection";
import { Section } from "@/components/primitives";
import { hasLocale, locales, localizePath, type Locale } from "@/lib/i18n";
import { getContent, getPost } from "@/lib/localized-content";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((lang) =>
    getContent(lang).posts.map((p) => ({ lang, slug: p.slug })),
  );
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/blog/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) return {};

  const content = getContent(lang);
  const post = getPost(slug, lang);
  if (!post) return { title: content.pages.blog.notFoundTitle };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: [{ url: "/og.jpg", width: 1200, height: 630, type: "image/jpeg" }],
    },
  };
}

function formatDate(iso: string, locale: Locale) {
  return new Date(iso).toLocaleDateString(locale === "si" ? "si-LK" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: PageProps<"/[lang]/blog/[slug]">) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) notFound();

  const content = getContent(lang);
  const page = content.pages.blog;
  const post = getPost(slug, lang);
  if (!post) notFound();

  return (
    <>
      <article>
        {/* ink header */}
        <div className="section-ink relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-grid text-paper/[0.05]" aria-hidden />
          <Container className="relative">
            <div className="max-w-2xl py-16 sm:py-20">
              <Link
                href={localizePath("/blog", lang)}
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-paper"
              >
                <ArrowLeft className="size-4" /> {page.allPosts}
              </Link>
              <div className="mt-6 flex items-center gap-3 text-xs text-muted-foreground">
                <span className="rounded-full bg-signal/15 px-2.5 py-0.5 font-medium text-signal">{post.tag}</span>
                <time dateTime={post.date}>{formatDate(post.date, lang)}</time>
                <span>· {post.readMins} {page.minRead}</span>
              </div>
              <h1 className="text-display mt-4 text-3xl leading-tight text-balance text-paper sm:text-4xl">
                {post.title}
              </h1>
            </div>
          </Container>
        </div>

        {/* body */}
        <Section>
          <Container>
            <div className="mx-auto max-w-2xl">
              <p className="text-lg leading-relaxed text-muted-foreground">{post.excerpt}</p>
              <div className="mt-8 space-y-6 text-[1.05rem] leading-relaxed text-foreground">
                {post.body.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              <div className="mt-12 flex items-center justify-between border-t border-border pt-8">
                <p className="text-sm text-muted-foreground">{page.writtenBy}</p>
                <Cta href="/contact" locale={lang} variant="primary" withArrow>
                  {content.common.requestDemo}
                </Cta>
              </div>
            </div>
          </Container>
        </Section>
      </article>

      <Section className="pt-0">
        <CtaSection locale={lang} content={content} />
      </Section>
    </>
  );
}

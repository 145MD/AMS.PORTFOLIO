import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container, Cta } from "@/components/primitives";
import { CtaSection } from "@/components/CtaSection";
import { Section } from "@/components/primitives";
import { getPost, posts, site } from "@/lib/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, type: "article" },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
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
                href="/blog"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-paper"
              >
                <ArrowLeft className="size-4" /> All posts
              </Link>
              <div className="mt-6 flex items-center gap-3 text-xs text-muted-foreground">
                <span className="rounded-full bg-signal/15 px-2.5 py-0.5 font-medium text-signal">{post.tag}</span>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span>· {post.readMins} min read</span>
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
                <p className="text-sm text-muted-foreground">Written by the {site.name} team</p>
                <Cta href="/contact" variant="primary" withArrow>
                  Request a demo
                </Cta>
              </div>
            </div>
          </Container>
        </Section>
      </article>

      <Section className="pt-0">
        <CtaSection />
      </Section>
    </>
  );
}

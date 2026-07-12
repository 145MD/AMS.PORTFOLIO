import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section, Container } from "@/components/primitives";
import { Reveal } from "@/components/Reveal";
import { CtaSection } from "@/components/CtaSection";
import { posts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on attendance, fees and running an institute without paper — from the ClassPass team.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) => +new Date(b.date) - +new Date(a.date));

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Notes from the desk"
        description="Short pieces on attendance, fees and running an institute without the paperwork."
      />

      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sorted.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 0.06}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col rounded-3xl border border-border bg-card p-6 outline-none transition-colors hover:border-violet/50 focus-visible:ring-3 focus-visible:ring-violet/40"
                >
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="rounded-full bg-muted px-2.5 py-0.5 font-medium text-foreground">{post.tag}</span>
                    <span>{post.readMins} min read</span>
                  </div>
                  <h2 className="text-display mt-4 text-xl leading-snug">{post.title}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-sm">
                    <time dateTime={post.date} className="text-muted-foreground">
                      {formatDate(post.date)}
                    </time>
                    <span className="inline-flex items-center gap-1 font-medium text-violet">
                      Read <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-center text-xs text-muted-foreground">Sample articles — placeholder editorial content.</p>
        </Container>
      </Section>

      <Section className="pt-0">
        <CtaSection />
      </Section>
    </>
  );
}

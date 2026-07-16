import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { Section, Container } from "@/components/primitives";
import { ContactForm } from "@/components/ContactForm";
import { getIcon } from "@/lib/icons";
import { hasLocale, locales } from "@/lib/i18n";
import { getContent } from "@/lib/localized-content";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/contact">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  return getContent(lang).pages.contact.metadata;
}

export default async function ContactPage({ params }: PageProps<"/[lang]/contact">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const content = getContent(lang);
  const page = content.pages.contact;

  return (
    <>
      <PageHero
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        description={page.hero.description}
      />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-14">
            <div>
              <h2 className="text-display text-xl">{page.reachTitle}</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {page.reachDescription}
              </p>
              <ul className="mt-6 space-y-3">
                {page.channels.map((c) => {
                  const Icon = getIcon(c.icon);
                  const inner = (
                    <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
                      <div className="grid size-10 place-items-center rounded-lg bg-muted text-violet">
                        <Icon className="size-5" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{c.label}</p>
                        <p className="text-sm font-medium">{c.value}</p>
                      </div>
                    </div>
                  );
                  return (
                    <li key={c.label}>
                      {c.href ? (
                        <a
                          href={c.href}
                          className="block rounded-xl outline-none transition-opacity hover:opacity-80 focus-visible:ring-3 focus-visible:ring-violet/40"
                          {...(/^https?:/.test(c.href) ? { target: "_blank", rel: "noreferrer" } : {})}
                        >
                          {inner}
                        </a>
                      ) : (
                        inner
                      )}
                    </li>
                  );
                })}
              </ul>
              <p className="mt-6 text-xs text-muted-foreground">
                {page.placeholderNotice}
              </p>
            </div>

            <ContactForm content={content} />
          </div>
        </Container>
      </Section>
    </>
  );
}

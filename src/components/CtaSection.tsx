import { Container, Cta } from "@/components/primitives";
import { NfcRipple } from "@/components/NfcRipple";
import type { Locale } from "@/lib/i18n";
import type { MarketingContent } from "@/lib/localized-content";

export function CtaSection({
  locale,
  content,
  title,
  description,
}: {
  locale: Locale;
  content: MarketingContent;
  title?: string;
  description?: string;
}) {
  const copy = content.components.cta;

  return (
    <Container>
      <div className="section-ink relative overflow-hidden rounded-[2rem] border border-ink-line px-6 py-16 text-center sm:px-10 sm:py-20">
        <NfcRipple className="opacity-30" count={5} duration={4} />
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-signal/15 blur-[100px]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-xl">
          <h2 className="text-display text-3xl leading-tight text-balance sm:text-4xl">{title ?? copy.title}</h2>
          <p className="mt-4 text-muted-foreground">{description ?? copy.description}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Cta href="/contact" locale={locale} variant="signal" size="lg" withArrow>
              {copy.primary}
            </Cta>
            <Cta
              href="/pricing"
              locale={locale}
              variant="outline"
              size="lg"
              className="border-ink-line text-paper hover:bg-ink-line/40"
            >
              {copy.secondary}
            </Cta>
          </div>
        </div>
      </div>
    </Container>
  );
}

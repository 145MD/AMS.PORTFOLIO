import { Container, Cta, GradientText } from "@/components/primitives";
import { TapCard } from "@/components/TapCard";
import type { Locale } from "@/lib/i18n";
import type { MarketingContent } from "@/lib/localized-content";

export function Hero({
  locale,
  content,
}: {
  locale: Locale;
  content: MarketingContent;
}) {
  const hero = content.components.hero;

  return (
    <section className="section-ink relative overflow-hidden">
      {/* ambient glows + grid */}
      <div className="pointer-events-none absolute inset-0 bg-grid text-paper/[0.06]" aria-hidden />
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[520px] -translate-x-1/2 rounded-full bg-violet/25 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-[-6rem] top-40 h-[320px] w-[320px] rounded-full bg-signal/15 blur-[120px]"
        aria-hidden
      />

      <Container className="relative">
        <div className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-ink-line bg-ink-soft/70 px-3 py-1 text-xs font-medium text-paper/80">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-signal opacity-70" />
                <span className="relative inline-flex size-2 rounded-full bg-signal" />
              </span>
              {hero.eyebrow}
            </span>

            <h1 className="text-display mt-6 text-4xl leading-[1.03] text-balance text-paper sm:text-5xl lg:text-6xl">
              {hero.title} <GradientText>{hero.highlight}</GradientText>.
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              {hero.description}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Cta href="/contact" locale={locale} variant="signal" size="lg" withArrow>
                {hero.primaryCta}
              </Cta>
              <Cta
                href="/how-it-works"
                locale={locale}
                variant="outline"
                size="lg"
                className="border-ink-line text-paper hover:bg-ink-line/40"
              >
                {hero.secondaryCta}
              </Cta>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              {hero.trustLine}
            </p>
          </div>

          <div className="relative">
            <TapCard content={content.components.tapCard} />
          </div>
        </div>
      </Container>
    </section>
  );
}

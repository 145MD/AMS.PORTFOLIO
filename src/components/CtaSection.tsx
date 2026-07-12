import { Container, Cta } from "@/components/primitives";
import { NfcRipple } from "@/components/NfcRipple";

export function CtaSection({
  title = "Bring the tap to your institute",
  description = "A short walkthrough is the fastest way to see it. We'll set it up around your classes and fees.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <Container>
      <div className="section-ink relative overflow-hidden rounded-[2rem] border border-ink-line px-6 py-16 text-center sm:px-10 sm:py-20">
        <NfcRipple className="opacity-30" count={5} duration={4} />
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-signal/15 blur-[100px]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-xl">
          <h2 className="text-display text-3xl leading-tight text-balance sm:text-4xl">{title}</h2>
          <p className="mt-4 text-muted-foreground">{description}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Cta href="/contact" variant="signal" size="lg" withArrow>
              Request a demo
            </Cta>
            <Cta
              href="/pricing"
              variant="outline"
              size="lg"
              className="border-ink-line text-paper hover:bg-ink-line/40"
            >
              See pricing
            </Cta>
          </div>
        </div>
      </div>
    </Container>
  );
}

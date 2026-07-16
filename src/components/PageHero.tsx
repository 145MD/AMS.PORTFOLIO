import { Container, Eyebrow } from "@/components/primitives";
import { NfcRipple } from "@/components/NfcRipple";

/** Compact ink hero used at the top of interior pages. */
export function PageHero({
  eyebrow,
  title,
  description,
  ripple = true,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  ripple?: boolean;
}) {
  return (
    <section className="section-ink relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid text-paper/[0.05]" aria-hidden />
      {ripple && (
        <div className="pointer-events-none absolute right-0 top-1/2 h-80 w-80 -translate-y-1/2 translate-x-1/3 opacity-40">
          <NfcRipple count={4} duration={3.4} />
        </div>
      )}
      <div
        className="pointer-events-none absolute -top-20 left-1/4 h-64 w-64 rounded-full bg-violet/25 blur-[110px]"
        aria-hidden
      />
      <Container className="relative">
        <div className="max-w-2xl py-16 sm:py-20">
          {eyebrow && <Eyebrow className="text-paper/70">{eyebrow}</Eyebrow>}
          <h1 className="text-display mt-4 text-4xl leading-[1.05] text-balance text-paper sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {description}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}

import { Container } from "@/components/primitives";
import { Reveal } from "@/components/Reveal";
import type { MarketingContent } from "@/lib/localized-content";

export function StatStrip({ stats }: { stats: MarketingContent["stats"] }) {
  return (
    <div className="border-y border-border bg-background">
      <Container>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-8 py-12 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className="flex flex-col gap-1">
                <dt className="sr-only">{s.label}</dt>
                <span className="text-display text-3xl text-foreground sm:text-4xl">{s.value}</span>
                <span className="text-sm text-muted-foreground">{s.label}</span>
              </div>
            </Reveal>
          ))}
        </dl>
      </Container>
    </div>
  );
}

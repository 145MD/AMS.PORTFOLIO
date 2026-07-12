import { Check } from "lucide-react";
import { Container, Cta } from "@/components/primitives";
import { Reveal } from "@/components/Reveal";
import { tiers } from "@/lib/content";
import { cn } from "@/lib/utils";

function formatLKR(amount: number) {
  return new Intl.NumberFormat("en-LK").format(amount);
}

export function PricingTable() {
  return (
    <Container>
      <div className="grid items-stretch gap-5 lg:grid-cols-3">
        {tiers.map((tier, i) => {
          const highlight = tier.highlight;
          return (
            <Reveal key={tier.name} delay={i * 0.07}>
              <div
                className={cn(
                  "flex h-full flex-col rounded-3xl border p-8",
                  highlight
                    ? "section-ink border-ink-line shadow-xl shadow-ink/20"
                    : "border-border bg-card",
                )}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-display text-lg">{tier.name}</h3>
                  {highlight && (
                    <span className="rounded-full bg-signal px-2.5 py-0.5 text-xs font-semibold text-signal-foreground">
                      Most popular
                    </span>
                  )}
                </div>
                <p className={cn("mt-2 text-sm", "text-muted-foreground")}>{tier.blurb}</p>

                <div className="mt-6 flex items-end gap-1.5">
                  {tier.priceLKR === null ? (
                    <span className="text-display text-3xl">Custom</span>
                  ) : (
                    <>
                      <span className="mb-1 text-sm text-muted-foreground">LKR</span>
                      <span className="text-display text-4xl">{formatLKR(tier.priceLKR)}</span>
                    </>
                  )}
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{tier.cadence}</p>

                <div className="mt-6">
                  <Cta
                    href={tier.cta.href}
                    variant={highlight ? "signal" : "primary"}
                    size="lg"
                    className="w-full"
                    withArrow
                  >
                    {tier.cta.label}
                  </Cta>
                </div>

                <ul className="mt-8 space-y-3 border-t border-border pt-6 text-sm">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check
                        className={cn("mt-0.5 size-4 shrink-0", highlight ? "text-signal" : "text-violet")}
                      />
                      <span className={highlight ? "text-paper/90" : "text-foreground"}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
      <p className="mt-8 text-center text-xs text-muted-foreground">
        Prices shown are placeholders in LKR. Final pricing confirmed during onboarding.
      </p>
    </Container>
  );
}

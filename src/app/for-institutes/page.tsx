import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, Container, SectionHeading } from "@/components/primitives";
import { Reveal } from "@/components/Reveal";
import { FeatureBento } from "@/components/FeatureBento";
import { HowItWorksSteps } from "@/components/HowItWorksSteps";
import { CtaSection } from "@/components/CtaSection";
import { getIcon } from "@/lib/icons";
import { audiences, features } from "@/lib/content";

const audience = audiences.find((a) => a.id === "institutes")!;
const subset = features.filter((f) =>
  ["attendance", "fees", "receipts", "notifications"].includes(f.id),
);

export const metadata: Metadata = {
  title: "For institutes",
  description:
    "Run attendance and fee collection from one screen. ClassPass gives institute owners and admins a paperless register, a live fee ledger and a branded subdomain.",
};

export default function ForInstitutesPage() {
  return (
    <>
      <PageHero eyebrow={audience.eyebrow} title={audience.title} description={audience.body} />

      <Section>
        <Container>
          <div className="grid gap-5 sm:grid-cols-2">
            {audience.points.map((p, i) => {
              const Icon = getIcon(p.icon);
              return (
                <Reveal key={p.title} delay={(i % 2) * 0.06}>
                  <div className="flex h-full gap-4 rounded-2xl border border-border bg-card p-6">
                    <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-ink text-signal">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <h3 className="text-display text-base">{p.title}</h3>
                      <p className="mt-1.5 text-sm text-muted-foreground">{p.body}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <SectionHeading eyebrow="What runs the desk" title="The capabilities you'll use daily" className="mb-14" />
        </Container>
        <FeatureBento heading={false} features={subset} />
      </Section>

      <Section>
        <HowItWorksSteps />
      </Section>

      <Section className="pt-0">
        <CtaSection title="Ready to go paperless?" />
      </Section>
    </>
  );
}

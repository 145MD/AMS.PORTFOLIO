import type { Metadata } from "next";
import { Target, Feather, ShieldCheck, Sparkles } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section, Container, SectionHeading } from "@/components/primitives";
import { Reveal } from "@/components/Reveal";
import { CtaSection } from "@/components/CtaSection";
import { site } from "@/lib/content";

const values = [
  {
    icon: Target,
    title: "Built for one job",
    body: "Attendance and fees for real institutes — not a bloated all-in-one. We do the desk work well and stay out of the way.",
  },
  {
    icon: Feather,
    title: "Light to run",
    body: "No student app, no training day. If someone can tap a card, they can use ClassPass.",
  },
  {
    icon: ShieldCheck,
    title: "Trustworthy by default",
    body: "Scoped access, isolated data and an audit trail — because a system of record has to be trusted to be useful.",
  },
  {
    icon: Sparkles,
    title: "Made in Sri Lanka",
    body: "Designed around how local tuition institutes actually collect fees and mark attendance, priced in LKR.",
  },
];

export const metadata: Metadata = {
  title: "About",
  description:
    "Why ClassPass exists: replacing the paper register and fee book with a one-second NFC tap, built for educational institutes in Sri Lanka.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="We came for the paper register"
        description="Every institute loses time and trust to paper attendance and hand-written fee books. ClassPass replaces both with a tap."
      />

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <Reveal>
              <h2 className="text-display text-2xl sm:text-3xl">Our story</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="space-y-5 text-muted-foreground">
                <p>
                  {site.name} started from a familiar frustration: classes beginning late because
                  of roll call, and month-ends spent reconciling a fee book nobody fully trusted.
                  The information existed — it was just trapped on paper.
                </p>
                <p>
                  So we built the smallest thing that fixes it. A student taps an NFC card at the
                  door and attendance is marked for the right session. If they owe a fee, staff take
                  the payment on the same tap, print a receipt, and a confirmation goes to the parent
                  automatically.
                </p>
                <p>
                  Around that core we added what institutes actually need next — an instructor portal
                  scoped to only what each person teaches, revenue-share earnings, and a branded
                  subdomain for every institute on one shared platform.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <SectionHeading eyebrow="What we value" title="How we build" className="mb-14" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 4) * 0.06}>
                <div className="h-full rounded-2xl border border-border bg-card p-6">
                  <div className="grid size-10 place-items-center rounded-xl bg-ink text-signal">
                    <v.icon className="size-5" />
                  </div>
                  <h3 className="text-display mt-4 text-base">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <CtaSection title="Let's move you off paper" />
      </Section>
    </>
  );
}

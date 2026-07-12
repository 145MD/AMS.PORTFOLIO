import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, Container, SectionHeading } from "@/components/primitives";
import { HowItWorksSteps } from "@/components/HowItWorksSteps";
import { ReceiptShowcase } from "@/components/ReceiptShowcase";
import { CtaSection } from "@/components/CtaSection";
import { Reveal } from "@/components/Reveal";

const detail = [
  {
    title: "The tap is the record",
    body: "There's no roll call and no sign-in sheet. A student presents the NFC card they already carry, the card-checker resolves it to a person and the right class session, and attendance is written the instant they arrive — nothing to transcribe later.",
  },
  {
    title: "Fees live on the class",
    body: "You define each fee once — amount, frequency and due day. When a student who owes taps in, staff record the payment against that fee in seconds, so dues stay current on their own.",
  },
  {
    title: "The paperwork sends itself",
    body: "A thermal receipt prints from the same flow, and an SMS plus email confirmation reaches the parent automatically — funded from your institute's own prepaid SMS wallet.",
  },
];

export const metadata: Metadata = {
  title: "How it works",
  description:
    "From issuing a card to the SMS confirmation — how ClassPass turns one NFC tap into attendance, a payment, a receipt and a parent notification.",
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="One tap in, everything else follows"
        description="The workflow is deliberately small. The card carries the identity; the system keeps the record."
      />

      <Section>
        <HowItWorksSteps heading={false} />
      </Section>

      <Section tone="muted">
        <Container>
          <SectionHeading eyebrow="Why it holds up" title="Accurate underneath, effortless on top" className="mb-14" />
          <div className="grid gap-5 md:grid-cols-3">
            {detail.map((d, i) => (
              <Reveal key={d.title} delay={i * 0.07}>
                <div className="h-full rounded-2xl border border-border bg-card p-6">
                  <span className="text-display text-sm text-signal-foreground">0{i + 1}</span>
                  <h3 className="text-display mt-2 text-lg">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <ReceiptShowcase />
      </Section>

      <Section className="pt-0">
        <CtaSection title="See it run on your classes" />
      </Section>
    </>
  );
}

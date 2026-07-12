import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section, Container } from "@/components/primitives";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CtaSection } from "@/components/CtaSection";
import { faqs, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about ClassPass — hardware, attendance, fees, receipts, SMS billing, security and multi-institute support.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Questions, answered"
        description="If something isn't covered here, ask us directly — we're quick to reply."
      />

      <Section>
        <Container>
          <FaqAccordion items={faqs} />
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-muted-foreground">
            Still curious?{" "}
            <Link href="/contact" className="font-medium text-violet underline-offset-4 hover:underline">
              Get in touch
            </Link>{" "}
            or email{" "}
            <a href={`mailto:${site.email}`} className="font-medium text-foreground underline underline-offset-4">
              {site.email}
            </a>
            .
          </p>
        </Container>
      </Section>

      <Section className="pt-0">
        <CtaSection />
      </Section>
    </>
  );
}

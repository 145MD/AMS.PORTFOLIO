import { Container, SectionHeading } from "@/components/primitives";
import { Reveal } from "@/components/Reveal";
import { getIcon } from "@/lib/icons";
import { steps } from "@/lib/content";

export function HowItWorksSteps({ heading = true }: { heading?: boolean }) {
  return (
    <Container>
      {heading && (
        <SectionHeading
          eyebrow="How it works"
          title="Four beats, one tap"
          description="No workflow to learn. The card does the work; the record keeps itself."
          className="mb-14"
        />
      )}

      <ol className="relative grid gap-6 md:grid-cols-4">
        {/* connecting line on desktop */}
        <div
          className="pointer-events-none absolute left-0 right-0 top-[2.15rem] hidden h-px bg-border md:block"
          aria-hidden
        />
        {steps.map((step, i) => {
          const Icon = getIcon(step.icon);
          return (
            <Reveal as="li" key={step.n} delay={i * 0.08} className="relative">
              <div className="flex flex-col gap-4">
                <div className="relative z-10 flex items-center gap-3">
                  <div className="grid size-[4.3rem] place-items-center rounded-2xl border border-border bg-card shadow-sm">
                    <Icon className="size-6 text-violet" />
                  </div>
                  <span className="text-display text-4xl text-border">0{step.n}</span>
                </div>
                <div>
                  <h3 className="text-display text-lg">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </ol>
    </Container>
  );
}

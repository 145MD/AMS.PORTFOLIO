import { createElement } from "react";
import { Check } from "lucide-react";
import { Container, SectionHeading } from "@/components/primitives";
import { Reveal } from "@/components/Reveal";
import { getIcon } from "@/lib/icons";
import { features as allFeatures, type Feature } from "@/lib/content";
import { cn } from "@/lib/utils";

function FeatureCard({ feature, large }: { feature: Feature; large?: boolean }) {
  const accent = feature.accent;
  return (
    <div
      className={cn(
        "flex h-full flex-col rounded-3xl border p-6 sm:p-7",
        accent
          ? "section-ink border-ink-line"
          : "border-border bg-card",
        large && "sm:col-span-2",
      )}
    >
      <div
        className={cn(
          "grid size-11 place-items-center rounded-xl",
          accent ? "bg-signal text-signal-foreground" : "bg-ink text-signal",
        )}
      >
        {createElement(getIcon(feature.icon), { className: "size-5" })}
      </div>
      <h3 className="text-display mt-5 text-xl">{feature.title}</h3>
      <p className={cn("mt-2 text-sm leading-relaxed", "text-muted-foreground")}>
        {feature.summary}
      </p>
      <ul className="mt-5 space-y-2 border-t border-border pt-5">
        {feature.points.map((p) => (
          <li key={p} className="flex items-start gap-2.5 text-sm">
            <Check className={cn("mt-0.5 size-4 shrink-0", accent ? "text-signal" : "text-violet")} />
            <span className={accent ? "text-paper/90" : "text-foreground"}>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function FeatureBento({
  heading = true,
  features = allFeatures,
}: {
  heading?: boolean;
  features?: Feature[];
}) {
  return (
    <Container>
      {heading && (
        <SectionHeading
          eyebrow="One system, end to end"
          title="Everything an institute runs on the desk"
          description="From the tap at the door to the receipt in a parent's hand — the pieces are designed to work as one."
          className="mb-14 max-w-2xl"
        />
      )}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <Reveal key={f.id} delay={(i % 3) * 0.06} className={f.accent ? "sm:col-span-2 lg:col-span-1" : ""}>
            <FeatureCard feature={f} />
          </Reveal>
        ))}
      </div>
    </Container>
  );
}

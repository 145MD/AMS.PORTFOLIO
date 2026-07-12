import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/** Max-width page gutter. */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}

/** Vertical section rhythm. Pass `tone="ink"` for a full-bleed dark band. */
export function Section({
  className,
  tone = "paper",
  children,
  id,
}: {
  className?: string;
  tone?: "paper" | "ink" | "muted";
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-20 sm:py-28",
        tone === "ink" && "section-ink",
        tone === "muted" && "bg-muted/50",
        className,
      )}
    >
      {children}
    </section>
  );
}

/** Small uppercase label above a heading. */
export function Eyebrow({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground",
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="text-display max-w-2xl text-balance text-3xl leading-[1.05] sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {description && (
        <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

/** Signal-green gradient text for the one word you want remembered. */
export function GradientText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "bg-gradient-to-br from-signal via-signal to-violet bg-clip-text text-transparent",
        className,
      )}
    >
      {children}
    </span>
  );
}

type CtaProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "signal" | "outline" | "ghost";
  size?: "md" | "lg";
  className?: string;
  withArrow?: boolean;
  onClick?: () => void;
};

const ctaBase =
  "group inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all outline-none focus-visible:ring-3 focus-visible:ring-violet/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:translate-y-px disabled:pointer-events-none disabled:opacity-50";

const ctaVariants: Record<NonNullable<CtaProps["variant"]>, string> = {
  primary:
    "bg-ink text-paper hover:bg-ink/90 shadow-sm shadow-ink/10",
  signal:
    "bg-signal text-signal-foreground hover:brightness-95 shadow-sm shadow-signal/20",
  outline:
    "border border-border bg-transparent text-foreground hover:bg-muted",
  ghost: "bg-transparent text-foreground hover:bg-muted",
};

const ctaSizes: Record<NonNullable<CtaProps["size"]>, string> = {
  md: "h-10 px-5 text-sm",
  lg: "h-12 px-7 text-base",
};

function isExternal(href: string) {
  return /^https?:\/\//.test(href) || href.startsWith("mailto:") || href.startsWith("tel:");
}

/** The single call-to-action element used everywhere. */
export function Cta({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  withArrow = false,
  onClick,
}: CtaProps) {
  const classes = cn(ctaBase, ctaVariants[variant], ctaSizes[size], className);
  const inner = (
    <>
      {children}
      {withArrow && (
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
      )}
    </>
  );

  if (isExternal(href)) {
    const external = /^https?:\/\//.test(href);
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={onClick}>
      {inner}
    </Link>
  );
}

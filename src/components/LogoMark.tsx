import { cn } from "@/lib/utils";

/**
 * The real ClassPass wordmark (navy wordmark + blue NFC-wave glyphs), sourced from
 * the app's brand assets in AMS.PWA. Use `tone="dark"` on dark/ink backgrounds to
 * switch to the near-white wordmark variant.
 *
 * Aspect ratio 2234×607 ≈ 3.68:1.
 */
export function LogoMark({
  className,
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const src = tone === "dark" ? "/images/logos/logo-ams-h-dark.svg" : "/images/logos/logo-ams-h.svg";
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt="ClassPass"
      width={132}
      height={36}
      className={cn("h-7 w-auto select-none", className)}
    />
  );
}

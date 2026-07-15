import type { LucideIcon } from "lucide-react";
import type { FeatureVideo as FeatureVideoAsset } from "@/lib/content";

export function FeatureVideo({
  id,
  title,
  Icon,
  video,
}: {
  id: string;
  title: string;
  Icon: LucideIcon;
  video?: FeatureVideoAsset;
}) {
  const src = video?.src.trim();

  if (!src) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-3 bg-grid p-8 text-muted-foreground/40">
        <Icon className="size-16 text-violet/40" />
        <span className="font-mono text-xs uppercase tracking-widest">{id}</span>
      </div>
    );
  }

  return (
    <video
      aria-label={video?.label ?? `${title} animation`}
      className="h-full w-full object-cover"
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      poster={video?.poster}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

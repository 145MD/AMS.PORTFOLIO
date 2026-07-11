import { Sparkles } from "lucide-react";

export function Marquee({ items }: { items: string[] }) {
  return (
    <div className="marquee relative overflow-hidden border-y border-white/10 bg-[#031530] py-5" aria-hidden="true">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#031530] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#031530] to-transparent" />
      <div className="marquee-track">
        {[...items, ...items].map((item, index) => (
          <span key={index} className="flex items-center gap-4 px-7 text-xs font-black uppercase tracking-[.22em] text-white/40 transition hover:text-white">
            {item}
            <Sparkles className="size-3.5 text-[#1D8AF4]" />
          </span>
        ))}
      </div>
    </div>
  );
}

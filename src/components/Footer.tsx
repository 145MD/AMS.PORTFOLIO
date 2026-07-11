import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Brand } from "@/components/Brand";
import { Reveal } from "@/components/Reveal";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#050c16] text-white">
      <div className="footer-hairline absolute inset-x-0 top-0 h-px" />
      <div className="blue-orb absolute -bottom-40 left-1/2 size-[480px] -translate-x-1/2 rounded-full opacity-40 blur-[140px]" />
      <div className="site-container relative py-16 lg:py-20">
        <Reveal variant="fade">
          <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-[1.4fr_.7fr_.7fr]">
            <div className="max-w-md"><Brand inverse /><p className="mt-6 text-sm leading-7 text-white/45">The operating layer for modern educational institutes—attendance, fees and insights connected in real time.</p></div>
            <div><p className="mb-5 text-[10px] font-black uppercase tracking-[.2em] text-[#1D8AF4]">Product</p><div className="flex flex-col items-start gap-3 text-sm text-white/55"><Link href="/features" className="transition hover:translate-x-1 hover:text-white">Features</Link><Link href="/packages" className="transition hover:translate-x-1 hover:text-white">Packages</Link><Link href="/features#architecture" className="transition hover:translate-x-1 hover:text-white">Architecture</Link></div></div>
            <div><p className="mb-5 text-[10px] font-black uppercase tracking-[.2em] text-[#1D8AF4]">Get started</p><a href="mailto:support@ams.com?subject=ClassPass%20product%20demo" className="group inline-flex items-center gap-2 text-sm font-bold transition hover:text-[#1D8AF4]">Book a product demo <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a></div>
          </div>
          <div className="flex flex-col gap-2 pt-7 text-xs text-white/30 sm:flex-row sm:justify-between"><p>© {new Date().getFullYear()} ClassPass. All rights reserved.</p><p>Built for better education operations.</p></div>
        </Reveal>
      </div>
      <div className="pointer-events-none relative select-none overflow-hidden" aria-hidden="true">
        <p className="-mb-[.22em] bg-gradient-to-b from-white/[.07] to-transparent bg-clip-text text-center text-[clamp(4rem,15vw,12rem)] font-black leading-none tracking-[-.06em] text-transparent">CLASSPASS</p>
      </div>
    </footer>
  );
}

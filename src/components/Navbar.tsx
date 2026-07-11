"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Brand } from "@/components/Brand";
import { navigation } from "@/data/site";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
    >
      <div className={`mx-auto flex h-16 max-w-[1240px] items-center justify-between rounded-full border border-white/10 bg-[#031530]/88 px-4 text-white backdrop-blur-xl transition-all duration-500 sm:px-5 ${scrolled || open ? "shadow-[0_18px_55px_rgba(0,8,24,.4)]" : "shadow-[0_10px_35px_rgba(0,8,24,.25)]"}`}>
        <Brand inverse />

        <nav className="hidden items-center gap-2 md:flex" aria-label="Main navigation">
          {navigation.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[.12em] outline-none transition ${active ? "bg-white/12 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08)]" : "text-white/40 hover:bg-white/8 hover:text-white"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <a href="mailto:support@ams.com?subject=ClassPass%20product%20demo" className="group hidden items-center gap-2 rounded-xl bg-gradient-to-r from-[#0C55D0] to-[#1D8AF4] px-4 py-2.5 text-xs font-extrabold text-white shadow-[0_10px_28px_rgba(29,138,244,.22)] transition hover:-translate-y-0.5 hover:brightness-110 md:flex">
          Book a demo <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        <button onClick={() => setOpen((value) => !value)} className="rounded-xl bg-white/10 p-2.5 text-white md:hidden" aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="mx-auto mt-2 flex max-w-[1240px] flex-col gap-1 rounded-2xl bg-[#031530]/96 p-4 shadow-2xl ring-1 ring-white/10 backdrop-blur-xl md:hidden">
            {navigation.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className={`rounded-xl px-4 py-3 text-sm font-bold ${pathname === item.href ? "bg-[#0C55D0] text-white" : "text-white/55"}`}>{item.label}</Link>)}
            <a href="mailto:support@ams.com?subject=ClassPass%20product%20demo" className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#1D8AF4] px-4 py-3 text-sm font-extrabold text-white">Book a demo <ArrowUpRight className="size-4" /></a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

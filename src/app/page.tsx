"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, CreditCard, Database, Radio, ShieldCheck, Users, Wallet, Zap } from "lucide-react";
import Link from "next/link";
import { Magnetic } from "@/components/Magnetic";
import { Marquee } from "@/components/Marquee";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { features, stats } from "@/data/site";

const ease = [0.22, 1, 0.36, 1] as const;

function HeroLine({ children, index }: { children: React.ReactNode; index: number }) {
  return (
    <span className="block overflow-hidden pb-[.08em] -mb-[.08em]">
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.9, ease, delay: 0.15 + index * 0.13 }}
      >
        {children}
      </motion.span>
    </span>
  );
}

function SystemMap() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const nodes = [
    { icon: CreditCard, label: "NFC identity", position: "left-[3%] top-[14%]" },
    { icon: Users, label: "Students", position: "right-[2%] top-[18%]" },
    { icon: Wallet, label: "Fee status", position: "left-[1%] bottom-[15%]" },
    { icon: Database, label: "Live records", position: "right-[4%] bottom-[12%]" },
  ];

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[560px] [perspective:1000px]"
      onPointerMove={(event) => {
        const box = event.currentTarget.getBoundingClientRect();
        setTilt({ x: ((event.clientY - box.top) / box.height - 0.5) * -7, y: ((event.clientX - box.left) / box.width - 0.5) * 8 });
      }}
      onPointerLeave={() => setTilt({ x: 0, y: 0 })}
    >
      <div className="blue-aurora absolute inset-[8%] rounded-full blur-[70px]" />
      <div className="absolute inset-[11%] rounded-full border border-black/10" />
      <div className="absolute inset-[23%] rounded-full border border-dashed border-[#1D8AF4]/30 motion-safe:animate-[spin_30s_linear_infinite]" />
      <svg className="absolute inset-0 size-full" viewBox="0 0 560 560" fill="none" aria-hidden="true">
        <path className="data-path" d="M90 120 C190 155 175 245 280 280 C375 312 382 410 478 446" stroke="#1D8AF4" strokeWidth="1.5" strokeDasharray="8 12" />
        <path className="data-path data-path-delay" d="M470 130 C390 165 380 245 280 280 C175 320 170 405 80 440" stroke="#0C55D0" strokeWidth="1.5" strokeDasharray="8 12" />
      </svg>

      <div className="absolute inset-[22%] overflow-hidden rounded-[28px] border border-white/15 bg-[#19171d]/92 p-4 shadow-[0_35px_90px_rgba(45,24,45,.38)] backdrop-blur-xl transition-transform duration-200" style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}>
        <div className="flex items-center justify-between border-b border-white/10 pb-3"><div><p className="text-[7px] font-black uppercase tracking-[.18em] text-[#1D8AF4]">Institute command center</p><p className="mt-1 text-[11px] font-black text-white">Good morning, Admin</p></div><span className="flex items-center gap-1 text-[7px] font-bold text-blue-300"><span className="status-pulse size-1.5 rounded-full bg-[#1D8AF4]" /> Live</span></div>
        <div className="mt-3 grid grid-cols-2 gap-2"><div className="rounded-xl bg-white/[.06] p-3"><p className="text-[7px] font-bold text-white/35">Attendance</p><p className="mt-1 text-lg font-black text-white">94.2%</p><svg viewBox="0 0 100 28" className="mt-1 h-7 w-full" fill="none"><path className="chart-line" d="M1 24 C15 22 17 13 30 16 S48 8 59 12 S75 4 99 3" stroke="#1D8AF4" strokeWidth="2" strokeLinecap="round" /></svg></div><div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#0C55D0] to-[#1D8AF4] p-3"><p className="text-[7px] font-bold text-white/70">NFC scanner</p><Radio className="mx-auto mt-2 size-7 text-white" /><div className="nfc-scan absolute inset-x-2 top-6 h-px bg-white shadow-[0_0_10px_white]" /><p className="mt-1 text-center text-[7px] font-black text-white">READY</p></div></div>
        <div className="mt-2 rounded-xl bg-white/[.045] p-2.5"><div className="flex items-center justify-between"><p className="text-[7px] font-bold text-white/40">Today&apos;s flow</p><p className="text-[7px] font-black text-[#7DBDFA]">+12.4%</p></div><div className="mt-2 flex h-8 items-end gap-1">{[35, 62, 48, 80, 58, 94, 72, 88].map((height, index) => <span key={index} className="chart-bar flex-1 rounded-sm bg-gradient-to-t from-[#0C55D0] to-[#1D8AF4]" style={{ height: `${height}%`, animationDelay: `${index * 80}ms` }} />)}</div></div>
      </div>

      {nodes.map((node, index) => <div key={node.label} className={`float-node absolute ${node.position} w-32 rounded-2xl border border-white/10 bg-[#071d3c]/85 p-3.5 shadow-[0_18px_45px_rgba(0,8,24,.3)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[#1D8AF4]/50`} style={{ animationDelay: `${index * -0.8}s` }}><div className="flex items-center gap-2.5"><span className="flex size-8 items-center justify-center rounded-lg bg-[#1D8AF4]/10"><node.icon className="size-4 text-[#1D8AF4]" /></span><div><p className="text-[9px] font-bold text-white">{node.label}</p><p className="mt-1 flex items-center gap-1 text-[7px] text-white/35"><span className="status-pulse size-1 rounded-full bg-[#1D8AF4]" /> synced now</p></div></div><span className="absolute -right-1 -top-1 flex size-4 items-center justify-center rounded-full bg-[#0C55D0] text-[7px] font-black text-white">{index + 1}</span></div>)}
    </div>
  );
}

function CursorBento({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  return (
    <article onPointerMove={(event) => { const box = event.currentTarget.getBoundingClientRect(); setPosition({ x: ((event.clientX - box.left) / box.width) * 100, y: ((event.clientY - box.top) / box.height) * 100 }); }} className={`group relative min-h-64 overflow-hidden p-7 transition md:p-9 ${dark ? "bg-[#031530] text-white" : "bg-white text-[#031530]"}`}>
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: `radial-gradient(380px circle at ${position.x}% ${position.y}%, ${dark ? "rgba(29,138,244,.24)" : "rgba(12,85,208,.24)"}, transparent 55%)` }} />
      <div className="relative">{children}</div><div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#0C55D0] to-[#1D8AF4] transition-transform duration-500 group-hover:scale-x-100" />
    </article>
  );
}

export default function Home() {
  return (
    <>
      <section className="relative min-h-[900px] overflow-hidden bg-[#020b18] pb-24 pt-36 text-white lg:min-h-screen lg:pt-40">
        <div className="ink-grid absolute inset-0 opacity-60" />
        <div className="blue-orb absolute -left-48 top-16 size-[520px] rounded-full blur-[120px]" />
        <div className="blue-orb-alt absolute -right-40 bottom-10 size-[500px] rounded-full blur-[130px]" />
        <div className="site-container relative grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease }} className="mb-8 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[.2em] text-[#1D8AF4]"><span className="h-px w-8 bg-[#1D8AF4]" /> Institute operations, reimagined</motion.div>
            <h1 className="max-w-3xl text-balance text-[clamp(3.8rem,7vw,7rem)] font-black leading-[.88] tracking-[-.075em]">
              <HeroLine index={0}>Run less admin.</HeroLine>
              <HeroLine index={1}><span className="gradient-text-animated">Build more</span> impact.</HeroLine>
            </h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease, delay: 0.5 }} className="mt-8 max-w-xl text-lg leading-8 text-white/50">NFC attendance, fee visibility and institute operations—connected in one live system built for teams that are ready to move forward.</motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease, delay: 0.62 }} className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Magnetic className="inline-flex">
                <a href="mailto:support@ams.com?subject=ClassPass%20product%20demo" className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#0C55D0] to-[#1D8AF4] px-6 py-4 text-sm font-extrabold text-white shadow-[0_18px_45px_rgba(29,138,244,.22)] transition hover:brightness-110">See ClassPass live <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></a>
              </Magnetic>
              <Link href="/features" className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[.05] px-6 py-4 text-sm font-bold text-white transition hover:bg-white/10">Explore the system</Link>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.8 }} className="mt-8 flex flex-wrap gap-5 text-[10px] font-bold uppercase tracking-[.12em] text-white/35">{["No app install", "Role-secured", "Real-time"].map((item) => <span key={item} className="flex items-center gap-2"><Check className="size-3 text-[#1D8AF4]" />{item}</span>)}</motion.div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.94, filter: "blur(8px)" }} animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }} transition={{ duration: 1, ease, delay: 0.35 }}><SystemMap /></motion.div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#031530] via-[#0C55D0] to-[#1D8AF4] text-white">
        <Stagger step={0.12} className="site-container grid divide-y divide-white/15 sm:grid-cols-3 sm:divide-x sm:divide-y-0">{stats.map((stat) => <StaggerItem key={stat.value} variant="scale"><div className="group px-6 py-8 transition-colors hover:bg-white/[.06]"><p className="text-3xl font-black tracking-[-.05em] transition-transform duration-300 group-hover:-translate-y-0.5">{stat.value}</p><p className="mt-1 text-[10px] font-bold uppercase tracking-[.14em] text-white/55">{stat.label}</p></div></StaggerItem>)}</Stagger>
      </section>

      <Marquee items={["NFC attendance", "Fee automation", "Live dashboards", "Role-based access", "SMS & email alerts", "Multi-institute", "Real-time sync", "Checker PWA"]} />

      <section className="section-space relative bg-[#f4f8fc] text-[#031530]">
        <div className="soft-grid absolute inset-0" />
        <div className="site-container relative">
          <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
            <Reveal variant="left"><span className="text-[10px] font-black uppercase tracking-[.2em] text-[#1D8AF4]">The operating layer</span><h2 className="mt-5 text-balance text-5xl font-black leading-[.95] tracking-[-.06em] sm:text-6xl">One system.<br />Every signal.</h2></Reveal>
            <Reveal variant="right" delay={0.1}><p className="max-w-xl text-lg leading-8 text-slate-600 lg:ml-auto">ClassPass replaces fragmented registers and repetitive admin with a connected view of every student, class and payment.</p></Reveal>
          </div>
          <div className="mt-16 grid gap-px overflow-hidden rounded-[28px] bg-[#031530]/10 ring-1 ring-[#031530]/10 md:grid-cols-2">
            {features.map((feature, index) => { const dark = [0, 3, 4, 7].includes(index); return <Reveal key={feature.title} delay={(index % 4) * 0.05}><CursorBento dark={dark}><span className="text-[10px] font-black tracking-[.18em] text-[#1D8AF4]">0{index + 1}</span><feature.icon className="absolute right-0 top-0 size-6 text-[#1D8AF4]/35 transition-transform group-hover:scale-125" /><h3 className="mt-16 text-2xl font-black tracking-[-.04em]">{feature.title}</h3><p className={`mt-3 max-w-md text-sm leading-6 ${dark ? "text-white/45" : "text-slate-500"}`}>{feature.description}</p></CursorBento></Reveal>; })}
          </div>
        </div>
      </section>

      <section className="section-space overflow-hidden bg-[#020b18] text-white">
        <div className="site-container grid gap-14 lg:grid-cols-[.75fr_1.25fr]">
          <Reveal variant="left"><span className="text-[10px] font-black uppercase tracking-[.2em] text-[#1D8AF4]">From tap to insight</span><h2 className="mt-5 text-5xl font-black leading-[.95] tracking-[-.06em]">A better daily rhythm.</h2><p className="mt-6 text-base leading-7 text-white/45">One student interaction updates the whole operating picture.</p></Reveal>
          <Stagger step={0.12} className="space-y-3">{[
            { icon: CreditCard, number: "01", title: "Tap", text: "The student’s secure NFC identity is read instantly." },
            { icon: Zap, number: "02", title: "Verify", text: "Identity, class and fee status are validated in real time." },
            { icon: ShieldCheck, number: "03", title: "Sync", text: "Attendance and insights update across every authorized portal." },
          ].map((step) => <StaggerItem key={step.title} variant="right"><div className="group grid grid-cols-[50px_1fr_auto] items-center gap-5 rounded-2xl border border-white/10 bg-white/[.035] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#1D8AF4]/40 hover:bg-[#0C55D0]/10 hover:shadow-[0_18px_45px_rgba(0,8,24,.35)]"><span className="text-xs font-black text-[#1D8AF4]">{step.number}</span><div><h3 className="text-lg font-black">{step.title}</h3><p className="mt-1 text-sm text-white/40">{step.text}</p></div><step.icon className="size-5 text-[#1D8AF4] transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6" /></div></StaggerItem>)}</Stagger>
        </div>
      </section>

      <section className="section-space bg-gradient-to-br from-[#031530] via-[#0C55D0] to-[#1D8AF4] text-white">
        <Reveal variant="scale" className="site-container grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end"><div><span className="text-[10px] font-black uppercase tracking-[.2em] text-blue-200">Built around your institute</span><h2 className="mt-5 max-w-4xl text-balance text-5xl font-black leading-[.95] tracking-[-.06em] sm:text-7xl">Ready to operate differently?</h2></div><Magnetic className="inline-flex"><Link href="/packages" className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#020b18] px-6 py-4 text-sm font-extrabold text-white transition hover:shadow-[0_20px_50px_rgba(2,11,24,.5)]">Find your package <ArrowRight className="size-4 transition group-hover:translate-x-1" /></Link></Magnetic></Reveal>
      </section>
    </>
  );
}

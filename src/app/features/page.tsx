import type { Metadata } from "next";
import { ArrowRight, Check, Database, Laptop, Server, Shield, Smartphone } from "lucide-react";
import Link from "next/link";
import { Magnetic } from "@/components/Magnetic";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { featureDetails } from "@/data/site";

export const metadata: Metadata = { title: "Features", description: "Explore the connected ClassPass platform for attendance, fees and institute operations." };

function FeatureSignal({ index, icon: Icon }: { index: number; icon: typeof Smartphone }) {
  return (
    <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden rounded-[28px] bg-[#031530]">
      <div className="ink-grid absolute inset-0" />
      <div className="absolute size-64 rounded-full border border-white/10" />
      <div className="orbit-ring absolute size-64"><span className="absolute left-1/2 top-0 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1D8AF4] shadow-[0_0_14px_rgba(29,138,244,.9)]" /></div>
      <div className="absolute size-44 rounded-full border border-dashed border-[#1D8AF4]/30 motion-safe:animate-[spin_24s_linear_infinite]" />
      <span className="float-slow relative flex size-28 items-center justify-center rounded-[24px] bg-gradient-to-br from-[#0C55D0] to-[#1D8AF4] shadow-[0_24px_65px_rgba(29,138,244,.3)]"><Icon className="size-11 text-white" strokeWidth={1.6} /></span>
      <span className="absolute left-6 top-6 text-[10px] font-black uppercase tracking-[.2em] text-[#1D8AF4]">Signal 0{index + 1}</span>
      <span className="absolute bottom-7 right-7 flex items-center gap-2 text-[8px] font-bold uppercase tracking-[.14em] text-white/35"><span className="status-pulse size-1.5 rounded-full bg-[#1D8AF4]" /> live module</span>
    </div>
  );
}

export default function FeaturesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#020b18] pb-28 pt-40 text-white">
        <div className="ink-grid absolute inset-0 opacity-60" /><div className="blue-orb-alt absolute -right-40 top-0 size-[500px] rounded-full blur-[120px]" />
        <Reveal className="site-container relative"><span className="text-[10px] font-black uppercase tracking-[.2em] text-[#1D8AF4]">Platform capabilities</span><h1 className="mt-6 max-w-5xl text-balance text-6xl font-black leading-[.9] tracking-[-.07em] sm:text-8xl">Every operation.<br /><span className="text-transparent bg-gradient-to-r from-[#0C55D0] to-[#1D8AF4] bg-clip-text">One clear system.</span></h1><p className="mt-8 max-w-2xl text-lg leading-8 text-white/50">Four connected modules replace slow, fragmented admin with a real-time operating picture.</p></Reveal>
      </section>

      <section className="section-space bg-[#f4f8fc] text-[#031530]">
        <div className="site-container space-y-24 lg:space-y-32">
          {featureDetails.map((feature, index) => <article id={feature.id} key={feature.id} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-24">
            <Reveal variant={index % 2 ? "right" : "left"} className={index % 2 ? "lg:order-2" : ""}><span className="text-[10px] font-black uppercase tracking-[.2em] text-[#0C55D0]">{feature.eyebrow}</span><h2 className="mt-5 text-5xl font-black leading-[.96] tracking-[-.06em] text-[#031530]">{feature.title}</h2><p className="mt-6 text-lg leading-8 text-slate-600">{feature.description}</p><Stagger step={0.09} delay={0.15} className="mt-8 space-y-3">{feature.points.map((point) => <StaggerItem key={point} variant="left"><p className="flex items-center gap-3 text-sm font-bold text-slate-700"><span className="flex size-6 items-center justify-center rounded-full bg-[#0C55D0]"><Check className="size-3 text-white" /></span>{point}</p></StaggerItem>)}</Stagger></Reveal>
            <Reveal variant={index % 2 ? "left" : "right"} delay={0.1} className={index % 2 ? "lg:order-1" : ""}><FeatureSignal index={index} icon={feature.icon} /></Reveal>
          </article>)}
        </div>
      </section>

      <section id="architecture" className="section-space bg-gradient-to-br from-[#031530] via-[#0C55D0] to-[#1D8AF4] text-white">
        <div className="site-container grid gap-16 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <Reveal><span className="text-[10px] font-black uppercase tracking-[.2em] text-blue-200">Built to hold the load</span><h2 className="mt-5 text-5xl font-black leading-[.95] tracking-[-.06em]">Infrastructure without the drama.</h2><p className="mt-6 leading-7 text-white/60">A microservices-inspired architecture handles NFC scans and real-time updates through secure gateways, PostgreSQL and Redis caching.</p><div className="mt-8 space-y-3">{["JWT and role-based access", "ACID-compliant PostgreSQL", "Next.js and .NET Core backend"].map((item) => <p key={item} className="flex items-center gap-3 text-sm font-bold"><Shield className="size-4 text-[#1D8AF4]" />{item}</p>)}</div></Reveal>
          <Stagger step={0.08} delay={0.1} className="relative grid grid-cols-2 gap-px overflow-hidden rounded-[28px] bg-white/15 ring-1 ring-white/15 sm:grid-cols-3">{[
            { icon: Smartphone, label: "Checker PWA" }, { icon: Laptop, label: "Admin portal" }, { icon: Server, label: "API gateway" }, { icon: Database, label: "PostgreSQL" }, { icon: Shield, label: "Auth service" }, { icon: Server, label: "Redis cache" },
          ].map((node, index) => <StaggerItem key={node.label} variant="scale"><div className={`${index === 2 ? "node-pulse bg-[#1D8AF4] text-white" : "bg-[#06377f] text-white"} group h-full p-7 text-center transition hover:bg-[#020b18] hover:text-white`}><node.icon className="mx-auto size-6 transition-transform duration-300 group-hover:scale-125" /><p className="mt-4 text-[10px] font-black uppercase tracking-[.14em]">{node.label}</p></div></StaggerItem>)}</Stagger>
        </div>
      </section>

      <section className="section-space bg-white text-[#031530]"><Reveal variant="scale" className="site-container flex flex-col justify-between gap-8 lg:flex-row lg:items-end"><h2 className="max-w-3xl text-5xl font-black leading-[.95] tracking-[-.06em] sm:text-6xl">See which package fits your operation.</h2><Magnetic className="inline-flex"><Link href="/packages" className="group inline-flex w-full items-center gap-3 rounded-xl bg-[#0C55D0] px-6 py-4 text-sm font-extrabold text-white transition hover:shadow-[0_18px_45px_rgba(12,85,208,.35)]">Compare packages <ArrowRight className="size-4 transition group-hover:translate-x-1" /></Link></Magnetic></Reveal></section>
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowRight, Server, Database, Smartphone, Laptop, CreditCard, Shield } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export function ArchitectureTeaser() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Robust & Scalable Architecture
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Built on a microservices-inspired design, AMS handles high throughput of NFC scans and real-time updates effortlessly. The system leverages secure API gateways, PostgreSQL, and Redis caching to ensure a seamless experience.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                { icon: Shield, text: "JWT Authentication & Role-Based Access" },
                { icon: Database, text: "ACID Compliant PostgreSQL Storage" },
                { icon: Server, text: "High-Performance Next.js & .NET Core Backend" },
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="bg-primary/10 p-1.5 rounded-md">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{item.text}</span>
                </li>
              ))}
            </ul>
            <Link href="/features#architecture" className={buttonVariants({ variant: "outline" })}>
              Deep Dive into Architecture <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative lg:h-[500px] flex items-center justify-center rounded-2xl border bg-muted/20 p-8"
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] rounded-2xl"></div>
            
            <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
              {/* Central Server Node */}
              <div className="absolute z-20 flex flex-col items-center justify-center w-24 h-24 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30">
                <Server className="h-8 w-8 mb-1" />
                <span className="text-[10px] font-bold">API Gateway</span>
              </div>

              {/* Orbiting Nodes */}
              {[
                { icon: Smartphone, label: "PWA Client", angle: 0 },
                { icon: Laptop, label: "Admin Portal", angle: 72 },
                { icon: Database, label: "PostgreSQL", angle: 144 },
                { icon: CreditCard, label: "NFC Cards", angle: 216 },
                { icon: Shield, label: "Auth Service", angle: 288 },
              ].map((node, i) => {
                const angleRad = (node.angle * Math.PI) / 180;
                const radius = 140; // Desktop radius
                const x = Math.cos(angleRad) * radius;
                const y = Math.sin(angleRad) * radius;

                return (
                  <motion.div
                    key={i}
                    className="absolute z-10 flex flex-col items-center justify-center w-20 h-20 rounded-2xl bg-background border shadow-sm"
                    initial={{ x: 0, y: 0, opacity: 0 }}
                    whileInView={{ x, y, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 50, delay: i * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    <node.icon className="h-6 w-6 text-primary mb-1" />
                    <span className="text-[10px] font-medium text-center leading-tight px-1">{node.label}</span>
                  </motion.div>
                );
              })}

              {/* SVG Connecting Lines - Simplified for teaser */}
              <svg className="absolute inset-0 w-full h-full -z-10 opacity-20" viewBox="0 0 400 400">
                <circle cx="200" cy="200" r="140" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="animate-[spin_60s_linear_infinite]" />
              </svg>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

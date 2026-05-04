"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SmartphoneNfc, Building2, CreditCard, CalendarCheck, Wallet, BellRing } from "lucide-react";
import Image from "next/image";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-zinc-50/50 dark:bg-zinc-950/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Deep Dive into Features</h1>
          <p className="text-xl text-muted-foreground">
            Explore the powerful modules that make ClassPass the ultimate solution for educational institutes.
          </p>
        </motion.div>

        <Tabs defaultValue="nfc" className="w-full">
          <TabsList className="flex flex-wrap h-auto justify-center mb-12 gap-2 bg-transparent">
            <TabsTrigger value="nfc" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground gap-2 text-base py-3 px-6 rounded-full border shadow-sm">
              <SmartphoneNfc className="h-4 w-4" /> NFC Tech
            </TabsTrigger>
            <TabsTrigger value="attendance" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground gap-2 text-base py-3 px-6 rounded-full border shadow-sm">
              <CalendarCheck className="h-4 w-4" /> Attendance
            </TabsTrigger>
            <TabsTrigger value="fees" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground gap-2 text-base py-3 px-6 rounded-full border shadow-sm">
              <Wallet className="h-4 w-4" /> Fee Management
            </TabsTrigger>
            <TabsTrigger value="pwa" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground gap-2 text-base py-3 px-6 rounded-full border shadow-sm">
              <CreditCard className="h-4 w-4" /> Mobile PWA
            </TabsTrigger>
          </TabsList>

          <div className="bg-background rounded-3xl border shadow-xl p-8 md:p-12">
            <TabsContent value="nfc" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-6">Frictionless Check-ins</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Equip every student with a secure NFC card. Checking into a class is as simple as a tap on the checker&apos;s mobile device.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3"><div className="h-2 w-2 rounded-full bg-primary" /> Instant Validation API</li>
                    <li className="flex items-center gap-3"><div className="h-2 w-2 rounded-full bg-primary" /> Tamper-proof UUID mapping</li>
                    <li className="flex items-center gap-3"><div className="h-2 w-2 rounded-full bg-primary" /> Quick Replacement Flow</li>
                  </ul>
                </div>
                <div className="relative aspect-square md:aspect-video rounded-2xl overflow-hidden bg-primary/5 flex items-center justify-center border">
                  <SmartphoneNfc className="h-32 w-32 text-primary opacity-50" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"></div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="attendance" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 relative aspect-square md:aspect-video rounded-2xl overflow-hidden bg-primary/5 flex items-center justify-center border">
                  <CalendarCheck className="h-32 w-32 text-primary opacity-50" />
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-3xl font-bold mb-6">Real-time Attendance</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    No more manual roll calls. As soon as a student taps their card, attendance is securely logged in PostgreSQL and reflected across all admin portals instantly.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3"><div className="h-2 w-2 rounded-full bg-primary" /> Class-wise daily logs</li>
                    <li className="flex items-center gap-3"><div className="h-2 w-2 rounded-full bg-primary" /> Exportable history reports</li>
                    <li className="flex items-center gap-3"><div className="h-2 w-2 rounded-full bg-primary" /> Offline sync support</li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="fees" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-6">Smart Fee Tracking</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Automate fee collection and tracking. At the time of a card tap, the system verifies not only identity but also current payment status.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3"><div className="h-2 w-2 rounded-full bg-primary" /> Automated Notifications (SMS/Email)</li>
                    <li className="flex items-center gap-3"><div className="h-2 w-2 rounded-full bg-primary" /> Grace period handling</li>
                    <li className="flex items-center gap-3"><div className="h-2 w-2 rounded-full bg-primary" /> Monthly/Annual structures</li>
                  </ul>
                </div>
                <div className="relative aspect-square md:aspect-video rounded-2xl overflow-hidden bg-primary/5 flex items-center justify-center border">
                  <Wallet className="h-32 w-32 text-primary opacity-50" />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="pwa" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 relative aspect-square md:aspect-video rounded-2xl overflow-hidden bg-primary/5 flex items-center justify-center border">
                  <CreditCard className="h-32 w-32 text-primary opacity-50" />
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-3xl font-bold mb-6">Card Checker PWA</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    A lightweight Progressive Web App that works on any modern mobile device equipped with an NFC reader. No app store installation required.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3"><div className="h-2 w-2 rounded-full bg-primary" /> WebNFC API Integration</li>
                    <li className="flex items-center gap-3"><div className="h-2 w-2 rounded-full bg-primary" /> Extremely low latency</li>
                    <li className="flex items-center gap-3"><div className="h-2 w-2 rounded-full bg-primary" /> Minimal bandwidth usage</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}

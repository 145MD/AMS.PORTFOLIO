"use client";

import { motion } from "framer-motion";
import { 
  Building2, 
  CreditCard, 
  Smartphone, 
  CalendarCheck, 
  Wallet, 
  BellRing,
  Users,
  Settings
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Multi-Institute Support",
    description: "A single centralized platform capable of managing multiple educational institutes seamlessly.",
    icon: Building2,
  },
  {
    title: "NFC Card Integration",
    description: "Unique NFC cards for instant, secure student identification and quick processing.",
    icon: CreditCard,
  },
  {
    title: "Mobile PWA",
    description: "A lightweight Progressive Web App tailored for rapid card checking and validation on the go.",
    icon: Smartphone,
  },
  {
    title: "Attendance Tracking",
    description: "Real-time class-wise attendance management with historical reporting capabilities.",
    icon: CalendarCheck,
  },
  {
    title: "Fee Management",
    description: "Streamlined class-wise fee collection, tracking, and automated receipt generation.",
    icon: Wallet,
  },
  {
    title: "Instant Notifications",
    description: "Automated SMS and Email alerts for successful payments and attendance updates.",
    icon: BellRing,
  },
  {
    title: "Admin Portals",
    description: "Dedicated institute-specific administration panels for granular control.",
    icon: Users,
  },
  {
    title: "Super Admin",
    description: "Developer-level system management for overarching platform oversight.",
    icon: Settings,
  },
];

export function FeatureGrid() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Everything You Need
          </h2>
          <p className="text-lg text-muted-foreground">
            AMS provides a comprehensive suite of tools designed to handle every aspect of student management, from attendance to payments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card className="h-full hover:border-primary/50 transition-colors group">
                <CardHeader>
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <feature.icon className="h-5 w-5 text-primary group-hover:text-current transition-colors" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

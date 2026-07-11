import {
  BellRing,
  Building2,
  CalendarCheck,
  CreditCard,
  Settings,
  Smartphone,
  Users,
  Wallet,
} from "lucide-react";

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Packages", href: "/packages" },
];

export const features = [
  {
    title: "Multi-institute support",
    description: "Manage multiple educational institutes from one secure, centralized platform.",
    icon: Building2,
  },
  {
    title: "NFC card integration",
    description: "Identify students instantly with unique cards and a fast, secure validation flow.",
    icon: CreditCard,
  },
  {
    title: "Mobile PWA",
    description: "Check and validate cards from a lightweight app built for modern NFC-enabled phones.",
    icon: Smartphone,
  },
  {
    title: "Attendance tracking",
    description: "See class-wise attendance as it happens and explore historical reports anytime.",
    icon: CalendarCheck,
  },
  {
    title: "Fee management",
    description: "Simplify class fees, payment tracking and automated receipt generation.",
    icon: Wallet,
  },
  {
    title: "Instant notifications",
    description: "Keep families informed with automated SMS and email payment and attendance updates.",
    icon: BellRing,
  },
  {
    title: "Institute admin portals",
    description: "Give every institute a dedicated workspace with precise, role-based control.",
    icon: Users,
  },
  {
    title: "Super admin control",
    description: "Oversee the complete platform with a powerful developer-level management layer.",
    icon: Settings,
  },
];

export const featureDetails = [
  {
    id: "nfc",
    eyebrow: "01 — Identity",
    title: "Frictionless NFC check-ins",
    description:
      "Equip every student with a secure NFC card. Checking into a class is as simple as a tap on the checker’s mobile device.",
    points: ["Instant validation API", "Tamper-proof UUID mapping", "Quick replacement flow"],
    icon: CreditCard,
  },
  {
    id: "attendance",
    eyebrow: "02 — Visibility",
    title: "Real-time attendance",
    description:
      "Replace manual roll calls. Every card tap is securely logged in PostgreSQL and reflected across admin portals instantly.",
    points: ["Class-wise daily logs", "Exportable history reports", "Offline sync support"],
    icon: CalendarCheck,
  },
  {
    id: "fees",
    eyebrow: "03 — Revenue",
    title: "Smart fee tracking",
    description:
      "Automate fee collection and tracking. At every tap, the system can verify both identity and current payment status.",
    points: ["Automated SMS and email alerts", "Grace period handling", "Monthly and annual structures"],
    icon: Wallet,
  },
  {
    id: "pwa",
    eyebrow: "04 — Mobility",
    title: "Card checker PWA",
    description:
      "A lightweight Progressive Web App for modern NFC-enabled devices. No app-store installation is required.",
    points: ["WebNFC API integration", "Extremely low latency", "Minimal bandwidth usage"],
    icon: Smartphone,
  },
];

export const stats = [
  { value: "1 tap", label: "to identify and check in" },
  { value: "Real-time", label: "attendance and fee status" },
  { value: "24/7", label: "access to institute insights" },
];

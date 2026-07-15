/**
 * ClassPass marketing content — single source of truth.
 * All copy, links, pricing and data used across the site live here so they can be
 * reviewed and swapped in one place. Product facts are drawn from AMS.WIKI.
 *
 * ⚠️ PLACEHOLDERS — confirm real values before going live. Every placeholder is
 *    tagged `// PLACEHOLDER` and also listed in `placeholders` at the bottom.
 */

export const site = {
  name: "ClassPass",
  tagline: "Tap in. Get paid. Done.",
  description:
    "NFC tap-card attendance and fee management for educational institutes. Mark attendance with a tap, collect class fees, print receipts, and send SMS confirmations — all in one place.",
  url: "https://classpass.lk",
  domain: "classpass.lk",
  email: "hello@classpass.lk", // PLACEHOLDER
  supportEmail: "support@classpass.lk", // PLACEHOLDER
  phone: "+94 71 890 8808", // PLACEHOLDER
  phoneHref: "tel:+94718908808", // PLACEHOLDER
  whatsapp: "https://wa.me/94718908808", // PLACEHOLDER
  locationLine: "Colombo, Sri Lanka", // PLACEHOLDER
  appUrl: "https://portal.classpass.lk",
  foundedYear: 2026,
} as const;

export const heroVisual = {
  imageSrc: "/images/hero-card-checker.svg",
  imageAlt: "ClassPass card checker attendance and payment interface",
} as const;

export type NavItem = { label: string; href: string };

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export const footerNav: { title: string; links: NavItem[] }[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "How it works", href: "/how-it-works" },
      { label: "Pricing", href: "/pricing" },
      { label: "For institutes", href: "/for-institutes" },
      { label: "For instructors", href: "/for-instructors" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Get started",
    links: [
      { label: "Request a demo", href: "/contact" },
      { label: "Sign in", href: site.appUrl },
      { label: "Pricing", href: "/pricing" },
    ],
  },
];

/** Headline stats. Framed as capabilities, not customer metrics (pre-launch). */
export const stats: { value: string; label: string }[] = [
  { value: "< 1s", label: "From card tap to marked present" },
  { value: "5", label: "Roles, each scoped to exactly what they need" },
  { value: "58 / 80mm", label: "Thermal receipt printers supported" },
  { value: "SMS + Email", label: "Automatic payment confirmations" },
];

export type Feature = {
  id: string;
  icon: string; // lucide icon name
  title: string;
  summary: string;
  points: string[];
  accent?: boolean;
};

export type FeatureVideo = {
  src: string;
  poster?: string;
  label?: string;
};

/** The core capability set, drawn from the AMS module docs. */
export const features: Feature[] = [
  {
    id: "attendance",
    icon: "ScanLine",
    title: "Tap-to-attend",
    summary:
      "Students tap their NFC card at the door. Attendance is marked for the right class, in real time, on any phone.",
    points: [
      "Works on any NFC phone through the card-checker web app",
      "Class-wise, session-aware attendance",
      "Instant confirmation the student can see",
    ],
    accent: true,
  },
  {
    id: "fees",
    icon: "Wallet",
    title: "Fee collection that adds up",
    summary:
      "Define class fees once — one-time, monthly, quarterly or yearly — then collect and track dues without a paper ledger.",
    points: [
      "Per-class fee structures with due dates",
      "Record a payment against a tap in seconds",
      "Outstanding dues visible at a glance",
    ],
  },
  {
    id: "receipts",
    icon: "ReceiptText",
    title: "Real printed receipts",
    summary:
      "Hand the student a thermal receipt the moment they pay. WiFi, Bluetooth or USB printers — you choose what prints.",
    points: [
      "ESC/POS thermal printing, 58mm and 80mm",
      "Configurable receipt content per institute",
      "Works from a Windows PC, Mac or Android tablet",
    ],
  },
  {
    id: "notifications",
    icon: "MessageSquareText",
    title: "Confirmations, sent automatically",
    summary:
      "Every payment triggers an SMS and email confirmation to the parent — no manual follow-up.",
    points: [
      "SMS + email on payment",
      "Prepaid SMS wallet, funded per institute",
      "Automatic refund if a message fails to send",
    ],
  },
  {
    id: "instructors",
    icon: "GraduationCap",
    title: "A portal for every instructor",
    summary:
      "Instructors sign in and see only their own classes, rosters, attendance and revenue-share earnings — nothing else.",
    points: [
      "Self-scoped: no instructor can see another's data",
      "Mark and correct attendance for their classes",
      "Track their own monthly earnings",
    ],
  },
  {
    id: "multi-institute",
    icon: "Building2",
    title: "Built for many institutes",
    summary:
      "Each institute gets its own branded subdomain — royal-college.classpass.lk — with its own users, classes and data.",
    points: [
      "Logical data isolation per institute",
      "Branded, tenant-scoped sign-in",
      "One platform, no cross-institute leakage",
    ],
  },
];

/**
 * Feature page animation links.
 *
 * Add each uploaded .mp4 URL to the matching `src` below. Optional poster images
 * can be added with `poster` if you have them.
 */
export const featureVideos: Record<string, FeatureVideo> = {
  attendance: {
    src: "https://stagingclasspass.blob.core.windows.net/marketing-portfolio/Tap-to-attend.mp4?sp=r&st=2026-07-15T09:04:23Z&se=2100-07-15T17:19:23Z&spr=https&sv=2026-02-06&sr=b&sig=VqsUxAtJslsaht42CqiiblkddAM%2BKjov0jg1aDej4BE%3D",
    label: "Tap-to-attend animation",
  },
  fees: {
    src: "https://stagingclasspass.blob.core.windows.net/marketing-portfolio/Fee%20collection%20that%20adds%20up.mp4?sp=r&st=2026-07-15T09:12:02Z&se=2100-07-15T17:27:02Z&spr=https&sv=2026-02-06&sr=b&sig=LxUPX8XIza%2FxTId5x62ZKOC3gtrTxhZOcgNkLEhBmJo%3D",
    label: "Fee collection animation",
  },
  receipts: {
    src: "https://stagingclasspass.blob.core.windows.net/marketing-portfolio/Real%20printed%20receipts.mp4?sp=r&st=2026-07-15T09:12:52Z&se=2100-07-15T17:27:52Z&spr=https&sv=2026-02-06&sr=b&sig=dN5QcRQejhhe8nPmtFBel7MoRbZ93KqRcfaOK8AyE4w%3D",
    label: "Receipt printing animation",
  },
  notifications: {
    src: "https://stagingclasspass.blob.core.windows.net/marketing-portfolio/Confirmations%2C%20sent%20automatically.mp4?sp=r&st=2026-07-15T09:13:37Z&se=2100-07-15T17:28:37Z&spr=https&sv=2026-02-06&sr=b&sig=%2F6vfYN3Rvi4Ni%2BbeiWDGiw0TVBuIbN%2FFtJFpDXYfk%2FI%3D",
    label: "Automatic confirmations animation",
  },
  instructors: {
    src: "https://stagingclasspass.blob.core.windows.net/marketing-portfolio/A%20portal%20for%20every%20instructor.mp4?sp=r&st=2026-07-15T09:14:58Z&se=2100-07-15T17:29:58Z&spr=https&sv=2026-02-06&sr=b&sig=tUuUBhjFuPIgolAVDdqH4Z3Ox6EB%2B2xvSFvOvGuHQ6s%3D",
    label: "Instructor portal animation",
  },
  "multi-institute": {
    src: "https://stagingclasspass.blob.core.windows.net/marketing-portfolio/Built%20for%20many%20institutes.mp4?sp=r&st=2026-07-15T09:15:29Z&se=2100-07-15T17:30:29Z&spr=https&sv=2026-02-06&sr=b&sig=wd74RAY7X0sV0tsMjF%2FaNP3PUYvF6F7vN3GRZWpo1OE%3D",
    label: "Multi-institute support animation",
  },
};

export type Step = {
  n: number;
  title: string;
  body: string;
  icon: string;
};

export const steps: Step[] = [
  {
    n: 1,
    title: "Issue a card",
    body: "Give each student a unique NFC card, linked to their record at your institute.",
    icon: "CreditCard",
  },
  {
    n: 2,
    title: "Student taps in",
    body: "At the class door, the student taps. The card-checker app marks them present for that session instantly.",
    icon: "ScanLine",
  },
  {
    n: 3,
    title: "Collect the fee",
    body: "Owe a fee this month? Record the payment on the same tap and hand over a printed thermal receipt.",
    icon: "Wallet",
  },
  {
    n: 4,
    title: "Confirmation goes out",
    body: "An SMS and email confirmation reach the parent automatically. Your books stay up to date on their own.",
    icon: "MessageSquareText",
  },
];

export type Role = {
  name: string;
  icon: string;
  scope: string;
  can: string[];
};

export const roles: Role[] = [
  {
    name: "System admin",
    icon: "ShieldCheck",
    scope: "The whole platform",
    can: ["Onboard institutes", "Set SMS pricing & verify top-ups", "Cross-tenant oversight"],
  },
  {
    name: "Institute admin",
    icon: "Building2",
    scope: "One institute",
    can: ["Manage classes, students & staff", "Configure fees & receipts", "See every report"],
  },
  {
    name: "Card checker",
    icon: "ScanLine",
    scope: "At the door",
    can: ["Tap students in", "Take fee payments", "Print receipts"],
  },
  {
    name: "Instructor",
    icon: "GraduationCap",
    scope: "Their own classes",
    can: ["Mark & correct attendance", "View their rosters", "Track their earnings"],
  },
  {
    name: "Student",
    icon: "User",
    scope: "Their own record",
    can: ["View attendance", "See fee status", "Carry one card per institute"],
  },
];

export type Audience = {
  id: "institutes" | "instructors";
  eyebrow: string;
  title: string;
  body: string;
  points: { title: string; body: string; icon: string }[];
  href: string;
};

export const audiences: Audience[] = [
  {
    id: "institutes",
    eyebrow: "For institute owners & admins",
    title: "Retire the register and the fee book",
    body: "Run attendance and fees from one screen. Know who came, who paid and who owes — without chasing paper.",
    href: "/for-institutes",
    points: [
      { title: "Paperless attendance", body: "Every session recorded automatically from a tap.", icon: "ScanLine" },
      { title: "Fees under control", body: "Dues, payments and receipts in one ledger.", icon: "Wallet" },
      { title: "Your own subdomain", body: "A branded home at yourname.classpass.lk.", icon: "Globe" },
      { title: "Reports that reconcile", body: "Collection and attendance you can trust.", icon: "BarChart3" },
    ],
  },
  {
    id: "instructors",
    eyebrow: "For instructors",
    title: "See your classes — and your earnings",
    body: "A private portal scoped to only what you teach. No admin access, no other instructor's data.",
    href: "/for-instructors",
    points: [
      { title: "Your dashboard", body: "Today's sessions, class and student counts at a glance.", icon: "LayoutDashboard" },
      { title: "Your roster", body: "Every enrolled student, with attendance you can correct.", icon: "Users" },
      { title: "Your earnings", body: "Revenue-share payouts with a month-by-month history.", icon: "Wallet" },
      { title: "Nothing else", body: "Self-scoped by design — you only ever see your own.", icon: "Lock" },
    ],
  },
];

export type Tier = {
  name: string;
  priceLKR: number | null; // null = custom
  cadence: string;
  blurb: string;
  highlight?: boolean;
  cta: { label: string; href: string };
  features: string[];
};

/** ⚠️ PLACEHOLDER pricing — invented figures in LKR. Replace with real tiers. */
export const tiers: Tier[] = [
  {
    name: "Starter",
    priceLKR: 4900, // PLACEHOLDER
    cadence: "per institute / month",
    blurb: "For a single institute getting off paper.",
    cta: { label: "Start free trial", href: "/contact" },
    features: [
      "Up to 300 students",
      "NFC attendance & fee collection",
      "SMS + email confirmations",
      "1 branded subdomain",
      "Email support",
    ],
  },
  {
    name: "Growth",
    priceLKR: 12900, // PLACEHOLDER
    cadence: "per institute / month",
    blurb: "For busy institutes with instructors and receipts.",
    highlight: true,
    cta: { label: "Start free trial", href: "/contact" },
    features: [
      "Up to 1,500 students",
      "Everything in Starter",
      "Instructor portal & revenue-share",
      "Thermal receipt printing",
      "Priority support",
    ],
  },
  {
    name: "Scale",
    priceLKR: null,
    cadence: "custom",
    blurb: "For multi-branch groups and large networks.",
    cta: { label: "Talk to us", href: "/contact" },
    features: [
      "Unlimited students",
      "Everything in Growth",
      "Multiple institutes & branches",
      "Onboarding & migration help",
      "Dedicated support",
    ],
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "What hardware do we need to get started?",
    a: "An NFC-capable phone or tablet for the card-checker app, and a set of NFC cards for students. A thermal receipt printer (58mm or 80mm, WiFi/Bluetooth/USB) is optional and only needed if you hand out printed receipts.",
  },
  {
    q: "Do students need to install an app?",
    a: "No. Students carry an NFC card. The card-checker runs as a web app on the staff phone at the door — nothing to install for students or parents.",
  },
  {
    q: "How does attendance actually get marked?",
    a: "The student taps their card at the start of class. The card-checker resolves the card to the student and marks them present for that specific class session in real time.",
  },
  {
    q: "How are fees and receipts handled?",
    a: "You define each class fee — one-time, monthly, quarterly or yearly — with a due date. Staff record payments in seconds, print a thermal receipt, and an SMS plus email confirmation goes to the parent automatically.",
  },
  {
    q: "Who pays for the SMS messages?",
    a: "Each institute funds its own prepaid SMS wallet with a fixed top-up, and messages are charged per segment as they send. If the gateway rejects a message, the credit is refunded automatically.",
  },
  {
    q: "Can instructors see everything?",
    a: "No. The instructor portal is self-scoped: an instructor only ever sees their own classes, rosters, attendance and earnings. They cannot access another instructor's data or institute-wide admin.",
  },
  {
    q: "Can one platform run several institutes?",
    a: "Yes. Each institute gets its own branded subdomain and logically isolated data. Privileged users on a tenant subdomain are scoped to that tenant.",
  },
  {
    q: "Is our data secure?",
    a: "Access is permission-based per role, data is isolated per institute, and records are soft-deleted with an audit trail rather than hard-erased.",
  },
];

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  readMins: number;
  tag: string;
  body: string[]; // paragraphs
};

/** ⚠️ PLACEHOLDER blog posts — sample editorial content. */
export const posts: Post[] = [
  {
    slug: "why-nfc-attendance",
    title: "Why NFC beats the paper register",
    excerpt:
      "Roll-call eats minutes from every class and still gets fudged. Here's why a one-second tap is a better system of record.",
    date: "2026-06-18",
    readMins: 4,
    tag: "Attendance",
    body: [
      "Every institute has lost time to the register. Names get called, cards get signed, someone marks a friend present. By the time class starts you have spent five minutes and you still cannot fully trust the record.",
      "A tap is different. The student presents a card they carry anyway, the card-checker resolves it to a person and a class session, and attendance is written the instant they walk in. There is nothing to fudge and nothing to transcribe later.",
      "The compounding win is what sits on top of accurate attendance: fee status, instructor rosters and parent confirmations all become trustworthy because the thing underneath them is trustworthy.",
    ],
  },
  {
    slug: "collecting-fees-without-a-ledger",
    title: "Collecting class fees without a paper ledger",
    excerpt:
      "Monthly tuition, material fees, due dates — how ClassPass turns fee collection into a few taps and a printed receipt.",
    date: "2026-06-30",
    readMins: 5,
    tag: "Fees",
    body: [
      "Fee books are where reconciliation goes to die. A student pays, someone writes it down, a receipt is torn from a pad, and at month end nobody agrees on who still owes.",
      "ClassPass models the fee where it belongs — on the class. You set the amount, the frequency and the due day once. When the student pays, staff record it against that fee in seconds and hand over a thermal receipt printed from the same flow.",
      "Because the payment is structured data, dues are always current and an SMS confirmation reaches the parent without anyone lifting a phone.",
    ],
  },
  {
    slug: "one-platform-many-institutes",
    title: "One platform, many institutes",
    excerpt:
      "How subdomain-based multi-tenancy lets each institute have its own branded home without a separate deployment.",
    date: "2026-07-08",
    readMins: 4,
    tag: "Product",
    body: [
      "Growing from one institute to several usually means copies of everything: another login, another database, another thing to maintain. ClassPass takes the route Slack and Zendesk took instead.",
      "Each institute lives at its own subdomain — royal-college.classpass.lk — with a branded sign-in and data that is logically isolated by institute. One backend serves every tenant, and a token issued for one institute cannot be used against another.",
      "For owners running multiple branches, that means a single place to work from and clean separation between the institutes that share it.",
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

/** Everything still needing real values before launch. */
export const placeholders = [
  "site.email / site.supportEmail",
  "site.phone / site.phoneHref / site.whatsapp",
  "site.locationLine",
  "tiers[*].priceLKR (Starter, Growth) — invented LKR figures",
  "posts[*] — sample blog articles",
  "stats — capability framing, adjust once you have real numbers",
] as const;

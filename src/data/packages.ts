export type Package = {
  name: string;
  audience: string;
  description: string;
  featured?: boolean;
  features: string[];
};

export type ComparisonRow = {
  category: string;
  capability: string;
  launch: string | boolean;
  scale: string | boolean;
  network: string | boolean;
};

export const packages: Package[] = [
  {
    name: "Launch",
    audience: "For focused institutes",
    description: "A clean start for institutes ready to move attendance and fee records out of spreadsheets.",
    features: [
      "Single institute workspace",
      "NFC attendance tracking",
      "Student and class management",
      "Fee status and receipts",
      "Standard reports",
    ],
  },
  {
    name: "Scale",
    audience: "For growing institutes",
    description: "The complete operating system for busy institutes that need automation and deeper visibility.",
    featured: true,
    features: [
      "Everything in Launch",
      "SMS and email notifications",
      "Advanced attendance reports",
      "Multiple admin roles",
      "Priority onboarding support",
    ],
  },
  {
    name: "Network",
    audience: "For institute networks",
    description: "Centralized control, tailored workflows and technical support for multi-location operations.",
    features: [
      "Everything in Scale",
      "Multi-institute management",
      "Super admin oversight",
      "Custom integrations and API access",
      "Dedicated implementation support",
    ],
  },
];

export const comparisonRows: ComparisonRow[] = [
  { category: "Core operations", capability: "Institute workspaces", launch: "1", scale: "1", network: "Multiple" },
  { category: "Core operations", capability: "Student and class management", launch: true, scale: true, network: true },
  { category: "Attendance", capability: "NFC attendance tracking", launch: true, scale: true, network: true },
  { category: "Attendance", capability: "Offline synchronization", launch: false, scale: true, network: true },
  { category: "Fees", capability: "Fee tracking and receipts", launch: true, scale: true, network: true },
  { category: "Communication", capability: "SMS and email notifications", launch: false, scale: true, network: true },
  { category: "Insights", capability: "Standard reports", launch: true, scale: true, network: true },
  { category: "Insights", capability: "Advanced cross-institute reporting", launch: false, scale: false, network: true },
  { category: "Control", capability: "Multiple admin roles", launch: false, scale: true, network: true },
  { category: "Control", capability: "Super admin oversight", launch: false, scale: false, network: true },
  { category: "Platform", capability: "Custom integrations and API access", launch: false, scale: false, network: true },
  { category: "Support", capability: "Onboarding", launch: "Standard", scale: "Priority", network: "Dedicated" },
];

export const packageFaqs = [
  {
    question: "Are NFC cards and setup included?",
    answer: "Hardware, card quantities and onboarding needs are confirmed during consultation so your proposal reflects the exact size and workflow of your institute.",
  },
  {
    question: "Can we upgrade as our institute grows?",
    answer: "Yes. ClassPass is designed to scale from a single institute to multiple locations without rebuilding your student records or workflows.",
  },
  {
    question: "Do staff need special devices?",
    answer: "The Card Checker is a lightweight Progressive Web App designed for compatible modern mobile devices with NFC capability—no app-store installation is needed.",
  },
  {
    question: "How is pricing calculated?",
    answer: "Pricing depends on your student volume, locations, notification usage and onboarding requirements. Contact us for a clear, tailored quotation.",
  },
];

import {
  audiences as enAudiences,
  faqs as enFaqs,
  featureVideos,
  features as enFeatures,
  footerNav as enFooterNav,
  heroVisual,
  placeholders,
  posts as enPosts,
  primaryNav as enPrimaryNav,
  roles as enRoles,
  site as baseSite,
  stats as enStats,
  steps as enSteps,
  tiers as enTiers,
  type Audience,
  type Faq,
  type Feature,
  type NavItem,
  type Post,
  type Role,
  type Step,
  type Tier,
} from "@/lib/content";
import { defaultLocale, type Locale } from "@/lib/i18n";

type LocalizedSite = {
  name: string;
  tagline: string;
  description: string;
  url: string;
  domain: string;
  email: string;
  supportEmail: string;
  phone: string;
  phoneHref: string;
  whatsapp: string;
  locationLine: string;
  appUrl: string;
  foundedYear: number;
};

type Heading = {
  eyebrow?: string;
  title: string;
  description?: string;
};

type MetadataCopy = {
  title: string;
  description: string;
};

export type MarketingContent = {
  locale: Locale;
  site: LocalizedSite;
  primaryNav: NavItem[];
  footerNav: { title: string; links: NavItem[] }[];
  stats: typeof enStats;
  features: Feature[];
  featureVideos: typeof featureVideos;
  steps: Step[];
  roles: Role[];
  audiences: Audience[];
  tiers: Tier[];
  faqs: Faq[];
  posts: Post[];
  heroVisual: typeof heroVisual;
  placeholders: typeof placeholders;
  common: {
    skipToContent: string;
    signIn: string;
    requestDemo: string;
    seePricing: string;
    learnMore: string;
    allRightsReserved: string;
    language: string;
    openMenu: string;
    closeMenu: string;
    homeAria: string;
  };
  components: {
    hero: Heading & {
      highlight: string;
      primaryCta: string;
      secondaryCta: string;
      trustLine: string;
    };
    featureBento: Heading;
    howItWorks: Heading;
    audience: Heading;
    roles: Heading;
    pricing: Heading & {
      mostPopular: string;
      custom: string;
      currency: string;
      placeholderNotice: string;
    };
    questions: Heading & {
      seeAll: string;
    };
    receipts: Heading & {
      bullets: string[];
      cta: string;
      receiptTitle: string;
      receiptLines: { label: string; value: string }[];
      total: string;
      thankYou: string;
      smsLabel: string;
      smsText: string;
    };
    cta: {
      title: string;
      description: string;
      primary: string;
      secondary: string;
    };
    tapCard: {
      header: string;
      live: string;
      studentName: string;
      classLine: string;
      markedPresent: string;
      fee: string;
      paid: string;
    };
    contactForm: {
      fields: {
        name: string;
        institute: string;
        optional: string;
        email: string;
        message: string;
      };
      placeholders: {
        name: string;
        institute: string;
        email: string;
        message: string;
      };
      errors: {
        name: string;
        emailRequired: string;
        emailInvalid: string;
        message: string;
      };
      successTitle: string;
      successBody: string;
      sendAnother: string;
      sendRequest: string;
      preferEmail: string;
      mailSubjectPrefix: string;
      mailInstituteFallback: string;
    };
  };
  pages: {
    home: {
      audienceHeading: Heading;
      pricingHeading: Heading;
      questionsHeading: Heading;
    };
    features: {
      metadata: MetadataCopy;
      hero: Heading;
      security: Heading & { cta: string };
    };
    about: {
      metadata: MetadataCopy;
      hero: Heading;
      story: Heading & { paragraphs: string[] };
      imageAlt: string;
      imageBadges: string[];
      imageCaption: string[];
      valuesHeading: Heading;
      values: { title: string; body: string; icon: string }[];
      ctaTitle: string;
    };
    howItWorks: {
      metadata: MetadataCopy;
      hero: Heading;
      detailHeading: Heading;
      details: { title: string; body: string }[];
      ctaTitle: string;
    };
    pricing: {
      metadata: MetadataCopy;
      hero: Heading;
      faqHeading: Heading;
      ctaTitle: string;
      ctaDescription: string;
    };
    contact: {
      metadata: MetadataCopy;
      hero: Heading;
      reachTitle: string;
      reachDescription: string;
      placeholderNotice: string;
      channels: { label: string; value: string; href: string | null; icon: string }[];
    };
    blog: {
      metadata: MetadataCopy;
      hero: Heading;
      minRead: string;
      read: string;
      placeholderNotice: string;
      allPosts: string;
      writtenBy: string;
      notFoundTitle: string;
    };
    institutes: {
      metadata: MetadataCopy;
      featuresHeading: Heading;
      ctaTitle: string;
    };
    instructors: {
      metadata: MetadataCopy;
      selfScopedHeading: { eyebrow: string };
      earningsLabel: string;
      earningsRows: { c: string; v: string }[];
      illustrative: string;
      ctaTitle: string;
    };
    faq: {
      metadata: MetadataCopy;
      hero: Heading;
      stillCurious: string;
      getInTouch: string;
      orEmail: string;
    };
  };
};

const englishSite: LocalizedSite = {
  ...baseSite,
};

const englishContent: MarketingContent = {
  locale: "en",
  site: englishSite,
  primaryNav: enPrimaryNav,
  footerNav: enFooterNav,
  stats: enStats,
  features: enFeatures,
  featureVideos,
  steps: enSteps,
  roles: enRoles,
  audiences: enAudiences,
  tiers: enTiers,
  faqs: enFaqs,
  posts: enPosts,
  heroVisual,
  placeholders,
  common: {
    skipToContent: "Skip to content",
    signIn: "Sign in",
    requestDemo: "Request a demo",
    seePricing: "See pricing",
    learnMore: "Learn more",
    allRightsReserved: "All rights reserved.",
    language: "Language",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    homeAria: `${baseSite.name} home`,
  },
  components: {
    hero: {
      eyebrow: "Built for tuition institutes in Sri Lanka",
      title: "Attendance and fees,",
      highlight: "settled with a tap",
      description:
        "ClassPass turns an NFC card tap into marked attendance, a recorded payment, a printed receipt and an SMS to the parent — for every student, every class.",
      primaryCta: "Request a demo",
      secondaryCta: "See how it works",
      trustLine: "No student app to install · Works on any NFC phone · Your own subdomain",
    },
    featureBento: {
      eyebrow: "One system, end to end",
      title: "Everything an institute runs on the desk",
      description:
        "From the tap at the door to the receipt in a parent's hand — the pieces are designed to work as one.",
    },
    howItWorks: {
      eyebrow: "How it works",
      title: "Four beats, one tap",
      description: "No workflow to learn. The card does the work; the record keeps itself.",
    },
    audience: {
      eyebrow: "Two sides, one platform",
      title: "Owners run the institute. Instructors run their classes.",
    },
    roles: {
      eyebrow: "Role-based by design",
      title: "Everyone sees exactly their slice",
      description:
        "Access is granted per role and scoped per institute. No one sees more than their job needs.",
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Simple plans, per institute",
      description:
        "Start on a trial, scale as you grow. Placeholder figures — final pricing set during onboarding.",
      mostPopular: "Most popular",
      custom: "Custom",
      currency: "LKR",
      placeholderNotice:
        "Prices shown are placeholders in LKR. Final pricing confirmed during onboarding.",
    },
    questions: {
      eyebrow: "Questions",
      title: "The things institutes ask first",
      seeAll: "See all questions",
    },
    receipts: {
      eyebrow: "Receipts & confirmations",
      title: "A printed receipt now, an SMS in seconds",
      description:
        "Take the payment, print a thermal receipt on the spot, and let the confirmation reach the parent on its own. 58mm or 80mm, over WiFi, Bluetooth or USB.",
      bullets: [
        "Configure exactly what prints per institute",
        "Prepaid SMS wallet — you fund only what you send",
        "Automatic refund if a message can't be delivered",
      ],
      cta: "Explore receipts",
      receiptTitle: "Fee receipt",
      receiptLines: [
        { label: "Student", value: "Nimasha Perera" },
        { label: "Class", value: "Physics · Theory" },
        { label: "Fee", value: "July tuition" },
        { label: "Method", value: "Cash" },
      ],
      total: "Total",
      thankYou: "Thank you",
      smsLabel: "SMS · to parent",
      smsText: "Payment received: LKR 2,500 for July tuition. Thank you — ClassPass.",
    },
    cta: {
      title: "Bring the tap to your institute",
      description:
        "A short walkthrough is the fastest way to see it. We'll set it up around your classes and fees.",
      primary: "Request a demo",
      secondary: "See pricing",
    },
    tapCard: {
      header: "Card checker",
      live: "Live",
      studentName: "Nimasha Perera",
      classLine: "Physics · Theory · 4:00 PM",
      markedPresent: "Marked present",
      fee: "July tuition",
      paid: "Paid",
    },
    contactForm: {
      fields: {
        name: "Your name",
        institute: "Institute",
        optional: "optional",
        email: "Email",
        message: "How can we help?",
      },
      placeholders: {
        name: "Kavindu Silva",
        institute: "Royal Academy",
        email: "you@institute.lk",
        message: "We run 12 classes and want to move off paper attendance and fee books...",
      },
      errors: {
        name: "Please tell us your name.",
        emailRequired: "We need an email to reply to.",
        emailInvalid: "That email doesn't look right.",
        message: "Add a short note so we can help.",
      },
      successTitle: "Thanks — your email is ready",
      successBody:
        "Your mail app should have opened with the details filled in. If it didn't, write to us at",
      sendAnother: "Send another",
      sendRequest: "Send request",
      preferEmail: "Prefer email? Write to",
      mailSubjectPrefix: "Demo request",
      mailInstituteFallback: "—",
    },
  },
  pages: {
    home: {
      audienceHeading: {
        eyebrow: "Two sides, one platform",
        title: "Owners run the institute. Instructors run their classes.",
      },
      pricingHeading: {
        eyebrow: "Pricing",
        title: "Simple plans, per institute",
        description:
          "Start on a trial, scale as you grow. Placeholder figures — final pricing set during onboarding.",
      },
      questionsHeading: {
        eyebrow: "Questions",
        title: "The things institutes ask first",
      },
    },
    features: {
      metadata: {
        title: "Features",
        description:
          "NFC attendance, fee collection, thermal receipts, SMS confirmations, an instructor portal and multi-institute support — the full ClassPass feature set.",
      },
      hero: {
        eyebrow: "Features",
        title: "The whole institute, one tap at a time",
        description:
          "Each capability is built to hand off to the next — a tap becomes attendance, attendance meets fees, fees produce receipts and confirmations.",
      },
      security: {
        title: "Secure and isolated by default",
        description:
          "Permission-based access per role, data logically isolated per institute, and soft-deletes with a full audit trail rather than hard erasure.",
        cta: "See the flow",
      },
    },
    about: {
      metadata: {
        title: "About",
        description:
          "Why ClassPass exists: replacing the paper register and fee book with a one-second NFC tap, built for educational institutes in Sri Lanka.",
      },
      hero: {
        eyebrow: "About",
        title: "We came for the paper register",
        description:
          "Every institute loses time and trust to paper attendance and hand-written fee books. ClassPass replaces both with a tap.",
      },
      story: {
        title: "Our story",
        paragraphs: [
          "ClassPass started from a familiar frustration: classes beginning late because of roll call, and month-ends spent reconciling a fee book nobody fully trusted. The information existed — it was just trapped on paper.",
          "So we built the smallest thing that fixes it. A student taps an NFC card at the door and attendance is marked for the right session. If they owe a fee, staff take the payment on the same tap, print a receipt, and a confirmation goes to the parent automatically.",
          "Around that core we added what institutes actually need next — an instructor portal scoped to only what each person teaches, revenue-share earnings, and a branded subdomain for every institute on one shared platform.",
        ],
      },
      imageAlt:
        "ClassPass transforming paper attendance and fee books into NFC attendance, payments, receipts and dashboards",
      imageBadges: ["Paper to platform", "NFC workflow"],
      imageCaption: ["Attendance", "Payments", "Receipts"],
      valuesHeading: {
        eyebrow: "What we value",
        title: "How we build",
      },
      values: [
        {
          icon: "Target",
          title: "Built for one job",
          body: "Attendance and fees for real institutes — not a bloated all-in-one. We do the desk work well and stay out of the way.",
        },
        {
          icon: "Feather",
          title: "Light to run",
          body: "No student app, no training day. If someone can tap a card, they can use ClassPass.",
        },
        {
          icon: "ShieldCheck",
          title: "Trustworthy by default",
          body: "Scoped access, isolated data and an audit trail — because a system of record has to be trusted to be useful.",
        },
        {
          icon: "Sparkles",
          title: "Made in Sri Lanka",
          body: "Designed around how local tuition institutes actually collect fees and mark attendance, priced in LKR.",
        },
      ],
      ctaTitle: "Let's move you off paper",
    },
    howItWorks: {
      metadata: {
        title: "How it works",
        description:
          "From issuing a card to the SMS confirmation — how ClassPass turns one NFC tap into attendance, a payment, a receipt and a parent notification.",
      },
      hero: {
        eyebrow: "How it works",
        title: "One tap in, everything else follows",
        description:
          "The workflow is deliberately small. The card carries the identity; the system keeps the record.",
      },
      detailHeading: {
        eyebrow: "Why it holds up",
        title: "Accurate underneath, effortless on top",
      },
      details: [
        {
          title: "The tap is the record",
          body: "There's no roll call and no sign-in sheet. A student presents the NFC card they already carry, the card-checker resolves it to a person and the right class session, and attendance is written the instant they arrive — nothing to transcribe later.",
        },
        {
          title: "Fees live on the class",
          body: "You define each fee once — amount, frequency and due day. When a student who owes taps in, staff record the payment against that fee in seconds, so dues stay current on their own.",
        },
        {
          title: "The paperwork sends itself",
          body: "A thermal receipt prints from the same flow, and an SMS plus email confirmation reaches the parent automatically — funded from your institute's own prepaid SMS wallet.",
        },
      ],
      ctaTitle: "See it run on your classes",
    },
    pricing: {
      metadata: {
        title: "Pricing",
        description:
          "Simple per-institute plans for ClassPass — start on a trial and scale as you grow. Placeholder LKR figures, confirmed during onboarding.",
      },
      hero: {
        eyebrow: "Pricing",
        title: "Priced per institute, not per headache",
        description:
          "Pick a plan that fits your size today and move up when you grow. The figures below are placeholders — we confirm final pricing during onboarding.",
      },
      faqHeading: {
        eyebrow: "Good to know",
        title: "Pricing questions",
      },
      ctaTitle: "Not sure which plan fits?",
      ctaDescription:
        "Tell us how many classes and students you run and we'll point you to the right one.",
    },
    contact: {
      metadata: {
        title: "Contact",
        description:
          "Request a ClassPass demo or get in touch. We'll tailor a walkthrough to your institute.",
      },
      hero: {
        eyebrow: "Contact",
        title: "Let's set up a walkthrough",
        description:
          "Tell us a little about your institute and we'll show you ClassPass running on your kind of classes and fees.",
      },
      reachTitle: "Reach us directly",
      reachDescription: "Prefer to skip the form? Any of these work.",
      placeholderNotice: "Contact details are placeholders until launch.",
      channels: [
        { icon: "Mail", label: "Email", value: baseSite.email, href: `mailto:${baseSite.email}` },
        { icon: "Phone", label: "Phone", value: baseSite.phone, href: baseSite.phoneHref },
        { icon: "MessageCircle", label: "WhatsApp", value: "Message us", href: baseSite.whatsapp },
        { icon: "MapPin", label: "Location", value: baseSite.locationLine, href: null },
      ],
    },
    blog: {
      metadata: {
        title: "Blog",
        description:
          "Notes on attendance, fees and running an institute without paper — from the ClassPass team.",
      },
      hero: {
        eyebrow: "Blog",
        title: "Notes from the desk",
        description:
          "Short pieces on attendance, fees and running an institute without the paperwork.",
      },
      minRead: "min read",
      read: "Read",
      placeholderNotice: "Sample articles — placeholder editorial content.",
      allPosts: "All posts",
      writtenBy: "Written by the ClassPass team",
      notFoundTitle: "Post not found",
    },
    institutes: {
      metadata: {
        title: "For institutes",
        description:
          "Run attendance and fee collection from one screen. ClassPass gives institute owners and admins a paperless register, a live fee ledger and a branded subdomain.",
      },
      featuresHeading: {
        eyebrow: "What runs the desk",
        title: "The capabilities you'll use daily",
      },
      ctaTitle: "Ready to go paperless?",
    },
    instructors: {
      metadata: {
        title: "For instructors",
        description:
          "A private, self-scoped portal for instructors — your classes, your rosters, your attendance and your revenue-share earnings. Nothing else.",
      },
      selfScopedHeading: {
        eyebrow: "Self-scoped by design",
      },
      earningsLabel: "My earnings · July",
      earningsRows: [
        { c: "Physics · Theory", v: "42,000" },
        { c: "Physics · Revision", v: "27,500" },
        { c: "Chemistry · Group", v: "15,000" },
      ],
      illustrative: "Illustrative figures.",
      ctaTitle: "Give your instructors their own view",
    },
    faq: {
      metadata: {
        title: "FAQ",
        description:
          "Answers to common questions about ClassPass — hardware, attendance, fees, receipts, SMS billing, security and multi-institute support.",
      },
      hero: {
        eyebrow: "FAQ",
        title: "Questions, answered",
        description: "If something isn't covered here, ask us directly — we're quick to reply.",
      },
      stillCurious: "Still curious?",
      getInTouch: "Get in touch",
      orEmail: "or email",
    },
  },
};

const siFeatures: Feature[] = [
  {
    id: "attendance",
    icon: "ScanLine",
    title: "ටැප් කර පැමිණීම සටහන් කිරීම",
    summary:
      "දොර ළඟදී සිසුන් NFC කාඩ්පත ටැප් කරයි. නිවැරදි පන්තියට පැමිණීම තත්‍ය කාලීනව, ඕනෑම දුරකථනයකින් සටහන් වේ.",
    points: [
      "කාඩ්-චෙකර් වෙබ් යෙදුමෙන් ඕනෑම NFC දුරකථනයක ක්‍රියා කරයි",
      "පන්තිය සහ සැසිය අනුව පැමිණීම සටහන් වේ",
      "සිසුවාටම දැකිය හැකි ක්ෂණික තහවුරු කිරීම",
    ],
    accent: true,
  },
  {
    id: "fees",
    icon: "Wallet",
    title: "ගාස්තු එකතු කිරීම සරලව",
    summary:
      "එක්වර, මාසික, ත්‍රෛමාසික හෝ වාර්ෂික ගාස්තු වරක් සකසා, කඩදාසි ලෙජරයක් නැතිව ගෙවීම් සහ හිඟ මුදල් පාලනය කරන්න.",
    points: [
      "ගෙවිය යුතු දිනයන් සහිත පන්ති අනුව ගාස්තු සැකසුම්",
      "ටැප් එකකින්ම ගෙවීම තත්පර කිහිපයකින් සටහන් කරන්න",
      "හිඟ මුදල් එක බැලීමකින් පෙනේ",
    ],
  },
  {
    id: "receipts",
    icon: "ReceiptText",
    title: "මුද්‍රිත රිසිට්පත්",
    summary:
      "ගෙවූ මොහොතේම සිසුවාට thermal රිසිට්පතක් දෙන්න. WiFi, Bluetooth හෝ USB printer ඔබ තෝරාගන්න.",
    points: [
      "58mm සහ 80mm ESC/POS thermal printing",
      "ආයතනය අනුව රිසිට්පත් අන්තර්ගතය සකස් කළ හැක",
      "Windows PC, Mac හෝ Android tablet එකකින් ක්‍රියා කරයි",
    ],
  },
  {
    id: "notifications",
    icon: "MessageSquareText",
    title: "තහවුරු කිරීම් ස්වයංක්‍රීයව යැවේ",
    summary:
      "සෑම ගෙවීමකටම දෙමාපියන්ට SMS සහ email තහවුරු කිරීමක් යැවේ. අතින් පසු විපරම් කිරීමට අවශ්‍ය නැත.",
    points: [
      "ගෙවීමකදී SMS + email",
      "ආයතනයට වෙන් වූ prepaid SMS wallet",
      "පණිවිඩයක් යැවීමට අසමත් නම් ස්වයංක්‍රීය refund",
    ],
  },
  {
    id: "instructors",
    icon: "GraduationCap",
    title: "සෑම ගුරුවරයෙකුටම portal එකක්",
    summary:
      "ගුරුවරුන්ට පෙන්වන්නේ තමන්ගේ පන්ති, ලැයිස්තු, පැමිණීම් සහ revenue-share ආදායම පමණි.",
    points: [
      "Self-scoped: වෙනත් ගුරුවරයෙකුගේ දත්ත නොපෙනේ",
      "තම පන්ති සඳහා පැමිණීම සටහන් කර නිවැරදි කළ හැක",
      "තම මාසික ආදායම බලන්න",
    ],
  },
  {
    id: "multi-institute",
    icon: "Building2",
    title: "ආයතන කිහිපයකට සූදානම්",
    summary:
      "සෑම ආයතනයකටම royal-college.classpass.lk වැනි branded subdomain එකක්, තමන්ගේ පරිශීලකයන්, පන්ති සහ දත්ත සමග ලැබේ.",
    points: [
      "ආයතනය අනුව තර්කසහගත දත්ත වෙන් කිරීම",
      "Branded, tenant-scoped sign-in",
      "එකම platform එක, ආයතන අතර දත්ත කාන්දු වීමක් නැත",
    ],
  },
];

const sinhalaContent: MarketingContent = {
  ...englishContent,
  locale: "si",
  site: {
    ...baseSite,
    tagline: "ටැප් කරන්න. ගෙවීම් ගන්න. වැඩ අවසන්.",
    description:
      "ශ්‍රී ලංකාවේ අධ්‍යාපන ආයතන සඳහා NFC tap-card පැමිණීම සහ ගාස්තු කළමනාකරණය. ටැප් එකකින් පැමිණීම සටහන් කර, ගාස්තු ලබාගෙන, රිසිට්පත් මුද්‍රණය කර, SMS තහවුරු කිරීම් යවන්න.",
    locationLine: "කොළඹ, ශ්‍රී ලංකාව",
  },
  primaryNav: [
    { label: "මුල් පිටුව", href: "/" },
    { label: "විශේෂාංග", href: "/features" },
    { label: "ක්‍රියා කරන ආකාරය", href: "/how-it-works" },
    { label: "මිල", href: "/pricing" },
    { label: "බ්ලොග්", href: "/blog" },
    { label: "අප ගැන", href: "/about" },
  ],
  footerNav: [
    {
      title: "නිෂ්පාදනය",
      links: [
        { label: "විශේෂාංග", href: "/features" },
        { label: "ක්‍රියා කරන ආකාරය", href: "/how-it-works" },
        { label: "මිල", href: "/pricing" },
        { label: "ආයතන සඳහා", href: "/for-institutes" },
        { label: "ගුරුවරුන් සඳහා", href: "/for-instructors" },
      ],
    },
    {
      title: "සමාගම",
      links: [
        { label: "අප ගැන", href: "/about" },
        { label: "බ්ලොග්", href: "/blog" },
        { label: "සම්බන්ධ වන්න", href: "/contact" },
        { label: "FAQ", href: "/faq" },
      ],
    },
    {
      title: "ආරම්භ කරන්න",
      links: [
        { label: "Demo එකක් ඉල්ලන්න", href: "/contact" },
        { label: "Sign in", href: baseSite.appUrl },
        { label: "මිල", href: "/pricing" },
      ],
    },
  ],
  stats: [
    { value: "< 1s", label: "කාඩ් ටැප් එකෙන් පැමිණීම සටහන් වීමට" },
    { value: "5", label: "භූමිකා, අවශ්‍ය ප්‍රවේශයට පමණක් සීමා කර ඇත" },
    { value: "58 / 80mm", label: "Thermal receipt printers සහාය" },
    { value: "SMS + Email", label: "ස්වයංක්‍රීය ගෙවීම් තහවුරු කිරීම්" },
  ],
  features: siFeatures,
  steps: [
    {
      n: 1,
      title: "කාඩ්පතක් නිකුත් කරන්න",
      body: "සෑම සිසුවෙකුටම ආයතනයේ ඔවුන්ගේ record එකට සම්බන්ධ unique NFC කාඩ්පතක් දෙන්න.",
      icon: "CreditCard",
    },
    {
      n: 2,
      title: "සිසුවා ටැප් කරයි",
      body: "පන්තියේ දොර ළඟදී සිසුවා ටැප් කරයි. card-checker app එක ඔවුන්ගේ පැමිණීම ක්ෂණිකව සටහන් කරයි.",
      icon: "ScanLine",
    },
    {
      n: 3,
      title: "ගාස්තුව ලබාගන්න",
      body: "මේ මාසයේ ගාස්තුවක් තිබේද? එකම tap flow එකෙන් ගෙවීම සටහන් කර thermal රිසිට්පතක් දෙන්න.",
      icon: "Wallet",
    },
    {
      n: 4,
      title: "තහවුරු කිරීම යැවේ",
      body: "SMS සහ email තහවුරු කිරීමක් දෙමාපියන්ට ස්වයංක්‍රීයව ලැබේ. ඔබේ records යාවත්කාලීනව තබාගනී.",
      icon: "MessageSquareText",
    },
  ],
  roles: [
    {
      name: "System admin",
      icon: "ShieldCheck",
      scope: "සම්පූර්ණ platform එක",
      can: ["ආයතන onboard කිරීම", "SMS pricing සහ top-ups verify කිරීම", "Cross-tenant oversight"],
    },
    {
      name: "Institute admin",
      icon: "Building2",
      scope: "එක් ආයතනයක්",
      can: ["පන්ති, සිසුන් සහ staff කළමනාකරණය", "ගාස්තු සහ රිසිට්පත් සැකසීම", "සියලු reports බැලීම"],
    },
    {
      name: "Card checker",
      icon: "ScanLine",
      scope: "දොර ළඟ",
      can: ["සිසුන් tap-in කිරීම", "ගාස්තු ගෙවීම් ලබාගැනීම", "රිසිට්පත් මුද්‍රණය"],
    },
    {
      name: "Instructor",
      icon: "GraduationCap",
      scope: "තමන්ගේ පන්ති",
      can: ["පැමිණීම සටහන්/නිවැරදි කිරීම", "තම rosters බැලීම", "තම earnings පරීක්ෂා කිරීම"],
    },
    {
      name: "Student",
      icon: "User",
      scope: "තමන්ගේ record එක",
      can: ["පැමිණීම බැලීම", "ගාස්තු තත්ත්වය බැලීම", "ආයතනයකට එක් කාඩ්පතක් රැගෙන යාම"],
    },
  ],
  audiences: [
    {
      id: "institutes",
      eyebrow: "ආයතන හිමිකරුවන් සහ admins සඳහා",
      title: "Register එකත් fee book එකත් අතහැරෙන්න",
      body: "එකම screen එකකින් පැමිණීම සහ ගාස්තු පාලනය කරන්න. කවුරු ආවාද, කවුරු ගෙවුවාද, කවුරු හිඟද කියලා කඩදාසි නැතිව දැනගන්න.",
      href: "/for-institutes",
      points: [
        { title: "Paperless attendance", body: "සෑම සැසියක්ම tap එකකින් ස්වයංක්‍රීයව record වේ.", icon: "ScanLine" },
        { title: "ගාස්තු පාලනය", body: "හිඟ, ගෙවීම් සහ රිසිට්පත් එකම ledger එකක.", icon: "Wallet" },
        { title: "ඔබේම subdomain", body: "yourname.classpass.lk වැනි branded home එකක්.", icon: "Globe" },
        { title: "ගැලපෙන reports", body: "විශ්වාස කළ හැකි collection සහ attendance reports.", icon: "BarChart3" },
      ],
    },
    {
      id: "instructors",
      eyebrow: "ගුරුවරුන් සඳහා",
      title: "ඔබේ පන්ති සහ ආදායම පැහැදිලිව",
      body: "ඔබ උගන්වන දේට පමණක් සීමා වූ private portal එකක්. admin access නැත, වෙනත් ගුරුවරුන්ගේ දත්ත නැත.",
      href: "/for-instructors",
      points: [
        { title: "ඔබේ dashboard", body: "අද sessions, පන්ති සහ සිසුන් එක බැලීමකින්.", icon: "LayoutDashboard" },
        { title: "ඔබේ roster", body: "ඇතුළත් වූ සියලු සිසුන්, නිවැරදි කළ හැකි attendance සමග.", icon: "Users" },
        { title: "ඔබේ earnings", body: "මාසයෙන් මාසයට revenue-share payouts.", icon: "Wallet" },
        { title: "වෙන කිසිවක් නැත", body: "Self-scoped by design — ඔබට පෙනෙන්නේ ඔබේ දේ පමණි.", icon: "Lock" },
      ],
    },
  ],
  tiers: [
    {
      name: "Starter",
      priceLKR: 4900,
      cadence: "ආයතනයකට / මාසයකට",
      blurb: "කඩදාසිවලින් ඉවත් වීමට පටන් ගන්නා එක් ආයතනයකට.",
      cta: { label: "Free trial අරඹන්න", href: "/contact" },
      features: [
        "සිසුන් 300 දක්වා",
        "NFC attendance සහ fee collection",
        "SMS + email confirmations",
        "1 branded subdomain",
        "Email support",
      ],
    },
    {
      name: "Growth",
      priceLKR: 12900,
      cadence: "ආයතනයකට / මාසයකට",
      blurb: "ගුරුවරුන් සහ receipts සමග busy ආයතන සඳහා.",
      highlight: true,
      cta: { label: "Free trial අරඹන්න", href: "/contact" },
      features: [
        "සිසුන් 1,500 දක්වා",
        "Starter හි සියල්ල",
        "Instructor portal සහ revenue-share",
        "Thermal receipt printing",
        "Priority support",
      ],
    },
    {
      name: "Scale",
      priceLKR: null,
      cadence: "custom",
      blurb: "බහු ශාඛා සහ විශාල networks සඳහා.",
      cta: { label: "අපට කතා කරන්න", href: "/contact" },
      features: [
        "සිසුන් සීමාවක් නැත",
        "Growth හි සියල්ල",
        "බහු ආයතන සහ branches",
        "Onboarding සහ migration help",
        "Dedicated support",
      ],
    },
  ],
  faqs: [
    {
      q: "ආරම්භ කිරීමට අපට අවශ්‍ය hardware මොනවාද?",
      a: "card-checker app එක සඳහා NFC-capable phone හෝ tablet එකක් සහ සිසුන් සඳහා NFC cards අවශ්‍යයි. 58mm හෝ 80mm WiFi/Bluetooth/USB thermal receipt printer එක optional; printed receipts දෙනවා නම් පමණක් අවශ්‍යයි.",
    },
    {
      q: "සිසුන් app එකක් install කළ යුතුද?",
      a: "නැහැ. සිසුන්ට NFC card එකක් පමණයි. staff phone එකේ card-checker web app එක ක්‍රියා කරයි. සිසුන්ට හෝ දෙමාපියන්ට app install කිරීමක් නැත.",
    },
    {
      q: "පැමිණීම ඇත්තටම සටහන් වෙන්නේ කොහොමද?",
      a: "පන්තිය ආරම්භයේදී සිසුවා කාඩ්පත tap කරයි. card-checker එක කාඩ්පත සිසුවාට සම්බන්ධ කර, එම class session එකට real time පැමිණීම සටහන් කරයි.",
    },
    {
      q: "ගාස්තු සහ receipts handle කරන්නේ කොහොමද?",
      a: "එක් එක් පන්ති ගාස්තුව due date සමග වරක් සකසන්න. staff ගෙවීම් තත්පර කිහිපයකින් record කර thermal receipt එකක් print කරයි. SMS සහ email confirmation එක දෙමාපියන්ට ස්වයංක්‍රීයව යයි.",
    },
    {
      q: "SMS messages සඳහා ගෙවන්නේ කවුද?",
      a: "සෑම ආයතනයක්ම තමන්ගේ prepaid SMS wallet එක top-up කරයි. messages segment අනුව charge වේ. gateway එක message එක reject කළොත් credit එක ස්වයංක්‍රීයව refund වේ.",
    },
    {
      q: "ගුරුවරුන්ට සියල්ලම පේනවද?",
      a: "නැහැ. instructor portal එක self-scoped. ගුරුවරයෙකුට පෙනෙන්නේ තමන්ගේ පන්ති, rosters, attendance සහ earnings පමණි.",
    },
    {
      q: "එක platform එකකින් ආයතන කිහිපයක් run කළ හැකිද?",
      a: "ඔව්. සෑම ආයතනයකටම branded subdomain එකක් සහ logically isolated data ලැබේ. tenant subdomain එකේ users එම tenant එකට පමණක් scoped වේ.",
    },
    {
      q: "අපේ data secure ද?",
      a: "Access role අනුව permission-based වේ, data ආයතනයෙන් ආයතනයට isolated වේ, records hard-delete වෙනුවට audit trail සමග soft-delete වේ.",
    },
  ],
  posts: [
    {
      slug: "why-nfc-attendance",
      title: "Paper register එකට වඩා NFC හොඳ ඇයි",
      excerpt:
        "Roll-call එක සෑම පන්තියකින්ම මිනිත්තු ගනනක් ගනී. එක තත්පරයක tap එකක් වඩා හොඳ record system එකක් වෙන හැටි.",
      date: "2026-06-18",
      readMins: 4,
      tag: "Attendance",
      body: [
        "සෑම ආයතනයක්ම register එක නිසා කාලය නැතිකරගෙන ඇත. නම් කියවීම, cards sign කිරීම, මිතුරෙකුට present mark කිරීම වැනි දේවල් සිදුවේ. පන්තිය පටන් ගන්නා විට මිනිත්තු පහක් ගතවී ඇති අතර record එක ගැනත් විශ්වාසය අඩුය.",
        "Tap එකක් වෙනස්ය. සිසුවා තමන් රැගෙන යන card එක ඉදිරිපත් කරයි. card-checker එක එය පුද්ගලයාට සහ class session එකට සම්බන්ධ කර, ඔවුන් ඇතුල් වූ මොහොතේම attendance ලියයි.",
        "නිරවද්‍ය attendance මත fee status, instructor rosters සහ parent confirmations වැනි දේවල්ද විශ්වාසදායක වේ.",
      ],
    },
    {
      slug: "collecting-fees-without-a-ledger",
      title: "Paper ledger එකක් නැතිව පන්ති ගාස්තු එකතු කිරීම",
      excerpt:
        "මාසික tuition, material fees, due dates — ClassPass ගාස්තු එකතු කිරීම taps කිහිපයකට සහ printed receipt එකකට හරවන ආකාරය.",
      date: "2026-06-30",
      readMins: 5,
      tag: "Fees",
      body: [
        "Fee books වල reconciliation අමාරුයි. සිසුවා ගෙවයි, කෙනෙක් ලියයි, receipt pad එකකින් රිසිට්පතක් දෙනවා, මාස අවසානයේ තවමත් කවුද හිඟ කියලා සෑම කෙනෙකුටම එකඟ වීමට අමාරුය.",
        "ClassPass ගාස්තුව තිබිය යුතු තැනට ගෙන එයි — පන්තියට. amount, frequency සහ due day වරක් set කරන්න. සිසුවා ගෙවූ විට staff ගෙවීම seconds වලින් record කර same flow එකෙන් thermal receipt එකක් දෙයි.",
        "ගෙවීම structured data නිසා dues හැම විටම current වන අතර SMS confirmation එකක් දෙමාපියන්ට යවන්න කෙනෙකුට phone එකක් අල්ලන්නවත් අවශ්‍ය නැත.",
      ],
    },
    {
      slug: "one-platform-many-institutes",
      title: "එක platform එකක්, ආයතන ගණනාවක්",
      excerpt:
        "Subdomain-based multi-tenancy එක් එක් ආයතනයට වෙනම deployment එකක් නැතිව තම branded home එකක් ලබාදෙන ආකාරය.",
      date: "2026-07-08",
      readMins: 4,
      tag: "Product",
      body: [
        "එක් ආයතනයකින් කිහිපයකට වර්ධනය වීම බොහෝ විට copies ගොඩක් කියයි: තවත් login එකක්, තවත් database එකක්, තවත් maintain කළ යුතු දෙයක්.",
        "ClassPass හි සෑම ආයතනයක්ම royal-college.classpass.lk වැනි තම subdomain එකක ජීවත් වේ. branded sign-in එකක් සහ institute අනුව logically isolated data ලැබේ.",
        "බහු ශාඛා පවත්වාගෙන යන owners සඳහා, එකම තැනකින් වැඩ කළ හැකි අතර ආයතන අතර පැහැදිලි වෙන්කිරීමක් පවතී.",
      ],
    },
  ],
  common: {
    skipToContent: "ප්‍රධාන අන්තර්ගතයට යන්න",
    signIn: "Sign in",
    requestDemo: "Demo එකක් ඉල්ලන්න",
    seePricing: "මිල බලන්න",
    learnMore: "තව දැනගන්න",
    allRightsReserved: "සියලු හිමිකම් ඇවිරිණි.",
    language: "භාෂාව",
    openMenu: "මෙනුව විවෘත කරන්න",
    closeMenu: "මෙනුව වසන්න",
    homeAria: `${baseSite.name} මුල් පිටුව`,
  },
  components: {
    hero: {
      eyebrow: "ශ්‍රී ලංකාවේ tuition institutes සඳහා",
      title: "පැමිණීම සහ ගාස්තු,",
      highlight: "tap එකකින් අවසන්",
      description:
        "ClassPass NFC card tap එකක් පැමිණීමක්, ගෙවීමක්, printed receipt එකක් සහ parent SMS එකක් බවට හරවයි — සෑම සිසුවෙකුටම, සෑම පන්තියකටම.",
      primaryCta: "Demo එකක් ඉල්ලන්න",
      secondaryCta: "ක්‍රියා කරන ආකාරය",
      trustLine: "Student app install නැත · ඕනෑම NFC phone එකක ක්‍රියා කරයි · ඔබේම subdomain",
    },
    featureBento: {
      eyebrow: "අග සිට මුල දක්වා එකම system එක",
      title: "ආයතනයේ desk එකට අවශ්‍ය සියල්ල",
      description:
        "දොර ළඟ tap එකේ සිට දෙමාපියන්ගේ අතේ receipt එක දක්වා — සියලු කොටස් එකට වැඩ කිරීමට සකසා ඇත.",
    },
    howItWorks: {
      eyebrow: "ක්‍රියා කරන ආකාරය",
      title: "පියවර හතරක්, tap එකක්",
      description: "අලුත් workflow එකක් ඉගෙන ගන්න දෙයක් නැත. card එක වැඩ කරයි; record එක තමන්ම තබාගනී.",
    },
    audience: {
      eyebrow: "පාර්ශ්ව දෙකක්, එකම platform එකක්",
      title: "Owners ආයතනය පවත්වාගෙන යයි. ගුරුවරුන් තම පන්ති පවත්වාගෙන යයි.",
    },
    roles: {
      eyebrow: "Role-based by design",
      title: "සෑම කෙනෙකුටම තම කොටස පමණයි",
      description:
        "Access role අනුව සහ institute scope අනුව ලබාදේ. කෙනෙකුට තම කාර්යයට වඩා වැඩි දෙයක් නොපෙනේ.",
    },
    pricing: {
      eyebrow: "මිල",
      title: "සරල plans, ආයතනය අනුව",
      description:
        "Trial එකකින් ආරම්භ කර, වර්ධනය වන විට scale කරන්න. මෙහි figures placeholders — final pricing onboarding දී සකසයි.",
      mostPopular: "වඩාත් ජනප්‍රිය",
      custom: "Custom",
      currency: "LKR",
      placeholderNotice:
        "පෙන්වා ඇති මිල LKR placeholders වේ. Final pricing onboarding දී තහවුරු කරයි.",
    },
    questions: {
      eyebrow: "ප්‍රශ්න",
      title: "ආයතන මුලින්ම අසන දේවල්",
      seeAll: "සියලු ප්‍රශ්න බලන්න",
    },
    receipts: {
      eyebrow: "Receipts සහ confirmations",
      title: "දැන් printed receipt එකක්, තත්පර කිහිපයකින් SMS එකක්",
      description:
        "ගෙවීම ලබාගෙන එම මොහොතේ thermal receipt එක print කරන්න. confirmation එක දෙමාපියන්ට ස්වයංක්‍රීයව යවන්න. 58mm හෝ 80mm, WiFi, Bluetooth හෝ USB.",
      bullets: [
        "ආයතනය අනුව print වෙන දේ නිවැරදිව configure කරන්න",
        "Prepaid SMS wallet — ඔබ යවන ප්‍රමාණයට පමණක් top-up කරන්න",
        "Message එක deliver නොවුණොත් automatic refund",
      ],
      cta: "Receipts බලන්න",
      receiptTitle: "ගාස්තු රිසිට්පත",
      receiptLines: [
        { label: "සිසුවා", value: "නිමාෂා පෙරේරා" },
        { label: "පන්තිය", value: "Physics · Theory" },
        { label: "ගාස්තුව", value: "ජූලි tuition" },
        { label: "ක්‍රමය", value: "Cash" },
      ],
      total: "මුළු එකතුව",
      thankYou: "ස්තුතියි",
      smsLabel: "SMS · දෙමාපියන්ට",
      smsText: "Payment received: LKR 2,500 for July tuition. Thank you — ClassPass.",
    },
    cta: {
      title: "ඔබේ ආයතනයට tap workflow එක ගේන්න",
      description:
        "කෙටි walkthrough එකක් තමයි බලන්න හොඳම ක්‍රමය. අපි ඔබේ පන්ති සහ ගාස්තු අනුව set කර පෙන්වන්නම්.",
      primary: "Demo එකක් ඉල්ලන්න",
      secondary: "මිල බලන්න",
    },
    tapCard: {
      header: "Card checker",
      live: "Live",
      studentName: "නිමාෂා පෙරේරා",
      classLine: "Physics · Theory · 4:00 PM",
      markedPresent: "පැමිණීම සටහන් විය",
      fee: "ජූලි tuition",
      paid: "ගෙවා ඇත",
    },
    contactForm: {
      fields: {
        name: "ඔබේ නම",
        institute: "ආයතනය",
        optional: "අනිවාර්ය නැත",
        email: "Email",
        message: "අපට උදව් කළ හැක්කේ කෙසේද?",
      },
      placeholders: {
        name: "කවිඳු සිල්වා",
        institute: "Royal Academy",
        email: "you@institute.lk",
        message: "අපි පන්ති 12ක් පවත්වාගෙන යන අතර paper attendance සහ fee books වලින් ඉවත් වීමට අවශ්‍යයි...",
      },
      errors: {
        name: "කරුණාකර ඔබේ නම සඳහන් කරන්න.",
        emailRequired: "පිළිතුරු දීමට email එකක් අවශ්‍යයි.",
        emailInvalid: "මෙම email එක නිවැරදි වගේ නැහැ.",
        message: "අපට උදව් කිරීමට කෙටි පණිවිඩයක් එක් කරන්න.",
      },
      successTitle: "ස්තුතියි — ඔබේ email එක සූදානම්",
      successBody:
        "ඔබේ mail app එක details පුරවා විවෘත විය යුතුය. එසේ නොවුණොත් අපට ලියන්න:",
      sendAnother: "තවත් එකක් යවන්න",
      sendRequest: "Request යවන්න",
      preferEmail: "Email කැමතිද? ලියන්න",
      mailSubjectPrefix: "Demo request",
      mailInstituteFallback: "—",
    },
  },
  pages: {
    home: {
      audienceHeading: {
        eyebrow: "පාර්ශ්ව දෙකක්, එකම platform එකක්",
        title: "Owners ආයතනය පවත්වාගෙන යයි. ගුරුවරුන් තම පන්ති පවත්වාගෙන යයි.",
      },
      pricingHeading: {
        eyebrow: "මිල",
        title: "සරල plans, ආයතනය අනුව",
        description:
          "Trial එකකින් ආරම්භ කර, වර්ධනය වන විට scale කරන්න. මෙහි figures placeholders — final pricing onboarding දී සකසයි.",
      },
      questionsHeading: {
        eyebrow: "ප්‍රශ්න",
        title: "ආයතන මුලින්ම අසන දේවල්",
      },
    },
    features: {
      metadata: {
        title: "විශේෂාංග",
        description:
          "NFC attendance, fee collection, thermal receipts, SMS confirmations, instructor portal සහ multi-institute support — ClassPass සම්පූර්ණ feature set එක.",
      },
      hero: {
        eyebrow: "විශේෂාංග",
        title: "සම්පූර්ණ ආයතනය, tap එකෙන් tap එකට",
        description:
          "සෑම හැකියාවක්ම ඊළඟ එකට hand off වීමට සකසා ඇත — tap එක attendance වෙයි, attendance fees සමග එක් වෙයි, fees receipts සහ confirmations ලබාදෙයි.",
      },
      security: {
        title: "පෙරනිමියෙන් secure සහ isolated",
        description:
          "Role අනුව permission-based access, institute අනුව logically isolated data, සහ hard erasure වෙනුවට full audit trail සහිත soft-deletes.",
        cta: "Flow එක බලන්න",
      },
    },
    about: {
      metadata: {
        title: "අප ගැන",
        description:
          "ClassPass ඇයි තියෙන්නේ: ශ්‍රී ලංකාවේ අධ්‍යාපන ආයතන සඳහා paper register සහ fee book වෙනුවට one-second NFC tap එකක්.",
      },
      hero: {
        eyebrow: "අප ගැන",
        title: "අපි ආවේ paper register එකට විසඳුමක් දෙන්න",
        description:
          "Paper attendance සහ handwritten fee books නිසා සෑම ආයතනයකටම කාලය සහ විශ්වාසය අහිමි වේ. ClassPass ඒ දෙකම tap එකකින් මාරු කරයි.",
      },
      story: {
        title: "අපේ කතාව",
        paragraphs: [
          "ClassPass ආරම්භ වූයේ හුරුපුරුදු අසහනයකින්: roll call නිසා පන්ති පරක්කු වීම, සහ මාස අවසානයේ කවුරුත් සම්පූර්ණයෙන් විශ්වාස නොකරන fee book එකක් reconcile කිරීම. තොරතුරු තිබුණා — ඒවා කඩදාසිවල සිරවී තිබුණා.",
          "ඒ නිසා අපි එය සරි කරන කුඩාම දේ ගොඩනැගුවා. සිසුවා දොර ළඟ NFC card එකක් tap කරයි, attendance නිවැරදි session එකට mark වේ. fee එකක් තිබේ නම් staff එම tap එකේම payment එක ගෙන receipt එක print කරයි, confirmation එක parent ට යයි.",
          "ඒ මූලික flow එක වටා ආයතනට අවශ්‍ය දේවල් එකතු කළා — එක් එක් ගුරුවරයා උගන්වන දේට පමණක් scoped instructor portal, revenue-share earnings, සහ සෑම ආයතනයකටම branded subdomain එකක්.",
        ],
      },
      imageAlt: "ClassPass paper attendance සහ fee books NFC attendance, payments, receipts සහ dashboards බවට හරවන අයුරු",
      imageBadges: ["Paper සිට platform දක්වා", "NFC workflow"],
      imageCaption: ["Attendance", "Payments", "Receipts"],
      valuesHeading: {
        eyebrow: "අපි අගය කරන දේ",
        title: "අපි ගොඩනගන ආකාරය",
      },
      values: [
        {
          icon: "Target",
          title: "එක් වැඩකටම ගොඩනගා ඇත",
          body: "සැබෑ ආයතන සඳහා attendance සහ fees — බර all-in-one එකක් නොව. desk work හොඳින් කර, මඟ නොඅවහිර කරයි.",
        },
        {
          icon: "Feather",
          title: "පවත්වාගෙන යාම සැහැල්ලුයි",
          body: "Student app නැත, training day නැත. card එකක් tap කළ හැකි නම් ClassPass භාවිත කළ හැක.",
        },
        {
          icon: "ShieldCheck",
          title: "පෙරනිමියෙන් විශ්වාසදායකයි",
          body: "Scoped access, isolated data සහ audit trail — system of record එකක් විශ්වාස කළ හැකි විය යුතුය.",
        },
        {
          icon: "Sparkles",
          title: "ශ්‍රී ලංකාවේ නිර්මාණය කර ඇත",
          body: "දේශීය tuition institutes ගාස්තු එකතු කරන සහ attendance mark කරන සැබෑ ආකාරය අනුව, LKR pricing සමග.",
        },
      ],
      ctaTitle: "කඩදාසිවලින් ඉවත් වෙමු",
    },
    howItWorks: {
      metadata: {
        title: "ක්‍රියා කරන ආකාරය",
        description:
          "Card එකක් නිකුත් කිරීමේ සිට SMS confirmation දක්වා — ClassPass එක NFC tap එකක් attendance, payment, receipt සහ parent notification බවට හරවන හැටි.",
      },
      hero: {
        eyebrow: "ක්‍රියා කරන ආකාරය",
        title: "එක tap එකක්, ඉතිරි සියල්ල පසුපසින්",
        description:
          "Workflow එක නිර්මාණයෙන්ම කුඩායි. card එක identity එක රැගෙන යයි; system එක record එක තබාගනී.",
      },
      detailHeading: {
        eyebrow: "ඇයි මෙය විශ්වාසදායකද",
        title: "යටින් නිරවද්‍යයි, උඩින් පහසුයි",
      },
      details: [
        {
          title: "Tap එකම record එකයි",
          body: "Roll call නැත, sign-in sheet නැත. සිසුවා තමන් රැගෙන යන NFC card එක ඉදිරිපත් කරයි, card-checker එය පුද්ගලයාට සහ නිවැරදි class session එකට සම්බන්ධ කර, ඇතුල් වූ මොහොතේම attendance ලියයි.",
        },
        {
          title: "ගාස්තු පන්තිය මත ජීවත් වේ",
          body: "Amount, frequency සහ due day සමග fee එක වරක් define කරන්න. හිඟ ගාස්තුවක් ඇති සිසුවා tap කළ විට staff එම fee එකට payment එක seconds වලින් record කරයි.",
        },
        {
          title: "Paperwork එක තමන්ම යවයි",
          body: "එම flow එකෙන් thermal receipt print වේ, SMS සහ email confirmation parent ට ස්වයංක්‍රීයව යයි — ආයතනයේ prepaid SMS wallet එකෙන්.",
        },
      ],
      ctaTitle: "ඔබේ පන්ති මත මෙය ක්‍රියා කරන හැටි බලන්න",
    },
    pricing: {
      metadata: {
        title: "මිල",
        description:
          "ClassPass සඳහා සරල per-institute plans — trial එකකින් ආරම්භ කර වර්ධනය වන විට scale කරන්න. Placeholder LKR figures, onboarding දී තහවුරු කරයි.",
      },
      hero: {
        eyebrow: "මිල",
        title: "ආයතනයකට මිල, හිසරදයට නොවේ",
        description:
          "අද ඔබේ ප්‍රමාණයට ගැලපෙන plan එකක් තෝරා, වර්ධනය වන විට ඉහළට යන්න. පහත figures placeholders — final pricing onboarding දී තහවුරු කරයි.",
      },
      faqHeading: {
        eyebrow: "දැනගැනීමට හොඳයි",
        title: "Pricing ප්‍රශ්න",
      },
      ctaTitle: "කුමන plan එක ගැලපේද කියා සැකද?",
      ctaDescription: "ඔබ පවත්වාගෙන යන පන්ති සහ සිසුන් ගණන කියන්න. ගැලපෙන plan එක පෙන්වන්නම්.",
    },
    contact: {
      metadata: {
        title: "සම්බන්ධ වන්න",
        description: "ClassPass demo එකක් ඉල්ලන්න හෝ අප හා සම්බන්ධ වන්න. ඔබේ ආයතනයට ගැලපෙන walkthrough එකක් දෙන්නම්.",
      },
      hero: {
        eyebrow: "සම්බන්ධ වන්න",
        title: "Walkthrough එකක් සකස් කරමු",
        description:
          "ඔබේ ආයතනය ගැන ටිකක් කියන්න. ඔබේ පන්ති සහ ගාස්තු වර්ගයට ගැලපෙන ලෙස ClassPass පෙන්වන්නම්.",
      },
      reachTitle: "අපට කෙලින්ම සම්බන්ධ වන්න",
      reachDescription: "Form එක මඟ හැරීමට කැමතිද? මේ ඕනෑම එකක් භාවිත කරන්න.",
      placeholderNotice: "Contact details launch දක්වා placeholders වේ.",
      channels: [
        { icon: "Mail", label: "Email", value: baseSite.email, href: `mailto:${baseSite.email}` },
        { icon: "Phone", label: "Phone", value: baseSite.phone, href: baseSite.phoneHref },
        { icon: "MessageCircle", label: "WhatsApp", value: "Message us", href: baseSite.whatsapp },
        { icon: "MapPin", label: "Location", value: "කොළඹ, ශ්‍රී ලංකාව", href: null },
      ],
    },
    blog: {
      metadata: {
        title: "බ්ලොග්",
        description: "Paper නැතිව attendance, fees සහ institute operations ගැන ClassPass team එකේ සටහන්.",
      },
      hero: {
        eyebrow: "බ්ලොග්",
        title: "Desk එකෙන් සටහන්",
        description: "Attendance, fees සහ paperwork නැති institute operations ගැන කෙටි ලිපි.",
      },
      minRead: "මිනිත්තු කියවීම",
      read: "කියවන්න",
      placeholderNotice: "Sample articles — placeholder editorial content.",
      allPosts: "සියලු posts",
      writtenBy: "ClassPass team එක විසින් ලියන ලදී",
      notFoundTitle: "Post එක හමු නොවුණි",
    },
    institutes: {
      metadata: {
        title: "ආයතන සඳහා",
        description:
          "එකම screen එකකින් attendance සහ fee collection පවත්වාගෙන යන්න. ClassPass owners සහ admins සඳහා paperless register, live fee ledger සහ branded subdomain ලබාදෙයි.",
      },
      featuresHeading: {
        eyebrow: "Desk එක පවත්වාගෙන යන දේ",
        title: "දිනපතා භාවිත කරන capabilities",
      },
      ctaTitle: "Paperless වෙන්න සූදානම්ද?",
    },
    instructors: {
      metadata: {
        title: "ගුරුවරුන් සඳහා",
        description:
          "ගුරුවරුන් සඳහා private, self-scoped portal එකක් — ඔබේ පන්ති, rosters, attendance සහ revenue-share earnings. වෙන කිසිවක් නැත.",
      },
      selfScopedHeading: {
        eyebrow: "Self-scoped by design",
      },
      earningsLabel: "මගේ earnings · ජූලි",
      earningsRows: [
        { c: "Physics · Theory", v: "42,000" },
        { c: "Physics · Revision", v: "27,500" },
        { c: "Chemistry · Group", v: "15,000" },
      ],
      illustrative: "Illustrative figures.",
      ctaTitle: "ඔබේ ගුරුවරුන්ට තමන්ගේ view එක දෙන්න",
    },
    faq: {
      metadata: {
        title: "FAQ",
        description:
          "ClassPass ගැන common questions — hardware, attendance, fees, receipts, SMS billing, security සහ multi-institute support.",
      },
      hero: {
        eyebrow: "FAQ",
        title: "ප්‍රශ්නවලට පිළිතුරු",
        description: "මෙහි නොමැති දෙයක් තිබේ නම් අපට කෙලින්ම අහන්න — ඉක්මනින් පිළිතුරු දෙන්නම්.",
      },
      stillCurious: "තවමත් දැනගන්න දෙයක් තිබේද?",
      getInTouch: "සම්බන්ධ වන්න",
      orEmail: "හෝ email කරන්න",
    },
  },
};

export const contentByLocale: Record<Locale, MarketingContent> = {
  en: englishContent,
  si: sinhalaContent,
};

export function getContent(locale: Locale = defaultLocale) {
  return contentByLocale[locale] ?? contentByLocale[defaultLocale];
}

export function getPost(slug: string, locale: Locale = defaultLocale) {
  return getContent(locale).posts.find((post) => post.slug === slug);
}

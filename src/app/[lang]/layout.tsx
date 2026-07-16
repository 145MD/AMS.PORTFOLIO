import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { hasLocale, locales, type Locale } from "@/lib/i18n";
import { getContent } from "@/lib/localized-content";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};

  const content = getContent(lang);
  const title = `${content.site.name} — ${content.site.tagline}`;

  return {
    title: {
      default: title,
      template: `%s · ${content.site.name}`,
    },
    description: content.site.description,
    alternates: {
      canonical: `/${lang}`,
      languages: Object.fromEntries(locales.map((locale) => [locale, `/${locale}`])),
    },
    openGraph: {
      title,
      description: content.site.description,
      url: `/${lang}`,
      siteName: content.site.name,
      images: [
        {
          url: "/og.jpg",
          width: 1200,
          height: 630,
          type: "image/jpeg",
          alt: `${content.site.name} — NFC tap-card attendance & fee management`,
        },
      ],
      locale: lang === "si" ? "si_LK" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: content.site.description,
      images: ["/og.jpg"],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const locale: Locale = lang;
  const content = getContent(locale);

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang=${JSON.stringify(locale)};`,
        }}
      />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        {content.common.skipToContent}
      </a>
      <Navbar
        locale={locale}
        nav={content.primaryNav}
        site={content.site}
        labels={content.common}
      />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer
        locale={locale}
        nav={content.footerNav}
        site={content.site}
        labels={content.common}
      />
    </>
  );
}


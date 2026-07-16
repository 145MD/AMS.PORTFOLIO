import { Footer } from "@/components/Footer";
import { HomePage } from "@/components/HomePage";
import { Navbar } from "@/components/Navbar";
import { defaultLocale } from "@/lib/i18n";
import { getContent } from "@/lib/localized-content";

export default function RootPage() {
  const content = getContent(defaultLocale);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        {content.common.skipToContent}
      </a>
      <Navbar
        locale={defaultLocale}
        nav={content.primaryNav}
        site={content.site}
        labels={content.common}
      />
      <main id="main" className="flex-1">
        <HomePage locale={defaultLocale} content={content} />
      </main>
      <Footer
        locale={defaultLocale}
        nav={content.footerNav}
        site={content.site}
        labels={content.common}
      />
    </>
  );
}


import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://classpass.lk"),
  title: "ClassPass | Attendance Management System",
  description: "A modern NFC-based attendance and fee management solution for educational institutes.",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.ico", type: "image/x-icon", rel: "shortcut icon" }
    ],
    apple: [
      { url: "/apple-touch-icon.png" }
    ],
  },
  openGraph: {
    title: "ClassPass | Attendance Management System",
    description: "A modern NFC-based attendance and fee management solution for educational institutes.",
    url: "https://classpass.lk",
    siteName: "ClassPass",
    images: [
      {
        url: "/logo-ams-wbg.png",
        width: 1200,
        height: 630,
        alt: "ClassPass Cover Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ClassPass",
    url: "https://www.classpass.lk/",
    logo: "https://www.classpass.lk/favicon.svg",
  };

  return (
    <html lang="en" className={`${inter.className} h-full antialiased scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

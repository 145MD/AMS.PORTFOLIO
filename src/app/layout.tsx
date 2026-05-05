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
  openGraph: {
    title: "ClassPass | Attendance Management System",
    description: "A modern NFC-based attendance and fee management solution for educational institutes.",
    url: "https://classpass.lk",
    siteName: "ClassPass",
    images: [
      {
        url: "/logo-ams.png",
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
  return (
    <html lang="en" className={`${inter.className} h-full antialiased scroll-smooth`}>
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

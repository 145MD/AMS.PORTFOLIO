import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { LogoMark } from "@/components/LogoMark";
import { Cta } from "@/components/primitives";
import { footerNav, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="section-ink relative overflow-hidden">

      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 sm:px-6 md:grid-cols-[1.4fr_repeat(3,1fr)] lg:px-8">
        <div className="space-y-4">
          <LogoMark tone="dark" />
          <p className="max-w-xs text-sm text-muted-foreground">{site.description}</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Mail className="size-4 text-signal" />
              <a href={`mailto:${site.email}`} className="hover:text-paper">
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4 text-signal" />
              <a href={site.phoneHref} className="hover:text-paper">
                {site.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="size-4 text-signal" />
              {site.locationLine}
            </li>
          </ul>
        </div>

        {footerNav.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-semibold text-paper">{col.title}</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="transition-colors hover:text-paper">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-ink-line">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-5 py-6 text-sm text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="font-mono text-xs">{site.domain}</p>
        </div>
      </div>
    </footer>
  );
}

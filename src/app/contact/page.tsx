import type { Metadata } from "next";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section, Container } from "@/components/primitives";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Request a ClassPass demo or get in touch. We'll tailor a walkthrough to your institute.",
};

const channels = [
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: Phone, label: "Phone", value: site.phone, href: site.phoneHref },
  { icon: MessageCircle, label: "WhatsApp", value: "Message us", href: site.whatsapp },
  { icon: MapPin, label: "Location", value: site.locationLine, href: null },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's set up a walkthrough"
        description="Tell us a little about your institute and we'll show you ClassPass running on your kind of classes and fees."
      />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-14">
            <div>
              <h2 className="text-display text-xl">Reach us directly</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Prefer to skip the form? Any of these work.
              </p>
              <ul className="mt-6 space-y-3">
                {channels.map((c) => {
                  const inner = (
                    <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
                      <div className="grid size-10 place-items-center rounded-lg bg-muted text-violet">
                        <c.icon className="size-5" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{c.label}</p>
                        <p className="text-sm font-medium">{c.value}</p>
                      </div>
                    </div>
                  );
                  return (
                    <li key={c.label}>
                      {c.href ? (
                        <a
                          href={c.href}
                          className="block rounded-xl outline-none transition-opacity hover:opacity-80 focus-visible:ring-3 focus-visible:ring-violet/40"
                          {...(/^https?:/.test(c.href) ? { target: "_blank", rel: "noreferrer" } : {})}
                        >
                          {inner}
                        </a>
                      ) : (
                        inner
                      )}
                    </li>
                  );
                })}
              </ul>
              <p className="mt-6 text-xs text-muted-foreground">
                Contact details are placeholders until launch.
              </p>
            </div>

            <ContactForm />
          </div>
        </Container>
      </Section>
    </>
  );
}

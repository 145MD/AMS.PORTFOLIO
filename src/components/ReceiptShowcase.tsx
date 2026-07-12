import { Check, MessageSquareText, Printer } from "lucide-react";
import { Container, Cta, SectionHeading } from "@/components/primitives";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/content";

const receiptLines: { label: string; value: string }[] = [
  { label: "Student", value: "Nimasha Perera" },
  { label: "Class", value: "Physics · Theory" },
  { label: "Fee", value: "July tuition" },
  { label: "Method", value: "Cash" },
];

export function ReceiptShowcase() {
  return (
    <Container>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <SectionHeading
            eyebrow="Receipts & confirmations"
            title="A printed receipt now, an SMS in seconds"
            description="Take the payment, print a thermal receipt on the spot, and let the confirmation reach the parent on its own. 58mm or 80mm, over WiFi, Bluetooth or USB."
          />
          <ul className="mt-8 space-y-3">
            {[
              "Configure exactly what prints per institute",
              "Prepaid SMS wallet — you fund only what you send",
              "Automatic refund if a message can't be delivered",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-signal/20 text-signal-foreground">
                  <Check className="size-3.5" strokeWidth={3} />
                </span>
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-9">
            <Cta href="/features#receipts" variant="primary" withArrow>
              Explore receipts
            </Cta>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mx-auto max-w-sm">
            {/* thermal receipt */}
            <div className="receipt-edge rounded-md bg-white p-6 pl-8 font-mono text-[13px] leading-relaxed text-neutral-800 shadow-2xl shadow-black/10 ring-1 ring-black/5">
              <div className="flex items-center justify-between border-b border-dashed border-neutral-300 pb-3">
                <span className="text-sm font-semibold tracking-tight">{site.name}</span>
                <Printer className="size-4 text-neutral-400" />
              </div>
              <p className="mt-3 text-[11px] uppercase tracking-widest text-neutral-400">Fee receipt</p>
              <dl className="mt-3 space-y-1.5">
                {receiptLines.map((l) => (
                  <div key={l.label} className="flex justify-between gap-4">
                    <dt className="text-neutral-400">{l.label}</dt>
                    <dd className="text-right">{l.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-3 flex justify-between border-t border-dashed border-neutral-300 pt-3 text-base font-semibold">
                <span>Total</span>
                <span>LKR 2,500.00</span>
              </div>
              <p className="mt-4 text-center text-[11px] text-neutral-400">
                Thank you · {site.domain}
              </p>
            </div>

            {/* SMS bubble */}
            <div className="absolute -bottom-6 -right-2 w-60 rounded-2xl rounded-br-sm border border-border bg-card p-3.5 shadow-xl shadow-black/10 sm:-right-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                <MessageSquareText className="size-3.5 text-signal-foreground" />
                SMS · to parent
              </div>
              <p className="mt-1.5 text-sm leading-snug">
                Payment received: LKR 2,500 for July tuition. Thank you — {site.name}.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </Container>
  );
}

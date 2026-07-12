"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check, Nfc, ReceiptText } from "lucide-react";
import { NfcRipple } from "@/components/NfcRipple";

/**
 * Hero visual: the card-checker app mid-tap — student marked present and fee paid —
 * with the signature NFC ripple pinging behind it and an NFC card tucked below.
 */
export function TapCard() {
  const reduce = useReducedMotion();

  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <NfcRipple className="opacity-70" count={4} duration={3.2} />

      {/* Phone / device */}
      <motion.div
        className="absolute left-1/2 top-1/2 w-[74%] -translate-x-1/2 -translate-y-1/2"
        initial={reduce ? false : { y: 8 }}
        animate={reduce ? undefined : { y: [8, -8, 8] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="rounded-[2rem] border border-ink-line bg-ink-soft p-3 shadow-2xl shadow-black/40">
          <div className="overflow-hidden rounded-[1.5rem] bg-paper">
            {/* app header */}
            <div className="flex items-center justify-between bg-ink px-4 py-3 text-paper">
              <span className="text-xs font-semibold tracking-wide">Card checker</span>
              <span className="inline-flex items-center gap-1 rounded-full bg-signal/15 px-2 py-0.5 text-[10px] font-medium text-signal">
                <span className="size-1.5 rounded-full bg-signal" /> Live
              </span>
            </div>

            {/* tapped student */}
            <div className="space-y-3 p-4 text-ink">
              <div className="flex items-center gap-3">
                <div className="grid size-11 place-items-center rounded-full bg-ink text-signal">
                  <Nfc className="size-5" />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold">Nimasha Perera</p>
                  <p className="truncate text-xs text-muted-foreground">Physics · Theory · 4:00 PM</p>
                </div>
              </div>

              <motion.div
                className="flex items-center justify-between rounded-xl bg-signal/15 px-3 py-2.5"
                initial={reduce ? false : { scale: 0.96, opacity: 0.6 }}
                animate={reduce ? undefined : { scale: [0.96, 1, 0.96], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-sm font-semibold text-signal-foreground">Marked present</span>
                <span className="grid size-6 place-items-center rounded-full bg-signal text-signal-foreground">
                  <Check className="size-4" strokeWidth={3} />
                </span>
              </motion.div>

              <div className="flex items-center justify-between rounded-xl border border-border px-3 py-2.5">
                <span className="flex items-center gap-2 text-sm font-medium">
                  <ReceiptText className="size-4 text-muted-foreground" />
                  July tuition
                </span>
                <span className="font-mono text-sm font-semibold">Paid ✓</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* NFC card peeking from the bottom */}
      <motion.div
        className="absolute bottom-1 left-1/2 z-10 w-[52%] -translate-x-1/2"
        initial={reduce ? false : { y: -4, rotate: -6 }}
        animate={reduce ? undefined : { y: [-4, 4, -4], rotate: [-6, -4, -6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      >
        <div className="aspect-[1.6/1] rounded-2xl bg-gradient-to-br from-signal to-violet p-4 shadow-xl shadow-black/30">
          <div className="flex h-full flex-col justify-between text-white">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold">ClassPass</span>
              <Nfc className="size-5" />
            </div>
            <span className="font-mono text-sm tracking-widest">•••• 4471</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

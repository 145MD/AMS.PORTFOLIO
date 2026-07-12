"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * The signature element: concentric rings pinging outward from a tapped point,
 * like an NFC read. Reused in the hero, section dividers and "present/paid" beats.
 * Honors prefers-reduced-motion by rendering the rings statically.
 */
export function NfcRipple({
  className,
  count = 4,
  color = "var(--signal)",
  duration = 3,
}: {
  className?: string;
  count?: number;
  color?: string;
  duration?: number;
}) {
  const reduce = useReducedMotion();
  const rings = Array.from({ length: count });

  return (
    <div
      className={cn("pointer-events-none absolute inset-0 grid place-items-center", className)}
      aria-hidden
    >
      {rings.map((_, i) => {
        const delay = (duration / count) * i;
        if (reduce) {
          return (
            <span
              key={i}
              className="absolute rounded-full border"
              style={{
                width: `${28 + i * 24}%`,
                height: `${28 + i * 24}%`,
                borderColor: color,
                opacity: 0.35 - i * 0.06,
              }}
            />
          );
        }
        return (
          <motion.span
            key={i}
            className="absolute rounded-full border"
            style={{ borderColor: color, width: "22%", height: "22%" }}
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: [0.4, 3.4], opacity: [0, 0.5, 0] }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        );
      })}
    </div>
  );
}

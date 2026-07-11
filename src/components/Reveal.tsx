"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const hiddenStates = {
  up: { opacity: 0, y: 28, filter: "blur(6px)" },
  down: { opacity: 0, y: -28, filter: "blur(6px)" },
  left: { opacity: 0, x: -44, filter: "blur(6px)" },
  right: { opacity: 0, x: 44, filter: "blur(6px)" },
  scale: { opacity: 0, scale: 0.92, filter: "blur(6px)" },
  fade: { opacity: 0 },
};

const shownState = { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" };

export type RevealVariant = keyof typeof hiddenStates;

export function Reveal({
  children,
  className,
  delay = 0,
  variant = "up",
  duration = 0.7,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
  duration?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={hiddenStates[variant]}
      whileInView={shownState}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className,
  delay = 0,
  step = 0.08,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  step?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: step, delayChildren: delay } } }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  variant = "up",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: RevealVariant;
}) {
  return (
    <motion.div
      className={className}
      variants={{ hidden: hiddenStates[variant], show: { ...shownState, transition: { duration: 0.65, ease } } }}
    >
      {children}
    </motion.div>
  );
}

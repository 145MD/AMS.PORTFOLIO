"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";

export function Magnetic({
  children,
  className,
  strength = 0.3,
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 15, mass: 0.2 });
  const springY = useSpring(y, { stiffness: 180, damping: 15, mass: 0.2 });

  return (
    <motion.div
      className={className}
      style={{ x: springX, y: springY }}
      onPointerMove={(event) => {
        const box = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - box.left - box.width / 2) * strength);
        y.set((event.clientY - box.top - box.height / 2) * strength);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

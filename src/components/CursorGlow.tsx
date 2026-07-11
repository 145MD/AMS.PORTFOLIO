"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let frame = 0;
    let currentX = -300;
    let currentY = -300;
    let targetX = -300;
    let targetY = -300;

    const move = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      if (glowRef.current) glowRef.current.dataset.visible = "true";
    };
    const leave = () => {
      if (glowRef.current) glowRef.current.dataset.visible = "false";
    };
    const render = () => {
      currentX += (targetX - currentX) * 0.16;
      currentY += (targetY - currentY) * 0.16;
      if (glowRef.current) glowRef.current.style.transform = `translate3d(${currentX - 220}px, ${currentY - 220}px, 0)`;
      frame = requestAnimationFrame(render);
    };

    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("mouseleave", leave);
    frame = requestAnimationFrame(render);
    return () => {
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={glowRef} className="cursor-flare" aria-hidden="true" />;
}

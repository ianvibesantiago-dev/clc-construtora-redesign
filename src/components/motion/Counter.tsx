"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

/** Número que conta de 0 até `to` quando aparece na tela. */
export function Counter({ to, suffix = "", duration = 2 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || !inView) return;
    if (reduce) {
      el.textContent = `${to}${suffix}`;
      return;
    }
    const controls = animate(0, to, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => (el.textContent = `${Math.round(v)}${suffix}`),
    });
    return () => controls.stop();
  }, [inView, reduce, to, suffix, duration]);

  // Valor final no HTML para SEO / sem JS; a animação reescreve ao entrar na tela.
  return <span ref={ref}>{`${to}${suffix}`}</span>;
}

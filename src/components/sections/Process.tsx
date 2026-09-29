"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
import { process } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";

/** Linha do tempo cuja "estrada" é desenhada conforme o usuário rola a página. */
export function Process() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 60%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section
      id="processo"
      aria-labelledby="processo-title"
      className="container-page scroll-mt-20 py-24 lg:py-32"
    >
      <Reveal className="mb-16 flex max-w-3xl flex-col gap-5">
        <p className="eyebrow">Como trabalhamos</p>
        <h2 id="processo-title" className="heading-l">
          Veja como gerenciamos nossas obras
        </h2>
        <p className="text-ink-soft">
          Qualidade, sustentabilidade e responsabilidade social presentes do
          primeiro estudo à entrega.
        </p>
      </Reveal>

      <div className="relative">
        {/* Trilho + progresso (horizontal no desktop, vertical no mobile) */}
        <div
          aria-hidden
          className="absolute top-7 left-7 h-[calc(100%-3.5rem)] w-1 bg-line md:left-0 md:h-1 md:w-full"
        />
        <motion.div
          aria-hidden
          style={{ scaleY: progress }}
          className="absolute top-7 left-7 h-[calc(100%-3.5rem)] w-1 origin-top bg-brand md:hidden"
        />
        <motion.div
          aria-hidden
          style={{ scaleX: progress }}
          className="absolute top-7 left-0 hidden h-1 w-full origin-left bg-brand md:block"
        />

        <ol ref={ref} className="relative grid gap-12 md:grid-cols-3 md:gap-8">
          {process.map((p, i) => (
            <Reveal
              as="li"
              key={p.step}
              delay={i * 0.15}
              className="relative flex gap-6 md:flex-col"
            >
              <span className="relative z-10 grid size-15 shrink-0 place-items-center bg-asphalt text-xl font-extrabold text-white ring-8 ring-concrete">
                {p.step}
              </span>
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-bold uppercase">{p.title}</h3>
                <p className="text-ink-soft">{p.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { images, stats } from "@/content/site";
import { Counter } from "@/components/motion/Counter";

const words = ["Traçando", "caminhos", "de"];
const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const workerY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);

  return (
    <section ref={ref} className="relative isolate flex min-h-svh flex-col overflow-hidden bg-asphalt text-white">
      {/* Foto de fundo com parallax + zoom lento */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-20">
        <motion.div initial={{ scale: 1.15 }} animate={{ scale: 1 }} transition={{ duration: 2.4, ease }} className="relative size-full">
          <Image src={images.hero} alt="" fill priority sizes="100vw" className="object-cover" />
        </motion.div>
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-asphalt via-asphalt/85 to-asphalt/30" />

      <div className="container-page grid flex-1 items-end gap-10 pt-36 pb-16 lg:grid-cols-[1.2fr_1fr] lg:pt-44">
        <div className="flex flex-col gap-8">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="eyebrow">
            Obras pesadas desde 1995
          </motion.p>

          <h1 className="heading-xl">
            {words.map((w, i) => (
              <span key={w} className="inline-block overflow-hidden pr-[0.25em] align-bottom">
                <motion.span className="inline-block" initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.3 + i * 0.1, ease }}>
                  {w}
                </motion.span>
              </span>
            ))}
            <br />
            <span className="inline-block overflow-hidden align-bottom">
              <motion.span className="inline-block text-brand" initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.65, ease }}>
                excelência
              </motion.span>
            </span>
          </h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.6 }} className="max-w-xl text-lg text-white/75">
            Você visualiza estradas perfeitas, planas e duradouras. A CLC transforma essa visão em asfalto sólido
            sob seus pés — em mais de nove estados do Nordeste e Norte.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.05, duration: 0.6 }} className="flex flex-wrap gap-4">
            <a href="#servicos" className="group inline-flex items-center gap-3 bg-brand px-7 py-4 font-bold tracking-wider uppercase transition hover:bg-brand-dark">
              Explorar serviços
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#projetos" className="inline-flex items-center border-2 border-white/40 px-7 py-4 font-bold tracking-wider uppercase transition hover:border-white hover:bg-white hover:text-asphalt">
              Ver projetos
            </a>
          </motion.div>
        </div>

        <motion.div style={{ y: workerY }} initial={{ opacity: 0, x: 80 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 1, ease }} className="relative hidden aspect-[4/5] lg:block">
          {/* Foto enquadrada com faixa zebrada de obra */}
          <div aria-hidden className="hazard-stripes absolute -top-3 -right-3 h-full w-full" />
          <div className="absolute inset-0 overflow-hidden border-4 border-asphalt">
            <Image src={images.heroDetail} alt="Rolo compactador aplicando asfalto em rodovia" fill sizes="40vw" className="object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-brand px-6 py-4 font-extrabold tracking-wider uppercase">Frota própria</div>
        </motion.div>
      </div>

      {/* Faixa de estrada animada com os números */}
      <div className="relative bg-asphalt-2">
        <div aria-hidden className="h-1.5 animate-road bg-[linear-gradient(90deg,var(--color-signal)_0_32px,transparent_32px_64px)] bg-[length:64px_100%]" />
        <dl className="container-page grid grid-cols-3 divide-x divide-white/10 py-6">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse items-center gap-1 px-2 text-center md:flex-row-reverse md:justify-center md:gap-4 md:text-left">
              <dt className="text-xs tracking-wider text-white/60 uppercase md:max-w-24 md:text-sm">{s.label}</dt>
              <dd className="text-3xl font-extrabold text-white md:text-5xl">
                <Counter to={s.value} suffix={s.suffix} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

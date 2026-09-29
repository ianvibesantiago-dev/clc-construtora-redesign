import Image from "next/image";
import { highlights, images } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";

export function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-title" className="container-page grid scroll-mt-20 gap-16 py-24 lg:grid-cols-2 lg:py-32">
      {/* Composição de fotos sobrepostas com selo "desde 1995" */}
      <div className="relative min-h-[420px] md:min-h-[560px]">
        <Reveal from="left" className="absolute top-0 left-0 h-[75%] w-[72%] overflow-hidden">
          <Image src={images.about1} alt="Rolos compactadores em obra de pavimentação" fill sizes="(min-width:1024px) 35vw, 70vw" className="object-cover" />
        </Reveal>
        <Reveal from="right" delay={0.15} className="absolute right-0 bottom-0 h-[55%] w-[58%] overflow-hidden border-8 border-concrete">
          <Image src={images.about2} alt="Equipe em obra de infraestrutura urbana" fill sizes="(min-width:1024px) 28vw, 58vw" className="object-cover" />
        </Reveal>
        <Reveal delay={0.3} className="absolute bottom-6 left-4 bg-brand p-6 text-white md:bottom-10 md:p-8">
          <p className="text-5xl leading-none font-extrabold md:text-6xl">1995</p>
          <p className="mt-2 text-sm font-semibold tracking-wider uppercase">Construindo o Nordeste</p>
        </Reveal>
        <div aria-hidden className="hazard-stripes absolute -top-4 right-10 h-24 w-4 md:right-16" />
      </div>

      <div className="flex flex-col justify-center gap-6">
        <Reveal><p className="eyebrow">Institucional</p></Reveal>
        <Reveal delay={0.05}>
          <h2 id="sobre-title" className="heading-l">Trabalhamos com construção civil desde 1995</h2>
        </Reveal>
        <Reveal delay={0.1} className="flex flex-col gap-4 text-ink-soft">
          <p>
            Fundada em agosto de 1995, a Construtora Luiz Costa (CLC) se tornou uma das maiores construtoras de obras pesadas
            do Rio Grande do Norte e da região Nordeste.
          </p>
          <p>
            Com atuação em estados do Nordeste e do Norte, executamos terraplanagem, pavimentação asfáltica e a paralelepípedo,
            lagoas de estabilização, barragens, pontes, viadutos e muito mais — sempre investindo em equipamentos e pessoas.
          </p>
        </Reveal>
        <ul className="grid gap-3 sm:grid-cols-2">
          {highlights.map((h, i) => (
            <Reveal as="li" key={h} delay={0.15 + i * 0.07} className="flex items-start gap-3 border-l-4 border-steel bg-white p-4 font-semibold">
              <span aria-hidden className="text-steel">✓</span>
              {h}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

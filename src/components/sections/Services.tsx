import { services } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";
import { ServiceIcon } from "@/components/ui/ServiceIcon";

export function Services() {
  return (
    <section id="servicos" aria-labelledby="servicos-title" className="scroll-mt-20 bg-asphalt py-24 text-white lg:py-32">
      <div className="container-page flex flex-col gap-14">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <Reveal className="flex flex-col gap-5">
            <p className="eyebrow">Áreas de atuação</p>
            <h2 id="servicos-title" className="heading-l max-w-2xl">Do corte do terreno ao asfalto final</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-white/65">
              Frota própria, equipes especializadas e controle tecnológico em cada etapa da obra.
            </p>
          </Reveal>
        </div>

        <ul className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal as="li" key={s.title} delay={(i % 3) * 0.08} className="group relative flex h-full flex-col gap-5 overflow-hidden bg-asphalt p-8 transition-colors duration-500 hover:bg-asphalt-2 md:p-10">
                {/* Barra vermelha que cresce no hover */}
                <span aria-hidden className="absolute top-0 left-0 h-1 w-0 bg-brand transition-all duration-500 group-hover:w-full" />
                <span aria-hidden className="absolute -right-2 -bottom-6 text-[7rem] leading-none font-extrabold text-white/[0.04] transition-colors duration-500 group-hover:text-brand/10">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="grid size-16 place-items-center bg-white text-asphalt transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-3">
                  <ServiceIcon name={s.icon} className="size-9" />
                </div>
                <h3 className="text-xl font-bold uppercase">{s.title}</h3>
                <p className="text-white/65">{s.description}</p>
                <a href="#contato" className="mt-auto inline-flex items-center gap-2 text-sm font-bold tracking-wider text-brand uppercase">
                  Solicitar orçamento <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                  <span className="sr-only"> de {s.title}</span>
                </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

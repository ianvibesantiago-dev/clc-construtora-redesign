import { company } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";

export function ContactCta() {
  return (
    <section id="contato" aria-labelledby="contato-title" className="blueprint-grid relative scroll-mt-20 overflow-hidden bg-steel py-24 text-white">
      <div aria-hidden className="absolute -top-24 -right-24 size-96 rounded-full border-[40px] border-white/5" />
      <div className="container-page relative grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="flex flex-col gap-5">
          <p className="eyebrow !text-white before:!bg-white">Fale conosco</p>
          <h2 id="contato-title" className="heading-l">Tem uma obra pela frente? Vamos planejar juntos.</h2>
          <p className="max-w-xl text-white/80">
            Envie o escopo do seu projeto e nossa equipe técnica retorna com um estudo inicial.
          </p>
        </Reveal>
        <Reveal delay={0.15} className="flex flex-col gap-4">
          <a href={`mailto:${company.email}`} className="group flex items-center justify-between bg-brand px-7 py-5 text-lg font-bold tracking-wider uppercase transition hover:bg-brand-dark">
            Solicitar orçamento <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a href={`tel:+55${company.phones[0].replace(/\D/g, "")}`} className="flex items-center justify-between border-2 border-white/40 px-7 py-5 text-lg font-bold transition hover:border-white hover:bg-white hover:text-steel">
            {company.phones[0]} <span aria-hidden>☎</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

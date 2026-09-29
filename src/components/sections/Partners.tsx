import { clients } from "@/content/site";

/** Faixa infinita com os tipos de clientes atendidos. */
export function Partners() {
  return (
    <section aria-labelledby="clientes-title" className="border-y border-line py-14">
      <h2 id="clientes-title" className="container-page mb-8 text-center text-sm font-bold tracking-[0.2em] text-ink-soft uppercase">
        Para quem construímos
      </h2>
      <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
        <ul className="flex w-max animate-marquee items-center gap-16 hover:[animation-play-state:paused]">
          {[...clients, ...clients].map((c, i) => (
            <li key={i} aria-hidden={i >= clients.length} className="flex items-center gap-16 text-2xl font-extrabold whitespace-nowrap text-asphalt/40 uppercase transition-colors hover:text-steel">
              {c}
              <span aria-hidden className="size-2 rotate-45 bg-brand" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import { services } from "@/content/site";

/** Faixa zebrada de obra com os serviços rolando (CSS puro, pausa ao passar o mouse). */
export function ServiceTicker() {
  const items = services.map((s) => s.title);
  return (
    <div className="relative -rotate-1 border-y-4 border-asphalt bg-brand py-4 text-white" aria-hidden>
      <div className="hazard-stripes absolute inset-x-0 -top-3 h-2" />
      <div className="flex w-max animate-marquee gap-10 hover:[animation-play-state:paused]" style={{ ["--marquee-duration" as string]: "35s" }}>
        {[...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-10 text-2xl font-extrabold tracking-wide whitespace-nowrap uppercase md:text-3xl">
            {t}
            <span className="size-3 rotate-45 bg-white" />
          </span>
        ))}
      </div>
    </div>
  );
}

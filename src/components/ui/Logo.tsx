/** Logotipo tipográfico (substitui o arquivo de logo oficial da empresa). */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2 ${className}`}>
      <span aria-hidden className="flex">
        {[0, 1, 2].map((i) => (
          <span key={i} className="-ml-1.5 h-6 w-4 skew-x-[-20deg] bg-brand first:ml-0" style={{ opacity: 1 - i * 0.25 }} />
        ))}
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-2xl font-extrabold tracking-tight text-white">CLC</span>
        <span className="text-[9px] font-semibold tracking-[0.25em] text-white/60 uppercase">Construtora</span>
      </span>
    </span>
  );
}

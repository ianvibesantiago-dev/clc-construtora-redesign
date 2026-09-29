"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { company, nav } from "@/content/site";
import { Logo } from "@/components/ui/Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 40));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-asphalt/95 shadow-lg backdrop-blur" : "bg-transparent"
      }`}
    >
      {/* Barra superior de contato — some ao rolar */}
      <div className={`hidden border-b border-white/10 text-sm text-white/70 transition-all duration-300 lg:block ${scrolled ? "h-0 overflow-hidden opacity-0" : "h-10 opacity-100"}`}>
        <div className="container-page flex h-10 items-center justify-end gap-8">
          <a href={`tel:+55${company.phones[0].replace(/\D/g, "")}`} className="hover:text-white">{company.phones[0]}</a>
          <a href={`mailto:${company.email}`} className="hover:text-white">{company.email}</a>
          <span>{company.address}</span>
        </div>
      </div>

      <div className={`container-page flex items-center justify-between transition-all duration-300 ${scrolled ? "h-16" : "h-20"}`}>
        <a href="#" aria-label="CLC Construtora — início" >
          <Logo />
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex gap-6 text-sm font-semibold tracking-wider whitespace-nowrap text-white uppercase xl:gap-8">
            {nav.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="group relative py-2">
                  {l.label}
                  <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-brand transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contato" className="hidden bg-brand px-6 py-3 text-sm font-bold tracking-wider text-white uppercase transition hover:bg-brand-dark lg:inline-block">
          Solicitar orçamento
        </a>

        <button
          type="button"
          className="grid size-11 place-items-center text-white lg:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden className="flex w-6 flex-col gap-1.5">
            <span className={`h-0.5 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="menu-mobile"
            aria-label="Menu móvel"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="overflow-hidden lg:hidden"
          >
            <ul className="container-page flex flex-col pb-6 text-lg font-semibold text-white uppercase">
              {nav.map((l, i) => (
                <motion.li key={l.href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * i }}>
                  <a href={l.href} onClick={() => setOpen(false)} className="block border-b border-white/10 py-4">
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

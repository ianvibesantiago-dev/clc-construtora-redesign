import { company, nav, projects } from "@/content/site";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-asphalt pt-20 text-white/70">
      <div aria-hidden className="blueprint-grid absolute inset-0 -z-10 opacity-40" />
      <div className="hazard-stripes absolute inset-x-0 top-0 h-2" aria-hidden />
      <div className="container-page grid gap-12 pb-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-5">
          <Logo />
          <p>{company.legalName}. Construindo a infraestrutura do Nordeste e do Norte desde 1995.</p>
        </div>

        <FooterCol title="Navegação">
          {nav.map((l) => (
            <li key={l.href}><a href={l.href} className="hover:text-white">{l.label}</a></li>
          ))}
          <li><a href="#" className="hover:text-white">Trabalhe conosco</a></li>
          <li><a href="#" className="hover:text-white">Ouvidoria · Integridade</a></li>
        </FooterCol>

        <FooterCol title="Projetos recentes">
          {projects.slice(0, 3).map((p) => (
            <li key={p.title}><a href="#projetos" className="hover:text-white">{p.title}</a></li>
          ))}
        </FooterCol>

        <FooterCol title="Contato">
          <li>{company.address}</li>
          {company.phones.map((p) => (
            <li key={p}><a href={`tel:+55${p.replace(/\D/g, "")}`} className="hover:text-white">{p}</a></li>
          ))}
          <li><a href={`mailto:${company.email}`} className="hover:text-white">{company.email}</a></li>
          <li><a href={company.instagram} target="_blank" rel="noopener" className="hover:text-white">@clcconstrutora</a></li>
        </FooterCol>
      </div>
      <div className="border-t border-white/10">
        <p className="container-page py-6 text-sm">© {new Date().getFullYear()} {company.legalName}. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-sm font-bold tracking-[0.2em] text-white uppercase">{title}</h2>
      <ul className="flex flex-col gap-3">{children}</ul>
    </div>
  );
}

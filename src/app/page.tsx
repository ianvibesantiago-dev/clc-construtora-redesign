import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { ServiceTicker } from "@/components/sections/ServiceTicker";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Projects } from "@/components/sections/Projects";
import { Partners } from "@/components/sections/Partners";
import { ContactCta } from "@/components/sections/ContactCta";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-x-clip">
        <Hero />
        <ServiceTicker />
        <About />
        <Services />
        <Process />
        <Projects />
        <Partners />
        <ContactCta />
      </main>
      <Footer />
      <p className="fixed bottom-4 left-4 z-50 max-w-[calc(100vw-2rem)] bg-signal px-3 py-2 text-xs font-bold text-asphalt shadow-lg">
        Conceito de redesign — não é o site oficial da CLC Construtora
      </p>
    </>
  );
}

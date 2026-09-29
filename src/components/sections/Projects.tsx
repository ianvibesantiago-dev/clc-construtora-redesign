import Image from "next/image";
import { projects } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";

/** Grade editorial: 1 projeto em destaque + 3 menores. */
export function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="projetos" aria-labelledby="projetos-title" className="scroll-mt-20 bg-white py-24 lg:py-32">
      <div className="container-page flex flex-col gap-14">
        <Reveal className="flex flex-col gap-5">
          <p className="eyebrow">Projetos finalizados</p>
          <h2 id="projetos-title" className="heading-l max-w-3xl">Obras que vão te surpreender</h2>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal className="h-full">
            <ProjectCard project={featured} large />
          </Reveal>
          <div className="grid gap-6">
            {rest.map((p, i) => (
              <Reveal key={p.title} delay={0.1 + i * 0.1}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, large = false }: { project: (typeof projects)[number]; large?: boolean }) {
  return (
    <article className={`group relative isolate flex h-full overflow-hidden bg-asphalt text-white ${large ? "min-h-[480px] lg:min-h-full" : "min-h-[200px]"}`}>
      <Image
        src={project.image}
        alt=""
        fill
        sizes={large ? "(min-width:1024px) 50vw, 100vw" : "(min-width:1024px) 50vw, 100vw"}
        className="-z-10 object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-asphalt via-asphalt/60 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
      <div className="mt-auto flex w-full flex-col gap-3 p-6 md:p-8">
        <p className="flex items-center gap-3 text-xs font-bold tracking-widest uppercase">
          <span className="bg-brand px-2 py-1">{project.date}</span>
          <span className="text-white/80">{project.location}</span>
        </p>
        <h3 className={`font-extrabold uppercase ${large ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"}`}>{project.title}</h3>
        <p className={`text-white/75 ${large ? "" : "line-clamp-2 lg:max-h-0 lg:opacity-0 lg:transition-all lg:duration-500 lg:group-hover:max-h-20 lg:group-hover:opacity-100"}`}>
          {project.description}
        </p>
      </div>
    </article>
  );
}

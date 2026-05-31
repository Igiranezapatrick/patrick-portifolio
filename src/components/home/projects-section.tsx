import Image from "next/image";
import { projects } from "@/content/home";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-reveal section-delay-2">
      <div className="flex flex-col gap-12">
        <h2 className="text-[58px] font-semibold leading-[1.05] tracking-[-0.05em] text-white sm:text-[72px] md:text-[88px]">
          Recent Projects
          <br />
          and <span className="text-[#914bf1]">Achievements</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-[32px] bg-[#1c1d1f] ring-1 ring-white/10 transition-all hover:ring-white/20"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between p-8">
                <div>
                  <h3 className="text-[28px] font-bold tracking-tight text-white">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-[16px] font-medium text-white/40 uppercase tracking-widest">
                    {project.category}
                  </p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-[24px] text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

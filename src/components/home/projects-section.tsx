import Image from "next/image";
import { projects } from "@/content/home";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-reveal section-delay-2">
      <div className="flex flex-col gap-10">
        <h2 className="text-[48px] font-semibold leading-[1.1] tracking-[-0.05em] text-white sm:text-[64px] md:text-[72px]">
          Recent Projects
          <br />
          and <span className="text-[#914bf1]">Achievements</span>
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-[24px] bg-[#1c1d1f] ring-1 ring-white/10 transition-all hover:ring-white/20"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between p-6">
                <div>
                  <h3 className="text-[22px] font-bold tracking-tight text-white">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-[13px] font-medium text-white/40 uppercase tracking-widest">
                    {project.category}
                  </p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-[20px] text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
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

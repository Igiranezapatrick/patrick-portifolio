import Image from "next/image";
import { projects } from "@/content/home";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-reveal section-delay-2 py-20">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <span className="text-[14px] font-medium uppercase tracking-[0.2em] text-[#914bf1]">
            Selected Work
          </span>
          <h2 className="text-[48px] font-semibold tracking-tight text-white sm:text-[56px] md:text-[64px]">
            Bringing ideas to <span className="text-white/40 italic">life.</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[32px] bg-[#1c1d1f] ring-1 ring-white/10 transition-all duration-500 group-hover:ring-white/20">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                {/* View Project Tag */}
                <div className="absolute bottom-6 right-6 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-xl">
                    <span className="text-xl">↗</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex flex-col gap-1 px-2">
                <h3 className="text-[24px] font-semibold text-white">
                  {project.title}
                </h3>
                <p className="text-[16px] text-white/40 font-medium uppercase tracking-wider">
                  {project.category}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

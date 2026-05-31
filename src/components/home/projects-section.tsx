import Image from "next/image";
import { projects } from "@/content/home";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-reveal section-delay-2 pt-10 sm:pt-16">
      <div className="grid gap-10 lg:grid-cols-[430px_minmax(0,1fr)] lg:gap-18 xl:grid-cols-[455px_minmax(0,1fr)]">
        <div />
        <div>
          <h2 className="max-w-[860px] text-[58px] font-light leading-[1.02] tracking-[-0.06em] text-white sm:text-[72px] md:text-[90px] lg:text-[108px]">
            Recent Projects
            <br />
            and <span className="font-medium text-[#914bf1]">Achievements</span>
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-[22px] bg-[#1b1b1c] ring-1 ring-white/6"
              >
                <div className="overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1600}
                    height={1200}
                    className="aspect-[1.34] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex items-center justify-between px-5 py-4">
                  <div>
                    <h3 className="text-[24px] font-medium text-white">
                      {project.title}
                    </h3>
                    {project.category ? (
                      <p className="text-[15px] text-white/64">{project.category}</p>
                    ) : null}
                  </div>
                  <span className="text-[22px] text-white/86">↗</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

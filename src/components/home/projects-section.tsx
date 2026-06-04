"use client";

import Image from "next/image";
import { useLanguage } from "@/context/language-context";

export function ProjectsSection() {
  const { content } = useLanguage();

  return (
    <section id="projects" className="section-reveal section-delay-2">
      <div className="flex flex-col gap-10">
        <h2 className="text-[48px] font-semibold leading-[1.1] tracking-[-0.05em] text-white sm:text-[64px] md:text-[72px]">
          {content.projectsTitle}
          <br />
          and <span className="text-[#914bf1]">Achievements</span>
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {content.projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-[24px] bg-[#1c1d1f] ring-1 ring-white/10 transition-all hover:ring-white/20"
            >
              {project.image ? (
                <>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100 bg-black/40 backdrop-blur-sm"
                    >
                      <button className="flex items-center gap-2 rounded-lg bg-[#914bf1] px-6 py-3 font-semibold text-white transition-all hover:bg-[#ad63ff] hover:scale-105">
                        <span>Watch</span>
                        <span className="text-[20px]">▶</span>
                      </button>
                    </a>
                  </div>
                </>
              ) : (
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#914bf1]/20 to-[#ad63ff]/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-2">🗺️</div>
                    <p className="text-white/60 text-sm">Coming Soon</p>
                  </div>
                </div>
              )}
              <div className="flex items-center justify-between p-6">
                <div>
                  <h3 className="text-[22px] font-bold tracking-tight text-white">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-[13px] font-medium text-white/40 uppercase tracking-widest">
                    {project.category}
                  </p>
                </div>
                {project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-[20px] text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 hover:bg-white/10"
                  >
                    ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

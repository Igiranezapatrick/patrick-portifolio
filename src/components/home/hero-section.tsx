"use client";

import { useLanguage } from "@/context/language-context";

export function HeroSection() {
  const { content } = useLanguage();

  return (
    <section id="home" className="section-reveal section-delay-1">
      <div className="flex flex-col">
        <h1 className="text-[52px] font-semibold leading-[1.1] tracking-[-0.04em] text-white sm:text-[64px] md:text-[80px] xl:text-[88px]">
          {content.heroTitle}
          <br />
          <span className="text-[#914bf1]">Reality</span>
        </h1>

        <p className="mt-6 max-w-[640px] text-[18px] leading-[1.5] text-white/60 sm:text-[20px]">
          {content.aboutMe}
        </p>

        <div className="mt-12 flex flex-wrap gap-x-12 gap-y-6">
          {content.stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-[52px] font-bold leading-none tracking-tight text-white sm:text-[68px]">
                +{stat.value}
              </div>
              <div className="mt-2 text-[12px] font-bold uppercase tracking-[0.12em] text-white/30">
                {stat.label.split(" ").slice(0, -1).join(" ")}
                <br />
                {stat.label.split(" ").slice(-1).join(" ")}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <a
            href="#contact"
            className="accent-gradient inline-flex h-12 items-center justify-center rounded-full px-8 text-[16px] font-bold text-white shadow-[0_12px_24px_rgba(145,75,241,0.15)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            {content.heroCta}
          </a>
          <a
            href="#projects"
            className="group inline-flex items-center gap-2.5 text-[18px] font-medium text-white transition-colors hover:text-[#914bf1]"
          >
            My Work <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>

        <div className="mt-20">
          <p className="text-[15px] font-semibold uppercase tracking-widest text-white/20">
            Relied on by companies near, far, and worldwide
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-12 gap-y-6 grayscale opacity-20">
            {content.clients.map((client) => (
              <div key={client.name} className="flex items-center gap-2.5">
                <div className="h-7 w-7 rounded-full bg-white/20 flex items-center justify-center text-[9px] font-bold text-white">
                  {client.name[0]}
                </div>
                <span className="text-[18px] font-bold tracking-tight text-white">
                  {client.wordmark}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { tools } from "@/content/home";

export function ServicesSection() {
  return (
    <section id="services" className="section-reveal section-delay-3">
      <div className="flex flex-col gap-10">
        <h2 className="text-[48px] font-semibold leading-[1.1] tracking-[-0.05em] text-white sm:text-[64px] md:text-[72px]">
          Top-Tier Tools for
          <br />
          Exceptional <span className="text-[#914bf1]">Results</span>
        </h2>

        <div className="grid gap-4 md:grid-cols-2 lg:max-w-[840px]">
          {tools.map((tool) => (
            <article
              key={tool.name}
              className="flex items-center gap-5 rounded-[20px] bg-[#1c1d1f] p-5 ring-1 ring-white/10 transition-all hover:ring-white/20"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-[24px] font-bold text-black shadow-xl">
                {tool.icon}
              </div>
              <div className="flex flex-col gap-0.5">
                <h3 className="text-[22px] font-bold tracking-tight text-white">
                  {tool.name}
                </h3>
                <p className="text-[14px] font-medium text-white/40">
                  {tool.category}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { services } from "@/content/home";

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#914bf1]" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="section-reveal section-delay-3 py-20">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <span className="text-[14px] font-medium uppercase tracking-[0.2em] text-[#914bf1]">
            Expertise
          </span>
          <h2 className="text-[48px] font-semibold tracking-tight text-white sm:text-[56px] md:text-[64px]">
            Expertise & <span className="text-white/40 italic">Services.</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group flex flex-col rounded-[32px] bg-[#1c1d1f] p-8 ring-1 ring-white/10 transition-all duration-500 hover:ring-white/20 shadow-xl"
            >
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10 group-hover:bg-[#914bf1]/10 group-hover:ring-[#914bf1]/20 transition-all">
                <div className="h-6 w-6 rounded-lg bg-[#914bf1]" />
              </div>
              
              <h3 className="text-[28px] font-semibold text-white tracking-tight">
                {service.title}
              </h3>
              
              <p className="mt-4 text-[16px] leading-relaxed text-white/50">
                {service.summary}
              </p>

              <div className="mt-8 flex flex-col gap-4 border-t border-white/5 pt-8">
                <span className="text-[13px] font-bold uppercase tracking-widest text-white/30">
                  What&apos;s included
                </span>
                <ul className="flex flex-col gap-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[15px] font-medium text-white/80">
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

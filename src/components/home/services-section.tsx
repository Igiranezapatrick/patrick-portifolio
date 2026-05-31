import { services } from "@/content/home";

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#914bf1]" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="section-reveal section-delay-3">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#914bf1]">
            Expertise
          </span>
          <h2 className="text-[42px] font-semibold tracking-tight text-white sm:text-[52px] md:text-[64px]">
            Expertise & <span className="text-white/40 italic">Services.</span>
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group flex flex-col rounded-[24px] bg-[#1c1d1f] p-6 ring-1 ring-white/10 transition-all duration-500 hover:ring-white/20 shadow-xl"
            >
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 group-hover:bg-[#914bf1]/10 group-hover:ring-[#914bf1]/20 transition-all">
                <div className="h-5 w-5 rounded-md bg-[#914bf1]" />
              </div>
              
              <h3 className="text-[22px] font-bold text-white tracking-tight">
                {service.title}
              </h3>
              
              <p className="mt-3 text-[15px] leading-relaxed text-white/50">
                {service.summary}
              </p>

              <div className="mt-6 flex flex-col gap-3 border-t border-white/5 pt-6">
                <span className="text-[11px] font-bold uppercase tracking-widest text-white/30">
                  What&apos;s included
                </span>
                <ul className="flex flex-col gap-2.5">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-[14px] font-medium text-white/70">
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

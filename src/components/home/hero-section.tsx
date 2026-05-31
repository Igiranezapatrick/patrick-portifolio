import { stats, clients } from "@/content/home";

export function HeroSection() {
  return (
    <section id="home" className="section-reveal section-delay-1">
      <div className="flex flex-col">
        <h1 className="text-[64px] font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-[80px] md:text-[96px] xl:text-[108px]">
          Transforming Your
          <br />
          Ideas into <span className="text-[#914bf1]">Reality</span>
        </h1>

        <p className="mt-8 max-w-[720px] text-[20px] leading-[1.4] text-white/60 sm:text-[23px]">
          Passionate about creating intuitive and engaging user experiences.
          <br className="hidden sm:block" />
          Specialize in transforming ideas into beautifully crafted products.
        </p>

        <div className="mt-14 flex flex-wrap gap-x-16 gap-y-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-[64px] font-bold leading-none tracking-tight text-white sm:text-[82px]">
                +{stat.value}
              </div>
              <div className="mt-3 text-[14px] font-bold uppercase tracking-[0.1em] text-white/30">
                {stat.label.split(" ").slice(0, -1).join(" ")}
                <br />
                {stat.label.split(" ").slice(-1).join(" ")}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-8">
          <a
            href="#contact"
            className="accent-gradient inline-flex h-14 items-center justify-center rounded-full px-10 text-[18px] font-bold text-white shadow-[0_20px_40px_rgba(145,75,241,0.2)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Let&apos;s Talk
          </a>
          <a
            href="#projects"
            className="group inline-flex items-center gap-3 text-[22px] font-medium text-white transition-colors hover:text-[#914bf1]"
          >
            My Work <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>

        <div className="mt-24">
          <p className="text-[18px] font-medium text-white/40">
            Relied on by companies near, far, and worldwide
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-16 gap-y-8 grayscale opacity-30">
            {clients.map((client) => (
              <div key={client.name} className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center text-[10px] font-bold text-white">
                  {client.name[0]}
                </div>
                <span className="text-[22px] font-bold tracking-tight text-white">
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

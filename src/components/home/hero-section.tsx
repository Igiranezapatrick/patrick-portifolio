import Image from "next/image";
import { clients, stats } from "@/content/home";

function ClientLogo({ name, wordmark }: { name: string; wordmark: string }) {
  return (
    <div className="flex items-center gap-2 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
      <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-[10px] text-white">
        {name[0]}
      </div>
      <span className="text-[18px] font-semibold tracking-tight text-white/80">
        {wordmark}
      </span>
    </div>
  );
}

export function HeroSection() {
  return (
    <section id="home" className="section-reveal section-delay-1 relative pt-24 pb-20">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Left Content */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 ring-1 ring-white/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#914bf1] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#914bf1]"></span>
            </span>
            <span className="text-[13px] font-medium text-white/80 tracking-wide uppercase">
              Top-tier Development & Design Agency
            </span>
          </div>

          <h1 className="mt-8 text-[64px] font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-[80px] md:text-[96px] xl:text-[110px]">
            Digital Solutions
            <br />
            & <span className="text-[#914bf1]">Strategy</span>
          </h1>

          <p className="mt-8 max-w-[600px] text-[18px] leading-relaxed text-white/60 sm:text-[20px]">
            I help businesses build digital products that are functional, beautiful, and easy to use. Specialize in transforming ideas into beautifully crafted products.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="accent-gradient inline-flex h-14 items-center justify-center rounded-full px-8 text-[16px] font-semibold text-white shadow-[0_20px_40px_rgba(145,75,241,0.2)] transition-transform hover:scale-105 active:scale-95"
            >
              Contact Us
            </a>
            <a
              href="#projects"
              className="inline-flex h-14 items-center justify-center rounded-full px-8 text-[16px] font-semibold text-white ring-1 ring-white/20 transition-all hover:bg-white/5 hover:ring-white/40 active:scale-95"
            >
              Browse Projects
            </a>
          </div>

          <div className="mt-20 grid grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-[32px] font-bold text-white md:text-[40px]">
                  {stat.value}
                </div>
                <div className="mt-1 text-[13px] font-medium uppercase tracking-wider text-white/40">
                  {stat.label.split(" ").map((word, i) => (
                    <span key={i} className="block">{word}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] bg-[#1c1d1f] ring-1 ring-white/10 shadow-2xl">
            <Image
              src="https://framerusercontent.com/images/7ckekOZAa0J28C2T3IfYTvNDv5U.jpg"
              alt="Portrait"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-3xl bg-[#914bf1]/20 blur-3xl" />
          <div className="absolute -top-6 -right-6 h-32 w-32 rounded-3xl bg-[#914bf1]/20 blur-3xl" />
        </div>
      </div>

      {/* Clients Row */}
      <div className="mt-24 pt-10 border-t border-white/5">
        <div className="flex flex-wrap items-center justify-between gap-8">
          {clients.map((client) => (
            <ClientLogo key={client.name} name={client.name} wordmark={client.wordmark} />
          ))}
        </div>
      </div>
    </section>
  );
}

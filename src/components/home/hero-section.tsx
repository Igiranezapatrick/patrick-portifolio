import Image from "next/image";
import type { ReactNode } from "react";
import { clients, stats } from "@/content/home";

function SocialIcon({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href="#contact"
      aria-label={label}
      className="text-white/80 transition hover:text-[#914bf1]"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
        {children}
      </svg>
    </a>
  );
}

function LogoMark({ name }: { name: string }) {
  if (name === "Bear") {
    return (
      <svg viewBox="0 0 26 26" className="h-9 w-9 text-white" aria-hidden="true">
        <path
          d="M13 4.5c4.7 0 8.5 3.8 8.5 8.5 0 3.7-2.4 6.9-5.8 8.1l-2.7-2.7-2.7 2.7A8.5 8.5 0 0 1 4.5 13C4.5 8.3 8.3 4.5 13 4.5Z"
          fill="currentColor"
        />
        <circle cx="8" cy="7.8" r="2.1" fill="currentColor" />
        <circle cx="18" cy="7.8" r="2.1" fill="currentColor" />
        <circle cx="10.5" cy="13" r="1.2" fill="#101112" />
        <circle cx="15.5" cy="13" r="1.2" fill="#101112" />
      </svg>
    );
  }

  if (name === "Bolt") {
    return (
      <svg viewBox="0 0 26 26" className="h-9 w-9 text-white" aria-hidden="true">
        <circle cx="13" cy="13" r="12" fill="currentColor" />
        <path
          d="M14.5 4.8 8.5 13h4l-1 8.2 6-8.2h-4l1-8.2Z"
          fill="#101112"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 26 26" className="h-9 w-9 text-white/90" aria-hidden="true">
      <path
        d="M13 5c4.9 0 8.8 3.9 8.8 8.8V21H4.2v-7.2C4.2 8.9 8.1 5 13 5Z"
        fill="currentColor"
      />
      <circle cx="13" cy="13.5" r="4.4" fill="#101112" />
      <path d="M13 9.1c2.4 0 4.4 2 4.4 4.4V21H8.6v-7.5c0-2.4 2-4.4 4.4-4.4Z" fill="currentColor" />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section id="home" className="section-reveal section-delay-1 pt-8 sm:pt-12">
      <div className="grid items-start gap-10 lg:grid-cols-[430px_minmax(0,1fr)] lg:gap-18 xl:grid-cols-[455px_minmax(0,1fr)]">
        <aside className="surface mx-auto w-full max-w-[455px] rounded-[28px] px-8 pb-8 pt-9">
          <div className="overflow-hidden rounded-[24px] bg-[#221f28]">
            <div className="relative">
              <Image
                src="https://framerusercontent.com/images/7ckekOZAa0J28C2T3IfYTvNDv5U.jpg?width=3744&height=5616"
                alt="Aabraham James portrait"
                width={3744}
                height={5616}
                priority
                className="aspect-[0.88] w-full object-cover"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_28%,rgba(145,75,241,0.8),transparent_26%),linear-gradient(180deg,rgba(37,23,61,0.32),rgba(20,11,29,0.48))]" />
            </div>
          </div>

          <div className="pt-8 text-center">
            <h2 className="text-[44px] font-semibold leading-[0.92] tracking-[-0.06em] text-white sm:text-[52px]">
              Aabraham James
            </h2>
            <p className="mt-3 text-[18px] text-white/86 sm:text-[20px]">
              Product Designer &amp; Developer
            </p>
            <p className="mt-2 text-[18px] text-white/86 sm:text-[20px]">
              Istanbul, Turkey
            </p>

            <div className="mt-8 flex justify-center gap-6">
              <SocialIcon label="Dribbble">
                <circle cx="12" cy="12" r="8.4" fill="none" stroke="currentColor" strokeWidth="1.8" />
                <path d="M6 8.5c4.2 0 8 1 11.8 2.8M10 4.6c3 3.8 5.2 8.3 6.5 14M4.8 13.2c4.8-.5 9.4-.4 14 .7" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </SocialIcon>
              <SocialIcon label="Twitter">
                <path d="M18.8 7.2a4.3 4.3 0 0 1-1.9.6 3.3 3.3 0 0 0 1.5-1.8 6.5 6.5 0 0 1-2.1.8 3.3 3.3 0 0 0-5.7 3A9.4 9.4 0 0 1 5 6.8a3.3 3.3 0 0 0 1 4.4 3 3 0 0 1-1.5-.4v.1a3.3 3.3 0 0 0 2.6 3.2 3.2 3.2 0 0 1-1.5.1 3.3 3.3 0 0 0 3.1 2.3A6.8 6.8 0 0 1 4.5 18a9.6 9.6 0 0 0 5.2 1.5c6.2 0 9.7-5.3 9.5-10.1a6.8 6.8 0 0 0 1.6-1.7" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </SocialIcon>
              <SocialIcon label="Instagram">
                <rect x="5.2" y="5.2" width="13.6" height="13.6" rx="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="12" cy="12" r="3.3" fill="none" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="16.5" cy="7.8" r="1" fill="currentColor" />
              </SocialIcon>
              <SocialIcon label="Email">
                <path d="M4.6 7.2h14.8a1 1 0 0 1 1 1v8.6a1 1 0 0 1-1 1H4.6a1 1 0 0 1-1-1V8.2a1 1 0 0 1 1-1Zm0 1L12 13.4l7.4-5.2" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </SocialIcon>
            </div>

            <a
              href="#contact"
              className="accent-gradient mt-24 inline-flex w-full max-w-[274px] items-center justify-center rounded-[12px] px-5 py-4 text-[18px] font-medium text-white shadow-[0_0_40px_rgba(145,75,241,0.2)]"
            >
              Let&apos;s Talk
            </a>
          </div>
        </aside>

        <div className="pt-4 lg:pt-4">
          <h1 className="max-w-[980px] text-[58px] font-semibold leading-[0.96] tracking-[-0.065em] text-white sm:text-[72px] md:text-[88px] lg:text-[96px] xl:text-[108px]">
            Transforming Your
            <br />
            Ideas into <span className="text-[#914bf1]">Reality</span>
          </h1>

          <p className="mt-8 max-w-[780px] text-[20px] leading-[1.38] text-white/86 sm:text-[23px] lg:text-[25px]">
            Passionate about creating intuitive and engaging user experiences.
            <br />
            Specialize in transforming ideas into beautifully crafted products.
          </p>

          <div className="mt-14 flex flex-wrap gap-x-20 gap-y-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-[66px] font-semibold leading-none tracking-[-0.05em] text-white sm:text-[82px]">
                  +{stat.value}
                </div>
                <div className="mt-4 text-[22px] uppercase leading-[1.06] tracking-[-0.03em] text-white/92 sm:text-[24px]">
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
              className="accent-gradient inline-flex min-w-[246px] items-center justify-center rounded-[12px] px-8 py-5 text-[20px] font-medium text-white shadow-[0_12px_40px_rgba(145,75,241,0.16)]"
            >
              Let&apos;s Talk
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-3 text-[22px] text-white"
            >
              My Work <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="mt-18">
            <p className="text-[21px] text-white/86">
              Relied on by companies near, far, and worldwide
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-18 gap-y-6">
              {clients.map((client) => (
                <div key={client.name} className="flex items-center gap-3 text-white/84">
                  <LogoMark name={client.name} />
                  <span className="text-[28px] font-semibold tracking-[-0.04em]">
                    {client.wordmark}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

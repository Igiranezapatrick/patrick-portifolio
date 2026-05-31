export function CtaSection() {
  return (
    <section id="contact" className="section-reveal section-delay-5">
      <div className="group relative overflow-hidden rounded-[32px] bg-[#1c1d1f] p-10 ring-1 ring-white/10 shadow-2xl transition-all hover:ring-white/20 md:p-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-6 max-w-2xl">
            <h2 className="text-[52px] font-bold leading-[1] tracking-tight text-white sm:text-[64px] md:text-[80px]">
              Let&apos;s
              <br />
              <span className="text-[#914bf1]">collaborate</span>
            </h2>
            <p className="text-[18px] text-white/50 leading-relaxed md:text-[20px]">
              Unlock the potential of your product with expert design and development services. Let&apos;s collaborate to create user-centered solutions that not only meet your goals but also delight your users.
            </p>
          </div>
          
          <a
            href="https://wa.me/250793081660"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#914bf1] text-white transition-transform hover:scale-110 active:scale-90"
            aria-label="Contact via WhatsApp"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

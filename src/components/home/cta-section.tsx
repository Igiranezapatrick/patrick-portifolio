export function CtaSection() {
  return (
    <section id="contact" className="section-reveal section-delay-5">
      <div className="relative overflow-hidden rounded-[40px] bg-[#1c1d1f] p-12 text-center ring-1 ring-white/10 shadow-2xl md:p-24">
        {/* Background Glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] bg-[#914bf1]/10 blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center gap-10">
          <h2 className="max-w-4xl text-[48px] font-semibold leading-[1.05] tracking-tight text-white sm:text-[64px] md:text-[88px]">
            Ready to Level Up Your
            <br />
            <span className="text-[#914bf1]">Digital Presence?</span>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:patrick@example.com"
              className="accent-gradient inline-flex h-16 items-center justify-center rounded-full px-12 text-[20px] font-bold text-white shadow-[0_20px_40px_rgba(145,75,241,0.2)] transition-transform hover:scale-105 active:scale-95"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

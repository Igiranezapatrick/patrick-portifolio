export function CtaSection() {
  return (
    <section id="contact" className="section-reveal section-delay-5">
      <div className="relative overflow-hidden rounded-[32px] bg-[#1c1d1f] p-10 text-center ring-1 ring-white/10 shadow-2xl md:p-16">
        {/* Background Glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] bg-[#914bf1]/10 blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center gap-6">
          <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#914bf1]">
            Let&apos;s collaborate
          </span>
          <h2 className="max-w-2xl text-[42px] font-semibold leading-[1.1] tracking-tight text-white sm:text-[52px] md:text-[64px]">
            Have a project <span className="text-white/40 italic">in mind?</span>
          </h2>
          <p className="max-w-[540px] text-[16px] text-white/50 leading-relaxed">
            I help businesses build digital products that are functional, beautiful, and easy to use. Specialize in transforming ideas into beautifully crafted products.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:patrick@example.com"
              className="accent-gradient inline-flex h-12 items-center justify-center rounded-full px-10 text-[17px] font-bold text-white shadow-[0_12px_24px_rgba(145,75,241,0.15)] transition-transform hover:scale-[1.05] active:scale-[0.95]"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

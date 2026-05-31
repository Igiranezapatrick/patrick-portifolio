export function CtaSection() {
  return (
    <section id="contact" className="section-reveal section-delay-5 py-20">
      <div className="relative overflow-hidden rounded-[48px] bg-[#1c1d1f] p-12 text-center ring-1 ring-white/10 shadow-2xl md:p-20">
        {/* Background Glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] bg-[#914bf1]/10 blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center gap-8">
          <span className="text-[14px] font-medium uppercase tracking-[0.2em] text-[#914bf1]">
            Let&apos;s collaborate
          </span>
          <h2 className="max-w-3xl text-[48px] font-semibold leading-tight tracking-tight text-white sm:text-[60px] md:text-[72px]">
            Have a project <span className="text-white/40 italic">in mind?</span>
          </h2>
          <p className="max-w-[600px] text-[18px] text-white/50 leading-relaxed">
            I help businesses build digital products that are functional, beautiful, and easy to use. Specialize in transforming ideas into beautifully crafted products.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:patrick@example.com"
              className="accent-gradient inline-flex h-14 items-center justify-center rounded-full px-10 text-[18px] font-bold text-white shadow-[0_20px_40px_rgba(145,75,241,0.2)] transition-transform hover:scale-105 active:scale-95"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

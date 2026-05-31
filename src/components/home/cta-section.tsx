export function CtaSection() {
  return (
    <section
      id="contact"
      className="section-reveal section-delay-5 surface rounded-[2.2rem] px-6 py-10 sm:px-8 lg:px-10"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm uppercase tracking-[0.28em] text-[#bcb6ac]">
            Let&apos;s collaborate
          </p>
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
            Unlock the same visual direction with your own story, assets, and
            voice.
          </h2>
          <p className="text-base leading-7 text-[#9f9a92] sm:text-lg">
            This first pass is ready for your real branding. Swap in your
            content, refine the cards, and extend the same design system into
            the rest of the site.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="mailto:patrick@example.com"
            className="rounded-full bg-[var(--accent)] px-5 py-3 text-center text-sm font-medium text-[var(--accent-ink)] hover:scale-[1.02]"
          >
            patrick@example.com
          </a>
          <a
            href="#home"
            className="rounded-full border border-white/10 px-5 py-3 text-center text-sm font-medium text-white hover:border-white/30 hover:bg-white/5"
          >
            Back to top
          </a>
        </div>
      </div>
    </section>
  );
}

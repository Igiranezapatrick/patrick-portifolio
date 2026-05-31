export function SiteFooter() {
  return (
    <footer className="relative z-10 px-4 pb-12 pt-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1372px] border-t border-white/5 pt-12">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-5">
          {/* Logo Column */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-xl bg-[#914bf1]" />
              <span className="text-[24px] font-bold tracking-tight text-white">Patrick.</span>
            </div>
            <p className="mt-6 max-w-[300px] text-[16px] leading-relaxed text-white/40">
              I help businesses build digital products that are functional, beautiful, and easy to use.
            </p>
          </div>

          {/* Navigate Column */}
          <div>
            <h4 className="text-[14px] font-bold uppercase tracking-widest text-white/20">Navigate</h4>
            <ul className="mt-6 flex flex-col gap-4">
              {["Expertise", "Work", "Experience", "Thoughts"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-[16px] font-medium text-white/60 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials Column */}
          <div>
            <h4 className="text-[14px] font-bold uppercase tracking-widest text-white/20">Socials</h4>
            <ul className="mt-6 flex flex-col gap-4">
              {["Dribbble", "Twitter", "Instagram", "LinkedIn"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[16px] font-medium text-white/60 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="text-[14px] font-bold uppercase tracking-widest text-white/20">Connect</h4>
            <ul className="mt-6 flex flex-col gap-4">
              <li>
                <a href="mailto:patrick@example.com" className="text-[16px] font-medium text-white/60 hover:text-white transition-colors">
                  Email Me
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[16px] font-medium text-white/60 hover:text-white transition-colors">
                  Contact Form
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-white/5 pt-8 md:flex-row md:items-center md:justify-between text-[14px] text-white/20">
          <p>© 2026 Patrick. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

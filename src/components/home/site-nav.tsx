import { navLinks } from "@/content/home";

export function SiteNav() {
  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="flex items-center gap-1 rounded-full bg-black/40 px-2 py-1.5 backdrop-blur-xl ring-1 ring-white/10 shadow-2xl">
        {navLinks.map((link, index) => (
          <a
            key={link.label}
            href={link.href}
            className={`px-4 py-2 text-[15px] font-medium transition-colors ${
              index === 0
                ? "text-white"
                : "text-white/60 hover:text-white"
            }`}
          >
            {link.label}
          </a>
        ))}
        <div className="ml-2 h-4 w-px bg-white/10" />
        <a
          href="#contact"
          className="ml-2 rounded-full bg-white px-5 py-2 text-[15px] font-semibold text-black transition-transform hover:scale-105 active:scale-95"
        >
          Hire Me
        </a>
      </nav>
    </header>
  );
}

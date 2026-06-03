const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Tools" },
  { href: "#testimonials", label: "Work" },
  { href: "#thoughts", label: "Thoughts" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  return (
    <header className="relative z-30 flex justify-center px-4 pt-7 sm:px-6 lg:px-8">
      <nav className="flex w-full max-w-[1280px] items-center gap-1 sm:gap-2 rounded-2xl bg-[#272829] border border-white/10 px-3 py-2 sm:px-4">
        {navLinks.map((link, index) => (
          <a
            key={link.label}
            href={link.href}
            className={`group flex h-9 items-center justify-center rounded-xl px-4 text-sm font-medium tracking-wide transition-all ${
              index === 0
                ? "bg-gradient-to-br from-[#914bf1] to-[#ad63ff] text-white shadow-md shadow-[#914bf1]/10"
                : "text-white/70 hover:text-white hover:bg-white/[0.05]"
            }`}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

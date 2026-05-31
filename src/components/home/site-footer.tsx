export function SiteFooter() {
  return (
    <footer className="relative z-10 pt-10">
      <div className="flex flex-col items-center gap-8 border-t border-white/5 py-12">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-[#914bf1]" />
          <span className="text-[24px] font-bold tracking-tight text-white">Patrick James</span>
        </div>
        
        <nav className="flex flex-wrap justify-center gap-x-12 gap-y-4">
          {["Expertise", "Work", "Experience", "Thoughts", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[16px] font-medium text-white/40 transition-colors hover:text-white"
            >
              {item}
            </a>
          ))}
        </nav>

        <p className="text-[14px] text-white/20">
          © 2022 Patrick James. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

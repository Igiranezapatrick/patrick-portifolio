export function FloatingBadges() {
  return (
    <div className="fixed bottom-6 right-6 z-20 hidden flex-col gap-3 xl:flex">
      <a
        href="#contact"
        className="accent-gradient rounded-[12px] px-6 py-4 text-center text-[18px] font-medium text-white shadow-[0_12px_30px_rgba(145,75,241,0.22)]"
      >
        Use Template for Free
      </a>
      <a
        href="#projects"
        className="rounded-[12px] bg-white px-6 py-4 text-center text-[18px] font-medium text-[#101112]"
      >
        More Templates
      </a>
      <div className="flex items-center justify-center gap-3 rounded-[12px] bg-white px-6 py-4 text-[18px] font-medium text-[#101112]">
        <svg viewBox="0 0 26 26" className="h-5 w-5" aria-hidden="true">
          <path d="M4 4h8v8H4V4Zm10 0h8v8h-8V4ZM4 14h8v8H4v-8Zm10 0 8 8v-8h-8Z" fill="currentColor" />
        </svg>
        Made in Framer
      </div>
    </div>
  );
}

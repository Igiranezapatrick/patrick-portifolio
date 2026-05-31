import Image from "next/image";

export function ProfileSidebar() {
  return (
    <div className="rounded-[24px] bg-[#1c1d1f] p-6 ring-1 ring-white/10 shadow-2xl">
      <div className="overflow-hidden rounded-[16px] bg-[#221f28]">
        <div className="relative">
          <Image
            src="/me.png"
            alt="Patrick portrait"
            width={600}
            height={750}
            priority
            className="aspect-[0.88] w-full object-cover"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_28%,rgba(145,75,241,0.3),transparent_40%),linear-gradient(180deg,transparent_60%,rgba(16,17,18,0.7)_100%)]" />
        </div>
      </div>

      <div className="mt-6 text-center">
        <h2 className="text-[28px] font-bold tracking-tight text-white">
          Patrick IGIRANEZA
        </h2>
        <p className="mt-1.5 text-[15px] text-white/60">
          Fullstack Web Developer
        </p>
        <p className="text-[15px] text-white/60">
          Kigali, Rwanda
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <a
            href="https://instagram.com/patrickigiraneza0"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-[14px] font-medium text-white/60 transition hover:bg-[#914bf1] hover:text-white"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            @patrickigiraneza0
          </a>
        </div>

        <a
          href="https://wa.me/250793081660"
          target="_blank"
          rel="noopener noreferrer"
          className="accent-gradient mt-12 inline-flex w-full items-center justify-center rounded-[12px] px-6 py-4 text-[17px] font-bold text-white shadow-[0_12px_24px_rgba(145,75,241,0.15)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Let&apos;s Talk <span className="ml-2">→</span>
        </a>
      </div>
    </div>
  );
}

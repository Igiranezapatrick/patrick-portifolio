const iconLinks = [
  {
    href: "#home",
    label: "Home",
    icon: (
      <path
        d="M4.5 9.5L12 3l7.5 6.5V19a1 1 0 0 1-1 1h-4.5v-6h-4v6H5.5a1 1 0 0 1-1-1V9.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    href: "#projects",
    label: "Projects",
    icon: (
      <path
        d="M3.5 8.5h6l1.8-2h9.2a1 1 0 0 1 1 1V18a1 1 0 0 1-1 1h-17a1 1 0 0 1-1-1V9.5a1 1 0 0 1 1-1Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    href: "#services",
    label: "Tools",
    icon: (
      <path
        d="M14.2 4.6a3.9 3.9 0 0 0 5.2 5.2L13 16.2l-5.2-5.2 6.4-6.4Z M6.8 8.8 3.4 12.2a2.2 2.2 0 1 0 3.1 3.1l3.4-3.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    href: "#projects",
    label: "Work",
    icon: (
      <path
        d="M8 7V5.8A1.8 1.8 0 0 1 9.8 4h4.4A1.8 1.8 0 0 1 16 5.8V7m-12 3h16m-16 0v7.2A1.8 1.8 0 0 0 5.8 19h12.4A1.8 1.8 0 0 0 20 17.2V10m-16 0V8.8A1.8 1.8 0 0 1 5.8 7h12.4A1.8 1.8 0 0 1 20 8.8V10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    href: "#thoughts",
    label: "Thoughts",
    icon: (
      <path
        d="M5 19h14M7 16.5 17.8 5.7a2.1 2.1 0 0 1 3 3L10 19H7v-2.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    href: "#contact",
    label: "Contact",
    icon: (
      <path
        d="M4 6.5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1Zm0 1 8 6 8-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export function SiteNav() {
  return (
    <header className="relative z-30 flex justify-center px-4 pt-7 sm:px-6 lg:px-8">
      <nav className="surface flex items-center gap-2 rounded-2xl px-4 py-3 sm:px-5">
        {iconLinks.map((link, index) => (
          <a
            key={link.label}
            href={link.href}
            aria-label={link.label}
            className={`group flex h-11 w-11 items-center justify-center rounded-xl ${
              index === 0
                ? "accent-gradient text-white"
                : "text-white/90 hover:bg-white/[0.04]"
            }`}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-[18px] w-[18px]"
              aria-hidden="true"
            >
              {link.icon}
            </svg>
          </a>
        ))}
      </nav>
    </header>
  );
}

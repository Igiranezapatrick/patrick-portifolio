export type NavLink = {
  href: string;
  label: string;
};

export type Stat = {
  value: string;
  label: string;
  detail: string;
};

export type ClientLogo = {
  name: string;
  wordmark: string;
};

export type Project = {
  title: string;
  category: string;
  image: string;
};

export type Service = {
  title: string;
  summary: string;
  items: string[];
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  image: string;
};

export type Article = {
  title: string;
  date: string;
  category: string;
  image: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export const navLinks: NavLink[] = [
  { href: "#services", label: "Expertise" },
  { href: "#projects", label: "Work" },
  { href: "#testimonials", label: "Experience" },
  { href: "#thoughts", label: "Thoughts" },
  { href: "#contact", label: "Contact" },
];

export const stats: Stat[] = [
  {
    value: "12+",
    label: "Years of experience",
    detail: "",
  },
  {
    value: "46+",
    label: "Projects completed",
    detail: "",
  },
  {
    value: "20+",
    label: "Worldwide clients",
    detail: "",
  },
];

export const clients: ClientLogo[] = [
  { name: "Bear", wordmark: "logo ipsum" },
  { name: "Bolt", wordmark: "Logoipsum" },
  { name: "Arc", wordmark: "Logo" },
  { name: "Sign", wordmark: "logoipsum" },
];

export const projects: Project[] = [
  {
    title: "Project Atlas",
    category: "Product Design",
    image: "/project-atlas.svg",
  },
  {
    title: "Current Finance",
    category: "Web Development",
    image: "/project-current.svg",
  },
  {
    title: "Frame Studio",
    category: "Brand Identity",
    image: "/project-frame.svg",
  },
  {
    title: "Signal App",
    category: "UI/UX Design",
    image: "/project-signal.svg",
  },
];

export const services: Service[] = [
  {
    title: "Product Strategy",
    summary: "Defining the roadmap and core value proposition of your digital product.",
    items: ["Market Research", "User Personas", "Value Proposition", "Roadmap Planning"],
  },
  {
    title: "UI/UX Design",
    summary: "Creating intuitive and beautiful interfaces that users love to interact with.",
    items: ["User Flows", "Wireframing", "Visual Design", "Prototyping"],
  },
  {
    title: "Full-stack Development",
    summary: "Building robust and scalable applications using modern technologies.",
    items: ["Frontend Development", "Backend Systems", "API Integration", "Performance Ops"],
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: "Patrick translated a rough idea into a product story that looked premium, felt easy to use, and impressed our investors immediately.",
    name: "Mina Rowe",
    role: "Founder, Atlas Commerce",
    image: "/portrait-placeholder.svg",
  },
  {
    quote: "The design work never stayed decorative. Every choice clarified the product, shortened handoff time, and gave engineering a cleaner path forward.",
    name: "Darius Cole",
    role: "Product Lead, Current Finance",
    image: "/portrait-placeholder.svg",
  },
];

export const articles: Article[] = [
  {
    title: "Building calmer landing pages with stronger visual pacing",
    date: "May 2, 2026",
    category: "Layout",
    image: "/project-atlas.svg",
  },
  {
    title: "Why product storytelling should start before the hero section",
    date: "April 16, 2026",
    category: "Strategy",
    image: "/project-current.svg",
  },
];

export const faqs: Faq[] = [
  {
    question: "What kinds of projects are the best fit?",
    answer: "Portfolio sites, product marketing pages, early-stage dashboards, and design-system-driven frontend work are the strongest fit for this workflow.",
  },
  {
    question: "How close is this to the original inspiration?",
    answer: "The build mirrors the original page's structure, visual density, and atmosphere while using fresh content and safe replacement assets.",
  },
];

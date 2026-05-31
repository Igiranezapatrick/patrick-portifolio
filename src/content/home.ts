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
  category?: string;
  summary?: string;
  image: string;
};

export type Service = {
  title: string;
  summary: string;
  badge: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type Article = {
  title: string;
  date: string;
  category: string;
  summary: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export const navLinks: NavLink[] = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Tools" },
  { href: "#testimonials", label: "Experience" },
  { href: "#thoughts", label: "Thoughts" },
  { href: "#contact", label: "Contact" },
];

export const stats: Stat[] = [
  {
    value: "12",
    label: "Years of experience",
    detail: "",
  },
  {
    value: "46",
    label: "Projects completed",
    detail: "",
  },
  {
    value: "20",
    label: "Worldwide clients",
    detail: "",
  },
];

export const clients: ClientLogo[] = [
  { name: "Bear", wordmark: "logo ipsum" },
  { name: "Bolt", wordmark: "Logoipsum" },
  { name: "Arc", wordmark: "Logo" },
];

export const projects: Project[] = [
  {
    title: "Majd",
    category: "Free Portfolio Template",
    image:
      "https://framerusercontent.com/images/mKpBcirmfqd4t3E4WfKHynhKvA.webp?width=1600&height=1200",
  },
  {
    title: "NajmAI",
    category: "Modern Framer Template",
    image:
      "https://framerusercontent.com/images/hxgSQmquybiB6mIsV8wyxmKgo.jpeg?width=1440&height=900",
  },
  {
    title: "Damas",
    category: "SaaS Framer Template",
    image:
      "https://framerusercontent.com/images/rPU33YAD2YHXHtHu6zxEi5sI8w.webp?width=1600&height=1200",
  },
  {
    title: "Faseelh",
    category: "Free Framer Template",
    image:
      "https://framerusercontent.com/images/YDk7LnTelFuZNrVcNXEq8APhUI.png?width=509&height=383",
  },
];

export const services: Service[] = [
  {
    title: "Interface Direction",
    summary:
      "Product concepts, wireframes, and final visuals built to feel intentional from the first screen.",
    badge: "UX",
  },
  {
    title: "Design Systems",
    summary:
      "Scalable tokens, components, and layout rules that keep teams fast without losing polish.",
    badge: "DS",
  },
  {
    title: "Frontend Builds",
    summary:
      "Responsive Next.js implementations with careful spacing, motion, and conversion-minded details.",
    badge: "FE",
  },
  {
    title: "Launch Support",
    summary:
      "Landing pages, narrative cleanup, and final QA to help a product show up clearly on release day.",
    badge: "GO",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Patrick translated a rough idea into a product story that looked premium, felt easy to use, and impressed our investors immediately.",
    name: "Mina Rowe",
    role: "Founder, Atlas Commerce",
  },
  {
    quote:
      "The design work never stayed decorative. Every choice clarified the product, shortened handoff time, and gave engineering a cleaner path forward.",
    name: "Darius Cole",
    role: "Product Lead, Current Finance",
  },
  {
    quote:
      "We needed a modern portfolio-level experience for a real product launch. The final result felt sharp, distinctive, and ready for scale.",
    name: "Elena Hart",
    role: "Marketing Director, Frame Studio",
  },
];

export const articles: Article[] = [
  {
    title: "Building calmer landing pages with stronger visual pacing",
    date: "May 2, 2026",
    category: "Layout",
    summary:
      "A look at how rhythm, repetition, and whitespace shape the way a portfolio page earns trust.",
  },
  {
    title: "Why product storytelling should start before the hero section",
    date: "April 16, 2026",
    category: "Strategy",
    summary:
      "Good conversion design often begins with what users feel in the first three seconds, not the first CTA.",
  },
  {
    title: "Three small motion patterns that make interfaces feel more expensive",
    date: "March 28, 2026",
    category: "Motion",
    summary:
      "Subtle movement can reinforce hierarchy and quality without turning the page into a demo reel.",
  },
];

export const faqs: Faq[] = [
  {
    question: "What kinds of projects are the best fit?",
    answer:
      "Portfolio sites, product marketing pages, early-stage dashboards, and design-system-driven frontend work are the strongest fit for this workflow.",
  },
  {
    question: "Can this be adapted to my own brand later?",
    answer:
      "Yes. The page is structured around reusable content objects and local assets, so swapping in your own copy, colors, and media is straightforward.",
  },
  {
    question: "How close is this to the original inspiration?",
    answer:
      "The build mirrors the original page's structure, visual density, and atmosphere while using fresh content and safe replacement assets.",
  },
  {
    question: "Will the layout work on mobile too?",
    answer:
      "That is part of the implementation target. Sections collapse cleanly, cards stack intentionally, and interactions stay usable on smaller screens.",
  },
];

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

export type Tool = {
  name: string;
  category: string;
  icon: string;
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
    label: "Years of Experience",
    detail: "",
  },
  {
    value: "46",
    label: "Projects Completed",
    detail: "",
  },
  {
    value: "20",
    label: "Worldwide Clients",
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
    title: "Majd",
    category: "Free Portfolio Template",
    image: "/project-atlas.svg",
  },
  {
    title: "NajmAI",
    category: "Modern Framer Template",
    image: "/project-current.svg",
  },
  {
    title: "Damas",
    category: "SaaS Framer Template",
    image: "/project-frame.svg",
  },
  {
    title: "Faseelh",
    category: "Free Framer Template",
    image: "/project-signal.svg",
  },
];

export const tools: Tool[] = [
  { name: "SiteFlow", category: "Website Builder", icon: "S" },
  { name: "Pixelo", category: "Design Tool", icon: "P" },
  { name: "JuiceBox", category: "Payment Provider", icon: "J" },
  { name: "TalkAI", category: "AI Assistant", icon: "T" },
  { name: "NoteSpace", category: "Productivity Tool", icon: "N" },
  { name: "WebCraft", category: "React framework", icon: "W" },
];

export const testimonials: Testimonial[] = [
  {
    quote: "John expertly blends design with functionality, transforming our product into a sleek, user-friendly experience that our customers love!",
    name: "William M.",
    role: "",
    image: "/portrait-placeholder.svg",
  },
];

export const articles: Article[] = [
  {
    title: "Starting and Growing a Career in Web Design",
    date: "Apr 8, 2022",
    category: "",
    image: "/project-atlas.svg",
  },
  {
    title: "Create a Landing Page That Performs Great",
    date: "Mar 15, 2022",
    category: "",
    image: "/project-current.svg",
  },
];

export const faqs: Faq[] = [
  {
    question: "What services do you offer?",
    answer: "I provide a wide range of services including UI/UX design, frontend development, and product strategy to help businesses launch successful digital products.",
  },
  {
    question: "What is your design process?",
    answer: "My process starts with research and discovery, followed by wireframing, high-fidelity design, and iterative prototyping to ensure the best user experience.",
  },
  {
    question: "How do you handle project timelines?",
    answer: "Timelines are established at the beginning of each project based on complexity. I use agile methodologies to ensure timely delivery and consistent updates.",
  },
  {
    question: "Can you work with existing teams?",
    answer: "Yes, I frequently collaborate with in-house design and engineering teams, providing extra capacity or specialized expertise where needed.",
  },
  {
    question: "What tools do you use?",
    answer: "My toolkit includes Figma for design, Next.js and Tailwind CSS for development, and various project management tools to keep things organized.",
  },
];

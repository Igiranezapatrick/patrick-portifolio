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
  image: string | null;
  link: string;
};

export type Tool = {
  name: string;
  category: string;
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

export type ContentData = {
  navLinks: NavLink[];
  stats: Stat[];
  clients: ClientLogo[];
  projects: Project[];
  tools: Tool[];
  testimonials: Testimonial[];
  articles: Article[];
  faqs: Faq[];
  heroTitle: string;
  heroSubtitle: string;
  heroCta: string;
  aboutMe: string;
  servicesTitle: string;
  projectsTitle: string;
  testimonialsTitle: string;
  thoughtsTitle: string;
  contactTitle: string;
  contactCta: string;
};

export const enContent: ContentData = {
  navLinks: [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#services", label: "Tools" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#thoughts", label: "Thoughts" },
    { href: "#contact", label: "Contact" },
  ],

  stats: [
    {
      value: "4",
      label: "Years of Experience",
      detail: "",
    },
    {
      value: "12",
      label: "Projects Completed",
      detail: "",
    },
    {
      value: "5",
      label: "Potential Clients",
      detail: "",
    },
  ],

  clients: [
    { name: "Mugamba", wordmark: "Mugamba Coffee" },
    { name: "Agasobanuye", wordmark: "AG.Micorp" },
    { name: "Kairos", wordmark: "Kairos Inn" },
    { name: "Pi-Films", wordmark: "Pi Films" },
  ],

  projects: [
    {
      title: "AG.Micorp",
      category: "Agasobanuye Streaming Site",
      image: "/agmicorp.png",
      link: "https://agasobanuy.netlify.app",
    },
    {
      title: "Mugamba Coffee",
      category: "Coffee Factory Website",
      image: "/mugamba.png",
      link: "https://mugambacf.vercel.app",
    },
    {
      title: "Kairos Inn",
      category: "Full Stack Hotel Website",
      image: "/kairosinn.png",
      link: "https://kairosinn.netlify.app",
    },
    {
      title: "Pi Films",
      category: "Movie Streaming Site",
      image: "/pifilms.png",
      link: "https://pi-films.netlify.app",
    },
    {
      title: "Tembera Urwanda",
      category: "Travel Guide Platform",
      image: null,
      link: "#",
    },
  ],

  tools: [
    { name: "Supabase", category: "Backend / Database" },
    { name: "Git", category: "Version Control" },
    { name: "GitHub", category: "Code Hosting" },
    { name: "Vercel", category: "Deployment" },
    { name: "GSC", category: "SEO / Analysis" },
    { name: "VS Code", category: "Development IDE" },
  ],

  testimonials: [
    {
      quote: "Working with Patrick was a game-changer for our business. He took our vision for the Mugamba Coffee Factory and turned it into a professional, high-performing website that truly represents our brand. His technical expertise and attention to detail are unmatched.",
      name: "Mugamba Coffee Owner",
      role: "CEO",
      image: "/portrait-placeholder.svg",
    },
  ],

  articles: [
    {
      title: "Building Scalable Web Apps with Supabase",
      date: "May 20, 2024",
      category: "Development",
      image: "/project-atlas.svg",
    },
    {
      title: "The Importance of SEO for Small Businesses",
      date: "Apr 15, 2024",
      category: "Marketing",
      image: "/project-current.svg",
    },
  ],

  faqs: [
    {
      question: "What is your primary tech stack?",
      answer: "I am a Fullstack Web Developer specializing in modern technologies like React, Next.js, and Supabase. I focus on building scalable, high-performance applications with clean code.",
    },
    {
      question: "How do you handle hosting and deployment?",
      answer: "I primarily use Vercel and Netlify for frontend deployment and Supabase for backend services, ensuring your site is fast, secure, and always online.",
    },
    {
      question: "Can you help with SEO and site performance?",
      answer: "Absolutely. I use tools like Google Search Console to monitor and improve site visibility, and I build with performance-first frameworks to ensure high Core Web Vitals scores.",
    },
    {
      question: "What kind of projects do you take on?",
      answer: "I have experience building everything from movie streaming platforms and hotel booking systems to corporate factory websites. I enjoy tackling complex logic and creating seamless user experiences.",
    },
    {
      question: "How can I start a project with you?",
      answer: "You can reach out via the 'Let's Talk' button or contact me directly through WhatsApp. I'm always open to discussing new ideas and how I can help bring them to life.",
    },
  ],

  heroTitle: "Full Stack Web Developer",
  heroSubtitle: "I build beautiful and functional web experiences",
  heroCta: "Let's Talk",
  aboutMe: "I'm a passionate web developer with 4 years of experience building high-performance web applications. I specialize in full-stack development with React, Next.js, and modern web technologies.",
  servicesTitle: "Tools & Technologies",
  projectsTitle: "Featured Projects",
  testimonialsTitle: "What My Clients Say",
  thoughtsTitle: "My Thoughts",
  contactTitle: "Ready to work together?",
  contactCta: "Get in touch",
};

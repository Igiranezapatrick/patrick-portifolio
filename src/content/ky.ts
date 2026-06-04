import type { ContentData } from "./en";

export const kyContent: ContentData = {
  navLinks: [
    { href: "#home", label: "Ahabanza" },
    { href: "#projects", label: "Proyekiti" },
    { href: "#services", label: "Ibikoresho" },
    { href: "#testimonials", label: "Ibitekerezo" },
    { href: "#thoughts", label: "Imitekerereze" },
    { href: "#contact", label: "Kontakte" },
  ],

  stats: [
    {
      value: "4",
      label: "Imyaka y'Ubwubatsi",
      detail: "",
    },
    {
      value: "12",
      label: "Proyekiti Zagejwe",
      detail: "",
    },
    {
      value: "5",
      label: "Abakozi Basanzwe",
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
      category: "Urubuga rw'Ikina Rya Video",
      image: "/agmicorp.png",
      link: "https://agasobanuy.netlify.app",
    },
    {
      title: "Mugamba Coffee",
      category: "Urubuga rw'Ubwoko bwa Kawa",
      image: "/mugamba.png",
      link: "https://mugambacf.vercel.app",
    },
    {
      title: "Kairos Inn",
      category: "Urubuga rw'Izina Ryose",
      image: "/kairosinn.png",
      link: "https://kairosinn.netlify.app",
    },
    {
      title: "Pi Films",
      category: "Urubuga rw'Ikina Rya Video",
      image: "/pifilms.png",
      link: "https://pi-films.netlify.app",
    },
    {
      title: "Tembera Urwanda",
      category: "Platapormu yo Kutembekezwa Urwanda",
      image: null,
      link: "#",
    },
  ],

  tools: [
    { name: "Supabase", category: "Backend / Database" },
    { name: "Git", category: "Gukuranya Inzira" },
    { name: "GitHub", category: "Gushora Inyandiko" },
    { name: "Vercel", category: "Gukubira" },
    { name: "GSC", category: "SEO / Isesengura" },
    { name: "VS Code", category: "Ibikoresho byo Kurema" },
  ],

  testimonials: [
    {
      quote: "Gukorana na Patrick byari byinshi cyane kubwisoko ryacu. Yafata icyerekezo cyacu cya Mugamba Coffee Factory akabigira urubuga runyuze, rumvikana neza kandi rwerekeza izina ryacu. Ubwubatsi bwe na gukarira ibirebire nta kintu kigira inkanya.",
      name: "Umukozi wa Mugamba Coffee",
      role: "Umuyobozi",
      image: "/portrait-placeholder.svg",
    },
  ],

  articles: [
    {
      title: "Kurema Rukubikira rw'Ubwubatsi Web Bigamije Supabase",
      date: "Gicurasi 20, 2024",
      category: "Ubwubatsi",
      image: "/project-atlas.svg",
    },
    {
      title: "Inzira y'Amashyirahamwe Makuru yo Gusesa Urubuga",
      date: "Kabakonde 15, 2024",
      category: "Ibukanire",
      image: "/project-current.svg",
    },
  ],

  faqs: [
    {
      question: "Ni ubuhe buryo bw'ubwubatsi bw'ibikoresho ubuyobozi?",
      answer: "Ndi Umukozi w'Ubwubatsi Web Wese Wese kigera mu 4 imyaka c'ubwubatsi buhitamo umuti wa React, Next.js, na Supabase. Nibyicyerekezo cyangwa application yemewe no gukunzira neza.",
    },
    {
      question: "Nigute wakorera mu kubika data no guhindura inzira?",
      answer: "Nkora Vercel na Netlify kugira ngo ndoba inyandiko n'ubwubatsi, hamwe na Supabase kugira ngo nkusanya umutwe. Ibi byatanga umwanya mugenzi cyane n'ubwiyunge bw'ibikoresho.",
    },
    {
      question: "Wabugira irihe mushi mu SEO n'ubwiyunge bw'ikurura?",
      question: "Iyo, nkora Google Search Console kugira ngo nkurikire n'kumeza ishusho ry'urubuga, hamwe n'ibikoresho by'ubwubatsi bivuga byinshi mu mwigire.",
    },
    {
      question: "Ni ubuhe buryo bw'ubwubatsi ubuyobozi bwiyitaho?",
      answer: "Narimo muri buri guhindura website yerekeza kumesa ibintu bidasanzwe: amashyirahamwe, icyigize, n'ubwubatsi bw'isoko. Nibyicyerekezo ku rugoreka-ishusho kandi kumeza isesengura.",
    },
    {
      question: "Nigute nzafata inzira yo kukorana nawe?",
      answer: "Urashobora kugusiga mu nyandiko 'Kandi Tubigire' cyangwa kumpiganiza mu WhatsApp. Niba ngukunda kugira umunsi n'icyerekezo cyacu ku nyandiko mu mahoro.",
    },
  ],

  heroTitle: "Umukozi w'Ubwubatsi Web Wese Wese",
  heroSubtitle: "Nkora ibikoresho bya Web Byeza n'Byiremeza",
  heroCta: "Kandi Tubigire",
  aboutMe: "Ndi umukozi w'ubwubatsi wa web wyiyongererezaho igice cya 4 imyaka c'ubwubatsi ku gukora izina ryuzuye. Niyizimu cyuzuye cy'ubwubatsi buhitamo umuti wa React, Next.js, n'ibikoresho by'ubwubatsi bya kera.",
  servicesTitle: "Ibikoresho n'Inyandiko",
  projectsTitle: "Proyekiti Zimwe",
  testimonialsTitle: "Abantu Banyamwigire Niyindi",
  thoughtsTitle: "Imitekerereze Yanjye",
  contactTitle: "Wacu kandi Tubigire Cyane?",
  contactCta: "Gabigire",
};

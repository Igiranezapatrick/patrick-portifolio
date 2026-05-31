import { ArticlesSection } from "@/components/home/articles-section";
import { CtaSection } from "@/components/home/cta-section";
import { FaqSection } from "@/components/home/faq-section";
import { FloatingBadges } from "@/components/home/floating-badges";
import { HeroSection } from "@/components/home/hero-section";
import { ProjectsSection } from "@/components/home/projects-section";
import { ServicesSection } from "@/components/home/services-section";
import { SiteFooter } from "@/components/home/site-footer";
import { SiteNav } from "@/components/home/site-nav";
import { TestimonialsSection } from "@/components/home/testimonials-section";

export function HomePage() {
  return (
    <div className="page-shell relative isolate min-h-screen">
      <SiteNav />
      <FloatingBadges />
      <main className="relative z-10 mx-auto flex w-full max-w-[1372px] flex-col gap-10 px-4 pb-10 pt-8 sm:px-6 lg:px-8">
        <HeroSection />
        <ProjectsSection />
        <ServicesSection />
        <TestimonialsSection />
        <ArticlesSection />
        <FaqSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}

import { ArticlesSection } from "@/components/home/articles-section";
import { CtaSection } from "@/components/home/cta-section";
import { FaqSection } from "@/components/home/faq-section";
import { HeroSection } from "@/components/home/hero-section";
import { ProjectsSection } from "@/components/home/projects-section";
import { ServicesSection } from "@/components/home/services-section";
import { SiteFooter } from "@/components/home/site-footer";
import { SiteNav } from "@/components/home/site-nav";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { ProfileSidebar } from "@/components/home/profile-sidebar";
import { FloatingBadges } from "@/components/home/floating-badges";
import { ContactForm } from "@/components/home/contact-form";

export function HomePage() {
  return (
    <div className="page-shell relative isolate min-h-screen bg-[#101112]">
      <SiteNav />
      <main className="relative z-10 mx-auto w-full max-w-[1280px] px-4 pt-8 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[340px_1fr] lg:gap-12 xl:grid-cols-[380px_1fr] xl:gap-16">
          {/* Left Sticky Sidebar */}
          <aside className="lg:sticky lg:top-12 lg:pt-4">
            <ProfileSidebar />
          </aside>

          {/* Right Scrolling Content */}
          <div className="flex flex-col gap-24 pb-20 pt-4">
            <HeroSection />
            <ProjectsSection />
            <ServicesSection />
            <TestimonialsSection />
            <ArticlesSection />
            <FaqSection />
            <ContactForm />
            <CtaSection />
            <SiteFooter />
          </div>
        </div>
      </main>
    </div>
  );
}

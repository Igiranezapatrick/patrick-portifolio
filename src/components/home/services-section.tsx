import { SectionHeading } from "@/components/home/section-heading";
import { services } from "@/content/home";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="section-reveal section-delay-3 space-y-6 rounded-[2rem] py-6"
    >
      <SectionHeading
        eyebrow="Capabilities"
        title="Top-tier tools and services for premium digital work."
        description="The original page features compact utility cards here, so this build mirrors that pace with concise, high-contrast service blocks."
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service) => (
          <article
            key={service.title}
            className="surface rounded-[1.8rem] p-5 sm:p-6"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--glow)] text-sm font-semibold text-white">
              {service.badge}
            </div>
            <h3 className="mt-5 text-xl font-medium text-white">
              {service.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-[#9f9a92]">
              {service.summary}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

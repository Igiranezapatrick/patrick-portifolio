import Image from "next/image";
import { testimonials } from "@/content/home";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-reveal section-delay-3 py-20">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <span className="text-[14px] font-medium uppercase tracking-[0.2em] text-[#914bf1]">
            Experience
          </span>
          <h2 className="text-[48px] font-semibold tracking-tight text-white sm:text-[56px] md:text-[64px]">
            What clients <span className="text-white/40 italic">say.</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="group flex flex-col justify-between rounded-[32px] bg-[#1c1d1f] p-8 ring-1 ring-white/10 transition-all duration-500 hover:ring-white/20 shadow-xl"
            >
              <p className="text-[20px] leading-relaxed text-white/80 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="mt-8 flex items-center gap-4 border-t border-white/5 pt-8">
                <div className="relative h-12 w-12 overflow-hidden rounded-full ring-1 ring-white/10">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[16px] font-semibold text-white">
                    {testimonial.name}
                  </span>
                  <span className="text-[14px] font-medium text-white/40 uppercase tracking-wider">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

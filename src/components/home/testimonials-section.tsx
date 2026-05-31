import Image from "next/image";
import { testimonials } from "@/content/home";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-reveal section-delay-3">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#914bf1]">
            Experience
          </span>
          <h2 className="text-[42px] font-semibold tracking-tight text-white sm:text-[52px] md:text-[64px]">
            What clients <span className="text-white/40 italic">say.</span>
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="group flex flex-col justify-between rounded-[24px] bg-[#1c1d1f] p-6 ring-1 ring-white/10 transition-all duration-500 hover:ring-white/20 shadow-xl"
            >
              <p className="text-[17px] leading-relaxed text-white/80 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="mt-6 flex items-center gap-3.5 border-t border-white/5 pt-6">
                <div className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-white/10">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[15px] font-bold text-white leading-none">
                    {testimonial.name}
                  </span>
                  <span className="mt-1 text-[12px] font-bold text-white/30 uppercase tracking-widest">
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

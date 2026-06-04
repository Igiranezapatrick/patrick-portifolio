"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/language-context";

export function TestimonialsSection() {
  const { content } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const previous = () => {
    setActiveIndex((current) =>
      current === 0 ? content.testimonials.length - 1 : current - 1
    );
  };

  const next = () => {
    setActiveIndex((current) =>
      current === content.testimonials.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section id="testimonials" className="section-reveal section-delay-3">
      <div className="flex flex-col gap-10">
        <div className="flex items-end justify-between">
          <h2 className="text-[48px] font-semibold leading-[1.1] tracking-[-0.05em] text-white sm:text-[64px] md:text-[72px]">
            {content.testimonialsTitle}
            <br />
            About My <span className="text-[#914bf1]">Work</span>
          </h2>
          
          <div className="mb-2 flex items-center gap-3">
            <button
              onClick={previous}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#914bf1]/20 text-white transition-all hover:bg-[#914bf1]/40"
              aria-label="Previous testimonial"
            >
              <span className="text-xl">←</span>
            </button>
            <button
              onClick={next}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#914bf1]/80 text-white transition-all hover:bg-[#914bf1]"
              aria-label="Next testimonial"
            >
              <span className="text-xl">→</span>
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {content.testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="min-w-full rounded-[32px] bg-[#1c1d1f] p-10 ring-1 ring-white/10 shadow-xl md:p-12"
              >
                <div className="flex flex-col gap-8">
                  <div className="flex items-center gap-4">
                    <div className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-white/10">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-[24px] font-bold text-white">
                      {testimonial.name}
                    </span>
                  </div>
                  
                  <p className="text-[20px] leading-relaxed text-white/70 md:text-[24px]">
                    {testimonial.quote}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

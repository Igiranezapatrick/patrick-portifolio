"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/home/section-heading";
import { testimonials } from "@/content/home";

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const previous = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1,
    );
  };

  const next = () => {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <section
      id="testimonials"
      className="section-reveal section-delay-3 space-y-6 rounded-[2rem] py-6"
    >
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Client Notes"
          title="A testimonial slider with the same relaxed, premium rhythm."
          description="The original inspiration leans on a horizontally paced social proof block, so this version keeps that feeling with custom quotes and a simple carousel."
        />
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={previous}
            className="hairline h-12 w-12 rounded-full text-white hover:bg-white/5"
            aria-label="Previous testimonial"
          >
            ←
          </button>
          <button
            type="button"
            onClick={next}
            className="hairline h-12 w-12 rounded-full text-white hover:bg-white/5"
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-[2rem]">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="surface min-w-full rounded-[2rem] p-6 sm:p-8 lg:p-10"
            >
              <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                <p className="max-w-3xl text-2xl leading-tight tracking-tight text-white sm:text-3xl lg:text-[2.7rem]">
                  “{item.quote}”
                </p>
                <div className="shrink-0 space-y-2">
                  <p className="text-lg font-medium text-white">{item.name}</p>
                  <p className="text-sm uppercase tracking-[0.24em] text-[#98938a]">
                    {item.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { faqs } from "@/content/home";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-reveal section-delay-4">
      <div className="flex flex-col gap-10">
        <h2 className="text-[48px] font-semibold leading-[1.1] tracking-[-0.05em] text-white sm:text-[64px] md:text-[72px]">
          Any Questions?
          <br />
          <span className="text-[#914bf1]">Look here</span>
        </h2>

        <div className="flex flex-col gap-3 max-w-3xl">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="group overflow-hidden rounded-[20px] bg-[#1c1d1f] ring-1 ring-white/10 transition-all hover:ring-white/20"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className="text-[18px] font-bold text-white sm:text-[20px]">
                    {faq.question}
                  </span>
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ${isOpen ? "bg-[#914bf1] text-white rotate-45" : "bg-white/5 text-white/40"}`}>
                    <span className="text-2xl">+</span>
                  </div>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-[16px] leading-relaxed text-white/50">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

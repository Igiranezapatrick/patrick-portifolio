"use client";

import { useState } from "react";
import { faqs } from "@/content/home";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-reveal section-delay-4 py-20">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <span className="text-[14px] font-medium uppercase tracking-[0.2em] text-[#914bf1]">
            FAQ
          </span>
          <h2 className="text-[48px] font-semibold tracking-tight text-white sm:text-[56px] md:text-[64px]">
            Common <span className="text-white/40 italic">Questions.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-4 max-w-3xl">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="group overflow-hidden rounded-[24px] bg-[#1c1d1f] ring-1 ring-white/10 transition-all hover:ring-white/20"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className="text-[18px] font-semibold text-white sm:text-[20px]">
                    {faq.question}
                  </span>
                  <div className={`flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
                    <span className="text-xl">+</span>
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

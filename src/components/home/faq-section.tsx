"use client";

import { useState } from "react";
import { useLanguage } from "@/context/language-context";

function ChevronDown() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export function FaqSection() {
  const { content } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-reveal section-delay-4">
      <div className="flex flex-col gap-10">
        <h2 className="text-[48px] font-semibold leading-[1.1] tracking-[-0.05em] text-white sm:text-[64px] md:text-[72px]">
          Frequently
          <br />
          Asked <span className="text-[#914bf1]">Questions</span>
        </h2>

        <div className="flex flex-col gap-3">
          {content.faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="group overflow-hidden rounded-[16px] bg-[#1c1d1f] ring-1 ring-white/10 transition-all hover:ring-white/20"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className="text-[18px] font-bold text-white sm:text-[20px]">
                    {faq.question}
                  </span>
                  <div className={`text-white/40 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                    <ChevronDown />
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

"use client";

import { useState } from "react";
import { faqs } from "@/content/home";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-reveal section-delay-4">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#914bf1]">
            FAQ
          </span>
          <h2 className="text-[42px] font-semibold tracking-tight text-white sm:text-[52px] md:text-[64px]">
            Common <span className="text-white/40 italic">Questions.</span>
          </h2>
        </div>

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
                  className="flex w-full items-center justify-between p-5 text-left"
                >
                  <span className="text-[16px] font-bold text-white sm:text-[18px]">
                    {faq.question}
                  </span>
                  <div className={`flex h-7 w-7 items-center justify-center rounded-full bg-white/5 text-white transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
                    <span className="text-lg">+</span>
                  </div>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-[14px] leading-relaxed text-white/50">
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

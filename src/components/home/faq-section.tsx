"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/home/section-heading";
import { faqs } from "@/content/home";

export function FaqSection() {
  const [openQuestion, setOpenQuestion] = useState(faqs[0]?.question);

  return (
    <section className="section-reveal section-delay-4 space-y-6 rounded-[2rem] py-6">
      <SectionHeading
        eyebrow="FAQ"
        title="Frequently asked questions, with smooth expandable detail."
        description="The original page ends with a compact accordion, so this version preserves that interaction and uses concise implementation-focused answers."
      />
      <div className="space-y-3">
        {faqs.map((faq) => {
          const isOpen = openQuestion === faq.question;

          return (
            <article
              key={faq.question}
              className="surface overflow-hidden rounded-[1.6rem]"
            >
              <button
                type="button"
                onClick={() =>
                  setOpenQuestion(isOpen ? "" : faq.question)
                }
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                aria-expanded={isOpen}
              >
                <span className="text-lg font-medium text-white sm:text-xl">
                  {faq.question}
                </span>
                <span className="text-2xl text-[#cfc8bc]">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              <div
                className="grid transition-[grid-template-rows] duration-300 ease-out"
                style={{
                  gridTemplateRows: isOpen ? "1fr" : "0fr",
                }}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-sm leading-7 text-[#a19c93] sm:px-6 sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

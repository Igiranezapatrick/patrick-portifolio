import Image from "next/image";
import { articles } from "@/content/home";

export function ArticlesSection() {
  return (
    <section id="thoughts" className="section-reveal section-delay-4">
      <div className="flex flex-col gap-10">
        <h2 className="text-[48px] font-semibold leading-[1.1] tracking-[-0.05em] text-white sm:text-[64px] md:text-[72px]">
          Design Thoughts
          <br />
          and <span className="text-[#914bf1]">Perspectives</span>
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {articles.map((article) => (
            <article
              key={article.title}
              className="group cursor-pointer flex flex-col overflow-hidden rounded-[32px] bg-[#1c1d1f] ring-1 ring-white/10 transition-all hover:ring-white/20"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[24px] m-4">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              <div className="pb-8 px-8 flex flex-col gap-2">
                <span className="text-[14px] font-medium text-white/40 uppercase tracking-widest">
                  {article.date}
                </span>
                <h3 className="text-[24px] font-bold text-white leading-tight transition-colors group-hover:text-[#914bf1] md:text-[28px]">
                  {article.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

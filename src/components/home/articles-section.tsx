import Image from "next/image";
import { articles } from "@/content/home";

export function ArticlesSection() {
  return (
    <section id="thoughts" className="section-reveal section-delay-4 py-20">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <span className="text-[14px] font-medium uppercase tracking-[0.2em] text-[#914bf1]">
            Thoughts
          </span>
          <h2 className="text-[48px] font-semibold tracking-tight text-white sm:text-[56px] md:text-[64px]">
            Journal & <span className="text-white/40 italic">Insights.</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.title}
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[24px] bg-[#1c1d1f] ring-1 ring-white/10 transition-all duration-500 group-hover:ring-white/20">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              <div className="mt-6 flex flex-col gap-3 px-1">
                <div className="flex items-center gap-3">
                  <span className="text-[13px] font-bold uppercase tracking-widest text-[#914bf1]">
                    {article.category}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-white/20" />
                  <span className="text-[14px] font-medium text-white/40">
                    {article.date}
                  </span>
                </div>
                
                <h3 className="text-[22px] font-semibold text-white leading-snug group-hover:text-[#914bf1] transition-colors">
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

import { SectionHeading } from "@/components/home/section-heading";
import { articles } from "@/content/home";

export function ArticlesSection() {
  return (
    <section
      id="thoughts"
      className="section-reveal section-delay-4 space-y-6 rounded-[2rem] py-6"
    >
      <SectionHeading
        eyebrow="Thoughts"
        title="Design notes and perspectives laid out like editorial cards."
        description="This section borrows the pacing of a portfolio journal grid and keeps the content length tuned for the same visual balance."
      />
      <div className="grid gap-4 lg:grid-cols-3">
        {articles.map((article) => (
          <article
            key={article.title}
            className="surface rounded-[1.75rem] p-5 sm:p-6"
          >
            <p className="text-xs uppercase tracking-[0.24em] text-[#b8b2a8]">
              {article.category}
            </p>
            <h3 className="mt-4 text-2xl font-medium leading-tight text-white">
              {article.title}
            </h3>
            <p className="mt-4 text-sm leading-6 text-[#9f9a92]">
              {article.summary}
            </p>
            <p className="mt-6 text-sm text-[#7f7a72]">{article.date}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl space-y-3">
      <p className="text-sm uppercase tracking-[0.28em] text-[#b8b2a8]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="max-w-xl text-base leading-7 text-[#aaa59d] sm:text-lg">
        {description}
      </p>
    </div>
  );
}

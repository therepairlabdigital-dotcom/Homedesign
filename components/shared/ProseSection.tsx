type ProseSectionProps = {
  title: string;
  sections: { heading: string; body: string[] }[];
};

export default function ProseSection({ title, sections }: ProseSectionProps) {
  return (
    <section className="bg-[#F7F6F4] py-14 lg:py-20">
      <div className="mx-auto max-w-[900px] px-6 lg:px-10">
        <h2 className="font-sora text-2xl font-bold leading-tight text-black md:text-3xl">
          {title}
        </h2>
        <div className="mt-8 space-y-10">
          {sections.map((section) => (
            <div key={section.heading}>
              <h3 className="font-sora text-lg font-semibold text-black md:text-xl">
                {section.heading}
              </h3>
              <div className="mt-4 space-y-5">
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-8 text-black/68">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

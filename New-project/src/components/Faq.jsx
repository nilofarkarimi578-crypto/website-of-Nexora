
import { useState } from "react";

const faqs = [
  {
    question: "What does a typical business consultation involve?",
    answer:
      "Every engagement begins with a thorough assessment of your current operations, market position, and growth objectives. From there, we develop a tailored strategy that addresses your most pressing challenges whether that's streamlining workflows, entering new markets, or improving profitability. You'll receive a clear roadmap with actionable recommendations and measurable milestones.",
  },
  {
    question: "How long does an engagement usually last?",
    answer:
      "The duration depends on your goals, project scope, and business needs. Some consultations can be completed in a few weeks, while larger strategic engagements may take several months. We establish a clear timeline and milestones before the work begins.",
  },
  {
    question: "What is the average duration of a consulting project?",
    answer:
      "Most consulting projects take between four and twelve weeks. Smaller projects may require less time, while complex transformations can take longer. We tailor every project timeline to your priorities and desired outcomes.",
  },
  {
    question: "What are some popular engagement ring styles?",
    answer:
      "Popular styles include solitaire, halo, three-stone, vintage-inspired, and modern minimalist designs. The best choice depends on personal taste, lifestyle, and budget.",
  },
  {
    question: "How much should I budget for an engagement ring?",
    answer:
      "Your budget should reflect what feels comfortable for you. Consider the style, materials, gemstone, and craftsmanship you value most. There is no universal amount you need to spend to find a meaningful ring.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <main className="min-h-screen bg-[#f7f5f0] px-4 pb-24 pt-10 text-[#17201d] sm:px-8 sm:pt-12">
      <section className="mx-auto max-w-[1200px]">

        {/* Heading */}
        <h1 className="mb-16 text-center font-serif text-5xl font-normal tracking-[-0.045em] sm:mb-24 sm:text-6xl md:text-7xl">
          Questions? Answer
        </h1>

        {/* Questions */}
        <div className="space-y-[17px]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-[20px] border transition-colors duration-300 ${
                  isOpen
                    ? "border-transparent bg-white"
                    : "border-[#e9e6df] bg-transparent"
                }`}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? -1 : index)
                  }
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-5 px-6 py-7 text-left sm:px-[30px] sm:py-[31px]"
                >
                  <span className="text-lg font-normal leading-7 tracking-[-0.025em] sm:text-[23px]">
                    {faq.question}
                  </span>

                  <span className="shrink-0 text-[32px] font-light leading-none">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-7 sm:px-[30px] sm:pb-[30px]">
                    <p className="max-w-[1050px] text-base leading-[1.65] text-[#5d625f] sm:text-[21px]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact banner */}
        <div className="mt-[60px] flex flex-col items-start justify-between gap-6 rounded-[20px] bg-[#f0eee5] px-7 py-7 sm:flex-row sm:items-center sm:px-[30px] sm:py-[30px]">
          <p className="text-lg leading-7 tracking-[-0.025em] sm:text-[23px]">
            Still have questions? Contact us directly.
          </p>

          <a
            href="/contact"
            className="inline-flex min-w-[174px] items-center justify-center rounded-[17px] bg-[#151d1a] px-7 py-5 text-lg font-medium text-white transition duration-300 hover:bg-[#303b35]"
          >
            Contact Us
          </a>
        </div>

      </section>
    </main>
  );
}

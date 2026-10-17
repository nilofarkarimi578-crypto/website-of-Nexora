
const articles = [
  {
    image:
      "https://framerusercontent.com/images/2nRuRC2DGHbxshFr0NqJL6y3c0.png?height=1236&width=1580",
    date: "Aug 9, 2026",
    category: "PRODUCT & UPDATES",
    title:
      "Five signs your business is ready to scale and how to prepare",
  },
  {
    image:
      "https://framerusercontent.com/images/4LvBiuXWF4RDCE4jrAzVZimVXUA.png?height=1240&width=1580",
    date: "Aug 9, 2026",
    category: "OPS & STRATEGY",
    title:
      "How to build a growth strategy that survives market uncertainty",
  },
  {
    image:
      "https://framerusercontent.com/images/Lyb3jyUXunar3UnZc1dgS8UYlss.png?height=1240&width=1580",
    date: "Aug 9, 2026",
    category: "New Product Launches",
    title:
      "Top 10 Business strategy books every consultant should read",
  },
];

export default function Insights() {
  return (
    <section className="min-h-screen bg-[#f7f5f0] px-5 pb-24 pt-[18px] text-[#171f1c] sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1600px]">

        {/* Heading */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex h-[44px] items-center gap-[10px] rounded-full border border-[#e8e6e0] bg-white px-[17px]">
            <span className="h-[6px] w-[6px] rounded-full bg-[#171f1c]" />
            <span className="text-[16px] font-medium">
              INSIGHTS
            </span>
          </div>

          <h1 className="mt-[26px] font-serif text-[42px] font-normal leading-tight tracking-[-0.045em] sm:text-[54px] lg:text-[64px]">
            Insights from the Nexor
          </h1>
        </div>

        {/* Articles grid */}
        <div className="mt-[68px] grid grid-cols-1 gap-x-[26px] gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article key={article.title} className="min-w-0">

              {/* Original article image */}
              <div className="aspect-[1.285/1] overflow-hidden rounded-[16px] bg-[#e8e4da]">
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                />
              </div>

              {/* Date and category */}
              <div className="mt-[21px] flex flex-wrap items-center gap-x-5 gap-y-3">
                <time className="whitespace-nowrap text-[18px] text-[#5e625f]">
                  {article.date}
                </time>

                <span className="inline-flex min-h-[38px] items-center rounded-[10px] bg-[#f0eee5] px-3 py-[7px] text-[16px] leading-5">
                  {article.category}
                </span>
              </div>

              {/* Article title */}
              <h2 className="mt-[15px] text-[20px] font-medium leading-[1.65] tracking-[-0.035em] sm:text-[21px]">
                {article.title}
              </h2>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
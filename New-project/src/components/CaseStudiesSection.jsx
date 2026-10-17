import React from "react";

const caseStudies = [
  {
    name: "Meridian",
    category: "Brand Strategy",
    title: "Building a stronger brand through thoughtful design.",
    image:
      "https://framerusercontent.com/images/mwOhzjlCvNdQyzrfH0ARYF3rhHo.png?height=950&width=1536",
  },
  {
    name: "Horizon",
    category: "Digital Experience",
    title: "Creating meaningful experiences for modern spaces.",
    image:
      "https://framerusercontent.com/images/kDFcYwpqnoDaZrZGWaZpJu4.png?height=1500&width=1743",
  },
  {
    name: "Summit",
    category: "Creative Direction",
    title: "Helping brands connect with their audiences.",
    image:
      "https://framerusercontent.com/images/Qy5LHdmfEkngOJ9tD4WNHCxnWs.png?height=1500&width=1743",
  },
  {
    name: "Vista",
    category: "Business Growth",
    title: "Turning ambitious ideas into lasting results.",
    image:
      "https://framerusercontent.com/images/65gZia4eaNo50LWRcnyy5dkUnz4.png?height=1000&width=1162",
  },
];

export default function CaseStudiesSection() {
  return (
    <section
      id="case-studies"
      className="bg-[#f7f5f0] px-5 py-20 sm:px-8 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-[1280px]">
        {/* Heading */}
        <div className="mb-14 text-center md:mb-20">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-[#74776e]">
            Our Case Studies
          </p>

          <h2 className="font-serif text-4xl leading-tight tracking-tight text-[#20241f] sm:text-5xl md:text-6xl">
            We help companies
            <br />
            achieve just outcomes.
          </h2>
        </div>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2">
          {caseStudies.map((study, index) => (
            <article key={study.name} className="group">
              {/* Image */}
              <div className="mb-6 aspect-[1.45/1] overflow-hidden rounded-sm bg-[#e8e5dd]">
                <img
                  src={study.image}
                  alt={`${study.name} case study`}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Card Information */}
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-serif text-2xl text-[#20241f] sm:text-3xl">
                  {study.name}
                </h3>

                <span className="rounded-full border border-[#d9d7cf] px-3 py-1.5 text-xs text-[#66685f]">
                  {study.category}
                </span>
              </div>

              <p className="mt-3 max-w-lg text-sm leading-6 text-[#66685f] sm:text-base">
                {study.title}
              </p>

              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#20241f] transition-opacity hover:opacity-60"
              >
                Read Full Story
                <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

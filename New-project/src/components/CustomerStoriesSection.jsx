
import React, { useState } from "react";

const brands = ["Meridian", "Summit", "Horizon", "Vista"];

export default function CustomerStoriesSection() {
  const [activeBrand, setActiveBrand] = useState("Meridian");

  return (
    <section className="bg-[#f7f5f0] px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1600px]">
        {/* Section Heading */}
        <div className="mb-16 text-center sm:mb-20">
          <span className="inline-flex items-center gap-3 rounded-full border border-[#e5e3de] bg-white px-5 py-2.5 text-sm font-medium text-[#17211d]">
            <span className="h-2 w-2 rounded-full bg-[#17211d]" />
            CUSTOMERS STORIES
          </span>

          <h2 className="mt-8 font-serif text-4xl leading-tight tracking-tight text-[#17211d] sm:text-5xl md:text-6xl">
            Trusted by brands
            <br />
            across industries
          </h2>
        </div>

        {/* Testimonial Panel */}
        <div className="grid grid-cols-1 gap-8 rounded-2xl bg-[#111c18] p-5 text-white sm:p-7 lg:grid-cols-2 lg:gap-16 lg:p-8">
          {/* Customer Photo */}
          <div className="min-h-[320px] overflow-hidden rounded-2xl sm:min-h-[450px] lg:min-h-[540px]">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85"
              alt="Customer meeting and discussing a project"
              className="h-full min-h-[320px] w-full object-cover sm:min-h-[450px] lg:min-h-[540px]"
            />
          </div>

          {/* Testimonial Details */}
          <div className="flex flex-col justify-between py-4 sm:py-8 lg:py-10">
            <div>
              <div className="font-serif text-5xl leading-none text-[#e7f878]">
                ”
              </div>

              <blockquote className="mt-5 max-w-2xl text-2xl leading-relaxed sm:text-3xl">
                “Working with them felt like being understood, then
                thoughtfully guided toward clarity.”
              </blockquote>

              <div className="mt-8">
                <h3 className="text-xl font-semibold">Emma Clark</h3>
                <p className="mt-2 text-base text-[#d4d8d3] sm:text-lg">
                  Head of Operations, Klea
                </p>
              </div>
            </div>

            {/* Statistics */}
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16">
              <div className="rounded-2xl bg-[#263832] p-6 sm:p-7">
                <p className="font-serif text-4xl sm:text-5xl">
                  <span className="text-[#e7f878]">+</span>$2.4M
                </p>
                <p className="mt-5 text-base leading-7 text-[#e1e4df]">
                  Research budgets tracked in real time
                </p>
              </div>

              <div className="rounded-2xl bg-[#263832] p-6 sm:p-7">
                <p className="font-serif text-4xl sm:text-5xl">
                  <span className="text-[#e7f878]">+</span>45%
                </p>
                <p className="mt-5 text-base leading-7 text-[#e1e4df]">
                  Research budgets tracked in real time
                </p>
              </div>
            </div>

            {/* Button */}
            <a
              href="#case-studies"
              className="mt-8 inline-flex w-fit items-center justify-center rounded-2xl bg-[#eafa80] px-7 py-5 text-lg font-medium text-[#17211d] transition-colors hover:bg-[#d9eb6a]"
            >
              Read Full Story
            </a>
          </div>
        </div>

        {/* Brand Navigation */}
        <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-6 sm:grid-cols-4 sm:gap-x-8">
          {brands.map((brand) => (
            <button
              key={brand}
              onClick={() => setActiveBrand(brand)}
              className={`border-b pb-5 pt-3 text-left transition-colors ${
                activeBrand === brand
                  ? "border-[#17211d] text-[#17211d]"
                  : "border-[#c8c8c0] text-[#a0a49f] hover:text-[#4f5752]"
              }`}
            >
              <span className="flex items-center justify-center gap-2 text-xl font-semibold tracking-tight sm:text-2xl">
                <span className="text-2xl" aria-hidden="true">
                  {brand === "Meridian"
                    ? "✣"
                    : brand === "Summit"
                      ? "✳"
                      : brand === "Horizon"
                        ? "◧"
                        : "◈"}
                </span>
                {brand}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

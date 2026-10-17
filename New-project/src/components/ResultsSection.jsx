
import React from "react";

const avatars = [
  "https://i.pravatar.cc/100?img=12",
  "https://i.pravatar.cc/100?img=13",
  "https://i.pravatar.cc/100?img=14",
  "https://i.pravatar.cc/100?img=11",
  "https://i.pravatar.cc/100?img=15",
];

function GrowthChart() {
  return (
    <div className="relative mt-10 h-44 w-full overflow-hidden">
      <svg
        viewBox="0 0 500 180"
        preserveAspectRatio="none"
        className="h-full w-full"
        fill="none"
      >
        <defs>
          <linearGradient id="growthFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c9ed85" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#c9ed85" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path
          d="M0 130 C35 115 50 130 75 145 S130 165 145 120 S175 20 220 35 S255 125 295 115 S330 20 365 15 S405 85 435 65 S460 0 500 0 L500 180 L0 180 Z"
          fill="url(#growthFill)"
        />

        <path
          d="M0 130 C35 115 50 130 75 145 S130 165 145 120 S175 20 220 35 S255 125 295 115 S330 20 365 15 S405 85 435 65 S460 0 500 0"
          stroke="#b9e45f"
          strokeWidth="3"
          strokeLinecap="round"
          className="growth-line"
        />

        <circle
          cx="220"
          cy="35"
          r="6"
          fill="white"
          stroke="#c7ed7c"
          strokeWidth="4"
        />
      </svg>

      <span className="absolute left-[42%] top-1 text-sm text-[#59615c]">
        Yearly
      </span>
    </div>
  );
}

function ImprovementBars() {
  return (
    <div className="mt-12 flex h-20 items-end gap-[5px] overflow-hidden">
      {Array.from({ length: 24 }).map((_, index) => (
        <div
          key={index}
          className={`h-full min-w-[8px] flex-1 ${
            index < 18 ? "bg-[#c5b5ff]" : "bg-[#eee9ff]"
          }`}
        />
      ))}
    </div>
  );
}

function ResultsCard() {
  return (
    <div className="rounded-2xl bg-white p-7 sm:p-10">
      <h3 className="text-lg font-medium text-[#202722] sm:text-2xl">
        Average Improvements
      </h3>

      <p className="mt-5 font-serif text-5xl tracking-tight text-[#18211d] sm:text-7xl">
        121%
      </p>

      <ImprovementBars />

      <p className="mt-16 max-w-md text-base leading-8 text-[#626863] sm:text-xl">
        Users can evaluate campaign results more quickly thanks to clearer
        analytics and structured reporting
      </p>
    </div>
  );
}

function GrowthCard() {
  return (
    <div className="rounded-2xl bg-white p-7 sm:p-10">
      <h3 className="text-lg font-medium text-[#202722] sm:text-2xl">
        Growth Increase
      </h3>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <p className="font-serif text-5xl tracking-tight text-[#18211d] sm:text-7xl">
          99%
        </p>

        <span className="rounded-full bg-[#17211d] px-4 py-2 text-sm font-semibold text-[#e3f77d] sm:text-xl">
          +42%
        </span>
      </div>

      <GrowthChart />

      <p className="mt-8 max-w-md text-base leading-8 text-[#626863] sm:text-xl">
        A unified workspace consolidates analytics, offers, and performance
        tasks
      </p>
    </div>
  );
}

function TestimonialCard() {
  return (
    <div className="relative min-h-[570px] overflow-hidden rounded-2xl bg-[#176800] p-6 sm:p-8">
      <img
        src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1200&q=85"
        alt="Abstract green background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-lime-950/20" />

      <div className="relative mx-auto mt-8 flex min-h-[430px] max-w-md flex-col justify-between rounded-2xl bg-[#f5f5ed] p-6 sm:mt-14 sm:p-9">
        <div>
          <div className="text-xl tracking-[3px] text-[#17211d]">
            ★★★★★
          </div>

          <blockquote className="mt-6 text-lg leading-[1.55] text-[#202722] sm:text-2xl">
            “Nexor replaced three tools and finally gave our teams a shared
            understanding of what’s happening.”
          </blockquote>
        </div>

        <div className="mt-10">
          <p className="text-lg font-medium text-[#202722] sm:text-xl">
            Emma Clark
          </p>

          <p className="mt-3 text-base text-[#626863] sm:text-lg">
            Head of Operations
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ResultsSection() {
  return (
    <section
      id="results"
      className="overflow-hidden bg-[#f7f5f0] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-[1600px]">
        {/* Section label */}
        <div className="inline-flex items-center gap-3 rounded-full border border-[#e5e3de] bg-white px-5 py-3 text-sm font-medium text-[#202722]">
          <span className="h-2 w-2 rounded-full bg-[#17211d]" />
          RESULT
        </div>

        {/* Heading */}
        <h2 className="mt-8 max-w-[1450px] font-serif text-4xl leading-[1.12] tracking-tight text-[#17211d] sm:text-5xl md:text-6xl lg:text-7xl">
          Measurable product impact driven by better decision-making and
          streamlined workflows
        </h2>

        {/* Description */}
        <p className="mt-8 max-w-[1050px] text-base leading-7 text-[#5b625e] sm:text-xl sm:leading-[1.7]">
          We embed with your team to diagnose what's slowing you down, build
          the systems that unlock momentum, and stay until the work is done.
          From strategy sprints to operational redesigns, we bring clarity to
          complex problems and deliver outcomes you can measure.
        </p>

        {/* Ratings */}
        <div className="mt-10 flex flex-wrap items-center gap-4 sm:mt-14">
          <div className="flex items-center">
            {avatars.map((avatar, index) => (
              <img
                key={avatar}
                src={avatar}
                alt={`Client ${index + 1}`}
                className={`h-12 w-12 rounded-full border-2 border-white object-cover sm:h-16 sm:w-16 ${
                  index > 0 ? "-ml-3" : ""
                }`}
              />
            ))}
          </div>

          <div className="h-px w-6 bg-[#17211d]" />

          <p className="text-base text-[#202722] sm:text-xl">
            Rated 4.8/5
          </p>
        </div>

        {/* Results cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-7">
          <ResultsCard />
          <GrowthCard />
          <TestimonialCard />
        </div>
      </div>

      <style>{`
        .growth-line {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: drawGrowth 2.5s ease-out forwards;
        }

        @keyframes drawGrowth {
          to {
            stroke-dashoffset: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .growth-line {
            animation: none;
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </section>
  );
}

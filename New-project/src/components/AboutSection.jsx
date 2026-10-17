import { ArrowDownRight, Target } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-[#f7f6f1] px-5 py-16 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[1440px] text-center">
        {/* Section label */}
        <span className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2 text-xs font-semibold uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-black" />
          About Us
        </span>

        {/* Heading */}
        <h2 className="mx-auto mt-7 max-w-[920px] font-serif text-4xl leading-tight tracking-tight text-[#151d1a] sm:text-5xl lg:text-6xl">
          A global consulting partner dedicated to building smarter
          solutions. We help startups make smarter decisions and grow
          with clarity.
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-[#606560] sm:text-lg">
          We are a trusted business consulting firm dedicated to
          helping organizations unlock their full potential.
        </p>

        {/* Button */}
        <a
          href="#services"
          className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#151713] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-stone-700"
        >
          Learn More
          <ArrowDownRight size={16} />
        </a>

        {/* Image cards */}
        <div className="mt-16 grid grid-cols-1 gap-4 text-left md:grid-cols-2">
          {/* Mission card */}
          <div className="group relative min-h-[350px] overflow-hidden rounded-2xl bg-[#243d1c] sm:min-h-[450px]">
            <img
              src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1400&q=85"
              alt="Green landscape"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            <div className="absolute left-6 top-6 grid h-14 w-14 place-items-center rounded-full bg-white/20 text-white backdrop-blur">
              <Target size={25} />
            </div>

            <div className="absolute bottom-0 p-8 text-white">
              <p className="text-xs uppercase tracking-widest text-white/80">
                Our Mission
              </p>
              <h3 className="mt-3 font-serif text-3xl sm:text-4xl">
                Make complexity feel simple.
              </h3>
            </div>
          </div>

          {/* Team card */}
          <div className="group relative min-h-[350px] overflow-hidden rounded-2xl bg-stone-300 sm:min-h-[450px]">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85"
              alt="Team collaborating"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            <div className="absolute bottom-0 p-8 text-white">
              <p className="text-xs uppercase tracking-widest text-white/80">
                Our People
              </p>
              <h3 className="mt-3 font-serif text-3xl sm:text-4xl">
                Better thinking, together.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-[#f7f5f0] px-5 pb-12 pt-12 md:px-10 md:pb-20 md:pt-16"
    >
      <div className="mx-auto grid max-w-[1600px] items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">

        {/* Left content */}
        <div>
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white px-4 py-3 text-sm font-medium">
            <span className="h-2 w-2 rounded-full bg-[#151d1a]" />
            WE ARE NEXOR
          </div>

          <h1 className="mb-6 max-w-[800px] font-serif text-5xl leading-[1.02] tracking-[-0.045em] sm:text-6xl md:text-7xl xl:text-[88px]">
            Your trusted —
            <br />
            partner in growing
            <br />
            business success
          </h1>

          <p className="mb-8 max-w-[670px] text-lg leading-8 text-[#626762] md:text-xl">
            Nexor is a consultancy built for teams that need direction,
            structure, and execution—not vague advice or long decks.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-3 rounded-2xl bg-[#141c19] px-6 py-5 text-lg font-medium text-white transition hover:-translate-y-1 hover:bg-[#35443d]"
          >
            Book Free Meeting
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Right image */}
        <div className="relative min-h-[380px] overflow-hidden rounded-[22px] sm:min-h-[480px] lg:min-h-[570px] xl:min-h-[620px]">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=85"
            alt="Professional business consultant"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </div>

      </div>
    </section>
  );
}
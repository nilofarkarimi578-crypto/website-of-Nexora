
export default function ConsultationCTA() {
  return (
    <section className="relative flex min-h-[650px] w-full items-center justify-center overflow-hidden bg-[#242321] px-5 py-20 sm:min-h-[720px] lg:h-[760px] lg:min-h-0 lg:py-0">

      {/* Original Nexor background image */}
      <img
        src="https://framerusercontent.com/images/oPPOlWPUW3vFFpZKbXzyWmIr9C0.png?height=2360&width=6400"
        alt="Team working together in an office"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[900px] flex-col items-center text-center text-white">

        <p className="mb-8 text-[13px] font-normal tracking-[0.02em] sm:text-[15px]">
          NEXOR® IS A BEST AGENCY BASED IN UK
        </p>

        <h2 className="font-serif text-[42px] font-normal leading-[1.12] tracking-[-0.045em] sm:text-[54px] md:text-[64px] lg:text-[68px]">
          Ready to take a
          <br />
          consultancy with us!
        </h2>

        <a
          href="#book-meeting"
          className="mt-9 inline-flex min-h-[68px] items-center justify-center gap-4 rounded-[17px] bg-[#efff70] px-7 text-[16px] font-medium text-[#151515] transition-colors duration-300 hover:bg-[#e1f15b]"
        >
          <span>Book Free Meeting</span>
          <span className="text-[24px] leading-none" aria-hidden="true">
            →
          </span>
        </a>

      </div>
    </section>
  );
}


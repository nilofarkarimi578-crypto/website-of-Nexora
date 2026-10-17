
import { Lightbulb, Zap } from "lucide-react";

export default function ImpactSection() {
  return (
    <section
      id="impact"
      className="overflow-hidden bg-[#101b17] px-5 py-8 text-white sm:px-8 lg:px-0 lg:py-0"
    >
      <div className="mx-auto grid max-w-[1838px] grid-cols-1 gap-10 lg:min-h-[810px] lg:grid-cols-[48%_52%] lg:gap-0">

        {/* Left: Image */}
        <div className="relative min-h-[560px] overflow-hidden sm:min-h-[650px] lg:ml-[45px] lg:min-h-[810px]">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=90"
            alt="Business team working together"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute bottom-0 left-5 min-h-[210px] w-[260px] rounded-t-2xl bg-white p-6 text-[#101b17] sm:left-[18px] sm:min-h-[240px] sm:w-[330px] sm:p-7">
            <h3 className="font-serif text-5xl leading-none sm:text-6xl">
              300+
            </h3>

            <p className="mt-5 max-w-[210px] text-sm leading-6 text-gray-600">
              Projects successfully delivered
            </p>
          </div>
        </div>

        {/* Right: Content */}
        <div className="flex min-w-0 flex-col px-0 sm:px-2 lg:pb-0 lg:pl-[8.5%] lg:pr-[5%]">
          <div>
            <h2 className="max-w-[850px] font-serif text-4xl leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-[clamp(44px,4vw,72px)]">
              Expert consulting tailored to your business success
            </h2>

            <p className="mt-6 max-w-[760px] text-base leading-7 text-white/85 sm:text-lg sm:leading-[1.55]">
              We bring clarity to complexity—offering hands-on strategic
              guidance, actionable frameworks, and measurable results that drive
              real business growth.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex rounded-[20px] bg-[#edff76] px-7 py-5 text-base font-medium text-[#101b17] transition-colors hover:bg-white sm:text-lg"
            >
              Book Free Meeting
            </a>
          </div>

          {/* Feature Cards */}
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-auto lg:translate-y-[1px] lg:pt-16">

            <article className="min-h-[250px] rounded-2xl bg-[#263732] p-6 sm:min-h-[270px] sm:p-7">
              <div className="flex h-[76px] w-[76px] items-center justify-center rounded-[20px] bg-[#e4d7ff] text-[#101b17]">
                <Lightbulb size={34} strokeWidth={1.6} />
              </div>

              <h3 className="mt-16 text-xl font-semibold sm:mt-20">
                Creative Synergy
              </h3>

              <p className="mt-3 leading-7 text-white/65">
                Combining fresh ideas and expert insights to create smarter
                business solutions.
              </p>
            </article>

            <article className="min-h-[250px] rounded-2xl bg-[#263732] p-6 sm:min-h-[270px] sm:p-7">
              <div className="flex h-[76px] w-[76px] items-center justify-center rounded-[20px] bg-[#a9f5d5] text-[#101b17]">
                <Zap size={34} strokeWidth={1.6} />
              </div>

              <h3 className="mt-16 text-xl font-semibold sm:mt-20">
                Resilient Systems
              </h3>

              <p className="mt-3 leading-7 text-white/65">
                Building flexible strategies that adapt to change and support
                long-term growth.
              </p>
            </article>

          </div>
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    title: "Strategic Clarity",
    description: "Turning complex challenges into actionable roadmaps",
    icon: "✧",
    color: "bg-[#f1eee5]",
  },
  {
    title: "Adaptive Growth",
    description: "Embracing change as a catalyst for progress, unlocking",
    icon: "↗",
    color: "bg-[#e4ddff]",
  },
  {
    title: "Unified Purpose",
    description: "Bringing diverse perspectives together to build solutions",
    icon: "✿",
    color: "bg-[#f1eee5]",
  },
];

const services = [
  {
    number: "01",
    category: "STRATEGY",
    title: "Strategic Planning",
    description:
      "Personalized strategies to grow, protect, and transfer your wealth across generations.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85",
    alt: "Business professionals discussing strategy",
  },
  {
    number: "02",
    category: "SOLUTIONS",
    title: "Technology Solutions",
    description:
      "We assess, streamline, and guide your technology choices—ensuring your systems scale as fast as your ambition.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=85",
    alt: "Laptop displaying a technology development workspace",
  },
  {
    number: "03",
    category: "DEVELOPMENT",
    title: "Business Development",
    description:
      "Build new opportunities, strengthen your strategy, and turn your ideas into sustainable business growth.",
    image:
      "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=1400&q=85",
    alt: "Green golf course with a flag",
  },
  {
    number: "04",
    category: "TESTING",
    title: "Analysis and Testing",
    description:
      "Evaluate your processes, identify opportunities for improvement, and make confident decisions with data.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=85",
    alt: "Team collaborating and reviewing a project",
  },
];

function FeatureCard({ feature }) {
  return (
    <div className="flex items-start gap-6">
      <div
        className={`flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-2xl ${feature.color}`}
      >
        <span className="text-3xl text-[#151d1a]">{feature.icon}</span>
      </div>

      <div>
        <h3 className="text-xl font-medium text-[#151d1a] md:text-[23px]">
          {feature.title}
        </h3>

        <p className="mt-3 max-w-[340px] text-lg leading-[1.6] text-[#606560] md:text-[21px]">
          {feature.description}
        </p>
      </div>
    </div>
  );
}

function ServicesHeading() {
  return (
    <div
      id="services"
      className="border-t border-[#dedbd4] pt-36 md:pt-[172px]"
    >
      <span className="inline-flex items-center gap-3 rounded-full border border-[#e6e5e0] bg-white px-4 py-[10px] text-base font-medium text-[#151d1a]">
        <span className="h-[7px] w-[7px] rounded-full bg-[#151d1a]" />
        SERVICES
      </span>

      <h2 className="mt-5 max-w-[1050px] font-serif text-[42px] leading-[1.16] tracking-[-1.8px] text-[#151d1a] sm:text-[50px] md:text-[58px] lg:text-[64px]">
        Expert consultation to help your
        <br className="hidden lg:block" /> business grow and achieve goals.
      </h2>
    </div>
  );
}

function ServiceCard({ service }) {
  return (
    <article className="group rounded-[22px] bg-white p-3 sm:p-4">
      {/* Image and category badge */}
      <div className="relative aspect-[1.38/1] overflow-hidden rounded-[17px] bg-[#e9e7df]">
        <img
          src={service.image}
          alt={service.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        <span className="absolute left-5 top-5 inline-flex items-center rounded-full bg-[#efff72] px-5 py-3 text-base font-medium text-[#151d1a] sm:left-6 sm:top-6 sm:text-lg">
          {service.number} / {service.category}
        </span>
      </div>

      {/* Card details */}
      <div className="flex flex-col gap-5 px-2 pb-2 pt-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-2 sm:pb-2 sm:pt-6">
        <div className="min-w-0 flex-1">
          <h3 className="mb-2 text-xl font-medium text-[#151d1a]">
            {service.title}
          </h3>

          <p className="max-w-[510px] text-base leading-8 text-[#606560] sm:text-lg">
            {service.description}
          </p>
        </div>

        <a
          href="#contact"
          className="inline-flex shrink-0 items-center justify-center self-start rounded-[18px] bg-[#f2efe6] px-6 py-5 text-lg font-medium text-[#151d1a] transition-colors duration-300 hover:bg-[#e7e3d8] sm:self-center"
        >
          View Details
          <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </article>
  );
}

function ServicesCards() {
  return (
    <div className="mt-10 grid grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-7">
      {services.map((service) => (
        <ServiceCard key={service.number} service={service} />
      ))}
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section className="overflow-hidden bg-[#f7f5f0] px-5 pb-24 md:px-10">
      <div className="mx-auto max-w-[1800px]">
        {/* Feature row */}
        <div className="grid grid-cols-1 gap-10 py-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>

        {/* Heading */}
        <ServicesHeading />

        {/* Four service cards */}
        <ServicesCards />
      </div>
    </section>
  );
}
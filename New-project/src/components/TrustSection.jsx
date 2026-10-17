
const clients = [
  {
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    name: "Client one",
  },
  {
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80",
    name: "Client two",
  },
  {
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80",
    name: "Client three",
  },
];

const companies = [
  { name: "wrk", style: "font-black text-3xl" },
  { name: "◈ Ramp", style: "font-bold text-3xl" },
  { name: "E✕TRADE", style: "font-black text-3xl" },
  { name: "nuvei", style: "font-black text-4xl" },
  { name: "current", style: "font-black text-3xl" },
  { name: "BOLTZ", style: "font-black text-3xl" },
];

function ClientTrust() {
  return (
    <div className="flex flex-col items-start justify-center">
      <div className="mb-4 flex items-center">
        {clients.map((client, index) => (
          <img
            key={client.name}
            src={client.image}
            alt={client.name}
            className={`h-[60px] w-[60px] rounded-full border-2 border-white object-cover ${
              index > 0 ? "-ml-3" : ""
            }`}
          />
        ))}
      </div>

      <p className="text-lg font-medium text-[#202724] md:text-[21px]">
        Trusted by 500+ clients (4.9/5)
      </p>
    </div>
  );
}

function TestimonialCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-[#064b13] p-5 sm:p-8">
      {/* Green abstract background */}
      <div
        className="absolute inset-0 bg-[repeating-linear-gradient(15deg,transparent_0px,transparent_30px,rgba(166,255,0,0.8)_34px,rgba(166,255,0,0.8)_43px,transparent_48px,transparent_68px)]"
      />

      <div className="absolute inset-0 bg-gradient-to-br from-green-600/40 via-transparent to-black/70" />

      {/* Testimonial panel */}
      <div className="relative grid min-h-[214px] grid-cols-1 gap-6 rounded-2xl bg-[#f5f5ed] p-6 sm:grid-cols-2 sm:gap-8 sm:p-8">
        <div className="flex flex-col justify-between">
          <span className="text-[36px] font-black leading-none">
            ”
          </span>

          <div>
            <h3 className="text-xl font-medium tracking-tight text-[#202724]">
              Emma Clark
            </h3>

            <p className="mt-2 text-base text-[#646964] sm:text-lg">
              Head of Operations, Klea
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-5">
          <div
            className="flex gap-1 text-lg text-[#151d1a]"
            aria-label="5 out of 5 stars"
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star}>★</span>
            ))}
          </div>

          <blockquote className="text-lg leading-[1.5] tracking-tight text-[#202724] sm:text-xl">
            “Nexor replaced three tools and finally gave our teams a shared
            understanding of what’s happening.”
          </blockquote>
        </div>
      </div>
    </div>
  );
}

function CompanyLogos() {
  return (
    <div className="mt-24 pb-6 pt-2 md:mt-40">
      <h2 className="mb-16 text-center text-lg font-medium text-[#202724] md:text-[21px]">
        Trusted by 500+ Business Industries
      </h2>

      {/* Hide overflow so logos move inside the viewport */}
      <div className="overflow-hidden">
        {/* Two identical groups create a continuous loop */}
        <div className="flex w-max animate-[scroll_22s_linear_infinite] hover:[animation-play-state:paused] motion-reduce:animate-none">
          {[0, 1].map((group) => (
            <div
              key={group}
              className="flex shrink-0 items-center gap-12 pr-12 md:gap-20 md:pr-20"
              aria-hidden={group === 1}
            >
              {companies.map((company) => (
                <div
                  key={company.name}
                  className={`${company.style} shrink-0 whitespace-nowrap tracking-tight text-[#151d1a]`}
                >
                  {company.name}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function TrustSection() {
  return (
    <section className="overflow-hidden bg-[#f7f5f0] px-5 pb-16 pt-10 md:px-10 md:pb-24 md:pt-14">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.04fr_1fr] lg:gap-14">
          <ClientTrust />
          <TestimonialCard />
        </div>

        <CompanyLogos />
      </div>
    </section>
  );
}

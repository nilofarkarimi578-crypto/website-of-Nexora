
const companyLinks = [
  ["Home", "#home"],
  ["About Us", "#about"],
  ["Contact", "#contact"],
  ["Our Service", "#services"],
];

const pageLinks = [
  ["Blog", "#blog"],
  ["Blog Details", "#blog-details"],
  ["Case Study", "#case-study"],
  ["Case Study Details", "#case-study-details"],
];

const resourceLinks = [
  ["Terms & Condition", "#terms"],
  ["Privacy Policy", "#privacy"],
  ["404", "#404"],
];

function FooterLinks({ title, links }) {
  return (
    <div>
      <h3 className="mb-8 text-[16px] font-normal uppercase text-[#858783]">
        {title}
      </h3>

      <ul className="space-y-[21px]">
        {links.map(([label, href]) => (
          <li key={label}>
            <a
              href={href}
              className="text-[16px] leading-6 text-[#171b19] transition-opacity hover:opacity-55 sm:text-[18px]"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function NexorLogo() {
  return (
    <div className="flex items-center gap-[9px]">
      <svg
        viewBox="0 0 40 40"
        className="h-[36px] w-[36px] shrink-0"
        fill="currentColor"
        aria-hidden="true"
      >
        <circle cx="20" cy="20" r="19" />

        <path
          d="M20 1 L20 13 L12 20 L1 20"
          fill="#f7f5f0"
        />

        <path
          d="M20 39 L20 27 L28 20 L39 20"
          fill="#f7f5f0"
        />

        <path
          d="M1 20 A19 19 0 0 1 20 1 L12 12 Z"
          fill="currentColor"
        />

        <path
          d="M39 20 A19 19 0 0 1 20 39 L28 28 Z"
          fill="currentColor"
        />

        <path
          d="M20 1 L20 13 L12 20 L1 20"
          fill="#f7f5f0"
        />

        <path
          d="M20 39 L20 27 L28 20 L39 20"
          fill="#f7f5f0"
        />
      </svg>

      <span className="text-[37px] font-medium leading-none tracking-[-2px]">
        Nexor
      </span>
    </div>
  );
}

export default function Footer() {
  return (
    <footer
      className="w-full bg-[#f7f5f0] px-5 pb-8 pt-7 text-[#171b19] sm:px-8 lg:px-[44px]"
    >
      {/* Main footer columns */}
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[2.5fr_0.85fr_1.05fr_0.65fr] lg:gap-8">

        {/* Brand and contact */}
        <div className="flex flex-col">
          <a href="#home" aria-label="Nexor home" className="w-fit">
            <NexorLogo />
          </a>

          <p className="mt-[30px] text-[17px] leading-7 sm:text-[19px]">
            Modern Consultancy starts here.
          </p>

          <div className="mt-[112px] space-y-[18px]">
            <a
              href="tel:+48123421124"
              className="flex w-fit items-center gap-[11px] text-[17px] sm:text-[19px]"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-[20px] w-[20px] shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.08 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.57 2.8.69A2 2 0 0 1 22 16.92Z" />
              </svg>
              <span>+48 123 421 124</span>
            </a>

            <a
              href="mailto:info@Nexor.com"
              className="flex w-fit items-center gap-[11px] text-[17px] sm:text-[19px]"
            >
              <span className="text-[22px] leading-none" aria-hidden="true">
                @
              </span>
              <span>info@Nexor.com</span>
            </a>
          </div>
        </div>

        {/* Company links */}
        <FooterLinks title="Company" links={companyLinks} />

        {/* Page links */}
        <FooterLinks title="Pages" links={pageLinks} />

        {/* Resource links */}
        <FooterLinks title="Resources" links={resourceLinks} />
      </div>

      {/* Copyright */}
      <div className="mt-[150px] border-b border-[#dedbd5] pb-[29px] lg:mt-[210px]">
        <p className="text-[16px] sm:text-[18px]">
          Copyright © 2026 Nexor. All rights reserved.
        </p>
      </div>

      {/* Company description */}
      <div className="space-y-[24px] pt-[29px] text-[15px] leading-[1.65] text-[#454a47] sm:text-[17px]">
        <p>
          Nexor Business Consultation is a trusted consulting firm dedicated
          to helping businesses overcome challenges, improve performance, and
          achieve sustainable growth. We work with small and medium-sized
          businesses, and established enterprises to develop practical
          strategies that drive measurable results.
        </p>

        <p>
          Our team combines industry expertise, market insights, and
          data-driven decision-making to provide customized solutions that
          align with each client&apos;s unique goals. Whether you&apos;re
          launching a new business, expanding into new markets, improving
          operations, or planning long-term growth, Nexor provides the
          guidance and support you need to move forward with confidence.
        </p>

        <p>
          Nexor We implement appropriate security measures to protect your
          data from unauthorized access, disclosure, or misuse. By using our
          website and services, you agree to the collection and use of
          information in accordance with our Privacy Policy.
        </p>
      </div>
    </footer>
  );
}

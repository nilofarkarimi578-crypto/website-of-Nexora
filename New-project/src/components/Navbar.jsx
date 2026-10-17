
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-20 bg-[#f7f5f0] px-5 py-6 md:px-10">
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <svg
            viewBox="0 0 40 40"
            className="h-9 w-9"
            fill="currentColor"
            aria-hidden="true"
          >
            <circle cx="20" cy="20" r="18" />
            <path d="M20 2 L20 14 L14 20 L2 20 A18 18 0 0 1 20 2Z"
              fill="#f7f5f0" />
            <path d="M38 20 L26 20 L20 26 L20 38 A18 18 0 0 0 38 20Z"
              fill="#f7f5f0" />
            <path d="M20 2 L20 14 L26 20 L38 20 A18 18 0 0 0 20 2Z"
              fill="#f7f5f0" />
            <path d="M2 20 L14 20 L20 26 L20 38 A18 18 0 0 1 2 20Z"
              fill="#f7f5f0" />
          </svg>

          <span className="text-3xl font-medium tracking-tight">
            Nexor
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-9 rounded-xl bg-white px-9 py-5 text-lg md:flex">
          <a href="#about" className="transition hover:text-gray-500">
            About
          </a>

          <div className="group relative">
            <button className="flex items-center gap-2">
              Pages
              <span className="text-sm">⌄</span>
            </button>

            <div className="invisible absolute left-0 top-full mt-3 w-44 rounded-xl bg-white p-3 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
              <a href="#services" className="block rounded-lg p-3 hover:bg-gray-100">
                Services
              </a>
              <a href="#projects" className="block rounded-lg p-3 hover:bg-gray-100">
                Projects
              </a>
              <a href="#testimonials" className="block rounded-lg p-3 hover:bg-gray-100">
                Testimonials
              </a>
            </div>
          </div>

          <a href="#services" className="transition hover:text-gray-500">
            Service
          </a>
          <a href="#contact" className="transition hover:text-gray-500">
            Contact
          </a>
          <a href="#blog" className="transition hover:text-gray-500">
            Blog
          </a>
        </div>

        {/* Contact button */}
        <a
          href="#contact"
          className="hidden rounded-2xl bg-[#141c19] px-7 py-5 text-lg text-white transition hover:bg-[#35443d] lg:block"
        >
          Contact Us
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          className="rounded-lg bg-[#141c19] px-4 py-3 text-white md:hidden"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="absolute left-5 right-5 top-full mt-2 flex flex-col gap-1 rounded-2xl bg-white p-4 shadow-xl md:hidden">
          {[
            ["About", "#about"],
            ["Services", "#services"],
            ["Projects", "#projects"],
            ["Testimonials", "#testimonials"],
            ["Blog", "#blog"],
            ["Contact Us", "#contact"],
          ].map(([label, link]) => (
            <a
              key={label}
              href={link}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-3 hover:bg-gray-100"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
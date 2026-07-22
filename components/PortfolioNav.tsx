"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#product-docs", label: "Product Docs" },
  { href: "#developer-docs", label: "Dev Docs" },
  { href: "#videos", label: "Videos" },
  { href: "#microcopy-tool", label: "AI Content Review" },
  { href: "#copywise", label: "CopyWise" },
  { href: "#ragbot", label: "RAG Bot" },
];

export default function PortfolioNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className={`font-semibold text-sm tracking-tight transition-colors ${
            scrolled ? "text-gray-900" : "text-white"
          }`}
        >
          Shwetha Emerson
        </a>

        <div className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-xs font-medium tracking-wide transition-colors ${
                scrolled
                  ? "text-gray-500 hover:text-gray-900"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

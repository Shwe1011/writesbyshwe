"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Screenshots", href: "#screenshots" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <Image
            src="/logo.png"
            alt="CopyWise logo"
            width={32}
            height={34}
            className="rounded-lg group-hover:opacity-90 transition-opacity"
          />
          <span className="font-bold text-slate-900 text-[15px] tracking-tight">
            Copy<span className="text-[#4A90E2]">Wise</span>
          </span>
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="hover:text-slate-900 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#"
          className="bg-[#4A90E2] hover:bg-[#357ABD] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all hover:shadow-md hover:shadow-blue-200/50"
        >
          Install plugin →
        </a>
      </nav>
    </header>
  );
}

const footerLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-[#4A90E2] rounded-md flex items-center justify-center">
            <span className="text-white text-[8px] font-extrabold">CW</span>
          </div>
          <span className="font-bold text-white text-[15px] tracking-tight">
            Copy<span className="text-[#4A90E2]">Wise</span>
          </span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-5">
          {footerLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-slate-600 text-sm">
          © {new Date().getFullYear()} CopyWise
        </p>
      </div>
    </footer>
  );
}

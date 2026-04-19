import HeroScreenshots from "./HeroScreenshots";

const trustItems = [
  "Free 50 suggestions",
  "No credit card needed",
  "Semantic copy search",
];

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-green-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/20 pt-16">

      {/* Dot grid overlay */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      {/* Ambient blobs */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-blue-100/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-24 w-[400px] h-[400px] rounded-full bg-violet-100/40 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-24 w-full flex flex-col lg:flex-row items-center gap-16 lg:gap-8">

        {/* ── Left: Copy ── */}
        <div className="flex-1 text-center lg:text-left max-w-xl">

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#4A90E2] text-[11px] font-bold px-3 py-1.5 rounded-full mb-6 animate-fade-in-up uppercase tracking-widest"
            style={{ animationDelay: "0ms" }}
          >
            <span className="animate-pulse-dot w-1.5 h-1.5 bg-[#4A90E2] rounded-full" />
            Figma Plugin — Free to try
          </div>

          {/* Headline */}
          <h1
            className="text-5xl lg:text-[3.6rem] font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6 animate-fade-in-up"
            style={{ animationDelay: "80ms" }}
          >
            Your complete{" "}
            <span className="gradient-text">microcopy assistant</span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-xl text-slate-500 leading-relaxed mb-10 animate-fade-in-up"
            style={{ animationDelay: "160ms" }}
          >
            Get text suggestions that follow your rules and discover similar
            copies in your product — right inside Figma.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start animate-fade-in-up"
            style={{ animationDelay: "240ms" }}
          >
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-[#4A90E2] hover:bg-[#357ABD] text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-blue-200/60 hover:-translate-y-0.5 text-[15px]"
            >
              Install free plugin
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold px-7 py-3.5 rounded-xl border border-slate-200 transition-colors text-[15px]"
            >
              See how it works
            </a>
          </div>

          {/* Trust items */}
          <div
            className="flex flex-wrap items-center gap-5 mt-8 justify-center lg:justify-start animate-fade-in"
            style={{ animationDelay: "420ms" }}
          >
            {trustItems.map((item) => (
              <span key={item} className="flex items-center gap-1.5 text-sm text-slate-500">
                <CheckIcon />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ── Right: Plugin mockup ── */}
        <div
          className="flex-1 flex justify-center lg:justify-end items-center animate-fade-in-up"
          style={{ animationDelay: "320ms" }}
        >
          <HeroScreenshots />
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" className="w-full text-white fill-current">
          <path d="M0,60 C360,0 1080,0 1440,60 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
}

import Image from "next/image";

export default function PortfolioHero() {
  return (
    <section className="relative min-h-screen bg-[#0B0F1A] flex items-center overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-[0.06]" />
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-indigo-600/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

      <div className="relative max-w-6xl mx-auto px-6 py-32 grid lg:grid-cols-5 gap-12 lg:gap-20 items-center w-full">
        <div className="lg:col-span-3">
          <p className="inline-flex items-center gap-2 text-indigo-400 text-xs font-semibold tracking-[0.18em] uppercase mb-8 border border-indigo-400/25 rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse-dot inline-block" />
            Staff Technical Writer
          </p>

          <h1 className="text-5xl lg:text-[4.25rem] font-bold text-white leading-[1.06] mb-7 tracking-tight">
            Shwetha<br />
            Emerson<br />
            <span className="gradient-text">Kamalesan</span>
          </h1>

          <p className="text-gray-400 text-lg lg:text-xl leading-relaxed mb-4 max-w-xl">
            12+ years in technology, product and writing.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-10 max-w-xl">
           I build product documentations, developer guides, and AI-powered writing systems — while mentoring the next generation of technical writers.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#product-docs"
              className="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-colors"
            >
              View Work ↓
            </a>
            <a
              href="https://www.linkedin.com/in/shwetha-emerson-2b2930246/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-white/20 hover:border-white/40 text-white/80 hover:text-white text-sm font-medium transition-colors"
            >
              LinkedIn ↗
            </a>
            <a
              href="mailto:narasimhanshwetha@gmail.com"
              className="px-6 py-3 rounded-full border border-white/20 hover:border-white/40 text-white/80 hover:text-white text-sm font-medium transition-colors"
            >
              narasimhanshwetha@gmail.com
            </a>
          </div>
        </div>

        <div className="lg:col-span-2 flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-64 h-64 lg:w-[340px] lg:h-[340px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/profile.jpeg"
                alt="Shwetha Emerson Kamalesan"
                width={340}
                height={340}
                className="w-full h-full object-cover object-top"
                priority
              />
            </div>
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-violet-500/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 text-[10px] tracking-[0.25em] uppercase">
        Scroll to explore ↓
      </div>
    </section>
  );
}

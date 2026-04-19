import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const screens = [
  {
    src: "/copywise-features.png",
    displayW: 560,
    displayH: 374,
    label: "01 — Two powerful ways",
    title: "UI text that's consistent everywhere",
    description:
      "CopyWise helps you find the perfect UI copy in two powerful ways: generate style guide–adhering suggestions with AI, and surface semantically similar copy from your existing product so you can stay consistent.",
    accentBg: "bg-violet-500/20",
    accentText: "text-violet-300",
  },
  {
    src: "/copywise-semantic-2.png",
    displayW: 560,
    displayH: 374,
    label: "02 — Semantic search",
    title: "Find consistent copy — by meaning, not keywords",
    description:
      "Type any string and CopyWise searches your product copy library by intent. \u201cContact support\u201d, \u201cGet help\u201d, and \u201cReach out to us\u201d all surface together \u2014 so you never accidentally express the same idea two different ways.",
    accentBg: "bg-indigo-500/20",
    accentText: "text-indigo-300",
  },
];

export default function Screenshots() {
  return (
    <section id="screenshots" className="py-24 px-6 bg-slate-900 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        <AnimatedSection className="text-center mb-20">
          <p className="text-[#4A90E2] text-[11px] font-bold uppercase tracking-widest mb-3">
            See it in action
          </p>
          <h2 className="text-4xl font-extrabold text-white tracking-tight">
            Built for product consistency at scale
          </h2>
          <p className="text-slate-400 text-lg mt-4 max-w-xl mx-auto">
            From a handful of screens to thousands of strings — CopyWise keeps your copy coherent.
          </p>
        </AnimatedSection>

        <div className="space-y-28">
          {screens.map((screen, i) => {
            const isEven = i % 2 === 0;
            const stepNum = screen.label.split("—")[0].trim();

            return (
              <AnimatedSection key={screen.label} delay={80}>
                <div
                  className={`flex flex-col ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } items-center gap-12 lg:gap-20`}
                >
                  {/* Screenshot */}
                  <div className="flex-shrink-0 flex justify-center">
                    <div className="relative group">
                      <div className="absolute -inset-6 bg-[#4A90E2]/8 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      <div
                        className={`absolute -top-3 ${isEven ? "-left-3" : "-right-3"} z-10 ${screen.accentBg} ${screen.accentText} text-[10px] font-extrabold px-3 py-1.5 rounded-full border border-white/10 shadow-lg backdrop-blur-sm`}
                      >
                        {stepNum}
                      </div>
                      <Image
                        src={screen.src}
                        alt={screen.title}
                        width={screen.displayW}
                        height={screen.displayH}
                        className="rounded-2xl shadow-2xl ring-1 ring-white/10 transition-transform duration-500 group-hover:-translate-y-1.5"
                      />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex-1 max-w-lg">
                    <p className={`text-[11px] font-bold uppercase tracking-widest mb-3 ${screen.accentText}`}>
                      {screen.label}
                    </p>
                    <h3 className="text-3xl font-extrabold text-white tracking-tight mb-5 leading-tight">
                      {screen.title}
                    </h3>
                    <p className="text-slate-400 text-lg leading-relaxed">
                      {screen.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

// displayH = round(220 * origH / origW) — full image, no cropping
const screens = [
  {
    src: "/screenshots/screenshot-1.png",
    displayW: 220,
    displayH: 314,       // 220 × 1106/774
    label: "01 — Sign in",
    title: "Secure account access",
    description:
      "Create a free account or sign in to your existing one. Email verification keeps your style guide and copy library private.",
    accentBg: "bg-blue-500/20",
    accentText: "text-blue-300",
  },
  {
    src: "/screenshots/screenshot-2.png",
    displayW: 220,
    displayH: 247,       // 220 × 720/642
    label: "02 — Style guide",
    title: "Set your writing rules once",
    description:
      "Choose the built-in 125-rule style guide or paste in your own brand guidelines. Every suggestion will follow them automatically — no extra prompting needed.",
    accentBg: "bg-violet-500/20",
    accentText: "text-violet-300",
  },
  {
    src: "/screenshots/screenshot-3.png",
    displayW: 220,
    displayH: 318,       // 220 × 1162/804
    label: "03 — Copy library",
    title: "Upload your existing copy",
    description:
      "Drop in a CSV of your product's UI copy or point to an API endpoint. CopyWise surfaces semantically matching copy before generating anything new.",
    accentBg: "bg-teal-500/20",
    accentText: "text-teal-300",
  },
  {
    src: "/screenshots/screenshot-4.png",
    displayW: 220,
    displayH: 425,       // 220 × 1334/690
    label: "04 — Suggestions",
    title: "AI-powered copy, right in Figma",
    description:
      "Select any text node, add optional context, and get style-guide-compliant new suggestions alongside similar copy from your library — all in one click.",
    accentBg: "bg-[#4A90E2]/20",
    accentText: "text-[#4A90E2]",
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
            From sign-in to suggestion in minutes
          </h2>
          <p className="text-slate-400 text-lg mt-4 max-w-xl mx-auto">
            A full walkthrough of the CopyWise experience inside Figma.
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
                  {/* Screenshot — full image, no cropping */}
                  <div className="flex-shrink-0 flex justify-center">
                    <div className="relative group">
                      {/* Hover glow */}
                      <div className="absolute -inset-6 bg-[#4A90E2]/8 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                      {/* Step number badge */}
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
                        sizes="220px"
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

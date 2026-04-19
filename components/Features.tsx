import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const supportingFeatures = [
  {
    color: "blue",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    title: "Style guide–adhering suggestions",
    description:
      "Paste your brand's writing rules or use the built-in 125-rule guide. Every AI suggestion automatically follows your tone, grammar, and vocabulary — no extra prompting needed.",
  },
  {
    color: "orange",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Instant, in-context",
    description:
      "Works directly inside Figma — no context switching. Select a text node, provide context, get suggestions, and apply with one click straight back to the canvas.",
  },
  {
    color: "violet",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
    ),
    title: "Easy setup",
    description:
      "Upload your existing product copy as an XLSX or sync via API. CopyWise is ready in minutes — no engineering work required.",
  },
];

const iconBg: Record<string, string> = {
  blue:   "bg-blue-50 text-[#4A90E2]",
  violet: "bg-violet-50 text-violet-500",
  teal:   "bg-teal-50 text-teal-500",
  orange: "bg-orange-50 text-orange-500",
};

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        <AnimatedSection className="text-center mb-16">
          <p className="text-[#4A90E2] text-[11px] font-bold uppercase tracking-widest mb-3">
            Features
          </p>
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            Everything you need for consistent copy
          </h2>
          <p className="text-slate-500 text-lg mt-4 max-w-2xl mx-auto">
            CopyWise brings AI, your style guide, and your entire copy library
            together — right where you design.
          </p>
        </AnimatedSection>

        {/* ── Hero feature: Semantic Copy Search ── */}
        <AnimatedSection className="mb-8">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 p-8 lg:p-12">
            {/* Background glow */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: "radial-gradient(ellipse at 70% 50%, white 0%, transparent 60%)" }} />

            <div className="relative flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              {/* Text */}
              <div className="flex-1 max-w-xl">
                {/* Pro badge */}
                <span className="inline-flex items-center gap-1.5 bg-white/20 text-white text-[10px] font-extrabold px-3 py-1.5 rounded-full mb-5 uppercase tracking-widest border border-white/20">
                  <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Pro — Standout feature
                </span>

                <h3 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-5">
                  Semantic Copy Search<br />
                  <span className="text-purple-200">Beyond Ctrl+F</span>
                </h3>

                <p className="text-purple-100 text-lg leading-relaxed mb-6">
                  When your product has thousands of strings, it&apos;s easy to miss existing patterns and create inconsistent copy. CopyWise surfaces similar text by <strong className="text-white">meaning</strong>, not just keywords — so you reuse what already works.
                </p>

                <div className="bg-white/10 border border-white/20 rounded-2xl p-5 mb-6">
                  <p className="text-purple-200 text-[11px] font-bold uppercase tracking-widest mb-3">Example — all treated as the same intent:</p>
                  <ul className="space-y-2">
                    {["Contact support", "Get help", "Reach out to us"].map((s) => (
                      <li key={s} className="flex items-center gap-2 text-white text-[15px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-300 flex-shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-purple-200 text-[15px] leading-relaxed">
                  A normal search treats these as different strings. CopyWise understands they mean the same thing — and brings them to your notice so you can stay consistent across your entire product.
                </p>
              </div>

              {/* Image */}
              <div className="flex-shrink-0 flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-white/10 rounded-3xl blur-xl pointer-events-none" />
                  <Image
                    src="/copywise-semantic.png"
                    alt="Semantic Copy Search — find consistent copy by meaning"
                    width={420}
                    height={280}
                    className="relative rounded-2xl shadow-2xl ring-1 ring-white/20"
                  />
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* ── Supporting features grid ── */}
        <div className="grid sm:grid-cols-3 gap-6">
          {supportingFeatures.map((f, i) => (
            <AnimatedSection key={f.title} delay={i * 90}>
              <div className="group bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-lg rounded-2xl p-7 transition-all duration-300 h-full cursor-default">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 ${iconBg[f.color]}`}>
                  {f.icon}
                </div>
                <h3 className="text-[17px] font-bold text-slate-900 mb-2">{f.title}</h3>
                <p className="text-slate-500 leading-relaxed text-[15px]">{f.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

import AnimatedSection from "./AnimatedSection";

const features = [
  {
    color: "blue",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    title: "AI-powered suggestions",
    description:
      "GPT-4 generates multiple copy alternatives tailored to your UI context — buttons, labels, tooltips, empty states, and more.",
  },
  {
    color: "violet",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Style guide compliance",
    description:
      "Upload your brand's writing rules and every suggestion automatically follows your tone, grammar, and vocabulary conventions.",
  },
  {
    color: "teal",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
      </svg>
    ),
    title: "Reuse existing copy",
    description:
      "Upload your copy library as a CSV or sync via API. CopyWise surfaces semantically similar copy so nothing gets written twice.",
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
      "Works directly inside Figma — no context switching. Select a text node, get suggestions, and apply with one click.",
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
            Everything you need for better copy
          </h2>
          <p className="text-slate-500 text-lg mt-4 max-w-2xl mx-auto">
            CopyWise brings AI, your style guide, and your copy library
            together — right where you design.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((f, i) => (
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

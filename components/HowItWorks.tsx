import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Set up your style guide & copy library",
    description:
      "Paste your brand's style guide or choose the built-in default. Then upload your existing product copy as an XLSX, or sync via API — CopyWise will use it to surface semantically similar strings.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" />
      </svg>
    ),
    title: "Select a text node and add context",
    description:
      "Click any text element in your Figma design. Provide optional context about the UI element — CopyWise reads the selection instantly, no copy/paste or tab-switching required.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Pick the best copy and apply",
    description:
      "Browse AI-generated suggestions that follow your style guide alongside semantically similar strings from your own product. One click applies it straight back to the text node on your canvas.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">

        <AnimatedSection className="text-center mb-16">
          <p className="text-[#4A90E2] text-[11px] font-bold uppercase tracking-widest mb-3">
            How it works
          </p>
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            Up and running in minutes
          </h2>
          <p className="text-slate-500 text-lg mt-4 max-w-xl mx-auto">
            Three steps from install to your first AI-powered, consistency-checked copy suggestion.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-[52px] left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200 pointer-events-none" />

          {steps.map((step, i) => (
            <AnimatedSection key={step.title} delay={i * 140}>
              <div className="flex flex-col items-center text-center group">
                <div className="relative mb-6 z-10">
                  <div className="w-[68px] h-[68px] bg-white border-2 border-blue-100 group-hover:border-[#4A90E2] rounded-2xl flex items-center justify-center text-[#4A90E2] shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:shadow-blue-100">
                    {step.icon}
                  </div>
                  <span className="absolute -top-2.5 -right-2.5 w-6 h-6 bg-[#4A90E2] text-white text-[11px] font-extrabold rounded-full flex items-center justify-center shadow-sm">
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-[17px] font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed text-[15px]">{step.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

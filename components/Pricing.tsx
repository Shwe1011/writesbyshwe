import AnimatedSection from "./AnimatedSection";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for evaluating CopyWise before committing.",
    cta: "Get started free",
    ctaClass: "bg-white/10 hover:bg-white/20 text-white border border-white/20",
    highlight: false,
    badge: null,
    included: [
      "50 lifetime suggestions",
      "AI copy generation",
      "Default style guide (125 rules)",
      "New + Reuse tabs",
    ],
    excluded: [
      "Semantic Copy Search",
      "Custom style guide",
      "XLSX copy library upload",
      "API sync",
    ],
  },
  {
    name: "Pro",
    price: "$9",
    period: "/ month",
    description: "For designers and writers who ship copy every day.",
    cta: "Start Pro →",
    ctaClass: "bg-white text-[#4A90E2] hover:bg-blue-50 font-bold shadow-lg",
    highlight: true,
    badge: "Most popular",
    included: [
      "Unlimited suggestions",
      "Custom style guide upload",
      "Semantic Copy Search (beyond Ctrl+F)",
      "XLSX library upload (up to 5,000 rows)",
      "API sync + auto-refresh",
      "Up to 3 devices",
      "Priority support",
    ],
    excluded: [],
  },
];

function CheckIcon({ faded }: { faded?: boolean }) {
  return (
    <svg
      className={`w-4 h-4 flex-shrink-0 mt-0.5 ${faded ? "text-slate-600" : "text-white/80"}`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
    </svg>
  );
}

function DashIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-slate-600" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-slate-900">
      <div className="max-w-4xl mx-auto">

        <AnimatedSection className="text-center mb-16">
          <p className="text-[#4A90E2] text-[11px] font-bold uppercase tracking-widest mb-3">
            Pricing
          </p>
          <h2 className="text-4xl font-extrabold text-white tracking-tight">
            Simple, honest pricing
          </h2>
          <p className="text-slate-400 text-lg mt-4">
            Try free forever. Upgrade when you need more.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {plans.map((plan, i) => (
            <AnimatedSection key={plan.name} delay={i * 140} animation="scaleIn">
              <div
                className={`rounded-2xl p-8 h-full flex flex-col ${
                  plan.highlight
                    ? "bg-[#4A90E2] ring-1 ring-blue-400/40"
                    : "bg-white/5 border border-white/10"
                }`}
              >
                {plan.badge && (
                  <span className="inline-flex w-fit items-center bg-white/20 text-white text-[10px] font-bold px-2.5 py-1 rounded-full mb-4 uppercase tracking-widest">
                    {plan.badge}
                  </span>
                )}

                <div className="mb-7">
                  <h3 className="text-white font-bold text-xl mb-1">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-[2.6rem] font-extrabold text-white leading-none">
                      {plan.price}
                    </span>
                    <span className={`text-sm ${plan.highlight ? "text-blue-100" : "text-slate-400"}`}>
                      {plan.period}
                    </span>
                  </div>
                  <p className={`text-sm leading-relaxed ${plan.highlight ? "text-blue-100" : "text-slate-400"}`}>
                    {plan.description}
                  </p>
                </div>

                {/* Feature list */}
                <ul className="space-y-2.5 mb-8 flex-1">
                  {plan.included.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[14px]">
                      <CheckIcon />
                      <span className={plan.highlight ? "text-white" : "text-slate-200"}>{item}</span>
                    </li>
                  ))}
                  {plan.excluded.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[14px]">
                      <DashIcon />
                      <span className="text-slate-600 line-through">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className={`w-full py-3 rounded-xl text-[14px] font-semibold text-center transition-all ${plan.ctaClass}`}
                >
                  {plan.cta}
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Reassurance line */}
        <AnimatedSection className="text-center mt-8" delay={300}>
          <p className="text-slate-500 text-sm">
            Cancel anytime. Billed monthly. Prices in USD.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

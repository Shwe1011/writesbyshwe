const features = [
  {
    icon: "🔍",
    title: "Automated string extraction",
    desc: "Scrapes UI strings from staging builds and sends them to technical writers Google Space for centralized review.",
  },
  {
    icon: "📨",
    title: "AI review and correction",
    desc: "Evaluates extracted strings using a style guide trained AI model, identifies inconsistencies, and generates improved, standardized copy suggestions.",
  },
  {
    icon: "✅",
    title: "Pre-release copy QA",
    desc: "Creates structured review tasks with assigned owners, due dates, ensuring validated copy progresses to production.",
  },
];

export default function MicrocopyToolSection() {
  return (
    <section id="microcopy-tool" className="py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <p className="text-indigo-600 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            06 — Content Systems
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            AI Content Review<br />Operations
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-4">
            Post-release copy fixes are expensive — they require a code deployment to fix what should have been caught earlier. So I built a tool to catch them before the release.
          </p>
          <p className="text-gray-500 text-base leading-relaxed">
            This internal automation webscrapes the testing build for UI strings and routes them directly to the writing team&apos;s workspace for an AI review — where styleguide-aware LLM checks and creates a task for anomalies. This has saved 50% of manual review time and reduced 80% of content errors. 
          </p>
        </div>

        <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm mb-10">
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/IElRU2EGngo"
              title="Microcopy workflow"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {features.map((card) => (
            <div key={card.title} className="bg-white rounded-2xl p-6 border border-gray-100">
              <div className="text-2xl mb-3">{card.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{card.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

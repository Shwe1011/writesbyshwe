const features = [
  {
    icon: "🔍",
    title: "Automated string extraction",
    desc: "Scrapes all UI strings from staging builds automatically — no manual copying, no missed copy.",
  },
  {
    icon: "📨",
    title: "AI review, rewrite & routing",
    desc: "Extracted strings are AI-reviewed and rewritten for consistency, then routed to the technical writing team's Google Space for a final check before each release.",
  },
  {
    icon: "✅",
    title: "Pre-release copy QA",
    desc: "Catches microcopy issues before they reach production — reducing post-release copy fixes significantly.",
  },
];

export default function MicrocopyToolSection() {
  return (
    <section id="microcopy-tool" className="py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <p className="text-indigo-600 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            04 — Internal Tool
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Microcopy Review<br />Operations
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-4">
            Post-release copy fixes are expensive — they require a code deployment to fix what should have been caught earlier. So I built a tool to catch them before the release.
          </p>
          <p className="text-gray-500 text-base leading-relaxed">
            This internal automation webscrapes the testing build for UI strings and routes them directly to the writing team&apos;s workspace for review — making microcopy QA a standard part of the release cycle, not an afterthought.
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

const highlights = [
  {
    icon: "📋",
    title: "Help Documentation",
    desc: "Comprehensive end-user guides covering feature workflows, edge cases, and best practices for Kissflow's no-code work management platform — authored for both first-time users and power users.",
  },
  {
    icon: "✏️",
    title: "UX Copywriting",
    desc: "In-product microcopy — tooltips, error messages, empty states, onboarding prompts — crafted to reduce friction and guide users to the right action without a support ticket.",
  },
  {
    icon: "📢",
    title: "Release Notes & Changelogs",
    desc: "Clear, user-focused release communications that translate engineering changes into plain-language benefits — across 100+ major feature releases.",
  },
  {
    icon: "📐",
    title: "Style Guide Authorship",
    desc: "Developed Kissflow's internal writing style guide, standardizing tone, structure, and formatting across microcopy, product docs, and developer documentation.",
  },
];

export default function ProductDocsSection() {
  return (
    <section id="product-docs" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-indigo-600 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            01 — Product Documentation
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Product Documentation
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Documentation isn&apos;t a deliverable — it&apos;s a product experience. Every article, tooltip, and release note I write is designed around one question: what does the user need to know right now, and how do I say it in the fewest possible words?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-14">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="border border-gray-100 rounded-2xl p-7 hover:shadow-md hover:border-gray-200 transition-all"
            >
              <div className="text-2xl mb-4">{h.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{h.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://community.kissflow.com/profile/g9hpt31"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gray-900 hover:bg-gray-700 text-white text-sm font-semibold transition-colors"
          >
            Explore the Documentation ↗
          </a>
          <span className="text-gray-400 text-sm">Kissflow Community · Help Center</span>
        </div>
      </div>
    </section>
  );
}

const highlights = [
  {
    icon: "📋",
    title: "Help Documentation",
    desc: "Comprehensive end-user guides covering feature workflows, edge cases and important notes — authored for readability and easy consumption.",
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
    desc: "Authored the writing style guide for standardizing tone, structure, and formatting across microcopy, product docs, and developer documentation.",
  },
  {
    title: "Website & Marketing Content",
  icon: "🌐",
  desc: (
    <>
      Created and managed website and marketing content, including risk and fraud-focused narratives. Built the website content for {" "}
      <a
        href="https://tutelar.io/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-indigo-600 hover:underline"
      >
        Tutelar
      </a>{" "}
      — a platform for secure transactions and fraud awareness — translating complex financial systems into clear, user-focused experiences.
    </>
      ),
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
            Documentation isn&apos;t a deliverable — it&apos;s a product and customer experience. From developer docs and UX microcopy to marketing content and risk communication, every piece I write is designed to answer one question: what does the user need right now, and how do I say it with clarity and precision?
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
            Explore Help Documentations ↗
          </a>
            <a
           href="https://coda.io/d/Kissflow-Technical-Writing-Style-Guide_dtJb_1lbyFT/KISSFLOW-TECHNICAL-WRITING-STYLE-GUIDE_su4hghEp"
           target="_blank"
           rel="noopener noreferrer"
           className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-gray-300 hover:bg-gray-100 text-gray-800 text-sm font-semibold transition-colors"
          >
            View Style Guide ↗
          </a>

        </div>
      </div>
    </section>
  );
}

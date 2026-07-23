const groups = [
  {
    title: "SEO Optimization",
    items: [
      "Keyword Research",
      "Search Intent Mapping",
      "On-page SEO",
      "Internal Linking Strategy",
      "Metadata Optimization",
      "Schema Markup",
      "Topic Clusters",
      "Technical SEO Recommendations",
    ],
  },
  {
    title: "GEO (Generative Engine Optimization)",
    items: [
      "AI-first Content Strategy",
      "LLM-friendly Content Structuring",
      "Semantic Search Optimization",
      "Entity-based Content Modeling",
      "Answer-first Content Design",
      "Citation-friendly Content",
      "AI Retrieval Optimization",
      "RAG-ready Documentation",
      "Knowledge Base Optimization",
    ],
  },
  {
    title: "Content Optimization Techniques",
    items: [
      "Content Audits",
      "Content Gap Analysis",
      "Competitor Content Analysis",
      "Readability Optimization",
      "Information Architecture",
      "Content Refresh Strategy",
      "Content Repurposing",
      "Conversion Rate Optimization (CRO)",
      "Accessibility (WCAG)",
      "UX Writing Optimization",
    ],
  },
  {
    title: "SEO & GEO Tools",
    items: ["SEMrush", "Profound", "Otterly.ai", "Google Search Console", "Google Trends"],
  },
  {
    title: "Analytics & Performance",
    items: ["Google Analytics 4 (GA4)", "Mixpanel", "CleverTap"],
  },
];

export default function SEOGeoSection() {
  return (
    <section id="seo-geo-optimization" className="py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-indigo-600 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            02 — SEO, GEO & AI Content Optimization
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            SEO, GEO & AI Content Optimization
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((g) => (
            <div
              key={g.title}
              className="bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-md hover:border-gray-200 transition-all"
            >
              <h3 className="font-semibold text-gray-900 mb-4">{g.title}</h3>
              <ul className="space-y-2.5">
                {g.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

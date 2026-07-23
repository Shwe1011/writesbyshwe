const groups = [
  {
    title: "Brand Strategy & Product Marketing",
    items: [
      "Product Positioning",
      "Brand Messaging",
      "Product Narratives",
      "Taglines",
      "Value Proposition Development",
      "Go-to-Market (GTM) Messaging",
      "Launch Messaging",
    ],
  },
  {
    title: "Website & Content Marketing",
    items: [
      "Website Content",
      "Landing Pages",
      "Blogs",
      "Whitepapers",
      "Case Studies",
      "Newsletters",
      "Knowledge Base Content",
      "Resource Centers",
    ],
  },
  {
    title: "Executive & Corporate Content",
    items: [
      "Executive Ghostwriting",
      "LinkedIn Thought Leadership",
      "Thought Leadership Articles",
      "Speaker Scripts",
      "Press Releases",
      "Founder & Leadership Profiles",
      "Corporate Announcements",
    ],
  },
  {
    title: "Campaigns & Demand Generation",
    items: [
      "Email Campaigns",
      "Social Media Campaigns",
      "Product Launch Campaigns",
      "Release Campaigns",
      "Conference & Event Marketing",
      "Webinar Content",
      "Lead Nurture Campaigns",
    ],
  },
  {
    title: "Sales & Customer Enablement",
    items: [
      "Sales Enablement",
      "Customer Education",
      "Academy Content",
      "Product Videos",
      "Brochures",
      "Flyers",
      "Pitch Deck Content",
      "One-pagers",
      "Battle Cards",
      "Sales Playbooks",
      "FAQs",
    ],
  },
];

export default function ContentMarketingSection() {
  return (
    <section id="content-marketing" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-indigo-600 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            02 — Content-led Growth
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Content Strategy & Growth
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            12 years of building SEO and GEO optimized content systems that help enterprise SaaS products get discovered, understood and adopted.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((g) => (
            <div
              key={g.title}
              className="border border-gray-100 rounded-2xl p-7 hover:shadow-md hover:border-gray-200 transition-all"
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

        <div className="flex items-center gap-4 mt-14">
          <a
            href="https://tutelar.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gray-900 hover:bg-gray-700 text-white text-sm font-semibold transition-colors"
          >
            My Work For Tutelar ↗
          </a>
        </div>
      </div>
    </section>
  );
}

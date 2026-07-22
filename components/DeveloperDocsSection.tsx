const cards = [
  {
    title: "API Reference",
    desc: "Endpoint documentation with request/response schemas, authentication flows, and error handling — tested and validated using Postman and Swagger against live APIs.",
  },
  {
    title: "SDK Guides",
    desc: "Step-by-step integration guides with real code samples, prerequisites, and troubleshooting paths — written for developers, not documentation readers.",
  },
];

const tools = [
  "Google Developer Documentation Style Guide",
  "Postman-tested code samples",
  "Swagger / OpenAPI specifications",
  "Docs-as-code workflow via GitHub",
  "CLI & scripting documentation",
];

export default function DeveloperDocsSection() {
  return (
    <section id="developer-docs" className="py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-indigo-600 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              02 — Developer Documentation
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              API, SDK &<br />Developer Guides
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-5">
              Good developer docs aren&apos;t written from the outside in. They&apos;re built by someone who can read the code, run the API, and understand what a developer needs before they even ask.
            </p>
            <p className="text-gray-500 text-base leading-relaxed mb-10">
              With hands-on experience in Python, JavaScript, shell scripting, and CLI tooling, I write documentation that fits how developers actually work — clear, tested, and immediately useful.
            </p>

            <div className="space-y-2.5 mb-10">
              {tools.map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <a
              href="https://developers.kissflow.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-colors"
            >
              View Developer Docs ↗
            </a>
          </div>

          <div className="space-y-4 pt-2">
            {cards.map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}

            <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6">
              <p className="text-indigo-700 text-sm leading-relaxed font-medium">
                &ldquo;I work closely with engineers throughout the product development life cycle — understanding requirements, validating edge cases, and contributing beyond copy.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

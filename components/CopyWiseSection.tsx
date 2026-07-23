import Image from "next/image";

const cards = [
  {
    title: "AI-powered suggestions",
    desc: "Generates content adhering to writing guidelines, also surfaces similar contents already in use — either you keep consistency or evade redundancy, your choice.",
  },
  {
    title: "Published on Figma Community",
    desc: "Available to the global Figma community — bridging the gap between designers and content writers.",
  },
  {
    title: "Brand-aware content at the point of design",
    desc: "Helps teams create content for the organization's unique voice and tone — handy as a plugin.",
  },
];

export default function CopyWiseSection() {
  return (
    <section id="copywise" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-14">
          <div>
            <p className="text-indigo-600 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              07 — Figma Plugin
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              CopyWise
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-5">
              A Figma plugin that gives designers AI-powered copy suggestions following your style guide rules — and surfaces semantically similar strings from your existing product copy, right inside Figma.
            </p>
            <p className="text-gray-500 text-base leading-relaxed mb-6">
              Free to install, with no credit card needed — CopyWise brings your style guide, AI, and your entire copy library together at the point of design.
            </p>
            <a
              href="https://copywise.gapsolvers.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-colors"
            >
              Check it out ↗
            </a>
          </div>

          <div className="space-y-4">
            {cards.map((card) => (
              <div key={card.title} className="border border-gray-100 rounded-2xl p-5 hover:shadow-sm transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-1.5">{card.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8 rounded-3xl overflow-hidden border border-gray-100 shadow-sm">
          <Image
            src="/copywise-banner.png"
            alt="CopyWise Figma plugin"
            width={1200}
            height={600}
            className="w-full object-cover"
          />
        </div>

        <div className="mb-8 rounded-3xl overflow-hidden border border-gray-100 shadow-sm bg-gray-50" style={{ position: "relative", paddingBottom: "56.25%" }}>
          <iframe
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            src="https://www.youtube.com/embed/_4W9Fx-mPnE"
            title="Copywise"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {["/copywise-screen1.png", "/copywise-screen2.png", "/copywise-screen3.png"].map((src, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-gray-50"
            >
              <Image
                src={src}
                alt={`CopyWise screenshot ${i + 1}`}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

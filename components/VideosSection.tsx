export default function VideosSection() {
  return (
    <section id="videos" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <p className="text-indigo-600 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            03 — Video Content
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Tutorials &<br />Product Walkthroughs
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-5">
            Some things are better shown than explained. These instructional videos complement the written documentation — screen-recorded walkthroughs, feature demos, and onboarding tutorials designed to reduce the time it takes for users to reach their first win.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-10">
            Each video is scripted for clarity and paced for comprehension, always centering the user&apos;s goal over the interface mechanics.
          </p>

          <div className="space-y-3 mb-10">
            {[
              "Scripted for clarity, not just completeness",
              "Focused on outcomes, not just feature tours",
              "Paired with links to guides and community",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0 mt-1.5" />
                {item}
              </div>
            ))}
          </div>

          <a
            href="https://vimeo.com/user48865873"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gray-900 hover:bg-gray-700 text-white text-sm font-semibold transition-colors"
          >
            Watch on Vimeo ↗
          </a>
        </div>

        <div className="mt-14 rounded-3xl overflow-hidden border border-gray-100 shadow-sm bg-gray-50" style={{ paddingBottom: "56.25%", position: "relative" }}>
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/1039583911?h=5bc803e8cb"
            frameBorder="0"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            allowFullScreen
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </section>
  );
}

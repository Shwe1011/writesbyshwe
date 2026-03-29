import AnimatedSection from "./AnimatedSection";

export default function CTABanner() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection animation="scaleIn">
          <div className="relative bg-gradient-to-br from-[#4A90E2] via-blue-500 to-violet-600 rounded-3xl p-12 text-center overflow-hidden">

            {/* Radial glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.18)_0%,transparent_70%)] pointer-events-none" />

            {/* Grid dots */}
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />

            {/* Floating orbs */}
            <div
              className="absolute top-8 left-8 w-24 h-24 bg-white/10 rounded-full blur-xl"
              style={{ animation: "float 6s ease-in-out infinite" }}
            />
            <div
              className="absolute bottom-8 right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"
              style={{ animation: "float 7s ease-in-out 1s infinite" }}
            />

            <div className="relative">
              <p className="text-blue-100 text-[11px] font-bold uppercase tracking-widest mb-4">
                Get started today
              </p>
              <h2 className="text-4xl font-extrabold text-white tracking-tight mb-4">
                Start writing better copy today
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-lg mx-auto">
                Install CopyWise in Figma and get 50 free suggestions —
                no credit card required.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-white text-[#4A90E2] font-bold px-8 py-4 rounded-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all text-[16px]"
              >
                Install free plugin
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

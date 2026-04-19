import AnimatedSection from "./AnimatedSection";

export default function VideoDemo() {
  return (
    <section id="demo" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <p className="text-[#4A90E2] text-[11px] font-bold uppercase tracking-widest mb-3">
            Watch the demo
          </p>
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            See CopyWise in action
          </h2>
          <p className="text-slate-500 text-lg mt-4 max-w-xl mx-auto">
            Watch how semantic copy search and style guide–adhering suggestions work together inside Figma.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={120}>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-200 bg-slate-900" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/irbh2cUia8M"
              title="CopyWise Figma Plugin"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

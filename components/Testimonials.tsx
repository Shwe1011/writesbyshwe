import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    avatar: "SC",
    avatarBg: "bg-violet-500",
    name: "Sarah Chen",
    role: "UX Writer",
    company: "Fintech startup",
    quote:
      "CopyWise saves me hours every sprint. I select a text node and instantly get suggestions that match our tone guide — no more back-and-forth with designers.",
    stars: 5,
  },
  {
    avatar: "MR",
    avatarBg: "bg-[#4A90E2]",
    name: "Marcus Rodriguez",
    role: "Product Designer",
    company: "Design agency",
    quote:
      "The style guide feature is what sold me on Pro. Every suggestion follows our brand voice automatically. It's like having a copywriter embedded in Figma.",
    stars: 5,
  },
  {
    avatar: "PS",
    avatarBg: "bg-teal-500",
    name: "Priya Sharma",
    role: "Design Lead",
    company: "SaaS company",
    quote:
      "We uploaded our copy library and now CopyWise surfaces matching copy before anyone writes something new. Copy consistency is way up across the whole product.",
    stars: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        <AnimatedSection className="text-center mb-16">
          <p className="text-[#4A90E2] text-[11px] font-bold uppercase tracking-widest mb-3">
            Testimonials
          </p>
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            Loved by designers and writers
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 110}>
              <div className="bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-lg rounded-2xl p-6 h-full flex flex-col transition-all duration-300 group">
                <Stars count={t.stars} />
                <p className="text-slate-700 leading-relaxed mt-4 flex-1 text-[15px]">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-6 pt-5 border-t border-slate-100">
                  <div className={`w-10 h-10 rounded-full ${t.avatarBg} flex items-center justify-center text-white text-[12px] font-bold flex-shrink-0`}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-slate-900 font-semibold text-sm">{t.name}</p>
                    <p className="text-slate-400 text-xs mt-0.5">
                      {t.role} · {t.company}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

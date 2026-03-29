import Image from "next/image";

export default function HeroScreenshots() {
  return (
    // Container is a positioning reference. Height accommodates the tallest
    // element: front screenshot (387px) + label chip (~40px) = ~430px,
    // plus 55px top offset from back screenshots = ~490px total.
    <div
      className="relative flex-shrink-0 animate-float"
      style={{ width: 360, height: 490 }}
    >
      {/* Ambient glow */}
      <div className="absolute -inset-12 bg-gradient-to-br from-blue-200/40 via-violet-200/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* ── Back-left: Login (774×1106 → 152×217) ── */}
      <div
        className="absolute"
        style={{ left: -8, top: 55, transform: "rotate(-8deg)", zIndex: 1 }}
      >
        <Image
          src="/screenshots/screenshot-1.png"
          alt="CopyWise sign-in screen"
          width={152}
          height={217}
          className="rounded-2xl shadow-xl ring-1 ring-black/8 opacity-90"
          sizes="152px"
        />
        <div className="mt-2.5 flex justify-center">
          <span className="bg-white/90 backdrop-blur-sm border border-slate-100 text-slate-500 text-[10px] font-semibold px-2.5 py-1 rounded-full shadow-sm whitespace-nowrap">
            Sign in
          </span>
        </div>
      </div>

      {/* ── Back-right: Copy library (804×1162 → 152×220) ── */}
      <div
        className="absolute"
        style={{ right: -8, top: 70, transform: "rotate(8deg)", zIndex: 1 }}
      >
        <Image
          src="/screenshots/screenshot-3.png"
          alt="CopyWise copy library setup"
          width={152}
          height={220}
          className="rounded-2xl shadow-xl ring-1 ring-black/8 opacity-90"
          sizes="152px"
        />
        <div className="mt-2.5 flex justify-center">
          <span className="bg-white/90 backdrop-blur-sm border border-slate-100 text-slate-500 text-[10px] font-semibold px-2.5 py-1 rounded-full shadow-sm whitespace-nowrap">
            Copy library
          </span>
        </div>
      </div>

      {/* ── Front: AI Suggestions (690×1334 → 200×387) ── */}
      <div
        className="absolute"
        style={{ left: "50%", top: 0, transform: "translateX(-50%)", zIndex: 2 }}
      >
        {/* Blue glow ring behind the main screenshot */}
        <div className="absolute -inset-3 bg-[#4A90E2]/20 rounded-3xl blur-xl pointer-events-none" />

        <Image
          src="/screenshots/screenshot-4.png"
          alt="CopyWise AI suggestions and similar copies"
          width={200}
          height={387}
          className="relative rounded-2xl shadow-2xl ring-1 ring-black/10"
          sizes="200px"
          priority
        />

        <div className="mt-3 flex justify-center">
          <span className="bg-[#4A90E2] text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-md whitespace-nowrap">
            ✨ AI Suggestions
          </span>
        </div>
      </div>
    </div>
  );
}

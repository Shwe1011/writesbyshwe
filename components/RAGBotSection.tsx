import Image from "next/image";

const details = [
  { label: "Stack", value: "Python · LangGraph · RAG · Vector DB" },
  { label: "Source", value: "github.com/RAG-chatbot-for-helpdocs" },
  { label: "Use case", value: "Documentation Q&A with source citations" },
];

export default function RAGBotSection() {
  return (
    <section id="ragbot" className="py-28 bg-[#0B0F1A] overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/8 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-600/8 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-indigo-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              06 — AI Tool
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Documentation-Aware<br />RAG Chatbot
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-5">
              A retrieval-augmented generation chatbot I built independently using LangGraph — trained on live help documentation to give users instant, sourced answers without hallucinating.
            </p>
            <p className="text-gray-500 text-base leading-relaxed mb-10">
              Instead of searching through articles, users ask questions in plain language and get direct answers with source citations from the documentation. Built as a practical solution to reduce support ticket volume and make documentation more accessible.
            </p>

            <div className="space-y-4 mb-10">
              {details.map(({ label, value }) => (
                <div key={label} className="flex gap-5 items-start">
                  <span className="text-gray-600 text-xs uppercase tracking-widest pt-0.5 w-16 flex-shrink-0">{label}</span>
                  <span className="text-gray-300 text-sm font-mono">{value}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                { value: "RAG", label: "Architecture" },
                { value: "Live", label: "Doc-aware" },
                { value: "Cited", label: "Responses" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="text-center border border-white/10 rounded-xl p-4 bg-white/[0.03]"
                >
                  <div className="text-base font-bold text-white">{value}</div>
                  <div className="text-[10px] text-gray-500 mt-0.5 uppercase tracking-widest">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/ragbot.gif"
                alt="RAG Chatbot in action"
                width={640}
                height={420}
                unoptimized
                className="w-full"
              />
            </div>
            <div className="absolute -top-5 -left-5 w-28 h-28 bg-indigo-600/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-5 -right-5 w-36 h-36 bg-violet-600/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

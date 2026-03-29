"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  {
    q: "How does CopyWise generate suggestions?",
    a: "CopyWise sends your selected text and style guide to GPT-4o-mini, which returns multiple copy alternatives. It also searches your copy library using semantic vector similarity (Pinecone) to surface relevant existing copy from your own product.",
  },
  {
    q: "Is my copy library stored securely?",
    a: "Yes. Your CSV copy is embedded as vector representations in a Pinecone namespace isolated to your account. The original text is stored as metadata, and only your authenticated account can query it. We never share your data.",
  },
  {
    q: "What is the free plan limit?",
    a: "The free plan gives you 50 lifetime suggestions — enough to evaluate whether CopyWise fits your workflow before committing to Pro.",
  },
  {
    q: "Can I upload my own style guide?",
    a: "Yes. Pro users can replace the default 125-rule style guide with their own brand writing guidelines. The default guide covers sentence casing, Oxford commas, active voice, error message structure, and over 100 other rules.",
  },
  {
    q: "What CSV format does the copy library accept?",
    a: 'Any CSV with a column named "text", "copy", "name", or "content". You can also upload plain text files with one entry per line. The maximum is 5,000 rows, with each entry up to 500 characters.',
  },
  {
    q: "Does CopyWise work with FigJam or other editors?",
    a: "Currently CopyWise supports Figma design files only. FigJam support is on the roadmap.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6 bg-slate-50">
      <div className="max-w-3xl mx-auto">

        <AnimatedSection className="text-center mb-16">
          <p className="text-[#4A90E2] text-[11px] font-bold uppercase tracking-widest mb-3">
            FAQ
          </p>
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently asked questions
          </h2>
        </AnimatedSection>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <AnimatedSection key={faq.q} delay={i * 60}>
              <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold text-slate-900 text-[15px]">{faq.q}</span>
                  <span
                    className={`flex-shrink-0 w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center transition-all duration-300 ${
                      open === i ? "rotate-180 bg-blue-50" : ""
                    }`}
                  >
                    <svg
                      className={`w-3.5 h-3.5 transition-colors ${open === i ? "text-[#4A90E2]" : "text-slate-500"}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    open === i ? "max-h-48" : "max-h-0"
                  }`}
                >
                  <p className="px-6 pb-5 text-slate-500 leading-relaxed text-[15px]">
                    {faq.a}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

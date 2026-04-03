"use client"

import { Search, Lightbulb, PencilLine, Trophy } from "lucide-react";

const steps = [
  {
    title: "Diagnostic",
    description: "Personalized assessment to identify your current conceptual gaps and strengths.",
    icon: <Search className="w-6 h-6 text-blue-600" />,
    color: "bg-blue-100"
  },
  {
    title: "Concept Building",
    description: "Deep-dive sessions focused on 'Why' before 'What', ensuring core understanding.",
    icon: <Lightbulb className="w-6 h-6 text-amber-600" />,
    color: "bg-amber-100"
  },
  {
    title: "Guided Practice",
    description: "Hands-on problem solving with immediate mentor feedback to reinforce learning.",
    icon: <PencilLine className="w-6 h-6 text-emerald-600" />,
    color: "bg-emerald-100"
  },
  {
    title: "Mastery",
    description: "Final evaluation and adaptive revision to ensure long-term retention and success.",
    icon: <Trophy className="w-6 h-6 text-purple-600" />,
    color: "bg-purple-100"
  }
];

export default function LearningProcess() {
  return (
    <section className="py-24 bg-transparent overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h3 className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-3">Our Methodology</h3>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">The Concept King Roadmap</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            We follow a scientifically-backed 4-step process to transform learners into concept masters.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 -z-10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-center animate-fade-in" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-24 h-24 ${step.color} rounded-[2rem] flex items-center justify-center mb-8 shadow-xl shadow-slate-100/50 border-4 border-white transition-transform duration-500 hover:rotate-6`}>
                  {step.icon}
                </div>
                <div className="relative">
                   <div className="absolute -top-14 left-1/2 -translate-x-1/2 text-5xl font-black text-slate-50 opacity-[0.05] pointer-events-none">
                      0{index + 1}
                   </div>
                   <h4 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">{step.title}</h4>
                   <p className="text-slate-500 leading-relaxed font-normal">
                      {step.description}
                   </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

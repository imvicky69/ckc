"use client"

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How do I enroll in a new batch?",
    answer: "Enrollment is simple! You can click the 'WhatsApp' button to chat with our mentors directly or visit our center for a free diagnostic test and consultation."
  },
  {
    question: "What are the typical batch timings?",
    answer: "We offer flexible timings to accommodate school schedules. Weekday batches usually run between 4:00 PM and 8:00 PM, while weekend batches are available from 10:00 AM to 6:00 PM."
  },
  {
    question: "Do you offer online classes as well?",
    answer: "Yes, we provide high-quality live interactive sessions for students who cannot attend in person. Hybrid models are also available for maximum flexibility."
  },
  {
    question: "What makes Concept King different from other institutes?",
    answer: "We focus on 'Concept Mapping' and 'Mental Models' rather than rote memorization. Our mentors are industry veterans who prioritize individual student understanding over syllabus speed."
  }
];

function FAQItem({ faq, index }: { faq: typeof faqs[0], index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`premium-card p-0 mb-6 transition-all duration-500 ${isOpen ? 'shadow-2xl shadow-blue-500/10 border-blue-200' : 'hover:border-blue-100 hover:shadow-lg hover:shadow-blue-500/5'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-7 flex items-center justify-between text-left group"
      >
        <span className={`text-xl font-bold transition-all duration-300 ${isOpen ? 'text-blue-600' : 'text-slate-900 group-hover:text-blue-500'}`}>
          {faq.question}
        </span>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-50 text-slate-400 rotate-0'}`}>
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-8 pb-8 text-slate-500 leading-relaxed font-medium">
          {faq.answer}
        </div>
      </div>
    </div>
  );
}

export default function SmartFAQ() {
  return (
    <section className="py-24 relative overflow-hidden bg-transparent">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h3 className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-3">Questions?</h3>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Smart FAQ</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            Everything you need to know about starting your journey with Concept King.
          </p>
        </div>

        <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

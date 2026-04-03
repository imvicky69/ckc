"use client"

import { CheckCircle2, Target, History, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";

const milestones = [
  { year: "2012", detail: "Started as a small mentorship group focusing on deep conceptual clarity." },
  { year: "2016", detail: "Expanded to dedicated Science & Commerce wings with expert faculty." },
  { year: "2020", detail: "Pioneered adaptive learning models to ensure student success during global shifts." },
  { year: "Today", detail: "Concept King is now a premium institute transforming thousands of students." }
];

const values = [
  {
    title: "Trust",
    desc: "We build lasting relationships with parents and students through transparency.",
    icon: <Heart className="w-6 h-6 text-red-500" />
  },
  {
    title: "Clarity",
    desc: "Our mission is to simplify the complex. We teach the 'Why' behind every concept.",
    icon: <Target className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Success",
    desc: "We define success as holistic growth—grades are just the natural byproduct.",
    icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" />
  }
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen relative py-20 md:py-32 overflow-hidden">
      {/* Soft Background Accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/30 blur-[120px] rounded-full -z-10"></div>
      
      <div className="mx-auto max-w-6xl px-6 relative z-10 w-full">
        {/* Hero Section */}
        <div className="max-w-3xl mb-24 animate-fade-in">
           <h3 className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4">Our Story</h3>
           <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight leading-[1.1]">
              Driven by <span className="text-blue-600">Clarity.</span> <br />
              Defined by Results.
           </h1>
           <p className="text-xl text-slate-500 font-medium leading-relaxed">
              At Concept King, we don't just teach for exams. We build mental models that last a lifetime.
           </p>
        </div>

        {/* Teacher Spotlight */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
           <div className="relative group animate-fade-in">
              <div className="absolute -inset-4 bg-blue-600/5 rounded-[3rem] blur-2xl group-hover:bg-blue-600/10 transition-colors duration-500"></div>
              <div className="relative rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl shadow-blue-200/50 transform transition-all duration-700 group-hover:scale-[1.02]">
                 <img 
                    src="/teacher.png" 
                    alt="Lead Mentor - Concept King" 
                    className="w-full h-auto object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                 />
                 <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-slate-950/80 to-transparent">
                    <p className="text-white font-bold text-xl">Dr. Ananya Sharma</p>
                    <p className="text-blue-400 text-sm font-medium uppercase tracking-widest">Founder & Lead Mentor</p>
                 </div>
              </div>
           </div>

           <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="space-y-4">
                 <h2 className="text-3xl font-black text-slate-900 tracking-tight">The Visionary Behind Concept King</h2>
                 <p className="text-lg text-slate-600 leading-relaxed font-medium">
                    "My mission has always been simple: to make learning feel like an adventure, not a chore. Having spent over 12 years in the classroom, I saw that students were failing not due to lack of effort, but due to lack of conceptual depth."
                 </p>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-4">
                 <div className="space-y-1">
                    <p className="text-4xl font-black text-blue-600">12+</p>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Years Experience</p>
                 </div>
                 <div className="space-y-1">
                    <p className="text-4xl font-black text-blue-600">5k+</p>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Students Mentored</p>
                 </div>
              </div>

              <div className="pt-6">
                 <Link href="https://wa.me/911234567890" className="btn-whatsapp px-10 py-4 group">
                    Chat with Dr. Sharma
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                 </Link>
              </div>
           </div>
        </section>

        {/* Mission & Values */}
        <section className="py-24 border-y border-slate-100 mb-32 bg-slate-50/30 -mx-6 px-6">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {values.map((v, i) => (
                <div key={i} className="flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: `${i * 0.15}s` }}>
                   <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center mb-6">
                      {v.icon}
                   </div>
                   <h4 className="text-xl font-bold text-slate-900 mb-3">{v.title}</h4>
                   <p className="text-slate-500 font-medium text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* Timeline Section */}
        <section className="mb-20">
           <div className="text-center mb-16 animate-fade-in">
              <History className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h2 className="text-4xl font-black text-slate-900 tracking-tight">Our Impact Timeline</h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {milestones.map((m, i) => (
                <div key={i} className="premium-card group animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                   <p className="text-blue-600 text-2xl font-black mb-3">{m.year}</p>
                   <p className="text-slate-500 font-medium text-sm leading-relaxed">{m.detail}</p>
                </div>
              ))}
           </div>
        </section>
      </div>
    </div>
  );
}

"use client"

import { BookOpen, FlaskConical, CircleDollarSign } from "lucide-react";

export default function CoursesOffered() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Courses Offered</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Broadening academic horizons with specialized instruction tailored to every grade and stream.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Foundation Years */}
          <div className="premium-card p-10 flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: '0s' }}>
            <div className="w-20 h-20 bg-blue-100 rounded-[2.5rem] flex items-center justify-center mb-8 shadow-inner">
               <BookOpen className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-3xl font-black text-slate-900 mb-4">Class 6 – 10</h3>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              Laying strong foundations in core subjects with a focus on deep conceptual understanding and problem-solving skills.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Mathematics', 'Science', 'English', 'SST'].map((sub, i) => (
                <span key={i} className="px-5 py-2 bg-slate-50 border border-slate-100 rounded-full text-sm font-bold text-slate-600">
                  {sub}
                </span>
              ))}
            </div>
          </div>

          {/* Specialized Streams */}
          <div className="premium-card p-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-6 mb-8 pb-8 border-b border-slate-100">
              <div className="w-20 h-20 bg-indigo-100 rounded-[2.5rem] flex items-center justify-center shrink-0">
                 <FlaskConical className="w-10 h-10 text-indigo-600" />
              </div>
              <div>
                 <h3 className="text-3xl font-black text-slate-900">Class 11 – 12</h3>
                 <p className="text-blue-600 font-bold uppercase tracking-widest text-xs">Specialized Streams</p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6 group">
                 <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110">
                    <FlaskConical className="w-6 h-6 text-emerald-600" />
                 </div>
                 <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Science Stream</h4>
                    <p className="text-slate-500 font-medium leading-relaxed">
                       Physics, Chemistry, and Mathematics/Biology with advanced concept mapping for competitive exams.
                    </p>
                 </div>
              </div>

              <div className="flex gap-6 group text-left">
                 <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110">
                    <CircleDollarSign className="w-6 h-6 text-amber-600" />
                 </div>
                 <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Commerce Stream</h4>
                    <p className="text-slate-500 font-medium leading-relaxed">
                       Accountancy, Business Studies, and Economics focused on real-world application and business logic.
                    </p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

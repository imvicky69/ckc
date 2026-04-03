"use client"

import { GraduationCap, Award, Linkedin, Twitter } from "lucide-react";

const mentors = [
  {
    name: "Dr. Ananya Sharma",
    role: "Head of Science",
    bio: "PhD in Physics from IIT Delhi with 12+ years of experience in JEE/NEET mentorship.",
    icon: <GraduationCap className="w-10 h-10 text-emerald-600" />,
    color: "bg-emerald-50"
  },
  {
    name: "Rajesh Malhotra",
    role: "Mathematics Expert",
    bio: "Ex-HOD at FIITJEE, renowned for simplifying complex calculus and algebra for Class 11-12.",
    icon: <Award className="w-10 h-10 text-blue-600" />,
    color: "bg-blue-50"
  },
  {
    name: "Sanya Gupta",
    role: "Commerce Lead",
    bio: "Chartered Accountant (CA) with a passion for teaching modern business strategy and accountancy.",
    icon: <Award className="w-10 h-10 text-amber-600" />,
    color: "bg-amber-50"
  }
];

export default function Mentors() {
  return (
    <section className="py-24 relative overflow-hidden bg-transparent">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h3 className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-3">Expert Faculty</h3>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Meet Your Mentors</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            Learn from the masters who have guided thousands of students to academic excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {mentors.map((mentor, index) => (
            <div 
              key={index} 
              className="premium-card group p-0 overflow-hidden animate-fade-in transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10" 
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`h-40 ${mentor.color} flex items-center justify-center relative`}>
                 <div className="absolute inset-0 bg-white opacity-[0.4] transition-opacity group-hover:opacity-[0.2]"></div>
                 <div className="relative transform transition-all group-hover:scale-110 group-hover:rotate-6 duration-500">
                    {mentor.icon}
                 </div>
              </div>
              <div className="p-8">
                 <h4 className="text-2xl font-bold text-slate-900 mb-1 tracking-tight">{mentor.name}</h4>
                 <p className="text-blue-600 font-bold text-sm mb-4">{mentor.role}</p>
                 <p className="text-slate-500 leading-relaxed font-normal mb-8">
                    {mentor.bio}
                 </p>
                 <div className="flex gap-4">
                    <button className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all">
                       <Linkedin className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center hover:bg-blue-400 hover:text-white hover:border-blue-400 transition-all">
                       <Twitter className="w-5 h-5" />
                    </button>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

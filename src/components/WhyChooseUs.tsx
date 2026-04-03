"use client"

import { GraduationCap, Users, HeartHandshake } from "lucide-react";

const features = [
  {
    title: "Experienced Teachers",
    description: "Learn from industry veterans who bring years of real-world expertise into the classroom.",
    icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
    color: "bg-blue-50"
  },
  {
    title: "Small Batches",
    description: "We maintain low student-teacher ratios to ensure every student is heard and supported.",
    icon: <Users className="w-8 h-8 text-indigo-600" />,
    color: "bg-indigo-50"
  },
  {
    title: "Personal Attention",
    description: "Get 1:1 mentorship and personalized learning paths tailored to your unique pace.",
    icon: <HeartHandshake className="w-8 h-8 text-rose-600" />,
    color: "bg-rose-50"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Why Choose Us?</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            We prioritize quality over quantity, focusing on deep conceptual clarity and individual growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="premium-card group animate-fade-in" 
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-6 duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

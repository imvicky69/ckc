"use client"

import { Clock, BookOpen, GraduationCap, ArrowRight } from "lucide-react";

interface CourseCardProps {
  className?: string;
  style?: React.CSSProperties;
  course: {
    id: string;
    title: string;
    grade: string;
    subjects: string[];
    duration: string;
    fees?: string;
    category: string;
  };
}

export default function CourseCard({ course, className = "", style }: CourseCardProps) {
  const whatsappLink = `https://wa.me/911234567890?text=I am interested in ${course.title} for ${course.grade}. Please share more details.`;

  return (
    <div 
      className={`premium-card group flex flex-col h-full animate-fade-in ${className}`}
      style={style}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-blue-600 text-xs font-bold uppercase tracking-widest">
          {course.grade}
        </div>
        <GraduationCap className="w-6 h-6 text-slate-200 group-hover:text-blue-200 transition-colors" />
      </div>

      <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
        {course.title}
      </h3>

      <div className="space-y-4 mb-8 flex-1">
        <div className="flex items-start gap-3">
          <BookOpen className="w-5 h-5 text-slate-400 mt-0.5 shrink-0" />
          <div className="flex flex-wrap gap-2">
            {course.subjects.map((sub, i) => (
              <span key={i} className="text-slate-500 font-medium text-sm">
                {sub}{i < course.subjects.length - 1 ? " • " : ""}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Clock className="w-5 h-5 text-slate-400 shrink-0" />
          <p className="text-slate-500 font-medium text-sm">{course.duration}</p>
        </div>

        {course.fees && (
          <div className="pt-4 border-t border-slate-50">
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Fees</p>
            <p className="text-xl font-black text-slate-900">{course.fees}</p>
          </div>
        )}
      </div>

      <a 
        href={whatsappLink} 
        target="_blank" 
        className="btn-whatsapp w-full group py-4 text-base"
      >
        Enroll Now
        <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
      </a>
    </div>
  );
}

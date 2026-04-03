"use client"

import { useState } from "react";
import CourseCard from "../../components/CourseCard";
import { Filter, Search, BookOpen, GraduationCap, Laptop } from "lucide-react";

const courses = [
  // Class 6-10
  {
    id: "c6-foundation",
    title: "Class 6 Foundation",
    grade: "Junior 6",
    subjects: ["Mathematics", "Science", "English", "SST"],
    duration: "1 Year Academic Session",
    fees: "₹1,500/month",
    category: "junior"
  },
  {
    id: "c8-foundation",
    title: "Class 8 Foundation",
    grade: "Junior 8",
    subjects: ["Mathematics", "Science", "Mental Ability"],
    duration: "1 Year Academic Session",
    fees: "₹1,800/month",
    category: "junior"
  },
  {
    id: "c10-mastery",
    title: "Class 10 Board Mastery",
    grade: "Junior 10",
    subjects: ["Maths", "Science", "Foundation for 11th"],
    duration: "1 Year Academic Session",
    fees: "₹2,500/month",
    category: "junior"
  },
  // Class 11-12 Science
  {
    id: "c11-science",
    title: "Class 11 Science (JEE/NEET)",
    grade: "Senior 11",
    subjects: ["Physics", "Chemistry", "Maths/Bio"],
    duration: "2 Year Program",
    fees: "₹4,500/month",
    category: "science"
  },
  {
    id: "c12-science",
    title: "Class 12 Boards + Competitive",
    grade: "Senior 12",
    subjects: ["Physics", "Chemistry", "Maths/Bio"],
    duration: "1 Year Program",
    fees: "₹5,000/month",
    category: "science"
  },
  // Class 11-12 Commerce
  {
    id: "c11-commerce",
    title: "Class 11 Commerce",
    grade: "Senior 11",
    subjects: ["Accountancy", "Business Studies", "Economics"],
    duration: "1 Year Program",
    fees: "₹3,500/month",
    category: "commerce"
  },
  {
    id: "c12-commerce",
    title: "Class 12 Commerce Mastery",
    grade: "Senior 12",
    subjects: ["Accountancy", "Business Studies", "Economics"],
    duration: "1 Year Program",
    fees: "₹4,000/month",
    category: "commerce"
  }
];

export default function CoursesPage() {
  const [filter, setFilter] = useState("all");

  const filteredCourses = filter === "all" 
    ? courses 
    : courses.filter(c => c.category === filter);

  return (
    <div className="flex flex-col min-h-screen relative py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-6 relative z-10 w-full">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest mb-6">
              <BookOpen className="w-4 h-4" />
              Academic Catalog
           </div>
           <h1 className="text-4xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight">Explore Our <span className="text-blue-600">Courses</span></h1>
           <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
              Find the perfect path for your academic success with our specialized coaching programs.
           </p>
        </div>

        {/* Filtering & Layout Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
           <div className="flex flex-wrap items-center justify-center gap-2">
              {[
                { id: "all", label: "All Courses", icon: <Filter className="w-4 h-4" /> },
                { id: "junior", label: "Class 6-10", icon: <GraduationCap className="w-4 h-4" /> },
                { id: "science", label: "11-12 Science", icon: <Laptop className="w-4 h-4" /> },
                { id: "commerce", label: "11-12 Commerce", icon: <BookOpen className="w-4 h-4" /> }
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setFilter(btn.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                    filter === btn.id 
                      ? "bg-slate-900 text-white shadow-xl shadow-slate-950/20" 
                      : "bg-white border border-slate-100 text-slate-500 hover:border-blue-200 hover:bg-blue-50/50"
                  }`}
                >
                  {btn.icon}
                  {btn.label}
                </button>
              ))}
           </div>
           <div className="text-slate-400 font-bold text-sm uppercase tracking-widest">
              Showing {filteredCourses.length} Programs
           </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {filteredCourses.map((course, index) => (
             <CourseCard key={course.id} course={course} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }} />
           ))}
        </div>
      </div>
    </div>
  );
}

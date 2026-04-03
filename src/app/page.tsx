import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import LearningProcess from "../components/LearningProcess";
import CoursesOffered from "../components/CoursesOffered";
import Mentors from "../components/Mentors";
import Gallery from "../components/Gallery";
import SmartFAQ from "../components/SmartFAQ";
import Card from "../components/Card";
import Button from "../components/Button";
import Input from "../components/Input";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Hero Section */}
      <Hero />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Learning Process Section */}
      <LearningProcess />

      {/* Courses Offered Section */}
      <CoursesOffered />

      {/* Mentors Section */}
      <Mentors />

      {/* Gallery Section */}
      <Gallery />

      {/* Smart FAQ Section */}
      <SmartFAQ />

      {/* WhatsApp Contact Section */}
      <section id="contact" className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5 -z-10"></div>
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-bold uppercase tracking-widest mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Direct Support Available
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight animate-fade-in">
            Have Questions? <br />
            <span className="text-blue-600">Chat with us on WhatsApp</span>
          </h2>
          
          <p className="text-xl text-slate-500 mb-12 leading-relaxed max-w-2xl mx-auto font-medium animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Get instant answers about our courses, fee structures, and batch timings directly from our mentors.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <a 
              href="https://wa.me/911234567890" 
              target="_blank" 
              className="btn-whatsapp px-14 py-6 text-xl shadow-2xl shadow-emerald-200/50 group"
            >
              <svg className="w-8 h-8 mr-3 fill-current transition-transform group-hover:rotate-12" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Start Chat Now
            </a>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
             <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Response Time</p>
                <p className="text-slate-900 font-bold">Under 30 Mins</p>
             </div>
             <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Available</p>
                <p className="text-slate-900 font-bold">10 AM - 10 PM IST</p>
             </div>
             <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Support</p>
                <p className="text-slate-900 font-bold">1:1 Consultation</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}


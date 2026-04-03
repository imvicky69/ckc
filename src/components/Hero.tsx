import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-20 md:pt-36 md:pb-36 overflow-hidden bg-transparent">
      {/* Soft Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[600px] bg-blue-50/50 blur-[100px] rounded-full -z-10 pointer-events-none"></div>
      
      <div className="mx-auto max-w-6xl px-6 flex flex-col items-center text-center">
        {/* Centered Logo Placeholder */}
        <div className="mb-12 animate-fade-in group">
          <div className="relative inline-flex items-center justify-center">
            <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full scale-150 group-hover:bg-blue-500/20 transition-colors duration-500"></div>
            <div className="relative w-28 h-28 rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl shadow-blue-200/50 transform transition-all group-hover:scale-110 group-hover:rotate-3 duration-500">
              <img 
                src="/logo.jpeg" 
                alt="Concept King Brand Logo" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight text-slate-900 leading-[1.1]">
              <div className="typing-animation inline-block">
                Very New Starting
              </div>
            </h1>
            <p className="text-lg sm:text-xl md:text-3xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              The future of concept-based learning. <br className="hidden md:block" /> 
              Precision-crafted for the next generation.
            </p>
          </div>

          <div className="pt-10 flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link href="/courses" className="btn-primary px-14 py-5 text-lg group">
              Our courses
              <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link href="/about" className="btn-secondary px-14 py-5 text-lg">
              About us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}



"use client"

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen relative py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-4xl px-6 relative z-10 w-full">
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-12 tracking-tight">Terms of <span className="text-blue-600">Service</span></h1>
        
        <div className="prose prose-slate max-w-none space-y-10 text-slate-600 font-medium leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">1. Acceptable Use</h2>
            <p>
              By accessing this website, you agree to use our content for personal, non-commercial purposes only. Any unauthorized use of our teaching materials, logo, or brand name is strictly prohibited.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">2. Enrollment & Academic Success</h2>
            <p>
              While Concept King provides high-quality mentorship, student success is a joint effort. We do not guarantee specific grades but commit to providing the best conceptual clarity and support.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">3. Fee Structure</h2>
            <p>
              Fees mentioned on the website are indicative and subject to change based on the specific batch and academic year. Enrollment is confirmed only after formal registration at our center.
            </p>
          </section>

          <section className="space-y-4 pt-8 border-t border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">4. Governing Law</h2>
            <p>
              These terms are governed by the laws of India. Any disputes are subject to the exclusive jurisdiction of the courts in New Delhi.
            </p>
            <p className="text-sm italic">Last updated: April 2026</p>
          </section>
        </div>
      </div>
    </div>
  );
}

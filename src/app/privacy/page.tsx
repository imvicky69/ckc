"use client"

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen relative py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-4xl px-6 relative z-10 w-full">
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-12 tracking-tight">Privacy <span className="text-blue-600">Policy</span></h1>
        
        <div className="prose prose-slate max-w-none space-y-10 text-slate-600 font-medium leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">1. Information We Collect</h2>
            <p>
              At Concept King, we only collect essential information required to provide our educational services. This includes your <strong>Name</strong> and <strong>Contact Number</strong> when you fill out our contact or callback forms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">2. How We Use Your Data</h2>
            <p>
              Your information is used solely to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your academic inquiries.</li>
              <li>Provide details about our batches and fee structures.</li>
              <li>Improve our website and mentorship services.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">3. Data Security</h2>
            <p>
              We prioritize the security of your personal data. We do not sell, trade, or share your contact details with third-party marketing agencies. All data is stored securely and accessed only by our administrative team.
            </p>
          </section>

          <section className="space-y-4 pt-8 border-t border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">4. Contact Us</h2>
            <p>
              If you have any questions regarding this policy, please reach out to us at <strong>info@conceptking.com</strong>.
            </p>
            <p className="text-sm italic">Last updated: April 2026</p>
          </section>
        </div>
      </div>
    </div>
  );
}

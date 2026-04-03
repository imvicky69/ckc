import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-slate-100 py-16 overflow-hidden">
      {/* Dark Grid Overlay for Footer */}
      <div className="absolute inset-0 bg-grid opacity-[0.05] pointer-events-none"></div>
      
      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-slate-800 pb-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-black text-white mb-6 italic tracking-tight">Concept King</div>
            <p className="text-slate-400 text-lg leading-relaxed max-w-sm">
              The premium coaching institute for deep conceptual clarity and academic excellence. 
              Built for the next generation of leaders and thinkers.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link href="/courses" className="hover:text-blue-400 transition-colors">Courses</Link></li>
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-slate-400">
              <li>info@conceptking.com</li>
              <li>+91 12345 67890</li>
              <li>New Delhi, India</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-8 pt-8 border-t border-slate-900/50">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Concept King. All rights reserved.
          </p>
          
          {/* Powered by Indivio Section */}
          <a 
            href="https://indivio.in" 
            target="_blank" 
            className="flex items-center gap-3 group px-4 py-2 rounded-full border border-slate-800 hover:border-blue-600/50 hover:bg-blue-600/5 transition-all duration-300"
          >
            <span className="text-slate-500 text-xs font-bold uppercase tracking-widest group-hover:text-slate-300 transition-colors">Powered by</span>
            <div className="w-8 h-8 rounded-full overflow-hidden border border-slate-700 group-hover:border-blue-500 transition-colors shrink-0">
              <img 
                src="/indivioLogo.png" 
                alt="Indivio Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-white font-black tracking-tight group-hover:text-blue-400 transition-colors">Indivio</span>
          </a>

          <div className="flex gap-6">
            <Link href="/privacy" className="text-slate-500 hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="text-slate-500 hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

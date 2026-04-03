"use client"

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-all duration-500 rounded-2xl ${
        isScrolled ? "glass shadow-2xl shadow-blue-900/10 py-3" : "bg-white/50 backdrop-blur-sm py-5"
      }`}
    >
      <div className="px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 blur-md opacity-10 scale-125 group-hover:opacity-20 transition-opacity"></div>
            <div className="relative rounded-xl overflow-hidden border border-slate-100 shadow-sm transition-transform group-hover:scale-105 duration-300">
              <img 
                src="/logo.jpeg" 
                alt="Concept King Logo" 
                className="w-12 h-12 object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tight text-slate-900 leading-none">Concept King</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-blue-600 font-bold mt-1">Mentorship</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          <Link href="/courses" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">Courses</Link>
          <Link href="/about" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">About</Link>
          <Link href="/contact" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">Contact</Link>
          <Link 
            href="https://wa.me/911234567890" 
            target="_blank" 
            className="btn-whatsapp px-6 py-3 text-sm gap-2"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          )}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass border-t border-border animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col p-6 gap-4">
            <Link href="/courses" className="text-lg font-medium py-2 border-b border-border/5" onClick={() => setIsMenuOpen(false)}>Courses</Link>
            <Link href="/about" className="text-lg font-medium py-2 border-b border-border/5" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="/contact" className="btn-primary w-full mt-4" onClick={() => setIsMenuOpen(false)}>Get Started</Link>
          </nav>
        </div>
      )}
    </header>
  );
}

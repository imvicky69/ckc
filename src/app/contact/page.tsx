"use client"

import { useState } from "react";
import { Phone, MessageCircle, MapPin, Send, CheckCircle2, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", number: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.number) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      setFormData({ name: "", number: "" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen relative py-20 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 relative z-10 w-full">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
           <h3 className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-3">Contact Us</h3>
           <h1 className="text-4xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight">Let's <span className="text-blue-600">Connect</span></h1>
           <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
              Have questions about our batches? We're here to help you start your journey toward excellence.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
           {/* Left Column: Form & Info */}
           <div className="space-y-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {/* Phone Card */}
                 <div className="premium-card flex flex-col items-center text-center p-8 group hover:border-blue-200 transition-all">
                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                       <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Phone</p>
                    <p className="text-slate-900 font-bold text-lg">+91 12345 67890</p>
                 </div>

                 {/* WhatsApp Card */}
                 <a 
                    href="https://wa.me/911234567890" 
                    target="_blank" 
                    className="premium-card flex flex-col items-center text-center p-8 group hover:border-emerald-200 transition-all border border-transparent"
                 >
                    <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                       <MessageCircle className="w-6 h-6 text-emerald-600" />
                    </div>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">WhatsApp</p>
                    <p className="text-slate-900 font-bold text-lg">Chat Now</p>
                 </a>
              </div>

              {/* Simple Form */}
              <div className="premium-card p-10 bg-white shadow-2xl shadow-blue-950/5 relative overflow-hidden">
                 {submitted ? (
                   <div className="py-12 flex flex-col items-center text-center animate-fade-in">
                      <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle2 className="w-8 h-8 text-emerald-600 animate-bounce" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                      <p className="text-slate-500 font-medium">We'll get back to you within 24 hours.</p>
                   </div>
                 ) : (
                   <form onSubmit={handleSubmit} className="space-y-6">
                      <h3 className="text-2xl font-black text-slate-900 mb-2 tracking-tight">Send a Quick Message</h3>
                      <p className="text-slate-500 font-medium mb-8">Fill in your details and we'll call you back.</p>

                      <div className="space-y-4">
                         <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Your Name</label>
                            <input 
                              type="text" 
                              required
                              placeholder="e.g. John Doe"
                              value={formData.name}
                              onChange={(e) => setFormData({...formData, name: e.target.value})}
                              className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 transition-all outline-none text-slate-900 font-medium"
                            />
                         </div>

                         <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Contact Number</label>
                            <input 
                              type="tel" 
                              required
                              placeholder="e.g. +91 98765 43210"
                              value={formData.number}
                              onChange={(e) => setFormData({...formData, number: e.target.value})}
                              className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 transition-all outline-none text-slate-900 font-medium"
                            />
                         </div>
                      </div>

                      <button 
                        type="submit" 
                        className="btn-primary w-full py-5 text-lg group shadow-xl shadow-blue-600/20"
                      >
                         Request Callback
                         <Send className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </button>
                   </form>
                 )}
              </div>
           </div>

           {/* Right Column: Map Embed */}
           <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-slate-100 bg-white w-fit">
                 <MapPin className="w-5 h-5 text-blue-600" />
                 <span className="text-slate-500 font-bold text-sm tracking-tight">Main Center - New Delhi</span>
              </div>
              <div className="relative rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl shadow-blue-200/50 aspect-square lg:aspect-auto lg:h-full min-h-[400px]">
                 <iframe 
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112063.15340620888!2d77.126425!3d28.5272181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b71cad4174!2sDelhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                   className="absolute inset-0 w-full h-full grayscale-[0.2] contrast-[1.1]"
                   style={{ border: 0 }} 
                   allowFullScreen={true}
                   loading="lazy" 
                   referrerPolicy="no-referrer-when-downgrade"
                 ></iframe>
              </div>
              <div className="premium-card p-6 flex items-center justify-between group">
                 <div>
                    <h4 className="font-bold text-slate-900">Visit Us?</h4>
                    <p className="text-slate-500 text-sm">Mon - Sat: 10:00 AM - 8:00 PM</p>
                 </div>
                 <a 
                   href="https://goo.gl/maps/placeholder" 
                   target="_blank" 
                   className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all"
                 >
                    <ArrowRight className="w-6 h-6" />
                 </a>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

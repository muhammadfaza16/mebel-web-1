"use client";

import Link from "next/link";
import { Mail, Instagram, Globe, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-dark-bg text-brand-dark-text pt-sp-12 pb-sp-6 px-4 md:px-sp-6 lg:px-sp-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-sp-8 mb-sp-12">
          
          {/* Brand Section */}
          <div className="md:col-span-6">
            <div className="flex flex-col mb-4">
               <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-white mb-2 leading-none">ARTISTEAK</h2>
               <span className="text-xs tracking-[0.4em] font-medium text-brand-terracotta uppercase">Jepara, Indonesia</span>
            </div>
            <p className="text-brand-dark-text/90 text-base max-w-md font-light leading-relaxed mb-sp-6">
              Bridging four decades of master craftsmanship with contemporary architectural vision. Locally sourced, globally delivered from the heart of Central Java.
            </p>
            <div className="flex gap-4">
               <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-white hover:text-brand-dark-bg transition-all">
                  <Instagram size={18} />
               </a>
               <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-white hover:text-brand-dark-bg transition-all">
                  <Mail size={18} />
               </a>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] tracking-[0.3em] font-bold uppercase text-white/70 mb-6">Discovery</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/catalog" className="text-sm text-brand-dark-text/90 hover:text-brand-terracotta transition-colors flex items-center group">Catalog <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity ml-1" /></Link></li>
              <li><Link href="/custom-order" className="text-sm text-brand-dark-text/90 hover:text-brand-terracotta transition-colors flex items-center group">Custom Order <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity ml-1" /></Link></li>
              <li><Link href="/journal" className="text-sm text-brand-dark-text/90 hover:text-brand-terracotta transition-colors flex items-center group">Journal <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity ml-1" /></Link></li>
              <li><Link href="/about" className="text-sm text-brand-dark-text/90 hover:text-brand-terracotta transition-colors flex items-center group">History & Artisan <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity ml-1" /></Link></li>
              <li><Link href="/care" className="text-sm text-brand-dark-text/90 hover:text-brand-terracotta transition-colors flex items-center group">Care & FAQ <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity ml-1" /></Link></li>
            </ul>
          </div>

          {/* Contact / Studio */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] tracking-[0.3em] font-bold uppercase text-white mb-6">The Studio</h4>
            <div className="text-sm text-brand-dark-text space-y-4 font-normal leading-relaxed">
               <p><span className="text-white/50 font-bold uppercase text-[9px] tracking-widest">Jepara HQ:</span><br/>Jl. Pemuda No. 45, Jepara,<br/>Central Java, 59411</p>
               <p><span className="text-white/50 font-bold uppercase text-[9px] tracking-widest">Studio Representative:</span><br/>South Jakarta Sector 7</p>
               <button 
                 onClick={scrollToTop}
                 className="mt-4 text-[10px] uppercase tracking-widest font-bold text-brand-terracotta hover:text-white transition-colors flex items-center gap-2"
               >
                 Back to Top ↑
               </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-sp-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] tracking-[0.1em] font-medium text-white/90">
          <p>© 2026 Artisteak Jepara. Handcrafted in Indonesia.</p>
          <div className="flex gap-sp-4">
            <span className="cursor-pointer hover:text-brand-terracotta transition-colors">Terms of Service</span>
            <span className="cursor-pointer hover:text-brand-terracotta transition-colors">Privacy Policy</span>
          </div>
        </div>
      </div>

      {/* Decorative Large Text (Movement & Pattern) */}
      <div className="absolute -bottom-8 -right-8 text-[30vw] font-serif font-bold text-white/[0.02] select-none pointer-events-none leading-none">
        JPR
      </div>
    </footer>
  );
}

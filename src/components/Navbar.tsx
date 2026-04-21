"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, Linkedin, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showMoreOverlay, setShowMoreOverlay] = useState(false);
  const pathname = usePathname();

  // Pages that start with a dark hero section
  const isDarkHeroPage = pathname === "/" || pathname === "/catalog" || pathname === "/about" || pathname === "/journal" || pathname.startsWith("/journal/");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Catalog', href: '/catalog' },
    { name: 'Custom Order', href: '/custom-order' },
    { name: 'Journal', href: '/journal' },
    { name: 'About', href: '/about' },
    { name: 'Care & FAQ', href: '/care' },
  ];

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-brand-bg text-brand-text flex flex-col p-sp-4 md:p-sp-8"
          >
            {/* Header in Overlay */}
            <div className="flex justify-between items-center mb-sp-8 border-b border-brand-text/10 pb-sp-4">
               <Link href="/" onClick={() => setIsOpen(false)} className="cursor-pointer">
                 <div className="flex flex-col">
                   <h1 className="text-xl md:text-2xl font-serif font-semibold tracking-tight leading-none m-0">ARTISTEAK</h1>
                   <span className="text-[11px] tracking-[0.4em] font-semibold text-brand-text-muted mt-1 uppercase">Jepara</span>
                 </div>
               </Link>
               <button 
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 rounded-none border border-brand-text/20 flex items-center justify-center hover:bg-brand-text hover:text-brand-bg transition-colors cursor-pointer"
               >
                  <X size={20} strokeWidth={1.5} />
               </button>
            </div>
            
            {/* Main Primary Links (Decisive & Bold) */}
            <nav className="flex-1 flex flex-col justify-center gap-sp-2 mt-[5vh]">
               {navLinks.filter(link => !['Home', 'Care & FAQ'].includes(link.name)).map((link, i) => (
                 <motion.div 
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + (i * 0.1) }}
                  className="group cursor-pointer overflow-hidden border-b border-brand-text/5 pb-2"
                 >
                    <Link 
                      href={link.href} 
                      onClick={() => setIsOpen(false)}
                      className="flex items-end gap-sp-2"
                    >
                      <span className="text-[10px] pb-1.5 text-brand-terracotta font-bold">0{i+1}</span>
                      <span className="text-4xl md:text-6xl font-serif text-brand-text hover:text-brand-terracotta hover:italic transition-all duration-500 block">{link.name}</span>
                    </Link>
                 </motion.div>
               ))}
            </nav>
            
            {/* Secondary Resources & Socials */}
            <div className="pt-sp-8 flex flex-col gap-8">
               <div className="flex flex-col gap-4 border-t border-brand-text/5 pt-sp-4">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-brand-text-muted font-bold">Support & Legal</span>
                  <Link 
                    href="/care" 
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-semibold tracking-wide hover:text-brand-terracotta transition-colors flex items-center gap-2"
                  >
                    Care & FAQ <ArrowRight size={14} className="opacity-40" />
                  </Link>
               </div>

               <div className="flex justify-between items-end text-[10px] tracking-widest font-semibold uppercase">
                  <div className="flex gap-6 text-brand-text-muted">
                    <a href="#" className="hover:text-brand-terracotta transition-colors flex items-center gap-2">
                       <span className="w-1 h-1 bg-current rounded-full" /> IG
                    </a>
                    <a href="#" className="hover:text-brand-terracotta transition-colors flex items-center gap-2">
                       <span className="w-1 h-1 bg-current rounded-full" /> LI
                    </a>
                    <a href="#" className="hover:text-brand-terracotta transition-colors flex items-center gap-2">
                       <span className="w-1 h-1 bg-current rounded-full" /> PN
                    </a>
                  </div>
                  <p className="text-brand-text-muted/40 normal-case font-medium">© 2026 Artisteak Jepara</p>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.div className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        (scrolled || !isDarkHeroPage) ? "-translate-y-8" : "translate-y-0"
      }`}>
        {/* Top Announcement Bar (Teracotta / Orange) */}
        <div className="bg-brand-terracotta text-white py-2 relative z-[60] overflow-hidden">
          <div className="whitespace-nowrap flex gap-sp-12 animate-marquee font-bold text-[11px] tracking-[0.4em] uppercase">
            <span className="flex items-center gap-3 shrink-0">
               <span className="w-1 h-1 bg-white rounded-full" /> 
               Architectural Bespoke Furniture — From Jepara to the World
            </span>
            <span className="flex items-center gap-3 shrink-0">
               <span className="w-1 h-1 bg-white rounded-full" /> 
               Sustainability Certified Solid Teak 100%
            </span>
            {/* Duplicates for seamless loop */}
            <span className="flex items-center gap-3 shrink-0">
               <span className="w-1 h-1 bg-white rounded-full" /> 
               Architectural Bespoke Furniture — From Jepara to the World
            </span>
            <span className="flex items-center gap-3 shrink-0">
               <span className="w-1 h-1 bg-white rounded-full" /> 
               Sustainability Certified Solid Teak 100%
            </span>
          </div>
        </div>

        <nav className={`w-full px-4 md:px-sp-4 flex justify-between items-center transition-all duration-500 ${
          (scrolled || !isDarkHeroPage) ? "bg-brand-bg/95 backdrop-blur-md shadow-sm border-b border-brand-text/10 py-3" : "bg-transparent text-white py-4"
        }`}>
          <Link href="/" className="cursor-pointer">
            <div className="flex flex-col">
              <h1 className={`text-xl md:text-2xl font-serif font-semibold tracking-tight leading-none m-0 ${(scrolled || !isDarkHeroPage) ? "text-brand-text" : "text-white"}`}>ARTISTEAK</h1>
              <span className={`text-[11px] tracking-[0.4em] font-semibold mt-1 uppercase ${(scrolled || !isDarkHeroPage) ? "text-brand-text-muted" : "text-white/70"}`}>Jepara</span>
            </div>
          </Link>
          <div className={`flex items-center gap-6 text-[11px] tracking-widest uppercase font-bold ${(scrolled || !isDarkHeroPage) ? "" : "text-white"}`}>
            
            {/* Inline Desktop Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.slice(1).map(link => (
                <Link key={link.name} href={link.href} className={`cursor-pointer hover:text-brand-terracotta transition-colors ${(scrolled || !isDarkHeroPage) ? "text-brand-text-muted hover:text-brand-terracotta" : "text-white/80 hover:text-white"}`}>
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Toggler / Expand the list (Mobile & Tablet Only) */}
            <button 
              onClick={() => setIsOpen(true)}
              className={`lg:hidden group flex items-center gap-3 px-3 py-2 rounded-none border transition-all cursor-pointer ml-2 ${(scrolled || !isDarkHeroPage) ? "border-brand-text/20 hover:bg-brand-text hover:text-white" : "border-white/30 hover:bg-white hover:text-brand-dark-bg"}`}
            >
              <span className={`text-[11px] uppercase tracking-[0.3em] font-bold hidden sm:inline ${(scrolled || !isDarkHeroPage) ? "text-brand-text group-hover:text-white" : "text-white group-hover:text-brand-dark-bg"}`}>Menu</span>
              <Menu size={16} strokeWidth={1.5} className={(scrolled || !isDarkHeroPage) ? "text-brand-text group-hover:text-white" : "text-white group-hover:text-brand-dark-bg"} />
            </button>
          </div>
        </nav>
      </motion.div>
    </>
  );
}

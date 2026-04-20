"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, Linkedin } from "lucide-react";

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
            <div className="flex justify-between items-center mb-sp-8 border-b border-brand-text/10 pb-sp-4">
               <Link href="/" onClick={() => setIsOpen(false)} className="cursor-pointer">
                 <div className="flex flex-col">
                   <h1 className="text-xl md:text-2xl font-serif font-semibold tracking-tight leading-none m-0">ARTISTEAK</h1>
                   <span className="text-[10px] tracking-[0.2em] font-medium text-brand-text-muted mt-1 uppercase">Jepara</span>
                 </div>
               </Link>
               <button 
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 rounded-none border border-brand-text/20 flex items-center justify-center hover:bg-brand-text hover:text-brand-bg transition-colors cursor-pointer"
               >
                  <X size={20} strokeWidth={1.5} />
               </button>
            </div>
            
            <nav className="flex-1 flex flex-col justify-center gap-sp-2 mt-[10vh]">
               {(showMoreOverlay ? navLinks : navLinks.slice(0, 4)).map((link, i) => (
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
                      <span className="text-[10px] pb-1 text-brand-text-muted">0{i+1}</span>
                      <span className="text-3xl md:text-5xl lg:text-7xl font-serif text-brand-text hover:text-brand-terracotta hover:italic transition-colors duration-300 block">{link.name}</span>
                    </Link>
                 </motion.div>
               ))}
               
               {!showMoreOverlay && (
                 <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-4"
                 >
                    <button 
                      onClick={() => setShowMoreOverlay(true)}
                      className="text-xs uppercase tracking-widest font-semibold flex items-center gap-2 text-brand-text-muted hover:text-brand-terracotta transition-colors"
                    >
                      Explore More Lists <span className="text-lg">+</span>
                    </button>
                 </motion.div>
               )}
            </nav>
            
            <div className="pt-sp-4 flex justify-between items-end text-xs tracking-wide">
               <div className="flex gap-4 opacity-60">
                 <a href="#" className="hover:text-brand-terracotta transition-colors"><Instagram size={18} strokeWidth={1.5} /></a>
                 <a href="#" className="hover:text-brand-terracotta transition-colors"><Linkedin size={18} strokeWidth={1.5} /></a>
                 {/* Generic SVG for Pinterest as lucide-react doesn't have it natively */}
                 <a href="#" className="hover:text-brand-terracotta transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="8" x2="12" y2="21" />
                      <path d="M12 8c0-3.3 2.7-6 6-6s6 2.7 6 6c0 3.1-2.4 5.7-5.5 6h-1" />
                    </svg>
                 </a>
               </div>
               <p className="opacity-60 normal-case">© 2026 Artisteak Jepara</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.div className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        (scrolled || !isDarkHeroPage) ? "-translate-y-8" : "translate-y-0"
      }`}>
        {/* Top Announcement Bar (Teracotta / Orange) */}
        <div className="bg-brand-terracotta text-white py-2 px-1 relative z-[60] overflow-hidden">
          <div className="whitespace-nowrap flex gap-sp-12 animate-marquee font-bold text-[10px] tracking-[0.2em] uppercase">
            <span className="flex items-center gap-2 shrink-0">
               <span className="w-1.5 h-1.5 bg-white rounded-none" /> 
               Architectural Bespoke Furniture — From Jepara to the World
            </span>
            <span className="flex items-center gap-2 shrink-0">
               <span className="w-1.5 h-1.5 bg-white rounded-none" /> 
               Sustainability Certified Solid Teak 100%
            </span>
            {/* Duplicates for seamless loop */}
            <span className="flex items-center gap-2 shrink-0">
               <span className="w-1.5 h-1.5 bg-white rounded-none" /> 
               Architectural Bespoke Furniture — From Jepara to the World
            </span>
            <span className="flex items-center gap-2 shrink-0">
               <span className="w-1.5 h-1.5 bg-white rounded-none" /> 
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
              <span className={`text-[10px] tracking-[0.2em] font-medium mt-1 uppercase ${(scrolled || !isDarkHeroPage) ? "text-brand-text-muted" : "text-white/70"}`}>Jepara</span>
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
              <span className={`text-[10px] uppercase tracking-widest font-semibold hidden sm:inline ${(scrolled || !isDarkHeroPage) ? "text-brand-text group-hover:text-white" : "text-white group-hover:text-brand-dark-bg"}`}>Menu</span>
              <Menu size={16} strokeWidth={1.5} className={(scrolled || !isDarkHeroPage) ? "text-brand-text group-hover:text-white" : "text-white group-hover:text-brand-dark-bg"} />
            </button>
          </div>
        </nav>
      </motion.div>
    </>
  );
}

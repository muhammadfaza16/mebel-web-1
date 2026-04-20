"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Pages that start with a dark hero section
  const isDarkHeroPage = pathname === "/" || pathname === "/catalog" || pathname === "/about";

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
            
            <nav className="flex-1 flex flex-col justify-center gap-sp-2">
               {navLinks.map((link, i) => (
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
                      <span className="text-[10px] pb-2 text-brand-text-muted">0{i+1}</span>
                      <span className="text-4xl md:text-5xl lg:text-7xl font-serif text-brand-text hover:text-brand-terracotta hover:italic transition-colors duration-300 block">{link.name}</span>
                    </Link>
                 </motion.div>
               ))}
            </nav>
            
            <div className="pt-sp-4 flex justify-between items-end text-subheading">
               <p className="opacity-60">Instagram / LinkedIn / Pinterest</p>
               <p className="opacity-60">© 2026 Artisteak Jepara</p>
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
          <div className={`flex gap-sp-4 items-center text-subheading ${(scrolled || !isDarkHeroPage) ? "" : "text-white"}`}>
            <Link href="/catalog" className={`hidden md:inline cursor-pointer hover:text-brand-terracotta transition-colors ${(scrolled || !isDarkHeroPage) ? "text-brand-text-muted" : "text-white"}`}>Catalog</Link>
            <Link href="/custom-order" className={`hidden md:inline cursor-pointer hover:text-brand-terracotta transition-colors ${(scrolled || !isDarkHeroPage) ? "text-brand-text-muted" : "text-white"}`}>Custom Order</Link>
            <Link href="/about" className={`hidden md:inline cursor-pointer hover:text-brand-terracotta transition-colors ${(scrolled || !isDarkHeroPage) ? "text-brand-text-muted" : "text-white"}`}>About</Link>
            
            <button 
              onClick={() => setIsOpen(true)}
              className={`w-10 h-10 rounded-none border flex items-center justify-center hover:bg-brand-text hover:text-white transition-all cursor-pointer ml-2 ${(scrolled || !isDarkHeroPage) ? "border-brand-text/20" : "border-white/30"}`}
            >
              <Menu size={18} strokeWidth={1.5} className={(scrolled || !isDarkHeroPage) ? "text-brand-text" : "text-white"} />
            </button>
          </div>
        </nav>
      </motion.div>
    </>
  );
}

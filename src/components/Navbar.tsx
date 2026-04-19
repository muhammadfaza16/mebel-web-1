"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: 'Koleksi', href: '/koleksi' },
    { name: 'Studio', href: '/studio' },
    { name: 'Material', href: '/material' },
    { name: 'Jurnal', href: '/jurnal' },
    { name: 'Kontak', href: '/kontak' },
  ];

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-charcoal text-bone flex flex-col p-gr-6 lg:p-gr-8"
          >
            <div className="flex justify-between items-center mb-gr-8">
               <Link href="/" onClick={() => setIsOpen(false)} className="cursor-pointer">
                 <h1 className="text-gr-4 font-serif font-medium tracking-tighter text-white m-0">KAYU MODERN</h1>
               </Link>
               <button 
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-charcoal transition-all cursor-pointer"
               >
                  <X size={18} />
               </button>
            </div>
            
            <nav className="flex-1 flex flex-col justify-center gap-gr-4">
               {navLinks.map((link, i) => (
                 <motion.div 
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + (i * 0.1) }}
                  className="group cursor-pointer overflow-hidden"
                 >
                    <Link 
                      href={link.href} 
                      onClick={() => setIsOpen(false)}
                      className="block"
                    >
                      <span className="text-[0.55rem] tracking-[0.5em] text-gold-muted block mb-2">0{i+1}</span>
                      <span className="text-4xl md:text-6xl lg:text-7xl font-serif uppercase tracking-tighter hover:italic hover:pl-gr-4 transition-all duration-500 block">{link.name}</span>
                    </Link>
                 </motion.div>
               ))}
            </nav>
            
            <div className="pt-gr-6 border-t border-white/5 flex justify-between items-end">
               <p className="text-[0.6rem] tracking-[0.4em] opacity-40 uppercase">Instagram / LinkedIn / Pinterest</p>
               <p className="text-[0.6rem] tracking-[0.4em] opacity-40 uppercase">© 2026</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <nav className={`fixed top-0 left-0 w-full z-50 px-gr-5 py-gr-4 flex justify-between items-center transition-all duration-700 ${
        scrolled ? "sticky-nav-scrolled py-gr-3" : "mix-blend-difference text-white py-gr-4"
      }`}>
        <Link href="/" className="cursor-pointer">
          <h1 className="text-gr-4 font-serif font-medium tracking-tighter m-0">KAYU MODERN</h1>
        </Link>
        <div className="flex gap-gr-6 items-center text-[0.6rem] tracking-[0.3em] font-bold uppercase transition-all">
          <Link href="/koleksi" className="hidden md:inline cursor-pointer hover:text-gold-muted transition-colors">Koleksi</Link>
          <Link href="/studio" className="hidden md:inline cursor-pointer hover:text-gold-muted transition-colors">Studio</Link>
          <button 
            onClick={() => setIsOpen(true)}
            className={`w-10 h-10 rounded-full border flex items-center justify-center hover:bg-charcoal hover:text-white transition-all cursor-pointer ${
              scrolled ? "border-charcoal/10" : "border-white/20"
            }`}
          >
            <Menu size={18} />
          </button>
        </div>
      </nav>
    </>
  );
}

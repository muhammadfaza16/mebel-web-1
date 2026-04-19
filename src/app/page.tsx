"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Menu, Trees, Hammer, Sparkles } from "lucide-react";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <main ref={containerRef} className="relative bg-bone selection:bg-terracotta-vibrant selection:text-white">
      {/* Navigation - Golden Ratio Spacing */}
      <nav className="fixed top-0 left-0 w-full z-50 px-gr-5 py-gr-4 flex justify-between items-center mix-blend-difference text-white">
        <h1 className="text-gr-4 font-syne tracking-tighter leading-none m-0">KAYU.</h1>
        <div className="flex gap-gr-4 items-center">
          <span className="hidden md:inline font-medium tracking-tight">ENQUIRE FOR BESPOKE</span>
          <div className="w-gr-6 h-gr-6 rounded-full bg-white flex items-center justify-center text-emerald-deep">
            <Menu size={20} />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section 
        style={{ scale: heroScale, opacity: heroOpacity }}
        className="relative h-screen flex flex-col justify-center items-center overflow-hidden px-gr-4"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl">
          <motion.h1 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-syne text-[clamp(5rem,20vw,15rem)] leading-[0.8] tracking-tighter text-emerald-vibrant flex flex-col items-center"
          >
            <span>KAYU</span>
            <span className="text-terracotta-deep -mt-4 ml-gr-6">MODERN</span>
          </motion.h1>
        </div>

        <motion.div 
          initial={{ scale: 0.8, opacity: 0, rotate: -15 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute right-gr-4 top-gr-8 w-gr-8 h-gr-8 md:w-[30vw] md:h-[30vw] pointer-events-none"
        >
          <Image 
            src="/assets/doodle-leaf.png" 
            alt="Artisan Leaf" 
            fill 
            className="object-contain"
          />
        </motion.div>

        <div className="absolute bottom-gr-5 left-gr-5 max-w-sm">
          <p className="text-gr-2 font-medium leading-tight">
            Modern Indonesian Heritage Furniture. <br />
            Crafted with <span className="text-terracotta-vibrant italic">Golden Ratio</span> precision.
          </p>
        </div>
      </motion.section>

      {/* Features - Vibrant Emerald Section */}
      <section className="relative py-gr-8 bg-emerald-deep text-bone px-gr-5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-gr-6 items-center">
          <div className="space-y-gr-4">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-gr-2 px-gr-3 py-gr-1 rounded-full border border-bone/20 text-emerald-vibrant"
            >
              <Trees size={16} />
              <span className="text-sm font-bold tracking-widest uppercase">The Origin</span>
            </motion.div>
            <h2 className="font-syne text-gr-6 leading-none">SELECTION #04: <br /> AGED JATI</h2>
            <p className="text-bone/80 text-lg max-w-md">
              Sourced from sustainable Perhutani reserves. Aged for 40 years to achieve the perfect density and moisture balance.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-emerald-vibrant text-emerald-deep px-gr-5 py-gr-3 rounded-full font-bold flex items-center gap-gr-2 group"
            >
              VIEW COLLECTION 
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </div>
          
          <div className="relative aspect-[4/5] bg-emerald-vibrant/10 rounded-gr-4 overflow-hidden group border border-bone/10">
            <Image 
              src="/assets/product-jati.png" 
              alt="Jati Table" 
              fill 
              className="object-contain p-gr-5 group-hover:scale-110 transition-transform duration-700"
            />
            {/* Doodle Overlay */}
            <div className="absolute top-gr-4 right-gr-4 w-gr-6 h-gr-6 animate-pulse opacity-50">
              <Sparkles className="text-terracotta-vibrant" />
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship - Vibrant Terracotta Section */}
      <section className="py-gr-8 bg-bone px-gr-5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-gr-4 mb-gr-6">
            <h2 className="font-syne text-gr-7 text-indigo-deep leading-[0.9]">
              THE ART <br /> OF JOINERY
            </h2>
            <div className="max-w-xs text-right">
              <p className="font-bold text-terracotta-deep">01 / HAND-CHISELED</p>
              <p className="text-sm">Mortise and tenon joints that last for generations.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gr-5">
            {[
              { icon: Trees, label: "SUSTAINABLE", color: "bg-emerald-vibrant" },
              { icon: Hammer, label: "ARTISANAL", color: "bg-terracotta-vibrant" },
              { icon: Sparkles, label: "PRECISE", color: "bg-indigo-vibrant" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className={`${item.color} p-gr-5 rounded-gr-4 h-[300px] flex flex-col justify-between text-white group cursor-pointer`}
              >
                <item.icon size={48} className="group-hover:rotate-12 transition-transform" />
                <div>
                  <h4 className="font-syne text-gr-4">{item.label}</h4>
                  <div className="w-0 group-hover:w-full h-1 bg-white transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Doodle Banner */}
          <div className="mt-gr-7 relative h-gr-8 bg-indigo-deep rounded-gr-4 overflow-hidden flex items-center justify-around">
            <div className="absolute inset-0 opacity-10 bg-[url('/assets/doodle-tools.png')] bg-repeat bg-center" />
            <span className="relative font-syne text-gr-4 text-indigo-vibrant animate-pulse">CRAFTED WITH SOUL</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-deep text-bone py-gr-6 px-gr-5 border-t border-bone/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-gr-4">
          <p className="font-syne text-gr-2">KAYU MODERN.</p>
          <div className="flex gap-gr-4 text-xs font-bold tracking-widest uppercase opacity-60">
            <span>Instagram</span>
            <span>LinkedIn</span>
            <span>Contact</span>
          </div>
          <p className="text-xs opacity-40">© 2026 KAYU MODERN CRAFT</p>
        </div>
      </footer>
    </main>
  );
}

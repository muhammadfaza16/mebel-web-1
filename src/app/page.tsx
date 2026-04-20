"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-[95vh] w-full flex items-center overflow-hidden">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 z-0 bg-brand-dark-bg">
          <Image
            src="/assets/artisteak_workshop_hero.png"
            alt="Teak workshop in Jepara"
            fill
            className="object-cover opacity-60"
            priority
          />
          {/* Gradient Overlay for Text Contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark-bg/80 via-brand-dark-bg/40 to-transparent" />
        </div>
        {/* Content */}
        <div className="relative z-10 w-full px-4 md:px-sp-6 lg:px-sp-12 mt-16">
          <div className="max-w-3xl">
            <span className="text-[10px] tracking-widest text-white/90 mb-6 uppercase flex items-center gap-2 font-medium">
              <span className="w-1.5 h-1.5 bg-brand-terracotta rounded-full animate-pulse shadow-[0_0_8px_rgba(210,84,41,0.6)]" /> Jepara, Indonesia
            </span>
            <h1 className="text-white mb-sp-3 leading-[1.05] drop-shadow-lg">
              Furniture <br /> Built to <br /> Last Centuries.
            </h1>
            <p className="text-white/90 text-lg mb-sp-4 max-w-md font-light">
              Handcrafted teak furniture, made by master artisans in Jepara since 1998.
            </p>
            <Link href="/catalog" className="inline-flex items-center gap-3 bg-brand-terracotta text-white px-8 py-4 text-xs font-semibold tracking-widest uppercase hover:bg-white hover:text-brand-terracotta transition-colors duration-300">
              Explore Collection <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* MANIFESTO / PILL IMAGES SECTION (Refined Ethos) */}
      <section className="py-sp-12 md:py-sp-16 px-4 md:px-sp-6 lg:px-sp-12 bg-brand-bg relative overflow-hidden flex items-center justify-center min-h-[60vh]">
        {/* Background Pattern Watermark - Fixed Scale */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-serif font-bold text-brand-text/[0.03] select-none pointer-events-none transform -rotate-6">
           JPR
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-sp-6"
          >
            <span className="text-[10px] tracking-[0.3em] uppercase text-brand-terracotta block font-bold">· Our Ethos</span>
          </motion.div>

          <h2 className="text-brand-text leading-[1.2] text-4xl md:text-5xl lg:text-6xl tracking-tight">
            Furniture isn't just what occupies a 
            <span className="italic font-serif text-brand-text/80"> room</span>, 
            it’s how you shape the <span className="text-brand-terracotta italic text-5xl md:text-7xl">memory</span> of the space it lives in.
          </h2>

          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
             className="mt-sp-8"
          >
            <div className="h-px w-12 bg-brand-terracotta/40 mx-auto mb-sp-4" />
            <p className="text-lg md:text-xl text-brand-text font-light max-w-2xl mx-auto leading-relaxed">
              We seamlessly blend Javanese heritage with contemporary architectural lines, crafting not for the season, but for the century.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FEATURED COLLECTIONS (Polished Bento Grid) */}
      <section className="py-sp-12 px-4 md:px-sp-6 lg:px-sp-12 bg-brand-surface border-t border-brand-text/5 text-brand-text">
        <div className="flex justify-between items-center mb-sp-8 border-b border-brand-text/10 pb-4">
          <h3 className="m-0 text-3xl">Featured Collections</h3>
          <Link href="/catalog" className="text-[10px] font-bold tracking-widest uppercase hover:text-brand-terracotta transition-colors flex items-center gap-2">
            Explore All <ArrowRight size={14} />
          </Link>
        </div>
        
        {/* Simplified & Standardized Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-sp-2 md:gap-sp-3 h-auto md:h-[600px]">
          {/* Main Large Item */}
          <Link href="/catalog/lounge" className="md:col-span-8 card-hard relative group h-[350px] md:h-full cursor-pointer block overflow-hidden border-brand-text/10">
             <div className="absolute inset-0 bg-brand-dark-bg/20 group-hover:bg-brand-dark-bg/0 transition-colors duration-700 z-10" />
             <Image src="/assets/artisteak_workshop_hero.png" alt="Lounge" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
             <div className="absolute bottom-6 left-6 z-20">
                <span className="bg-brand-bg text-brand-text px-3 py-1 text-[9px] uppercase font-bold tracking-[0.2em] mb-2 inline-block">Living space</span>
                <h4 className="text-white text-3xl m-0 drop-shadow-sm">The Kalpataru Lounge</h4>
             </div>
             <div className="absolute top-6 right-6 z-20 w-10 h-10 bg-brand-terracotta text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
               <ArrowRight size={18} />
             </div>
          </Link>
          
          {/* Right Stacked Items */}
          <div className="md:col-span-4 flex flex-col gap-sp-2 md:gap-sp-3">
             <Link href="/catalog/heritage-dining" className="card-hard flex-2 relative group p-6 flex flex-col justify-end cursor-pointer overflow-hidden border-brand-text/10 bg-brand-dark-bg">
                <Image src="/assets/artisteak_artisan_hands.png" alt="Dining" fill className="object-cover opacity-50 group-hover:opacity-70 transition-all duration-700" />
                <div className="relative z-20">
                  <span className="bg-brand-terracotta text-white px-3 py-1 text-[9px] uppercase font-bold tracking-[0.2em] mb-2 inline-block">Dining</span>
                   <h4 className="text-white text-xl m-0">Heritage Table</h4>
                </div>
             </Link>
             
             <Link href="/catalog" className="card-hard flex-1 p-6 flex flex-col justify-center relative overflow-hidden group border-brand-text/10 bg-brand-bg">
                <div className="relative z-20">
                  <span className="text-brand-terracotta text-[9px] uppercase font-bold tracking-widest mb-1 block">New Arrival</span>
                  <h4 className="text-brand-text text-xl m-0 leading-tight">Masterpiece<br/>Edition 2026</h4>
                  <div className="mt-4 text-[10px] font-bold uppercase tracking-widest border-b border-brand-text w-fit pb-1 group-hover:text-brand-terracotta group-hover:border-brand-terracotta transition-colors">
                    Explore
                  </div>
                </div>
                <div className="absolute -right-4 -bottom-4 text-7xl font-serif text-brand-text/[0.03] transform -rotate-12 group-hover:rotate-0 transition-transform duration-700">JPR</div>
             </Link>
          </div>
        </div>
      </section>

      {/* HERITAGE & SCALE (Split layout) */}
      <section className="bg-brand-bg">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image Left */}
          <div className="h-[500px] lg:h-auto bg-brand-terracotta relative flex items-center justify-center group overflow-hidden">
             <Image src="/assets/artisteak_teak_grain_detail.png" alt="Wood texture" fill className="object-cover opacity-30 mix-blend-color-burn group-hover:scale-105 transition-transform duration-1000" />
             <div className="z-10 p-12 max-w-md text-white text-center">
               <h2 className="text-4xl md:text-5xl mb-6">Crafted by generations.</h2>
               <p className="text-white/80 text-lg leading-relaxed">
                 Every joint tells a story of absolute precision. Every golden grain is an authentic map of time.
               </p>
             </div>
          </div>
          
          {/* Stats Right */}
          <div className="bg-brand-dark-bg text-white py-sp-8 px-8 lg:px-sp-12 flex flex-col justify-center">
             <span className="text-[10px] font-medium tracking-widest text-white/50 uppercase mb-sp-6 block">· Our Scale</span>
             
             <div className="flex flex-col">
                <div className="border-b border-white/10 pb-6 mb-6">
                  <h1 className="text-brand-terracotta mb-2">1998</h1>
                  <p className="text-brand-dark-text m-0 uppercase tracking-widest text-xs font-semibold">Established Year</p>
                </div>
                <div className="border-b border-white/10 pb-6 mb-6">
                  <h1 className="text-white mb-2">200+</h1>
                  <p className="text-brand-dark-text m-0 uppercase tracking-widest text-xs font-semibold">Artisan Partners</p>
                </div>
                <div className="border-b border-white/10 pb-6 mb-6">
                  <h1 className="text-white mb-2">40+</h1>
                  <p className="text-brand-dark-text m-0 uppercase tracking-widest text-xs font-semibold">Countries Shipped</p>
                </div>
                <div className="pb-4">
                  <h1 className="text-white mb-2">B2B / B2C</h1>
                  <p className="text-brand-dark-text m-0 uppercase tracking-widest text-xs font-semibold">Market Focus</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* THE ARTISTEAK STANDARD (Numbered List) */}
      <section className="py-sp-12 px-4 md:px-sp-6 lg:px-sp-12 bg-brand-surface">
        <div className="max-w-5xl mx-auto">
          <span className="text-[10px] font-medium uppercase tracking-widest text-brand-text-muted mb-sp-6 block text-center md:text-left">· The Artisteak Standard</span>
          
          <div className="flex flex-col">
            {/* Item 1 */}
            <div className="grid grid-cols-1 md:grid-cols-12 border-t border-brand-text/10 py-sp-4 gap-4 md:gap-8 hover:bg-brand-bg transition-colors p-4 -mx-4 rounded-md">
               <div className="md:col-span-2">
                  <span className="text-5xl font-serif text-brand-terracotta/40 italic">01</span>
               </div>
               <div className="md:col-span-8 flex flex-col justify-center">
                  <h4 className="text-2xl mb-3 text-brand-text">Certified Teak Procurement</h4>
                  <p className="max-w-xl text-brand-text-muted">Every slab of wood we use is exclusively sourced from Perhutani (Indonesian State Forestry Enterprise), ensuring a 100% legal, sustainable, and traceable supply chain. We only select Grade A-B mature teak for unparalleled strength.</p>
               </div>
            </div>
            
            {/* Item 2 */}
            <div className="grid grid-cols-1 md:grid-cols-12 border-t border-brand-text/10 py-sp-4 gap-4 md:gap-8 hover:bg-brand-bg transition-colors p-4 -mx-4 rounded-md">
               <div className="md:col-span-2">
                  <span className="text-5xl font-serif text-brand-terracotta/40 italic">02</span>
               </div>
               <div className="md:col-span-8 flex flex-col justify-center">
                  <h4 className="text-2xl mb-3 text-brand-text">Master Joinery Standards</h4>
                  <p className="max-w-xl text-brand-text-muted">We reject modern shortcuts. Our pieces rely on traditional mortise, tenon, and dovetail joints perfected over centuries by Jepara craftsmen. This guarantees structural integrity that outlasts screws and glue.</p>
               </div>
            </div>
            
            {/* Item 3 */}
            <div className="grid grid-cols-1 md:grid-cols-12 border-t border-brand-text/10 border-b py-sp-4 gap-4 md:gap-8 hover:bg-brand-bg transition-colors p-4 -mx-4 rounded-md mb-8">
               <div className="md:col-span-2">
                  <span className="text-5xl font-serif text-brand-terracotta/40 italic">03</span>
               </div>
               <div className="md:col-span-8 flex flex-col justify-center">
                  <h4 className="text-2xl mb-3 text-brand-text">International Compliance</h4>
                  <p className="max-w-xl text-brand-text-muted">Our finishing processes meet strict US and EU VOC-emission standards. Furthermore, all goods undergo rigorous V-Legal verification and specialized moisture-content kilning to survive diverse global climates without cracking.</p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* THE JOURNAL INSIGHTS */}
      <section className="py-sp-12 px-4 md:px-sp-6 lg:px-sp-12 bg-brand-bg border-t border-brand-text/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-end mb-sp-8">
           <div>
              <span className="text-[10px] font-medium tracking-widest text-brand-text-muted uppercase mb-4 block">· Insights & Education</span>
              <h2 className="text-4xl md:text-5xl text-brand-text leading-tight">The Journal.</h2>
           </div>
           <Link href="/journal" className="hidden md:inline-flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest border-b border-brand-text pb-1 hover:text-brand-terracotta hover:border-brand-terracotta transition-colors">
              Read All Articles <ArrowRight size={14} />
           </Link>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
           {/* Featured Article 1 */}
           <Link href="/journal/anatomy-of-javanese-teak" className="group block">
              <div className="relative h-64 md:h-80 w-full mb-4 card-hard overflow-hidden">
                 <div className="absolute inset-0 bg-brand-dark-bg/5 group-hover:bg-transparent transition-colors z-10" />
                 <Image src="/assets/artisteak_teak_grain_detail.png" alt="Teak Grain" fill className="object-cover opacity-90 mix-blend-multiply group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
              </div>
              <span className="text-[9px] uppercase tracking-widest text-brand-terracotta font-bold mb-2 block">Materials</span>
              <h3 className="text-2xl text-brand-text group-hover:text-brand-terracotta transition-colors mb-2">The Anatomy of Javanese Teak: Why Age Matters</h3>
              <p className="text-sm text-brand-text-muted line-clamp-2">Discover why we strictly source Grade-A mature Tectona Grandis from regulated plantations.</p>
           </Link>

           {/* Featured Article 2 */}
           <Link href="/journal/science-mortise-tenon" className="group block">
              <div className="relative h-64 md:h-80 w-full mb-4 card-hard overflow-hidden">
                 <div className="absolute inset-0 bg-brand-dark-bg/5 group-hover:bg-transparent transition-colors z-10" />
                 <Image src="/assets/artisteak_artisan_hands.png" alt="Joinery" fill className="object-cover opacity-90 mix-blend-multiply group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
              </div>
              <span className="text-[9px] uppercase tracking-widest text-brand-terracotta font-bold mb-2 block">Craftsmanship</span>
              <h3 className="text-2xl text-brand-text group-hover:text-brand-terracotta transition-colors mb-2">Mastering Time: The Science of Mortise & Tenon</h3>
              <p className="text-sm text-brand-text-muted line-clamp-2">Screws strip. Glue degrades. We reject modern shortcuts in favor of traditional engineering.</p>
           </Link>
        </div>
        
        <Link href="/journal" className="md:hidden mt-8 inline-flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest border-b border-brand-text pb-1 hover:text-brand-terracotta transition-colors">
           Read All Articles <ArrowRight size={14} />
        </Link>
      </section>
      
    </main>
  );
}

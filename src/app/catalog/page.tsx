"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRight, ChevronDown, Filter } from "lucide-react";

// Mock Product Data
const products = [
  { id: "heritage-dining", name: "Heritage Dining Table", category: "Dining", material: "Solid Teak", price: "By Inquiry", img: "/assets/artisteak_workshop_hero.png" },
  { id: "kalpataru-lounge", name: "The Kalpataru Lounge", category: "Living", material: "Teak & Rattan", price: "By Inquiry", img: "/assets/artisteak_teak_grain_detail.png" },
  { id: "majapahit-bed", name: "Majapahit Platform Bed", category: "Bedroom", material: "Solid Trembesi", price: "By Inquiry", img: "/assets/artisteak_artisan_hands.png", isNew: true },
  { id: "senayan-chair", name: "Senayan Accent Chair", category: "Living", material: "Teak & Leather", price: "By Inquiry", img: "/assets/artisteak_teak_grain_detail.png" },
  { id: "batavia-cabinet", name: "Batavia Display Cabinet", category: "Storage", material: "Mahogany", price: "By Inquiry", img: "/assets/artisteak_workshop_hero.png" },
  { id: "bali-stool", name: "Bali Counter Stool", category: "Dining", material: "Solid Teak", price: "By Inquiry", img: "/assets/artisteak_artisan_hands.png" },
];

export default function CatalogPage() {
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Framer Motion Variants for Movement & Hierarchy
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <main className="min-h-screen pt-0 pb-sp-12">
      {/* HERO STRIP (Contrast & Emphasis) */}
      <section className="bg-brand-dark-bg text-brand-dark-text pt-sp-16 pb-sp-8 px-4 md:px-sp-6 lg:px-sp-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
          <span className="text-[10px] font-medium tracking-widest text-brand-text-muted uppercase mb-4 block">· Complete Collection</span>
          <h1 className="text-4xl md:text-6xl text-white mb-0 leading-tight">Archetypes of<br />Javanese modernism.</h1>
        </motion.div>
      </section>

      {/* FILTER & GRID SPLIT (Proportion & Alignment) */}
      <section className="border-t border-brand-text/10">
        <div className="flex flex-col lg:flex-row min-h-screen">
          
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden p-4 border-b border-brand-text/10 flex justify-between items-center bg-brand-bg sticky top-[64px] z-30">
            <span className="font-serif italic text-lg">Filters</span>
            <button onClick={() => setMobileFilterOpen(!mobileFilterOpen)} className="p-2 border border-brand-text/20 rounded-none text-brand-text">
               <Filter size={18} />
            </button>
          </div>

          {/* SIDEBAR FILTER (Hierarchy & Pattern) */}
          <aside className={`lg:w-64 flex-shrink-0 border-r border-brand-text/10 bg-brand-bg transition-all duration-300 ${mobileFilterOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="sticky top-24 p-sp-4 flex flex-col gap-sp-6">
              
              {/* Filter Group: Room */}
              <div>
                <h4 className="text-xs uppercase tracking-widest font-medium mb-sp-3 text-brand-text">Rooms</h4>
                <div className="flex flex-col gap-3">
                  {['Living', 'Dining', 'Bedroom', 'Workspace'].map((room) => (
                    <label key={room} className="flex items-center gap-3 cursor-pointer group">
                      <div className="w-4 h-4 border border-brand-text/30 flex items-center justify-center transition-colors group-hover:border-brand-terracotta">
                        {room === 'Living' && <div className="w-2 h-2 bg-brand-terracotta"></div>}
                      </div>
                      <span className="text-sm text-brand-text-muted group-hover:text-brand-text transition-colors">{room}</span>
                    </label>
                  ))}
                </div>
              </div>

              <hr className="my-0 border-brand-text/10" />

              {/* Filter Group: Material */}
              <div>
                <h4 className="text-xs uppercase tracking-widest font-medium mb-sp-3 text-brand-text">Material</h4>
                <div className="flex flex-col gap-3">
                  {['Solid Teak', 'Trembesi', 'Mahogany', 'Mindi', 'Rattan Weave'].map((mat) => (
                    <label key={mat} className="flex items-center gap-3 cursor-pointer group">
                      <div className="w-4 h-4 border border-brand-text/30 flex items-center justify-center transition-colors group-hover:border-brand-terracotta" />
                      <span className="text-sm text-brand-text-muted group-hover:text-brand-text transition-colors">{mat}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <hr className="my-0 border-brand-text/10" />

              {/* Slider Representation */}
              <div>
                <h4 className="text-xs uppercase tracking-widest font-medium mb-sp-3 text-brand-text">Price Range</h4>
                <div className="relative h-1 bg-brand-text/10 w-full mb-4">
                   <div className="absolute left-[20%] right-[30%] h-full bg-brand-text"></div>
                   <div className="absolute left-[20%] -mt-1 w-3 h-3 bg-brand-text border border-brand-bg" />
                   <div className="absolute right-[30%] -mt-1 w-3 h-3 bg-brand-text border border-brand-bg" />
                </div>
                <div className="flex justify-between text-xs text-brand-text-muted">
                   <span>IDR 5M</span>
                   <span>IDR 50M+</span>
                </div>
              </div>

            </div>
          </aside>

          {/* PRODUCT GRID (Balance & Variety & Movement) */}
          <div className="flex-1 bg-brand-surface p-4 md:p-sp-6 lg:p-sp-8">
            
            {/* Sort Bar */}
            <div className="flex justify-between items-center mb-sp-6 pb-2 border-b border-brand-text/10">
               <span className="text-xs text-brand-text-muted">Showing 1-6 of 24 pieces</span>
               <div className="flex items-center gap-4">
                  <span className="text-xs uppercase tracking-widest text-brand-text-muted">Sort by</span>
                  <div className="flex items-center gap-2 cursor-pointer pb-1 border-b border-brand-text text-sm">
                    Featured <ChevronDown size={14} />
                  </div>
               </div>
            </div>

            {/* Grid */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-sp-2 md:gap-sp-3"
            >
              {products.map((p, i) => (
                <motion.div key={p.id} variants={itemVariants}>
                  <Link href={`/catalog/${p.id}`} className="block card-hard bg-brand-bg group cursor-pointer relative h-full flex flex-col">
                    
                    {/* Badge */}
                    {p.isNew && (
                      <div className="absolute top-3 right-3 z-20 bg-brand-terracotta text-white px-2 py-1 text-[9px] uppercase tracking-widest">
                        New Edition
                      </div>
                    )}
                    
                    {/* Image Area */}
                    <div className="relative h-64 md:h-80 w-full overflow-hidden border-b border-brand-text/5">
                      <div className="absolute inset-0 bg-brand-dark-bg/5 group-hover:bg-transparent transition-colors z-10" />
                      {/* Image hover scale for Movement */}
                      <Image 
                        src={p.img} 
                        alt={p.name} 
                        fill 
                        className="object-cover opacity-80 mix-blend-multiply group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" 
                      />
                    </div>
                    
                    {/* Text Details */}
                    <div className="p-5 flex flex-col flex-1">
                       <span className="text-[10px] uppercase tracking-widest text-brand-text-muted mb-2 font-medium">{p.category}</span>
                       <h4 className="text-xl md:text-2xl mb-1 text-brand-text group-hover:text-brand-terracotta transition-colors">{p.name}</h4>
                       <span className="text-xs text-brand-text-muted mb-4 block italic font-serif opacity-80">{p.material}</span>
                       
                       <div className="mt-auto pt-4 border-t border-brand-text/10 flex justify-between items-center w-full">
                          <span className="text-sm font-medium">{p.price}</span>
                          <span className="w-8 h-8 flex items-center justify-center border border-brand-text/20 group-hover:bg-brand-text group-hover:text-brand-bg transition-colors">
                            <ArrowRight size={14} />
                          </span>
                       </div>
                    </div>
                  </Link>
                </motion.div>
              ))}

              {/* Call to Custom Order Card (Variety / Emphasis) */}
              <motion.div variants={itemVariants} className="col-span-1 sm:col-span-2 xl:col-span-1">
                 <div className="h-full border border-dashed border-brand-text/30 bg-transparent flex flex-col items-center justify-center p-sp-6 text-center group cursor-pointer min-h-[300px] hover:bg-brand-text/5 transition-colors">
                    <div className="w-12 h-12 rounded-full border border-brand-text/20 flex items-center justify-center mb-sp-4 text-brand-text group-hover:bg-brand-terracotta group-hover:text-white group-hover:border-transparent transition-all">
                      <span className="text-xl font-light">+</span>
                    </div>
                    <h4 className="text-2xl mb-2">Bespoke Design</h4>
                    <p className="text-sm text-brand-text-muted max-w-[200px] mx-auto mb-sp-4">Have an architectural vision? We can craft it.</p>
                    <Link href="/custom-order" className="text-[10px] uppercase tracking-widest border-b border-brand-text pb-1 hover:text-brand-terracotta transition-colors">
                      Start Custom Order
                    </Link>
                 </div>
              </motion.div>
            </motion.div>
            
            {/* Pagination */}
            <div className="flex justify-center items-center mt-sp-12 gap-2">
               <button className="w-8 h-8 flex items-center justify-center bg-brand-text text-brand-bg text-xs">1</button>
               <button className="w-8 h-8 flex items-center justify-center border border-brand-text/20 hover:border-brand-text text-xs transition-colors">2</button>
               <button className="w-8 h-8 flex items-center justify-center border border-brand-text/20 hover:border-brand-text text-xs transition-colors">3</button>
               <span className="mx-2 text-brand-text-muted">...</span>
               <button className="w-8 h-8 flex items-center justify-center border border-brand-text/20 hover:border-brand-text text-xs transition-colors"><ArrowRight size={14} /></button>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}

"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRight, ChevronDown, Filter } from "lucide-react";

import { catalogProducts as products } from "@/lib/catalog-data";

export default function CatalogPage() {
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null);

  // Derive rooms and materials from data dynamically for sustainability
  const rooms = Array.from(new Set(products.map(p => p.category)));
  const materials = Array.from(new Set(products.map(p => p.material)));

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const roomMatch = !selectedRoom || p.category === selectedRoom;
      const materialMatch = !selectedMaterial || p.material === selectedMaterial;
      return roomMatch && materialMatch;
    });
  }, [selectedRoom, selectedMaterial]);

  const clearFilters = () => {
    setSelectedRoom(null);
    setSelectedMaterial(null);
  };

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
          <span className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.4em] text-brand-text-muted uppercase mb-sp-4 block">
            <span className="w-1 h-1 bg-brand-terracotta rounded-full" />
            Complete Collection
          </span>
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
                <div className="flex justify-between items-center mb-sp-3">
                  <h4 className="flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] font-semibold text-brand-text">
                    <span className="w-1 h-1 bg-brand-terracotta rounded-full" />
                    Rooms
                  </h4>
                  {(selectedRoom || selectedMaterial) && (
                    <button 
                      onClick={clearFilters}
                      className="text-[9px] uppercase tracking-tighter text-brand-terracotta font-bold hover:underline"
                    >
                      Reset
                    </button>
                  )}
                </div>
                <div className="flex flex-col gap-3">
                  {rooms.map((room) => (
                    <label 
                      key={room} 
                      onClick={() => setSelectedRoom(selectedRoom === room ? null : room)}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <div className={`w-4 h-4 border border-brand-text/30 flex items-center justify-center transition-colors group-hover:border-brand-terracotta ${selectedRoom === room ? "border-brand-terracotta" : ""}`}>
                        {selectedRoom === room && <div className="w-2 h-2 bg-brand-terracotta"></div>}
                      </div>
                      <span className={`text-sm transition-colors ${selectedRoom === room ? "text-brand-text font-medium" : "text-brand-text-muted group-hover:text-brand-text"}`}>
                        {room}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <hr className="my-0 border-brand-text/10" />

              {/* Filter Group: Material */}
              <div>
                <h4 className="flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] font-semibold mb-sp-3 text-brand-text">
                  <span className="w-1 h-1 bg-brand-terracotta rounded-full" />
                  Material
                </h4>
                <div className="flex flex-col gap-3">
                  {materials.map((mat) => (
                    <label 
                      key={mat} 
                      onClick={() => setSelectedMaterial(selectedMaterial === mat ? null : mat)}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <div className={`w-4 h-4 border border-brand-text/30 flex items-center justify-center transition-colors group-hover:border-brand-terracotta ${selectedMaterial === mat ? "border-brand-terracotta" : ""}`}>
                        {selectedMaterial === mat && <div className="w-2 h-2 bg-brand-terracotta" />}
                      </div>
                      <span className={`text-sm transition-colors ${selectedMaterial === mat ? "text-brand-text font-medium" : "text-brand-text-muted group-hover:text-brand-text"}`}>
                        {mat}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
              
              <hr className="my-0 border-brand-text/10" />

              {/* Slider Representation */}
              <div>
                <h4 className="flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] font-semibold mb-sp-3 text-brand-text">
                  <span className="w-1 h-1 bg-brand-terracotta rounded-full" />
                  Price Range
                </h4>
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
               <span className="text-xs text-brand-text-muted">Showing {filteredProducts.length} of {products.length} pieces</span>
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
              {filteredProducts.map((p, i) => (
                <motion.div key={p.id} variants={itemVariants}>
                  <Link href={`/catalog/${p.id}`} className="block card-hard bg-brand-bg group cursor-pointer relative h-full flex flex-col">
                    
                    {/* Badge */}
                      <div className="absolute top-3 right-3 z-20 bg-brand-bg/90 backdrop-blur-sm text-brand-terracotta px-2 py-1.5 text-[10px] uppercase font-bold tracking-[0.2em] flex items-center gap-2 shadow-sm">
                        <span className="w-1 h-1 bg-current rounded-full" />
                        New Edition
                      </div>
                    
                    {/* Image Area */}
                    <div className="relative h-64 md:h-80 w-full overflow-hidden border-b border-brand-text/5 bg-brand-surface">
                      <div className="absolute inset-0 bg-brand-dark-bg/0 group-hover:bg-brand-dark-bg/5 transition-colors z-10" />
                      {/* Image hover scale for Movement */}
                      <Image 
                        src={p.images?.[0]?.src || "/assets/artisteak_workshop_hero.png"} 
                        alt={p.name} 
                        fill 
                        className="object-cover transition-all duration-700 group-hover:scale-105" 
                      />
                    </div>
                    
                    {/* Text Details */}
                    <div className="p-5 flex flex-col flex-1">
                       <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-brand-text-muted mb-3 font-semibold">
                         <span className="w-1 h-1 bg-brand-terracotta rounded-full" />
                         {p.category}
                       </span>
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
                    <Link href="/custom-order" className="text-[11px] uppercase tracking-[0.3em] font-semibold border-b border-brand-text pb-1 hover:text-brand-terracotta hover:border-brand-terracotta transition-all">
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

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowRight, ArrowLeft, Ruler } from "lucide-react";
import { getProductById } from "@/lib/catalog-data";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const product = getProductById(slug);

  const [activeTab, setActiveTab] = useState("materials");
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  // If product not found, avoid crashing
  useEffect(() => {
    if (!product) {
       router.push("/catalog");
    }
  }, [product, router]);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  if (!product) return <div className="min-h-screen bg-brand-bg flex items-center justify-center text-brand-text">Loading...</div>;

  const waMessage = encodeURIComponent(`Hello Artisteak, I am interested in inquiring about the bespoke "${product.name}". Could you provide more details?`);
  const whatsappLink = `https://wa.me/6281234567890?text=${waMessage}`;

  return (
    <main className="min-h-screen pt-24 pb-sp-12 bg-brand-bg">
      {/* BREADCRUMB (Hierarchy) */}
      <div className="px-4 md:px-sp-6 lg:px-sp-12 py-3 border-b border-brand-text/10 flex items-center gap-2 text-[10px] uppercase tracking-widest font-medium text-brand-text-muted">
         <Link href="/catalog" className="hover:text-brand-text transition-colors">Catalog</Link>
         <span>/</span>
         <span className="text-brand-text">{product.category}</span>
         <span>/</span>
         <span className="text-brand-text border-b border-brand-text pb-[1px]">{product.name}</span>
      </div>

      {/* MAIN SPLIT (Balance & Proportion) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 min-h-[70vh]">
        
        {/* LEFT: GALLERY (60%) */}
        <div className="lg:col-span-7 border-r border-brand-text/10 p-4 md:p-sp-6 lg:p-sp-8 flex flex-col gap-sp-3">
           <motion.div 
             initial={{ opacity: 0, scale: 0.98 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8 }}
             className="relative w-full aspect-square md:aspect-[4/3] bg-brand-surface card-hard group overflow-hidden"
           >
              <Image 
                src={product.images[activeImageIdx].src} 
                alt={`${product.name} - ${product.images[activeImageIdx].label}`} 
                fill 
                className="object-cover opacity-90 transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4 p-2 bg-brand-bg/80 backdrop-blur-sm shadow-sm text-xs border border-brand-text/10">
                 Hover to Zoom
              </div>
           </motion.div>
           
           {/* THUMBNAILS (Pattern & Variety) */}
           <motion.div 
              initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.1 } } }}
              className="grid grid-cols-4 gap-sp-2"
           >
             {product.images.map((thumb, i) => (
                <motion.div 
                  key={i} 
                  variants={fadeUp} 
                  onClick={() => setActiveImageIdx(i)}
                  className={`relative aspect-square bg-brand-surface card-hard cursor-pointer transition-all duration-300 ${activeImageIdx === i ? 'opacity-100 border-2 border-brand-terracotta' : 'opacity-50 hover:opacity-100'}`}
                >
                   <Image src={thumb.src} alt={thumb.label} fill className="object-cover" />
                   <span className="absolute bottom-1 left-1 bg-brand-bg/90 text-[8px] uppercase tracking-widest px-1">{thumb.label}</span>
                </motion.div>
             ))}
              <motion.div variants={fadeUp} className="relative aspect-square border border-dashed border-brand-text/20 flex items-center justify-center cursor-pointer hover:bg-brand-text/5 transition-colors">
                 <span className="text-[9px] uppercase tracking-widest text-center text-brand-text-muted">Play<br/>Video</span>
              </motion.div>
           </motion.div>
        </div>

        {/* RIGHT: INFO PANEL (40%) (Alignment & Contrast) */}
        <motion.div 
          initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="lg:col-span-5 p-4 md:p-sp-6 lg:p-sp-8 flex flex-col"
        >
           <motion.div variants={fadeUp} className="mb-sp-6">
             <span className="text-[10px] uppercase font-semibold tracking-widest text-brand-text-muted mb-2 block">{product.category}</span>
             <h1 className="text-4xl md:text-5xl text-brand-text mb-4 leading-tight">{product.name}</h1>
             <p className="text-brand-text-muted text-lg">{product.fullDescription}</p>
           </motion.div>
           
           {/* Price & Badge */}
           <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 mb-sp-6">
             <span className="text-2xl font-serif text-brand-text">{product.price}</span>
             <span className="px-3 py-1 bg-brand-terracotta text-white text-[9px] uppercase tracking-widest">Made to Order</span>
             {product.isNew && (
                <span className="px-3 py-1 border border-brand-terracotta text-brand-terracotta text-[9px] uppercase tracking-widest">New Arrival</span>
             )}
           </motion.div>

           <hr className="my-0 border-brand-text/10 mb-sp-6" />

           {/* Dimensions (Interactive input representation) */}
           <motion.div variants={fadeUp} className="mb-sp-6">
             <div className="flex justify-between items-end mb-4">
               <h4 className="text-xs uppercase tracking-widest font-medium text-brand-text m-0">Dimensions</h4>
               <span className="text-[9px] text-brand-text-muted uppercase flex items-center gap-1 cursor-pointer hover:text-brand-terracotta transition-colors">
                 <Ruler size={10} /> View Size Guide
               </span>
             </div>
             <div className="grid grid-cols-3 gap-3">
                <div className="border border-brand-text/20 p-2 relative">
                   <span className="text-[8px] text-brand-text-muted uppercase absolute top-1 left-2">Width</span>
                   <div className="text-sm font-medium mt-3 text-center">{product.dimensions.width}</div>
                </div>
                <div className="border border-brand-text/20 p-2 relative">
                   <span className="text-[8px] text-brand-text-muted uppercase absolute top-1 left-2">Depth</span>
                   <div className="text-sm font-medium mt-3 text-center">{product.dimensions.depth}</div>
                </div>
                <div className="border border-brand-text/20 p-2 relative text-brand-terracotta">
                   <span className="text-[8px] uppercase absolute top-1 left-2">Height</span>
                   <div className="text-sm font-medium mt-3 text-center">{product.dimensions.height}</div>
                </div>
             </div>
             <p className="text-[9px] italic text-brand-text-muted mt-2 font-serif text-center">Custom dimensions available upon request.</p>
           </motion.div>

           {/* Finishing Selection (Pattern) */}
           <motion.div variants={fadeUp} className="mb-sp-8">
             <h4 className="text-xs uppercase tracking-widest font-medium text-brand-text mb-4">Wood Finish</h4>
              <div className="flex gap-4 items-center">
                {product.finishes.map((finish, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2 cursor-pointer group">
                    <div className={`w-8 h-8 rounded-full ${finish.colorClass} border border-brand-text/10 flex items-center justify-center shadow-sm relative group-hover:scale-110 transition-transform`}>
                      <div className={`absolute inset-x-0 -bottom-6 text-[9px] font-medium text-center opacity-0 group-hover:opacity-100 transition-opacity ${finish.textColorClass}`}>{finish.name}</div>
                    </div>
                  </div>
                ))}
              </div>
           </motion.div>

           {/* CTAs */}
           <motion.div variants={fadeUp} className="mt-auto flex flex-col sm:flex-row gap-3 pt-6">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex-1 bg-brand-text text-brand-bg px-6 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-brand-terracotta hover:text-white transition-colors duration-300 text-center flex items-center justify-center">
                Inquire Now
              </a>
              <Link href="/custom-order" className="flex-1 border border-brand-text px-6 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-brand-surface transition-colors duration-300 text-center flex items-center justify-center">
                Custom Order
              </Link>
           </motion.div>
        </motion.div>
      </section>

      {/* BOTTOM TABS (Details, Care, Reviews) */}
      <section className="border-t border-brand-text/10">
         <div className="flex border-b border-brand-text/10 px-4 md:px-sp-6 lg:px-sp-12 overflow-x-auto">
            {['materials', 'maintenance', 'shipping', 'specifications'].map((tab) => (
               <button 
                 key={tab}
                 onClick={() => setActiveTab(tab)}
                 className={`px-6 py-5 text-[10px] uppercase font-semibold tracking-widest transition-colors whitespace-nowrap ${
                   activeTab === tab 
                   ? "border-b-2 border-brand-text text-brand-text" 
                   : "text-brand-text-muted hover:text-brand-text"
                 }`}
               >
                 {tab.replace('-', ' ')}
               </button>
            ))}
         </div>
         
         <div className="p-4 md:p-sp-6 lg:p-sp-12 min-h-[300px]">
           <AnimatePresence mode="wait">
             {activeTab === 'materials' && (
               <motion.div key="materials" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid md:grid-cols-2 gap-sp-6 max-w-5xl">
                 <div>
                   <h3 className="text-2xl mb-4 font-serif text-brand-text">The Origin of Strength</h3>
                   <p className="mb-4 text-brand-text-muted leading-relaxed">{product.tabs.materials}</p>
                 </div>
                 <div className="relative aspect-video card-hard bg-brand-surface overflow-hidden">
                   <Image src={product.images[0]?.src || "/assets/artisteak_teak_grain_detail.png"} alt="Materials" fill className="object-cover transition-transform duration-700 hover:scale-105" />
                 </div>
               </motion.div>
             )}
             
             {activeTab === 'maintenance' && (
               <motion.div key="maintenance" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-w-3xl">
                 <h3 className="text-2xl mb-4 font-serif text-brand-text">Care Instructions</h3>
                 <p className="mb-4 text-brand-text-muted leading-relaxed">{product.tabs.maintenance}</p>
               </motion.div>
             )}

             {activeTab === 'shipping' && (
               <motion.div key="shipping" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-w-3xl">
                 <h3 className="text-2xl mb-4 font-serif text-brand-text">Shipping & Delivery</h3>
                 <p className="mb-4 text-brand-text-muted leading-relaxed">{product.tabs.shipping}</p>
               </motion.div>
             )}
           </AnimatePresence>
         </div>
      </section>

      {/* RELATED PIECES */}
      <section className="py-sp-8 px-4 md:px-sp-6 lg:px-sp-12 bg-brand-dark-bg text-brand-dark-text border-t border-brand-text/10">
         <h3 className="text-2xl mb-sp-6 font-serif text-white">Curated Pairings.</h3>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
               <Link href="/catalog" key={item} className="group block cursor-pointer">
                  <div className="relative aspect-square bg-[#2C2C2A] card-hard overflow-hidden mb-3">
                     <Image src={`/assets/${item % 2 === 0 ? 'artisteak_workshop_hero' : 'artisteak_artisan_hands'}.png`} alt="Related" fill className="object-cover opacity-60 mix-blend-luminosity group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                  </div>
                  <h5 className="text-xs uppercase tracking-widest font-medium mb-1 group-hover:text-brand-terracotta transition-colors">Complementary Piece {item}</h5>
                  <span className="text-[10px] text-white/50 font-serif italic">Discover Match &rarr;</span>
               </Link>
            ))}
         </div>
      </section>
    </main>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export default function KoleksiPage() {
  const categories = ["Semua", "Warisan", "Minimalis", "Skulptural"];
  
  const products = [
    { 
      id: 1, 
      name: "Meja Leluhur (Seri 01)", 
      category: "Warisan", 
      material: "Jati Solid", 
      price: "Mulai 24.5 Juta",
      image: "/assets/jati_table_clean.png" 
    },
    { 
      id: 2, 
      name: "Konsol Ruang Hampa", 
      category: "Minimalis", 
      material: "Mahoni Arang", 
      price: "Mulai 18.2 Juta",
      image: "/assets/console-minimalist.png" 
    },
    { 
      id: 3, 
      name: "Kursi Arsitek v1", 
      category: "Skulptural", 
      material: "Trembesi", 
      price: "Mulai 12.8 Juta",
      image: "/assets/hero-lifestyle.png" // Placeholder
    },
    { 
      id: 4, 
      name: "Kabinet Ingatan", 
      category: "Warisan", 
      material: "Jati / Kuningan", 
      price: "Mulai 42.0 Juta",
      image: "/assets/jati_table_clean.png" // Placeholder
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Header Section */}
      <section className="px-gr-5 pt-[10rem] pb-gr-8 bg-bone border-b border-earth-deep/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
             <h1 className="text-gr-8 font-serif leading-none uppercase mb-gr-4">Katalog <br /> Koleksi.</h1>
             <div className="flex flex-col md:flex-row justify-between items-end gap-gr-6">
                <p className="max-w-xl text-lg text-earth-deep/80 leading-relaxed font-light">
                   Setiap seri adalah evolusi dari teknik tradisional Jepara yang disempurnakan melalui rekayasa modern. Didesain untuk melampaui tren dan waktu.
                </p>
                <div className="flex gap-gr-4 text-[0.6rem] tracking-[0.4em] font-bold uppercase overflow-x-auto pb-2 w-full md:w-auto">
                   {categories.map((cat, i) => (
                     <span key={cat} className={`cursor-pointer transition-colors ${i === 0 ? "text-terracotta-accent" : "opacity-70 hover:opacity-100"}`}>
                        {cat}
                     </span>
                   ))}
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="px-gr-5 py-gr-8 bg-bone">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gr-6">
             {products.map((product, i) => (
                <motion.div 
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group cursor-pointer"
                >
                   <div className="relative aspect-phi bg-charcoal/5 overflow-hidden mb-gr-4">
                      <Image 
                        src={product.image} 
                        alt={product.name} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                      />
                      <div className="absolute top-gr-3 right-gr-3 bg-white px-gr-3 py-gr-2 text-[0.55rem] tracking-[0.3em] font-bold uppercase shadow-xl transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                         Detail <ArrowUpRight size={12} className="inline ml-1" />
                      </div>
                   </div>
                   <div className="flex justify-between items-start">
                      <div>
                        <span className="text-[0.55rem] tracking-[0.5em] text-gold-muted font-bold uppercase block mb-1">{product.category} / {product.material}</span>
                        <h3 className="text-gr-3 leading-none uppercase font-serif group-hover:text-terracotta-accent transition-colors">{product.name}</h3>
                      </div>
                      <p className="text-[0.65rem] tracking-[0.2em] font-bold opacity-30 mt-1">{product.price}</p>
                   </div>
                </motion.div>
             ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-gr-8 pt-gr-8 border-t border-earth-deep/10 text-center"
          >
             <p className="text-[0.6rem] tracking-[0.6em] opacity-40 uppercase mb-gr-4">Sedang Mencari yang Lebih Spesifik?</p>
             <button className="bg-charcoal text-bone px-gr-6 py-gr-4 text-[0.6rem] tracking-[0.5em] font-bold uppercase hover:bg-earth-deep transition-all">Hubungi Bespoke Team</button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

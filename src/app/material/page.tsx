"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function MaterialPage() {
  const materials = [
    { 
      name: "Jati (Teak)", 
      origin: "Jawa Tengah", 
      properties: ["Kepadatan Tinggi", "Kadar Minyak Alami", "Durabilitas Abadi"],
      desc: "Standard emas dalam dunia furnitur mewah. Jati kami dipilih dari pohon berusia minimal 40 tahun untuk menjamin stabilitas serat dan kekayaan warna.",
      image: "/assets/material-jati.png"
    },
    { 
      name: "Trembesi (Suar)", 
      origin: "Jawa / Sumatera", 
      properties: ["Serat Dramatis", "Bentang Lebar", "Organik"],
      desc: "Dikenal karena alur seratnya yang spektakuler dan kemampuan untuk dipahat menjadi meja 'live edge' masif tanpa sambungan.",
      image: "/assets/hero-lifestyle.png" // Placeholder
    },
    { 
      name: "Mahoni (Mahogany)", 
      origin: "Jawa", 
      properties: ["Tekstur Halus", "Stabil", "Elegan"],
      desc: "Material pilihan untuk desain yang memerlukan detail ukiran halus dan finishing yang sangat rata (gloss/matte).",
      image: "/assets/console-minimalist.png" // Placeholder
    }
  ];

  return (
    <main className="min-h-screen bg-bone">
      {/* Header */}
      <section className="px-gr-5 pt-[10rem] pb-gr-8 border-b border-earth-deep/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
             <h1 className="text-gr-8 font-serif leading-none uppercase mb-gr-4">Perpustakaan <br /> Material.</h1>
             <p className="max-w-2xl text-lg text-earth-deep/80 leading-relaxed font-light">
                Memahami kayu adalah memahami waktu. Kami hanya menggunakan spesies yang memiliki karakter struktural dan estetika yang melampaui tren sesaat.
             </p>
          </motion.div>
        </div>
      </section>

      {/* Material Grid */}
      <section className="px-gr-5 py-gr-8">
        <div className="max-w-7xl mx-auto space-y-gr-8">
           {materials.map((mat, i) => (
             <motion.div 
               key={mat.name}
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className={`flex flex-col lg:flex-row gap-gr-8 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
             >
                <div className="flex-1 aspect-square bg-charcoal/5 relative overflow-hidden">
                   <Image 
                      src={mat.image || "/assets/technical-sketch.png"} 
                      alt={mat.name} 
                      fill 
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                   />
                </div>
                <div className="flex-1 space-y-gr-5">
                   <div>
                      <span className="text-[0.6rem] tracking-[0.6em] text-terracotta-accent font-bold uppercase mb-2 block">Origin: {mat.origin}</span>
                      <h2 className="text-gr-6 font-serif uppercase tracking-tight leading-none">{mat.name}</h2>
                   </div>
                   <p className="text-lg text-earth-deep/70 leading-relaxed font-serif">{mat.desc}</p>
                   <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 pt-gr-4">
                      {mat.properties.map(p => (
                        <li key={p} className="flex items-center gap-3 text-[0.6rem] tracking-[0.3em] font-bold uppercase">
                           <div className="w-2 h-2 bg-gold-muted rounded-full" /> {p}
                        </li>
                      ))}
                   </ul>
                </div>
             </motion.div>
           ))}
        </div>
      </section>
    </main>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function PortofolioPage() {
  const projects = [
    { title: "Residensial Menteng", partner: "Studio Arsitek A", location: "Jakarta", image: "/assets/hero-lifestyle.png" },
    { title: "Vila Uluwatu", partner: "Boutique Design B", location: "Bali", image: "/assets/journal-detail-1.png" },
    { title: "Hotel Heritage", partner: "Interior C", location: "Semarang", image: "/assets/studio-hero.png" },
    { title: "Apartemen SCBD", partner: "Design Co D", location: "Jakarta", image: "/assets/console-minimalist.png" },
  ];

  return (
    <main className="min-h-screen bg-bone">
      {/* Editorial Header */}
      <section className="px-gr-5 pt-[10rem] pb-gr-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
             <h1 className="text-gr-8 font-serif leading-none uppercase mb-gr-4">Kolaborasi <br /> & Proyek.</h1>
             <p className="max-w-2xl text-lg text-earth-deep/80 leading-relaxed font-light">
                Kami bermitra dengan arsitek dan desainer interior untuk menghadirkan solusi materialitas yang presisi bagi ruang-ruang paling istimewa.
             </p>
          </motion.div>
        </div>
      </section>

      {/* Masonry-style Grid */}
      <section className="px-gr-5 py-gr-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gr-6">
             {projects.map((proj, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`group relative overflow-hidden aspect-phi bg-charcoal/5 ${i % 3 === 0 ? 'md:col-span-1' : ''}`}
                >
                   <Image 
                      src={proj.image} 
                      alt={proj.title} 
                      fill 
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-gr-5 flex flex-col justify-end text-white">
                      <div className="flex justify-between items-end">
                         <div>
                            <span className="text-[0.55rem] tracking-[0.4em] font-bold uppercase opacity-80">{proj.partner} — {proj.location}</span>
                            <h3 className="text-gr-4 font-serif uppercase leading-none mt-2">{proj.title}</h3>
                         </div>
                         <ArrowUpRight size={24} />
                      </div>
                   </div>
                </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Partners section */}
      <section className="py-gr-8 px-gr-5 bg-charcoal text-white text-center">
         <p className="text-[0.6rem] tracking-[1em] font-bold uppercase opacity-40 mb-gr-6">Mitra Kami</p>
         <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-gr-8 opacity-20 hover:opacity-60 transition-opacity grayscale invert">
            <h4 className="text-xl font-serif">KARYA A</h4>
            <h4 className="text-xl font-serif">B-DESIGN</h4>
            <h4 className="text-xl font-serif">STUDIO C</h4>
            <h4 className="text-xl font-serif">V-ARCH</h4>
            <h4 className="text-xl font-serif">GRAHA D</h4>
         </div>
      </section>
    </main>
  );
}

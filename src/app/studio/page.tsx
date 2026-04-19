"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Hammer, MoveRight } from "lucide-react";

export default function StudioPage() {
  return (
    <main className="min-h-screen bg-bone">
      {/* Hero Section - The Atelier */}
      <section className="relative h-[85vh] flex items-end px-gr-5 pb-gr-8 overflow-hidden bg-charcoal pt-[8rem]">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          <Image 
            src="/assets/studio-hero.png" 
            alt="Kayu Modern Studio" 
            fill 
            className="object-cover"
          />
        </motion.div>
        
        <div className="relative z-10 max-w-7xl mx-auto w-full">
           <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
           >
              <span className="text-[0.6rem] tracking-[0.8em] text-gold-muted font-bold uppercase mb-gr-4 block">Pusat Rekayasa & Keindahan</span>
              <h1 className="text-white text-gr-8 leading-none uppercase font-serif mb-gr-4">Studio <br /> Kami.</h1>
           </motion.div>
        </div>
      </section>

      {/* 1. Philosophy Section */}
      <section className="py-gr-8 px-gr-5 bg-bone border-b border-earth-deep/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-gr-8">
           <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
           >
              <h2 className="text-earth-deep leading-none uppercase font-serif mb-gr-6 italic">Empat Dekade <br /> Tangan Teruji.</h2>
              <p className="text-lg text-earth-deep/70 max-w-lg leading-relaxed">
                 Terletak di pusat pertukangan Nusantara, studio kami di Jepara bukan sekadar tempat produksi. Ini adalah laboratorium di mana tradisi sambungan klasik bertemu dengan kalkulasi arsitektural.
              </p>
           </motion.div>
           
           <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-phi bg-charcoal/5"
           >
              <Image 
                src="/assets/technical-sketch.png" 
                alt="Sketsa Teknis" 
                fill 
                className="object-contain opacity-40 p-gr-6"
              />
           </motion.div>
        </div>
      </section>

      {/* 2. Precision & Artisans */}
      <section className="py-gr-8 px-gr-5 bg-charcoal text-bone">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-gr-8 gap-gr-6">
             <div className="flex-1">
                <h2 className="text-white uppercase font-serif tracking-tighter mb-gr-4 leading-none">Presisi <br /> Arsitektural.</h2>
                <div className="h-1 lg:h-2 w-32 bg-gold-muted mb-gr-4" />
             </div>
             <p className="flex-1 text-bone/60 max-w-sm text-sm tracking-wide leading-relaxed font-light uppercase">
                Kami menggunakan standar toleransi milimeter untuk memastikan setiap furnitur tidak hanya indah secara visual, tapi juga stabil secara struktural untuk waktu yang sangat lama.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gr-4">
             {[
               { title: "Seleksi Material", icon: <Hammer />, desc: "Setiap papan Jati dipindai secara manual untuk mendeteksi alur serat dan kadar air yang sempurna." },
               { title: "Rekayasa Sambungan", icon: <MoveRight />, desc: "Menggunakan teknik 'Mortise and Tenon' yang presisi untuk ketahanan struktural tanpa paku berlebihan." },
               { title: "Penyelarasan Akhir", icon: <ArrowUpRight />, desc: "Finis lilin lebah alami (natural wax) untuk merawat napas kayu dan mempertahankan tekstur aslinya." }
             ].map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="p-gr-5 border border-white/10 hover:border-gold-muted transition-all duration-700 bg-white/[0.02]"
                >
                   <div className="text-gold-muted mb-gr-4">{feature.icon}</div>
                   <h3 className="text-gr-2 font-serif uppercase mb-gr-3 leading-none tracking-tight">{feature.title}</h3>
                   <p className="text-[0.7rem] opacity-50 leading-relaxed uppercase tracking-wider font-medium">{feature.desc}</p>
                </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* 3. Sustainable Traceability CTA */}
      <section className="py-gr-8 px-gr-5 bg-bone">
        <div className="max-w-4xl mx-auto text-center">
           <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
           >
             <h2 className="text-gr-5 font-serif uppercase mb-gr-4 leading-[0.9]">Keaslian yang <br /> Bertanggung Jawab.</h2>
             <p className="text-earth-deep/60 mb-gr-6 text-lg max-w-2xl mx-auto">
                Semua kayu kami berasal dari hutan berkelanjutan bersertifikat SVLK, memastikan setiap mahakarya dikerjakan dengan menghormati ekosistem asalnya.
             </p>
             <button className="bg-charcoal text-bone px-gr-8 py-gr-4 text-[0.6rem] tracking-[0.6em] font-bold uppercase hover:bg-gold-muted hover:text-earth-deep transition-all shadow-2xl">
                Jelajahi Material Kami
             </button>
           </motion.div>
        </div>
      </section>
    </main>
  );
}

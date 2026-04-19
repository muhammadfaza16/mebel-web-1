"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TentangPage() {
  return (
    <main className="min-h-screen bg-bone">
      {/* Heritage Header */}
      <section className="px-gr-5 pt-[10rem] pb-gr-8 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-gr-8 items-end">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
             <span className="text-[0.6rem] tracking-[1em] text-terracotta-accent font-bold uppercase mb-gr-4 block">Garis Keturunan</span>
             <h1 className="text-gr-8 font-serif leading-[0.9] uppercase mb-gr-4 tracking-tighter">Warisan <br /> Sejak <br /> 1986.</h1>
             <p className="max-w-xl text-lg text-earth-deep/80 leading-relaxed font-light">
                Dimulai dari sebuah bengkel kecil di jantung Jepara, Kayu Modern lahir dari keinginan untuk menjaga kemurnian teknik pertukangan Nusantara di tengah gempuran industrialisasi.
             </p>
          </motion.div>
          <div className="relative aspect-phi bg-charcoal grayscale">
             <Image 
                src="/assets/heritage-workshop.png" 
                alt="Workshop Heritage" 
                fill 
                className="object-cover opacity-80"
             />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="px-gr-5 py-gr-8 bg-charcoal text-bone">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gr-6">
             {[
               { year: "1986", title: "Fondasi", desc: "Pendirian bengkel kolektif pertama oleh Master Artisan kami." },
               { year: "2002", title: "Ekspansi", desc: "Mulai melayani proyek residensial di Jakarta dan sekitarnya." },
               { year: "2015", title: "Modernisasi", desc: "Integrasi standar arsitektural dalam desain furnitur klasik." },
               { year: "2026", title: "Era Digital", desc: "Menghadirkan pengalaman kayu modern bagi audiens global." }
             ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="pt-gr-5 border-t border-white/20"
                >
                   <span className="text-gr-4 font-serif italic text-gold-muted block mb-2">{item.year}</span>
                   <h3 className="text-[0.7rem] tracking-[0.4em] font-bold uppercase mb-4">{item.title}</h3>
                   <p className="text-xs opacity-50 leading-relaxed tracking-wider uppercase">{item.desc}</p>
                </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Philosophy Callout */}
      <section className="px-gr-5 py-gr-8 overflow-hidden bg-bone">
         <div className="max-w-4xl mx-auto text-center py-gr-8 border-y border-earth-deep/5">
            <h2 className="text-gr-5 font-serif uppercase italic leading-none mb-gr-6">
               &quot;Kami tidak hanya membangun furnitur, kami menjaga ingatan sebuah pohon.&quot;
            </h2>
            <div className="w-16 h-[1px] bg-terracotta-accent mx-auto mb-gr-6" />
            <p className="text-[0.6rem] tracking-[0.8em] font-bold uppercase">Kayu Modern — Janji Terpahat</p>
         </div>
      </section>
    </main>
  );
}

"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, MoveRight } from "lucide-react";
import Image from "next/image";

export default function KontakPage() {
  return (
    <main className="min-h-screen bg-bone">
      {/* Editorial Header */}
      <section className="px-gr-5 pt-[10rem] pb-gr-8 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-5 pointer-events-none">
          <Image src="/assets/technical-sketch.png" alt="Sketsa Teknis" fill className="object-contain" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
             <h1 className="text-gr-8 font-serif leading-none uppercase mb-gr-4">Penyelarasan <br /> Ruang.</h1>
             <p className="max-w-2xl text-lg text-earth-deep/80 leading-relaxed font-light">
                Mulai konsultasi untuk proyek residensial, hospitality, atau interior komersial Anda. Tim kurator kami akan membantu mewujudkan visi materialitas Anda.
             </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="px-gr-5 py-gr-8 border-t border-earth-deep/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-gr-8">
          
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-gr-7"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-gr-6">
              <div className="space-y-3">
                <h4 className="text-[0.6rem] tracking-[0.4em] font-bold uppercase opacity-60">Email Kami</h4>
                <div className="flex items-center gap-3 text-gr-2 font-serif">
                   <Mail size={16} className="text-terracotta-accent" />
                   <a href="mailto:studio@kayumodern.com" className="hover:italic transition-all">studio@kayumodern.com</a>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="text-[0.6rem] tracking-[0.4em] font-bold uppercase opacity-60">Telepon / WA</h4>
                <div className="flex items-center gap-3 text-gr-2 font-serif">
                   <Phone size={16} className="text-terracotta-accent" />
                   <a href="tel:+62215555555" className="hover:italic transition-all">+62 21 5555 555</a>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-[0.6rem] tracking-[0.4em] font-bold uppercase opacity-30">Studio Jepara</h4>
              <div className="flex gap-4 text-earth-deep/80 leading-relaxed font-serif text-lg">
                 <MapPin size={24} className="text-terracotta-accent shrink-0" />
                 <p>Jl. Rimba Raya No. 4, Kawasan Industri Mebel <br /> Jepara, Jawa Tengah 59411</p>
              </div>
            </div>

            <div className="pt-gr-6 border-t border-earth-deep/5">
               <h4 className="text-[0.6rem] tracking-[0.4em] font-bold uppercase opacity-30 mb-gr-4">Jam Operasional</h4>
               <p className="text-[0.7rem] tracking-[0.2em] font-bold uppercase opacity-60">Senin — Jumat: 09:00 - 17:00</p>
               <p className="text-[0.7rem] tracking-[0.2em] font-bold uppercase opacity-60">Sabtu: Perjanjian Khusus</p>
            </div>
          </motion.div>

          {/* Bespoke Inquiry Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-charcoal p-gr-6 text-bone shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.05] pointer-events-none">
               <h1 className="text-[20rem] leading-none font-serif transform translate-x-1/2 -translate-y-1/2">K</h1>
            </div>

            <h3 className="text-gr-4 font-serif uppercase tracking-tight mb-gr-6 relative z-10">Bespeak Inquiry</h3>
            <form className="space-y-gr-4 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-gr-4">
                <div className="space-y-2">
                  <label className="text-[0.55rem] tracking-[0.5em] font-bold uppercase opacity-40">Nama Lengkap</label>
                  <input type="text" className="w-full bg-white/5 border-b border-white/10 p-2 text-sm focus:border-gold-muted outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[0.55rem] tracking-[0.5em] font-bold uppercase opacity-40">Profesi / Sektor</label>
                  <select className="w-full bg-white/5 border-b border-white/10 p-2 text-sm focus:border-gold-muted outline-none transition-all appearance-none cursor-pointer">
                    <option className="bg-charcoal">Residensial Pribadi</option>
                    <option className="bg-charcoal">Arsitek / Desainer</option>
                    <option className="bg-charcoal">Hospitality / Hotel</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[0.55rem] tracking-[0.5em] font-bold uppercase opacity-40">Pesan / Visi Proyek</label>
                <textarea rows={4} className="w-full bg-white/5 border-b border-white/10 p-2 text-sm focus:border-gold-muted outline-none transition-all resize-none" placeholder="Ceritakan kebutuhan kayu Anda..."></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-gr-4 bg-gold-muted text-earth-deep text-[0.6rem] tracking-[0.6em] font-bold uppercase hover:bg-white transition-all flex items-center justify-center gap-gr-3"
              >
                Kirim Permintaan <MoveRight size={16} />
              </button>
            </form>
          </motion.div>

        </div>
      </section>
    </main>
  );
}

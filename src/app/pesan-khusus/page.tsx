"use client";

import { motion } from "framer-motion";
import { MoveRight, Scissors } from "lucide-react";

export default function PesanKhususPage() {
  return (
    <main className="min-h-screen bg-bone">
      {/* Editorial Header */}
      <section className="px-gr-5 pt-[12rem] pb-gr-8 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
          >
             <span className="text-[0.6rem] tracking-[1em] text-terracotta-accent font-bold uppercase mb-gr-4 block">Tailored Excellence</span>
             <h1 className="text-gr-8 font-serif leading-none uppercase mb-gr-6">Layanan <br /> Khusus.</h1>
             <p className="max-w-2xl mx-auto text-lg text-earth-deep/80 leading-relaxed font-light">
                Butuh dimensi yang berbeda? Atau finishing yang selaras dengan palet material spesifik Anda? Kami menyediakan layanan rekayasa khusus bagi mereka yang mencari keunikan absolut.
             </p>
          </motion.div>
        </div>
      </section>

      {/* Bespoke Form */}
      <section className="px-gr-5 py-gr-8 bg-charcoal text-bone">
        <div className="max-w-4xl mx-auto py-gr-8">
           <form className="space-y-gr-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-gr-6">
                 <div className="space-y-2">
                    <label className="text-[0.6rem] tracking-[0.4em] font-bold uppercase opacity-40">Proyek</label>
                    <input type="text" className="w-full bg-transparent border-b border-white/20 py-2 focus:border-gold-muted outline-none transition-all uppercase text-sm tracking-widest" placeholder="NAMA PROYEK..." />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[0.6rem] tracking-[0.4em] font-bold uppercase opacity-40">Dimensi Estimasi</label>
                    <input type="text" className="w-full bg-transparent border-b border-white/20 py-2 focus:border-gold-muted outline-none transition-all uppercase text-sm tracking-widest" placeholder="P X L X T (CM)..." />
                 </div>
              </div>
              <div className="space-y-2">
                 <label className="text-[0.6rem] tracking-[0.4em] font-bold uppercase opacity-40">Detail Tambahan</label>
                 <textarea rows={4} className="w-full bg-transparent border-b border-white/20 py-2 focus:border-gold-muted outline-none transition-all uppercase text-sm tracking-widest resize-none" placeholder="CERITAKAN VISI ANDA..."></textarea>
              </div>
              <button className="flex items-center gap-gr-4 group text-gold-muted hover:text-white transition-all text-[0.6rem] tracking-[0.6em] font-bold uppercase">
                 KIRIM PERMINTAAN KHUSUS <MoveRight size={18} className="translate-x-0 group-hover:translate-x-2 transition-transform" />
              </button>
           </form>
        </div>
      </section>

      {/* Icon Graphic */}
      <div className="py-gr-8 flex justify-center opacity-10">
         <Scissors size={80} strokeWidth={1} />
      </div>
    </main>
  );
}

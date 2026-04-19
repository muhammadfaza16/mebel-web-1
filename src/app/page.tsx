"use client";

import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import { ArrowUpRight, Menu, Hammer, Sparkles, MoveRight, Mail, Instagram, Globe } from "lucide-react";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Use scrollYProgress for any future animations or remove it if not needed.
  // For now, keeping it as requested for "Advanced Parallax" potential.

  return (
    <main ref={containerRef} className="relative bg-bone selection:bg-charcoal selection:text-bone scroll-smooth">
      {/* Navigation - Ultra Minimalist */}
      <nav className="fixed top-0 left-0 w-full z-50 px-gr-5 py-gr-4 flex justify-between items-center mix-blend-difference text-white">
        <h1 className="text-gr-4 font-serif font-medium tracking-tighter m-0">KAYU MODERN</h1>
        <div className="flex gap-gr-6 items-center text-[0.6rem] tracking-[0.3em] font-medium uppercase">
          <span className="hidden md:inline cursor-pointer hover:opacity-60 transition-opacity">Koleksi</span>
          <span className="hidden md:inline cursor-pointer hover:opacity-60 transition-opacity">Studio</span>
          <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer">
            <Menu size={18} />
          </div>
        </div>
      </nav>

      {/* 1. Cinematic Hero */}
      <section className="relative h-screen flex flex-col justify-end items-start overflow-hidden">
        <Image 
          src="/assets/hero-lifestyle.png" 
          alt="Luxury Interior" 
          fill 
          priority
          className="object-cover brightness-[0.85]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        
        <div className="relative z-10 px-gr-5 pb-gr-6 w-full max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-white mb-gr-4 max-w-4xl leading-[0.9] uppercase">
              KEINDAHAN <br /> YANG <br /> MENGAKAR.
            </h1>
            <div className="flex flex-col md:flex-row gap-gr-4 items-start md:items-center">
              <p className="text-white/60 text-gr-2 font-light tracking-wide max-w-md">
                Meleburkan tradisi pertukangan Nusantara dengan presisi arsitektural modern. Jati berkelanjutan untuk hunian yang bernapas.
              </p>
              <div className="flex-1 h-[1px] bg-white/20 hidden md:block" />
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-white/40 text-[0.6rem] tracking-[0.4em] flex items-center gap-gr-2 uppercase font-bold"
              >
                GULIR <MoveRight size={14} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Heritage Statement */}
      <section className="py-gr-8 px-gr-5 bg-bone">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-gr-6 items-start">
          <div className="flex-1">
            <h2 className="text-earth-deep mb-gr-4 leading-[1.1] uppercase">EMPAT DEKADE <br /> MENJAGA RASA.</h2>
            <p className="text-gr-2 leading-relaxed text-justify-phi uppercase tracking-[0.05em] font-medium opacity-60">
              BERDIRI SEJAK 1986 — PERJALANAN KAMI BERMULA DARI JANTUNG JAWA TENGAH, DI MANA SETIAP BIBIT JATI DIPILIH BUKAN KARENA UKURANNYA, MELAINKAN KARENA JIWANYA. HINGGA HARI INI, KAMI TERUS MENJAGA WARISAN INI DENGAN MEMADUKAN TEKNIK SAMBUNGAN KLASIK DAN GARIS DESAIN MODERN YANG BERSIH.
            </p>
          </div>
          <div className="flex-1 flex flex-col justify-end pt-gr-6">
             <div className="border-l-2 border-terracotta-accent pl-gr-4">
                <p className="text-[0.6rem] font-bold tracking-[0.3em] text-terracotta-accent mb-2 uppercase italic">Filosofi Kami</p>
                <p className="text-lg text-earth-deep/80 leading-relaxed">
                  Kami percaya setiap keping kayu membawa ingatan. Misi kami adalah mengabadikan ingatan tersebut melalui rekayasa presisi dan sentuhan akhir alami.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* 3. Curated Collections Series */}
      <section className="py-gr-8 bg-charcoal text-bone px-gr-5 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-gr-6">
            <h2 className="text-white font-serif leading-none uppercase">Koleksi Kurasi.</h2>
            <span className="text-[0.6rem] tracking-[0.4em] opacity-40 uppercase font-bold">Pilih Garis Keturunan Anda</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gr-2">
             {/* Collection 1 */}
             <motion.div 
              whileHover={{ scale: 0.98 }}
              className="group relative aspect-[phi] overflow-hidden bg-slate-900 cursor-pointer"
             >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute inset-0 p-gr-5 flex flex-col justify-between">
                   <span className="text-[0.6rem] tracking-[0.4em] font-bold uppercase">Seri 01 / Warisan</span>
                   <div className="space-y-2">
                     <h3 className="text-gr-5 leading-none uppercase">Meja Leluhur</h3>
                     <p className="opacity-0 group-hover:opacity-60 transition-opacity text-[0.6rem] tracking-[0.3em] font-bold uppercase">Jati Solid / Poles Tangan</p>
                   </div>
                </div>
             </motion.div>
             {/* Collection 2 */}
             <motion.div 
              whileHover={{ scale: 0.98 }}
              className="group relative aspect-square md:aspect-[phi] overflow-hidden bg-earth-deep cursor-pointer"
             >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute inset-0 p-gr-5 flex flex-col justify-between">
                   <span className="text-[0.6rem] tracking-[0.4em] font-bold uppercase">Seri 02 / Minimalis</span>
                   <div className="space-y-2">
                     <h3 className="text-gr-5 leading-none uppercase">Konsol Ruang Hampa</h3>
                     <p className="opacity-0 group-hover:opacity-60 transition-opacity text-[0.6rem] tracking-[0.3em] font-bold uppercase">Mahoni / Finis Arang</p>
                   </div>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Material Library */}
      <section className="py-gr-8 px-gr-5 bg-bone">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-gr-1 border-y border-earth-deep/10">
           {['JATI', 'TREMBESI', 'MAHONI'].map((wood, i) => (
             <div key={i} className="group py-gr-6 px-gr-4 flex flex-col items-center text-center hover:bg-bone transition-all cursor-crosshair">
                <p className="text-[0.5rem] tracking-[0.6em] mb-gr-4 opacity-40 font-bold uppercase">Spesies {i+1}</p>
                <h4 className="text-gr-5 mb-gr-1 group-hover:tracking-widest transition-all duration-700">{wood}</h4>
                <div className="w-12 h-[1px] bg-earth-deep group-hover:w-full transition-all duration-500" />
                <p className="mt-gr-4 text-[0.65rem] tracking-[0.2em] uppercase font-bold leading-loose opacity-60">Kepadatan tinggi, alur serat organik, ketahanan cuaca tak lekang waktu.</p>
             </div>
           ))}
        </div>
      </section>

      {/* 5. The Atelier (Workshop Sketches) */}
      <section className="relative py-gr-8 bg-bone px-gr-5 h-[80vh] flex items-center overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10">
          <Image src="/assets/technical-sketch.png" alt="Sketch" fill className="object-contain" />
        </div>
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="max-w-2xl">
            <h2 className="mb-gr-4 italic font-serif uppercase tracking-tighter">&quot;PRESISI ADALAH <br /> SATU-SATUNYA <br /> ORNAMEN KAMI.&quot;</h2>
            <div className="flex gap-gr-4 items-center">
               <span className="bg-earth-deep w-12 h-12 rounded-full flex items-center justify-center text-bone">
                  <Hammer size={20} />
               </span>
               <p className="text-lg tracking-tight">Studio kami di Jepara menggunakan standar arsitektural untuk memastikan setiap sambungan adalah mahakarya rekayasa.</p>
            </div>
            <button className="mt-gr-5 text-[0.6rem] font-bold tracking-[0.4em] flex items-center gap-gr-2 hover:gap-gr-4 transition-all uppercase">
               LIHAT BENGKEL KERJA <MoveRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 6. Bespoke Concierge */}
      <section className="py-gr-8 bg-gold-muted text-earth-deep md:text-center px-gr-5">
        <div className="max-w-3xl mx-auto">
          <Sparkles className="mx-auto mb-gr-4 text-earth-deep" size={32} />
          <h2 className="mb-gr-4 uppercase">Kemitraan <br className="md:hidden" /> Eksklusif.</h2>
          <p className="text-gr-2 mb-gr-5 leading-relaxed">
            Kami berkolaborasi dengan arsitek dan desainer interior global untuk menciptakan solusi furnitur khusus bagi ruang residensial dan komersial kelas atas.
          </p>
          <div className="flex flex-col md:flex-row gap-gr-2 justify-center">
             <button className="bg-earth-deep text-bone px-gr-5 py-gr-3 text-[0.6rem] tracking-[0.4em] font-bold uppercase">Konsultasi Proyek</button>
             <button className="border border-earth-deep px-gr-5 py-gr-3 text-[0.6rem] tracking-[0.4em] font-bold hover:bg-earth-deep hover:text-bone transition-all uppercase">Portofolio Desainer</button>
          </div>
        </div>
      </section>

      {/* 7. The Journal */}
      <section className="py-gr-8 px-gr-5 bg-bone">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-gr-6">
            <h2 className="font-serif uppercase">Catatan Kayu.</h2>
            <button className="text-[0.6rem] font-bold tracking-[0.3em] opacity-60 uppercase">Semua Artikel</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gr-4">
             {[
               { title: "Psikologi Material Kayu dalam Hunian Modern", date: "20 APR 2026", category: "GAYA HIDUP" },
               { title: "Menelusuri Jati Berkelanjutan di Jawa Tengah", date: "15 MAR 2026", category: "WARISAN" },
               { title: "Koleksi Pilihan Kurator 2026", date: "02 FEB 2026", category: "KURASI" }
             ].map((post, i) => (
               <div key={i} className="group cursor-pointer border-b border-earth-deep/10 pb-gr-4">
                 <p className="text-[0.55rem] tracking-[0.4em] mb-gr-2 opacity-50 uppercase font-bold">{post.category} / {post.date}</p>
                 <h4 className="text-gr-2 leading-tight group-hover:text-terracotta-accent transition-colors mb-gr-3">{post.title}</h4>
                 <div className="flex items-center gap-2 text-[0.6rem] font-bold opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
                    BACA CERITA <ArrowUpRight size={14} />
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 8. Footer */}
      <footer className="bg-charcoal text-bone py-gr-7 px-gr-5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:col-cols-4 gap-gr-6 mb-gr-7">
            <div className="col-span-1 md:col-span-2">
              <h1 className="text-gr-5 font-serif mb-gr-2 tracking-tighter uppercase">KAYU MODERN</h1>
              <p className="opacity-40 max-w-sm text-sm">Elevasi warisan Nusantara melalui desain furnitur arsitektural. Dibuat untuk melampaui generasi.</p>
            </div>
            <div>
              <p className="text-[0.6rem] font-bold tracking-[0.4em] opacity-40 mb-gr-3 uppercase">Kontak</p>
              <ul className="space-y-gr-2 text-sm opacity-60">
                <li className="flex items-center gap-2"><Mail size={14} /> studio@kayumodern.com</li>
                <li className="flex items-center gap-2"><Globe size={14} /> Jawa Tengah, Indonesia</li>
              </ul>
            </div>
            <div>
              <p className="text-[0.6rem] font-bold tracking-[0.4em] opacity-40 mb-gr-3 uppercase">Sosial</p>
              <ul className="space-y-gr-2 text-sm opacity-60">
                <li className="flex items-center gap-2"><Instagram size={14} /> @kayumodern</li>
                <li className="flex items-center gap-2 font-bold uppercase tracking-widest text-[0.6rem] cursor-pointer hover:text-white transition-colors">LinkedIn <MoveRight size={14} /></li>
              </ul>
            </div>
          </div>
          <div className="pt-gr-5 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-gr-4">
             <p className="text-[0.55rem] tracking-[0.5em] opacity-20 uppercase font-bold">Terinspirasi oleh Rasio Emas (Phi)</p>
             <p className="text-[0.55rem] tracking-[0.5em] opacity-20 uppercase font-bold">© 2026 KAYU MODERN STUDIO PERTUKANGAN</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

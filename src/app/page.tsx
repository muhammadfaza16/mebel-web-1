"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { ArrowUpRight, MoveRight } from "lucide-react";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const journalPosts = [
    { title: "Psikologi Material Kayu dalam Hunian Modern", date: "20 APR 2026", category: "GAYA HIDUP", image: "/assets/journal-1.png" },
    { title: "Menelusuri Jati Berkelanjutan di Jawa Tengah", date: "15 MAR 2026", category: "WARISAN", image: "/assets/journal-2.png" },
    { title: "Koleksi Pilihan Kurator 2026", date: "02 FEB 2026", category: "KURASI", image: "/assets/journal-3.png" },
  ];

  return (
    <main ref={containerRef} className="relative bg-transparent selection:bg-charcoal selection:text-bone scroll-smooth">
      
      {/* 1. Cinematic Hero - Movement: Scale & Reveal */}
      <section className="relative h-screen flex flex-col justify-end items-start overflow-hidden">
        <motion.div 
          style={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image 
            src="/assets/hero-lifestyle.png" 
            alt="Interior Mewah" 
            fill 
            priority
            className="object-cover brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </motion.div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-gr-5 pb-gr-6 mb-gr-4 flex justify-between items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1"
          >
            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-white mb-gr-4 max-w-4xl leading-[0.9] uppercase font-serif"
            >
              KEINDAHAN <br /> YANG <br /> MENGAKAR.
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex flex-col md:flex-row gap-gr-4 items-start md:items-center"
            >
              <p className="text-white text-gr-2 font-medium tracking-wide max-w-md">
                Meleburkan tradisi pertukangan Nusantara dengan presisi arsitektural modern. Jati berkelanjutan untuk hunian yang bernapas.
              </p>
              <div className="flex-1 h-[1px] bg-white/20 hidden md:block" />
              <Link href="/koleksi" className="group flex items-center gap-gr-2 text-gold-muted hover:text-white transition-all text-[0.6rem] tracking-[0.4em] uppercase font-bold">
                 Jelajahi <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          <div className="hidden lg:flex flex-col items-end gap-gr-2 text-white/20 border-r border-white/10 pr-gr-4 mb-gr-4 select-none">
             <span className="text-[0.6rem] tracking-[0.8em] font-bold uppercase rotate-90 origin-right translate-x-7 translate-y-12">ESTABLISHED</span>
             <span className="text-gr-5 font-serif leading-none italic">1986</span>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute left-gr-5 bottom-gr-4 flex items-center gap-gr-3 text-[0.5rem] tracking-[1em] text-white/30 uppercase vertical-text"
        >
          GULIR <div className="h-20 w-[1px] bg-white/20 animate-scroll-line" />
        </motion.div>
      </section>

      {/* 2. Heritage Statement - Variety: Offset Layout */}
      <section className="py-gr-8 px-gr-5 bg-bone overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-gr-8 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex-1"
          >
            <h2 className="text-earth-deep mb-gr-4 leading-[1.1] uppercase">EMPAT DEKADE <br /> MENJAGA RASA.</h2>
            <p className="text-justify-phi font-medium opacity-80">
              BERDIRI SEJAK 1986 — PERJALANAN KAMI BERMULA DARI JANTUNG JAWA TENGAH, DI MANA SETIAP BIBIT JATI DIPILIH BUKAN KARENA UKURANNYA, MELAINKAN KARENA JIWANYA. HINGGA HARI INI, KAMI TERUS MENJAGA WARISAN INI DENGAN MEMADUKAN TEKNIK SAMBUNGAN KLASIK DAN GARIS DESAIN MODERN YANG BERSIH.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex-1 border-t md:border-t-0 md:border-l border-earth-deep/10 pt-gr-6 md:pt-0 md:pl-gr-8"
          >
             <div className="border-l-2 border-terracotta-accent pl-gr-4">
                <p className="text-[0.6rem] font-bold tracking-[0.3em] text-terracotta-accent mb-2 uppercase italic">Filosofi Kami</p>
                <p className="text-lg text-earth-deep/80 leading-relaxed font-serif">
                   Kami percaya setiap keping kayu membawa ingatan. Misi kami adalah mengabadikan ingatan tersebut melalui rekayasa presisi dan sentuhan akhir alami.
                </p>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Curated Collections Series - Movement: Staggered Entrance */}
      <section className="py-gr-8 bg-charcoal text-bone px-gr-5 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-between items-end mb-gr-7"
          >
            <h2 className="text-white font-serif leading-none uppercase">Koleksi Kurasi.</h2>
            <span className="text-[0.6rem] tracking-[0.4em] opacity-70 uppercase font-bold">Pilih Garis Keturunan Anda</span>
          </motion.div>
          
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              initial: {},
              animate: { transition: { staggerChildren: 0.3 } }
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-gr-2"
          >
             <motion.div variants={{ initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } }}>
               <motion.div 
                whileHover={{ scale: 0.985 }}
                className="group relative aspect-phi overflow-hidden bg-charcoal border border-white/5 cursor-pointer"
               >
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute inset-0 p-gr-5 flex flex-col justify-between">
                     <span className="text-[0.65rem] tracking-[0.5em] font-bold uppercase text-terracotta-accent">Seri 01 / Warisan</span>
                     <div className="space-y-4">
                       <h3 className="text-gr-5 leading-none uppercase">Meja Leluhur</h3>
                       <div className="h-[1px] w-0 group-hover:w-full bg-white/20 transition-all duration-1000" />
                       <p className="opacity-0 group-hover:opacity-60 transition-opacity text-[0.6rem] tracking-[0.3em] font-bold uppercase">Jati Solid / Poles Tangan</p>
                     </div>
                  </div>
               </motion.div>
             </motion.div>

             <motion.div variants={{ initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } }}>
               <motion.div 
                whileHover={{ scale: 0.985 }}
                className="group relative aspect-phi overflow-hidden bg-charcoal border border-white/5 cursor-pointer"
               >
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute inset-0 p-gr-5 flex flex-col justify-between">
                     <span className="text-[0.65rem] tracking-[0.5em] font-bold uppercase text-gold-muted">Seri 02 / Minimalis</span>
                     <div className="space-y-4">
                       <h3 className="text-gr-5 leading-none uppercase">Konsol Ruang Hampa</h3>
                       <div className="h-[1px] w-0 group-hover:w-full bg-white/20 transition-all duration-1000" />
                       <p className="opacity-0 group-hover:opacity-60 transition-opacity text-[0.6rem] tracking-[0.3em] font-bold uppercase">Mahoni / Finis Arang</p>
                     </div>
                  </div>
               </motion.div>
             </motion.div>
          </motion.div>

          <div className="mt-gr-7 text-left block w-full">
             <motion.div 
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
             >
                <Link href="/koleksi" className="group inline-flex items-center gap-gr-4 text-[0.6rem] font-bold tracking-[0.6em] uppercase hover:text-gold-muted transition-all bg-transparent px-gr-4 py-gr-2 border border-white/20 hover:border-white/40 cursor-pointer">
                   LIHAT KOLEKSI <MoveRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </Link>
             </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Material Library - Pattern: Horizontal Repeat */}
      <section className="py-gr-6 px-gr-5 bg-bone relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-gr-1 border-y border-earth-deep/10">
            {['JATI', 'TREMBESI', 'MAHONI'].map((wood, i) => (
             <motion.div 
               key={i} 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.2 }}
               className="group py-gr-6 px-gr-4 flex flex-col items-center text-center hover:bg-white hover:shadow-2xl transition-all duration-700 cursor-crosshair border-x border-transparent hover:border-bone/50"
             >
                <p className="text-[0.5rem] tracking-[0.8em] mb-gr-4 opacity-60 font-bold uppercase group-hover:text-terracotta-accent transition-colors">Species {i+1}</p>
                <h4 className="text-gr-5 mb-gr-1 group-hover:tracking-[0.2em] transition-all duration-1000 uppercase font-serif">{wood}</h4>
                <div className="w-12 h-[1px] bg-earth-deep group-hover:w-full transition-all duration-700 opacity-40" />
                <p className="mt-gr-4 text-[0.65rem] tracking-[0.2em] uppercase font-bold leading-loose opacity-70 group-hover:opacity-100 transition-opacity">Kepadatan tinggi, alur serat organik, ketahanan cuaca tak lekang waktu.</p>
             </motion.div>
           ))}
        </div>
      </section>

      {/* 5. The Atelier - Pattern: SVG Motif */}
      <section className="relative py-gr-6 bg-bone px-gr-5 flex items-center overflow-hidden">
        
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10">
          <Image src="/assets/technical-sketch.png" alt="Sketsa Teknis" fill className="object-contain" />
        </div>
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="max-w-2xl"
          >
            <h2 className="mb-gr-4 italic font-serif uppercase tracking-tighter leading-[0.95]">&quot;PRESISI ADALAH <br /> SATU-SATUNYA <br /> ORNAMEN KAMI.&quot;</h2>
            <p className="text-lg tracking-tight font-medium opacity-100 mb-gr-4">Studio kami di Jepara menggunakan standar arsitektural untuk memastikan setiap sambungan adalah mahakarya rekayasa.</p>
            <Link href="/studio" className="px-gr-5 py-gr-3 border border-charcoal/10 text-[0.6rem] font-bold tracking-[0.5em] inline-flex items-center gap-gr-3 hover:bg-charcoal hover:text-bone hover:border-charcoal transition-all uppercase">
               LIHAT BENGKEL KERJA <MoveRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 6. Bespoke Concierge - Ultra Minimalist View */}
      <section className="py-gr-8 bg-gold-muted text-earth-deep px-gr-5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row gap-gr-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="flex items-center mb-gr-4">
              <span className="text-[0.6rem] tracking-[0.6em] font-bold uppercase opacity-60">Program Kemitraan</span>
            </div>
            <h2 className="mb-gr-4 uppercase font-serif tracking-tight leading-none">Penyelarasan <br /> Eksklusif.</h2>
            <p className="text-gr-2 mb-gr-6 leading-relaxed opacity-70 max-w-2xl">
              Kami berkolaborasi dengan arsitek dan desainer interior global produsen solusi furnitur khusus bagi ruang residensial dan komersial kelas atas yang menjunjung tinggi keaslian material.
            </p>
            <div className="flex flex-col sm:flex-row gap-gr-4">
               <Link href="/kontak" className="bg-charcoal text-bone px-gr-5 py-gr-4 text-[0.6rem] tracking-[0.5em] font-bold uppercase hover:bg-earth-deep transition-all shadow-xl text-center">Konsultasi Proyek</Link>
               <Link href="/portofolio-desainer" className="border border-charcoal/20 px-gr-5 py-gr-4 text-[0.6rem] tracking-[0.5em] font-bold hover:bg-charcoal hover:text-bone transition-all uppercase text-center">Portofolio Desainer</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. The Journal - Movement: Grid Stagger */}
      <section className="py-gr-8 px-gr-5 bg-bone border-b border-earth-deep/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-gr-7">
            <h2 className="font-serif uppercase">Catatan Kayu.</h2>
            <Link href="/jurnal" className="text-[0.6rem] font-bold tracking-[0.4em] opacity-40 uppercase hover:opacity-100 transition-opacity">Semua Artikel</Link>
          </div>
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              initial: {},
              animate: { transition: { staggerChildren: 0.2 } }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-gr-4"
          >
             {journalPosts.map((post, i) => (
                <motion.div 
                  key={i} 
                  variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }}
                  className="group cursor-pointer border-b border-earth-deep/10 pb-gr-6 transition-all hover:border-terracotta-accent"
                >
                   <Link href={`/jurnal/post-${i}`}>
                     <div className="aspect-phi-inverse mb-gr-4 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-1000 bg-charcoal/5">
                        <Image 
                          src={post.image} 
                          alt="Journal cover" 
                          fill 
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-earth-deep opacity-10 group-hover:opacity-0 transition-opacity" />
                     </div>
                     <p className="text-[0.5rem] tracking-[0.5em] mb-gr-3 text-terracotta-accent font-bold uppercase">{post.category}</p>
                     <h4 className="text-gr-2 leading-tight pr-gr-4 group-hover:text-terracotta-accent transition-all duration-500 mb-gr-4 uppercase font-serif">{post.title}</h4>
                     <div className="flex items-center justify-between text-[0.6rem] font-bold opacity-30 group-hover:opacity-100 transition-all uppercase tracking-[0.2em]">
                        <span>{post.date}</span>
                        <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                     </div>
                   </Link>
                </motion.div>
             ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}

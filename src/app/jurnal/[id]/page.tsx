"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Instagram, Mail, Globe } from "lucide-react";
import { journalPosts, type JournalPost } from "@/lib/jurnal-data";

export default function JournalDetail() {
  const params = useParams();
  const post: JournalPost | undefined = journalPosts.find((p) => p.id === params.id);

  if (!post) {
    return (
      <div className="h-screen flex items-center justify-center bg-bone">
        <div className="text-center">
           <h2 className="text-gr-4 font-serif uppercase mb-4">Artikel Tidak Ditemukan</h2>
           <Link href="/jurnal" className="text-[0.6rem] tracking-[0.4em] font-bold uppercase hover:text-terracotta-accent transition-colors">Kembali ke Jurnal</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-bone pb-gr-8">
      {/* 1. Immersive Hero */}
      <section className="relative h-[70vh] lg:h-[85vh] w-full mt-[10rem] px-gr-5">
        <div className="relative w-full h-full overflow-hidden">
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image 
              src={post.image} 
              alt={post.title} 
              fill 
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
          </motion.div>
        </div>
      </section>

      {/* 2. Editorial Header */}
      <section className="px-gr-5 pt-gr-6 max-w-7xl mx-auto">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.3 }}
         >
            <div className="flex items-center gap-gr-4 mb-gr-4">
               <Link href="/jurnal" className="flex items-center gap-2 text-[0.6rem] tracking-[0.4em] font-bold uppercase opacity-60 hover:opacity-100 hover:text-terracotta-accent transition-all">
                  <ArrowLeft size={14} /> Kembali
               </Link>
               <div className="h-[1px] w-12 bg-earth-deep/10" />
               <span className="text-[0.6rem] tracking-[0.4em] font-bold uppercase text-terracotta-accent">{post.category}</span>
            </div>
            
            <h1 className="text-gr-8 font-serif leading-[1] uppercase mb-gr-4 tracking-tighter">{post.title}</h1>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-earth-deep/10 pb-gr-5 gap-gr-4">
               <p className="text-gr-3 font-medium opacity-60 font-serif italic max-w-2xl">{post.excerpt}</p>
               <div className="flex flex-col items-end text-[0.65rem] tracking-[0.2em] font-bold uppercase opacity-40">
                  <span>DITERBITKAN PADA</span>
                  <span>{post.date}</span>
               </div>
            </div>
         </motion.div>
      </section>

      {/* 3. Article Content */}
      <section className="px-gr-5 py-gr-8 max-w-7xl mx-auto">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-gr-8">
            {/* Sidebar info */}
            <aside className="lg:col-span-3 space-y-gr-6">
               <div className="pt-2">
                  <h4 className="text-[0.6rem] tracking-[0.4em] font-bold uppercase opacity-30 mb-gr-4">Penulis</h4>
                  <p className="text-[0.7rem] tracking-[0.2em] font-bold uppercase">Tim Kurasi Kayu Modern</p>
               </div>
               <div>
                  <h4 className="text-[0.6rem] tracking-[0.4em] font-bold uppercase opacity-30 mb-gr-4">Bagikan</h4>
                  <div className="flex gap-4 opacity-70">
                     <Instagram size={16} className="hover:text-terracotta-accent cursor-pointer transition-colors" />
                     <Mail size={16} className="hover:text-terracotta-accent cursor-pointer transition-colors" />
                     <Globe size={16} className="hover:text-terracotta-accent cursor-pointer transition-colors" />
                  </div>
               </div>
            </aside>

            {/* Main Body Content */}
            <article className="lg:col-span-8 lg:col-start-5 space-y-gr-7">
               {post.content.map((para, i) => {
                  const parts = para.split(/(\*\*.*?\*\*)/g);
                  return (
                    <p key={i} className="text-xl leading-[1.8] text-earth-deep/90 text-justify-phi tracking-tight">
                       {parts.map((part, index) => {
                          if (part.startsWith("**") && part.endsWith("**")) {
                             return (
                               <strong key={index} className="text-earth-deep font-bold font-serif uppercase tracking-widest text-lg block mb-2">
                                 {part.slice(2, -2)}
                               </strong>
                             );
                          }
                          return part;
                       })}
                    </p>
                  );
               })}

               {post.quote && (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="py-gr-6 border-y border-earth-deep/10 my-gr-8"
                  >
                     <blockquote className="text-gr-5 font-serif italic leading-none text-terracotta-accent text-center lg:text-left">
                        &quot;{post.quote}&quot;
                     </blockquote>
                  </motion.div>
               )}

               <div className="pt-gr-8 flex flex-col md:flex-row justify-between items-center gap-gr-6 border-t border-earth-deep/10">
                  <div className="space-y-1">
                     <h4 className="text-[0.6rem] tracking-[0.4em] font-bold uppercase opacity-30">Terakhir Dibaca</h4>
                     <p className="text-gr-2 font-serif uppercase">Memilih Jati yang Berjiwa</p>
                  </div>
                  <Link href="/jurnal" className="bg-charcoal text-bone px-gr-6 py-gr-4 text-[0.6rem] tracking-[0.6em] font-bold uppercase hover:bg-terracotta-accent transition-all flex items-center gap-3">
                     LIHAT SEMUA CATATAN <ArrowUpRight size={14} />
                  </Link>
               </div>
            </article>
         </div>
      </section>
    </main>
  );
}

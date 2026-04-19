"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Search } from "lucide-react";
import Link from "next/link";
import { journalPosts } from "@/lib/jurnal-data";

export default function JurnalPage() {
  const posts = journalPosts;

  return (
    <main className="min-h-screen bg-bone">
      {/* Editorial Header */}
      <section className="px-gr-5 pt-[10rem] pb-gr-8 border-b border-earth-deep/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-gr-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
               <h1 className="text-gr-8 font-serif leading-none uppercase mb-gr-4">Catatan <br /> Kayu.</h1>
               <p className="max-w-xl text-lg text-earth-deep/80 leading-relaxed font-light">
                  Eksplorasi materialitas, filosofi desain, dan cerita di balik setiap serat kayu yang kami olah. Sebuah jurnal untuk pecinta kerajinan tangan.
               </p>
            </motion.div>
            <div className="flex items-center gap-gr-4 border-b border-earth-deep/10 pb-2 w-full md:w-64 opacity-60 focus-within:opacity-100 transition-opacity">
               <Search size={16} />
               <input type="text" placeholder="CARI ARTIKEL..." className="bg-transparent outline-none text-[0.6rem] tracking-[0.4em] font-bold uppercase w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article Grid */}
      <section className="px-gr-5 py-gr-8">
        <div className="max-w-7xl mx-auto">
          {/* Featured (Larger) Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group cursor-pointer mb-gr-8"
          >
             <Link href={`/jurnal/${posts[0].id}`} className="grid grid-cols-1 lg:grid-cols-12 gap-gr-6">
                <div className="lg:col-span-8 aspect-phi bg-charcoal/5 overflow-hidden relative">
                   <Image 
                    src={posts[0].image} 
                    alt={posts[0].title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                   />
                </div>
                <div className="lg:col-span-4 flex flex-col justify-center">
                   <span className="text-[0.6rem] tracking-[0.5em] text-terracotta-accent font-bold uppercase mb-gr-4 block">ARTIKEL PILIHAN</span>
                   <h2 className="text-gr-5 uppercase font-serif mb-gr-4 leading-none group-hover:text-charcoal transition-colors tracking-tight">{posts[0].title}</h2>
                   <p className="text-earth-deep/70 mb-gr-6 leading-relaxed text-base">{posts[0].excerpt}</p>
                   <div className="flex items-center gap-gr-4 text-[0.65rem] font-bold tracking-[0.4em] uppercase">
                      BACA SELENGKAPNYA <ArrowUpRight size={16} />
                   </div>
                </div>
             </Link>
          </motion.div>

          {/* Secondary Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gr-7 pt-gr-8 border-t border-earth-deep/5">
             {posts.slice(1).map((post, i) => (
                <motion.div 
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group cursor-pointer"
                >
                   <Link href={`/jurnal/${post.id}`}>
                      <div className="aspect-phi-inverse mb-gr-4 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-1000 bg-charcoal/5">
                         <Image 
                            src={post.image} 
                            alt={post.title} 
                            fill 
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                         />
                      </div>
                      <span className="text-[0.5rem] tracking-[0.5em] text-gold-muted font-bold uppercase mb-2 block">{post.category}</span>
                      <h3 className="text-gr-2 leading-tight uppercase font-serif mb-gr-4 group-hover:text-terracotta-accent transition-colors">{post.title}</h3>
                      <div className="flex justify-between items-center text-[0.55rem] tracking-[0.2em] font-bold opacity-30 uppercase">
                         <span>{post.date}</span>
                         <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </div>
                   </Link>
                </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-gr-8 px-gr-5 bg-charcoal text-bone">
        <div className="max-w-3xl mx-auto text-center">
           <h2 className="text-gr-4 font-serif uppercase mb-gr-4 leading-none">Berlangganan <br /> Catatan Kayu.</h2>
           <p className="opacity-60 text-sm tracking-wide uppercase mb-gr-6">Dapatkan kurasi artikel dan akses awal ke koleksi terbatas langsung di inbox Anda.</p>
           <form className="flex flex-col sm:flex-row gap-gr-3">
              <input type="email" placeholder="EMAIL ANDA..." className="flex-1 bg-white/5 border border-white/10 px-gr-4 py-gr-4 text-xs focus:border-gold-muted outline-none uppercase font-bold tracking-widest" />
              <button className="bg-bone text-charcoal px-gr-6 py-gr-4 text-[0.6rem] tracking-[0.6em] font-bold uppercase hover:bg-gold-muted transition-all">DAFTAR Sekarang</button>
           </form>
        </div>
      </section>
    </main>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { journalArticles } from "@/lib/journal-data";
import { ArrowRight } from "lucide-react";

export default function JournalIndexPage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <main className="min-h-screen pt-0 pb-sp-12">
      {/* HERO STRIP */}
      <section className="bg-brand-dark-bg text-brand-dark-text pt-sp-16 pb-sp-8 px-4 md:px-sp-6 lg:px-sp-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
          <span className="text-[10px] font-medium tracking-widest text-brand-text-muted uppercase mb-4 block">· Masterclass & Insights</span>
          <h1 className="text-4xl md:text-6xl text-white mb-0 leading-tight">The Journal.</h1>
        </motion.div>
      </section>

      {/* ARTICLE LIST */}
      <section className="px-4 md:px-sp-6 lg:px-sp-12 py-sp-8 max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-sp-8 lg:gap-sp-12"
        >
          {journalArticles.map((article, index) => (
            <motion.div key={article.id} variants={itemVariants}>
              <Link href={`/journal/${article.slug}`} className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-sp-6 items-center">
                
                {/* Image */}
                <div className={`md:col-span-6 lg:col-span-7 relative h-64 md:h-96 w-full card-hard overflow-hidden ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                   <div className="absolute inset-0 bg-brand-dark-bg/5 group-hover:bg-transparent transition-colors z-10" />
                   <Image 
                     src={article.coverImage} 
                     alt={article.title} 
                     fill 
                     className="object-cover opacity-90 mix-blend-multiply group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" 
                   />
                </div>
                
                {/* Content */}
                <div className={`md:col-span-6 lg:col-span-5 flex flex-col justify-center ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                   <div className="flex items-center gap-3 mb-4">
                      <span className="text-[9px] uppercase tracking-widest text-brand-terracotta font-bold">{article.category}</span>
                      <span className="w-1 h-1 bg-brand-text/20" />
                      <span className="text-[9px] uppercase tracking-widest text-brand-text-muted">{article.readTime}</span>
                   </div>
                   
                   <h2 className="text-2xl lg:text-4xl mb-4 text-brand-text group-hover:text-brand-terracotta transition-colors">{article.title}</h2>
                   <p className="text-brand-text-muted mb-sp-4">{article.excerpt}</p>
                   
                   <div className="text-[10px] uppercase font-semibold tracking-widest border-b border-brand-text pb-1 flex items-center gap-2 w-fit group-hover:text-brand-terracotta group-hover:border-brand-terracotta transition-all">
                     Read Article <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                   </div>
                </div>

              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}

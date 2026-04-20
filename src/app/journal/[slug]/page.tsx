"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { journalArticles } from "@/lib/journal-data";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

export default function JournalDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const article = journalArticles.find(a => a.slug === resolvedParams.slug);

  if (!article) {
    notFound();
  }

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <main className="min-h-screen pt-0 pb-sp-12 bg-brand-bg">
      {/* ARTICLE HEADER HERO */}
      <section className="relative h-[60vh] md:h-[70vh] w-full flex items-end pb-sp-8 px-4 md:px-sp-6 lg:px-sp-12">
        <div className="absolute inset-0 z-0 bg-brand-dark-bg">
          <Image 
            src={article.coverImage} 
            alt={article.title} 
            fill 
            className="object-cover opacity-40 mix-blend-multiply" 
            priority
          />
        </div>
        
        <motion.div 
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-4xl"
        >
          <div className="flex items-center gap-3 mb-6">
             <span className="text-[10px] uppercase font-bold tracking-widest text-brand-terracotta bg-white/10 px-3 py-1 backdrop-blur-sm">{article.category}</span>
             <span className="text-[10px] uppercase tracking-widest text-white/70">{article.readTime}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl text-white mb-6 leading-tight">{article.title}</h1>
          <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-white/50 font-medium">
             <span>By {article.author}</span>
             <span>|</span>
             <span>{article.date}</span>
          </div>
        </motion.div>
      </section>

      {/* ARTICLE CONTENT */}
      <section className="px-4 py-sp-8 max-w-3xl mx-auto">
        <Link href="/journal" className="inline-flex items-center gap-2 text-[10px] uppercase font-semibold tracking-widest text-brand-text-muted hover:text-brand-terracotta transition-colors mb-sp-8">
           <ArrowLeft size={14} /> Back to Journal
        </Link>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="editorial-content"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
        
        {/* FOOTER CTA */}
        <div className="mt-sp-12 pt-sp-8 border-t border-brand-text/10 text-center">
           <h3 className="text-2xl font-serif text-brand-text mb-4">Start your bespoke journey.</h3>
           <p className="text-sm text-brand-text-muted mb-sp-6 max-w-md mx-auto">Now that you understand our standards, explore our collection or consult our master architects for a custom piece.</p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/catalog" className="px-8 py-4 bg-brand-text text-brand-bg text-[10px] uppercase font-bold tracking-widest hover:bg-brand-terracotta hover:text-white transition-all">
                Explore Catalog
              </Link>
              <Link href="/custom-order" className="px-8 py-4 border border-brand-text/20 text-[10px] uppercase font-bold tracking-widest hover:bg-brand-surface transition-all">
                Inquire Bespoke
              </Link>
           </div>
        </div>
      </section>
    </main>
  );
}

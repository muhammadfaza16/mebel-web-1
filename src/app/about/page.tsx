"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Dot } from "@/components/Ornament";

export default function AboutPage() {
  const artisans = [
    { name: "Bapak Sutrisno", role: "Master Carver", bio: "With 40 years of experience in intricate floral motifs of traditional Javanese style.", img: "/assets/artisteak_artisan_hands.png" },
    { name: "Agus Santoso", role: "Lead Carpenter", bio: "Specialist in structural integrity and modern architectural joinery.", img: "/assets/artisteak_workshop_hero.png" },
    { name: "Wayan Kerten", role: "Finishing Maestro", bio: "Expert in natural oils and protecting wood grain for global climates.", img: "/assets/artisteak_teak_grain_detail.png" },
    { name: "Siti Aminah", role: "Quality Control", bio: "Ensuring every grain meets our century-long durability standard.", img: "/assets/artisteak_workshop_hero.png" }
  ];

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <main className="min-h-screen pt-0 bg-brand-bg">
      {/* 1. MANIFESTO HERO (Contrast & Emphasis) */}
      <section className="bg-brand-dark-bg text-brand-dark-text pt-sp-16 pb-sp-16 px-4 text-center">
        <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }} className="max-w-4xl mx-auto">
          <span className="flex items-center justify-center gap-2 text-[11px] font-semibold tracking-[0.4em] text-brand-terracotta uppercase mb-8 block">
            <Dot className="w-1 h-1 bg-current" />
            Our Manifesto
          </span>
          <h1 className="text-4xl md:text-7xl text-white mb-8 font-serif leading-[1.1]">The soul of Teak. <br/> The hands of Jepara.</h1>
          <p className="text-lg md:text-2xl text-brand-dark-text/70 leading-relaxed font-light max-w-3xl mx-auto">
            We don't just sell furniture. We preserve an <span className="font-serif italic text-white/90">ancestral rhythm</span> of creation that has existed for centuries in the forests of Java.
          </p>
        </motion.div>
      </section>

      {/* 2. THE ORIGIN (Split Layout - Balance & Proportion) */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative h-[400px] lg:h-auto overflow-hidden group border-b lg:border-b-0 lg:border-r border-brand-text/10">
          <Image src="/assets/artisteak_workshop_hero.png" alt="Workshop Origin" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
        </div>
        <div className="py-sp-12 px-4 md:px-sp-6 lg:px-sp-16 flex flex-col justify-center bg-brand-surface">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}>
            <span className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.4em] text-brand-text-muted uppercase mb-4 block">
              <Dot className="w-1 h-1 bg-brand-terracotta" />
              Our Roots
            </span>
            <h2 className="mb-6 leading-[1.2] text-4xl">Established in <span className="font-serif italic text-brand-terracotta">1998</span>,<br/>driven by heritage.</h2>
            <p className="mb-sp-6 text-brand-text-muted leading-relaxed text-lg">
              Artisteak Jepara was born from a desire to bridge the gap between world-class engineering and traditional Javanese woodcraft. What started as a small workshop near the Teak forests of Central Java has evolved into a global architectural partner.
            </p>
            <div className="flex gap-sp-6 items-center">
               <div className="text-center">
                 <div className="text-4xl font-serif text-brand-text mb-1">25+</div>
                 <div className="text-[10px] uppercase tracking-[0.3em] text-brand-text-muted font-bold">Years of Mastery</div>
               </div>
               <div className="h-10 w-px bg-brand-text/10" />
               <div className="text-center">
                 <div className="text-4xl font-serif text-brand-text mb-1">200</div>
                 <div className="text-[10px] uppercase tracking-[0.3em] text-brand-text-muted font-bold">Local Artisans</div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. MEET THE MAKERS (Pattern & Variety) */}
      <section className="py-sp-16 px-4 md:px-sp-6 lg:px-sp-12 bg-brand-bg border-t border-brand-text/10">
        <div className="text-center mb-sp-8">
           <span className="flex items-center justify-center gap-2 text-[11px] font-semibold tracking-[0.4em] text-brand-text-muted uppercase mb-4 block">
             <Dot className="w-1 h-1 bg-brand-terracotta" />
             The People
           </span>
           <h2 className="font-serif text-4xl md:text-5xl">The hands behind the craft.</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-sp-4">
          {artisans.map((artisan, index) => (
            <motion.div 
              key={index} 
              initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}
              className="card-hard bg-brand-surface group cursor-default border-brand-text/5 hover:border-brand-text/10 transition-colors"
            >
              <div className="relative aspect-[4/5] overflow-hidden border-b border-brand-text/5 bg-brand-dark-bg/5">
                <Image src={artisan.img} alt={artisan.name} fill className="object-cover transition-all duration-700 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-brand-terracotta font-bold mb-3 block">
                  <Dot className="w-1 h-1 bg-current" />
                  {artisan.role}
                </span>
                <h4 className="text-xl mb-3 text-brand-text">{artisan.name}</h4>
                <p className="text-xs text-brand-text-muted leading-relaxed line-clamp-3">{artisan.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. THE TIMELINE (Movement & Rhythm) */}
      <section className="py-sp-12 px-4 md:px-sp-6 lg:px-sp-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center mb-sp-8 font-serif">Journey of Time.</h2>
          
          <div className="space-y-sp-6 relative before:absolute before:left-0 md:before:left-1/2 before:w-px before:h-full before:bg-brand-text/10">
            {[
              { year: "1998", text: "Founded as a specialized joinery workshop in the heart of Jepara." },
              { year: "2005", text: "First international partnership export to architectural firms in the EU." },
              { year: "2015", text: "Achieved full FSC and V-Legal certification for sustainable sourcing." },
              { year: "2026", text: "Relaunching as Artisteak — Defining future archetypes of Indonesian design." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-8 relative ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 text-center md:text-left">
                  <div className={`text-3xl font-serif text-brand-terracotta mb-2 ${i % 2 === 0 ? 'md:text-right' : ''}`}>{item.year}</div>
                  <p className={`text-sm text-brand-text-muted ${i % 2 === 0 ? 'md:text-right' : ''}`}>{item.text}</p>
                </div>
                <div className="w-4 h-4 rounded-full bg-brand-text border-4 border-brand-bg absolute left-0 md:left-1/2 -ml-2 top-2 z-10" />
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

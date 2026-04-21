"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ChevronDown, ShieldCheck, Droplet, Sun, Wind } from "lucide-react";
import { Dot } from "@/components/Ornament";

export default function CarePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    { q: "How do I maintain the natural honey tone of Teak?", a: "Teak naturally patinas to silver-grey over time. To maintain the honey tone, avoid direct sunlight and apply a high-quality teak sealer once a year. For indoor pieces, a light coating of natural wax oil every 6 months is sufficient." },
    { q: "Is your wood sustainably sourced?", a: "Absolutely. 100% of our timber is sourced from Perhutani (State Forestry) plantations. We hold FSC and V-Legal certifications, ensuring every piece is traceable to its forest origin." },
    { q: "Do you ship internationally?", a: "Yes, we ship globally. We handle architectural B2B orders and individual residential shipping. All items are packed in custom wooden crates for maximum protection during sea or air freight." },
    { q: "Can I request custom dimensions?", a: "Yes, we specialize in bespoke sizing. Most pieces in our catalog can be adjusted to fit your architectural requirements. Head to our Custom Order page to start the process." },
    { q: "How long is the production lead time?", a: "Lead times vary by complexity. Standard catalog items usually ship within 4-6 weeks. Large-scale custom architectural projects may take 8-12 weeks depending on the seasoning required for the wood." }
  ];

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <main className="min-h-screen pt-0 bg-brand-bg">
      {/* 1. HERO STRIP (Consistent Layout) */}
      <section className="bg-brand-dark-bg text-brand-dark-text pt-sp-16 pb-sp-8 px-4 md:px-sp-6 lg:px-sp-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
          <span className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.4em] text-brand-text-muted uppercase mb-sp-4 block">
            <Dot className="w-1 h-1 bg-brand-terracotta" />
            Care & Intelligence
          </span>
          <h1 className="text-4xl md:text-6xl text-white mb-0 leading-tight">Expert guidance on <br /> nurturing your legacy.</h1>
        </motion.div>
      </section>

      {/* 2. MAIN CONTENT GRID */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-screen border-t border-brand-text/10">
        
        {/* LEFT: CARE GUIDE */}
        <div className="border-r border-brand-text/10 p-4 md:p-sp-6 lg:p-sp-12 bg-brand-surface">
          <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }}>
            <span className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.4em] text-brand-text-muted uppercase mb-sp-4 block">
              <Dot className="w-1 h-1 bg-brand-terracotta" />
              Longevity Guide
            </span>
            <h2 className="text-3xl md:text-4xl mb-sp-8 leading-tight">Preserving <br/> Generations.</h2>
            
            <div className="space-y-sp-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-bg flex items-center justify-center border border-brand-text/10">
                   <Droplet size={20} className="text-brand-terracotta" />
                </div>
                <div>
                   <h4 className="text-sm uppercase tracking-widest font-bold mb-2">Moisture Control</h4>
                   <p className="text-sm text-brand-text-muted">Teak is resilient, but extreme humidity changes can cause wood to move. Maintain indoor humidity between 40-60%.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-bg flex items-center justify-center border border-brand-text/10">
                   <Sun size={20} className="text-brand-terracotta" />
                </div>
                <div>
                   <h4 className="text-sm uppercase tracking-widest font-bold mb-2">Sunlight Exposure</h4>
                   <p className="text-sm text-brand-text-muted">Direct UV rays can dry out natural oils. For indoor furniture, placement away from direct window glare will prolong the finish depth.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-bg flex items-center justify-center border border-brand-text/10">
                   <Wind size={20} className="text-brand-terracotta" />
                </div>
                <div>
                   <h4 className="text-sm uppercase tracking-widest font-bold mb-2">Seasonal Care</h4>
                   <p className="text-sm text-brand-text-muted">Apply a light natural oil coating once or twice a year to keep the wood nourished and the grain vibrant.</p>
                </div>
              </div>

               <div className="bg-brand-bg p-sp-6 border-l-4 border-brand-terracotta card-hard shadow-sm mt-sp-12 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <ShieldCheck size={80} />
                 </div>
                 <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                       <ShieldCheck className="text-brand-terracotta" size={24} />
                       <h4 className="text-sm uppercase tracking-[0.3em] font-bold text-brand-text m-0">The Artisteak Warranty</h4>
                    </div>
                    <p className="text-[13px] text-brand-text-muted leading-relaxed mb-0 max-w-md">
                      We provide a <span className="text-brand-text font-bold">5-year structural warranty</span> on all joinery. Our pieces are engineered to last a lifetime, standing by the craftsmanship of every hand-carved joint.
                    </p>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT: FAQ */}
        <div className="p-4 md:p-sp-6 lg:p-sp-12">
          <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }}>
            <span className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.4em] text-brand-text-muted uppercase mb-sp-4 block">
              <Dot className="w-1 h-1 bg-brand-terracotta" />
              Common Inquiries
            </span>
            <h2 className="text-3xl md:text-4xl mb-sp-8 leading-tight">Frequently Asked Questions.</h2>
            
            <div className="space-y-0">
               {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-brand-text/10 overflow-hidden">
                     <button 
                       onClick={() => setOpenFaq(openFaq === index ? null : index)}
                       className="w-full py-6 flex justify-between items-center text-left group"
                     >
                        <span className={`text-lg font-serif transition-colors ${openFaq === index ? "text-brand-terracotta" : "text-brand-text group-hover:text-brand-terracotta"}`}>
                          {faq.q}
                        </span>
                        <ChevronDown 
                          size={20} 
                          className={`transition-transform duration-500 ${openFaq === index ? "rotate-180" : ""}`} 
                        />
                     </button>
                     <AnimatePresence>
                        {openFaq === index && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                             <p className="pb-8 text-brand-text-muted text-sm leading-relaxed">
                               {faq.a}
                             </p>
                          </motion.div>
                        )}
                     </AnimatePresence>
                  </div>
               ))}
            </div>

            <div className="mt-sp-12 p-8 card-hard border-brand-text/10 text-center">
               <h4 className="text-xl mb-4">Still have questions?</h4>
               <p className="text-sm text-brand-text-muted mb-6">Our studio team is available via WhatsApp for direct consultation.</p>
               <a 
                 href="#" 
                 className="inline-block bg-brand-text text-brand-bg px-8 py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-brand-terracotta hover:text-white transition-colors"
               >
                 Chat with a Specialist
               </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

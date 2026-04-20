"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, ArrowRight, ArrowLeft, Check } from "lucide-react";

export default function CustomOrderPage() {
  const [step, setStep] = useState(1);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const furnitureTypes = [
    { id: "table", name: "Table / Desk", img: "/assets/artisteak_workshop_hero.png" },
    { id: "seating", name: "Seating / Lounge", img: "/assets/artisteak_teak_grain_detail.png" },
    { id: "storage", name: "Storage / Cabinet", img: "/assets/artisteak_artisan_hands.png" }
  ];

  const handleSubmit = () => {
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 600);
  };

  if (isSubmitted) {
     return (
      <main className="min-h-screen pt-24 pb-sp-12 bg-brand-bg flex flex-col items-center justify-center text-center px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl"
        >
          <div className="w-20 h-20 bg-brand-terracotta text-white flex items-center justify-center mx-auto mb-sp-8 shadow-2xl">
             <Check size={40} strokeWidth={1.5} />
          </div>
          <h1 className="text-4xl md:text-6xl font-serif text-brand-text mb-6">Request Received.</h1>
          <p className="text-brand-text-muted text-lg mb-sp-8 leading-relaxed">
            Your architectural vision has been shared with our lead carver. We will review the proportions and material requirements and contact you within 24 hours.
          </p>
          <div className="h-px w-12 bg-brand-terracotta/40 mx-auto mb-sp-8" />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/catalog" className="px-8 py-4 bg-brand-text text-brand-bg text-[10px] uppercase font-bold tracking-widest hover:bg-brand-terracotta hover:text-white transition-all">
              Explore Catalog
            </Link>
            <Link href="/" className="px-8 py-4 border border-brand-text/20 text-[10px] uppercase font-bold tracking-widest hover:bg-brand-surface transition-all">
              Back to Home
            </Link>
          </div>
        </motion.div>
      </main>
     );
  }

  return (
    <main className="min-h-screen pt-16 pb-sp-12 bg-brand-bg flex flex-col">
      
      {/* HERO PROMISE */}
      <section className="bg-brand-dark-bg text-center py-sp-8 px-4 border-b border-brand-text/10">
        <div className="max-w-2xl mx-auto">
           <span className="text-[10px] font-medium tracking-widest text-brand-dark-text/50 uppercase mb-4 block">· Bespoke Service</span>
           <h1 className="text-3xl md:text-5xl text-white mb-4 leading-tight">Your vision, our hands.</h1>
           <p className="text-brand-dark-text/70 text-sm max-w-lg mx-auto">From architectural integration to unique standalone masterpieces, our master artisans bring tailored visions to reality.</p>
        </div>
      </section>

      {/* PROGRESS TRACKER */}
      <section className="bg-brand-surface py-4 border-b border-brand-text/10 sticky top-[64px] z-30 shadow-sm">
        <div className="max-w-3xl mx-auto px-4 flex items-center justify-between">
           {[1, 2, 3, 4].map((num) => (
              <div key={num} className="flex items-center flex-1 last:flex-none">
                 <div className="flex flex-col items-center">
                    <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center text-[10px] md:text-xs transition-colors duration-500 ${
                      step >= num 
                      ? "bg-brand-text text-brand-bg" 
                      : "border border-brand-text/20 text-brand-text-muted"
                    }`}>
                       {step > num ? <Check size={12} /> : num}
                    </div>
                 </div>
                 {num !== 4 && (
                    <div className="flex-1 h-[1px] mx-2 md:mx-4 bg-brand-text/10 relative">
                       <motion.div 
                         className="absolute inset-y-0 left-0 bg-brand-text"
                         initial={{ width: "0%" }}
                         animate={{ width: step > num ? "100%" : "0%" }}
                         transition={{ duration: 0.5 }}
                       />
                    </div>
                 )}
              </div>
           ))}
        </div>
        <div className="max-w-3xl mx-auto px-4 mt-2 flex justify-between text-[8px] md:text-[9px] uppercase tracking-widest text-brand-text-muted font-medium">
           <span className={step >= 1 ? "text-brand-text" : ""}>1. Category</span>
           <span className={step >= 2 ? "text-brand-text" : ""}>2. Dimensions</span>
           <span className={step >= 3 ? "text-brand-text" : ""}>3. Context Space</span>
           <span className={step >= 4 ? "text-brand-text" : ""}>4. Contact Info</span>
        </div>
      </section>

      {/* DYNAMIC FORM AREA */}
      <section className="flex-1 max-w-3xl w-full mx-auto p-4 md:p-sp-6 lg:p-sp-8 flex flex-col justify-between">
        
        <AnimatePresence mode="wait">
          
          {/* STEP 1: CATEGORY */}
          {step === 1 && (
            <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex-1 flex flex-col justify-center">
               <h3 className="text-2xl mb-sp-6 text-brand-text text-center font-serif">What are we building for you?</h3>
               <div className="grid grid-cols-1 sm:grid-cols-3 gap-sp-3">
                  {furnitureTypes.map((type) => (
                     <div 
                       key={type.id} 
                       onClick={() => setSelectedType(type.id)}
                       className={`relative border p-6 text-center cursor-pointer transition-all duration-500 card-hard ${
                         selectedType === type.id 
                         ? "border-2 border-brand-terracotta bg-brand-terracotta/[0.03] shadow-md -translate-y-1" 
                         : "border-brand-text/10 bg-brand-surface hover:border-brand-text/30"
                       }`}
                     >
                        {/* Selection Badge */}
                        <AnimatePresence>
                          {selectedType === type.id && (
                            <motion.div 
                              initial={{ opacity: 0, scale: 0.5 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className="absolute top-2 right-2 w-5 h-5 bg-brand-terracotta text-white flex items-center justify-center rounded-none z-30"
                            >
                               <Check size={12} strokeWidth={3} />
                            </motion.div>
                          )}
                        </AnimatePresence>

                        <div className={`relative h-28 mb-4 overflow-hidden transition-all duration-500 ${selectedType === type.id ? 'opacity-100' : 'opacity-60 grayscale-[50%] mix-blend-multiply'}`}>
                           <Image src={type.img} alt={type.name} fill className="object-cover" />
                        </div>
                        <div className={`h-1 w-8 mx-auto mb-3 transition-all duration-500 ${selectedType === type.id ? "bg-brand-terracotta w-12" : "bg-brand-text/10"}`} />
                        <h5 className={`text-sm font-bold uppercase tracking-widest transition-colors ${selectedType === type.id ? "text-brand-text" : "text-brand-text-muted"}`}>
                          {type.name}
                        </h5>
                     </div>
                  ))}
               </div>
            </motion.div>
          )}

          {/* STEP 2: DIMENSIONS */}
          {step === 2 && (
            <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex-1 flex flex-col justify-center max-w-xl mx-auto w-full">
               <h3 className="text-2xl mb-2 text-brand-text text-center font-serif">Estimated Proportions</h3>
               <p className="text-center text-sm text-brand-text-muted mb-sp-6">Provide rough dimensions. Our architectural team will finalize the scaling with you.</p>
               
               <div className="flex flex-col md:flex-row gap-6 mb-8">
                  <div className="flex-1">
                     <label className="text-[10px] uppercase font-semibold tracking-widest text-brand-text-muted mb-2 block">Width (cm)</label>
                     <input type="number" placeholder="E.g. 200" className="input-editorial text-center text-2xl font-serif" />
                  </div>
                  <div className="flex-1">
                     <label className="text-[10px] uppercase font-semibold tracking-widest text-brand-text-muted mb-2 block">Depth (cm)</label>
                     <input type="number" placeholder="E.g. 90" className="input-editorial text-center text-2xl font-serif" />
                  </div>
                  <div className="flex-1">
                     <label className="text-[10px] uppercase font-semibold tracking-widest text-brand-text-muted mb-2 block">Height (cm)</label>
                     <input type="number" placeholder="E.g. 75" className="input-editorial text-center text-2xl font-serif" />
                  </div>
               </div>

               <div className="mb-sp-4">
                  <label className="text-[10px] uppercase font-semibold tracking-widest text-brand-text-muted mb-2 block">Material Preference</label>
                  <select className="input-editorial bg-transparent rounded-none appearance-none cursor-pointer">
                    <option value="teak" className="bg-brand-bg text-brand-text">Solid Grade-A Teak (Recommended)</option>
                    <option value="trembesi" className="bg-brand-bg text-brand-text">Trembesi Live Edge</option>
                    <option value="mahogany" className="bg-brand-bg text-brand-text">Dark Mahogany</option>
                  </select>
               </div>
            </motion.div>
          )}

          {/* STEP 3: CONTEXT SPACE (Upload) */}
          {step === 3 && (
            <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex-1 flex flex-col justify-center">
               <h3 className="text-2xl mb-2 text-brand-text text-center font-serif">The Context Space</h3>
               <p className="text-center text-sm text-brand-text-muted mb-sp-6">Upload photos of the room where the piece will reside. This helps us suggest the right wood grain flow and finish tone.</p>
               
               <div className="border border-dashed border-brand-text/30 bg-brand-surface/50 rounded-none p-sp-8 text-center flex flex-col items-center justify-center cursor-pointer hover:bg-brand-text/5 transition-colors duration-300">
                  <div className="w-12 h-12 rounded-full border border-brand-text/20 flex items-center justify-center mb-sp-3 bg-brand-bg text-brand-text">
                     <Upload size={18} />
                  </div>
                  <span className="text-sm font-medium mb-1">Click to browse or drag image here</span>
                  <span className="text-[10px] uppercase tracking-widest text-brand-text-muted">JPG, PNG, HEIC up to 10MB</span>
               </div>
               
               <div className="mt-8">
                  <label className="text-[10px] uppercase font-semibold tracking-widest text-brand-text-muted mb-2 block">Additional Design Notes</label>
                  <textarea rows={3} placeholder="Tell us about the emotional vibe you want..." className="input-editorial resize-none"></textarea>
               </div>
            </motion.div>
          )}

          {/* STEP 4: CONTACT & CONFIRM */}
          {step === 4 && (
            <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex-1 flex flex-col justify-center max-w-lg mx-auto w-full">
               <h3 className="text-2xl mb-2 text-brand-text text-center font-serif">Leave your mark.</h3>
               <p className="text-center text-sm text-brand-text-muted mb-sp-6">Our master craftsman will review your request and reach out within 24 hours.</p>
               
               <div className="flex flex-col gap-8">
                  <div>
                     <label className="text-[10px] uppercase font-semibold tracking-widest text-brand-text-muted mb-2 block">Full Name</label>
                     <input type="text" placeholder="John Doe" className="input-editorial" />
                  </div>
                  <div>
                     <label className="text-[10px] uppercase font-semibold tracking-widest text-brand-text-muted mb-2 block">Email Address</label>
                     <input type="email" placeholder="john@example.com" className="input-editorial" />
                  </div>
                  <div>
                     <label className="text-[10px] uppercase font-semibold tracking-widest text-brand-text-muted mb-2 block">WhatsApp Number (Optional)</label>
                     <input type="tel" placeholder="+62 8..." className="input-editorial" />
                  </div>
               </div>
            </motion.div>
          )}

        </AnimatePresence>

        {/* NAVIGATION BUTTONS */}
        <div className="flex justify-between items-center mt-sp-12 pt-6 border-t border-brand-text/10">
           {step > 1 ? (
             <button 
               onClick={() => setStep(step - 1)} 
               className="text-[10px] uppercase font-semibold tracking-widest pb-1 border-b border-brand-text hover:text-brand-terracotta hover:border-brand-terracotta transition-colors flex items-center gap-2"
             >
               <ArrowLeft size={14} /> Back
             </button>
           ) : (
             <div /> // Empty div for spacing
           )}
           
           <button 
             onClick={() => {
               if (step < 4) setStep(step + 1);
               else handleSubmit();
             }} 
             disabled={step === 1 && !selectedType}
             className={`px-8 py-4 text-xs font-semibold uppercase tracking-widest transition-colors duration-300 flex items-center gap-3 ${
               (step === 1 && !selectedType) 
               ? "bg-brand-text/10 text-brand-text-muted cursor-not-allowed" 
               : "bg-brand-text text-brand-bg hover:bg-brand-terracotta hover:text-white"
             }`}
           >
             {step === 4 ? "Submit Inquiry" : "Continue"} <ArrowRight size={14} />
           </button>
        </div>

      </section>
    </main>
  );
}

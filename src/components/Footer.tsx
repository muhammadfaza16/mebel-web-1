"use client";

import Link from "next/link";
import { Mail, Instagram, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-bone pt-gr-8 pb-gr-6 px-gr-5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gr-8 mb-gr-8">
          <div className="md:col-span-2">
            <h2 className="text-gr-6 font-serif tracking-tighter mb-gr-4">KAYU MODERN</h2>
            <p className="opacity-70 text-sm max-w-sm font-light leading-relaxed">
              Menggabungkan tradisi empat dekade dengan visi modernitas. Mahakarya dari jantung Jawa Tengah untuk ruang kontemporer dunia.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-[0.6rem] tracking-[0.4em] font-bold uppercase opacity-60">Navigasi</h4>
            <ul className="space-y-3 text-[0.7rem] tracking-[0.2em] font-medium uppercase transition-all">
              <li><Link href="/koleksi" className="hover:text-gold-muted transition-colors">Koleksi Kurasi</Link></li>
              <li><Link href="/studio" className="hover:text-gold-muted transition-colors">Studio & Atelier</Link></li>
              <li><Link href="/pesan-khusus" className="hover:text-gold-muted transition-colors">Pesan Khusus</Link></li>
              <li><Link href="/tentang-kami" className="hover:text-gold-muted transition-colors">Tentang Kami</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-[0.6rem] tracking-[0.4em] font-bold uppercase opacity-60">Hubungi</h4>
            <ul className="space-y-3 text-[0.7rem] tracking-[0.2em] font-medium uppercase">
              <li className="flex items-center gap-3"><Mail size={14} className="opacity-70" /> studio@kayumodern.com</li>
              <li className="flex items-center gap-3"><Instagram size={14} className="opacity-70" /> @kayumodern</li>
              <li className="flex items-center gap-3"><Globe size={14} className="opacity-70" /> Jakarta / Jepara</li>
            </ul>
          </div>
        </div>

        <div className="pt-gr-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-gr-4 opacity-50 text-[0.55rem] tracking-[0.5em] font-bold uppercase">
          <p>© 2026 Kayu Modern Indonesia. Seluruh Hak Cipta Dilindungi.</p>
          <div className="flex gap-gr-6">
            <span className="cursor-pointer hover:text-white transition-colors">Syarat & Ketentuan</span>
            <span className="cursor-pointer hover:text-white transition-colors">Privasi</span>
          </div>
        </div>
      </div>

      {/* Footer Branding Watermark */}
      <div className="absolute -bottom-gr-8 -right-gr-8 text-[35vw] font-serif font-bold text-white/[0.02] select-none pointer-events-none leading-none">
        K
      </div>
    </footer>
  );
}

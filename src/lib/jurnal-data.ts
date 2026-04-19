export interface JournalPost {
  id: string;
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  content: string[];
  quote?: string;
}

export const journalPosts: JournalPost[] = [
  { 
    id: "1", 
    title: "Psikologi Material Kayu dalam Hunian Modern", 
    date: "20 APR 2026", 
    category: "GAYA HIDUP", 
    image: "/assets/journal-1.png",
    excerpt: "Bagaimana tekstur dan aroma kayu jati asli dapat menurunkan tingkat stres dan meningkatkan fokus di ruang kerja rumah Anda.",
    content: [
      "BERBICARA SOAL INTERIOR MEWAH, SERING KALI KITA TERJEBAK PADA VISUAL. NAMUN, MATERIALITAS KAYU ADALAH PENGALAMAN MULTISENSORI. DALAM STUDI TERBARU MENGENAI BIOFILIA, KEHADIRAN SERAT KAYU ALAMI DI RUANG KERJA TERBUKTI MAMPU MENURUNKAN KADAR KORTISOL SERTA MENSTIMULASI KREATIVITAS.",
      "KAYU JATI (TECTONA GRANDIS) MEMILIKI KARAKTERISTIK UNIK: MINYAK ALAMINYA BUKAN HANYA MENJAGA DURABILITAS, TAPI JUGA MENGELUARKAN AROMA KHAS YANG MEMBERIKAN EFEK 'GROUNDING'. DI KAYU MODERN, KAMI MEMPERTAHANKAN TEKSTUR INI DENGAN FINISHING NATURAL WAX, MEMBIARKAN KAYU TETAP 'BERNAPAS' BERSAMA PENGHUNINYA.",
      "MEMILIH FURNITUR BUKAN HADI SEBAGAI PENGISI RUANG, MELAINKAN SEBAGAI REKAN DALAM KESEHARIAN. MEJA JATI YANG KOKOH MEMBERIKAN RASA STABILITAS YANG TIDAK BISA DIBERIKAN OLEH MATERIAL SINTETIS MANAPUN."
    ],
    quote: "KAYU TIDAK PERNAH MATI; IA HANYA BERHENTI TUMBUH UNTUK MULAI BERCERITA."
  },
  { 
    id: "2", 
    title: "Menelusuri Jati Berkelanjutan di Jawa Tengah", 
    date: "15 MAR 2026", 
    category: "WARISAN", 
    image: "/assets/journal-2.png",
    excerpt: "Perjalanan kami ke hutan rakyat bersertifikat untuk memilih material yang akan menjadi pusaka generasi mendatang.",
    content: [
      "KEBERLANJUTAN BUKANLAH TREN BAGI KAMI, MELAINKAN SYARAT MUTLAK. JATI YANG KAMI GUNAKAN BERASAL DARI HUTAN RAKYAT YANG DIKELOLA DENGAN SISTEM TEBANG PILIH YANG KETAT.",
      "KAMI MELIHAT SETIAP POHON SEBAGAI INVESTASI WAKTU. BEBERAPA PAPAN YANG KITA LIHAT HARI INI TELAH MELEWATI MASA PERTUMBUHAN LEBIH DARI 40 TAHUN, MENUNGGU MOMEN YANG TEPAT UNTUK MENJADI BAGIAN DARI HUNIAN ANDA."
    ]
  },
  { 
    id: "3", 
    title: "Koleksi Pilihan Kurator 2026", 
    date: "02 FEB 2026", 
    category: "KURASI", 
    image: "/assets/journal-3.png",
    excerpt: "Menilik kurasi furnitur skulptural yang mendefinisikan tren interior minimalis di musim semi tahun ini.",
    content: [
      "DI TAHUN 2026, KAMI MELIHAT PERGESERAN KE ARAH BENTUK-BENTUK YANG LEBIH SKULPTURAL. FURNITUR TIDAK LAGI BERFUNGSI SECARA PASIF, TAPI MENJADI TITIK FOKUS ARSITEKTURAL DALAM RUANGAN."
    ]
  },
  { 
    id: "4", 
    title: "Seni Sambungan: Mortise & Tenon vs Modernitas", 
    date: "10 JAN 2026", 
    category: "TEKNIK", 
    image: "/assets/journal-4.png",
    excerpt: "Mengapa teknik sambungan kayu kuno tetap menjadi standar emas dalam kekuatan furnitur mewah masa kini.",
    content: [
      "TEKNIK MORTISE DAN TENON ADALAH BUKTI BAHWA PRESISI BISA DICAPAI TANPA LOGAM. KEKUATANNYA TERLETAK PADA PENYESUAIAN ANTARA LUBANG DAN POROS YANG DIHITUNG SECARA MATEMATIS."
    ]
  }
];

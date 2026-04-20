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
    title: "Psikologi Material: Mengapa Kayu Jati Menenangkan Jiwa", 
    date: "20 APR 2026", 
    category: "FILOSOFI", 
    image: "/assets/journal-1.png",
    excerpt: "Lebih dari sekadar visual, kayu jati membawa memori alam ke dalam hunian. Mari menelusuri bagaimana serat alami ini mempengaruhi ketenangan kita.",
    content: [
      "Secara alami, manusia memiliki keterikatan yang mendalam dengan alam—sebuah konsep yang sering disebut sebagai Biophilia. Di tengah hiruk-pikuk kehidupan modern yang didominasi oleh layar dan beton, kehadiran material organik seperti kayu jati asli bertindak sebagai 'sauh' yang menenangkan sistem saraf kita.",
      "Kayu jati bukan sekadar material mati. Ia memiliki tekstur yang hangat saat disentuh, aroma minyak alami yang khas, dan kemampuan untuk meredam gema di dalam ruangan. Setiap garis serat pada furnitur Anda adalah rekaman waktu, sebuah lukisan alam yang tidak akan pernah sama antara satu keping dengan keping lainnya.",
      "Studi menunjukkan bahwa bekerja atau beristirahat di ruangan dengan elemen kayu autentik dapat menurunkan kadar kortisol dan meningkatkan fokus. Di Kayu Modern, kami percaya bahwa furnitur yang baik tidak hanya mengisi ruang, tetapi juga memberikan ruang bagi jiwa untuk bernapas kembali."
    ],
    quote: "Kayu adalah jembatan antara keheningan hutan dan kehangatan rumah."
  },
  { 
    id: "2", 
    title: "Warisan 1986: Menyelaraskan Intuisi Tangan dan Presisi Arsitektur", 
    date: "15 MAR 2026", 
    category: "WARISAN", 
    image: "/assets/journal-2.png",
    excerpt: "Perjalanan Kayu Modern dimulai dari sebuah bengkel kecil di Jepara. Hari ini, kami mendefinisikan ulang apa artinya menjadi pengrajin modern.",
    content: [
      "Jepara tahun 1986 adalah tempat di mana intuisi tangan menjadi satu-satunya kompas. Di masa itu, Master Artisan kami belajar bukan dari buku, melainkan dari cara kayu merespons setiap pahatan. Namun, zaman berubah, dan kebutuhan akan presisi menjadi mutlak saat furnitur harus bersanding dengan estetika arsitektur modern yang bersih.",
      "Evolusi kami di Kayu Modern adalah tentang penyelarasan. Kami tetap menggunakan cara-cara lama untuk aspek yang membutuhkan 'perasaan', seperti pemilihan corak kayu dan tahap akhir (finishing). Namun, kami menggunakan kalkulasi serta rekayasa modern untuk memastikan setiap sudut memiliki standar toleransi nol.",
      "Ini adalah tentang menjaga ruh dari masa lalu sambil tetap relevan bagi kebutuhan masa kini. Kami tidak meninggalkan tradisi, kami justru memberikan tradisi tersebut sebuah struktur yang kuat agar bisa dinikmati hingga dekade-dekade mendatang."
    ],
    quote: "Kami tidak mengubah cara kerja kayu, kami hanya mempertajam cara kami melihatnya."
  },
  { 
    id: "3", 
    title: "Ekologi Kemewahan: Menelusuri Jejak Etika di Balik Serat Kayu", 
    date: "02 FEB 2026", 
    category: "ETIKA", 
    image: "/assets/journal-3.png",
    excerpt: "Membeli furnitur mewah bukan hanya soal harga, tapi soal tanggung jawab. Melalui SVLK, kami pastikan setiap keping kayu memiliki asal-usul yang jelas.",
    content: [
      "Banyak yang bertanya, apa yang membuat sebuah furnitur benar-benar bernilai tinggi? Bagi kami, jawabannya terletak pada kejujuran asal-usulnya. Di Kayu Modern, kemewahan tidak boleh datang dari eksploitasi alam yang sembarangan.",
      "Melalui sertifikasi SVLK (Sistem Verifikasi Legalitas Kayu), kami melacak setiap jati yang kami gunakan langsung ke hutan rakyat tempat ia tumbuh. Kami percaya bahwa kayu yang dipanen dengan penuh rasa hormat terhadap ekosistem akan membawa energi yang berbeda ke dalam rumah Anda.",
      "Keputusan Anda untuk memilih furnitur dari sumber berkelanjutan adalah investasi untuk masa depan. Ini adalah janji bahwa keindahan tidak harus mengorbankan keberlangsungan hidup generasi setelah kita."
    ],
    quote: "Kemewahan sejati adalah ketika keindahan di depan mata tidak meninggalkan luka di tempat lain."
  },
  { 
    id: "4", 
    title: "Simfoni Sambungan: Keajaiban Mortise & Tenon dalam Konstruksi Furnitur", 
    date: "10 JAN 2026", 
    category: "TEKNIK", 
    image: "/assets/journal-4.png",
    excerpt: "Mengapa teknik sambungan kuno tetap menjadi standar emas dalam kekuatan furnitur mewah? Mari menilik seni sambungan tanpa paku.",
    content: [
      "Dalam dunia pertukangan klasik, paku adalah pilihan terakhir, atau bahkan tabu. Rahasia kekuatan furnitur-furnitur pusaka yang bertahan ratusan tahun terletak pada teknik Mortise and Tenon—sebuah sistem 'lubang dan poros' yang mengunci satu sama lain secara organik.",
      "Teknik ini membutuhkan presisi yang luar biasa. Jika terlalu longgar, konstruksi akan goyang. Jika terlalu rapat, serat kayu bisa pecah. Di sinilah letak seni yang sebenarnya: menciptakan kepadatan yang sempurna sehingga kayu seolah-olah menyatu kembali menjadi satu kesatuan yang utuh.",
      "Metode ini memastikan bahwa beban furnitur didistribusikan secara merata ke seluruh serat kayu, bukan hanya bertumpu pada sekrup logam. Hasilnya adalah furnitur yang tidak hanya kokoh, tetapi juga memiliki integritas struktur yang jujur."
    ],
    quote: "Sambungan yang kuat tidak butuh bantuan luar, ia hanya butuh presisi yang tulus."
  }
];

export interface CatalogProduct {
  id: string;
  name: string;
  category: string;
  material: string;
  price: string;
  isNew?: boolean;
  shortDescription: string;
  fullDescription: string;
  images: { src: string; label: string }[];
  dimensions: { width: string; depth: string; height: string };
  finishes: { name: string; colorClass: string; textColorClass: string }[];
  tabs: {
    materials: string;
    maintenance: string;
    shipping: string;
  };
}

export const catalogProducts: CatalogProduct[] = [
  {
    id: "heritage-dining",
    name: "Heritage Dining Table",
    category: "Dining",
    material: "Solid Teak",
    price: "IDR 35.000.000",
    shortDescription: "A monumental dining centerpiece forged from reclaimed Javanese teak.",
    fullDescription: "Designed to anchor the dining room, the Heritage Dining Table balances muscular architectural proportions with the organic warmth of solid Grade-A teak. Hand-planed surfaces reveal the unique history of the timber, utilizing butterfly joints to stabilize natural splits.",
    images: [
      { src: "/assets/artisteak_artisan_hands.png", label: "Front" },
      { src: "/assets/artisteak_teak_grain_detail.png", label: "Grain" },
      { src: "/assets/artisteak_workshop_hero.png", label: "Joinery" }
    ],
    dimensions: { width: "240 cm", depth: "100 cm", height: "76 cm" },
    finishes: [
      { name: "Raw", colorClass: "bg-[#D4CCC0]", textColorClass: "text-brand-text" },
      { name: "Honey", colorClass: "bg-[#A8885B]", textColorClass: "text-brand-text" },
      { name: "Ebony", colorClass: "bg-[#4A3219]", textColorClass: "text-brand-text-muted" }
    ],
    tabs: {
      materials: "Crafted exclusively from Grade A mature Tectona Grandis (Teak) harvested from government-regulated plantations. Kiln-dried to precisely 8-12% moisture content.",
      maintenance: "Wipe down with a dry, soft microfiber cloth weekly. Clean spills immediately with a mild natural soap solution.",
      shipping: "Requires specialized white-glove delivery due to monumental weight. Worldwide crated shipping available."
    }
  },
  {
    id: "kalpataru-lounge",
    name: "The Kalpataru Lounge",
    category: "Living",
    material: "Teak & Rattan",
    price: "IDR 18.500.000",
    shortDescription: "An absolute architectural statement. Hand-carved from century-old reclaimed Javanese teak.",
    fullDescription: "An absolute architectural statement. Hand-carved from century-old reclaimed Javanese teak, utilizing rigid mortise and tenon joinery for eternal stability. The Kalpataru introduces a low-slung, relaxed posture while maintaining sharp, uncompromising lines.",
    images: [
      { src: "/assets/artisteak_workshop_hero.png", label: "Ang.1" },
      { src: "/assets/artisteak_teak_grain_detail.png", label: "Grain" },
      { src: "/assets/artisteak_artisan_hands.png", label: "Joinery" }
    ],
    dimensions: { width: "85 cm", depth: "70 cm", height: "75 cm" },
    finishes: [
      { name: "Raw", colorClass: "bg-[#D4CCC0]", textColorClass: "text-brand-text" },
      { name: "Honey", colorClass: "bg-[#A8885B]", textColorClass: "text-brand-text" },
      { name: "Ebony", colorClass: "bg-[#4A3219]", textColorClass: "text-brand-text-muted" }
    ],
    tabs: {
      materials: "Handwoven natural rattan backrest integrated seamlessly into a solid Teak frame. FSC Certified Wood completely traceable.",
      maintenance: "Teak is famously low-maintenance. Vacuum rattan sections lightly to avoid dust buildup.",
      shipping: "Ships fully assembled in impact-resistant crates."
    }
  },
  {
    id: "majapahit-bed",
    name: "Majapahit Platform Bed",
    category: "Bedroom",
    material: "Solid Trembesi",
    price: "IDR 42.000.000",
    isNew: true,
    shortDescription: "A grounding presence built from single, massive slabs of Trembesi wood.",
    fullDescription: "The Majapahit Platform Bed redefines the sanctuary of sleep. Designed around imposing, unjoined slabs of Indonesian Trembesi (Suar wood), it features a low-profile stance and a deeply sculptural headboard that honors the tree's original live edge.",
    images: [
      { src: "/assets/artisteak_artisan_hands.png", label: "Profile" },
      { src: "/assets/artisteak_teak_grain_detail.png", label: "Detail" },
      { src: "/assets/artisteak_workshop_hero.png", label: "Texture" }
    ],
    dimensions: { width: "200 cm", depth: "220 cm", height: "90 cm" },
    finishes: [
      { name: "Natural Oil", colorClass: "bg-[#8b5a2b]", textColorClass: "text-brand-text" },
      { name: "Charred", colorClass: "bg-[#252525]", textColorClass: "text-brand-text-muted" }
    ],
    tabs: {
      materials: "Single-slab Trembesi (Monkeypod wood) displaying intense, interlocking grain patterns. Sourced from sustainable avenues in East Java.",
      maintenance: "Requires bi-annual oiling to prevent drying. Avoid placing near direct heat sources.",
      shipping: "Heavy architectural piece. Delivered and assembled on-site by our technical team."
    }
  },
  {
    id: "senayan-chair",
    name: "Senayan Accent Chair",
    category: "Living",
    material: "Teak & Leather",
    price: "IDR 12.000.000",
    shortDescription: "Sleek Javanese modernism featuring hand-stitched leather slings.",
    fullDescription: "A brutalist yet refined accent chair. The Senayan utilizes rigid geometries in its Teak frame, contrasted by the supple draping of premium, full-grain vegetable-tanned leather that will develop a rich patina over decades.",
    images: [
      { src: "/assets/artisteak_teak_grain_detail.png", label: "Front" },
      { src: "/assets/artisteak_workshop_hero.png", label: "Side" },
      { src: "/assets/artisteak_artisan_hands.png", label: "Leather" }
    ],
    dimensions: { width: "70 cm", depth: "80 cm", height: "70 cm" },
    finishes: [
      { name: "Tan Leather", colorClass: "bg-[#c0865a]", textColorClass: "text-brand-text" },
      { name: "Black Leather", colorClass: "bg-[#1a1a1a]", textColorClass: "text-brand-text-muted" }
    ],
    tabs: {
      materials: "Solid Grade-A Teak body. Premium full-grain cowhide leather sling sourced from legendary Indonesian tanneries.",
      maintenance: "Condition leather semi-annually. Wipe wood with dry cloth.",
      shipping: "Ships internationally via air or sea freight."
    }
  },
  {
    id: "batavia-cabinet",
    name: "Batavia Display Cabinet",
    category: "Storage",
    material: "Mahogany",
    price: "IDR 28.000.000",
    shortDescription: "A towering monument to organization, inspired by Dutch-colonial aesthetics.",
    fullDescription: "Standing over two meters tall, the Batavia Display Cabinet features intricate glass panelling and profound mahogany joinery. It acts as a gallery for your cherished possessions, while being a masterpiece itself.",
    images: [
      { src: "/assets/artisteak_workshop_hero.png", label: "Front" },
      { src: "/assets/artisteak_teak_grain_detail.png", label: "Glass" },
      { src: "/assets/artisteak_artisan_hands.png", label: "Carving" }
    ],
    dimensions: { width: "120 cm", depth: "45 cm", height: "220 cm" },
    finishes: [
      { name: "Dark Walnut", colorClass: "bg-[#3e2723]", textColorClass: "text-brand-text-muted" },
      { name: "Classic Mahogany", colorClass: "bg-[#4e342e]", textColorClass: "text-brand-text-muted" }
    ],
    tabs: {
      materials: "Indonesian Mahogany frame with tempered architectural glass. Solid brass hardware cast in local foundries.",
      maintenance: "Use glass cleaner for windows. Wood requires standard dusting.",
      shipping: "Shipped in two interlocking pieces for safer transport."
    }
  },
  {
    id: "bali-stool",
    name: "Bali Counter Stool",
    category: "Dining",
    material: "Solid Teak",
    price: "IDR 4.500.000",
    shortDescription: "Ergonomic continuous curves carved from a single block of wood.",
    fullDescription: "A brutalist approach to seating. The Bali Counter Stool features a dished seat for surprising comfort, supported by thick, tapered legs utilizing through-tenon joints that remain visible from the top.",
    images: [
      { src: "/assets/artisteak_artisan_hands.png", label: "Overview" },
      { src: "/assets/artisteak_workshop_hero.png", label: "Seat" },
      { src: "/assets/artisteak_teak_grain_detail.png", label: "Joint" }
    ],
    dimensions: { width: "45 cm", depth: "40 cm", height: "65 cm" },
    finishes: [
      { name: "Raw", colorClass: "bg-[#D4CCC0]", textColorClass: "text-brand-text" },
      { name: "Honey", colorClass: "bg-[#A8885B]", textColorClass: "text-brand-text" }
    ],
    tabs: {
      materials: "100% Solid Grade-A Teak. No veneers, no compromises.",
      maintenance: "Virtually maintenance-free. Wipe down with dry cloth.",
      shipping: "Ships in compact boxes, minor assembly required."
    }
  }
];

export function getProductById(id: string): CatalogProduct | undefined {
  return catalogProducts.find(product => product.id === id);
}

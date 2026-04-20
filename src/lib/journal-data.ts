export interface JournalArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  coverImage: string;
  content: string; // Production-ready HTML/JSX content
}

export const journalArticles: JournalArticle[] = [
  {
    id: "anatomy-of-javanese-teak",
    title: "The Anatomy of Javanese Teak: Why Age Matters",
    slug: "anatomy-of-javanese-teak",
    excerpt: "In the realm of bespoke furniture, not all teak is created equal. Discover why we strictly source Grade-A mature Tectona Grandis from government-regulated plantations.",
    category: "Materials",
    date: "October 12, 2023",
    readTime: "5 min read",
    author: "Master Craftsman",
    coverImage: "/assets/artisteak_teak_grain_detail.png",
    content: `
      <p class="lead">There is a profound difference between furniture built for a decade and furniture built for a century. The distinction begins long before the first saw makes contact with the wood. It begins in the soil of Central Java.</p>
      
      <h2>The Truth About Tectona Grandis</h2>
      <p>Teak (<em>Tectona Grandis</em>) is globally renowned for its exceptional durability and natural weather resistance. However, the commercial furniture market is flooded with young, plantation-grown teak—often harvested at merely 10 to 15 years of age. While technically 'teak', this juvenile wood lacks the dense cellular structure and rich oil content that earned the species its legendary reputation.</p>
      
      <p>At Artisteak Jepara, we operate under a stricter paradigm. We refuse to work with juvenile timber. Our structural baseline requires <strong>Grade-A mature teak</strong>, harvested exclusively from Perhutani (Indonesian State Forestry Enterprise) plantations at an absolute minimum age of 40 to 60 years.</p>
      
      <blockquote>
        <p>"True structural integrity cannot be rushed. A timber must survive decades of monsoons and droughts to develop the dense silica matrix required for generational furniture."</p>
      </blockquote>
      
      <h2>Why Age Dictates Quality</h2>
      <p>As a teak tree matures, the heartwood at its core undergoes a profound chemical transformation. It continuously accumulates natural rubber, silica, and complex natural resins. These elements are the secret to teak's extraordinary engineering properties.</p>
      
      <ul>
        <li><strong>Silica Concentration:</strong> High levels of silica make mature teak highly resistant to water, rot, and pest infestation. It is a natural armor.</li>
        <li><strong>Dimensional Stability:</strong> Older trees yield wood with a tighter, more uniform grain structure. This minimizes the risk of warping or bowing when subjected to fluctuating humidity levels worldwide.</li>
        <li><strong>Aesthetic Depth:</strong> Juvenile teak often presents a pale, washed-out appearance. Mature heartwood possesses a deep, golden-brown hue with dramatic, contrasting black mineral streaks. It is a canvas painted by time.</li>
      </ul>
      
      <h2>The Ethics of Procurement</h2>
      <p>Beauty cannot come at the cost of the environment. Every cubic meter of teak we utilize is strictly regulated, SVLK-certified (Indonesian Legal Wood), and fully traceable back to its origin block in the Perhutani plantations. By respecting the natural growth cycle of the forest, we ensure that our architectural visions contribute to ecological sustainability, rather than depletion.</p>
      
      <p>When you commission a piece from Artisteak, you are not merely purchasing wood. You are inheriting a piece of Javanese natural history, preserved and elevated through uncompromising craftsmanship.</p>
    `
  },
  {
    id: "science-mortise-tenon",
    title: "Mastering Time: The Science of Mortise & Tenon",
    slug: "science-mortise-tenon",
    excerpt: "Screws strip. Glue degrades. We reject modern shortcuts in favor of traditional Jepara joinery, engineering furniture that utilizes the natural physics of wood.",
    category: "Craftsmanship",
    date: "November 04, 2023",
    readTime: "6 min read",
    author: "Head of Engineering",
    coverImage: "/assets/artisteak_artisan_hands.png",
    content: `
      <p class="lead">Modern fast-furniture relies heavily on metal fasteners and synthetic adhesives. While expedient for mass production, these methods introduce structural weak points that guarantee eventual failure. Wood is not a static material; it breathes, expands, and contracts. Hard, inflexible metal fights this natural movement, eventually tearing the wood fibers apart.</p>
      
      <h2>The Mortise and Tenon Paradigm</h2>
      <p>At Artisteak, we look to the past for structural superiority. The foundation of our carpentry is the <strong>mortise and tenon joint</strong>—a technique perfected over thousands of years and elevated to an art form by the master woodworkers of Jepara.</p>
      
      <p>A mortise (a cavity) is precisely chiseled out of one piece of wood, while a tenon (a projected tongue) is carved onto the end of another. When joined together, they form a near-perfect mechanical lock.</p>
      
      <h2>Why Wood-to-Wood Wins</h2>
      <p>The engineering brilliance of a properly executed mortise and tenon joint lies in its sympathetic relationship with the material.</p>
      
      <ul>
        <li><strong>Unified Movement:</strong> Because both pieces of the joint are made of the same organic material, they respond similarly to environmental shifts in temperature and humidity. They expand and contract together, maintaining structural integrity without tearing.</li>
        <li><strong>Maximum Surface Area:</strong> A tenon fits snugly into the mortise, providing massive surface area for sheer strength. Lateral forces that would snap a metal screw are effortlessly absorbed by the interlocking wood fibers.</li>
        <li><strong>The Wooden Peg (Dowell):</strong> We further secure our joints by driving a hard teak dowel through both the mortise and the tenon. This draws the joint impossibly tight, creating a mechanical bond that locks forever.</li>
      </ul>
      
      <blockquote>
        <p>"A joint should not be a battleground between opposing materials. It should be a seamless continuation of the architecture."</p>
      </blockquote>
      
      <h2>Craftsmanship over Convenience</h2>
      <p>Carving a seamless mortise and tenon joint cannot be rushed by automated machinery. It requires the sensitive hand and trained eye of an artisan. It requires patience. This commitment to traditional craftsmanship is why an Artisteak dining table doesn't sway or wobble, whether it's supporting a family dinner today or a century from now.</p>
    `
  },
  {
    id: "global-acclimation",
    title: "Global Acclimation: Preparing Wood for the World",
    slug: "global-acclimation",
    excerpt: "How we ensure our bespoke pieces survive the journey from tropical Java to arid deserts and freezing winters without cracking or warping.",
    category: "Process",
    date: "December 18, 2023",
    readTime: "4 min read",
    author: "Logistics & Quality Control",
    coverImage: "/assets/artisteak_workshop_hero.png",
    content: `
      <p class="lead">One of the greatest challenges in crafting solid wood furniture for an international clientele is environmental disparity. Jepara, Central Java, is hot and highly humid. A solid teak table carved here holds considerable moisture. If shipped immediately to a dry climate like Arizona or an aggressively heated apartment in wintertime London, that wood will rapidly release moisture, causing violent shrinkage, cracking, and structural failure.</p>
      
      <h2>The Kiln-Drying Imperative</h2>
      <p>The single most critical step in preparing our furniture for the global stage happens before the carving even begins: intensive Kiln Drying.</p>
      
      <p>Freshly cut green teak can have a moisture content upward of 40%. At Artisteak, every plank is loaded into specialized industrial kilns. Over weeks, we carefully manipulate temperature and airflow to artificially age the wood, slowly drawing the moisture out from the absolute core of the timber, not just the surface.</p>
      
      <h2>Targeting 8-12% Moisture Content</h2>
      <p>We do not stop until the core moisture content of the wood reaches precisely <strong>8 to 12 percent</strong>. This is the internationally recognized 'sweet spot' for global stability.</p>
      
      <ul>
        <li>At this moisture level, the internal cellular structure of the teak has stabilized.</li>
        <li>The wood is no longer desperate to equalize with a dry environment, eliminating the risk of catastrophic splitting.</li>
        <li>The natural oils within the teak are preserved and mobilized, enhancing the wood's inherent defense mechanisms against rot and pests.</li>
      </ul>
      
      <blockquote>
        <p>"A beautiful design is worthless if it shatters upon contact with dry winter air. Stability is the foundation of luxury."</p>
      </blockquote>
      
      <h2>Finishing with Intention</h2>
      <p>Beyond kilning, we protect our globally-bound pieces utilizing high-performance, VOC-compliant natural hardwax oils. Unlike thick synthetic lacquers (like polyurethane) which encase the wood in plastic and eventually crack, our hardwax oils penetrate deep into the grain. </p>
      
      <p>This allows the wood to subtly 'breathe' and flex with seasonal changes while maintaining a highly resistant barrier against spills, dirt, and daily wear. It is an aesthetic choice that fundamentally supports the long-term physics of the furniture.</p>
    `
  }
];

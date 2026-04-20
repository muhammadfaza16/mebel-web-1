# Artisteak Jepara Website Redesign Guide

You are redesigning the website for **Artisteak Jepara**, a premium Indonesian furniture brand from Jepara — the world-famous teak furniture capital. The brand bridges traditional Javanese craftsmanship with contemporary design sensibility.

## Design system foundation

Establish a complete, consistent design system before writing any page code:

**Color palette:**
- Primary background: #FAFAF8 (off-white, warm paper tone)
- Surface: #F2F0EB
- Text primary: #1A1A18
- Text secondary: #5C5A55
- Accent: #C8A84B (warm gold — inspired by teak wood tone)
- Accent dark: #8B6F2E
- Dark section bg: #141410
- Dark section text: #E8E6DF

**Typography:**
- Display / hero heading: "Playfair Display", serif — sizes: 72px (hero), 56px (section), 40px (sub-section). Weight 400 normal, 700 for emphasis. Line height 1.1.
- Body / UI: "Inter", sans-serif — 16px base, line height 1.7. Subheadings at 13px uppercase tracking 0.1em.
- Never mix more than these two typefaces.
- Font import: Google Fonts — Playfair Display (400, 700), Inter (400, 500).

**Spacing system:** 8px base unit. Use multiples: 8, 16, 24, 32, 48, 64, 96, 128px.

**Border radius:** 0px for editorial/hero elements. 4px for buttons and small UI. 0px for product cards (hard edge = premium feel).

**Motion:** Subtle 0.3s ease transitions on hover. No bouncy or flashy animations.

Apply this design system uniformly across ALL pages and components. No deviations.

---

## Homepage Architecture

Build a full homepage using the Artisteak Jepara design system. The layout structure borrows from the premium editorial feel of high-end corporate sites (like Vistr), smartly adapted for a visual-heavy furniture catalog.

**Navigation:**
- Logo left: "ARTISTEAK" wordmark in Playfair Display, + small "JEPARA" below in Inter 11px uppercase tracking
- Nav links center: Home · Collections · Craftsmanship · About · Contact
- CTA right: "View Collection" — outlined button, no fill, 1px border accent color
- Sticky on scroll. Transparent on hero, white bg after scroll.

**1. Hero Showcase (Fullscreen):**
- Full viewport height (100vh)
- Large background image: Close-up of teak grain or workshop ambiance.
- Overlaid text aligned left-center (vertically centered on the left side):
  - Small label above: "· Jepara, Indonesia" in Inter 12px uppercase tracking
  - H1 in Playfair Display 72px: "Furniture  
Built to  
Last Centuries."
  - Subtext 16px Inter: "Handcrafted teak furniture, made by master artisans in Jepara since 1998."
  - CTA button: filled accent color "#C8A84B", text dark, "Explore Collection →"

**2. Craftsmanship Statement (Centered Editorial):**
- Large, elegant centered typography area (lots of whitespace).
- Small label above: "· Our Ethos"
- H2 in Playfair 40px centered: "Built for the gaps in modern design. Geared for generations."
- Standard body text centered below, followed by a "Learn Our Story →" minimal link.

**3. Featured Collections (Product Grid):**
- Section label left-aligned: "· Featured Collections"
- 3-column grid of product cards.
- **Card Design:** 0px radius. Product image fills the top 70% of the card. Below the image: Product name in Playfair 20px, Category label + price in Inter. Minimalist and clean.

**4. Heritage & Scale (Split Layout):**
- 50/50 Split Section.
- **Left Column:** Large, tall image (e.g., jars of natural wood finishes or workshop tools).
- **Right Column:** Accent colored background (#C8A84B). Contains a vertically stacked stats list:
  - "1998" (Large Playfair) — Established Year
  - "200+" (Large Playfair) — Artisan Partners
  - "40+" (Large Playfair) — Countries Shipped
  - "B2B / B2C" (Large Playfair) — Market Focus

**5. The Artisteak Standard (Vertical Numbered List):**
- "Our Selection Criteria" or "The Artisteak Standard" heading.
- Elegant vertical list layout. Numbers "1, 2, 3" placed far left. Content in the middle/right.
- Separated by thin, refined horizontal lines (1px solid #E8E6DF or similar).
- List items:
  1. **Certified Teak** - Sourced responsibly...
  2. **Master Craftsmanship** - Traditional joinery...
  3. **Global Shipping** - Reach anywhere...

**6. The Makers (Team Portraits):**
- Light background for the section, but dark/moody portrait photos for the artisans.
- "Meet The Makers" heading.
- Name card sits below the dark photo with a clean white/light background.

**Footer:**
- Logo + tagline
- 3 column links: Collections, Company, Contact
- Social icons row
- Bottom bar: © 2026 Artisteak Jepara · All rights reserved

---

## Core Pages (Smart Translations)

**Collections (Catalog Page):**
- Full-width editorial header, background surface color #F2F0EB
- "Collections" in Playfair Display 56px
- Horizontal filter bar with thin 1px dividing lines or pill shapes.
- Full 3-column product grid mirroring the homepage card style.

**Product Detail Page (/collections/[slug]):**
- Asymmetrical 60/40 Split Structure.
- Left 60%: High-res image gallery.
- Right 40%: Typography-driven product info.
- Specs breakdown (Materials, Dimensions) uses the elegant horizontal dividing lines seen in the "Artisteak Standard" list. Clean, minimal, technical.

**About & Craftsmanship:**
- Hero: Split text/image (Text left, Artisan photo right).
- Content: Incorporate drop-caps and wide margins for an editorial magazine feel.

**Contact:**
- Split layout: Contact info on left, form on right.
- Form Style: No bordered boxes. Input fields should only have bottom borders (underline style) for a raw, editorial aesthetic.

---

## Mobile & Responsive Rules

**Breakpoints:**
- Mobile: < 768px
- Tablet: 768px – 1024px
- Desktop: > 1024px

- **Navigation on mobile:**
  - Hamburger icon (3 lines, 24px, accent color)
  - Full-screen slide-in menu from right
  - Links stacked vertically, Playfair Display 32px each
  - Close button top right
- **Layout stacking rules:**
  - All 2-column splits stack to single column on mobile (image on top, text below)
  - Product grid: 3col → 2col → 1col
- All interactive elements must be touch-friendly.

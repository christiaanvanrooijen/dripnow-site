// TODO(placeholder-images): lookbook/profile images below (both the
// hero-upload-*.webp reused from Hero.astro and the demo-item-*.webp crops
// made specifically for these lookbook cards) come from the same legacy/
// source photo of unknown commercial license. Replace with owned
// photography or properly licensed material before launch — see CLAUDE.md
// "Openstaande TODO's".
//
// TODO(per-vibe-imagery): each vibe ultimately needs its OWN photography.
// Reusing the same crops (e.g. headphones, bag) across multiple vibes
// undercuts the "personalised to you" promise of the real product — treat
// the image reuse below as a placeholder limitation, not a pattern to keep.
//
// TODO(bundled-items): "Wool overshirt and knit" and "Longline wool coat"
// still bundle more than one real product (an overshirt + a knit; a coat
// priced as if it were the whole outfit) into a single item/price. That's
// a placeholder shortcut — it doesn't hold up against the "separately
// shoppable items" promise once this is wired to real product data. Split
// into individual items with individual prices when that happens.

export interface DripProfile {
  colors: string[];
  silhouettes: string[];
  tags: string[];
  summary: string;
}

export interface LookbookItem {
  name: string;
  price: number;
  image: string;
  alt: string;
}

export interface Vibe {
  id: string;
  label: string;
  profile: DripProfile;
  lookbook: LookbookItem[];
}

export const vibes: Vibe[] = [
  {
    id: 'streetwear',
    label: 'Streetwear',
    profile: {
      colors: ['#0B0B0C', '#4B4F45', '#D8D3C7', '#8A8F9C', '#1A1A1A'],
      silhouettes: ['Oversized jacket', 'Relaxed cargo', 'Boxy tee', 'Chunky sneaker'],
      tags: ['Streetwear', 'Layered', 'Utilitarian', 'Bold', 'Sport-luxe'],
      summary: 'You dress in confident layers — oversized outerwear, utility pockets, and one loud pair of sneakers to finish it.',
    },
    // Budget tier: accessible entry point — more pieces, lower unit price.
    lookbook: [
      { name: 'Oversized bomber jacket', price: 65, image: '/images/demo-item-streetwear-jacket.webp', alt: 'Black oversized bomber jacket, close-up product shot' },
      { name: 'Vintage cap', price: 18, image: '/images/hero-lookbook-cap.webp', alt: 'Vintage-style cap' },
      { name: 'Crossbody bag', price: 32, image: '/images/hero-lookbook-bag.webp', alt: 'Olive crossbody bag' },
      { name: 'Chunky sneakers', price: 75, image: '/images/hero-lookbook-sneakers.webp', alt: 'White chunky sneakers' },
    ],
  },
  {
    id: 'smart-casual',
    label: 'Smart casual',
    profile: {
      colors: ['#4B4F45', '#D9CBB3', '#F5F1E8', '#2E2B26', '#8A8F9C'],
      silhouettes: ['Relaxed overshirt', 'Tapered trouser', 'Half-zip knit', 'Derby shoe'],
      tags: ['Smart casual', 'Elevated basics', 'Neutral palette', 'Textured knits'],
      summary: 'You lean into relaxed tailoring — soft neutrals, a good overshirt, and pieces that work from desk to dinner.',
    },
    // Mid tier: fewer, better-made pieces than streetwear.
    lookbook: [
      { name: 'Wool overshirt and knit', price: 95, image: '/images/demo-item-smart-casual-overshirt.webp', alt: 'Olive wool overshirt over a beige knit, close-up product shot' },
      { name: 'Structured tote', price: 59, image: '/images/hero-lookbook-bag.webp', alt: 'Structured bag' },
      { name: 'Wireless headphones', price: 85, image: '/images/hero-lookbook-headphones.webp', alt: 'Black wireless headphones' },
    ],
  },
  {
    id: 'minimal',
    label: 'Minimal',
    profile: {
      colors: ['#0B0B0C', '#D9CBB3', '#F7F5F0', '#8A8F9C', '#3A3A3A'],
      silhouettes: ['Longline coat', 'Straight trouser', 'Chelsea boot', 'Crew knit'],
      tags: ['Minimal', 'Monochrome', 'Tailored', 'Quiet luxury'],
      summary: 'You keep it quiet and tailored — one strong coat, clean lines, and nothing that shouts.',
    },
    // Premium tier: quiet luxury reads as fewer, pricier pieces — not more.
    lookbook: [
      { name: 'Longline wool coat', price: 240, image: '/images/demo-item-minimal-coat.webp', alt: 'Beige longline wool coat, close-up product shot' },
      { name: 'Noise-cancelling headphones', price: 140, image: '/images/hero-lookbook-headphones.webp', alt: 'Black noise-cancelling headphones' },
    ],
  },
];

// TODO(placeholder-images): the demo-item-*.webp crops below are cut from the
// same legacy/ source photos of unknown commercial license. Replace with owned
// photography or properly licensed material before launch — see CLAUDE.md
// "Openstaande TODO's".
//
// TODO(per-vibe-imagery): each vibe ultimately needs its OWN photography.
// These crops are pulled from a small set of shared source photos; the real
// product should have distinct, per-vibe garment imagery.
//
// Hard rule (CLAUDE.md #4): clothing only — no accessories, electronics, bags,
// caps, or shoes anywhere, including item names, alt text, and silhouettes.

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
      silhouettes: ['Oversized jacket', 'Relaxed cargo', 'Boxy tee', 'Hooded layer'],
      tags: ['Streetwear', 'Layered', 'Utilitarian', 'Bold', 'Sport-luxe'],
      summary: 'You dress in confident layers — oversized outerwear, utility pockets, and drawstrings to finish it.',
    },
    // Budget tier: accessible entry point — more pieces, lower unit price.
    lookbook: [
      { name: 'Oversized bomber jacket', price: 80, image: '/images/demo-item-streetwear-jacket.webp', alt: 'Black oversized bomber jacket, close-up product shot' },
      { name: 'Hooded sweat', price: 50, image: '/images/demo-item-streetwear-hoodie.webp', alt: 'Black hooded sweatshirt, close-up product shot' },
      { name: 'Cargo trousers', price: 60, image: '/images/demo-item-streetwear-cargo.webp', alt: 'Black cargo trousers with utility pockets, close-up product shot' },
    ],
  },
  {
    id: 'smart-casual',
    label: 'Smart casual',
    profile: {
      colors: ['#4B4F45', '#D9CBB3', '#F5F1E8', '#2E2B26', '#8A8F9C'],
      silhouettes: ['Relaxed overshirt', 'Tapered trouser', 'Half-zip knit', 'Layered collar'],
      tags: ['Smart casual', 'Elevated basics', 'Neutral palette', 'Textured knits'],
      summary: 'You lean into relaxed tailoring — soft neutrals, a good overshirt, and pieces that work from desk to dinner.',
    },
    // Mid tier: fewer, better-made pieces than streetwear.
    lookbook: [
      { name: 'Wool overshirt', price: 110, image: '/images/demo-item-smart-casual-overshirt.webp', alt: 'Olive-grey wool overshirt, close-up product shot' },
      { name: 'Merino knit', price: 70, image: '/images/demo-item-smart-casual-knit.webp', alt: 'Beige V-neck merino knit, close-up product shot' },
      { name: 'Tapered trousers', price: 60, image: '/images/demo-item-smart-casual-trousers.webp', alt: 'Cream tapered trousers, close-up product shot' },
    ],
  },
  {
    id: 'minimal',
    label: 'Minimal',
    profile: {
      colors: ['#0B0B0C', '#D9CBB3', '#F7F5F0', '#8A8F9C', '#3A3A3A'],
      silhouettes: ['Longline coat', 'Straight trouser', 'Crew knit', 'Clean tailoring'],
      tags: ['Minimal', 'Monochrome', 'Tailored', 'Quiet luxury'],
      summary: 'You keep it quiet and tailored — one strong coat, clean lines, and nothing that shouts.',
    },
    // Premium tier: quiet luxury reads as fewer, pricier pieces — not more.
    lookbook: [
      { name: 'Longline wool coat', price: 240, image: '/images/demo-item-minimal-coat.webp', alt: 'Beige longline wool coat, close-up product shot' },
      { name: 'Crew-neck knit', price: 140, image: '/images/demo-item-minimal-knit.webp', alt: 'Off-white crew-neck knit, close-up product shot' },
    ],
  },
];

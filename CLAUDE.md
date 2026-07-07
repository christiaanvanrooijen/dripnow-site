# DripNow — werkinstructies

## Wat het is
Landingspagina voor DripNow: je uploadt 3 outfitfoto's, AI maakt een persoonlijk lookbook met shoppable links — alle items uit één winkel, één order. EU-gericht, budget-first, mobile-first, doelgroep Gen Z.

## Harde regels (niet-onderhandelbaar)
1. Gebruik NERGENS de term "Style DNA" (bestaand merk). Gebruik altijd "Drip Profile".
2. De site moet AVG-conform zijn: /privacy, /terms, cookie-consent, en een affiliate-disclosure in de footer.
3. Verzin geen nep-reviews, nep-aantallen of valse social proof.

## Stack
- Astro + Tailwind CSS, output volledig statisch.
- Hosting: Porkbun Static Hosting, gekoppeld via Porkbun's "GitHub Connect" aan de `deploy`-branch van deze repo (niet `main`). Porkbun's GitHub-koppeling bouwt niets zelf — het synct alleen kant-en-klare bestanden. Daarom pusht `.github/workflows/deploy-porkbun.yml` bij elke push naar `main` de Astro-build-output (`dist/`) naar de `deploy`-branch.
- Domein `dripnow.me` wordt beheerd bij Porkbun (registrar + hosting in één); geen aparte DNS-koppeling naar GitHub Pages nodig.
- Er draait ook nog een GitHub Pages-workflow (`.github/workflows/deploy.yml`) die naar de `*.github.io`-URL publiceert — dat is puur een build-preview/staging-omgeving, niet de productiesite.
- Waitlist: hosted Tally-formulier (geen eigen backend, geen Supabase in deze repo).
- De interactieve demo draait 100% client-side op canned voorbeelddata.

## Design-tokens
- bone #F7F5F0 (achtergrond), ink #0B0B0C (tekst + primaire CTA — fashion-standaard zwarte knoppen, geen blauw accent)
- greige #A39C8E (warm mid-grijs, voor hairlines/scheidingen en gedempte labels)
- chrome-gradient #C9CDD6 → #8A8F9C (liquid-chrome signatuur op het woord "Drip", alléén in het loading-moment van de demo)
- signal #E8FF3A (zeer spaarzaam; niet gebruikt in badges/CTA's, hooguit een toekomstige micro-highlight)
- Display-font karaktervol/condensed (bv. Clash Display of Anton), body Inter/Geist, self-hosted via Astro (geen externe font-CDN i.v.m. AVG).
- Editorial richting (COS/Arket/The Row-gevoel): veel witruimte, zelfverzekerde grote typografie, dunne hairline-scheidingen i.p.v. gevulde kaartjes/pills. Signatuur = liquid-chrome "Drip" + demo-loading. Rest strak en rustig, "minimal maar niet leeg".

## Kwaliteitsvloer
Responsive tot 360px, zichtbare keyboard-focus, prefers-reduced-motion gerespecteerd, Lighthouse mobile ≥ 90.

## Hoe ik wil dat je werkt
- Werk sectie voor sectie. Vraag om akkoord op een plan vóór grote wijzigingen.
- Kleine, duidelijke commits met leesbare messages.
- Bouw in approval-volgorde: eerst het pakket dat Awin nodig heeft (hero, demo, /privacy, /terms, cookie-consent, werkend waitlist-formulier), daarna copy en animaties polijsten.
- De volledige bouwbrief staat in docs/BRIEF.md — raadpleeg die voor detail.

## Openstaande TODO's
- **Hero-beeld is placeholder.** De outfit- en lookbook-foto's in `src/components/Hero.astro` (`public/images/hero-*.webp`) zijn crops uit de oude `legacy/`-prototype-assets, met onbekende commerciële licentie. Vervangen door eigen fotografie of correct gelicenseerd materiaal (Unsplash/Pexels-license) vóór livegang — niet gebruiken op de definitieve commerciële site.
# DripNow — Build Brief (Codex)

**Doel van dit project:** de bestaande landingspagina `dripnow.me` herbouwen als een conversiegerichte, AVG-conforme site mét een klikbare product-demo, zodat (a) de Awin/Zalando-aanvraag wordt goedgekeurd en (b) bezoekers converteren naar de waitlist.

**Wat DripNow is:** je uploadt 3 outfitfoto's, AI analyseert je stijl en geeft je een persoonlijk lookbook met shoppable links — alle items uit één winkel, één order, geen gedoe. EU-gericht, budget-first, geen quizzes, geen download (web app).

**Doelgroep:** Gen Z / jonge millennials in de EU, mobile-first.

---

## 0. Twee harde constraints (niet-onderhandelbaar)

1. **Verwijder overal de term "Style DNA".** Vervang door **"Drip Profile"** (consistent, elke instantie). Reden: "Style DNA" is een bestaand merk (styledna.ai).
2. **De site moet AVG-conform zijn vóór livegang:** privacybeleid, algemene voorwaarden, cookie-consent banner, affiliate-disclosure en een expliciete uitleg over fotoverwerking. Zie sectie 7.

---

## 1. Tech stack & projectstructuur

- **Framework:** Next.js (App Router) + TypeScript
- **Styling:** Tailwind CSS
- **Hosting:** Vercel (free tier)
- **E-mailopslag:** serverless route (`/app/api/waitlist/route.ts`) die inzendingen wegschrijft naar Supabase (tabel `waitlist`) OF doorstuurt via Resend. Kies Supabase als je later magic-link login wilt.
- **Analytics:** Plausible (privacyvriendelijk, minder cookie-gedoe) of GA4. UTM-parameters bij pageload uitlezen en meesturen bij signup.
- **Fonts:** via `next/font` (self-hosted, geen externe font-CDN i.v.m. AVG).

Voorgestelde structuur:
```
/app
  /page.tsx            → landingspagina (secties hieronder)
  /privacy/page.tsx    → privacybeleid
  /terms/page.tsx      → algemene voorwaarden
  /api/waitlist/route.ts
/components
  Nav.tsx  Hero.tsx  Demo.tsx  HowItWorks.tsx  Differentiator.tsx
  WaitlistForm.tsx  Footer.tsx  CookieConsent.tsx
/lib
  demoData.ts          → canned Drip Profiles + sample lookbooks
  analytics.ts
```

---

## 2. Design direction

Vermijd de generieke AI-looks (cream + terracotta; zwart + acid-green; broadsheet-kolommen). We gaan voor **streetwear-editorial met een "liquid chrome" signatuur** — passend bij de naam *Drip*.

**Kleur-tokens:**
| token | hex | gebruik |
|---|---|---|
| `--bone` | `#F7F5F0` | achtergrond, editorial secties |
| `--ink` | `#0B0B0C` | tekst, dark secties |
| `--electric` | `#2B2BFF` | primaire accent / CTA |
| `--chrome-1` | `#C9CDD6` | liquid-chrome gradient stop |
| `--chrome-2` | `#8A8F9C` | liquid-chrome gradient stop |
| `--signal` | `#E8FF3A` | spaarzaam, alleen micro-highlights (badges) |

**Typografie (2 rollen + utility):**
- Display: een karaktervolle, strakke grotesk of condensed — bv. **Clash Display** of **Anton** (fashion-energie). Gebruik met restraint, alleen koppen.
- Body: **Inter** of **Geist** (rustig, leesbaar).
- Utility/caption: dezelfde body, kleiner, wat letter-spacing.

**Signatuur (de één-ding dat blijft hangen):** het woord **"Drip"** en de demo-onthulling krijgen een *liquid chrome* behandeling — een glanzend metaal-gradient met een subtiele drip/vloei-animatie bij pageload of scroll. Zet je boldness hier; houd de rest strak en rustig.

**Kwaliteitsvloer:** responsive tot 360px breed, zichtbare keyboard-focus, `prefers-reduced-motion` gerespecteerd (demo werkt dan zonder animatie), Lighthouse ≥ 90 op mobile.

**Belangrijk over structuur:** de "01 / 02 / 03"-nummering bij How It Works mag blijven — dat is een échte volgorde. Gebruik verder geen decoratieve nummering.

---

## 3. Secties van de landingspagina (in volgorde)

### 3.1 Nav (sticky, minimal)
- Links: `DripNow` (wordmerk, "Drip" in chrome).
- Rechts: één knop `Join waitlist` (electric).

### 3.2 Hero — laat het product zien, niet alleen claims
- Badge: `Coming soon · EU`
- Kop: **"Your drip. Decoded."** (of behoud "Your style, decoded." — kort houden)
- Subkop: "Upload 3 outfit photos. Get your Drip Profile. Shop a lookbook built for how you actually dress — one store, one order, zero friction."
- Primaire CTA: `Try the demo` (scrollt naar sectie 3.3, NIET naar het e-mailveld)
- Secundaire CTA: `Join waitlist`
- Visueel: een echte "3 foto's → lookbook"-transformatie (side-by-side of overvloeiend). Geen losse placeholder-jpg.

### 3.3 Interactieve demo (NIEUW — hoofdmodule, zie sectie 4)
Dit is het hart van de pagina en van je Awin-aanvraag.

### 3.4 How It Works — 3 stappen
Behoud de drie stappen, maar herschrijf stap 2 zonder "Style DNA":
1. **Send 3 photos** — "Upload three outfit pics. No quizzes, no forms."
2. **Get your Drip Profile** — "AI maps how you actually dress: colours, cuts, layering, energy."
3. **Shop your lookbook** — "A personalised lookbook, matched to your budget. One store. One checkout."

### 3.5 Differentiator — waarom DripNow anders is (max 3 kaarten, geen overlap met 3.4)
Schrap de overlap met How It Works. Houd de drie díé echt onderscheidend zijn:
- **One store, one order** — "Every item comes from a single store. Add to cart once, check out once. No hunting across 12 tabs." ← dit is je echte moat, geef het de meeste ruimte.
- **Budget-first** — "Tell us your budget, the lookbook respects it. No champagne taste on a beer budget surprises."
- **Made for EU** — "Local sizing, local shipping, EU pricing. No US-only surprises."

### 3.6 Waitlist — één conversie-actie
- Kop: "Be first in line."
- Micro-copy: wat er gebeurt na signup + zachte scarcity, bv. "First 500 get early access + a founding-member perk."
- Alleen e-mailveld + knop `Join waitlist`.
- Succes-state: "You're in. We'll email you when your invite is ready." (actieve, concrete taal)
- Onder het veld, klein: link naar privacybeleid + "We only email you about your invite. No spam."

### 3.7 Footer
- `© 2026 DripNow` (let op: nu staat er 2025)
- Links: Privacy · Terms · Contact (`hello@dripnow.me`)
- **Affiliate-disclosure** (verplicht): "DripNow earns a commission on items bought through our links, at no extra cost to you."

---

## 4. De demo-module (spec)

Volledig client-side, canned data uit `/lib/demoData.ts`. Geen backend, geen echte AI-call, geen echte upload nodig — maar het voelt als het echte product.

**Flow:**
1. **Kies een vibe** — 3 preset-tegels (bv. *Streetwear*, *Smart casual*, *Minimal*). (Optioneel ook echte upload toestaan, maar preset is genoeg voor de demo en voorkomt AVG-gedoe met foto's.)
2. **Loading-state** — korte "Reading your drip…" animatie (2–3 sec, liquid-chrome effect). Respecteer `prefers-reduced-motion`.
3. **Drip Profile-kaart onthult** — kleurenpalet-swatches, silhouetten/cuts, 4–6 stijl-tags, één zin "vibe summary".
4. **Sample-lookbook** — grid van 4–6 productkaarten (afbeelding, naam, prijs, "add"-knopje voor de show). Bovenaan een badge: **"One store · one order"**. Prijzen tonen budget-respect (bv. binnen een gekozen range).
5. **Conversie-haak** — onder het lookbook: "This is a sample. Join the waitlist to get *your* Drip Profile." → e-mailveld.

**Belangrijk:** label de demo subtiel als voorbeeld ("Sample lookbook") zodat je geen misleidende claims maakt — reviewers en gebruikers moeten weten dat dit demo-data is, niet een live winkel-integratie.

---

## 5. E-mailcapture (backend)

- `POST /api/waitlist` — valideert e-mail, slaat op in Supabase `waitlist` (velden: `email`, `created_at`, `utm_source`, `utm_medium`, `utm_campaign`, `vibe_selected`).
- Rate-limit / honeypot-veld tegen bots.
- Dubbele e-mails afvangen (upsert).
- Bevestigingsmail via Resend is optioneel voor MVP, maar aanrader (double opt-in = netter voor AVG).

---

## 6. Analytics & tracking (sluit aan op je growth-hacker funnel)

- UTM-parameters bij pageload uitlezen, in state houden, meesturen bij signup → zo weet je welke Reel/kanaal converteert.
- Events: `demo_started`, `vibe_selected`, `lookbook_revealed`, `waitlist_submitted`.
- Zo kun je later per Reel de funnel meten (view → demo → signup).

---

## 7. AVG / compliance (verplicht vóór Awin-aanvraag)

- **/privacy** — welke data je verzamelt (e-mail, UTM), waarvoor, bewaartermijn, rechten van de gebruiker, contact.
- **/terms** — algemene voorwaarden.
- **Cookie-consent banner** — alleen laden wat nodig is; analytics pas ná consent (of gebruik cookieloze Plausible).
- **Fotoverwerking-statement** — ook al gebruikt de demo geen echte upload: zodra je live gaat met echte foto's, expliciet vermelden "Photos are analysed to build your profile and then deleted — never stored or shared." Zet de belofte alvast klaar.
- **Affiliate-disclosure** — in de footer én zichtbaar bij elk lookbook.

---

## 8. Definition of done (acceptatiecriteria)

- [ ] Nergens nog de term "Style DNA"; overal "Drip Profile".
- [ ] Hero toont een echte 3-foto's→lookbook transformatie (geen kapotte placeholders).
- [ ] Demo-module werkt volledig client-side en toont Drip Profile + sample-lookbook.
- [ ] Waitlist-formulier schrijft succesvol weg + toont concrete succes-state.
- [ ] `/privacy`, `/terms`, cookie-consent, affiliate-disclosure aanwezig.
- [ ] Footer zegt 2026; contact zichtbaar.
- [ ] Responsive tot 360px, keyboard-focus zichtbaar, reduced-motion gerespecteerd.
- [ ] Lighthouse mobile ≥ 90 (performance + accessibility).
- [ ] UTM-capture + de 4 analytics-events vuren correct.

---

## 9. Awin / Zalando approval-checklist (los naast de code)

Vink dit af vóór je in Awin op de Zalando- en ASOS-programma's klikt:
- [ ] Site is live op je eigen domein, geen "under construction".
- [ ] Duidelijk wat de site doet en hoe hij verkeer naar de adverteerder stuurt (de demo maakt dit zichtbaar).
- [ ] Privacybeleid + voorwaarden + affiliate-disclosure aanwezig.
- [ ] Werkend contactadres.
- [ ] Geen merkinbreuk (Style DNA verwijderd), geen misleidende claims.
- [ ] Nette, complete uitstraling — geen placeholders of loze pagina's.

Als de site aan bovenstaande voldoet, sta je sterk bij de goedkeuring.

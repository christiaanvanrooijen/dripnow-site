var e=[{id:`streetwear`,label:`Streetwear`,profile:{colors:[`#0B0B0C`,`#4B4F45`,`#D8D3C7`,`#8A8F9C`,`#1A1A1A`],silhouettes:[`Oversized jacket`,`Relaxed cargo`,`Boxy tee`,`Hooded layer`],tags:[`Streetwear`,`Layered`,`Utilitarian`,`Bold`,`Sport-luxe`],summary:`You dress in confident layers — oversized outerwear, utility pockets, and drawstrings to finish it.`},lookbook:[{name:`Oversized bomber jacket`,price:80,image:`/images/demo-item-streetwear-jacket.webp`,alt:`Black oversized bomber jacket, close-up product shot`},{name:`Hooded sweat`,price:50,image:`/images/demo-item-streetwear-hoodie.webp`,alt:`Black hooded sweatshirt, close-up product shot`},{name:`Cargo trousers`,price:60,image:`/images/demo-item-streetwear-cargo.webp`,alt:`Black cargo trousers with utility pockets, close-up product shot`}]},{id:`smart-casual`,label:`Smart casual`,profile:{colors:[`#4B4F45`,`#D9CBB3`,`#F5F1E8`,`#2E2B26`,`#8A8F9C`],silhouettes:[`Relaxed overshirt`,`Tapered trouser`,`Half-zip knit`,`Layered collar`],tags:[`Smart casual`,`Elevated basics`,`Neutral palette`,`Textured knits`],summary:`You lean into relaxed tailoring — soft neutrals, a good overshirt, and pieces that work from desk to dinner.`},lookbook:[{name:`Wool overshirt`,price:110,image:`/images/demo-item-smart-casual-overshirt.webp`,alt:`Olive-grey wool overshirt, close-up product shot`},{name:`Merino knit`,price:70,image:`/images/demo-item-smart-casual-knit.webp`,alt:`Beige V-neck merino knit, close-up product shot`},{name:`Tapered trousers`,price:60,image:`/images/demo-item-smart-casual-trousers.webp`,alt:`Cream tapered trousers, close-up product shot`}]},{id:`minimal`,label:`Minimal`,profile:{colors:[`#0B0B0C`,`#D9CBB3`,`#F7F5F0`,`#8A8F9C`,`#3A3A3A`],silhouettes:[`Longline coat`,`Straight trouser`,`Crew knit`,`Clean tailoring`],tags:[`Minimal`,`Monochrome`,`Tailored`,`Quiet luxury`],summary:`You keep it quiet and tailored — one strong coat, clean lines, and nothing that shouts.`},lookbook:[{name:`Longline wool coat`,price:240,image:`/images/demo-item-minimal-coat.webp`,alt:`Beige longline wool coat, close-up product shot`},{name:`Crew-neck knit`,price:140,image:`/images/demo-item-minimal-knit.webp`,alt:`Off-white crew-neck knit, close-up product shot`}]}],t=document.getElementById(`demo-select`),n=document.getElementById(`demo-loading`),r=document.getElementById(`demo-reveal`),i=document.getElementById(`demo-profile`),a=document.getElementById(`demo-lookbook`),o=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;function s(e){if(!i||!a)return;let t=e.profile.colors.map(e=>`<span style="background:${e}" class="h-full flex-1"></span>`).join(``);i.innerHTML=`
      <h3 class="font-display text-4xl sm:text-5xl">${e.label}</h3>
      <div class="mt-6 border-t border-greige/40"></div>

      <div class="mt-8 flex h-10 w-full sm:h-12" role="img" aria-label="Colour palette for ${e.label}: ${e.profile.colors.join(`, `)}">
        ${t}
      </div>

      <p class="mt-10 text-xs uppercase tracking-widest text-ink/40">Silhouettes</p>
      <p class="mt-1 text-sm uppercase tracking-wide text-ink/70">${e.profile.silhouettes.join(` &middot; `)}</p>

      <p class="mt-6 text-xs uppercase tracking-widest text-ink/40">Style</p>
      <p class="mt-1 text-sm uppercase tracking-wide text-ink/70">${e.profile.tags.join(` &middot; `)}</p>

      <p class="mt-10 max-w-2xl text-xl font-medium leading-snug text-ink sm:text-2xl">${e.profile.summary}</p>
    `;let[n,...r]=e.lookbook,o=e.lookbook.reduce((e,t)=>e+t.price,0),s=r.map(e=>`
        <div>
          <img
            src="${e.image}"
            alt="${e.alt}"
            width="160"
            height="160"
            loading="lazy"
            class="aspect-square w-full object-cover"
          />
          <div class="mt-2 flex items-baseline justify-between gap-2 border-t border-greige/30 pt-2">
            <p class="text-xs text-ink/70">${e.name}</p>
            <p class="text-xs font-semibold text-ink">&euro;${e.price}</p>
          </div>
        </div>
      `).join(``);a.innerHTML=`
      <p class="text-xs uppercase tracking-widest text-ink/40">Sample lookbook</p>
      <div class="mt-8 flex flex-col gap-10 sm:flex-row sm:items-start sm:gap-12">
        <div class="sm:max-w-sm sm:flex-1">
          <img
            src="${n.image}"
            alt="${n.alt}"
            width="400"
            height="400"
            loading="lazy"
            class="aspect-square w-full object-cover"
          />
          <div class="mt-3 flex items-baseline justify-between gap-2 border-t border-greige/30 pt-3">
            <p class="text-sm text-ink/80">${n.name}</p>
            <p class="text-sm font-semibold text-ink">&euro;${n.price}</p>
          </div>
        </div>
        <div class="grid flex-1 grid-cols-2 gap-6 sm:grid-cols-3">
          ${s}
        </div>
      </div>
      <div class="mt-12 border-t border-greige/40 pt-4 text-sm text-ink/70">
        &euro;${o} total &middot; one store, one order
      </div>
    `}function c(e){if(t?.setAttribute(`hidden`,``),o){s(e),r?.removeAttribute(`hidden`);return}n?.removeAttribute(`hidden`),window.setTimeout(()=>{n?.setAttribute(`hidden`,``),s(e),r?.removeAttribute(`hidden`)},2e3)}document.querySelectorAll(`[data-vibe]`).forEach(t=>{t.addEventListener(`click`,()=>{let n=e.find(e=>e.id===t.dataset.vibe);n&&c(n)})});
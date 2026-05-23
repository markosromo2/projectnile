import Image from "next/image";

const mediaCompanies = [
  { name: "Naspers", desc: "Pan-African tech & media group — HQ'd in Cape Town" },
  { name: "MultiChoice / DStv", desc: "Largest pay-TV operator in sub-Saharan Africa" },
  { name: "Media24", desc: "Largest print & digital publisher in sub-Saharan Africa" },
  { name: "Canal+", desc: "Acquired MultiChoice 2025 — dominant French-language network" },
];

export default function MarketSection() {
  return (
    <section id="market" className="border-t border-white/[0.05] overflow-hidden" style={{ background: "#080d14" }}>

      {/* Hero stat block — Cape Town aerial backdrop */}
      <div className="relative py-36 lg:py-44">
        <div className="absolute inset-0">
          <Image
            src="/images/ct-stadium-aerial.png"
            alt="Cape Town, South Africa"
            fill
            className="object-cover object-center"
            style={{ opacity: 0.13 }}
          />
          <div className="absolute inset-0" style={{
            background: "radial-gradient(ellipse 100% 80% at 50% 50%, transparent 20%, #080d14 85%)"
          }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(8,27,46,0.65) 0%, transparent 30%, rgba(8,27,46,0.95) 100%)" }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-10">
            <div className="h-px w-8 bg-[#c9a840]" />
            <span className="text-[#c9a840] text-xs tracking-[0.3em] uppercase">The Market</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-animate>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl text-white font-light leading-[0.88] mb-8" style={{ fontFamily: "var(--font-playfair)" }}>
                Africa&apos;s most<br />
                commercially<br />
                <span className="text-gold">powerful market.</span>
              </h2>
              <p className="text-white/72 text-base leading-relaxed max-w-md tracking-[0.01em]">
                At $46.1B GDP, Cape Town is comparable in economic scale to Portland, Oregon — home of an NBA franchise. It is more than twice the size of Rwanda&apos;s entire economy. Per capita purchasing power determines ticket revenue, merchandise, and premium hospitality. Cape Town leads every city on the continent — by a margin no competitor can close.
              </p>
            </div>

            {/* Glass stat block */}
            <div className="grad-border glass rounded-sm p-10" data-animate data-delay="2">
              <div className="text-white/28 text-xs tracking-widest uppercase mb-4">Per Capita Purchasing Power</div>
              <div className="font-light leading-none text-gold tabular-nums mb-3" style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(4rem,8vw,6rem)",
              }}>
                $9,276
              </div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[9px] text-[#c9a840] border border-[#c9a840]/30 px-2 py-1 rounded-sm tracking-widest uppercase">#1 in Africa</span>
                <span className="text-white/30 text-sm">Ahead of Johannesburg, Lagos, Cairo</span>
              </div>
              <div className="h-px bg-white/[0.07] mb-6" />
              <div className="grid grid-cols-3 gap-4">
                {[
                  { v: "$46.1B", l: "City GDP", s: "≈ Portland, Oregon" },
                  { v: "4.9M", l: "Population", s: "Greater Cape Town" },
                  { v: "$403M", l: "Media Market", s: "58% of total BAL market" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="text-xl font-light text-white tabular-nums" style={{ fontFamily: "var(--font-playfair)" }}>{s.v}</div>
                    <div className="text-white/32 text-[10px] mt-0.5 tracking-wide">{s.l}</div>
                    <div className="text-white/20 text-[9px] mt-0.5">{s.s}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Media capital — full width */}
      <div className="px-6 lg:px-10 py-16 lg:py-20" style={{
        background: "radial-gradient(ellipse 80% 60% at 100% 0%, rgba(26,107,168,0.09) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 0% 100%, rgba(0,122,77,0.06) 0%, transparent 50%), #080d14"
      }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left: heading + concentration + Nigeria */}
            <div data-animate>
              <div className="text-white/40 text-xs tracking-widest uppercase mb-3">Africa&apos;s Media Capital</div>
              <h3 className="text-4xl lg:text-5xl text-white font-light mb-8 leading-[0.92]" style={{ fontFamily: "var(--font-playfair)" }}>
                Every major<br />pan-African broadcaster<br />is headquartered here.
              </h3>

              {/* Market concentration bar */}
              <div className="mb-6 p-5 rounded-sm" style={{ background: "rgba(10,25,46,0.65)", border: "1px solid rgba(80,140,200,0.12)" }}>
                <div className="text-white/40 text-[9px] tracking-widest uppercase mb-3">South Africa share of total $699M BAL media market</div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex-1 h-[6px] rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.07)" }}>
                    <div className="h-full rounded-full" data-bar-pct="58" style={{ width: "0%", background: "linear-gradient(to right, #b8942e, #e8c84a)" }} />
                  </div>
                  <span className="text-[#c9a840] text-sm font-light tabular-nums shrink-0" style={{ fontFamily: "var(--font-playfair)" }}>58%</span>
                </div>
                <div className="flex justify-between text-[9px] text-white/40">
                  <span>South Africa — $403M</span>
                  <span>All other 10 BAL markets — $296M</span>
                </div>
              </div>

              {/* Nigeria quality-over-quantity contrast */}
              <div>
                <div className="text-white/40 text-[9px] tracking-widest uppercase mb-3">Quality market — not just large market</div>
                <div className="grid grid-cols-2 gap-2 mb-2">
                  <div className="p-4 rounded-sm" style={{ background: "rgba(10,25,46,0.5)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <div className="text-white/40 text-[9px] tracking-widest uppercase mb-2">Nigeria</div>
                    <div className="text-white/70 text-xl font-light tabular-nums" style={{ fontFamily: "var(--font-playfair)" }}>242M</div>
                    <div className="text-white/40 text-[9px]">population</div>
                    <div className="mt-3 text-white/55 text-base font-light tabular-nums" style={{ fontFamily: "var(--font-playfair)" }}>$67M</div>
                    <div className="text-white/40 text-[9px]">media revenue</div>
                  </div>
                  <div className="p-4 rounded-sm" style={{ background: "rgba(201,168,64,0.07)", border: "1px solid rgba(201,168,64,0.25)" }}>
                    <div className="text-[#c9a840] text-[9px] tracking-widest uppercase mb-2">South Africa</div>
                    <div className="text-[#c9a840] text-xl font-light tabular-nums" style={{ fontFamily: "var(--font-playfair)" }}>65M</div>
                    <div className="text-white/40 text-[9px]">population</div>
                    <div className="mt-3 text-[#c9a840] text-base font-light tabular-nums" style={{ fontFamily: "var(--font-playfair)" }}>$403M</div>
                    <div className="text-white/40 text-[9px]">media revenue</div>
                  </div>
                </div>
                <div className="text-white/35 text-[9px] text-center leading-snug">6× the media revenue · ¼ the population · Source: BCG Analysis, Winter 2026</div>
              </div>
            </div>

            {/* Right: stats + media company cards */}
            <div data-animate data-delay="2">
              <div className="grid grid-cols-3 gap-6 mb-8">
                {[
                  { v: "$403M", l: "Annual Media Revenue", s: "58% of total $699M BAL market" },
                  { v: "8.4M", l: "Pay-TV Subscribers", s: "45% of all 11-market subscribers" },
                  { v: "63%", l: "Pay-TV Penetration", s: "vs. 41% Sub-Saharan avg" },
                ].map((m) => (
                  <div key={m.l}>
                    <div className="text-[#c9a840] text-2xl font-light tabular-nums" style={{ fontFamily: "var(--font-playfair)" }}>{m.v}</div>
                    <div className="text-white/60 text-[10px] mt-1 leading-tight">{m.l}</div>
                    <div className="text-white/40 text-[9px] mt-0.5">{m.s}</div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3">
                {mediaCompanies.map((m) => (
                  <div key={m.name} className="card-hover p-5 rounded-sm" style={{ background: "rgba(10,25,46,0.7)", border: "1px solid rgba(80,140,200,0.1)" }}>
                    <div className="text-white/85 text-sm font-medium mb-1">{m.name}</div>
                    <div className="text-white/50 text-xs leading-relaxed">{m.desc}</div>
                  </div>
                ))}
              </div>

              <p className="text-white/35 text-[9px] mt-6 tracking-wide">Source: African Sports Market Intelligence Report · BCG Analysis · Key Market Statistics, Winter 2026</p>
            </div>
          </div>
        </div>
      </div>

      {/* Demand already proven */}
      <div className="px-6 lg:px-10 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-sm overflow-hidden" style={{ border: "1px solid rgba(201,168,64,0.18)" }}>
            <div className="px-8 py-5 flex items-center gap-3" style={{ background: "rgba(201,168,64,0.07)", borderBottom: "1px solid rgba(201,168,64,0.12)" }}>
              <div className="h-px w-6 bg-[#c9a840]" />
              <span className="text-[#c9a840] text-[10px] tracking-[0.3em] uppercase font-medium">Demand Already Proven</span>
            </div>
            <div className="grid md:grid-cols-2" style={{ background: "rgba(8,27,46,0.6)" }}>

              {/* Stat 1 — #1 audience */}
              <div className="px-8 py-8 md:border-r" style={{ borderColor: "rgba(201,168,64,0.12)" }}>
                <div className="text-[5rem] font-light leading-none text-[#c9a840] tabular-nums mb-3" style={{ fontFamily: "var(--font-playfair)" }}>#1</div>
                <div className="text-white text-sm font-medium mb-2">Country watching BAL games online</div>
                <p className="text-white/45 text-sm leading-relaxed">
                  South Africa ranked #1 among all nations for BAL online viewership — above Egypt, Rwanda, France, and the United States. The audience is already there, before a permanent team exists.
                </p>
                <p className="text-white/25 text-[9px] mt-4">Source: BAL Season 2 Recap · Digital Viewership by Country</p>
              </div>

              {/* Stat 2 — Playoffs hosted */}
              <div className="px-8 py-8">
                <div className="text-[5rem] font-light leading-none text-[#c9a840] tabular-nums mb-3" style={{ fontFamily: "var(--font-playfair)" }}>S5</div>
                <div className="text-white text-sm font-medium mb-2">BAL Playoffs hosted in South Africa</div>
                <p className="text-white/45 text-sm leading-relaxed">
                  The BAL chose South Africa — specifically the SunBet Arena in Pretoria — to host the Season 5 Playoffs and Finals in June 2025. The league already trusts South Africa with its most important games.
                </p>
                <p className="text-white/25 text-[9px] mt-4">Source: BAL Season 5 Calendar · Playoffs, Pretoria, June 6–14 2025</p>
              </div>

            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

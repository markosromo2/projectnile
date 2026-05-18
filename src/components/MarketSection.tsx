import Image from "next/image";

const mediaCompanies = [
  { name: "Naspers", desc: "Pan-African tech & media group — HQ'd in Cape Town" },
  { name: "MultiChoice / DStv", desc: "Largest pay-TV operator in sub-Saharan Africa" },
  { name: "Media24", desc: "Largest print & digital publisher in sub-Saharan Africa" },
  { name: "Canal+", desc: "Acquired MultiChoice 2025 — dominant French-language network" },
];

export default function MarketSection() {
  return (
    <section id="market" className="bg-[#091525] border-t border-white/[0.05] overflow-hidden">

      {/* Hero stat block — Cape Town aerial backdrop */}
      <div className="relative py-32 lg:py-40">
        <div className="absolute inset-0">
          <Image
            src="/images/cape-town-aerial.jpg"
            alt="Cape Town, South Africa"
            fill
            className="object-cover object-center opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#091525] via-[#091525]/80 to-[#091525]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-10">
            <div className="h-px w-8 bg-[#c9a840]" />
            <span className="text-[#c9a840] text-xs tracking-[0.3em] uppercase">The Market</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl text-white font-light leading-[0.88] mb-8" style={{ fontFamily: "var(--font-playfair)" }}>
                Africa&apos;s most<br />
                commercially<br />
                <span className="text-gold">powerful market.</span>
              </h2>
              <p className="text-white/50 text-base leading-relaxed max-w-md">
                Per capita purchasing power determines ticket revenue, merchandise, and premium hospitality. Cape Town leads every city on the continent — by a margin no competitor can close.
              </p>
            </div>

            {/* Big stat */}
            <div className="border border-white/[0.07] rounded-sm p-10 bg-white/[0.02]">
              <div className="text-white/30 text-xs tracking-widest uppercase mb-4">Per Capita Purchasing Power</div>
              <div className="text-[5rem] sm:text-[7rem] font-light leading-none text-gold tabular-nums mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                $9,276
              </div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[9px] text-[#c9a840] border border-[#c9a840]/30 px-2 py-1 rounded-sm tracking-widest uppercase">#1 in Africa</span>
                <span className="text-white/30 text-sm">Ahead of Johannesburg, Lagos, Cairo</span>
              </div>
              <div className="h-px bg-white/[0.06] mb-6" />
              <div className="grid grid-cols-3 gap-4">
                {[
                  { v: "$46.1B", l: "City GDP" },
                  { v: "4.9M", l: "Population" },
                  { v: "$403M", l: "Media Market" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="text-xl font-light text-white tabular-nums" style={{ fontFamily: "var(--font-playfair)" }}>{s.v}</div>
                    <div className="text-white/35 text-[10px] mt-0.5 tracking-wide">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Split: photo + media capital */}
      <div className="grid lg:grid-cols-2">
        {/* Photo */}
        <div className="relative h-[500px] lg:h-auto min-h-[400px]">
          <Image
            src="/images/camps-bay-golden.jpg"
            alt="Camps Bay, Cape Town"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#091525]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#091525] via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8">
            <Image src="/images/ct-tigers-logo.jpeg" alt="Cape Town Tigers" width={48} height={48} className="rounded-full opacity-80" />
          </div>
        </div>

        {/* Media capital */}
        <div className="bg-[#091525] p-10 lg:p-16 flex flex-col justify-center">
          <div className="text-white/30 text-xs tracking-widest uppercase mb-3">Africa&apos;s Media Capital</div>
          <h3 className="text-3xl text-white font-light mb-6 leading-snug" style={{ fontFamily: "var(--font-playfair)" }}>
            Every major<br />pan-African broadcaster<br />is headquartered here.
          </h3>

          <div className="grid grid-cols-3 gap-6 mb-10">
            {[
              { v: "$403M", l: "Annual Media Revenue", s: "#1 of 11 BAL markets" },
              { v: "8.4M", l: "Pay-TV Subscribers", s: "Most on the continent" },
              { v: "63%", l: "Pay-TV Penetration", s: "vs. 41% Sub-Saharan avg" },
            ].map((m) => (
              <div key={m.l}>
                <div className="text-[#c9a840] text-2xl font-light tabular-nums" style={{ fontFamily: "var(--font-playfair)" }}>{m.v}</div>
                <div className="text-white/50 text-[10px] mt-1 leading-tight">{m.l}</div>
                <div className="text-white/25 text-[9px] mt-0.5">{m.s}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-px bg-white/[0.05] rounded-sm overflow-hidden">
            {mediaCompanies.map((m) => (
              <div key={m.name} className="bg-[#091525] hover:bg-[#0d1e33] transition-colors p-5">
                <div className="text-white text-sm font-medium mb-1">{m.name}</div>
                <div className="text-white/35 text-xs leading-relaxed">{m.desc}</div>
              </div>
            ))}
          </div>

          <p className="text-white/20 text-[9px] mt-6 tracking-wide">Source: African Sports Market Intelligence Report · BCG Analysis · Key Market Statistics, Winter 2026</p>
        </div>
      </div>

    </section>
  );
}

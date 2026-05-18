const pillars = [
  {
    num: "01",
    kpi: "$9,276",
    kpiLabel: "Per Capita Purchasing Power",
    title: "Africa's #1 Consumer Market",
    target: "Highest commercial ceiling on the continent",
    points: [
      "#1 in Africa ahead of Johannesburg, Lagos, and Cairo — not by a small margin",
      "Every major pan-African broadcaster HQ'd here: Naspers, DStv, Canal+, Media24",
    ],
  },
  {
    num: "02",
    kpi: "50% + 100%",
    kpiLabel: "League + Local Revenue Retained",
    title: "NBA-Modelled Revenue Structure",
    target: "$2M guaranteed annual floor from 2028",
    points: [
      "50% of all BAL league distributions with a $2M floor — regardless of local performance",
      "100% of sponsorship, tickets, merchandise, and local media rights retained in full",
    ],
  },
  {
    num: "03",
    kpi: "4",
    kpiLabel: "National Championships",
    title: "Proven Execution",
    target: "3 BAL Finals · Day One Arena · 6 Years Operating",
    points: [
      "Cape Town Tigers: most decorated franchise in South Africa since the BAL's first season in 2019",
      "Grand Arena at GrandWest — 5,500 seats, Tier 1, Finals-eligible, fully operational today",
    ],
  },
];

export default function OpportunitySection() {
  return (
    <section id="opportunity" className="py-28 bg-[#060e1c] border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px w-8 bg-[#c9a840]" />
          <span className="text-[#c9a840] text-xs tracking-[0.3em] uppercase">The Opportunity</span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <h2 className="text-4xl sm:text-5xl text-white font-light leading-tight max-w-xl" style={{ fontFamily: "var(--font-playfair)" }}>
            Three structural advantages,<br />each already in place.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-white/[0.05]">
          {pillars.map((p, i) => (
            <div key={p.num} data-animate data-delay={String(i + 1)} className="bg-[#060e1c] hover:bg-[#091525] transition-colors p-8 lg:p-10 flex flex-col">
              <div className="flex items-start justify-between mb-8">
                <div className="text-6xl font-light leading-none select-none" style={{
                  fontFamily: "var(--font-playfair)",
                  color: "transparent",
                  WebkitTextStroke: "1px rgba(255,255,255,0.08)",
                }}>
                  {p.num}
                </div>
                <div className="h-px w-8 bg-[#c9a840] mt-5 shrink-0" />
              </div>

              <div className="mb-6">
                <div className="text-3xl sm:text-4xl font-light text-[#c9a840] leading-none tabular-nums mb-1" style={{ fontFamily: "var(--font-playfair)" }}>
                  {p.kpi}
                </div>
                <div className="text-white/30 text-[10px] tracking-widest uppercase">{p.kpiLabel}</div>
              </div>

              <h3 className="text-white text-lg font-light mb-1" style={{ fontFamily: "var(--font-playfair)" }}>
                {p.title}
              </h3>
              <div className="text-[#c9a840]/70 text-[10px] tracking-wide mb-6">{p.target}</div>

              <ul className="space-y-4 flex-1">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-3 text-sm text-white/55 leading-relaxed">
                    <span className="w-px self-stretch bg-white/10 shrink-0 mt-1" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

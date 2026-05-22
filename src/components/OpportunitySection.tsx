const pillars = [
  {
    num: "01",
    kpi: "$9,276",
    kpiLabel: "Per Capita Purchasing Power",
    title: "Africa's #1 Consumer Market",
    target: "An economy the size of a mid-market NBA city",
    points: [
      "Cape Town's $46.1B GDP is comparable to Portland, Oregon — home of an NBA franchise — making it the strongest commercial market on the continent by a wide margin",
      "Every major pan-African broadcaster is headquartered here: Naspers, DStv, Canal+, Media24 — the full ecosystem to monetise a professional basketball team is already in place",
    ],
  },
  {
    num: "02",
    kpi: "50% + 100%",
    kpiLabel: "League + Local Revenue Retained",
    title: "NBA-Modelled Revenue Structure",
    target: "$2M guaranteed annual floor from 2028 — regardless of local results",
    points: [
      "50% of all BAL league revenues are distributed equally to permanent franchises, with a hard $2M annual floor providing downside protection from day one of the Home/Away model",
      "100% of local revenues — sponsorship, ticketing, merchandise, and media rights — are retained in full by the team. In Cape Town, Africa's media capital, this is a structural competitive advantage no other market can match",
    ],
  },
  {
    num: "03",
    kpi: "4",
    kpiLabel: "National Championships Won",
    title: "Proven Execution",
    target: "3 BAL Finals · Tier 1 Arena · 6 Seasons Continuous Operation",
    points: [
      "The Cape Town franchise is the most decorated in South African basketball history — four national titles and three continental Finals appearances across six uninterrupted seasons, built by the same ownership group now submitting this bid",
      "The team trains permanently at Stellenbosch University's High Performance Sports Unit (HPSU), which in 2025 hosted 9 Olympic teams and 12 national teams — elite cross-pollination that no other BAL market can offer",
    ],
  },
];

export default function OpportunitySection() {
  return (
    <section id="opportunity" className="py-32 border-t border-black/[0.06]" style={{
      background: "repeating-linear-gradient(-55deg, transparent 0, transparent 18px, rgba(0,0,0,0.028) 18px, rgba(0,0,0,0.028) 19px), #f5f7fa"
    }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-[3px] w-10 bg-[#c9a840]" />
          <span className="text-[#c9a840] text-xs tracking-[0.3em] uppercase">The Opportunity</span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight max-w-xl text-[#0c1e32]" style={{ fontFamily: "var(--font-playfair)" }}>
            Three structural advantages,<br />each already in place.
          </h2>
          <p className="text-[#3a5a78] text-sm max-w-sm leading-relaxed lg:text-right tracking-[0.01em]">
            Market position, revenue architecture, and operational track record — not projections. Already built, already proven, already running.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {pillars.map((p, i) => (
            <div key={p.num} data-animate data-delay={String(i + 1)} className="card-stat p-8 lg:p-10 flex flex-col rounded-sm">
              <div className="flex items-start justify-between mb-8">
                <div className="text-6xl font-bold leading-none select-none text-white/[0.06]" style={{ fontFamily: "var(--font-playfair)" }}>
                  {p.num}
                </div>
                <div className="h-[2px] w-8 bg-[#c9a840]/60 mt-5 shrink-0" />
              </div>

              <div className="mb-7">
                <div className="font-semibold text-[#c9a840] leading-none tabular-nums mb-2" style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: p.kpi.length > 5 ? "2rem" : "2.75rem",
                }}>
                  {p.kpi}
                </div>
                <div className="text-white/40 text-xs tracking-widest uppercase">{p.kpiLabel}</div>
              </div>

              <h3 className="text-white text-base font-semibold mb-1 leading-snug">{p.title}</h3>
              <div className="text-[#c9a840]/70 text-xs tracking-wide mb-7">{p.target}</div>

              <ul className="space-y-4 flex-1">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-3 text-sm leading-relaxed tracking-[0.01em] text-white/60">
                    <span className="w-[2px] self-stretch bg-[#c9a840]/50 shrink-0 mt-1" />
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

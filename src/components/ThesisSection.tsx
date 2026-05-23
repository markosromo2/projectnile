const pillars = [
  {
    n: "I",
    title: "Proven Ownership",
    body: "Paul Bragiel and Lari Kangas co-founded the Cape Town franchise from the BAL's inaugural season. Four national championships and three BAL Finals appearances later, this bid transfers that institutional knowledge directly into the permanent franchise — the only bidding city with this level of proven track record on the ground.",
    stat: "4 Titles",
  },
  {
    n: "II",
    title: "Africa's #1 Consumer Market",
    body: "Cape Town leads every African city in purchasing power at $9,276 per capita — ahead of Johannesburg, Lagos, and Cairo. The highest-margin commercial market on the continent, anchored by the media infrastructure of Naspers, MultiChoice, and Media24.",
    stat: "$9,276",
  },
  {
    n: "III",
    title: "Tier 1 Arena, Day One",
    body: "Grand Arena at GrandWest seats 5,500 in BAL configuration, Tier 1 rated and eligible to host the BAL Finals. Operated by Sun International. No venue construction, no approval risk — the infrastructure is already BAL-compliant and available from Season 1.",
    stat: "5,500 Seats",
  },
  {
    n: "IV",
    title: "#2 NBA Pipeline City",
    body: "Cape Town ranks second among all 24 BAL cities for NBA Summer League players produced. Evans Ganapamo (Milwaukee Bucks) and Samkelo Cele (New York Knicks) demonstrate a talent pipeline that directly underpins the buy-develop-sell player trading model.",
    stat: "#2 Pipeline",
  },
];

export default function ThesisSection() {
  return (
    <section className="bg-[#f5f7fa]">
      {/* Full-width dark header band */}
      <div className="bg-[#080d14] px-6 lg:px-10 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-20">
          <div className="lg:w-1/2">
            <div className="section-label">
              <span className="text-[#c9a840] text-[10px] tracking-[0.3em] uppercase font-medium">The Case for Cape Town</span>
            </div>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl text-white font-light leading-[0.92] tracking-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Why Cape Town,<br />
              <span className="italic text-[#c9a840]">why now</span>
            </h2>
          </div>
          <p className="lg:w-5/12 text-white/40 text-sm leading-relaxed font-light">
            Four compounding advantages that make Cape Town the strongest permanent franchise application on the continent — each one already in place before this bid was filed.
          </p>
        </div>
      </div>

      {/* Pillars grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 border-b border-l border-[#080d14]/[0.07]">
          {pillars.map((p) => (
            <div
              key={p.n}
              className="border-t border-r border-[#080d14]/[0.07] p-8 lg:p-12 group hover:bg-[#f4f0e8] transition-colors"
            >
              <div className="flex items-start justify-between mb-8">
                <span
                  className="text-[4rem] font-light text-[#080d14]/[0.06] leading-none"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {p.n}
                </span>
                <span className="text-[#c9a840] text-xs tracking-widest uppercase border border-[#c9a840]/25 px-3 py-1.5 font-medium">
                  {p.stat}
                </span>
              </div>
              <h3
                className="text-xl text-[#080d14] font-medium mb-4 leading-tight"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {p.title}
              </h3>
              <p className="text-[#080d14]/50 text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

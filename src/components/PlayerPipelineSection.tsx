export default function PlayerPipelineSection() {
  return (
    <section className="bg-[#f5f7fa]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <div className="section-label">
              <span className="text-[#c9a840] text-[10px] tracking-[0.3em] uppercase font-medium">Player Development</span>
            </div>
            <h2
              className="text-4xl sm:text-5xl text-[#080d14] font-light leading-[0.92] tracking-tight mb-8"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              #2 NBA pipeline<br />
              <span className="italic">city in the BAL</span>
            </h2>
            <p className="text-[#080d14]/50 text-sm leading-relaxed mb-10">
              Cape Town has already produced NBA Summer League players with two marquee franchises — demonstrating talent depth that directly supports the buy-develop-sell revenue model built into the permanent team business plan.
            </p>

            {/* Players */}
            <div className="space-y-3">
              {[
                { name: "Evans Ganapamo", team: "Milwaukee Bucks", year: "2022", initials: "EG" },
                { name: "Samkelo Cele", team: "New York Knicks", year: "2024", initials: "SC" },
              ].map((p) => (
                <div key={p.name} className="flex items-center gap-5 p-5 border border-[#080d14]/[0.07] hover:border-[#c9a840]/30 hover:bg-[#f4f0e8] transition-all">
                  <div className="w-10 h-10 bg-[#080d14] flex items-center justify-center text-white/60 text-xs font-medium shrink-0">
                    {p.initials}
                  </div>
                  <div className="flex-1">
                    <div className="text-[#080d14] text-sm font-medium">{p.name}</div>
                    <div className="text-[#080d14]/40 text-xs mt-0.5">{p.team} · {p.year} Summer League</div>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-[#c9a840]/50 shrink-0" />
                </div>
              ))}
            </div>
          </div>

          {/* Right: league context */}
          <div>
            <div className="grid grid-cols-2 gap-px bg-[#080d14]/[0.07] mb-8">
              {[
                { v: "#2", l: "NBA Pipeline Ranking", s: "Among 24 BAL cities" },
                { v: "9+", l: "BAL Summer League Players", s: "Across all BAL markets" },
                { v: "3", l: "Record: Single Season (2025)", s: "Most BAL players at one Summer League" },
                { v: "24", l: "BAL Cities", s: "21 countries on the continent" },
              ].map((s) => (
                <div key={s.l} className="bg-white p-6 hover:bg-[#f5f7fa] transition-colors">
                  <div className="text-3xl text-[#080d14] font-light mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{s.v}</div>
                  <div className="text-[#080d14]/60 text-xs font-medium leading-snug">{s.l}</div>
                  <div className="text-[#080d14]/30 text-[10px] mt-0.5">{s.s}</div>
                </div>
              ))}
            </div>

            <div className="bg-[#080d14] p-8">
              <div className="text-[#c9a840] text-[10px] tracking-[0.25em] uppercase mb-4 font-medium">Development Economics</div>
              <p className="text-white/50 text-sm leading-relaxed">
                The BAL&apos;s permanent team model creates a direct revenue stream: identify Cape Town talent early, develop it through the world-class Stellenbosch HPSU infrastructure, and monetise through player trading or NBA pathway fees. Cape Town&apos;s #2 ranking is a compounding structural advantage — each NBA placement validates the model and raises franchise visibility internationally.
              </p>
              <p className="text-white/20 text-[10px] mt-5">Source: Cape Town Player Development Report, Moelis &amp; Company</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

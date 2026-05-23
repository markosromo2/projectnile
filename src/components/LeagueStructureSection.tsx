const streams = [
  { cat: "League", items: ["Media Rights (Canal+, ESPN, Pan-African)", "League Sponsorship (16 partners, 13%+ growth 2025)", "Merchandise (280%+ sales growth 2025)", "DTC / Streaming (YouTube, Tencent, NBA App)"] },
  { cat: "Team", items: ["Local Sponsorship — jersey, in-arena, digital (100% retained)", "Ticket Sales from 2028 under home/away model (100% retained)", "Merchandise — game-day and online (100% retained)", "Local Media Rights — at BAL approval (100% retained)"] },
];

export default function LeagueStructureSection() {
  return (
    <section id="structure" className="bg-[#f5f7fa]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-end">
          <div>
            <div className="section-label">
              <span className="text-[#c9a840] text-[10px] tracking-[0.3em] uppercase font-medium">League Structure</span>
            </div>
            <h2
              className="text-4xl sm:text-5xl text-[#080d14] font-light leading-[0.92] tracking-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Modelled on<br />
              <span className="italic">NBA best practices</span>
            </h2>
          </div>
          <p className="text-[#080d14]/50 text-sm leading-relaxed">
            50% of league-wide revenues flow to permanent teams with a $2M guaranteed annual floor. 100% of locally generated revenues are retained by the team — creating a direct commercial incentive to build the strongest possible Cape Town franchise.
          </p>
        </div>
      </div>

      {/* Big numbers */}
      <div className="grid md:grid-cols-2 gap-px bg-[#080d14]/[0.08] mx-6 lg:mx-10 mb-16">
        <div className="bg-[#080d14] px-10 py-12">
          <div className="text-[7rem] leading-none text-white font-light tabular-nums mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
            50<span className="text-[#c9a840]">%</span>
          </div>
          <div className="text-white text-base font-medium mb-3">of League Revenues Distributed to Permanent Teams</div>
          <div className="text-white/35 text-sm leading-relaxed max-w-sm">
            With a guaranteed floor of $2M per team from 2028 ($1M in year one under Caravan model) — a stable income foundation regardless of local commercial performance.
          </div>
        </div>
        <div className="bg-white px-10 py-12">
          <div className="text-[7rem] leading-none text-[#080d14] font-light tabular-nums mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
            100<span className="text-[#c9a840]">%</span>
          </div>
          <div className="text-[#080d14] text-base font-medium mb-3">of Local Revenues Retained by Permanent Teams</div>
          <div className="text-[#080d14]/50 text-sm leading-relaxed max-w-sm">
            Sponsorship, ticketing, merchandise, and local media rights kept in full — the direct upside of owning the commercial rights in Africa&apos;s #1 purchasing-power market.
          </div>
        </div>
      </div>

      {/* Revenue stream table */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-24">
        <div className="grid lg:grid-cols-2 gap-8">
          {streams.map((s) => (
            <div key={s.cat}>
              <div className="text-[#080d14]/35 text-[10px] tracking-[0.2em] uppercase mb-4 font-medium">
                {s.cat === "League" ? "League-Generated (50% distributed)" : "Team-Generated (100% retained)"}
              </div>
              <div className="border border-[#080d14]/[0.08] overflow-hidden bg-white">
                {s.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 px-5 py-4 border-b border-[#080d14]/[0.05] last:border-b-0 hover:bg-[#f4f0e8] transition-colors">
                    <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${s.cat === "Team" ? "bg-[#c9a840]" : "bg-[#080d14]/25"}`} />
                    <span className="text-[#080d14]/60 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

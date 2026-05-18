const leagueStreams = [
  { source: "BAL Media Rights", desc: "Canal+, ESPN, pan-African & international broadcast" },
  { source: "League Sponsorship", desc: "16 sponsors in 2025 · 100% increase in partners YoY" },
  { source: "DTC / Streaming", desc: "3.4M YouTube views in 2025 · Tencent · NBA App" },
  { source: "BAL Merchandise", desc: "280%+ growth in 2025 · Outerstuff (NBA-level partner)" },
];

const teamStreams = [
  { source: "Local Sponsorship", desc: "Jersey, in-arena, digital assets — 100% retained Day 1" },
  { source: "Ticketing", desc: "From 2028 · 5,500 seats · R150–R250 per ticket" },
  { source: "Team Merchandise", desc: "Game-day and online — 100% retained" },
  { source: "Local Media Rights", desc: "Additional upside · Cape Town is Africa's media capital" },
];

export default function RevenueModelSection() {
  return (
    <section id="revenue" className="py-28 bg-[#060e1c] border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="flex items-center gap-3 mb-8">
          <div className="h-px w-8 bg-[#c9a840]" />
          <span className="text-[#c9a840] text-xs tracking-[0.3em] uppercase">Revenue Architecture</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <h2 className="text-4xl sm:text-5xl text-white font-light leading-tight max-w-xl" style={{ fontFamily: "var(--font-playfair)" }}>
            Two revenue engines,<br />compounding
          </h2>
          <p className="text-white/45 text-sm max-w-sm leading-relaxed lg:text-right">
            Guaranteed league distributions plus 100% retention of local revenues — modelled on NBA best practices.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-px bg-white/[0.05] mb-16">
          {/* League */}
          <div className="bg-[#060e1c] p-8 lg:p-10">
            <div className="flex items-end gap-3 mb-6">
              <div className="text-[4.5rem] font-light leading-none text-white/80 tabular-nums" style={{ fontFamily: "var(--font-playfair)" }}>
                50<span className="text-[#c9a840]">%</span>
              </div>
            </div>
            <div className="text-white font-medium mb-2">of League Revenues Distributed</div>
            <p className="text-white/40 text-sm leading-relaxed mb-8">
              $2M guaranteed annual floor from 2028 — stable foundation regardless of local performance.
            </p>
            <div className="text-white/30 text-xs tracking-widest uppercase mb-4">League Revenue Sources</div>
            <div className="space-y-0 panel">
              {leagueStreams.map((s) => (
                <div key={s.source} className="flex items-start gap-4 px-5 py-4 border-b border-white/[0.05] last:border-b-0 hover:bg-white/[0.02] transition-colors">
                  <div className="flex-1">
                    <div className="text-white/80 text-sm font-medium">{s.source}</div>
                    <div className="text-white/35 text-xs mt-0.5 leading-relaxed">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div className="bg-[#091525] p-8 lg:p-10 border-l border-[#c9a840]/10">
            <div className="flex items-end gap-3 mb-6">
              <div className="text-[4.5rem] font-light leading-none tabular-nums" style={{
                fontFamily: "var(--font-playfair)",
                background: "linear-gradient(135deg, #c9a840 0%, #e8d08a 50%, #c9a840 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                100<span style={{ color: "rgba(255,255,255,0.3)", WebkitTextFillColor: "rgba(255,255,255,0.3)" }}>%</span>
              </div>
            </div>
            <div className="text-white font-medium mb-2">of Local Revenues Retained</div>
            <p className="text-white/40 text-sm leading-relaxed mb-8">
              Sponsorship, ticketing, merchandise, and local media rights — kept in full.
            </p>
            <div className="text-white/30 text-xs tracking-widest uppercase mb-4">Team Revenue Sources</div>
            <div className="space-y-0 border border-[#c9a840]/15 rounded-sm overflow-hidden">
              {teamStreams.map((s) => (
                <div key={s.source} className="flex items-start gap-4 px-5 py-4 border-b border-[#c9a840]/[0.08] last:border-b-0 hover:bg-[#c9a840]/[0.03] transition-colors">
                  <div className="flex-1">
                    <div className="text-white/80 text-sm font-medium">{s.source}</div>
                    <div className="text-white/35 text-xs mt-0.5 leading-relaxed">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BAL Revenue history */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <div className="text-white/30 text-xs tracking-widest uppercase mb-6">BAL League Revenue Growth (2021–2025)</div>
            <div className="space-y-3 mb-4">
              {[
                { year: "2021", value: 5.8, max: 12.6 },
                { year: "2022", value: 7.9, max: 12.6 },
                { year: "2023", value: 8.1, max: 12.6 },
                { year: "2024", value: 12.6, max: 12.6 },
                { year: "2025", value: 12.6, max: 12.6, highlight: true },
              ].map((r) => (
                <div key={r.year}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`text-xs ${r.highlight ? "text-white" : "text-white/40"}`}>{r.year}</span>
                    <span className={`text-sm font-light tabular-nums ${r.highlight ? "text-[#c9a840]" : "text-white/50"}`} style={{ fontFamily: "var(--font-playfair)" }}>${r.value}M</span>
                  </div>
                  <div className="h-[2px] bg-white/[0.05] rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${r.highlight ? "bg-gradient-to-r from-[#c9a840] to-[#e8d08a]" : "bg-white/20"}`} style={{ width: `${(r.value / r.max) * 100}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-white/20 text-[9px] mt-3 tracking-wide">Source: NBA Africa management financials · Fiscal year ends September 30</p>
          </div>

          <div>
            <div className="text-white/30 text-xs tracking-widest uppercase mb-6">2025 Season Momentum</div>
            <table className="data-table panel">
              <tbody>
                {[
                  { metric: "Total BAL Revenue", value: "$12.6M", change: "2× since 2021" },
                  { metric: "League Sponsors", value: "16", change: "+100% vs. prior year" },
                  { metric: "Sponsorship CAGR", value: "17%", change: "2021–2025" },
                  { metric: "Ticketing Revenue CAGR", value: "119%", change: "2021–2025" },
                  { metric: "Merchandise Growth", value: "280%+", change: "vs. prior year" },
                  { metric: "Global YouTube Views", value: "~3.4M", change: "+80% YoY" },
                  { metric: "Total Attendance", value: "140k+", change: "vs. 45k in 2022" },
                ].map((r) => (
                  <tr key={r.metric}>
                    <td><span className="text-white/65">{r.metric}</span></td>
                    <td className="text-right"><span className="text-white font-medium" style={{ fontFamily: "var(--font-playfair)" }}>{r.value}</span></td>
                    <td className="text-right hidden sm:table-cell"><span className="text-white/30 text-xs">{r.change}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}

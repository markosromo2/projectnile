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
    <section id="revenue" className="py-32 border-t border-black/[0.06]" style={{ background: "repeating-linear-gradient(-55deg, transparent 0, transparent 18px, rgba(0,0,0,0.028) 18px, rgba(0,0,0,0.028) 19px), #f5f7fa" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="flex items-center gap-3 mb-8">
          <div className="h-[3px] w-10 bg-[#c9a840]" />
          <span className="text-[#c9a840] text-xs tracking-[0.3em] uppercase">Revenue Architecture</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight max-w-xl text-[#0c1e32]" style={{ fontFamily: "var(--font-playfair)" }}>
            Two revenue engines,<br />compounding
          </h2>
          <p className="text-[#3a5a78] text-sm max-w-sm leading-relaxed lg:text-right tracking-[0.01em]">
            A $2M guaranteed annual floor from the BAL, plus 100% of every local dollar the team generates — sponsorship, tickets, merchandise, and media rights. No revenue sharing with the league on local income. Modelled directly on the NBA franchise structure.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 mb-16">
          {/* League */}
          <div className="card-light p-8 lg:p-10 rounded-sm">
            <div className="text-[5rem] font-light leading-none tabular-nums mb-3 text-[#0c1e32]" style={{ fontFamily: "var(--font-playfair)" }}>
              <span data-count="50" data-count-prefix="" data-count-suffix="">50</span><span className="text-[#c9a840]">%</span>
            </div>
            <div className="text-[#0c1e32] font-medium mb-2">of League Revenues Distributed</div>
            <p className="text-[#3a5a78] text-sm leading-relaxed mb-8 tracking-[0.01em]">
              $2M guaranteed annual floor from 2028 — stable foundation regardless of local performance.
            </p>
            <div className="text-[#8aa0b5] text-xs tracking-widest uppercase mb-3">League Revenue Sources</div>
            <div className="panel-light">
              {leagueStreams.map((s) => (
                <div key={s.source} className="flex items-start gap-4 px-5 py-4 border-b border-black/[0.05] last:border-b-0 hover:bg-black/[0.02] transition-colors">
                  <div className="flex-1">
                    <div className="text-[#0c1e32] text-sm font-medium">{s.source}</div>
                    <div className="text-[#5a7898] text-sm mt-0.5 leading-relaxed">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div className="rounded-sm p-8 lg:p-10" style={{
            background: "linear-gradient(135deg, rgba(201,168,64,0.07) 0%, #ffffff 60%)",
            border: "1px solid rgba(201,168,64,0.28)"
          }}>
            <div className="text-[5rem] font-light leading-none tabular-nums mb-3" style={{
              fontFamily: "var(--font-playfair)",
              background: "linear-gradient(135deg, #b8942e 0%, #e8c84a 50%, #b8942e 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              <span data-count="100" data-count-prefix="" data-count-suffix="">100</span><span style={{ color: "rgba(0,0,0,0.18)", WebkitTextFillColor: "rgba(0,0,0,0.18)" }}>%</span>
            </div>
            <div className="text-[#0c1e32] font-medium mb-2">of Local Revenues Retained</div>
            <p className="text-[#3a5a78] text-sm leading-relaxed mb-8 tracking-[0.01em]">
              Sponsorship, ticketing, merchandise, and local media rights — kept in full.
            </p>
            <div className="text-[#8aa0b5] text-xs tracking-widest uppercase mb-3">Team Revenue Sources</div>
            <div className="rounded-sm overflow-hidden" style={{ border: "1px solid rgba(201,168,64,0.2)" }}>
              {teamStreams.map((s) => (
                <div key={s.source} className="flex items-start gap-4 px-5 py-4 border-b last:border-b-0 hover:bg-[#c9a840]/[0.04] transition-colors" style={{ borderColor: "rgba(201,168,64,0.12)" }}>
                  <div className="flex-1">
                    <div className="text-[#0c1e32] text-sm font-medium">{s.source}</div>
                    <div className="text-[#5a7898] text-sm mt-0.5 leading-relaxed">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SA local sponsorship already validated */}
        <div className="mb-16 p-8 rounded-sm" style={{ background: "linear-gradient(135deg, rgba(201,168,64,0.06) 0%, #ffffff 70%)", border: "1px solid rgba(201,168,64,0.2)" }}>
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="lg:max-w-lg">
              <div className="text-[#c9a840] text-[10px] tracking-widest uppercase mb-3 font-medium">Local SA Sponsorship — Already Validated</div>
              <h3 className="text-2xl text-[#0c1e32] font-light mb-3 leading-snug" style={{ fontFamily: "var(--font-playfair)" }}>
                SA corporates are already paying.<br />Before a permanent team exists.
              </h3>
              <p className="text-[#3a5a78] text-sm leading-relaxed">
                In Season 5 — with Cape Town still operating as a caravan franchise — three major global brands signed as BAL sponsors specifically targeting the South African market. The local sponsorship revenue line isn&apos;t a projection. The demand is already proven.
              </p>
              <p className="text-[#94a3b8] text-[10px] mt-4">Source: BAL Historical Revenues · Moelis &amp; Company Data Room · Season 5</p>
            </div>
            <div className="flex flex-col gap-2 lg:min-w-[180px]">
              <div className="text-[#8aa0b5] text-[10px] tracking-widest uppercase mb-1">Season 5 SA Sponsors</div>
              {["Uber Eats", "Hyundai", "ServiceNow"].map((sponsor) => (
                <div key={sponsor} className="px-4 py-3 text-sm text-[#0c1e32] font-medium text-center" style={{ background: "rgba(12,30,50,0.05)", border: "1px solid rgba(12,30,50,0.1)" }}>
                  {sponsor}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BAL Revenue history */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="panel-light p-6">
              <div className="text-[#8aa0b5] text-[10px] tracking-widest uppercase mb-5">BAL League Revenue Growth (2021–2025)</div>
              <div className="space-y-4">
                {[
                  { year: "2021", value: 5.8, max: 12.6 },
                  { year: "2022", value: 7.9, max: 12.6 },
                  { year: "2023", value: 8.1, max: 12.6 },
                  { year: "2024", value: 12.6, max: 12.6 },
                  { year: "2025", value: 12.6, max: 12.6, highlight: true },
                ].map((r) => (
                  <div key={r.year}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className={`text-xs ${r.highlight ? "text-[#0c1e32] font-medium" : "text-[#5a7898]"}`}>{r.year}</span>
                      <span className={`text-sm font-light tabular-nums ${r.highlight ? "text-[#c9a840]" : "text-[#5a7898]"}`} style={{ fontFamily: "var(--font-playfair)" }}>${r.value}M</span>
                    </div>
                    <div className="h-[2px] bg-black/[0.07] rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${r.highlight ? "bg-gradient-to-r from-[#c9a840] to-[#e8c84a]" : "bg-[#1a5f8e]/30"}`} data-bar-pct={Math.round((r.value / r.max) * 100)} />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[#94a3b8] text-[10px] mt-5 tracking-wide">Source: NBA Africa management financials · Fiscal year ends September 30</p>
            </div>
          </div>

          <div>
            <div className="text-[#8aa0b5] text-xs tracking-widest uppercase mb-6">2025 Season Momentum</div>
            <table className="data-table-light panel-light">
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
                    <td><span className="text-[#3a5a78]">{r.metric}</span></td>
                    <td className="text-right"><span className="text-[#0c1e32] font-medium" style={{ fontFamily: "var(--font-playfair)" }}>{r.value}</span></td>
                    <td className="text-right hidden sm:table-cell"><span className="text-[#8aa0b5] text-xs">{r.change}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* NBA Operational Support */}
        <div className="mt-16 bg-[#080d14] p-8 lg:p-12 rounded-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[2px] w-8 bg-[#c9a840]" />
            <span className="text-[#c9a840] text-[10px] tracking-[0.25em] uppercase font-medium">NBA Operational Support</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-2xl lg:text-3xl text-white font-light mb-4 leading-snug" style={{ fontFamily: "var(--font-playfair)" }}>
                The NBA&apos;s operating<br />infrastructure comes<br />with the franchise.
              </h3>
              <p className="text-white/45 text-sm leading-relaxed">
                The BAL league office delivers centralized NBA-grade support across every major commercial function. No hiring playbook from scratch, no guessing on pricing strategy — the infrastructure that built the NBA is handed to permanent teams from Day 1.
              </p>
              <p className="text-white/18 text-[10px] mt-5">Source: NBA – BAL Expertise Sharing · Moelis &amp; Company Data Room</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: "Ticketing & Sales", desc: "Pricing strategies, retention programs, revenue optimization" },
                { label: "Sponsorship", desc: "Sales, activation, prospecting, and category management" },
                { label: "Marketing", desc: "Brand positioning, campaigns, and promotional strategies" },
                { label: "Digital & Social", desc: "Content strategy, platform optimization, fan analytics" },
                { label: "Broadcast Operations", desc: "Live game production and centralized BAL content" },
                { label: "Arena Operations", desc: "Guest experience and operational efficiency playbooks" },
              ].map((item) => (
                <div key={item.label} className="p-4 rounded-sm" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="text-white/75 text-xs font-medium mb-1">{item.label}</div>
                  <div className="text-white/28 text-[10px] leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

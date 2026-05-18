const rows = [
  { year: "2027E", note: "Caravan model", rev: "$1.6M", exp: "$1.0M", profit: "+$0.7M", margin: "41%", games: 6 },
  { year: "2028E", note: "Home / Away begins", rev: "$4.4M", exp: "$5.0M", profit: "($0.6M)", margin: "—", games: 22 },
  { year: "2030E", note: "Year 4", rev: "$6.5M", exp: "$6.3M", profit: "+$0.3M", margin: "4%", games: 22 },
  { year: "2031E", note: "Year 5", rev: "$7.2M", exp: "$6.6M", profit: "+$0.6M", margin: "8%", games: 22 },
  { year: "2036E", note: "Year 10 target", rev: "$17.4M", exp: "$12.0M", profit: "+$5.4M", margin: "31%", games: 30, highlight: true },
];

const breakdown = [
  { label: "Sponsorship", value: "$9.6M", cagr: "23%", pct: 55 },
  { label: "League Revenue", value: "$4.3M", cagr: "10%", pct: 25 },
  { label: "Merchandise", value: "$2.0M", cagr: "74%", pct: 12 },
  { label: "Ticketing", value: "$1.6M", cagr: "13%", pct: 9 },
];

export default function FinancialProjectionsSection() {
  return (
    <section id="financials" className="py-28 bg-[#091525] border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="flex items-center gap-3 mb-8">
          <div className="h-px w-8 bg-[#c9a840]" />
          <span className="text-[#c9a840] text-xs tracking-[0.3em] uppercase">Financial Projections</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <h2 className="text-4xl sm:text-5xl text-white font-light leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
            Profitable in Year 4.<br />
            <span className="text-gold">31% margin by Year 10.</span>
          </h2>
          <p className="text-white/45 text-sm max-w-sm leading-relaxed lg:text-right">
            19% revenue CAGR 2028–2036. $17.4M revenue target in Year 10. Modelled by BCG and NBA Africa management.
          </p>
        </div>

        {/* Top metrics */}
        <div className="grid grid-cols-3 gap-px bg-white/[0.05] rounded-sm overflow-hidden mb-12">
          {[
            { v: "19%", l: "Revenue CAGR", s: "2028–2036" },
            { v: "31%", l: "Year 10 Margin", s: "2036 operating margin" },
            { v: "$17.4M", l: "2036E Revenue", s: "Year 10 target" },
          ].map((s, i) => (
            <div key={s.l} data-animate data-delay={String(i + 1)} className="bg-[#091525] hover:bg-[#0d1e33] transition-colors px-6 py-6">
              <div className="text-3xl font-light text-[#c9a840] mb-1 tabular-nums" style={{ fontFamily: "var(--font-playfair)" }}>{s.v}</div>
              <div className="text-white/70 text-xs font-medium">{s.l}</div>
              <div className="text-white/30 text-[10px] mt-0.5">{s.s}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* P&L table */}
          <div>
            <div className="text-white/30 text-xs tracking-widest uppercase mb-5">Illustrative P&amp;L — Key Years</div>
            <table className="data-table panel">
              <thead>
                <tr>
                  <th>Year</th>
                  <th className="hidden sm:table-cell">Phase</th>
                  <th className="text-right">Revenue</th>
                  <th className="text-right">Op. Profit</th>
                  <th className="text-right hidden md:table-cell">Margin</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.year} className={r.highlight ? "bg-[#c9a840]/[0.04]" : ""}>
                    <td>
                      <span className={`font-medium text-sm ${r.highlight ? "text-[#c9a840]" : "text-white"}`}>{r.year}</span>
                    </td>
                    <td className="hidden sm:table-cell">
                      <span className="text-white/35 text-xs">{r.note}</span>
                    </td>
                    <td className="text-right">
                      <span className={`font-medium ${r.highlight ? "text-[#c9a840]" : "text-white/80"}`}>{r.rev}</span>
                    </td>
                    <td className="text-right">
                      <span className={`text-sm font-medium ${r.profit.startsWith("+") ? "text-emerald-400/70" : "text-white/35"}`}>{r.profit}</span>
                    </td>
                    <td className="text-right hidden md:table-cell">
                      <span className="text-white/30 text-xs">{r.margin}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-white/20 text-[9px] mt-3">Source: BCG analysis, NBA Africa management, Moelis &amp; Company Fall 2025</p>
          </div>

          {/* Revenue breakdown */}
          <div>
            <div className="text-white/30 text-xs tracking-widest uppercase mb-5">2036E Revenue by Category</div>
            <div className="space-y-5 mb-10">
              {breakdown.map((r) => (
                <div key={r.label}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-white/65 text-sm">{r.label}</span>
                      <span className="text-[9px] text-[#c9a840] border border-[#c9a840]/25 px-1.5 py-0.5 rounded-sm tracking-widest">{r.cagr} CAGR</span>
                    </div>
                    <span className="text-white text-sm font-medium tabular-nums">{r.value}</span>
                  </div>
                  <div className="h-[2px] bg-white/[0.06] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#c9a840] to-[#e8d08a] rounded-full" style={{ width: r.pct + "%" }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="callout">
              <div className="flex items-start gap-4">
                <div className="w-px self-stretch bg-[#c9a840]/40 shrink-0" />
                <div>
                  <div className="text-[#c9a840] text-xs tracking-widest uppercase mb-2">Full Financials Available Under NDA</div>
                  <p className="text-white/55 text-sm leading-relaxed mb-4">
                    Complete 10-year P&amp;L, team fee assumptions, sources of financing, venue cost model, and all due diligence materials are available in a structured data room managed by Moelis &amp; Company.
                  </p>
                  <ul className="space-y-1.5">
                    {[
                      "10-year P&L with annual detail: 2027–2036",
                      "Sponsorship assumptions and African football benchmarks",
                      "Venue and game day expense model",
                      "League revenue distribution methodology",
                    ].map((item) => (
                      <li key={item} className="flex gap-2 text-white/35 text-xs leading-relaxed">
                        <span className="text-[#c9a840]/40 shrink-0">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

import Image from "next/image";

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
    <section id="financials" className="py-32" style={{
      background: "repeating-linear-gradient(-55deg, transparent 0, transparent 18px, rgba(0,0,0,0.028) 18px, rgba(0,0,0,0.028) 19px), #f5f7fa"
    }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="flex items-center gap-3 mb-8">
          <div className="h-[3px] w-10 bg-[#c9a840]" />
          <span className="text-[#c9a840] text-xs tracking-[0.3em] uppercase">Financial Projections</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-[#0c1e32]" style={{ fontFamily: "var(--font-playfair)" }}>
            Profitable in Year 4.<br />
            <span className="text-[#c9a840]">31% margin by Year 10.</span>
          </h2>
          <p className="text-[#3a5a78] text-sm max-w-sm leading-relaxed lg:text-right tracking-[0.01em]">
            A 19% annual growth rate from 2028 to 2036, outpacing most established professional sports leagues globally. $17.4M revenue target modelled jointly by BCG and NBA Africa management — not internal projections.
          </p>
        </div>

        {/* KPI tiles */}
        <div className="grid grid-cols-3 gap-3 mb-14">
          {[
            { v: "19%", num: 19, pre: "", suf: "%", dec: 0, l: "Revenue CAGR", s: "Annual growth 2028–2036, outpacing most established pro sports leagues worldwide" },
            { v: "31%", num: 31, pre: "", suf: "%", dec: 0, l: "Year 10 Operating Margin", s: "$5.4M operating profit on $17.4M revenue — equivalent to a healthy mid-market franchise" },
            { v: "$17.4M", num: 17.4, pre: "$", suf: "M", dec: 1, l: "2036E Total Revenue", s: "Driven by sponsorship (55%), league distributions (25%), merchandise, and ticketing" },
          ].map((s, i) => (
            <div key={s.l} data-animate data-delay={String(i + 1)} className="card-stat rounded-sm px-7 py-6" style={{ background: "#080d14" }}>
              <div
                className="text-3xl font-semibold text-[#c9a840] mb-1 tabular-nums"
                style={{ fontFamily: "var(--font-playfair)" }}
                data-count={s.num}
                data-count-prefix={s.pre}
                data-count-suffix={s.suf}
                data-count-decimals={String(s.dec)}
              >{s.v}</div>
              <div className="text-white text-xs font-medium">{s.l}</div>
              <div className="text-white/40 text-xs mt-0.5 leading-relaxed">{s.s}</div>
            </div>
          ))}
        </div>

        {/* Revenue trajectory chart */}
        <div className="mb-16 panel-light p-8">
          <div className="text-[#8aa0b5] text-xs tracking-widest uppercase mb-8">Revenue Trajectory — 2027 to 2036</div>
          <div className="flex items-end gap-3 sm:gap-5" style={{ height: "180px" }}>
            {[
              { year: "2027E", rev: "$1.6M", pct: 9,   note: "Caravan",     highlight: false },
              { year: "2028E", rev: "$4.4M", pct: 25,  note: "Home / Away", highlight: false },
              { year: "2030E", rev: "$6.5M", pct: 37,  note: "Year 4",      highlight: false },
              { year: "2031E", rev: "$7.2M", pct: 41,  note: "Year 5",      highlight: false },
              { year: "2036E", rev: "$17.4M",pct: 100, note: "Target",      highlight: true  },
            ].map((b, i) => (
              <div key={b.year} className="flex flex-col items-center flex-1 h-full">
                {/* Value label */}
                <div className="flex-1 flex flex-col justify-end w-full">
                  <div className={`text-center mb-2 font-light tabular-nums text-xs sm:text-sm ${b.highlight ? "text-[#c9a840]" : "text-[#5a7898]"}`}
                    style={{ fontFamily: "var(--font-playfair)" }}>
                    {b.rev}
                  </div>
                  {/* Bar */}
                  <div className="w-full flex items-end" style={{ height: "120px" }}>
                    <div
                      className="w-full rounded-t-sm"
                      style={{
                        height: "0%",
                        maxHeight: "100%",
                        background: b.highlight
                          ? "linear-gradient(to top, #b8942e, #e8c84a)"
                          : `rgba(26,63,114,${0.18 + i * 0.06})`,
                      }}
                      data-bar-height={b.pct}
                    />
                  </div>
                </div>
                {/* Year label */}
                <div className="mt-2.5 text-center">
                  <div className={`text-[10px] font-medium ${b.highlight ? "text-[#0c1e32]" : "text-[#8aa0b5]"}`}>{b.year}</div>
                  <div className="text-[9px] text-[#5a7898] tracking-wide hidden sm:block">{b.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Profitability milestone callout */}
        <div className="mb-16 rounded-sm overflow-hidden" style={{ background: "#080d14" }}>
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1.5 shrink-0" style={{ background: "linear-gradient(to bottom, #c9a840, #b8942e)" }} />
            <div className="p-8 lg:p-10 flex flex-col lg:flex-row lg:items-center gap-10">
              <div className="lg:flex-1">
                <div className="text-[#c9a840] text-[10px] tracking-widest uppercase mb-3">Profitability Path</div>
                <h3 className="text-2xl lg:text-3xl text-white font-light leading-snug mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                  Year 4.<br />The turn to profit.
                </h3>
                <p className="text-white/45 text-sm leading-relaxed max-w-lg">
                  The 2028 first year of Home/Away operations carries an expected ($0.6M) launch deficit — upfront investment in arena, staffing, and market establishment. By Year 4 the franchise turns its first operating surplus, then compounds to a 31% margin by Year 10.
                </p>
              </div>
              <div className="shrink-0 grid grid-cols-3 gap-6">
                {[
                  { label: "Year 1 deficit", value: "($0.6M)", note: "2028 — launch" },
                  { label: "Year 4 surplus", value: "+$0.3M", note: "2030 — breakeven+" },
                  { label: "Year 10 surplus", value: "+$5.4M", note: "2036 — 31% margin" },
                ].map((m) => (
                  <div key={m.label} className="text-center">
                    <div
                      className="text-xl font-light tabular-nums mb-0.5"
                      style={{
                        fontFamily: "var(--font-playfair)",
                        color: m.value.startsWith("+") ? "#c9a840" : "rgba(255,255,255,0.35)",
                      }}
                    >{m.value}</div>
                    <div className="text-white/55 text-[10px] font-medium uppercase tracking-wide mb-0.5">{m.label}</div>
                    <div className="text-white/25 text-[9px]">{m.note}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Photo divider */}
        <div className="relative rounded-sm overflow-hidden mb-16" style={{ height: "320px" }}>
          <Image
            src="/images/ct-player-mountain-kick.jpg"
            alt="Cape Town Tigers athlete on Table Mountain"
            fill
            className="object-cover object-center"
            style={{ opacity: 0.75 }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(245,247,250,0.92) 0%, rgba(245,247,250,0.4) 40%, transparent 70%)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(245,247,250,0.5) 0%, transparent 40%, rgba(245,247,250,0.7) 100%)" }} />
          <div className="relative h-full flex items-center px-10 lg:px-14">
            <div className="max-w-md">
              <div className="text-[#c9a840] text-[10px] tracking-widest uppercase mb-3">The Investment Case</div>
              <p className="text-[#0c1e32] text-2xl font-light leading-snug" style={{ fontFamily: "var(--font-playfair)" }}>
                Africa&apos;s #1 market. Tier 1 arena. Six seasons of operation. The infrastructure is already built.
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 mb-16">
          {/* P&L table */}
          <div>
            <div className="text-[#8aa0b5] text-xs tracking-widest uppercase mb-5">Illustrative P&amp;L — Key Years</div>
            <table className="data-table-light panel-light">
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
                  <tr key={r.year} className={r.highlight ? "bg-[#c9a840]/[0.05]" : ""}>
                    <td><span className={`font-medium text-sm ${r.highlight ? "text-[#c9a840]" : "text-[#0c1e32]"}`}>{r.year}</span></td>
                    <td className="hidden sm:table-cell"><span className="text-[#3a5a78] text-xs">{r.note}</span></td>
                    <td className="text-right"><span className={`font-medium ${r.highlight ? "text-[#c9a840]" : "text-[#0c1e32]"}`}>{r.rev}</span></td>
                    <td className="text-right"><span className={`text-sm font-medium ${r.profit.startsWith("+") ? "text-emerald-600" : "text-[#3a5a78]"}`}>{r.profit}</span></td>
                    <td className="text-right hidden md:table-cell"><span className="text-[#3a5a78] text-xs">{r.margin}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-[#5a7898] text-[10px] mt-3">Source: BCG analysis, NBA Africa management, Moelis &amp; Company Fall 2025</p>
          </div>

          {/* Revenue breakdown */}
          <div>
            <div className="panel-light p-6">
              <div className="text-[#8aa0b5] text-[10px] tracking-widest uppercase mb-5">2036E Revenue by Category</div>
              <div className="space-y-5">
                {breakdown.map((r) => (
                  <div key={r.label}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-[#3a5a78] text-sm">{r.label}</span>
                        <span className="text-[10px] text-[#c9a840] border border-[#c9a840]/30 px-1.5 py-0.5 rounded-sm tracking-widest">{r.cagr} CAGR</span>
                      </div>
                      <span className="text-[#0c1e32] text-sm font-medium tabular-nums">{r.value}</span>
                    </div>
                    <div className="h-[3px] bg-black/[0.06] rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#c9a840] to-[#e8c84a] rounded-full" data-bar-pct={r.pct} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

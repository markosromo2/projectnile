export default function PlayerDevelopmentSection() {
  return (
    <section id="pipeline" className="py-32" style={{ background: "#080d14" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="flex items-center gap-3 mb-8">
          <div className="h-[3px] w-10 bg-[#c9a840]" />
          <span className="text-[#c9a840] text-xs tracking-[0.3em] uppercase">NBA Pipeline · Revenue Opportunity</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <h2 className="text-4xl sm:text-5xl text-white font-light leading-tight max-w-2xl" style={{ fontFamily: "var(--font-playfair)" }}>
            The BAL is the NBA's<br />
            <span className="text-[#c9a840]">African farm league.</span><br />
            Cape Town already has the proof.
          </h2>
          <p className="text-white/45 text-sm max-w-sm leading-relaxed lg:text-right tracking-[0.01em]">
            The NBA's stated ambition is to build a development pipeline from Africa into the league. A permanent Cape Town franchise sits at the centre of that pipeline — with two players already on the path.
          </p>
        </div>

        {/* Contract economics callout */}
        <div data-animate className="mb-14 rounded-sm overflow-hidden" style={{ border: "1px solid rgba(201,168,64,0.25)" }}>
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1.5 shrink-0" style={{ background: "linear-gradient(to bottom, #c9a840, #b8942e)" }} />
            <div className="p-8 lg:p-10 flex flex-col lg:flex-row lg:items-center gap-10">
              <div className="lg:flex-1">
                <div className="text-[#c9a840] text-[10px] tracking-widest uppercase mb-3 font-medium">The Contract Model</div>
                <h3 className="text-2xl lg:text-3xl text-white font-light leading-snug mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
                  Sign a player for ~$150K.<br />Sell the contract for millions.
                </h3>
                <p className="text-white/45 text-sm leading-relaxed max-w-lg">
                  A permanent BAL franchise can sign promising African talent to multi-year contracts at development-level fees. As players progress — reaching NBA Summer League, securing two-way contracts, or attracting G-League attention — those contracts become transferable assets worth multiples of the original investment. It is the same model that built European football's transfer economy. The BAL is building it for African basketball.
                </p>
              </div>
              <div className="shrink-0 grid grid-cols-3 gap-6 lg:min-w-[320px]">
                {[
                  { label: "Sign", value: "~$150K", note: "Multi-year BAL contract" },
                  { label: "Develop", value: "2–4 yrs", note: "BAL system + NBA exposure" },
                  { label: "Transfer", value: "$1M–$5M+", note: "Contract sale to NBA / G-League" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-[10px] text-white/30 tracking-widest uppercase mb-2">{s.label}</div>
                    <div className="text-xl font-light tabular-nums text-[#c9a840] mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{s.value}</div>
                    <div className="text-white/35 text-[9px] leading-snug">{s.note}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Proof + ranking */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* Left — Cape Town proof */}
          <div data-animate className="rounded-sm p-8" style={{ background: "rgba(201,168,64,0.05)", border: "1px solid rgba(201,168,64,0.18)" }}>
            <div className="text-[#c9a840] text-[10px] tracking-widest uppercase mb-6">Cape Town Tigers — Already Delivered</div>
            <div className="space-y-4 mb-8">
              {[
                { name: "Evans Ganapamo", path: "Cape Town Tigers → 2022 Milwaukee Bucks Summer League", year: "2022" },
                { name: "Samkelo Cele", path: "Cape Town Tigers → 2024 New York Knicks Summer League", year: "2024" },
              ].map((p) => (
                <div key={p.name} className="flex items-start gap-4 p-4 rounded-sm" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-[10px] font-medium text-[#c9a840]" style={{ background: "rgba(201,168,64,0.1)", border: "1px solid rgba(201,168,64,0.25)" }}>
                    {p.year.slice(2)}
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">{p.name}</div>
                    <div className="text-white/40 text-xs mt-0.5 leading-relaxed">{p.path}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="h-px mb-6" style={{ background: "rgba(201,168,64,0.15)" }} />
            <p className="text-white/35 text-xs leading-relaxed">
              2025 saw a record 3 BAL players at a single NBA Summer League — Las Vegas. The pipeline is accelerating. Cape Town, with two players already placed, is positioned as one of the BAL's premier development markets.
            </p>
            <p className="text-white/20 text-[9px] mt-4">Source: Cape Town Player Development · BAL Cities NBA Summer League Rankings</p>
          </div>

          {/* Right — city ranking */}
          <div data-animate data-delay="2" className="rounded-sm p-8" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="text-white/40 text-[10px] tracking-widest uppercase mb-6">BAL Cities — NBA Summer League Players Produced</div>
            <div className="space-y-4">
              {[
                { city: "Cairo", country: "Egypt", count: 3, pct: 100, note: "Anas Mahmoud, Marawan Sarhan, Mostafa Kejo" },
                { city: "Cape Town", country: "South Africa", count: 2, pct: 67, note: "Evans Ganapamo, Samkelo Cele", highlight: true },
                { city: "Tripoli", country: "Libya", count: 2, pct: 67, note: "Jean Jacques Boissy, Jo-Luol Acuil Jr." },
                { city: "Monastir", country: "Tunisia", count: 1, pct: 33, note: "Babacar Sané" },
                { city: "Dakar", country: "Senegal", count: 1, pct: 33, note: "Aliou Diarra — No. 1 G League Int'l Draft pick" },
              ].map((r) => (
                <div key={r.city}>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-medium ${r.highlight ? "text-[#c9a840]" : "text-white/70"}`}>{r.city}</span>
                      <span className="text-white/30 text-[9px]">{r.country}</span>
                    </div>
                    <span className={`text-sm font-light tabular-nums ${r.highlight ? "text-[#c9a840]" : "text-white/50"}`} style={{ fontFamily: "var(--font-playfair)" }}>{r.count}</span>
                  </div>
                  <div className="h-[2px] rounded-full mb-1" style={{ background: "rgba(255,255,255,0.06)" }}>
                    <div
                      className="h-full rounded-full"
                      data-bar-pct={r.pct}
                      style={{ width: "0%", background: r.highlight ? "linear-gradient(to right, #b8942e, #e8c84a)" : "rgba(255,255,255,0.2)" }}
                    />
                  </div>
                  <div className="text-white/25 text-[9px]">{r.note}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="text-white/25 text-[9px]">Of 24 cities that have ever fielded a BAL team, only 5 have produced NBA Summer League players. Cape Town is one of them.</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

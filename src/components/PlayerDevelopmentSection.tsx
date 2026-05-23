import Image from "next/image";

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

        {/* Training photos row */}
        <div className="grid grid-cols-2 gap-2 mb-14" style={{ height: "260px" }}>
          <div className="relative overflow-hidden rounded-sm">
            <Image
              src="/images/ct-training-balls.jpg"
              alt="Cape Town Tigers training drill"
              fill
              className="object-cover object-center"
              style={{ opacity: 0.8 }}
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,13,20,0.7) 0%, transparent 60%)" }} />
            <div className="absolute bottom-4 left-4">
              <span className="text-white/45 text-[9px] tracking-[0.25em] uppercase">Training · Cape Town</span>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-sm">
            <Image
              src="/images/ct-player-dunk.jpg"
              alt="Cape Town Tigers player dunking"
              fill
              className="object-cover object-center"
              style={{ opacity: 0.8 }}
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,13,20,0.7) 0%, transparent 60%)" }} />
            <div className="absolute bottom-4 left-4">
              <span className="text-white/45 text-[9px] tracking-[0.25em] uppercase">Development · Cape Town Tigers</span>
            </div>
          </div>
        </div>

        {/* Player asset development callout */}
        <div data-animate className="mb-14 rounded-sm overflow-hidden" style={{ border: "1px solid rgba(201,168,64,0.25)" }}>
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1.5 shrink-0" style={{ background: "linear-gradient(to bottom, #c9a840, #b8942e)" }} />
            <div className="p-8 lg:p-10 flex flex-col lg:flex-row lg:items-center gap-10">
              <div className="lg:flex-1">
                <div className="text-[#c9a840] text-[10px] tracking-widest uppercase mb-3 font-medium">Player Asset Development</div>
                <h3 className="text-2xl lg:text-3xl text-white font-light leading-snug mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
                  BAL player contracts<br />as appreciating assets.
                </h3>
                <p className="text-white/45 text-sm leading-relaxed max-w-lg">
                  A permanent BAL franchise holds multi-year development contracts on African talent. Those contracts appreciate in value as players progress through the NBA pipeline — from BAL competition to Summer League invitations, two-way contracts, and G-League roster positions. Cape Town has already placed two players on that path. As the NBA scales its Africa development mandate, the supply of marketable pipeline assets from a proven franchise grows with it. It is the same model that built European football&apos;s transfer economy. The BAL is building it for African basketball.
                </p>
              </div>
              <div className="shrink-0 grid grid-cols-3 gap-6 lg:min-w-[300px]">
                {[
                  { label: "Acquire", value: "Multi-year", note: "BAL development contracts" },
                  { label: "Develop", value: "2–4 seasons", note: "BAL + NBA Africa exposure" },
                  { label: "Monetise", value: "Transferable", note: "NBA / G-League contract demand" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-[10px] text-white/30 tracking-widest uppercase mb-2">{s.label}</div>
                    <div className="text-sm font-medium text-[#c9a840] mb-1 leading-snug">{s.value}</div>
                    <div className="text-white/35 text-[9px] leading-snug">{s.note}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* NBA Pipeline Proof — large cards */}
        <div className="mb-10">
          <div className="text-white/40 text-[10px] tracking-widest uppercase mb-6">Cape Town Tigers — Players Placed in the NBA Pipeline</div>
          <div className="grid lg:grid-cols-2 gap-4 mb-6">
            {[
              {
                name: "Evans Ganapamo",
                path: "Cape Town Tigers → Milwaukee Bucks Summer League",
                year: "2022",
                note: "One of five BAL players ever to reach the NBA's premier pre-season development showcase.",
              },
              {
                name: "Samkelo Cele",
                path: "Cape Town Tigers → New York Knicks Summer League",
                year: "2024",
                note: "Cape Town's second placement — ranking the franchise #2 globally among all BAL cities for NBA pipeline production.",
              },
            ].map((p) => (
              <div key={p.name} data-animate className="p-8 rounded-sm" style={{ background: "rgba(201,168,64,0.05)", border: "1px solid rgba(201,168,64,0.22)" }}>
                <div className="text-[#c9a840] font-light tabular-nums mb-4" style={{ fontFamily: "var(--font-playfair)", fontSize: "3.5rem", lineHeight: 1 }}>{p.year}</div>
                <div className="text-white text-2xl font-light mb-2 leading-snug" style={{ fontFamily: "var(--font-playfair)" }}>{p.name}</div>
                <div className="text-[#c9a840]/70 text-sm mb-5 leading-relaxed">{p.path}</div>
                <div className="h-px mb-5" style={{ background: "rgba(201,168,64,0.15)" }} />
                <p className="text-white/40 text-xs leading-relaxed">{p.note}</p>
              </div>
            ))}
          </div>
          <p className="text-white/25 text-[9px]">2025 saw a record 3 BAL players at a single NBA Summer League — Las Vegas. The pipeline is accelerating. · Source: Cape Town Player Development · BAL Cities NBA Summer League Rankings</p>
        </div>

        {/* City ranking — full width */}
        <div data-animate className="rounded-sm p-8" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
          <div className="text-white/40 text-[10px] tracking-widest uppercase mb-8">BAL Cities — NBA Summer League Players Produced · All 24 cities, only 5 have placed a player</div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { city: "Cairo", country: "Egypt", count: 3, pct: 100, note: "Anas Mahmoud, Marawan Sarhan, Mostafa Kejo" },
              { city: "Cape Town", country: "South Africa", count: 2, pct: 67, note: "Evans Ganapamo, Samkelo Cele", highlight: true },
              { city: "Tripoli", country: "Libya", count: 2, pct: 67, note: "Jean Jacques Boissy, Jo-Luol Acuil Jr." },
              { city: "Monastir", country: "Tunisia", count: 1, pct: 33, note: "Babacar Sané" },
              { city: "Dakar", country: "Senegal", count: 1, pct: 33, note: "Aliou Diarra — No. 1 G League Int'l Draft pick" },
            ].map((r) => (
              <div key={r.city} className={`p-5 rounded-sm ${r.highlight ? "" : ""}`} style={{ background: r.highlight ? "rgba(201,168,64,0.06)" : "rgba(255,255,255,0.02)", border: r.highlight ? "1px solid rgba(201,168,64,0.2)" : "1px solid rgba(255,255,255,0.05)" }}>
                <div className={`text-3xl font-light tabular-nums mb-1 ${r.highlight ? "text-[#c9a840]" : "text-white/50"}`} style={{ fontFamily: "var(--font-playfair)" }}>{r.count}</div>
                <div className={`text-sm font-medium mb-0.5 ${r.highlight ? "text-[#c9a840]" : "text-white/70"}`}>{r.city}</div>
                <div className="text-white/30 text-[9px] mb-3">{r.country}</div>
                <div className="h-[2px] rounded-full mb-3" style={{ background: "rgba(255,255,255,0.06)" }}>
                  <div className="h-full rounded-full" data-bar-pct={r.pct} style={{ width: "0%", background: r.highlight ? "linear-gradient(to right, #b8942e, #e8c84a)" : "rgba(255,255,255,0.2)" }} />
                </div>
                <div className="text-white/25 text-[9px] leading-relaxed">{r.note}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

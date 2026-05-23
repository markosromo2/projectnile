const team = [
  {
    initials: "PB",
    name: "Paul Bragiel",
    title: "Chairman, Capewind Ltd.",
    bio: "Serial entrepreneur and sports investor with experience spanning the NBA/BAL, Olympics, UEFA, football, baseball, and athletics. Co-founded the Cape Town franchise from the BAL's inaugural season and brings global capital networks and institutional investor relationships that accelerate commercial partnerships.",
    focus: "Strategy · Global Network · Investment",
  },
  {
    initials: "KS",
    name: "Kornelia Semmelink",
    title: "Chief Executive Officer",
    bio: "Leads commercial and operational strategy for the Cape Town franchise. Based in Cape Town and operating from the first BAL season, Kornelia has been the driving force behind the franchise's commercial and operational success, bringing deep expertise in professional basketball management across Africa.",
    focus: "Operations · Commercial · Africa Markets",
  },
  {
    initials: "WM",
    name: "William McFarlan",
    title: "General Manager",
    bio: "Oversees day-to-day basketball and business operations. Brings professional basketball management experience from both sides of the Atlantic and a deep understanding of BAL league operations and team management.",
    focus: "Basketball Operations · Management",
  },
  {
    initials: "LK",
    name: "Lari Kangas",
    title: "Co-Founder & Advisor",
    bio: "Co-founder of the Cape Town franchise alongside Paul Bragiel. Five years of direct operational experience building the team across the South African Basketball League and the BAL — player recruitment, league relationships, day-to-day management.",
    focus: "Operations · International Partnerships",
  },
  {
    initials: "DH",
    name: "Dale Huxford",
    title: "Legal Advisor",
    bio: "Provides legal counsel across the ownership group's sports investments. Experienced in sports transactions, corporate structuring, cross-border agreements, and BAL League compliance requirements.",
    focus: "Legal · Transactions · Corporate Structure",
  },
];

export default function TrackRecordSection() {
  return (
    <section id="leadership" className="py-32" style={{
      background: "repeating-linear-gradient(-55deg, transparent 0, transparent 18px, rgba(0,0,0,0.028) 18px, rgba(0,0,0,0.028) 19px), #f5f7fa"
    }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-[3px] w-10 bg-[#c9a840]" />
              <span className="text-[#c9a840] text-xs tracking-[0.3em] uppercase">Ownership &amp; Leadership</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-[#0c1e32]" style={{ fontFamily: "var(--font-playfair)" }}>
              Built from day one.<br />No ramp-up required.
            </h2>
          </div>
          <p className="text-[#3a5a78] text-sm max-w-sm leading-relaxed lg:text-right tracking-[0.01em]">
            Six uninterrupted seasons. Four national titles. Three BAL Finals appearances. The same people, the same city, the same operational infrastructure — transitioning directly into the permanent franchise the moment the bid closes.
          </p>
        </div>

        {/* Paul Bragiel feature */}
        <div data-animate className="mb-16 rounded-sm overflow-hidden" style={{ background: "#080d14" }}>
          <div className="p-8 lg:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-[2px] w-8 bg-[#c9a840]" />
              <span className="text-[#c9a840] text-[10px] tracking-[0.25em] uppercase font-medium">The Operator</span>
            </div>
            <div className="grid lg:grid-cols-2 gap-10 mb-10">
              <div>
                <h3 className="text-3xl lg:text-4xl text-white font-light mb-5 leading-snug" style={{ fontFamily: "var(--font-playfair)" }}>
                  Paul Bragiel.<br />Six continents.<br />
                  <span className="text-[#c9a840]">One operator.</span>
                </h3>
                <p className="text-white/45 text-sm leading-relaxed mb-4">
                  Paul Bragiel is a serial entrepreneur and one of the most active cross-continental sports investors in the world. He founded venture capital funds across six continents — including one of the earliest VC operations on the African continent — before transitioning his focus to professional sports franchises.
                </p>
                <p className="text-white/45 text-sm leading-relaxed">
                  In sports, his track record spans multiple leagues and continents: he co-founded the Cape Town Tigers from the BAL's inaugural season, building them into a 3-time BAL Finalist and 4-time South African national champion. He then co-founded Kriol Stars (Cape Verde), who reached the BAL Finals in their own right. He was an early investor in Dziki Warszawa — Polish basketball Cup champions — and has been involved in the Olympic baseball story connecting sport and international development.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: "6", label: "Continents", sub: "VC funds founded across US, Asia, Europe, Africa and beyond" },
                  { value: "3×", label: "BAL Finalist", sub: "Cape Town Tigers — 3 BAL Finals appearances from Season 1" },
                  { value: "4×", label: "SA Champion", sub: "National titles — most decorated franchise in South African basketball" },
                  { value: "2", label: "BAL Franchises", sub: "Cape Town Tigers + Kriol Stars — both reached the BAL Finals" },
                ].map((s) => (
                  <div key={s.label} className="p-5 rounded-sm" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                    <div className="text-[#c9a840] text-2xl font-light mb-1 tabular-nums" style={{ fontFamily: "var(--font-playfair)" }}>{s.value}</div>
                    <div className="text-white/80 text-xs font-medium mb-1">{s.label}</div>
                    <div className="text-white/30 text-[10px] leading-relaxed">{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-3 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              {[
                { org: "Cape Town Tigers", role: "Co-Founder & Chairman", note: "3× BAL Finalist · 4× SA Champion · BAL Season 1 to present" },
                { org: "Kriol Stars", role: "Co-Founder", note: "Cape Verde · BAL Finalist · Road to BAL qualifier, Season 5" },
                { org: "Dziki Warszawa", role: "Early Investor", note: "Polish Basketball Cup Champions" },
              ].map((r) => (
                <div key={r.org} className="p-4 rounded-sm" style={{ background: "rgba(201,168,64,0.05)", border: "1px solid rgba(201,168,64,0.12)" }}>
                  <div className="text-[#c9a840] text-xs font-medium mb-0.5">{r.org}</div>
                  <div className="text-white/60 text-[10px] mb-2">{r.role}</div>
                  <div className="text-white/28 text-[9px] leading-relaxed">{r.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Track record stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-16">
          {[
            { value: "4", num: 4, suf: "", label: "National Championships", sub: "Most decorated franchise in South African basketball history" },
            { value: "3", num: 3, suf: "", label: "BAL Finals Appearances", sub: "Reaching the continental championship stage from Season 1 through Season 5" },
            { value: "2019", num: null, suf: "", label: "Year Founded", sub: "In the BAL from day one — the only Cape Town franchise in the league's history" },
            { value: "6+", num: 6, suf: "+", label: "Seasons Operating", sub: "Continuous, uninterrupted professional basketball operations with the same ownership group" },
          ].map((s, i) => (
            <div key={s.label} data-animate data-delay={String(i + 1)} className="card-stat rounded-sm px-6 py-6">
              <div
                className="text-3xl font-semibold text-[#c9a840] mb-1 tabular-nums"
                style={{ fontFamily: "var(--font-playfair)" }}
                {...(s.num !== null ? { "data-count": String(s.num), "data-count-prefix": "", "data-count-suffix": s.suf, "data-count-decimals": "0" } : {})}
              >{s.value}</div>
              <div className="text-white text-xs font-medium">{s.label}</div>
              <div className="text-white/40 text-xs mt-0.5 leading-relaxed">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* NBA Pipeline */}
        <div className="mb-16 rounded-sm overflow-hidden" style={{ background: "linear-gradient(135deg, rgba(201,168,64,0.06) 0%, #ffffff 70%)", border: "1px solid rgba(201,168,64,0.22)" }}>
          <div className="p-8 lg:p-10">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
              <div className="lg:max-w-lg">
                <div className="text-[#c9a840] text-[10px] tracking-widest uppercase mb-3 font-medium">NBA Summer League Pipeline</div>
                <h3 className="text-2xl text-[#0c1e32] font-light mb-3 leading-snug" style={{ fontFamily: "var(--font-playfair)" }}>
                  #2 globally among all<br />BAL cities for NBA players.
                </h3>
                <p className="text-[#3a5a78] text-sm leading-relaxed">
                  Of the 24 cities that have ever fielded a BAL team, only five have produced players who reached the NBA Summer League. Cape Town is one of them — ranked #2 globally, behind only Cairo. Two Cape Town Tigers players have made it to the league's most prestigious development showcase.
                </p>
                <p className="text-[#5a7898] text-[10px] mt-4">Source: Cape Town Player Development · BAL Cities NBA Summer League Rankings</p>
              </div>
              <div className="flex flex-col gap-3 lg:min-w-[220px]">
                <div className="text-[#8aa0b5] text-[10px] tracking-widest uppercase mb-1">Cape Town → NBA Summer League</div>
                {[
                  { name: "Evans Ganapamo", team: "Milwaukee Bucks", year: "2022" },
                  { name: "Samkelo Cele", team: "New York Knicks", year: "2024" },
                ].map((p) => (
                  <div key={p.name} className="px-5 py-4 rounded-sm" style={{ background: "rgba(12,30,50,0.04)", border: "1px solid rgba(201,168,64,0.18)" }}>
                    <div className="text-[#0c1e32] text-sm font-medium">{p.name}</div>
                    <div className="text-[#c9a840] text-xs mt-0.5">{p.year} · {p.team}</div>
                  </div>
                ))}
                <div className="text-center mt-1">
                  <span className="text-[10px] text-[#8aa0b5] tracking-wide">9+ total BAL players in NBA Summer League history</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-12">
          {team.map((m, i) => (
            <div key={m.name} data-animate data-delay={String(i + 1)} className="card-light rounded-sm p-7 flex flex-col">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-11 h-11 rounded-full border border-[#c9a840]/35 flex items-center justify-center text-[#c9a840] text-sm font-medium shrink-0" style={{ background: "rgba(201,168,64,0.07)" }}>
                  {m.initials}
                </div>
                <div>
                  <div className="text-[#0c1e32] font-medium text-sm leading-tight">{m.name}</div>
                  <div className="text-[#c9a840] text-xs mt-0.5">{m.title}</div>
                </div>
              </div>
              <p className="text-[#3a5a78] text-sm leading-relaxed mb-4 flex-1 tracking-[0.01em]">{m.bio}</p>
              <div className="border-t border-black/[0.06] pt-4">
                <div className="text-[#8aa0b5] text-[10px] tracking-widest uppercase mb-1.5">Focus</div>
                <div className="text-[#5a7898] text-xs">{m.focus}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Ownership structure */}
        <div className="callout-light">
          <div className="flex items-start gap-6">
            <div className="w-px self-stretch bg-[#c9a840]/40 shrink-0" />
            <div>
              <div className="text-[#c9a840] text-xs tracking-widest uppercase mb-3">Ownership Structure</div>
              <div className="grid sm:grid-cols-3 gap-8">
                {[
                  { label: "Holding Company", value: "Capewind Ltd.", sub: "3500 S Dupont Hwy, Dover, Delaware 19901" },
                  { label: "BAL Minimum Stake", value: "30% Equity", sub: "Controlling owner requirement per BAL rules" },
                  { label: "BAL Vetting", value: "BAL Approval", sub: "Background, financial & character review" },
                ].map((r) => (
                  <div key={r.label}>
                    <div className="text-[#8aa0b5] text-[10px] tracking-widest uppercase mb-1">{r.label}</div>
                    <div className="text-[#0c1e32] font-medium text-sm">{r.value}</div>
                    <div className="text-[#5a7898] text-xs mt-0.5 tracking-[0.01em]">{r.sub}</div>
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

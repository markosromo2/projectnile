import Image from "next/image";

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
    <section id="leadership" className="overflow-hidden">

      {/* ── Dark opener ── */}
      <div style={{ background: "#080d14" }} className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-12">
            <div className="h-[3px] w-10 bg-[#c9a840]" />
            <span className="text-[#c9a840] text-xs tracking-[0.3em] uppercase">Ownership &amp; Leadership</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl text-white font-light leading-[0.88]" style={{ fontFamily: "var(--font-playfair)" }}>
              Built from<br />day one.<br />
              <span className="text-[#c9a840]">No ramp-up.</span>
            </h2>
            <p className="text-white/48 text-base leading-relaxed tracking-[0.01em]">
              Six uninterrupted seasons. Four national titles. Three BAL Finals appearances. The same people, the same city, the same operational infrastructure — transitioning directly into the permanent franchise the moment the bid closes.
            </p>
          </div>
        </div>
      </div>

      {/* ── Paul · Team · Achievements — one unified section ── */}
      <div style={{ background: "#0d1520" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">

          {/* 3-col: portrait | paul info | team */}
          <div className="grid lg:grid-cols-[200px_1fr_360px] gap-8">

            {/* Portrait — stretches to row height */}
            <div data-animate className="relative rounded-sm overflow-hidden self-stretch min-h-[420px]">
              <Image
                src="/images/ct-paul-headshot.png"
                alt="Paul Bragiel — Chairman, Capewind Ltd."
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 60%, #0d1520 100%)" }} />
              <div className="absolute inset-x-0 bottom-0 px-4 pb-4">
                <div className="text-[#c9a840]/55 text-[9px] tracking-[0.3em] uppercase">Chairman · Capewind Ltd.</div>
              </div>
            </div>

            {/* Paul info */}
            <div data-animate>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-[2px] w-8 bg-[#c9a840]" />
                <span className="text-[#c9a840] text-[10px] tracking-[0.25em] uppercase font-medium">The Operator</span>
              </div>
              <h3 className="text-3xl lg:text-4xl text-white font-light mb-5 leading-[0.92]" style={{ fontFamily: "var(--font-playfair)" }}>
                Paul Bragiel.<br />Six continents.<br />
                <span className="text-[#c9a840]">One operator.</span>
              </h3>
              <p className="text-white/45 text-sm leading-relaxed mb-3">
                Paul Bragiel is a serial entrepreneur and one of the most active cross-continental sports investors in the world. He founded venture capital funds across six continents — including one of the earliest VC operations on the African continent — before transitioning his focus to professional sports franchises.
              </p>
              <p className="text-white/45 text-sm leading-relaxed mb-7">
                In sports, his track record spans multiple leagues and continents: he co-founded the Cape Town Tigers from the BAL&apos;s inaugural season, building them into a 3-time BAL Finalist and 4-time South African national champion. He then co-founded Kriol Stars (Cape Verde), who reached the BAL Finals in their own right. He was an early investor in Dziki Warszawa — Polish basketball Cup champions — and has been involved in the Olympic baseball story connecting sport and international development.
              </p>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { org: "Cape Town Tigers", role: "Co-Founder & Chairman", note: "3× BAL Finalist · 4× SA Champion · Season 1 to present" },
                  { org: "Kriol Stars", role: "Co-Founder", note: "Cape Verde · BAL Finalist · Road to BAL qualifier, Season 5" },
                  { org: "Dziki Warszawa", role: "Early Investor", note: "Polish Basketball Cup Champions" },
                ].map((r) => (
                  <div key={r.org} className="p-3 rounded-sm" style={{ background: "rgba(201,168,64,0.05)", border: "1px solid rgba(201,168,64,0.12)" }}>
                    <div className="text-[#c9a840] text-xs font-medium mb-0.5">{r.org}</div>
                    <div className="text-white/60 text-[10px] mb-1.5">{r.role}</div>
                    <div className="text-white/28 text-[9px] leading-relaxed">{r.note}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Team */}
            <div data-animate data-delay="2">
              <div className="text-white/35 text-[10px] tracking-widest uppercase mb-5">Leadership Team</div>
              <div className="space-y-2.5">
                {team.filter((m) => m.name !== "Paul Bragiel").map((m) => (
                  <div key={m.name} className="rounded-sm p-4" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className="w-8 h-8 rounded-full border border-[#c9a840]/30 flex items-center justify-center text-[#c9a840] text-xs font-medium shrink-0" style={{ background: "rgba(201,168,64,0.07)" }}>
                        {m.initials}
                      </div>
                      <div>
                        <div className="text-white text-sm font-medium leading-tight">{m.name}</div>
                        <div className="text-[#c9a840] text-[10px] mt-0.5">{m.title}</div>
                      </div>
                    </div>
                    <p className="text-white/35 text-xs leading-relaxed mb-2">{m.bio}</p>
                    <div className="text-white/20 text-[9px] tracking-widest uppercase">{m.focus}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Track record — same page, below the 3-col */}
          <div className="mt-10 pt-10" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="text-white/28 text-[10px] tracking-widest uppercase mb-5">Track Record — Franchise &amp; Founder</div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-3">
              {[
                { value: "4×", num: 4, suf: "×", label: "SA National Champion", sub: "Most decorated franchise in South African basketball history" },
                { value: "3×", num: 3, suf: "×", label: "BAL Finals Appearances", sub: "Continental championship stage — Season 1 through Season 5" },
                { value: "6+", num: 6, suf: "+", label: "Seasons Operating", sub: "Uninterrupted, same ownership group, same city" },
                { value: "2019", num: null, suf: "", label: "Year Founded", sub: "In the BAL from day one — only Cape Town franchise in league history" },
              ].map((s, i) => (
                <div key={s.label} data-animate data-delay={String(i + 1)} className="card-stat rounded-sm px-5 py-5">
                  <div className="text-3xl font-semibold text-[#c9a840] mb-1 tabular-nums" style={{ fontFamily: "var(--font-playfair)" }}
                    {...(s.num !== null ? { "data-count": String(s.num), "data-count-prefix": "", "data-count-suffix": s.suf, "data-count-decimals": "0" } : {})}
                  >{s.value}</div>
                  <div className="text-white text-xs font-medium">{s.label}</div>
                  <div className="text-white/40 text-[10px] mt-0.5 leading-relaxed">{s.sub}</div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { value: "6", label: "Continents", sub: "VC funds founded — US, Asia, Europe, Africa and beyond" },
                { value: "2", label: "BAL Franchises", sub: "Cape Town Tigers + Kriol Stars — both reached the BAL Finals" },
                { value: "#2", label: "NBA Pipeline City", sub: "Cape Town ranked #2 globally for NBA Summer League players" },
                { value: "3", label: "Sports Leagues", sub: "NBA/BAL, European basketball, Olympic baseball" },
              ].map((s, i) => (
                <div key={s.label} data-animate data-delay={String(i + 1)} className="card-stat rounded-sm px-5 py-5">
                  <div className="text-3xl font-semibold text-[#c9a840] mb-1 tabular-nums" style={{ fontFamily: "var(--font-playfair)" }}>{s.value}</div>
                  <div className="text-white text-xs font-medium">{s.label}</div>
                  <div className="text-white/40 text-[10px] mt-0.5 leading-relaxed">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── Ownership structure — light ── */}
      <div style={{
        background: "repeating-linear-gradient(-55deg, transparent 0, transparent 18px, rgba(0,0,0,0.028) 18px, rgba(0,0,0,0.028) 19px), #f5f7fa"
      }} className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
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
      </div>

    </section>
  );
}

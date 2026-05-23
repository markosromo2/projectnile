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
    <section id="leadership" className="overflow-hidden min-h-screen flex flex-col" style={{ background: "#080d14" }}>
      <div className="flex-1 max-w-7xl mx-auto w-full px-6 lg:px-10 py-12 lg:py-16 flex flex-col">

        {/* Section label row */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <div className="h-[3px] w-10 bg-[#c9a840]" />
            <span className="text-[#c9a840] text-xs tracking-[0.3em] uppercase">Ownership &amp; Leadership</span>
          </div>
          <span className="text-white/25 text-xs tracking-widest uppercase hidden sm:block">Built from day one · No ramp-up</span>
        </div>

        {/* 3-col: portrait | paul info | team 2×2 */}
        <div className="grid lg:grid-cols-[180px_1fr_1fr] gap-6 mb-8 flex-1">

          {/* Portrait — full height */}
          <div data-animate className="relative rounded-sm overflow-hidden self-stretch min-h-[320px]">
            <Image
              src="/images/ct-paul-headshot.png"
              alt="Paul Bragiel — Chairman, Capewind Ltd."
              fill
              className="object-cover object-top"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 55%, #080d14 100%)" }} />
            <div className="absolute inset-x-0 bottom-0 px-4 pb-3">
              <div className="text-[#c9a840]/55 text-[9px] tracking-[0.3em] uppercase">Chairman · Capewind Ltd.</div>
            </div>
          </div>

          {/* Paul info */}
          <div data-animate className="flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-6 bg-[#c9a840]" />
              <span className="text-[#c9a840] text-[10px] tracking-[0.25em] uppercase font-medium">The Operator</span>
            </div>
            <h3 className="text-2xl lg:text-3xl text-white font-light mb-4 leading-[0.92]" style={{ fontFamily: "var(--font-playfair)" }}>
              Paul Bragiel.<br />Six continents.<br />
              <span className="text-[#c9a840]">One operator.</span>
            </h3>
            <p className="text-white/42 text-xs leading-relaxed mb-3 flex-1">
              Serial entrepreneur and one of the most active cross-continental sports investors in the world. Founded venture capital funds across six continents — including one of the earliest VC operations on the African continent — before transitioning to professional sports franchises. Co-founded Cape Town Tigers from the BAL&apos;s inaugural season (3× Finalist, 4× SA Champion), Kriol Stars (BAL Finalist), invested in Dziki Warszawa (Polish Cup Champions), and the Olympic baseball story connecting sport and international development.
            </p>
            <div className="grid grid-cols-3 gap-2 mt-auto">
              {[
                { org: "Cape Town Tigers", role: "Co-Founder & Chairman", note: "3× BAL Finalist · 4× SA Champion" },
                { org: "Kriol Stars", role: "Co-Founder", note: "Cape Verde · BAL Finalist" },
                { org: "Dziki Warszawa", role: "Early Investor", note: "Polish Cup Champions" },
              ].map((r) => (
                <div key={r.org} className="p-3 rounded-sm" style={{ background: "rgba(201,168,64,0.05)", border: "1px solid rgba(201,168,64,0.12)" }}>
                  <div className="text-[#c9a840] text-[10px] font-medium mb-0.5 leading-tight">{r.org}</div>
                  <div className="text-white/55 text-[9px] mb-1">{r.role}</div>
                  <div className="text-white/25 text-[9px] leading-tight">{r.note}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Team — 2×2 compact grid */}
          <div data-animate data-delay="2">
            <div className="text-white/30 text-[10px] tracking-widest uppercase mb-4">Leadership Team</div>
            <div className="grid grid-cols-2 gap-2">
              {team.filter((m) => m.name !== "Paul Bragiel").map((m) => (
                <div key={m.name} className="rounded-sm p-3" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-full border border-[#c9a840]/30 flex items-center justify-center text-[#c9a840] text-[9px] font-medium shrink-0" style={{ background: "rgba(201,168,64,0.07)" }}>
                      {m.initials}
                    </div>
                    <div>
                      <div className="text-white text-xs font-medium leading-tight">{m.name}</div>
                      <div className="text-[#c9a840] text-[9px] mt-0.5 leading-tight">{m.title}</div>
                    </div>
                  </div>
                  <div className="text-white/30 text-[9px] tracking-widest uppercase">{m.focus}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Track record — same screen */}
        <div className="pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <div className="text-white/25 text-[9px] tracking-widest uppercase mb-4">Track Record — Franchise &amp; Founder</div>
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
            {[
              { value: "4×", num: 4, suf: "×", label: "SA Champion" },
              { value: "3×", num: 3, suf: "×", label: "BAL Finals" },
              { value: "6+", num: 6, suf: "+", label: "Seasons" },
              { value: "2019", num: null, suf: "", label: "Founded" },
              { value: "6", num: null, suf: "", label: "Continents" },
              { value: "2", num: null, suf: "", label: "BAL Franchises" },
              { value: "#2", num: null, suf: "", label: "NBA Pipeline" },
              { value: "3", num: null, suf: "", label: "Sports Leagues" },
            ].map((s, i) => (
              <div key={s.label} data-animate data-delay={String(i + 1)} className="card-stat rounded-sm px-3 py-4 text-center">
                <div className="text-xl font-semibold text-[#c9a840] mb-0.5 tabular-nums" style={{ fontFamily: "var(--font-playfair)" }}
                  {...(s.num !== null ? { "data-count": String(s.num), "data-count-prefix": "", "data-count-suffix": s.suf, "data-count-decimals": "0" } : {})}
                >{s.value}</div>
                <div className="text-white/50 text-[9px] leading-tight">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}

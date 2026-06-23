import Image from "next/image";

// Equal principals — featured with full bios
const principals = [
  {
    initials: "PB",
    name: "Paul Bragiel",
    title: "Chairman, Capewind Ltd.",
    photo: "/images/ct-paul-headshot.png",
    objectPosition: "center top",
    bio: "Serial entrepreneur and one of the most active cross-continent investors in the world. Founded venture capital funds across six continents — including one of the earliest VC operations on the African continent — before transitioning to professional sports franchises. A coach at three Olympic Games, he co-founded Cape Town Tigers (3× BAL Finalist, 4× SA Champion), Kriol Stars (BAL Finalist), invested in Dziki Warszawa (Polish Cup Champions), and serves as General Manager of the Polish National Baseball Team.",
    focus: "Strategy · Global Network · Investment",
  },
  {
    initials: "LK",
    name: "Lari Kangas",
    title: "Co-Founder & CEO",
    photo: "/images/ct-lari-headshot.jpg",
    objectPosition: "center top",
    bio: "Co-founder of the Cape Town franchise alongside Paul Bragiel. Five years of direct operational experience building the team across the South African Basketball League and the BAL — player recruitment, league relationships, day-to-day management. The on-the-ground architect of the franchise from its inaugural BAL season.",
    focus: "Operations · International Partnerships",
  },
];

// Supporting leadership
const supporting = [
  {
    initials: "WM",
    name: "William McFarlan",
    title: "General Manager",
    bio: "Oversees day-to-day basketball and business operations. Brings professional basketball management experience from both sides of the Atlantic and a deep understanding of BAL league operations and team management.",
    focus: "Basketball Operations · Management",
  },
  {
    initials: "DH",
    name: "Dale Huxford",
    title: "Legal Advisor",
    bio: "Provides legal counsel across the ownership group's sports investments. Experienced in sports transactions, corporate structuring, cross-border agreements, and BAL League compliance requirements.",
    focus: "Legal · Transactions · Corporate Structure",
  },
];

const franchises = [
  { region: "Africa", org: "Cape Town Tigers", note: "3× BAL Finalist · 4× SA Champion", logo: "/images/ct-tigers-logo.png" },
  { region: "Africa", org: "Kriol Stars", note: "Cape Verde · BAL Finalist", logo: "/images/logo-kriol-stars.jpeg" },
  { region: "Europe", org: "Dziki Warszawa", note: "Polish Cup Champions", logo: "/images/logo-dziki-warszawa.jpeg" },
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
          <span className="text-white/48 text-xs tracking-widest uppercase hidden sm:block">Built from day one · No ramp-up</span>
        </div>

        {/* Equal principals — photo + full bio */}
        <div className="grid md:grid-cols-2 gap-6 mb-10 max-w-4xl mx-auto">
          {principals.map((p, i) => (
            <div key={p.name} data-animate data-delay={String(i + 1)} className="flex flex-col rounded-sm overflow-hidden" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
              {/* Portrait — equal frame for all three */}
              <div className="relative w-full aspect-[4/5] overflow-hidden" style={{ background: "linear-gradient(135deg, #0f1722 0%, #141d2b 100%)" }}>
                {p.photo ? (
                  <Image
                    src={p.photo}
                    alt={`${p.name} — ${p.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    style={{ objectPosition: p.objectPosition }}
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                    <div className="w-20 h-20 rounded-full border border-[#c9a840]/30 flex items-center justify-center text-[#c9a840] text-2xl font-light" style={{ background: "rgba(201,168,64,0.07)", fontFamily: "var(--font-playfair)" }}>
                      {p.initials}
                    </div>
                    <span className="text-white/35 text-[9px] tracking-[0.3em] uppercase">Portrait to come</span>
                  </div>
                )}
                <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent 60%, rgba(8,13,20,0.92) 100%)" }} />
              </div>

              {/* Text */}
              <div className="flex flex-col flex-1 p-5">
                <h3 className="text-xl text-white font-light leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>{p.name}</h3>
                <div className="text-[#c9a840] text-[11px] tracking-wide mt-1 mb-3">{p.title}</div>
                <p className="text-white/55 text-xs leading-relaxed flex-1">{p.bio}</p>
                <div className="text-white/42 text-[10px] tracking-widest uppercase mt-4 pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>{p.focus}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Two-col: founder investment track record | supporting leadership */}
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 mb-8">

          {/* Paul's franchise / investment track record */}
          <div data-animate>
            <div className="text-white/52 text-[10px] tracking-widest uppercase mb-4">Founder Track Record — Franchises &amp; Investments</div>
            <div className="grid grid-cols-3 gap-2">
              {franchises.map((r) => (
                <div key={r.org} className="rounded-sm overflow-hidden" style={{ border: "1px solid rgba(201,168,64,0.15)" }}>
                  <div className="bg-white flex items-center justify-center" style={{ height: "72px", padding: "10px 14px" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={r.logo} alt={r.org} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", display: "block" }} />
                  </div>
                  <div className="px-3 py-2" style={{ background: "rgba(201,168,64,0.05)" }}>
                    <div className="text-[#c9a840]/55 text-[9px] tracking-[0.2em] uppercase mb-0.5">{r.region}</div>
                    <div className="text-[#c9a840] text-[10px] font-medium leading-tight">{r.org}</div>
                    <div className="text-white/58 text-[10px] mt-0.5 leading-tight">{r.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Supporting leadership */}
          <div data-animate data-delay="2">
            <div className="text-white/52 text-[10px] tracking-widest uppercase mb-4">Supporting Leadership</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {supporting.map((m) => (
                <div key={m.name} className="rounded-sm p-4 flex flex-col" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-9 h-9 rounded-full border border-[#c9a840]/30 flex items-center justify-center text-[#c9a840] text-xs font-medium shrink-0" style={{ background: "rgba(201,168,64,0.07)" }}>
                      {m.initials}
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium leading-tight">{m.name}</div>
                      <div className="text-[#c9a840] text-[10px] mt-0.5 leading-tight">{m.title}</div>
                    </div>
                  </div>
                  <p className="text-white/55 text-[10px] leading-relaxed flex-1">{m.bio}</p>
                  <div className="text-white/42 text-[10px] tracking-widest uppercase mt-2 pt-2" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>{m.focus}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Track record — same screen */}
        <div className="pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <div className="text-white/48 text-[10px] tracking-widest uppercase mb-4">Track Record — Franchise &amp; Founder</div>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {[
              { value: "4×", num: 4, suf: "×", label: "SA Champion" },
              { value: "3×", num: 3, suf: "×", label: "BAL Finals" },
              { value: "2019", num: null, suf: "", label: "Founded" },
              { value: "6", num: null, suf: "", label: "Continents" },
              { value: "2", num: null, suf: "", label: "BAL Franchises" },
              { value: "#2", num: null, suf: "", label: "NBA Pipeline" },
            ].map((s, i) => (
              <div key={s.label} data-animate data-delay={String(i + 1)} className="card-stat rounded-sm px-3 py-5 text-center">
                <div className="text-2xl font-semibold text-[#c9a840] mb-1 tabular-nums" style={{ fontFamily: "var(--font-playfair)" }}
                  {...(s.num !== null ? { "data-count": String(s.num), "data-count-prefix": "", "data-count-suffix": s.suf, "data-count-decimals": "0" } : {})}
                >{s.value}</div>
                <div className="text-white/66 text-[10px] leading-tight">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}

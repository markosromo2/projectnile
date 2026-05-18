import Image from "next/image";

const team = [
  {
    initials: "PB",
    name: "Paul Bragiel",
    title: "Chairman, Capewind Ltd.",
    bio: "Serial entrepreneur and sports investor with experience spanning the NBA/BAL, Olympics, UEFA, football, baseball, and athletics. Co-founded Cape Town Tigers from the BAL's inaugural season and brings global capital networks and institutional investor relationships that accelerate commercial partnerships.",
    focus: "Strategy · Global Network · Investment",
  },
  {
    initials: "KS",
    name: "Kornelia Semmelink",
    title: "Chief Executive Officer",
    bio: "Leads commercial and operational strategy across both BAL franchises. Based in Cape Town, Kornelia has been the driving operational force behind Cape Town Tigers' success and brings deep expertise in professional basketball management in Africa.",
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
    bio: "Co-founder of Cape Town Tigers alongside Paul Bragiel. Five years of direct operational experience building the franchise across the South African Basketball League and the BAL — player recruitment, league relationships, day-to-day management.",
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
    <section id="leadership" className="py-28 bg-[#091525] border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-[#c9a840]" />
              <span className="text-[#c9a840] text-xs tracking-[0.3em] uppercase">Ownership &amp; Leadership</span>
            </div>
            <h2 className="text-4xl sm:text-5xl text-white font-light leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
              The ownership group
            </h2>
          </div>
          <p className="text-white/45 text-sm max-w-sm leading-relaxed lg:text-right">
            Six years operating in the BAL. Four national titles. Three Finals appearances. The same ownership group transitions into the permanent franchise — no rebuild, no ramp-up.
          </p>
        </div>

        {/* Track record bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/[0.05] rounded-sm overflow-hidden mb-16">
          {[
            { value: "4", label: "National Championships", sub: "South African Basketball League" },
            { value: "3", label: "BAL Finals Appearances", sub: "Since inaugural 2021 season" },
            { value: "2019", label: "Founded", sub: "BAL's first Cape Town franchise" },
            { value: "6+", label: "Years of Operation", sub: "Continuous BAL presence" },
          ].map((s, i) => (
            <div key={s.label} data-animate data-delay={String(i + 1)} className="bg-[#091525] hover:bg-[#0d1e33] transition-colors px-6 py-6">
              <div className="text-3xl font-light text-[#c9a840] mb-1 tabular-nums" style={{ fontFamily: "var(--font-playfair)" }}>{s.value}</div>
              <div className="text-white/70 text-xs font-medium">{s.label}</div>
              <div className="text-white/30 text-[10px] mt-0.5">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Court photo — full width */}
        <div className="relative overflow-hidden rounded-sm mb-16">
          <Image src="/images/ct-basketball-court.png" alt="NBA court in Cape Town township" width={1400} height={700} className="w-full h-auto object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#091525]/80 to-transparent px-6 py-5">
            <div className="text-white/70 text-xs tracking-widest uppercase">NBA · Cape Town Community Court</div>
          </div>
        </div>

        {/* Team cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.05] rounded-sm overflow-hidden mb-12">
          {team.map((m) => (
            <div key={m.name} className="bg-[#091525] hover:bg-[#0d1e33] transition-colors p-7 flex flex-col">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-11 h-11 rounded-full border border-[#c9a840]/30 flex items-center justify-center text-[#c9a840] text-sm font-medium shrink-0 bg-[#c9a840]/8">
                  {m.initials}
                </div>
                <div>
                  <div className="text-white font-medium text-sm">{m.name}</div>
                  <div className="text-[#c9a840] text-xs mt-0.5">{m.title}</div>
                </div>
              </div>
              <p className="text-white/50 text-xs leading-relaxed mb-4 flex-1">{m.bio}</p>
              <div className="border-t border-white/[0.06] pt-4">
                <div className="text-white/25 text-[9px] tracking-widest uppercase mb-2">Focus</div>
                <div className="text-white/45 text-xs">{m.focus}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Ownership structure */}
        <div className="callout mb-16">
          <div className="flex items-start gap-6">
            <div className="w-px self-stretch bg-[#c9a840]/40 shrink-0" />
            <div>
              <div className="text-[#c9a840] text-xs tracking-widest uppercase mb-3">Ownership Structure</div>
              <div className="grid sm:grid-cols-3 gap-8">
                {[
                  { label: "Holding Company", value: "Capewind Ltd.", sub: "3500 S Dupont Hwy, Dover, Delaware 19901" },
                  { label: "BAL Minimum Stake", value: "30% Equity", sub: "Controlling owner requirement per BAL rules" },
                  { label: "Investor Vetting", value: "BAL Approval", sub: "Background, financial & character review" },
                ].map((r) => (
                  <div key={r.label}>
                    <div className="text-white/30 text-[9px] tracking-widest uppercase mb-1">{r.label}</div>
                    <div className="text-white font-medium text-sm">{r.value}</div>
                    <div className="text-white/35 text-xs mt-0.5">{r.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Team photo — full width */}
        <div className="relative overflow-hidden rounded-sm">
          <Image src="/images/ct-tigers-team.png" alt="Cape Town Tigers BAL team photo" width={1400} height={700} className="w-full h-auto object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#091525]/80 to-transparent px-6 py-5">
            <div className="text-white/70 text-xs tracking-widest uppercase">Cape Town Tigers · BAL Season</div>
          </div>
        </div>

      </div>
    </section>
  );
}

const terms = [
  {
    label: "Minimum Ownership Stake",
    value: "Per BAL Rules",
    detail: "Controlling Owner required to hold a minimum 30% equity interest. Co-owner stakes available below 30%.",
  },
  {
    label: "Holding Entity",
    value: "Capewind Ltd.",
    detail: "Delaware-incorporated. 3500 S Dupont Hwy, Dover, Delaware 19901. All co-owners hold equity through Capewind.",
  },
  {
    label: "Revenue Floor",
    value: "$2M / Year",
    detail: "Guaranteed annual distribution from BAL league revenues from 2028 — the start of the Home/Away model.",
  },
  {
    label: "Local Revenue Retention",
    value: "100% Retained",
    detail: "Sponsorship, ticketing, merchandise, and local media rights kept in full by the franchise. No league sharing on local income.",
  },
  {
    label: "Year 10 Revenue Target",
    value: "$17.4M",
    detail: "Modelled jointly by BCG and NBA Africa management. $5.4M operating profit at a 31% margin.",
  },
  {
    label: "Vetting Requirement",
    value: "BAL Approval",
    detail: "All co-owners subject to BAL background, financial, and character review before closing.",
  },
];

const milestones = [
  { n: "01", label: "NDA & Process Letter",    sub: "Entry point — you are here"           },
  { n: "02", label: "Data Room Access",         sub: "Full BCG P&L + legal docs"            },
  { n: "03", label: "Management Meetings",      sub: "Cape Town site visit available"       },
  { n: "04", label: "Non-Binding Proposal",     sub: "Fee, structure, cap table"            },
  { n: "05", label: "Transaction Close",        sub: "BAL vetting + binding docs"           },
];

export default function InvestmentStructureSection() {
  return (
    <section className="py-32 border-t border-black/[0.06]" style={{
      background: "repeating-linear-gradient(-55deg, transparent 0, transparent 18px, rgba(0,0,0,0.028) 18px, rgba(0,0,0,0.028) 19px), #f5f7fa"
    }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="flex items-center gap-3 mb-8">
          <div className="h-[3px] w-10 bg-[#c9a840]" />
          <span className="text-[#c9a840] text-xs tracking-[0.3em] uppercase">Investment Structure</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-[#0c1e32]" style={{ fontFamily: "var(--font-playfair)" }}>
            Deal terms,<br />plainly stated.
          </h2>
          <p className="text-[#3a5a78] text-sm max-w-sm leading-relaxed lg:text-right tracking-[0.01em]">
            A permanent franchise structured for long-term value creation. NBA-modelled revenue architecture, a hard revenue floor from Year 2, and full retention of every local dollar generated.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_380px] gap-8 items-start">

          {/* Terms grid */}
          <div className="panel-light">
            {terms.map((t, i) => (
              <div key={t.label} className={`grid sm:grid-cols-[1fr_auto] gap-4 items-start px-7 py-5 ${i < terms.length - 1 ? "border-b border-black/[0.05]" : ""} hover:bg-black/[0.015] transition-colors`}>
                <div>
                  <div className="text-[#8aa0b5] text-[10px] tracking-widest uppercase mb-1">{t.label}</div>
                  <div className="text-[#3a5a78] text-sm leading-relaxed">{t.detail}</div>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-[#0c1e32] text-sm font-semibold whitespace-nowrap" style={{ fontFamily: "var(--font-playfair)" }}>{t.value}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Process timeline */}
          <div>
            <div className="text-[#8aa0b5] text-xs tracking-widest uppercase mb-6">Closing Process</div>
            <div className="space-y-0">
              {milestones.map((m, i) => (
                <div key={m.n} className="flex gap-5">
                  {/* Line + dot */}
                  <div className="flex flex-col items-center">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 text-[9px] font-semibold ${
                      i === 0
                        ? "bg-[#c9a840] border-[#c9a840] text-[#060e1c] shadow-[0_0_10px_rgba(201,168,64,0.4)]"
                        : "bg-white border-black/15 text-[#8aa0b5]"
                    }`}>
                      {i === 0 ? "✓" : m.n}
                    </div>
                    {i < milestones.length - 1 && (
                      <div className={`w-px flex-1 my-1 ${i === 0 ? "bg-[#c9a840]/30" : "bg-black/[0.07]"}`} style={{ minHeight: "28px" }} />
                    )}
                  </div>
                  {/* Content */}
                  <div className="pb-6">
                    <div className={`text-sm font-medium leading-snug ${i === 0 ? "text-[#0c1e32]" : "text-[#3a5a78]"}`}>{m.label}</div>
                    <div className="text-[#8aa0b5] text-xs mt-0.5">{m.sub}</div>
                    {i === 0 && (
                      <span className="inline-block mt-2 text-[9px] text-[#c9a840] border border-[#c9a840]/35 px-2 py-0.5 rounded-sm tracking-widest uppercase">You Are Here</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

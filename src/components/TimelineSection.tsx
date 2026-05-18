const phases = [
  { n: "01", title: "Process Letter & NDA", desc: "Receipt of Moelis process letter, NDA execution, and preliminary overview of the permanent team opportunity.", active: true, date: null },
  { n: "02", title: "Data Room Access", desc: "Full access to BAL Virtual Data Room — financial models, league KPIs, venue documentation, sponsorship benchmarks.", active: false, date: null },
  { n: "03", title: "Management Meetings", desc: "In-person meetings with the Bragiel ownership group and Moelis team. Grand Arena site visit available on request.", active: false, date: null },
  { n: "04", title: "Proposal Submission", desc: "Non-binding proposal due by the deadline. Evaluated by the Company in its sole discretion.", active: false, date: "June 24, 2026 · 12:00 PM EST" },
  { n: "05", title: "Transaction Close", desc: "Finalisation of terms, BAL investor vetting, regulatory approval, and formal onboarding of investment partners.", active: false, date: null },
];

export default function TimelineSection() {
  return (
    <section id="process" className="py-28 bg-[#060e1c] border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-[#c9a840]" />
              <span className="text-[#c9a840] text-xs tracking-[0.3em] uppercase">Investment Process</span>
            </div>
            <h2 className="text-4xl sm:text-5xl text-white font-light leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
              Path to close
            </h2>
          </div>
          <div className="callout self-start lg:self-auto">
            <div className="text-[#c9a840] text-[9px] tracking-widest uppercase mb-1">Proposal Deadline</div>
            <div className="text-white text-base font-medium">June 24, 2026 · 12:00 PM EST</div>
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-px bg-white/[0.05] rounded-sm overflow-hidden mb-12">
          {phases.map((p, i) => (
            <div key={p.n} data-animate data-delay={String(i + 1)} className={`flex flex-col p-7 ${p.active ? "bg-[#c9a840]/[0.06] border-t-2 border-t-[#c9a840]" : "bg-[#060e1c] border-t-2 border-t-white/[0.05] hover:bg-[#091525]"} transition-colors`}>
              <div className="flex items-center justify-between mb-5">
                <span className="text-white/20 text-[9px] tracking-widest uppercase">{p.n}</span>
                {p.active && (
                  <span className="text-[9px] text-[#c9a840] border border-[#c9a840]/30 px-2 py-0.5 rounded-sm tracking-widest uppercase">Active</span>
                )}
              </div>
              <h3 className={`text-sm font-medium mb-3 leading-snug ${p.active ? "text-white" : "text-white/55"}`} style={{ fontFamily: "var(--font-playfair)" }}>
                {p.title}
              </h3>
              <p className="text-white/30 text-xs leading-relaxed flex-1">{p.desc}</p>
              {p.date && <div className="mt-4 text-[#c9a840] text-[10px] font-medium">{p.date}</div>}
            </div>
          ))}
        </div>

        <p className="text-white/20 text-xs leading-relaxed max-w-3xl">
          The Company reserves the right to evaluate the terms and conditions of any proposal, reject any proposal without specifying reasons, and alter or terminate this process at any time. The Company may negotiate with one or more potential purchasers and enter into definitive agreements without notice or obligation to other potential purchasers.
        </p>

      </div>
    </section>
  );
}

const phases = [
  { n: "01", title: "Process Letter & NDA", desc: "Execute the Moelis NDA to receive the full process letter and begin review of the permanent franchise opportunity. You are here.", active: true, date: null },
  { n: "02", title: "Data Room Access", desc: "Full access to the BAL Virtual Data Room — 10-year BCG P&L model, league KPIs, venue documentation, sponsorship contracts, and franchise benchmarks.", active: false, date: null },
  { n: "03", title: "Management Meetings", desc: "In-person meetings with the ownership group and Moelis advisors. Grand Arena site visit in Cape Town available on request. Confirm investment thesis firsthand.", active: false, date: null },
  { n: "04", title: "Proposal Submission", desc: "Submit a non-binding proposal — total team fee, ownership structure, sources of financing, and capitalization table. Evaluated simultaneously with all other proposals.", active: false, date: null },
  { n: "05", title: "Transaction Close", desc: "Selected co-owners proceed to binding documentation. BAL conducts ownership vetting — background, financial, and character review. Controlling Owner must hold a minimum 30% equity interest.", active: false, date: null },
];

export default function TimelineSection() {
  return (
    <section id="process" className="py-32 border-t border-black/[0.06]" style={{
      background: "repeating-linear-gradient(-55deg, transparent 0, transparent 18px, rgba(0,0,0,0.028) 18px, rgba(0,0,0,0.028) 19px), #f5f7fa"
    }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-[3px] w-10 bg-[#c9a840]" />
              <span className="text-[#c9a840] text-xs tracking-[0.3em] uppercase">Bid Process</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-[#0c1e32]" style={{ fontFamily: "var(--font-playfair)" }}>
              Five steps<br />to close.
            </h2>
        </div>

        {/* Progress connector */}
        <div className="relative mb-2 hidden md:block">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-black/[0.08]" />
          <div className="absolute top-1/2 left-0 h-px bg-gradient-to-r from-[#c9a840] to-[#c9a840]/30" style={{ width: "20%" }} />
          <div className="relative grid grid-cols-5">
            {phases.map((p) => (
              <div key={p.n} className="flex justify-center">
                <div className={`w-2.5 h-2.5 rounded-full border-2 ${p.active
                  ? "bg-[#c9a840] border-[#c9a840] shadow-[0_0_8px_rgba(201,168,64,0.5)]"
                  : "bg-white border-black/20"
                }`} />
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-3 mb-12">
          {phases.map((p, i) => (
            <div key={p.n} data-animate data-delay={String(i + 1)} className={`flex flex-col p-7 rounded-sm transition-all duration-300 ${
              p.active
                ? "shadow-[0_2px_20px_rgba(201,168,64,0.15),0_0_0_1px_rgba(201,168,64,0.3)]"
                : "card-light hover:border-[#c9a840]/25"
            }`} style={{
              background: p.active
                ? "linear-gradient(135deg, rgba(201,168,64,0.1) 0%, #ffffff 70%)"
                : "#ffffff",
              border: p.active ? "1px solid rgba(201,168,64,0.35)" : undefined
            }}>
              <div className="flex items-center justify-between mb-5">
                <span className="text-[#8aa0b5] text-[10px] tracking-widest uppercase">{p.n}</span>
                {p.active && (
                  <span className="text-[10px] text-[#c9a840] border border-[#c9a840]/35 px-2 py-0.5 rounded-sm tracking-widest uppercase">Active</span>
                )}
              </div>
              <h3 className={`text-sm font-medium mb-3 leading-snug ${p.active ? "text-[#0c1e32]" : "text-[#3a5a78]"}`} style={{ fontFamily: "var(--font-playfair)" }}>
                {p.title}
              </h3>
              <p className="text-[#8aa0b5] text-sm leading-relaxed flex-1">{p.desc}</p>
              {p.date && <div className="mt-4 text-[#c9a840] text-xs font-medium">{p.date}</div>}
            </div>
          ))}
        </div>

        <p className="text-[#8aa0b5] text-sm leading-relaxed max-w-3xl">
          The Company reserves the right to evaluate the terms and conditions of any proposal, reject any proposal without specifying reasons, and alter or terminate this process at any time. The Company may negotiate with one or more potential purchasers and enter into definitive agreements without notice or obligation to other potential purchasers.
        </p>

      </div>
    </section>
  );
}

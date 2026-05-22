const rows = [
  {
    criteria: "Tier 1 BAL Arena",
    sub: "Finals-eligible, immediately operational",
    ct: { val: "Operational", tick: true },
    others: [
      { city: "Lagos",      val: "In Development", tick: false },
      { city: "Cairo",      val: "Proposed",        tick: false },
      { city: "Nairobi",    val: "Proposed",        tick: false },
      { city: "Casablanca", val: "In Development",  tick: false },
    ],
  },
  {
    criteria: "BAL Seasons Operated",
    sub: "Continuous, same ownership group",
    ct: { val: "6 Seasons", tick: true },
    others: [
      { city: "Lagos",      val: "0", tick: false },
      { city: "Cairo",      val: "0", tick: false },
      { city: "Nairobi",    val: "0", tick: false },
      { city: "Casablanca", val: "0", tick: false },
    ],
  },
  {
    criteria: "BAL Finals Appearances",
    sub: "Continental championship stage",
    ct: { val: "3 Finals", tick: true },
    others: [
      { city: "Lagos",      val: "None", tick: false },
      { city: "Cairo",      val: "None", tick: false },
      { city: "Nairobi",    val: "None", tick: false },
      { city: "Casablanca", val: "None", tick: false },
    ],
  },
  {
    criteria: "Purchasing Power",
    sub: "Among all 24 BAL markets",
    ct: { val: "#1 on Continent", tick: true },
    others: [
      { city: "Lagos",      val: "Lower",    tick: false },
      { city: "Cairo",      val: "Lower",    tick: false },
      { city: "Nairobi",    val: "Lower",    tick: false },
      { city: "Casablanca", val: "Lower",    tick: false },
    ],
  },
  {
    criteria: "NBA Summer League Alumni",
    sub: "Players placed at NBA level",
    ct: { val: "2 Active (Bucks, Knicks)", tick: true },
    others: [
      { city: "Lagos",      val: "Unconfirmed", tick: false },
      { city: "Cairo",      val: "Unconfirmed", tick: false },
      { city: "Nairobi",    val: "Unconfirmed", tick: false },
      { city: "Casablanca", val: "Unconfirmed", tick: false },
    ],
  },
  {
    criteria: "Olympic Training Infrastructure",
    sub: "Permanent elite facility on-site",
    ct: { val: "Stellenbosch HPSU", tick: true },
    others: [
      { city: "Lagos",      val: "None confirmed", tick: false },
      { city: "Cairo",      val: "None confirmed", tick: false },
      { city: "Nairobi",    val: "None confirmed", tick: false },
      { city: "Casablanca", val: "None confirmed", tick: false },
    ],
  },
  {
    criteria: "Internet Penetration",
    sub: "#1 of 11 BAL priority markets (BCG, Winter 2026)",
    ct: { val: "76% — #1 of 11", tick: true },
    others: [
      { city: "Lagos",      val: "Lower", tick: false },
      { city: "Cairo",      val: "Lower", tick: false },
      { city: "Nairobi",    val: "Lower", tick: false },
      { city: "Casablanca", val: "Lower", tick: false },
    ],
  },
];

export default function CompetitivePositionSection() {
  return (
    <section className="py-32 border-t border-black/[0.06]" style={{
      background: "repeating-linear-gradient(-55deg, transparent 0, transparent 18px, rgba(0,0,0,0.028) 18px, rgba(0,0,0,0.028) 19px), #f5f7fa"
    }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="flex items-center gap-3 mb-8">
          <div className="h-[3px] w-10 bg-[#c9a840]" />
          <span className="text-[#c9a840] text-xs tracking-[0.3em] uppercase">Competitive Position</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-[#0c1e32]" style={{ fontFamily: "var(--font-playfair)" }}>
            No other city<br />comes close.
          </h2>
          <p className="text-[#3a5a78] text-sm max-w-sm leading-relaxed lg:text-right tracking-[0.01em]">
            Cape Town enters the permanent franchise process with six years of operational history, a Tier 1 arena already running, and the continent&apos;s strongest consumer market. Every other bid city starts from zero.
          </p>
        </div>

        {/* Table */}
        <div className="panel-light overflow-x-auto">
          <table className="w-full border-collapse" style={{ minWidth: "700px" }}>
            <thead>
              <tr className="border-b border-black/[0.06]">
                <th className="text-left px-6 py-4 text-[#8aa0b5] text-[10px] tracking-widest uppercase font-normal w-[28%]">Criteria</th>
                <th className="px-5 py-4 text-center w-[18%]">
                  <div className="inline-flex items-center gap-1.5 bg-[#c9a840]/10 border border-[#c9a840]/30 px-3 py-1.5 rounded-sm">
                    <span className="text-[#c9a840] text-[10px] tracking-widest uppercase font-semibold">Cape Town</span>
                  </div>
                </th>
                {["Lagos", "Cairo", "Nairobi", "Casablanca"].map((city) => (
                  <th key={city} className="px-4 py-4 text-center text-[#8aa0b5] text-[10px] tracking-widest uppercase font-normal">{city}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.criteria} className={`border-b border-black/[0.04] ${i % 2 === 0 ? "" : "bg-black/[0.015]"}`}>
                  <td className="px-6 py-4">
                    <div className="text-[#0c1e32] text-sm font-medium">{r.criteria}</div>
                    <div className="text-[#8aa0b5] text-xs mt-0.5 leading-relaxed">{r.sub}</div>
                  </td>
                  <td className="px-5 py-4 text-center">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-emerald-600 text-base">✓</span>
                      <span className="text-[#0c1e32] text-xs font-medium leading-snug text-center">{r.ct.val}</span>
                    </div>
                  </td>
                  {r.others.map((o) => (
                    <td key={o.city} className="px-4 py-4 text-center">
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-[#cbd5e1] text-base">—</span>
                        <span className="text-[#b0bec5] text-xs leading-snug text-center">{o.val}</span>
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-[#b0bec5] text-[10px] mt-4 tracking-wide">
          Competitor venue and infrastructure data based on publicly available BAL market reporting. Cape Town figures reflect verified operational history.
        </p>

      </div>
    </section>
  );
}

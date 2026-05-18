export default function VenueSection() {
  return (
    <section id="venue" className="py-28 bg-[#060e1c] border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left: image */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-[#c9a840]" />
              <span className="text-[#c9a840] text-xs tracking-[0.3em] uppercase">The Venue</span>
            </div>
            <h2 className="text-4xl sm:text-5xl text-white font-light leading-tight mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
              Grand Arena,<br />GrandWest
            </h2>
            <p className="text-white/55 text-base leading-relaxed mb-8">
              Cape Town&apos;s BAL home is already built, already compliant, and already operational. Grand Arena at GrandWest Casino &amp; Entertainment World is a Tier 1-rated BAL venue — the designation that makes a city eligible to host the BAL Finals itself.
            </p>
            <p className="text-white/40 text-sm leading-relaxed mb-8">
              Operated by Sun International, one of Africa&apos;s largest hospitality and entertainment groups, the arena comes with full operational infrastructure, event management capability, and premium hospitality from day one.
            </p>

            <div className="sa-stripe rounded-sm" />
          </div>

          {/* Right: specs */}
          <div className="lg:col-span-7">
            <div className="text-white/30 text-xs tracking-widest uppercase mb-6">Arena Specifications</div>
            <table className="data-table panel mb-10">
              <tbody>
                {[
                  { label: "Total Capacity", value: "6,866 seats" },
                  { label: "BAL Configuration", value: "5,500 seats", highlight: true },
                  { label: "BAL Tier Classification", value: "Tier 1 — Finals Eligible", highlight: true },
                  { label: "Floor Area", value: "2,250 SQM" },
                  { label: "Standing Capacity", value: "7,000" },
                  { label: "Operator", value: "Sun International" },
                  { label: "Location", value: "GrandWest Casino, Cape Town" },
                  { label: "BAL Compliance Status", value: "Compliant — Season 1" },
                ].map((s) => (
                  <tr key={s.label}>
                    <td><span className="text-white/65">{s.label}</span></td>
                    <td className="text-right">
                      <span className={`font-medium ${s.highlight ? "text-[#c9a840]" : "text-white"}`}>{s.value}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="callout mb-8">
              <div className="text-[#c9a840] text-xs tracking-widest uppercase mb-3">What Tier 1 Means</div>
              <p className="text-white/60 text-sm leading-relaxed">
                BAL Tier 1 requires a minimum of 5,000 seats in BAL configuration. At 5,500 seats, Grand Arena exceeds this threshold — qualifying Cape Town to host BAL Finals games from its first season as a permanent franchise. No other city in the bid process has a venue of equivalent standing already operational.
              </p>
            </div>

            <div className="text-white/30 text-xs tracking-widest uppercase mb-5">Ticket Pricing (from 2028 Home/Away Model)</div>
            <table className="data-table panel">
              <thead>
                <tr>
                  <th>Zone</th>
                  <th className="text-right">Price per Game</th>
                  <th className="text-right hidden sm:table-cell">USD Equiv.</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { zone: "Premium / Courtside", price: "R250", usd: "~$13.50" },
                  { zone: "Lower Level", price: "R200", usd: "~$10.80" },
                  { zone: "Upper Level", price: "R150", usd: "~$8.10" },
                ].map((z) => (
                  <tr key={z.zone}>
                    <td><span className="text-white/65">{z.zone}</span></td>
                    <td className="text-right"><span className="text-white font-medium" style={{ fontFamily: "var(--font-playfair)" }}>{z.price}</span></td>
                    <td className="text-right hidden sm:table-cell"><span className="text-white/35 text-xs">{z.usd}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-white/20 text-[9px] mt-3 tracking-wide">BAL average ticket 2025: $10.40 per game · Average BAL attendance: ~5,700 per game</p>
          </div>
        </div>

      </div>
    </section>
  );
}

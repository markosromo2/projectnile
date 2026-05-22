export default function VenueSection() {
  return (
    <section id="venue" className="py-32 border-t border-black/[0.06]" style={{
      background: "repeating-linear-gradient(-55deg, transparent 0, transparent 18px, rgba(0,0,0,0.028) 18px, rgba(0,0,0,0.028) 19px), #f5f7fa"
    }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="flex items-center gap-3 mb-10">
          <div className="h-[3px] w-10 bg-[#c9a840]" />
          <span className="text-[#c9a840] text-xs tracking-[0.3em] uppercase">The Venue</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left: text */}
          <div className="lg:col-span-5">
            <h2 className="text-4xl sm:text-5xl text-[#0c1e32] font-bold leading-tight mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
              Grand Arena,<br />GrandWest
            </h2>
            <p className="text-[#3a5a78] text-base leading-relaxed mb-6 tracking-[0.01em]">
              Cape Town&apos;s BAL home is already built, already compliant, and already operational. Grand Arena at GrandWest is a Tier 1-rated venue — the designation that makes a city eligible to host the BAL Finals — with 5,500 seats in BAL configuration and an 8-camera broadcast setup including basket cameras.
            </p>
            <div className="prose-block-light text-sm mb-8">
              The team has already hosted a full BAL tournament here, installing a Connor Sports hardwood floor — the same surface used at the NCAA Final Four — alongside a dedicated VIP courtside stand and full broadcast infrastructure. Sun International, one of Africa&apos;s largest entertainment groups, handles all venue operations.
            </div>

            {/* Tier 1 badge */}
            <div className="inline-flex items-center gap-3 border border-[#c9a840]/30 px-5 py-3 rounded-sm mb-8" style={{
              background: "linear-gradient(135deg, rgba(201,168,64,0.08) 0%, transparent 100%)"
            }}>
              <div className="w-1.5 h-1.5 rounded-full bg-[#c9a840]" />
              <div>
                <div className="text-[#c9a840] text-[10px] tracking-widest uppercase">BAL Classification</div>
                <div className="text-[#0c1e32] text-sm font-medium mt-0.5" style={{ fontFamily: "var(--font-playfair)" }}>Tier 1 — Finals Eligible</div>
              </div>
            </div>

            <div className="sa-stripe rounded-sm" />
          </div>

          {/* Right: specs */}
          <div className="lg:col-span-7">
            <div className="text-[#8aa0b5] text-xs tracking-widest uppercase mb-6">Arena Specifications</div>
            <table className="data-table-light panel-light mb-10">
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
                    <td><span className="text-[#5a7898]">{s.label}</span></td>
                    <td className="text-right">
                      <span className={`font-medium ${s.highlight ? "text-[#c9a840]" : "text-[#0c1e32]"}`}>{s.value}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="callout-light mb-8">
              <div className="text-[#c9a840] text-xs tracking-widest uppercase mb-3">What Tier 1 Means for This Bid</div>
              <p className="text-[#3a5a78] text-sm leading-relaxed tracking-[0.01em] mb-3">
                BAL Tier 1 requires a minimum of 5,000 seats in BAL configuration. At 5,500, Grand Arena exceeds this threshold — qualifying Cape Town to host BAL Finals games from its first permanent season. Finals hosting generates incremental gate, sponsorship, and broadcast revenue beyond the regular season.
              </p>
              <p className="text-[#3a5a78] text-sm leading-relaxed tracking-[0.01em]">
                No other city in the current bid process has a Tier 1 venue already operational, with a signed landlord agreement, and a proven BAL tournament on record.
              </p>
            </div>

            <div className="text-[#8aa0b5] text-xs tracking-widest uppercase mb-5">Ticket Pricing (from 2028 Home/Away Model)</div>
            <table className="data-table-light panel-light">
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
                    <td><span className="text-[#5a7898]">{z.zone}</span></td>
                    <td className="text-right"><span className="text-[#0c1e32] font-medium" style={{ fontFamily: "var(--font-playfair)" }}>{z.price}</span></td>
                    <td className="text-right hidden sm:table-cell"><span className="text-[#3a5a78] text-xs">{z.usd}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-[#5a7898] text-[10px] mt-3 tracking-wide">BAL average ticket 2025: $10.40 per game · Average BAL attendance: ~5,700 per game</p>
          </div>
        </div>

      </div>
    </section>
  );
}

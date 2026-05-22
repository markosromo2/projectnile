const moelis = [
  { initials: "PB", name: "Paul Bragiel", title: "Chairman, Capewind Ltd.", email: "paul@bragielbros.com", phone: "+1 (312) 483-8458", gold: true },
  { initials: "LK", name: "Lari Kangas", title: "Co-Founder & Advisor", email: "larikangas@gmail.com", phone: "+358 45 352 5035", gold: false },
];

export default function ContactSection() {
  return (
    <section id="contact" className="overflow-hidden" style={{
      background: "repeating-linear-gradient(-55deg, transparent 0, transparent 18px, rgba(0,0,0,0.028) 18px, rgba(0,0,0,0.028) 19px), #f5f7fa"
    }}>
      <div className="py-32 max-w-7xl mx-auto px-6 lg:px-10">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-[3px] w-10 bg-[#c9a840]" />
              <span className="text-[#c9a840] text-xs tracking-[0.3em] uppercase">Join the Bid</span>
            </div>
            <h2 className="text-4xl sm:text-5xl text-[#0c1e32] font-bold leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
              Join the<br />ownership group.
            </h2>
          </div>
          <p className="text-[#3a5a78] text-sm max-w-sm leading-relaxed lg:text-right tracking-[0.01em]">
            Cape Town&apos;s permanent franchise bid is being submitted to the BAL with a full ownership group. For co-investment, due diligence enquiries, or a Grand Arena site visit, contact Paul Bragiel or Lari Kangas directly.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 gap-3 mb-12 max-w-2xl">
          {moelis.map((c) => (
            <div key={c.name} className={`flex flex-col p-7 rounded-sm transition-all duration-300 ${
              c.gold
                ? "shadow-[0_2px_20px_rgba(201,168,64,0.12),0_0_0_1px_rgba(201,168,64,0.28)]"
                : "card-light"
            }`} style={{
              background: c.gold
                ? "linear-gradient(135deg, rgba(201,168,64,0.09) 0%, #ffffff 70%)"
                : "#ffffff",
              border: c.gold ? "1px solid rgba(201,168,64,0.32)" : undefined
            }}>
              <div className="flex items-center gap-4 mb-5">
                <div className={`w-11 h-11 rounded-full border flex items-center justify-center text-sm font-medium shrink-0 ${
                  c.gold
                    ? "border-[#c9a840]/35 text-[#c9a840]"
                    : "border-black/[0.08] text-[#8aa0b5]"
                }`} style={{
                  background: c.gold ? "rgba(201,168,64,0.07)" : "rgba(0,0,0,0.025)"
                }}>
                  {c.initials}
                </div>
                <div>
                  <div className="text-[#0c1e32] font-medium text-sm leading-snug">{c.name}</div>
                  <div className={`text-xs mt-0.5 ${c.gold ? "text-[#c9a840]" : "text-[#8aa0b5]"}`}>{c.title}</div>
                </div>
              </div>
              <div className="mt-auto pt-4 border-t border-black/[0.06] space-y-1.5">
                <a href={"mailto:" + c.email} className="block text-[#5a7898] text-xs hover:text-[#c9a840] transition-colors truncate">{c.email}</a>
                <span className="block text-[#8aa0b5] text-xs">{c.phone}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      <div className="sa-stripe" />
      <div className="px-6 lg:px-10 py-5 flex items-center justify-between" style={{ background: "#0c1e32" }}>
        <span className="text-white/30 text-[10px] tracking-widest uppercase">Capewind Ltd. · Highly Confidential &amp; Proprietary · 2026</span>
        <span className="text-white/30 text-[10px] tracking-widest uppercase">Cape Town BAL · Paul Bragiel &amp; Lari Kangas</span>
      </div>
    </section>
  );
}

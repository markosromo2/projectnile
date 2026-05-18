const moelis = [
  { initials: "NM", name: "Navid Mahmoodzadegan", title: "Co-CEO & Co-Founder, Moelis & Company", email: "navid@moelis.com", phone: "+1 (310) 443-2311" },
  { initials: "DZ", name: "Daniel Zweben", title: "Managing Director", email: "daniel.zweben@moelis.com", phone: "+1 (310) 443-2388" },
  { initials: "ML", name: "Marcus Lollie", title: "Managing Director", email: "marcus.lollie@moelis.com", phone: "+1 (310) 443-2370" },
  { initials: "ZZ", name: "Zach Zimmerman", title: "Executive Director", email: "zach.zimmerman@moelis.com", phone: "+1 (310) 443-2319" },
  { initials: "LM", name: "Louise McAlary", title: "Vice President", email: "louise.mcalary@moelis.com", phone: "+1 (212) 883-8349" },
  { initials: "PB", name: "Paul Bragiel", title: "Chairman, Capewind Ltd.", email: "paul@bragielbros.com", phone: "+1 (312) 483-8458", gold: true },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-28 bg-[#091525] border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-[#c9a840]" />
              <span className="text-[#c9a840] text-xs tracking-[0.3em] uppercase">Contact</span>
            </div>
            <h2 className="text-4xl sm:text-5xl text-white font-light leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
              Get in touch
            </h2>
          </div>
          <p className="text-white/45 text-sm max-w-sm leading-relaxed lg:text-right">
            For process and due diligence enquiries, contact the Moelis team directly. For ownership group discussions, contact Paul Bragiel.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.05] rounded-sm overflow-hidden mb-12">
          {moelis.map((c) => (
            <div key={c.name} className={`flex flex-col p-7 hover:bg-[#0d1e33] transition-colors ${c.gold ? "bg-[#c9a840]/[0.04] border-t border-[#c9a840]/20" : "bg-[#091525]"}`}>
              <div className="flex items-center gap-4 mb-5">
                <div className={`w-11 h-11 rounded-full border flex items-center justify-center text-sm font-medium shrink-0 ${c.gold ? "border-[#c9a840]/40 text-[#c9a840] bg-[#c9a840]/8" : "border-white/10 text-white/40 bg-white/[0.03]"}`}>
                  {c.initials}
                </div>
                <div>
                  <div className="text-white font-medium text-sm">{c.name}</div>
                  <div className={`text-xs mt-0.5 ${c.gold ? "text-[#c9a840]" : "text-white/35"}`}>{c.title}</div>
                </div>
              </div>
              <div className="mt-auto pt-4 border-t border-white/[0.05] space-y-1">
                <a href={"mailto:" + c.email} className="block text-white/30 text-xs hover:text-[#c9a840]/70 transition-colors truncate">{c.email}</a>
                <span className="block text-white/20 text-xs">{c.phone}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Deadline + Legal */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="callout">
            <div className="flex items-start gap-4">
              <div className="w-px self-stretch bg-[#c9a840]/40 shrink-0" />
              <div>
                <div className="text-[#c9a840] text-xs tracking-widest uppercase mb-3">Proposal Deadline</div>
                <div className="text-white text-2xl font-light mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                  June 24, 2026<br />12:00 PM EST
                </div>
                <p className="text-white/45 text-sm leading-relaxed">
                  Non-binding proposals must be received by Moelis &amp; Company no later than June 24, 2026. Direct all submissions to the Moelis team above.
                </p>
              </div>
            </div>
          </div>

          <div className="panel p-8">
            <div className="text-white/30 text-xs tracking-widest uppercase mb-5">Legal &amp; Process Notes</div>
            <ul className="space-y-3">
              {[
                "Holding Company: Capewind Ltd. — 3500 S Dupont Hwy, Dover, Delaware 19901",
                "BAL rules require Controlling Owner to hold a minimum 30% equity interest",
                "All investors subject to BAL vetting: background, financial, and character review",
                "Company reserves the right to reject any proposal without specifying reasons",
              ].map((n) => (
                <li key={n} className="flex gap-3 text-white/35 text-xs leading-relaxed">
                  <span className="text-[#c9a840]/35 shrink-0">—</span>
                  {n}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>

      <div className="sa-stripe" />
      <div className="bg-[#04090f] px-6 lg:px-10 py-5 flex items-center justify-between">
        <span className="text-white/15 text-[9px] tracking-widest uppercase">Capewind Ltd. · Highly Confidential &amp; Proprietary · 2026</span>
        <span className="text-white/15 text-[9px] tracking-widest uppercase">Cape Town BAL · Moelis &amp; Company</span>
      </div>
    </section>
  );
}

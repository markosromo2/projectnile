import Image from "next/image";

export default function ArenaDividerSection() {
  return (
    <section className="relative h-[65vh] min-h-[460px] overflow-hidden">
      <Image
        src="/images/grand-arena.png"
        alt="Grand Arena at GrandWest, Cape Town"
        fill
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#060e1c] via-[#060e1c]/60 to-[#060e1c]/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#060e1c] via-transparent to-[#060e1c]/35" />

      <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-10 flex items-center">
        <div className="max-w-xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#c9a840]" />
            <span className="text-[#c9a840] text-xs tracking-[0.3em] uppercase">Grand Arena · GrandWest</span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl text-white font-light leading-[0.9] mb-8" style={{ fontFamily: "var(--font-playfair)" }}>
            5,500 seats.<br />
            <span className="text-gold">Tier 1.</span><br />
            Ready now.
          </h2>
          <p className="text-white/50 text-base leading-relaxed max-w-md mb-8">
            The only Finals-eligible BAL arena already operational in any bid market. No construction timeline. No compliance risk.
          </p>
          <div className="grid grid-cols-3 gap-px bg-white/[0.07] rounded-sm overflow-hidden w-fit">
            {[
              { v: "6,866", l: "Total Capacity" },
              { v: "Tier 1", l: "BAL Classification" },
              { v: "Day 1", l: "Compliance Status" },
            ].map((s) => (
              <div key={s.l} className="bg-[#060e1c]/70 backdrop-blur-sm px-6 py-4">
                <div className="text-xl font-light text-white tabular-nums" style={{ fontFamily: "var(--font-playfair)" }}>{s.v}</div>
                <div className="text-white/35 text-[9px] tracking-widest uppercase mt-0.5">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

export default function CityViewSection() {
  return (
    <section className="relative h-[92vh] min-h-[620px] overflow-hidden">
      <Image
        src="/images/ct-basketball-court.png"
        alt="Cape Town Basketball — practice court"
        fill
        className="object-cover object-center"
        style={{ transform: "scale(1.02)" }}
      />
      {/* Single crafted overlay — cinematic, not stacked */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(to bottom right, rgba(4,9,15,0.5) 0%, rgba(4,9,15,0.15) 50%, rgba(4,9,15,0.6) 100%)"
      }} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#04090f]/85" />

      <div className="absolute bottom-12 left-0 right-0">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-end justify-between gap-8">
          <div data-animate>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#c9a840]" />
              <span className="text-[#c9a840] text-xs tracking-[0.3em] uppercase">Cape Town, South Africa</span>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl text-white font-light leading-[0.88]" style={{ fontFamily: "var(--font-playfair)" }}>
              Table Mountain.<br />
              <span className="text-gold">$46.1B city.</span>
            </h2>
          </div>

          {/* Glass stat block */}
          <div className="hidden lg:grid grid-cols-3 divide-x divide-white/[0.07] glass rounded-sm overflow-hidden shrink-0" data-animate data-delay="2">
            {[
              { v: "$9,276", l: "#1 Purchasing Power" },
              { v: "4.9M", l: "Population" },
              { v: "$403M", l: "Media Market" },
            ].map((s) => (
              <div key={s.l} className="px-7 py-6">
                <div className="text-2xl font-light text-white tabular-nums" style={{ fontFamily: "var(--font-playfair)" }}>{s.v}</div>
                <div className="text-white/38 text-[9px] tracking-widest uppercase mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

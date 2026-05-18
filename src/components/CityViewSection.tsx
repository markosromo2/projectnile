import Image from "next/image";

export default function CityViewSection() {
  return (
    <section className="relative h-[92vh] min-h-[620px] overflow-hidden">
      <Image
        src="/images/cape-town-dusk.jpg"
        alt="Cape Town — Table Mountain and Lion's Head at dusk"
        fill
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#060e1c]/25 via-transparent to-[#060e1c]/75" />

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

          <div className="hidden lg:grid grid-cols-3 gap-px bg-white/[0.08] rounded-sm overflow-hidden shrink-0" data-animate data-delay="2">
            {[
              { v: "$9,276", l: "#1 Purchasing Power" },
              { v: "4.9M", l: "Population" },
              { v: "$403M", l: "Media Market" },
            ].map((s) => (
              <div key={s.l} className="bg-[#060e1c]/60 backdrop-blur-sm px-6 py-5">
                <div className="text-2xl font-light text-white tabular-nums" style={{ fontFamily: "var(--font-playfair)" }}>{s.v}</div>
                <div className="text-white/40 text-[9px] tracking-widest uppercase mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

export default function WaterfrontDividerSection() {
  return (
    <section className="relative h-[70vh] min-h-[480px] overflow-hidden">
      <Image
        src="/images/ct-tigers-jersey.jpg"
        alt="Cape Town Tigers player at the waterfront"
        fill
        className="object-cover object-center"
        style={{ transform: "scale(1.02)" }}
      />
      <div className="absolute inset-0" style={{
        background: "linear-gradient(to right, rgba(9,21,37,0.88) 0%, rgba(9,21,37,0.45) 45%, rgba(9,21,37,0.1) 100%)"
      }} />
      <div className="absolute inset-0 bg-gradient-to-t from-[#091525]/55 via-transparent to-transparent" />

      <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-10 flex items-center">
        <div className="max-w-lg" data-animate>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#c9a840]" />
            <span className="text-[#c9a840] text-xs tracking-[0.3em] uppercase">V&amp;A Waterfront · Cape Town</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-white font-light leading-[0.9] mb-8" style={{ fontFamily: "var(--font-playfair)" }}>
            Africa&apos;s most<br />
            <span className="text-gold">visited destination.</span>
          </h2>
          <div className="grid grid-cols-2 gap-px bg-white/[0.07] rounded-sm overflow-hidden w-fit">
            {[
              { v: "24M", l: "Annual Visitors" },
              { v: "#1", l: "African Tourism Hub" },
            ].map((s) => (
              <div key={s.l} className="glass px-7 py-5">
                <div className="text-2xl font-light text-white tabular-nums" style={{ fontFamily: "var(--font-playfair)" }}>{s.v}</div>
                <div className="text-white/38 text-[9px] tracking-widest uppercase mt-0.5">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

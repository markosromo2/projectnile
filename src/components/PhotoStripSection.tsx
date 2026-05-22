import Image from "next/image";

const bottom = [
  { src: "/images/ct-paris-team.jpg", alt: "Cape Town Tigers at the Eiffel Tower, Paris", caption: "Paris · South Africa" },
  { src: "/images/camps-bay-golden.jpg", alt: "Camps Bay at golden hour", caption: "Camps Bay" },
  { src: "/images/ct-waterfront-mountain.png", alt: "Cape Town harbour & Table Mountain", caption: "Cape Town Harbour" },
];

export default function PhotoStripSection() {
  return (
    <section className="py-20" style={{ background: "#040d1c" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="flex items-center gap-3 mb-10">
          <div className="h-[3px] w-10 bg-[#c9a840]" />
          <span className="text-[#c9a840] text-xs tracking-[0.3em] uppercase">The City · The Team · The Community</span>
        </div>

        {/* Main row */}
        <div className="grid grid-cols-3 gap-2 mb-2" style={{ height: "420px" }}>
          <div className="col-span-2 relative overflow-hidden rounded-sm group">
            <Image
              src="/images/ct-tigers-team.png"
              alt="Cape Town Tigers — BAL"
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
            <div className="absolute bottom-5 left-5">
              <span className="text-white/40 text-[9px] tracking-[0.3em] uppercase block mb-1">The Team</span>
              <p className="text-white text-sm font-light leading-snug" style={{ fontFamily: "var(--font-playfair)" }}>
                Cape Town Tigers · BAL Season 6
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-sm group">
            <Image
              src="/images/ct-team-montage.jpg"
              alt="Cape Town Tigers roster"
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
            <div className="absolute bottom-5 left-5">
              <span className="text-white/40 text-[9px] tracking-[0.3em] uppercase block mb-1">The Roster</span>
              <p className="text-white/80 text-xs font-light">Cape Town Tigers · BAL</p>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-3 gap-2" style={{ height: "200px" }}>
          {bottom.map((p) => (
            <div key={p.src} className="relative overflow-hidden rounded-sm group">
              <Image
                src={p.src}
                alt={p.alt}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-white/50 text-[9px] tracking-[0.25em] uppercase">{p.caption}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

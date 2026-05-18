import Image from "next/image";

export default function PhotoDividerSection() {
  return (
    <section className="relative h-[88vh] min-h-[580px] overflow-hidden">
      <Image
        src="/images/camps-bay-golden.jpg"
        alt="Camps Bay, Cape Town — golden hour"
        fill
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#060e1c]/75 via-[#060e1c]/25 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#060e1c]/60 via-transparent to-[#060e1c]/15" />

      <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-10 flex items-center">
        <div className="max-w-xl" data-animate>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#c9a840]" />
            <span className="text-[#c9a840] text-xs tracking-[0.3em] uppercase">Camps Bay · Cape Town</span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl text-white font-light leading-[0.9] mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
            One city.<br />
            <span className="text-gold">Every advantage.</span><br />
            One deadline.
          </h2>
          <p className="text-white/55 text-base leading-relaxed">
            Proposal deadline: <span className="text-[#c9a840] font-medium">June 24, 2026</span>
          </p>
        </div>
      </div>
    </section>
  );
}

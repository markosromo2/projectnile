export default function PhotoDividerSection() {
  return (
    <section className="relative py-32 overflow-hidden border-t border-white/[0.05]" style={{
      background: "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(201,168,64,0.06) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 0% 100%, rgba(0,122,77,0.05) 0%, transparent 50%), radial-gradient(ellipse 60% 40% at 100% 0%, rgba(26,107,168,0.06) 0%, transparent 50%), #06111f"
    }}>
      {/* Subtle dot grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
        maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black, transparent)",
      }} />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-10 text-center">
        {/* Top rule */}
        <div className="flex items-center gap-6 mb-16">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#c9a840]/30" />
          <span className="text-[#c9a840] text-[9px] tracking-[0.4em] uppercase shrink-0">Cape Town, South Africa</span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#c9a840]/30" />
        </div>

        <h2 className="text-5xl sm:text-6xl lg:text-[5.5rem] text-white font-light leading-[0.9] mb-16" style={{ fontFamily: "var(--font-playfair)" }} data-animate>
          One city.<br />
          <span className="text-gold">Every advantage.</span>
        </h2>

        {/* Bottom rule */}
        <div className="flex items-center gap-6">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white/[0.07]" />
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white/[0.07]" />
        </div>
      </div>
    </section>
  );
}

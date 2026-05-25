"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const stripPhotos = [
  "/images/ct-player-mountain-city.jpg",
  "/images/ct-training-balls.jpg",
  "/images/ct-team-mountain.jpg",
  "/images/ct-players-mural.jpg",
  "/images/ct-player-basket-mountain.jpg",
  "/images/ct-tigers-jersey.jpg",
  "/images/ct-player-rock-city.jpg",
  "/images/ct-team-summit.jpg",
  "/images/ct-player-mountain-kick.jpg",
];

const stats = [
  { value: "#1",    label: "Purchasing Power",  num: null,  pre: "",  suf: "",  dec: 0 },
  { value: "4",     label: "National Titles",    num: 4,     pre: "",  suf: "",  dec: 0 },
  { value: "Tier 1",label: "BAL Arena",          num: null,  pre: "",  suf: "",  dec: 0 },
  { value: "$17.4M",label: "Yr. 10 Revenue",     num: 17.4,  pre: "$", suf: "M", dec: 1 },
];

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { const t = setTimeout(() => setMounted(true), 80); return () => clearTimeout(t); }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 64, behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden" style={{ background: "#080d14" }}>
      {/* Background photo */}
      <div className="absolute inset-0">
        <Image
          src="/images/ct-player-rock-city.jpg"
          alt="Cape Town Tigers player overlooking Cape Town from the mountain"
          fill
          className="object-cover"
          style={{ opacity: 0.65, objectPosition: "72% 50%" }}
          priority
        />
        {/* Vignette layers — cinematic, not muddy */}
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 120% 100% at 50% 50%, transparent 30%, rgba(8,13,20,0.65) 100%)"
        }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #080d14 0%, rgba(8,13,20,0.45) 40%, transparent 70%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(8,13,20,0.78) 0%, transparent 55%, rgba(8,13,20,0.2) 100%)" }} />
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
        maskImage: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.4) 30%, rgba(0,0,0,0.4) 70%, transparent)",
      }} />

      {/* Vertical photo strip — right side, xl screens only */}
      <div className={`absolute top-16 right-10 bottom-28 hidden lg:flex items-stretch gap-3 z-10 pointer-events-none transition-opacity duration-1000 ${mounted ? "opacity-100" : "opacity-0"}`}>

        {/* Anchor rail: rotated label + gold rule */}
        <div className="flex flex-col items-center gap-4 py-8">
          <div className="flex-1 w-px bg-gradient-to-b from-transparent via-[#c9a840]/50 to-transparent" />
          <span
            className="text-[#c9a840]/50 text-[8px] tracking-[0.35em] uppercase shrink-0"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            Cape Town Tigers
          </span>
          <div className="flex-1 w-px bg-gradient-to-b from-transparent via-[#c9a840]/50 to-transparent" />
        </div>

        {/* Photos */}
        <div className="relative overflow-hidden" style={{ width: "220px" }}>
          <div className="absolute inset-x-0 top-0 h-24 z-10" style={{ background: "linear-gradient(to bottom, #080d14, transparent)" }} />
          <div className="absolute inset-x-0 bottom-0 h-24 z-10" style={{ background: "linear-gradient(to top, #080d14, transparent)" }} />
          <div style={{ animation: "marquee-vertical 42s linear infinite", willChange: "transform" }}>
            {[...stripPhotos, ...stripPhotos].map((src, i) => (
              <div key={i} className="relative mb-2 rounded-sm overflow-hidden" style={{ height: "175px" }}>
                <Image src={src} alt="" fill className="object-cover object-center" style={{ opacity: 0.85 }} />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Main content */}
      <div className={`relative z-10 flex-1 max-w-7xl mx-auto w-full px-6 lg:px-10 flex flex-col justify-end pb-0 pt-24 transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <div>
          <div className="flex items-center gap-5 mb-8">
            <div className="eyebrow mb-0">
              <span>Basketball Africa League · Permanent Team Bid · Cape Town</span>
            </div>
          </div>

          <h1 className="font-light text-white leading-[0.86] tracking-[-0.02em] mb-8" style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(5.5rem, 14vw, 11.5rem)",
          }}>
            Cape<br />
            <span className="text-gold">Town.</span>
          </h1>

          <p className="text-white/72 text-base sm:text-lg max-w-2xl leading-relaxed mb-10 tracking-[0.01em]">
            Africa&apos;s #1 purchasing-power market. A Tier 1, Finals-eligible arena already built and proven. Established six years ago and operational from Day 1 of the BAL — submitting a permanent franchise bid backed by track record no other city in this process can match.
          </p>

          <div className="flex flex-wrap gap-3 mb-16">
            <button
              onClick={() => scrollTo("opportunity")}
              className="btn-shimmer btn-magnetic text-xs text-[#080d14] bg-[#c9a840] hover:bg-[#e8d08a] px-7 py-3 rounded-sm transition-colors font-medium tracking-wide"
            >
              View the Opportunity
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="btn-magnetic text-xs text-white/45 border border-white/12 hover:border-white/28 hover:text-white/65 px-7 py-3 rounded-sm transition-all tracking-wide"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className={`relative z-10 border-t border-white/[0.06] transition-all duration-1000 delay-300 ${mounted ? "opacity-100" : "opacity-0"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`px-6 py-5 hover:bg-white/[0.025] transition-colors cursor-default group ${i < stats.length - 1 ? "border-r border-white/[0.05]" : ""}`}
              >
                <div
                  className="text-xl sm:text-2xl font-light text-white mb-0.5 tabular-nums group-hover:text-[#e8d08a] transition-colors"
                  style={{ fontFamily: "var(--font-playfair)" }}
                  {...(s.num !== null ? {
                    "data-count": String(s.num),
                    "data-count-prefix": s.pre,
                    "data-count-suffix": s.suf,
                    "data-count-decimals": String(s.dec),
                  } : {})}
                >{s.value}</div>
                <div className="text-white/28 text-[9px] tracking-[0.2em] uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="sa-stripe relative z-10" />

      {/* Scroll indicator */}
      <div className="scroll-indicator absolute bottom-28 right-8 hidden lg:flex flex-col items-center gap-2 z-10">
        <svg width="1" height="40" viewBox="0 0 1 40" className="overflow-visible">
          <line x1="0.5" y1="0" x2="0.5" y2="40" stroke="rgba(201,168,64,0.3)" strokeWidth="1"/>
        </svg>
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
          <path d="M1 1l4 4 4-4" stroke="rgba(201,168,64,0.45)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
}

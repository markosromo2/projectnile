"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const stats = [
  { value: "#1", label: "Purchasing Power" },
  { value: "4", label: "National Titles" },
  { value: "Tier 1", label: "BAL Arena" },
  { value: "$17.4M", label: "Yr. 10 Revenue" },
  { value: "June 24", label: "Proposal Deadline" },
];

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { const t = setTimeout(() => setMounted(true), 80); return () => clearTimeout(t); }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 64, behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#060e1c]">
      {/* Background: Cape Town aerial */}
      <div className="absolute inset-0">
        <Image
          src="/images/cape-town-aerial.jpg"
          alt="Cape Town, South Africa — Table Mountain aerial"
          fill
          className="object-cover object-center opacity-55"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060e1c] via-[#060e1c]/55 to-[#060e1c]/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060e1c]/80 via-transparent to-[#060e1c]/30" />
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }} />

      {/* Top label */}
      <div className="relative z-10 h-16 flex items-center justify-end px-6 lg:px-10">
        <div className="flex items-center gap-4">
          <span className="hidden sm:block text-white/20 text-[9px] tracking-[0.3em] uppercase">Highly Confidential</span>
          <div className="h-3 w-px bg-white/10 hidden sm:block" />
          <span className="text-[#c9a840]/50 text-[9px] tracking-[0.25em] uppercase">Moelis &amp; Company</span>
        </div>
      </div>

      {/* Main content */}
      <div className={`relative z-10 flex-1 max-w-7xl mx-auto w-full px-6 lg:px-10 flex flex-col justify-end pb-0 pt-8 transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <div>
          <div className="flex items-center gap-5 mb-8">
            <div className="eyebrow mb-0">
              <span>Basketball Africa League · Permanent Team Bid · Cape Town</span>
            </div>
            <Image
              src="/images/ct-tigers-logo.jpeg"
              alt="Cape Town Tigers Basketball Club"
              width={44}
              height={44}
              className="hidden sm:block rounded-full opacity-85 shrink-0"
            />
          </div>

          <h1 className="text-[clamp(4rem,12vw,10rem)] font-light text-white leading-[0.88] tracking-[-0.02em] mb-8" style={{ fontFamily: "var(--font-playfair)" }}>
            Cape<br />
            <span className="text-gold">Town.</span>
          </h1>

          <p className="text-white/55 text-base sm:text-lg max-w-2xl leading-relaxed mb-10">
            Africa&apos;s highest purchasing-power city. A Tier 1, Finals-eligible arena already operational. Proven ownership with six years in the BAL and four national titles. The deadline is June 24.
          </p>

          <div className="flex flex-wrap gap-3 mb-16">
            <button
              onClick={() => scrollTo("opportunity")}
              className="text-xs text-[#060e1c] bg-[#c9a840] hover:bg-[#e8d08a] px-6 py-3 rounded-sm transition-colors font-medium tracking-wide"
            >
              View the Opportunity
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="text-xs text-white/50 border border-white/15 hover:border-white/30 hover:text-white/70 px-6 py-3 rounded-sm transition-all tracking-wide"
            >
              Contact Moelis &amp; Company
            </button>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className={`relative z-10 border-t border-white/[0.06] transition-all duration-1000 delay-300 ${mounted ? "opacity-100" : "opacity-0"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`px-6 py-5 hover:bg-white/[0.03] transition-colors cursor-default ${i < stats.length - 1 ? "border-r border-white/[0.05]" : ""}`}
              >
                <div className="text-xl sm:text-2xl font-light text-white mb-0.5 tabular-nums" style={{ fontFamily: "var(--font-playfair)" }}>{s.value}</div>
                <div className="text-white/30 text-[9px] tracking-[0.2em] uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="sa-stripe relative z-10" />
    </section>
  );
}

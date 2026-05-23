"use client";
import { useState, useEffect, useCallback } from "react";

const SECTIONS = [
  { id: "opportunity", label: "Opportunity" },
  { id: "market", label: "Market" },
  { id: "revenue", label: "Revenue" },
  { id: "leadership", label: "Leadership" },
  { id: "venue", label: "Venue" },
  { id: "financials", label: "Financials" },
  { id: "process", label: "Process" },
  { id: "contact", label: "Contact" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      // Scroll spy
      let current = "";
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (el && window.scrollY >= el.offsetTop - 120) current = s.id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const scrollTo = useCallback((id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-black/[0.07] shadow-[0_1px_20px_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">

          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 group shrink-0"
          >
            <div className="w-7 h-7 border border-[#c9a840]/40 flex items-center justify-center">
              <div className="w-2 h-2 bg-[#c9a840]/60 rounded-full group-hover:bg-[#c9a840] transition-colors" />
            </div>
            <div className="hidden sm:block text-left">
              <div className={`text-sm font-medium leading-none tracking-wide transition-colors duration-500 ${scrolled ? "text-[#0c1e32]" : "text-white"}`} style={{ fontFamily: "var(--font-playfair)" }}>
                Cape Town Basketball
              </div>
              <div className={`text-[9px] mt-0.5 tracking-widest uppercase transition-colors duration-500 ${scrolled ? "text-[#8aa0b5]" : "text-white/30"}`}>BAL Permanent Team</div>
            </div>
          </button>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center">
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`relative text-[11px] px-4 py-2.5 transition-all duration-200 tracking-[0.06em] uppercase font-medium rounded-sm ${
                  active === s.id
                    ? "text-[#c9a840]"
                    : scrolled
                      ? "text-[#5a7898] hover:text-[#0c1e32] hover:bg-black/[0.04]"
                      : "text-white/35 hover:text-white/80 hover:bg-white/[0.04]"
                }`}
              >
                {s.label}
                {active === s.id && (
                  <span className="absolute bottom-0 left-3 right-3 h-[1.5px] bg-[#c9a840] rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollTo("contact")}
              className="hidden lg:block text-xs text-[#080d14] bg-[#c9a840] hover:bg-[#e8d08a] px-4 py-2 rounded-sm transition-colors font-medium tracking-wide"
            >
              Contact Us
            </button>
            <button
              className="lg:hidden flex flex-col gap-1.5 p-1"
              onClick={() => setMobileOpen(v => !v)}
              aria-label="Menu"
            >
              <span className={`block h-px w-5 transition-all duration-200 origin-center ${scrolled ? "bg-[#0c1e32]" : "bg-white"} ${mobileOpen ? "rotate-45 translate-y-[0.38rem]" : ""}`} />
              <span className={`block h-px w-5 transition-all duration-200 ${scrolled ? "bg-[#0c1e32]" : "bg-white"} ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-px w-5 transition-all duration-200 origin-center ${scrolled ? "bg-[#0c1e32]" : "bg-white"} ${mobileOpen ? "-rotate-45 -translate-y-[0.38rem]" : ""}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#080d14]/98 backdrop-blur-xl flex flex-col pt-16">
          <div className="flex-1 overflow-y-auto px-6 py-10 space-y-1">
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="flex items-center justify-between w-full py-4 border-b border-white/[0.05] group"
              >
                <span className="text-white/60 text-lg font-light group-hover:text-white transition-colors" style={{ fontFamily: "var(--font-playfair)" }}>
                  {s.label}
                </span>
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className="text-white/20 group-hover:text-[#c9a840] transition-colors">
                  <path d="M1 5h12M8 1l5 4-5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            ))}
            <div className="pt-8">
              <button
                onClick={() => scrollTo("contact")}
                className="w-full text-sm text-[#080d14] bg-[#c9a840] hover:bg-[#e8d08a] py-4 rounded-sm transition-colors font-medium tracking-wide"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

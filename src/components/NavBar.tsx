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
      <nav className={`fixed left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "top-3" : "top-0"}`}>
        <div className={`mx-auto transition-all duration-500 ${scrolled ? "max-w-6xl px-3" : "max-w-7xl px-0"}`}>
          <div
            className={`px-6 lg:px-8 h-16 flex items-center justify-between transition-all duration-500 ${
              scrolled
                ? "rounded-2xl border border-white/10 shadow-[0_18px_50px_-24px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.12)]"
                : "border border-transparent"
            }`}
            style={scrolled ? {
              background: "linear-gradient(135deg, rgba(255,255,255,0.07), rgba(255,255,255,0.012)), rgba(8,14,24,0.62)",
              backdropFilter: "blur(24px) saturate(1.7)",
              WebkitBackdropFilter: "blur(24px) saturate(1.7)",
            } : undefined}
          >

          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 group shrink-0"
          >
            <div className="w-8 h-8 rounded-lg border border-[#c9a840]/40 flex items-center justify-center transition-colors group-hover:border-[#c9a840]/70" style={{ background: "linear-gradient(135deg, rgba(201,168,64,0.14), rgba(201,168,64,0.02))" }}>
              <div className="w-2 h-2 bg-[#c9a840]/70 rounded-sm rotate-45 group-hover:bg-[#c9a840] transition-colors" />
            </div>
            <div className="hidden sm:block text-left">
              <div className="text-sm font-medium leading-none tracking-wide text-white" style={{ fontFamily: "var(--font-playfair)" }}>
                Cape Town Basketball
              </div>
              <div className="text-[10px] mt-0.5 tracking-widest uppercase text-white/55">BAL Permanent Team</div>
            </div>
          </button>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center">
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`relative text-[11px] px-3.5 py-2.5 transition-all duration-200 tracking-[0.06em] uppercase font-medium rounded-lg ${
                  active === s.id
                    ? "text-[#e8d08a]"
                    : "text-white/62 hover:text-white/90 hover:bg-white/[0.06]"
                }`}
              >
                {s.label}
                {active === s.id && (
                  <span className="absolute bottom-1 left-3.5 right-3.5 h-[1.5px] bg-gradient-to-r from-[#c9a840] to-[#e8d08a] rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollTo("contact")}
              className="btn-shimmer hidden lg:block text-xs text-[#080d14] px-4 py-2 rounded-lg transition-all font-medium tracking-wide hover:brightness-110"
              style={{ background: "linear-gradient(135deg, #e8d08a, #c9a840)", boxShadow: "0 6px 20px -6px rgba(201,168,64,0.5)" }}
            >
              Contact Us
            </button>
            <button
              className="lg:hidden flex flex-col gap-1.5 p-1"
              onClick={() => setMobileOpen(v => !v)}
              aria-label="Menu"
            >
              <span className={`block h-px w-5 transition-all duration-200 origin-center bg-white ${mobileOpen ? "rotate-45 translate-y-[0.38rem]" : ""}`} />
              <span className={`block h-px w-5 transition-all duration-200 bg-white ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-px w-5 transition-all duration-200 origin-center bg-white ${mobileOpen ? "-rotate-45 -translate-y-[0.38rem]" : ""}`} />
            </button>
          </div>
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
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className="text-white/42 group-hover:text-[#c9a840] transition-colors">
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

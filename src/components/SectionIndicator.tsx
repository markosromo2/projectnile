"use client";
import { useEffect, useState } from "react";

const sections = [
  { id: "opportunity", label: "Opportunity",  n: "01" },
  { id: "market",      label: "Market",        n: "02" },
  { id: "revenue",     label: "Revenue",       n: "03" },
  { id: "leadership",  label: "Leadership",    n: "04" },
  { id: "venue",       label: "Venue",         n: "05" },
  { id: "financials",  label: "Financials",    n: "06" },
  { id: "process",     label: "Process",       n: "07" },
  { id: "contact",     label: "Contact",       n: "08" },
];

export default function SectionIndicator() {
  const [active, setActive] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const firstSection = document.getElementById(sections[0].id);
      setVisible(firstSection ? window.scrollY >= firstSection.offsetTop - 200 : false);

      let current = "";
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && window.scrollY >= el.offsetTop - 160) current = s.id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 64, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-1.5 transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      {sections.map((s) => {
        const isActive = active === s.id;
        return (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className="flex items-center gap-2.5 group text-left"
            title={s.label}
          >
            {/* Number */}
            <span
              className="text-[9px] tabular-nums transition-all duration-300 font-medium"
              style={{
                color: isActive ? "#c9a840" : "rgba(255,255,255,0.18)",
                fontFamily: "var(--font-playfair)",
              }}
            >
              {s.n}
            </span>

            {/* Tick line */}
            <span
              className="block rounded-full transition-all duration-300"
              style={{
                width: isActive ? "20px" : "8px",
                height: "1px",
                background: isActive ? "#c9a840" : "rgba(255,255,255,0.15)",
              }}
            />

            {/* Label — only visible when active */}
            <span
              className="text-[9px] tracking-[0.2em] uppercase transition-all duration-300 whitespace-nowrap overflow-hidden"
              style={{
                color: isActive ? "#c9a840" : "transparent",
                maxWidth: isActive ? "80px" : "0px",
              }}
            >
              {s.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

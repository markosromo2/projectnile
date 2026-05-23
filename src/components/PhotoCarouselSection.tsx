"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/images/ct-player-hero.jpg",
    caption: "Cape Town Tigers · BAL",
    sub: "Six seasons. Same city. Same jersey.",
  },
  {
    src: "/images/ct-team-montage.jpg",
    caption: "The Roster",
    sub: "Built to compete from day one.",
  },
  {
    src: "/images/ct-tigers-team.png",
    caption: "Season 6",
    sub: "The full squad, Cape Town representation.",
  },
  {
    src: "/images/ct-paris-team.jpg",
    caption: "Paris · South African National Team",
    sub: "Cape Town players on the global stage.",
  },
];

export default function PhotoCarouselSection() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrev(current);
      setTransitioning(true);
      setCurrent((c) => (c + 1) % slides.length);
      setTimeout(() => { setPrev(null); setTransitioning(false); }, 900);
    }, 4500);
    return () => clearInterval(interval);
  }, [current]);

  const goTo = (i: number) => {
    if (i === current) return;
    setPrev(current);
    setTransitioning(true);
    setCurrent(i);
    setTimeout(() => { setPrev(null); setTransitioning(false); }, 900);
  };

  return (
    <section className="relative overflow-hidden" style={{ height: "72vh", minHeight: "480px", maxHeight: "760px", background: "#080d14" }}>

      {/* Slides */}
      {slides.map((s, i) => (
        <div
          key={s.src}
          className="absolute inset-0 transition-opacity duration-900"
          style={{ opacity: i === current ? 1 : 0, transitionDuration: "900ms" }}
        >
          <Image
            src={s.src}
            alt={s.caption}
            fill
            className="object-cover object-center"
            priority={i === 0}
          />
          {/* Cinematic overlay */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,13,20,0.85) 0%, rgba(8,13,20,0.3) 50%, rgba(8,13,20,0.45) 100%)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(8,13,20,0.5) 0%, transparent 60%)" }} />
        </div>
      ))}

      {/* Caption */}
      <div className="absolute bottom-0 left-0 right-0 z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-10">
        <div className="flex items-end justify-between">
          <div>
            <p
              className="text-white/40 text-[9px] tracking-[0.3em] uppercase mb-2 transition-opacity duration-500"
              style={{ opacity: transitioning ? 0 : 1 }}
            >
              {slides[current].sub}
            </p>
            <h3
              className="text-white text-2xl sm:text-3xl font-light transition-all duration-500"
              style={{ fontFamily: "var(--font-playfair)", opacity: transitioning ? 0 : 1, transform: transitioning ? "translateY(8px)" : "translateY(0)" }}
            >
              {slides[current].caption}
            </h3>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center gap-2.5 pb-1">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="transition-all duration-300"
                style={{
                  width: i === current ? "24px" : "6px",
                  height: "2px",
                  background: i === current ? "#c9a840" : "rgba(255,255,255,0.25)",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                }}
              />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}

"use client";
import Image from "next/image";

const photos = [
  { src: "/images/bal-court-logo.jpg",      alt: "BAL logo on court" },
  { src: "/images/ct-player-hero.jpg",      alt: "Cape Town Tigers player" },
  { src: "/images/ct-city-sunset.jpg",      alt: "Cape Town CBD at sunset" },
  { src: "/images/ct-paris-team.jpg",       alt: "Cape Town in Paris" },
  { src: "/images/ct-porsche-mountain.jpg", alt: "Cape Town road with Table Mountain" },
  { src: "/images/ct-team-montage.jpg",     alt: "Cape Town roster" },
  { src: "/images/ct-clifton-beach.jpg",    alt: "Clifton Beach, Cape Town" },
  { src: "/images/ct-tigers-team.png",      alt: "Cape Town Tigers team" },
  { src: "/images/ct-cbd-mountain.jpg",     alt: "Cape Town CBD and Table Mountain" },
];

const all = [...photos, ...photos];

export default function FilmStripSection() {
  return (
    <div className="overflow-hidden py-10" style={{ background: "#040d1c" }}>
      <div
        className="flex gap-3"
        style={{ animation: "marquee 56s linear infinite", width: "max-content", willChange: "transform" }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.animationPlayState = "paused"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.animationPlayState = "running"; }}
      >
        {all.map((p, i) => (
          <div
            key={i}
            className="relative shrink-0 overflow-hidden rounded-sm group"
            style={{ width: "300px", height: "340px" }}
          >
            <Image
              src={p.src}
              alt={p.alt}
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

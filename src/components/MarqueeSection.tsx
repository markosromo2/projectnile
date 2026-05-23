const items = [
  "6 Consecutive BAL Seasons",
  "4× South African National Champions",
  "3 BAL Finals Appearances",
  "Tier 1 Arena · 14,000 Capacity",
  "Cape Town — Africa's #1 Market",
  "Founded 2019 · Day-One Franchise",
  "Grand Arena @ GrandWest",
  "#1 GDP Per Capita · Sub-Saharan Africa",
  "Cape Town Tigers · Est. 2019",
  "Permanent Franchise Bid · 2026",
];

export default function MarqueeSection() {
  const all = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-white/[0.05] select-none" style={{ background: "#080d14" }}>
      <div className="py-3.5 flex" style={{ animation: "marquee 36s linear infinite" }}>
        {all.map((item, i) => (
          <div key={i} className="flex items-center shrink-0">
            <span className="text-white/38 text-[10px] tracking-[0.22em] uppercase font-light whitespace-nowrap px-7">
              {item}
            </span>
            <span className="text-[#c9a840]/45 text-[6px] shrink-0">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}

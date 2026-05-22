const partners = [
  { name: "NBA Africa",     role: "League Parent"          },
  { name: "BAL",            role: "Basketball Africa League" },
  { name: "Jordan Brand",   role: "Official Apparel"        },
  { name: "Canal+",         role: "Broadcast — Africa"      },
  { name: "ESPN",           role: "Broadcast — Global"      },
  { name: "Tencent",        role: "Digital / Streaming"     },
  { name: "Microsoft",      role: "Technology Partner"      },
  { name: "GrandWest Arena",role: "Venue Partner"           },
];

export default function CredibilityStrip() {
  return (
    <div className="border-y border-black/[0.06]" style={{ background: "#f5f7fa" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <span className="text-[#b0bec5] text-[9px] tracking-[0.35em] uppercase shrink-0">Partners &amp; Broadcast</span>
          <div className="h-4 w-px bg-black/10 hidden sm:block shrink-0" />
          <div className="flex flex-1 items-center justify-between gap-2 flex-wrap">
            {partners.map((p, i) => (
              <div key={p.name} className="flex items-center gap-4">
                <div className="flex flex-col items-center">
                  <span className="text-[#1a3a5a] text-[11px] font-semibold tracking-wide leading-none whitespace-nowrap">{p.name}</span>
                  <span className="text-[#b0bec5] text-[8px] tracking-[0.15em] uppercase mt-0.5 whitespace-nowrap">{p.role}</span>
                </div>
                {i < partners.length - 1 && (
                  <div className="h-5 w-px bg-black/[0.07] hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

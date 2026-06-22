"use client";
import { useState, useEffect } from "react";

const PASSWORD = "capetown26";
const STORAGE_KEY = "ct_access_v1";

export default function PasswordGate({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY) === "1") {
      setUnlocked(true);
    }
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (input === PASSWORD) {
      localStorage.setItem(STORAGE_KEY, "1");
      setUnlocked(true);
    } else {
      setError(true);
      setInput("");
      setTimeout(() => setError(false), 2000);
    }
  }

  if (!mounted) return null;
  if (unlocked) return <>{children}</>;

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 dot-grid overflow-hidden" style={{ background: "radial-gradient(ellipse 90% 70% at 50% 30%, #0b1322 0%, #070b14 60%, #05080f 100%)" }}>
      {/* Ambient aurora */}
      <div className="aurora" />
      <div className="grid-overlay" />

      <div className="relative z-10 w-full max-w-sm fade-up">
        <div className="glass grad-border px-8 py-12 sm:px-10 sm:py-14">
          {/* Gold mark */}
          <div className="mb-10 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-2xl border border-[#c9a840]/35 flex items-center justify-center mb-7 glow-gold" style={{ background: "linear-gradient(135deg, rgba(201,168,64,0.16), rgba(201,168,64,0.02))" }}>
              <div className="w-2.5 h-2.5 bg-[#c9a840] rounded-sm rotate-45" />
            </div>
            <h1 className="text-4xl text-white font-light tracking-tight mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
              Cape Town
            </h1>
            <p className="text-white/58 text-[11px] tracking-[0.3em] uppercase mt-1">BAL Permanent Team</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="password"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Access code"
              autoFocus
              className={`w-full bg-white/[0.06] border rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-white/52 focus:outline-none transition-all duration-300 backdrop-blur ${
                error ? "border-red-400/60" : "border-white/12 focus:border-[#c9a840]/60 focus:bg-white/[0.09] focus:shadow-[0_0_0_3px_rgba(201,168,64,0.12)]"
              }`}
            />
            {error && <p className="text-red-400/80 text-xs">Incorrect access code.</p>}
            <button
              type="submit"
              className="btn-shimmer w-full rounded-xl text-[#080d14] text-xs tracking-[0.2em] uppercase py-3.5 font-semibold transition-all duration-300 hover:brightness-110"
              style={{ background: "linear-gradient(135deg, #e8d08a 0%, #c9a840 100%)", boxShadow: "0 8px 30px -8px rgba(201,168,64,0.5)" }}
            >
              Access Materials
            </button>
          </form>
        </div>

        <p className="text-white/52 text-xs text-center mt-8 leading-relaxed">
          Authorised recipients only.<br />Contact paul@bragielbros.com for access.
        </p>
      </div>
    </div>
  );
}

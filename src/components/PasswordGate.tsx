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
    <div className="min-h-screen bg-[#080d14] flex flex-col items-center justify-center px-6 dot-grid">
      <div className="w-full max-w-xs">
        {/* Gold mark */}
        <div className="mb-12 flex flex-col items-center text-center">
          <div className="w-10 h-10 border border-[#c9a840]/30 flex items-center justify-center mb-8">
            <div className="w-2 h-2 bg-[#c9a840]" />
          </div>
          <h1 className="text-3xl text-white font-light tracking-tight mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
            Cape Town
          </h1>
          <p className="text-white/35 text-xs tracking-[0.25em] uppercase mt-1">BAL Permanent Team</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Access code"
            autoFocus
            className={`w-full bg-white/5 border px-4 py-3.5 text-sm text-white placeholder:text-white/25 focus:outline-none transition-colors ${
              error ? "border-red-400/60" : "border-white/10 focus:border-[#c9a840]/50"
            }`}
          />
          {error && <p className="text-red-400/80 text-xs">Incorrect access code.</p>}
          <button
            type="submit"
            className="w-full bg-[#c9a840] text-[#080d14] text-xs tracking-[0.2em] uppercase py-3.5 font-semibold hover:bg-[#d9bc62] transition-colors"
          >
            Access Materials
          </button>
        </form>

        <p className="text-white/20 text-xs text-center mt-10 leading-relaxed">
          Authorised recipients only.<br />Contact paul@bragielbros.com for access.
        </p>
      </div>
    </div>
  );
}

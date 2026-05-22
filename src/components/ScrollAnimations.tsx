"use client";
import { useEffect } from "react";

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function runCounter(el: HTMLElement) {
  const target = parseFloat(el.dataset.count!);
  const prefix = el.dataset.countPrefix ?? "";
  const suffix = el.dataset.countSuffix ?? "";
  const decimals = parseInt(el.dataset.countDecimals ?? "0");
  const duration = 1800;
  const start = performance.now();

  const tick = (now: number) => {
    const p = Math.min((now - start) / duration, 1);
    const val = easeOutCubic(p) * target;
    el.textContent = prefix + (decimals > 0 ? val.toFixed(decimals) : Math.floor(val).toString()) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function runBar(el: HTMLElement) {
  const pct = el.dataset.barPct!;
  requestAnimationFrame(() => {
    el.style.transition = "width 1.4s cubic-bezier(0.16, 1, 0.3, 1)";
    el.style.width = pct + "%";
  });
}

function runBarHeight(el: HTMLElement) {
  const pct = el.dataset.barHeight!;
  requestAnimationFrame(() => {
    el.style.transition = "height 1.4s cubic-bezier(0.16, 1, 0.3, 1)";
    el.style.height = pct + "%";
  });
}

export default function ScrollAnimations() {
  useEffect(() => {
    // ── Fade-up / stagger animations ─────────────────────────
    const fadeEls = document.querySelectorAll("[data-animate]");
    const fadeIO = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in-view"); fadeIO.unobserve(e.target); }
      }),
      { threshold: 0.07, rootMargin: "0px 0px -40px 0px" }
    );
    fadeEls.forEach((el) => fadeIO.observe(el));

    // ── Counter animations ────────────────────────────────────
    const counterEls = document.querySelectorAll<HTMLElement>("[data-count]");
    const counterIO = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { runCounter(e.target as HTMLElement); counterIO.unobserve(e.target); }
      }),
      { threshold: 0.5 }
    );
    counterEls.forEach((el) => counterIO.observe(el));

    // ── Bar width animations ──────────────────────────────────
    const barEls = document.querySelectorAll<HTMLElement>("[data-bar-pct]");
    barEls.forEach((el) => { el.style.width = "0%"; });
    const barIO = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { runBar(e.target as HTMLElement); barIO.unobserve(e.target); }
      }),
      { threshold: 0.2 }
    );
    barEls.forEach((el) => barIO.observe(el));

    // ── Bar height animations ─────────────────────────────────
    const barHEls = document.querySelectorAll<HTMLElement>("[data-bar-height]");
    barHEls.forEach((el) => { el.style.height = "0%"; });
    const barHIO = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { runBarHeight(e.target as HTMLElement); barHIO.unobserve(e.target); }
      }),
      { threshold: 0.2 }
    );
    barHEls.forEach((el) => barHIO.observe(el));

    // ── Magnetic buttons ──────────────────────────────────────
    const magneticEls = document.querySelectorAll<HTMLElement>(".btn-magnetic");
    const cleanups: (() => void)[] = [];
    magneticEls.forEach((el) => {
      const onMove = (e: MouseEvent) => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - (r.left + r.width / 2);
        const y = e.clientY - (r.top + r.height / 2);
        el.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px)`;
      };
      const onLeave = () => { el.style.transform = "translate(0,0)"; };
      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);
      cleanups.push(() => {
        el.removeEventListener("mousemove", onMove);
        el.removeEventListener("mouseleave", onLeave);
      });
    });

    return () => { fadeIO.disconnect(); counterIO.disconnect(); barIO.disconnect(); barHIO.disconnect(); cleanups.forEach(fn => fn()); };
  }, []);
  return null;
}

"use client";

import { useEffect } from "react";

/**
 * Adds `.in` to `.reveal` elements as they enter the viewport.
 * The hidden initial state is gated behind `.js-reveal` on <html>,
 * so content stays visible if JS never runs. Elements already in
 * view get `.in` before the gate engages, so they never flicker.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".reveal"));
    const vh = window.innerHeight;
    els.forEach((el) => {
      if (el.getBoundingClientRect().top < vh) el.classList.add("in");
    });
    document.documentElement.classList.add("js-reveal");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => {
      if (!el.classList.contains("in")) io.observe(el);
    });
    return () => io.disconnect();
  }, []);
  return null;
}

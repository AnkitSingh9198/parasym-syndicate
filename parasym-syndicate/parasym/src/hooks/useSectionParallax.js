import { useEffect } from "react";

export default function useSectionParallax() {
  useEffect(() => {
    let rafId;
    let targets = Array.from(document.querySelectorAll("[data-parallax]"));

    const refresh = () => {
      targets = Array.from(document.querySelectorAll("[data-parallax]"));
    };

    const update = () => {
      const vh = window.innerHeight || 1;
      targets.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const progress = (vh - rect.top) / (vh + rect.height);
        const clamped = Math.max(0, Math.min(1, progress));
        el.style.setProperty("--sectionProgress", clamped.toFixed(4));
      });
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      rafId = requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    };

    window.addEventListener("resize", refresh);
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("resize", refresh);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);
}

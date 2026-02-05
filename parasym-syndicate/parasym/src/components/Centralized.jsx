import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../style/centralized.module.css";
gsap.registerPlugin(ScrollTrigger);

export default function Centralized() {
  const ref = useRef();

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { x: -100, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 1.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.container}>
        <div className={styles.visual}>
          <div className={styles.circuit} />
          <div className={styles.chips}>
            <div className={styles.chip} data-idx="1">
              <div className={styles.chipTop} />
              <div className={styles.chipGlow} />
            </div>
            <div className={styles.chip} data-idx="2">
              <div className={styles.chipTop} />
              <div className={styles.chipGlow} />
            </div>
            <div className={styles.chip} data-idx="3">
              <div className={styles.chipTop} />
              <div className={styles.chipGlow} />
            </div>
          </div>
          <div className={styles.flowLines} />
        </div>

        <div className={styles.content}>
          <div className={styles.contentBackground} />
          <div className={styles.textLines} />
          <p className={styles.eyebrow}>CENTRALIZED EXCHANGES</p>
          <h2 className={styles.title}>Centralized Exchanges</h2>
          <p className={styles.copy}>
            Continuously integrating new exchanges. Specializing in
            market making and service-level agreements.
          </p>
          <div className={styles.logos}>
            <span>crypto.com</span>
            <span>gate.io</span>
            <span>kucoin</span>
            <span>binance</span>
            <span>bybit</span>
            <span>coinbase</span>
            <span>bitmart</span>
            <span>bitvavo</span>
          </div>
        </div>
      </div>
    </section>
  );
}

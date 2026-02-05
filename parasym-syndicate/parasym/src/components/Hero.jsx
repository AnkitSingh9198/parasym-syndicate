import { useEffect, useRef } from "react";
import styles from "../style/hero.module.css";
import heroAnimation from "./HeroAnimation";

export default function Hero() {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;
    heroAnimation(textRef);
  }, []);

  return (
    <section className={styles.hero} data-parallax>
      <div className={styles.heroBg}>
        <div className={styles.gridLayer} />
        <div className={styles.circuitLayer} />
        <div className={styles.flowLayer} />
        <div className={styles.sparkLayer} />
      </div>

      <div ref={textRef} className={styles.content}>
        <div className={styles.textLines} />
        <p className={styles.eyebrow}>WE ARE RAVEN</p>
        <h1 className={styles.title}>EMPOWERING LIQUID</h1>
        <h1 className={styles.title}>DIGITAL ASSETS</h1>
        <h1 className={styles.title}>MARKETS</h1>

        <div className={styles.about}>
          <p>
            Raven is a boutique proprietary trading firm providing
            liquidity and market-making across crypto, prediction
            markets, and electronic financial venues.
          </p>
          <span className={styles.scrollHint}>SCROLL TO LEARN MORE...</span>
        </div>
      </div>

      <div className={styles.heroChipWrap}>
        <div className={styles.heroChip}>
          <div className={styles.chipTop} />
          <div className={styles.chipPins} />
          <div className={styles.chipGlow} />
        </div>
      </div>
    </section>
  );
}


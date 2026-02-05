import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../style/about.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const ref = useRef();

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { y: 60, autoAlpha: 0 },
        {
          y: 0,
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
    <section ref={ref} className={styles.section} data-parallax>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textLines} />
          <p className={styles.eyebrow}>ABOUT US</p>
          <h2 className={styles.title}>About Us</h2>
          <p className={styles.copy}>
            Raven is a next generation algorithmic high-frequency trading
            firm that is focused on long-lasting partnerships and building
            the future of digital finance.
          </p>
          <p className={styles.copy}>
            By utilizing cutting-edge low-latency and high-throughput
            technologies, Raven plays a crucial role in market stability
            and efficiency.
          </p>
          <div className={styles.invested}>
            <span>INVESTED BY</span>
            <div className={styles.investedLogos}>
              <span>HACK VC</span>
              <span>WINTERMUTE</span>
            </div>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.circuit} />
          <div className={styles.flowLines} />
          <div className={styles.chip}>
            <div className={styles.chipTop} />
            <div className={styles.chipGlow} />
          </div>
        </div>
      </div>
    </section>
  );
}

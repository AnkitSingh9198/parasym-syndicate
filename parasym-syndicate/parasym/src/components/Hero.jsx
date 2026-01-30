import { Canvas } from "@react-three/fiber";
import styles from "../style/hero.module.css";
import HeroScene from "./HeroScene";
import useScrollProgress from "../hooks/useScrollProgress";

export default function Hero() {
  const scroll = useScrollProgress();

  return (
    <section className={styles.hero}>
      <Canvas
        className={styles.canvas}
        camera={{ position: [0, 1.2, 6], fov: 40 }}
      >
        <HeroScene scroll={scroll} />
      </Canvas>

      <div className={styles.text}>
        <h1>EMPOWERING LIQUID</h1>
        <h1>DIGITAL ASSETS</h1>
        <h1>MARKETS</h1>

        <div className={styles.about}>
          <span>WE ARE RAVEN</span>
          <p>
            Raven is a boutique proprietary trading firm providing
            liquidity and market-making across crypto, prediction
            markets, and electronic financial venues.
          </p>
        </div>
      </div>
    </section>
  );
}

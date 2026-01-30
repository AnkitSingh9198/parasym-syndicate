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
        camera={{ position: [0, 2.5, 10], fov: 45 }}
      >
        <HeroScene scroll={scroll} />
      </Canvas>

      <div className={styles.content}>
        <h1>SECURING</h1>
        <h1>DIGITAL</h1>
        <h1>INFRASTRUCTURE</h1>

        <div className={styles.about}>
          <span>WE ARE RAVEN</span>
          <p>
            Raven is a cyber-security firm protecting infrastructure,
            data, and digital assets across global networks.
          </p>
        </div>
      </div>
    </section>
  );
}

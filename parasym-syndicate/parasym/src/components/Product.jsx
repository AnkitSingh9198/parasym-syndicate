import styles from "../style/product.module.css";

const products = [
  {
    id: "sentinel",
    title: "Sentinel X",
    desc:
      "Provides early warning intelligence by detecting emerging geopolitical, cyber, economic, and strategic pressure before events materialize.",
  },
  {
    id: "lightbringer",
    title: "Lightbringer X",
    desc:
      "Conducts controlled adversary simulation and AI-assisted red teaming to identify real-world failure paths across systems, processes, and human behavior.",
  },
  {
    id: "gabrielle",
    title: "Gabrielle X",
    desc:
      "Ensures information integrity by detecting manipulated media, deepfake content, synthetic narratives, and coordinated disinformation campaigns.",
  },
  {
    id: "argus",
    title: "Argus X",
    desc:
      "Reconstructs illicit financial flows across banking systems and crypto networks, supporting AML, fraud detection, and corruption investigations.",
  },
  {
    id: "parasym",
    title: "Parasym OS",
    desc:
      "A unified operating environment for intelligence, cybersecurity, AI, and investigation.",
    coming: true,
  },
];

export default function Products() {
  return (
    <section className={styles.section} data-parallax>
      {/* BACKGROUND CIRCUIT */}
      <div className={styles.circuitBg}>
        <div className={styles.circuitLayer}></div>
        <div className={styles.flowLayer}></div>
      </div>

      {/* HEADER */}
      <div className={styles.header}>
        <h2>OUR PRODUCTS</h2>
        <p>CORE INTELLIGENCE CAPABILITIES</p>
      </div>

      {/* GRID */}
      <div className={styles.grid}>
        {products.map((item) => (
          <div key={item.id} className={styles.card}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            {item.coming && (
              <span className={styles.coming}>Coming Soon</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

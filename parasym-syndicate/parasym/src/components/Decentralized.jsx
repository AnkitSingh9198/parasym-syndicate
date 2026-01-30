import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Decentralized() {
  const ref = useRef();

  useEffect(() => {
    gsap.from(ref.current, {
      x: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: ref.current,
        start: "top 75%",
      },
    });
  }, []);

  return (
    <section ref={ref}>
      <h2>Decentralized Exchanges</h2>
      <p>Advanced strategies for on-chain liquidity.</p>
    </section>
  );
}

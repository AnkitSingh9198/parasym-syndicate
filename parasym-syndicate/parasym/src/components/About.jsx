import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const ref = useRef();

  useEffect(() => {
    gsap.from(ref.current, {
      y: 60,
      opacity: 0,
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section ref={ref}>
      <h2>About Us</h2>
      <p>
        We operate across centralized and decentralized markets,
        providing deep liquidity and efficient pricing.
      </p>
    </section>
  );
}

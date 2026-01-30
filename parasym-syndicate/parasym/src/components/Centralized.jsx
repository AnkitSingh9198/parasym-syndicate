import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Centralized() {
  const ref = useRef();

  useEffect(() => {
    gsap.from(ref.current, {
      x: -100,
      opacity: 0,
      scrollTrigger: {
        trigger: ref.current,
        start: "top 75%",
      },
    });
  }, []);

  return (
    <section ref={ref}>
      <h2>Centralized Exchanges</h2>
      <p>Market making and liquidity provision across CEXs.</p>
    </section>
  );
}

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Industry() {
  const ref = useRef();

  useEffect(() => {
    ScrollTrigger.create({
      trigger: ref.current,
      start: "top top",
      end: "+=100%",
      pin: true,
    });
  }, []);

  return (
    <section ref={ref}>
      <h2>Powering the Industry</h2>
    </section>
  );
}

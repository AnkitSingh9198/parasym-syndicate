import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhyUs() {
  useEffect(() => {
    gsap.from(".why", {
      y: 40,
      opacity: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".whySection",
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section className="whySection" data-parallax>
      <h2>Why Us</h2>
      <p className="why">Integrity</p>
      <p className="why">Transparency</p>
      <p className="why">Execution</p>
    </section>
  );
}

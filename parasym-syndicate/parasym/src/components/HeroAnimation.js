import gsap from "gsap";

export default function heroAnimation(ref) {
  gsap.from(ref.current.children, {
    y: 80,
    opacity: 0,
    duration: 1.2,
    stagger: 0.2,
    ease: "power4.out",
  });
}

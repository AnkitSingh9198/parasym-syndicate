import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function CoreOrb({ scroll }) {
  const orb = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    orb.current.rotation.y += 0.01;
    orb.current.scale.setScalar(1 + Math.sin(t * 2) * 0.08);
    orb.current.position.y = Math.sin(t) * 0.3 + scroll * 1.2;
  });

  return (
    <mesh ref={orb}>
      <icosahedronGeometry args={[1.4, 2]} />
      <meshStandardMaterial
        color="#00ffe1"
        emissive="#00ffe1"
        emissiveIntensity={1.5}
        metalness={0.8}
        roughness={0.25}
      />
    </mesh>
  );
}

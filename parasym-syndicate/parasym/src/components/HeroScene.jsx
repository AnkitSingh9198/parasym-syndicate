import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import GridPlane from "./GridPlane";
import DataFlow from "./DataFlow";
import CoreOrb from "./CoreOrb";

export default function HeroScene({ scroll }) {
  const group = useRef();
  const { camera } = useThree();

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    // Smooth camera motion (alive feeling)
    camera.position.x = Math.sin(t * 0.2) * 0.4;
    camera.position.y = 2.5 + scroll * 1.2;
    camera.lookAt(0, 0, 0);

    // Scene depth movement
    group.current.position.z = -scroll * 4;
  });

  return (
    <group ref={group}>
      {/* Lights */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 8, 5]} intensity={2} />
      <pointLight position={[-5, 2, -5]} intensity={1.5} color="#00ffe1" />

      {/* Layers */}
      <GridPlane scroll={scroll} />
      <DataFlow scroll={scroll} />
      <CoreOrb scroll={scroll} />
    </group>
  );
}

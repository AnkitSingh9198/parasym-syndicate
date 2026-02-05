import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import GridPlane from "./GridPlane";
import DataFlow from "./DataFlow";
import CoreOrb from "./CoreOrb";
import ChipCluster from "./ChipCluster";

export default function HeroScene({ scroll }) {
  const group = useRef();
  const { camera } = useThree();

  useFrame(() => {
    const safeScroll = Number.isFinite(scroll) ? scroll : 0;

    // Keep camera steady (no orbit/float), only respond to scroll depth.
    camera.position.x = 0;
    camera.position.y = 2.5 + safeScroll * 1.2;
    camera.lookAt(0, 0, 0);

    if (group.current) {
      group.current.position.z = -safeScroll * 4;
    }
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
      <ChipCluster scroll={scroll} />
      <CoreOrb scroll={scroll} />
    </group>
  );
}

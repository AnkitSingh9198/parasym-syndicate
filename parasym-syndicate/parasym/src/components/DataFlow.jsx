import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function DataFlow({ scroll }) {
  const group = useRef();

  const lines = useMemo(() => {
    return [...Array(40)].map((_, i) => {
      const geo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(-20, i * 0.15 - 3, -20),
        new THREE.Vector3(20, i * 0.15 - 3, 20),
      ]);
      return geo;
    });
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    group.current.children.forEach((line, i) => {
      line.position.z = ((t * 2 + i) % 20) - 10;
      line.material.opacity = 0.3 + Math.sin(t + i) * 0.2;
    });
  });

  return (
    <group ref={group}>
      {lines.map((geo, i) => (
        <line key={i} geometry={geo}>
          <lineBasicMaterial
            color="#00ffe1"
            transparent
            opacity={0.5}
          />
        </line>
      ))}
    </group>
  );
}

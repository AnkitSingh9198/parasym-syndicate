import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function CircuitField({ scroll }) {
  const lines = useRef([]);

  const paths = useMemo(() => {
    return [...Array(20)].map((_, i) => {
      const points = [
        new THREE.Vector3(-6, 0, i * 0.3 - 3),
        new THREE.Vector3(-2, 0, i * 0.3 - 3),
        new THREE.Vector3(0, 0, i * 0.3 - 3),
        new THREE.Vector3(2, 0, i * 0.3 - 3),
        new THREE.Vector3(6, 0, i * 0.3 - 3),
      ];
      return new THREE.BufferGeometry().setFromPoints(points);
    });
  }, []);

  useFrame(() => {
    lines.current.forEach((line) => {
      line.material.dashOffset =
        -scroll * 2; // ENERGY FLOW
    });
  });

  return (
    <>
      {paths.map((geo, i) => (
        <line
          key={i}
          geometry={geo}
          ref={(el) => (lines.current[i] = el)}
        >
          <lineDashedMaterial
            color="#ff6a00"
            linewidth={1}
            dashSize={0.2}
            gapSize={0.15}
            transparent
            opacity={0.8}
          />
        </line>
      ))}
    </>
  );
}

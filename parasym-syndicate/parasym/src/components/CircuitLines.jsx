import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function CircuitLines() {
  const group = useRef();

  const lines = useMemo(() => {
    const paths = [];

    for (let i = 0; i < 25; i++) {
      const points = [];
      let x = (Math.random() - 0.5) * 10;
      let z = (Math.random() - 0.5) * 10;

      for (let j = 0; j < 6; j++) {
        points.push(
          new THREE.Vector3(
            x,
            (Math.random() - 0.5) * 0.2,
            z
          )
        );

        if (Math.random() > 0.5) x += Math.random() * 1.5;
        else z += Math.random() * 1.5;
      }

      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      paths.push(geometry);
    }

    return paths;
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (group.current) {
      group.current.children.forEach((line, i) => {
        line.material.opacity = 0.3 + Math.sin(t * 2 + i) * 0.3;
      });
    }
  });

  return (
    <group ref={group}>
      {lines.map((geometry, i) => (
        <line key={i} geometry={geometry}>
          <lineBasicMaterial
            color="#ff6a00"
            transparent
            opacity={0.6}
          />
        </line>
      ))}
    </group>
  );
}

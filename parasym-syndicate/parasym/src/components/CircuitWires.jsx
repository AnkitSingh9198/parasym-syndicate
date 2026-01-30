import { useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

export default function CircuitWires({ scroll }) {
  const wires = useRef([]);

  const geometries = useMemo(() => {
    return [...Array(20)].map((_, i) => {
      const points = [
        new THREE.Vector3(-6, 0, i * 0.25 - 2.5),
        new THREE.Vector3(0, 0, i * 0.25 - 2.5),
        new THREE.Vector3(6, 0, i * 0.25 - 2.5),
      ];
      return new THREE.TubeGeometry(
        new THREE.CatmullRomCurve3(points),
        64,
        0.02,
        8,
        false
      );
    });
  }, []);

  useFrame(() => {
    wires.current.forEach((w) => {
      w.material.emissiveIntensity = 1 + scroll * 2;
    });
  });

  return (
    <>
      {geometries.map((geo, i) => (
        <mesh
          key={i}
          geometry={geo}
          ref={(el) => (wires.current[i] = el)}
        >
          <meshStandardMaterial
            color="#ff6a00"
            emissive="#ff6a00"
            emissiveIntensity={1}
          />
        </mesh>
      ))}
    </>
  );
}

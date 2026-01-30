import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { GlowMaterial } from "./GlowShader";

export default function ProceduralChip({ scroll }) {
  const chip = useRef();
  const glow = useRef();

  useFrame((state) => {
    chip.current.rotation.x = scroll * 0.4;
    chip.current.rotation.y = scroll * 0.6;
    chip.current.position.y = scroll * 0.5;
    glow.current.uniforms.uTime.value += 0.03;
  });

  return (
    <group ref={chip}>
      {/* CHIP BODY */}
      <mesh>
        <boxGeometry args={[2.4, 0.35, 2.4]} />
        <meshStandardMaterial
          color="#ffb347"
          metalness={0.9}
          roughness={0.25}
          emissive="#ff6a00"
          emissiveIntensity={0.6}
        />
      </mesh>

      {/* GLOW LOGO PLANE */}
      <mesh position={[0, 0.18, 0]}>
        <planeGeometry args={[1.2, 1.2]} />
        <shaderMaterial
          ref={glow}
          args={[GlowMaterial]}
          transparent
        />
      </mesh>
    </group>
  );
}

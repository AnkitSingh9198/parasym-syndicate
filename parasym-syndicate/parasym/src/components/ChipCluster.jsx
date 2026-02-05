import { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Chip({ position, rotation }) {
  const edges = useMemo(() => {
    const geo = new THREE.BoxGeometry(2.6, 0.25, 1.6);
    return new THREE.EdgesGeometry(geo);
  }, []);

  return (
    <group position={position} rotation={rotation}>
      <mesh>
        <boxGeometry args={[2.6, 0.25, 1.6]} />
        <meshStandardMaterial
          color="#0b121a"
          metalness={0.6}
          roughness={0.3}
          emissive="#0b1f2a"
          emissiveIntensity={0.4}
        />
      </mesh>
      <mesh position={[0, 0.18, 0]}>
        <boxGeometry args={[2.3, 0.05, 1.3]} />
        <meshStandardMaterial
          color="#0a1017"
          metalness={0.8}
          roughness={0.25}
          emissive="#00ffe1"
          emissiveIntensity={0.25}
        />
      </mesh>
      <lineSegments geometry={edges}>
        <lineBasicMaterial color="#00ffe1" transparent opacity={0.7} />
      </lineSegments>
    </group>
  );
}

function DataLink({ start, end, phase = 0 }) {
  const dashedLineRef = useRef();
  const dashedMaterialRef = useRef();
  const pulseRefs = useRef([]);

  const { curve, geometry } = useMemo(() => {
    const startVec = new THREE.Vector3(...start);
    const endVec = new THREE.Vector3(...end);
    const midVec = startVec
      .clone()
      .lerp(endVec, 0.5)
      .add(new THREE.Vector3(0, 0.5, 0.4));
    const curve = new THREE.CatmullRomCurve3([startVec, midVec, endVec]);
    const points = curve.getPoints(80);
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    return { curve, geometry };
  }, [start, end]);

  useEffect(() => {
    if (dashedLineRef.current) {
      dashedLineRef.current.computeLineDistances();
    }
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (dashedMaterialRef.current) {
      dashedMaterialRef.current.dashOffset = -t * 0.6 - phase;
    }

    pulseRefs.current.forEach((pulse, i) => {
      if (!pulse) return;
      const u = (t * 0.35 + phase + i * 0.25) % 1;
      const p = curve.getPointAt(u);
      pulse.position.copy(p);
      pulse.material.opacity = 0.5 + Math.sin(t * 3 + i) * 0.35;
    });
  });

  return (
    <group>
      <line geometry={geometry}>
        <lineBasicMaterial color="#00ffe1" transparent opacity={0.15} />
      </line>
      <line geometry={geometry} ref={dashedLineRef}>
        <lineDashedMaterial
          color="#00ffe1"
          dashSize={0.4}
          gapSize={0.3}
          transparent
          opacity={0.85}
          ref={dashedMaterialRef}
        />
      </line>
      {[0, 1, 2].map((i) => (
        <mesh
          key={i}
          ref={(el) => (pulseRefs.current[i] = el)}
          scale={1}
        >
          <sphereGeometry args={[0.07, 12, 12]} />
          <meshBasicMaterial
            color="#00ffe1"
            transparent
            opacity={0.8}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function ChipCluster({ scroll }) {
  const group = useRef();

  const chips = useMemo(
    () => [
      { position: [-3.2, 0, -1.6], rotation: [0, 0.25, 0] },
      { position: [0, 0.4, 0.2], rotation: [0, 0, 0] },
      { position: [3.2, 0, -1.6], rotation: [0, -0.25, 0] },
    ],
    []
  );

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const safeScroll = Number.isFinite(scroll) ? scroll : 0;
    if (!group.current) return;
    group.current.position.y =
      -0.6 + Math.sin(t * 0.6) * 0.08 + safeScroll * 0.9;
    group.current.rotation.y = Math.sin(t * 0.2) * 0.08;
  });

  return (
    <group ref={group} position={[0, -0.4, -1.5]}>
      {chips.map((chip, index) => (
        <Chip
          key={index}
          position={chip.position}
          rotation={chip.rotation}
        />
      ))}

      <DataLink start={chips[0].position} end={chips[1].position} phase={0} />
      <DataLink start={chips[1].position} end={chips[2].position} phase={0.33} />
      <DataLink start={chips[2].position} end={chips[0].position} phase={0.66} />
    </group>
  );
}

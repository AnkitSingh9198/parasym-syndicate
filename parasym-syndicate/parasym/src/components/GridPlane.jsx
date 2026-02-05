import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function GridPlane({ scroll }) {
  const grid = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const safeScroll = Number.isFinite(scroll) ? scroll : 0;
    if (!grid.current) return;
    grid.current.position.z = (t * 1.2 + safeScroll * 6) % 10;
  });

  return (
    <gridHelper
      ref={grid}
      args={[80, 80, "#00ffe1", "#0a2f2d"]}
      position={[0, -3, 0]}
    />
  );
}

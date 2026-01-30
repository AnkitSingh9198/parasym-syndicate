import ProceduralChip from "./ProceduralChip";
import CircuitWires from "./CircuitWires";

export default function HeroScene({ scroll }) {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 6, 5]} intensity={2} />
      <pointLight position={[-5, -5, -5]} intensity={1.5} />

      <CircuitWires scroll={scroll} />
      <ProceduralChip scroll={scroll} />
    </>
  );
}

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";

function AnimatedBox() {
  const meshRef = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    // Traslación senoidal en X
    meshRef.current.position.x = Math.sin(t) * 2;

    // Rotación constante
    meshRef.current.rotation.y += 1 * state.clock.getDelta();

    // Escalado oscilante
    const scale = 1 + 0.3 * Math.sin(t);
    meshRef.current.scale.set(scale, scale, scale);
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

export default function App() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <AnimatedBox />
      <OrbitControls />
    </Canvas>
  );
}

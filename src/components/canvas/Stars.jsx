import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Points,
  PointMaterial,
  Preload,
  OrbitControls,
} from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = () => {
  const Ref = useRef();
  const sphere = random.inSphere(new Float32Array(5001), { radius: 1.2 });

  useFrame((state, delto) => {
    Ref.current.rotation.x -= delto / 10;
    Ref.current.rotation.y -= delto / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={Ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};
const StarCanvas = () => {
  return (
    <div className="absolute inset-0 z-[-1] h-auto w-full">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};
export default StarCanvas;

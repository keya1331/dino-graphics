import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const DinoModel = () => {
  const { scene } = useGLTF("/assets/jw_alive_blue.glb");
  return <primitive object={scene} scale={0.5} position={[0, 0, 0]} />;
};

const IntroductionInteractiveElement = () => {
  return (
    <Canvas camera={{ position: [0, 1, 5] }}>
      <ambientLight intensity={0.7} />
      <directionalLight intensity={1} position={[5, 5, 5]} />
      <directionalLight intensity={0.5} position={[-5, -5, 5]} />

      <DinoModel />

      <OrbitControls enableZoom={true} />
    </Canvas>
  );
};

export default IntroductionInteractiveElement;
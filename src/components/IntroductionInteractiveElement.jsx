import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const DinoModel = () => {
  const { scene } = useGLTF("/assets/jw_alive_blue.glb");
  return <primitive object={scene} scale={1.4} position={[0, -3, 0]} />;
};

const IntroductionInteractiveElement = () => {
  return (
    <Canvas camera={{ position: [0, 1, 5] }}>
      <ambientLight intensity={0.7} />
      <directionalLight intensity={1.7} position={[0, 0, 5]} />
      <directionalLight intensity={1.7} position={[0, 5, 0]} />
      <DinoModel />
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
};

export default IntroductionInteractiveElement;
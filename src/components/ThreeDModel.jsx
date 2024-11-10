// components/ThreeDModel.jsx
import React from "react";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function ThreeDModel({ position }) {
  let model;
  try {
    model = useGLTF("/assets/dinosaur_bust.glb");
  } catch (error) {
    console.error("Failed to load GLB model:", error);
  }
  return (
    <Canvas camera={{ position: [0, 1, 5], fov: 40 }}>
      {" "}
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 5]} />
      <OrbitControls enableZoom={true} />{" "}
      <primitive object={model.scene} position={position} />
    </Canvas>
  );
}

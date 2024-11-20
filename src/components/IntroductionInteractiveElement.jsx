import React, { useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const DinoModel = () => {
  const { scene } = useGLTF("/assets/jw_alive_blue.glb");
  const modelRef = useRef();

  useEffect(() => {
    const animate = () => {
      if (modelRef.current) {
        modelRef.current.rotation.y += 0.005;
      }
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return <primitive object={scene} scale={1.4} position={[0, -3, 0]} ref={modelRef} />;
};

const IntroductionInteractiveElement = () => {
  return (
    <Canvas camera={{ position: [0, 2, 5] }}>
      <ambientLight intensity={0.7} />
      <directionalLight intensity={1.7} position={[0, 0, 5]} />
      <directionalLight intensity={1.7} position={[0, 5, 0]} />
      <DinoModel />
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
};

export default IntroductionInteractiveElement;

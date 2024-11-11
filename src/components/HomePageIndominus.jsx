import React, { useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const Model = () => {
  const { scene } = useGLTF("/assets/dinosaur_bust.glb");

  const box = new THREE.Box3().setFromObject(scene);
  const centroid = box.getCenter(new THREE.Vector3());
  scene.position.sub(centroid);

  return <primitive object={scene} scale={0.5} />;
};

const HomeIndominus = () => {
  const CameraSettings = () => {
    const { camera } = useThree();
    useEffect(() => {
      camera.position.set(10, 1, 2);
      camera.fov = 70;
      camera.near = 0.1;
      camera.far = 1000;
      camera.updateProjectionMatrix();
    }, [camera]);
    return null;
  };

  return (
    <Canvas>
      <CameraSettings />
      <OrbitControls target={[0, 0, 0]} /> 
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Model />
    </Canvas>
  );
};

export default HomeIndominus;
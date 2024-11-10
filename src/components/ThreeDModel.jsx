// ThreeDModel.jsx
import React, { useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const Model = () => {
  const { scene } = useGLTF("/assets/dinosaur_bust.glb");

  // Calculate the bounding box and set the center to the model's centroid
  const box = new THREE.Box3().setFromObject(scene);
  const centroid = box.getCenter(new THREE.Vector3());
  
  // Set the model's position to align with the centroid
  scene.position.sub(centroid);

  return <primitive object={scene} scale={0.5} />;
};

const ThreeDModel = () => {
  const CameraSettings = () => {
    const { camera } = useThree();
    useEffect(() => {
      camera.position.set(3, 2, 7); // Adjust for side angle view
      camera.zoom = 0.5;            // Zoom level
      camera.fov = 70;              // Field of view adjustment
      camera.near = 0.1;           // Near clipping plane
      camera.far = 1000;           // Far clipping plane
      camera.updateProjectionMatrix();
    }, [camera]);
    return null;
  };

  return (
    <Canvas>
      <CameraSettings />
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Model />
    </Canvas>
  );
};

export default ThreeDModel;
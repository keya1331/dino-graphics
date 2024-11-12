import React from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const GraphicsPrimitivesDinosaur = () => {
  const gltf = useLoader(GLTFLoader, "/assets/jwa_brachiosaurus.glb.glb");

  return (
    <primitive object={gltf.scene} scale={0.5} position={[0, 0, 0]} />
  );
};

export default GraphicsPrimitivesDinosaur;
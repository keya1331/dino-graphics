import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei";

const projections = [
  "Parallel",
  "Orthographic",
  "Isometric",
  "Dimetric",
  "Trimetric",
  "Oblique",
  "Cavalier",
  "Cabinet",
  "One-Point Perspective",
  "Two-Point Perspective",
  "Three-Point Perspective",
];

const ProjectionViewer = () => {
  const [selectedProjection, setSelectedProjection] = useState("Perspective");

  // Adjust camera settings based on the projection
  const getCameraProps = () => {
    switch (selectedProjection) {
      case "Parallel":
        return { position: [0, 5, 10], fov: 1 }; // Narrow field of view for parallel projection
      case "Orthographic":
        return { position: [0, 5, 10], fov: 10 }; // Simulate orthographic behavior
      case "Isometric":
        return { position: [5, 5, 5], fov: 50 }; // Isometric-like position
      case "Dimetric":
        return { position: [5, 7, 5], fov: 50 }; // Dimetric variation
      case "Trimetric":
        return { position: [5, 6, 7], fov: 50 }; // Trimetric variation
      case "Oblique":
        return { position: [7, 5, 5], fov: 75 }; // Slight oblique angle
      case "Cavalier":
        return { position: [5, 5, 7], fov: 50 }; // Cavalier projection
      case "Cabinet":
        return { position: [6, 5, 5], fov: 50 }; // Cabinet projection
      case "One-Point Perspective":
        return { position: [0, 0, 10], fov: 75 };
      case "Two-Point Perspective":
        return { position: [10, 0, 10], fov: 75 };
      case "Three-Point Perspective":
        return { position: [10, 10, 10], fov: 75 };
      default:
        return { position: [0, 5, 10], fov: 50 }; // Default to Perspective
    }
  };

  // Load the dinosaur model
  const Dinosaur = () => {
    const { scene } = useGLTF("public/assets/raptor_dinosaur_indoraptor.glb");
    return <primitive object={scene} scale={0.3} />;
  };

  return (
    <div className="projection-viewer bg-[#101010] text-white p-5 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Projection Viewer</h1>
      <div className="window-frame border-2 border-gray-700 rounded-lg overflow-hidden h-80 relative">
        <Canvas>
          <PerspectiveCamera makeDefault {...getCameraProps()} />
          <OrbitControls />
          <ambientLight intensity={0.5} />
          <Dinosaur />
        </Canvas>
      </div>
      <div className="projections mt-5 flex flex-wrap justify-center gap-3">
        {projections.map((projection) => (
          <button
            key={projection}
            onClick={() => setSelectedProjection(projection)}
            className={`px-4 py-2 text-sm rounded-md shadow-md ${
              selectedProjection === projection
                ? "bg-blue-500 text-white"
                : "bg-gray-700 text-gray-300"
            } hover:bg-blue-400`}
          >
            {projection}
          </button>
        ))}
      </div>
      <p className="text-center mt-3 text-gray-400">
        Current Projection: <span className="font-bold">{selectedProjection}</span>
      </p>
    </div>
  );
};

export default ProjectionViewer;

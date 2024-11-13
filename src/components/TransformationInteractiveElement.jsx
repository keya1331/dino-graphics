import React, { useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const TransformationsInteractiveElement = () => {
  const [scale, setScale] = useState(3);
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });
  const [translation, setTranslation] = useState({ x: 0, y: 0, z: 0 });

  const { scene } = useGLTF("/assets/jwa_brachiosaurus.glb");
  const controlsRef = useRef();

  // Set initial camera position and zoom closer to the model
  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.object.position.set(0, 5, 10);
      controlsRef.current.update();
    }
  }, []);

  const handleSliderChange = (event, type, axis) => {
    const value = parseFloat(event.target.value);
    if (type === "scale") {
      setScale(value);
    } else if (type === "rotation") {
      setRotation((prev) => ({ ...prev, [axis]: value }));
    } else if (type === "translation") {
      setTranslation((prev) => ({ ...prev, [axis]: value }));
    }
  };

  return (
    <div className="transformations-container w-full h-[80vh] flex flex-col items-center space-y-4 p-4 bg-gray-900 text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Interactive Transformations</h2>

      <div className="canvas-container w-full h-[65vh] bg-gray-800 rounded-lg overflow-hidden mb-4">
        <Canvas camera={{ position: [0, 2, 12] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={0.8} />
          <OrbitControls ref={controlsRef} />
          <group
            position={[translation.x, translation.y, translation.z]}
            rotation={[
              rotation.x * (Math.PI / 180),
              rotation.y * (Math.PI / 180),
              rotation.z * (Math.PI / 180),
            ]}
            scale={[scale, scale, scale]}
          >
            <primitive object={scene} />
          </group>
        </Canvas>
      </div>

      <div className="controls-container w-full flex flex-col space-y-2 items-center">
        <div className="slider-group flex flex-col items-center w-full">
          <label className="text-lg font-medium mb-1">Scale</label>
          <input
            type="range"
            min="1"
            max="10"
            step="0.1"
            value={scale}
            onChange={(e) => handleSliderChange(e, "scale")}
            className="slider w-4/5 bg-gray-700 rounded-lg appearance-none h-2 cursor-pointer"
          />
          <span>{scale.toFixed(2)}</span>
        </div>

        <div className="slider-group flex flex-col items-center w-full">
          <label className="text-lg font-medium mb-1">Rotation (X, Y, Z)</label>
          {["x", "y", "z"].map((axis) => (
            <div key={axis} className="flex items-center space-x-2 w-4/5 mb-2">
              <span className="uppercase">{axis}:</span>
              <input
                type="range"
                min="-360"
                max="360"
                step="1"
                value={rotation[axis]}
                onChange={(e) => handleSliderChange(e, "rotation", axis)}
                className="slider w-full bg-gray-700 rounded-lg appearance-none h-2 cursor-pointer"
              />
              <span>{rotation[axis].toFixed(1)}°</span>
            </div>
          ))}
        </div>

        <div className="slider-group flex flex-col items-center w-full">
          <label className="text-lg font-medium mb-1">Translation (X, Y, Z)</label>
          {["x", "y", "z"].map((axis) => (
            <div key={axis} className="flex items-center space-x-2 w-4/5 mb-2">
              <span className="uppercase">{axis}:</span>
              <input
                type="range"
                min="-10"
                max="10"
                step="0.1"
                value={translation[axis]}
                onChange={(e) => handleSliderChange(e, "translation", axis)}
                className="slider w-full bg-gray-700 rounded-lg appearance-none h-2 cursor-pointer"
              />
              <span>{translation[axis].toFixed(2)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransformationsInteractiveElement;
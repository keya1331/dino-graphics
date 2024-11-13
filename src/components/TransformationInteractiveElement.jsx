import React, { useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const TransformationsInteractiveElement = () => {
  const [scale, setScale] = useState(1);
  const [scaleX, setScaleX] = useState(1);
  const [scaleY, setScaleY] = useState(1);
  const [scaleZ, setScaleZ] = useState(1);

  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });
  const [translation, setTranslation] = useState({ x: 0, y: 0, z: 0 });
  const [shear, setShear] = useState({ x: 0, y: 0, z: 0 });
  const [reflection, setReflection] = useState({ x: 1, y: 1, z: 1 });

  const { scene } = useGLTF("/assets/jwa_therizinosaurus.glb");
  const controlsRef = useRef();

  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.object.position.set(0, 10, 20);
      controlsRef.current.update();
    }
  }, []);

  const handleSliderChange = (event, type, axis) => {
    const value = parseFloat(event.target.value);
    if (type === "scale") {
      setScale(value);
      setScaleX(value);
      setScaleY(value);
      setScaleZ(value);
    } else if (type === "scaleIndividual") {
      if (axis === "x") setScaleX(value);
      if (axis === "y") setScaleY(value);
      if (axis === "z") setScaleZ(value);
    } else if (type === "rotation") {
      setRotation((prev) => ({ ...prev, [axis]: value }));
    } else if (type === "translation") {
      setTranslation((prev) => ({ ...prev, [axis]: value }));
    } else if (type === "shear") {
      setShear((prev) => ({ ...prev, [axis]: value }));
    } else if (type === "reflection") {
      setReflection((prev) => ({ ...prev, [axis]: value }));
    }
  };

  const handleReset = () => {
    setScale(1);
    setScaleX(1);
    setScaleY(1);
    setScaleZ(1);
    setRotation({ x: 0, y: 0, z: 0 });
    setTranslation({ x: 0, y: 0, z: 0 });
    setShear({ x: 0, y: 0, z: 0 });
    setReflection({ x: 1, y: 1, z: 1 });
  };

  // Apply shear using a transformation matrix
  const applyShear = (shearValues) => {
    const matrix = new THREE.Matrix4();
    matrix.set(
      1, shearValues.x, shearValues.y, 0,
      shearValues.x, 1, shearValues.z, 0,
      shearValues.y, shearValues.z, 1, 0,
      0, 0, 0, 1
    );
    return matrix;
  };

  // Apply reflection by scaling the model by -1 along the selected axis
  const applyReflection = (reflectionValues) => {
    const scale = new THREE.Vector3(
      reflectionValues.x,
      reflectionValues.y,
      reflectionValues.z
    );
    return scale;
  };

  return (
    <div className="transformations-container w-full h-screen flex flex-col items-center bg-gray-900 text-white p-6">
      <h2 className="text-3xl font-light mb-8">Interactive Transformations</h2>

      <div className="canvas-container w-[80vw] max-w-[1000px] h-[60vh] bg-gray-800 rounded-lg overflow-hidden mb-6">
        <Canvas camera={{ position: [0, 10, 20] }}>
          <ambientLight intensity={0.3} />
          <directionalLight position={[10, 10, 10]} intensity={0.6} castShadow />
          <directionalLight position={[-10, 10, -10]} intensity={0.4} />
          <spotLight position={[0, 20, 10]} angle={0.3} penumbra={1} intensity={1} castShadow />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          <pointLight position={[10, -10, 10]} intensity={0.5} />
          <OrbitControls ref={controlsRef} />
          <group
            position={[translation.x, translation.y, translation.z]}
            rotation={[
              rotation.x * (Math.PI / 180),
              rotation.y * (Math.PI / 180),
              rotation.z * (Math.PI / 180),
            ]}
            scale={[scaleX * scale, scaleY * scale, scaleZ * scale]}
            matrixAutoUpdate={false}
            matrix={applyShear(shear)}
          >
            <primitive object={scene} scale={applyReflection(reflection)} />
          </group>
        </Canvas>
      </div>

      <div className="controls-container w-[80vw] max-w-[1000px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
        {/* Scale Controls */}
        <div className="slider-group flex flex-col items-center">
          <label className="text-xs font-light text-gray-400 mb-2">Scale</label>
          <input
            type="range"
            min="0.1"
            max="20"
            step="0.1"
            value={scale}
            onChange={(e) => handleSliderChange(e, "scale")}
            className="slider w-24 bg-gray-600 rounded-full appearance-none h-1 cursor-pointer transition-all hover:bg-gray-500 focus:outline-none"
          />
          <span className="text-xs">{scale.toFixed(2)}</span>
        </div>

        {/* Individual Scale Controls */}
        {["x", "y", "z"].map((axis) => (
          <div key={axis} className="slider-group flex flex-col items-center">
            <label className="text-xs font-light text-gray-400 mb-2">{axis.toUpperCase()} Scale</label>
            <input
              type="range"
              min="0.1"
              max="20"
              step="0.1"
              value={axis === "x" ? scaleX : axis === "y" ? scaleY : scaleZ}
              onChange={(e) => handleSliderChange(e, "scaleIndividual", axis)}
              className="slider w-24 bg-gray-600 rounded-full appearance-none h-1 cursor-pointer transition-all hover:bg-gray-500 focus:outline-none"
            />
            <span className="text-xs">
              {(axis === "x" ? scaleX : axis === "y" ? scaleY : scaleZ).toFixed(2)}
            </span>
          </div>
        ))}

        {/* Rotation Controls */}
        {["x", "y", "z"].map((axis) => (
          <div key={axis} className="slider-group flex flex-col items-center">
            <label className="text-xs font-light text-gray-400 mb-2">{axis.toUpperCase()} Rotation</label>
            <input
              type="range"
              min="-360"
              max="360"
              step="1"
              value={rotation[axis]}
              onChange={(e) => handleSliderChange(e, "rotation", axis)}
              className="slider w-24 bg-gray-600 rounded-full appearance-none h-1 cursor-pointer transition-all hover:bg-gray-500 focus:outline-none"
            />
            <span className="text-xs">{rotation[axis].toFixed(1)}°</span>
          </div>
        ))}

        {/* Translation Controls */}
        {["x", "y", "z"].map((axis) => (
          <div key={axis} className="slider-group flex flex-col items-center">
            <label className="text-xs font-light text-gray-400 mb-2">{axis.toUpperCase()} Translation</label>
            <input
              type="range"
              min="-10"
              max="10"
              step="0.1"
              value={translation[axis]}
              onChange={(e) => handleSliderChange(e, "translation", axis)}
              className="slider w-24 bg-gray-600 rounded-full appearance-none h-1 cursor-pointer transition-all hover:bg-gray-500 focus:outline-none"
            />
            <span className="text-xs">{translation[axis].toFixed(2)}</span>
          </div>
        ))}

        {/* Shear Controls */}
        {["x", "y", "z"].map((axis) => (
          <div key={axis} className="slider-group flex flex-col items-center">
            <label className="text-xs font-light text-gray-400 mb-2">{axis.toUpperCase()} Shear</label>
            <input
              type="range"
              min="-5"
              max="5"
              step="0.1"
              value={shear[axis]}
              onChange={(e) => handleSliderChange(e, "shear", axis)}
              className="slider w-24 bg-gray-600 rounded-full appearance-none h-1 cursor-pointer transition-all hover:bg-gray-500 focus:outline-none"
            />
            <span className="text-xs">{shear[axis].toFixed(2)}</span>
          </div>
        ))}

        {/* Reflection Controls */}
        {["x", "y", "z"].map((axis) => (
          <div key={axis} className="slider-group flex flex-col items-center">
            <label className="text-xs font-light text-gray-400 mb-2">{axis.toUpperCase()} Reflection</label>
            <select
              value={reflection[axis]}
              onChange={(e) => handleSliderChange(e, "reflection", axis)}
              className="select w-24 bg-gray-600 rounded-md text-xs p-1 text-gray-200 focus:outline-none"
            >
              <option value={1}>Normal</option>
              <option value={-1}>Inverted</option>
            </select>
          </div>
        ))}
      </div>

      <button
        onClick={handleReset}
        className="reset-btn mt-6 px-6 py-3 text-sm bg-gray-600 text-white rounded-md hover:bg-gray-500 transition-colors"
      >
        Reset
      </button>
    </div>
  );
};

export default TransformationsInteractiveElement;
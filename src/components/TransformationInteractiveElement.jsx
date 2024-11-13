import React, { useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const TransformationsInteractiveElement = () => {
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });
  const [translation, setTranslation] = useState({ x: 0, y: 0, z: 0 });
  const [shear, setShear] = useState({ x: 1, y: 1, z: 1 });
  const [mode, setMode] = useState(null);
  const [axis, setAxis] = useState(null); 

  const { scene } = useGLTF('/assets/jwa_brachiosaurus.glb');
  const controlsRef = useRef();

  const handleKeyDown = (event) => {
    if (event.key === 'g' || event.key === 'G') {
      setMode('translate');
      setAxis(null);
    } else if (event.key === 's' || event.key === 'S') {
      setMode('scale');
    } else if (event.key === 'r' || event.key === 'R') {
      setMode('rotate');
    } else if (mode === 'translate' && ['x', 'y', 'z'].includes(event.key)) {
      setAxis(event.key);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mode]);

  const handleSliderChange = (event, type, axis) => {
    const value = event.target.value;
    if (type === 'scale') {
      setScale(value);
    } else if (type === 'rotation') {
      setRotation((prev) => ({ ...prev, [axis]: value }));
    } else if (type === 'translation') {
      setTranslation((prev) => ({ ...prev, [axis]: value }));
    } else if (type === 'shear') {
      setShear((prev) => ({ ...prev, [axis]: value }));
    }
  };

  return (
    <div className="transformations-container w-full h-full flex flex-col items-center space-y-6">
      <h2 className="text-xl font-semibold text-center">Interactive Transformations</h2>

      <div className="controls-container space-y-4">
        <div className="flex space-x-4">
          <div>
            <label className="text-white">Scale</label>
            <input
              type="range"
              min="0.1"
              max="3"
              step="0.1"
              value={scale}
              onChange={(e) => handleSliderChange(e, 'scale')}
              className="slider"
            />
            <span className="text-white">{scale.toFixed(2)}</span>
          </div>
          
          <div>
            <label className="text-white">Rotation (X, Y, Z)</label>
            <div className="space-x-2">
              {['x', 'y', 'z'].map((axis) => (
                <div key={axis}>
                  <input
                    type="range"
                    min="-180"
                    max="180"
                    step="1"
                    value={rotation[axis]}
                    onChange={(e) => handleSliderChange(e, 'rotation', axis)}
                    className="slider"
                  />
                  <span className="text-white">{rotation[axis].toFixed(1)}°</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex space-x-4">
          <div>
            <label className="text-white">Translation (X, Y, Z)</label>
            <div className="space-x-2">
              {['x', 'y', 'z'].map((axis) => (
                <div key={axis}>
                  <input
                    type="range"
                    min="-5"
                    max="5"
                    step="0.1"
                    value={translation[axis]}
                    onChange={(e) => handleSliderChange(e, 'translation', axis)}
                    className="slider"
                  />
                  <span className="text-white">{translation[axis].toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <label className="text-white">Shear (X, Y, Z)</label>
            <div className="space-x-2">
              {['x', 'y', 'z'].map((axis) => (
                <div key={axis}>
                  <input
                    type="range"
                    min="0.1"
                    max="2"
                    step="0.1"
                    value={shear[axis]}
                    onChange={(e) => handleSliderChange(e, 'shear', axis)}
                    className="slider"
                  />
                  <span className="text-white">{shear[axis].toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="canvas-container w-full h-[60vh] bg-gray-800">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} />
          <OrbitControls ref={controlsRef} />
          <group
            position={[
              translation.x + (axis === 'x' ? 1 : 0),
              translation.y + (axis === 'y' ? 1 : 0),
              translation.z + (axis === 'z' ? 1 : 0),
            ]}
            rotation={[rotation.x, rotation.y, rotation.z]}
            scale={[scale * shear.x, scale * shear.y, scale * shear.z]}
          >
            <primitive object={scene} />
          </group>
        </Canvas>
      </div>
    </div>
  );
};

export default TransformationsInteractiveElement;
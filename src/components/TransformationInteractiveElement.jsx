import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const TransformationsInteractiveElement = () => {
  const [scale, setScale] = useState({ x: 1, y: 1, z: 1 });
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });
  const [translation, setTranslation] = useState({ x: 0, y: 0, z: 0 });
  const [shearing, setShearing] = useState({ x: 1, y: 1, z: 1 });
  const [axis, setAxis] = useState("x");

  const { scene, loading } = useGLTF("/assets/jwa_therizinosaurus.glb");

  if (loading) return <div>Loading...</div>;

  const handleSliderChange = (e, type) => {
    const value = parseFloat(e.target.value);
    switch (type) {
      case "scale":
        setScale((prev) => ({ ...prev, [axis]: value }));
        break;
      case "rotation":
        setRotation((prev) => ({ ...prev, [axis]: value }));
        break;
      case "translation":
        setTranslation((prev) => ({ ...prev, [axis]: value }));
        break;
      case "shearing":
        setShearing((prev) => ({ ...prev, [axis]: value }));
        break;
      default:
        break;
    }
  };

  const handleAxisChange = (newAxis) => {
    setAxis(newAxis);
  };

  return (
    <div className="flex w-full h-full bg-gray-900 text-gray-100">
      <div className="w-1/4 h-full flex flex-col justify-start px-4 space-y-6">
        <h2 className="text-lg font-semibold text-blue-500">Transformations</h2>

        <div className="flex flex-col space-y-2">
          <label className="text-sm">Scale</label>
          <input
            type="range"
            min="0.1"
            max="3"
            step="0.1"
            value={scale[axis]}
            onChange={(e) => handleSliderChange(e, "scale")}
            className="h-1 w-48 rounded-full bg-gray-700 focus:outline-none appearance-none accent-blue-500"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm">Rotation</label>
          <input
            type="range"
            min="0"
            max="360"
            step="1"
            value={rotation[axis]}
            onChange={(e) => handleSliderChange(e, "rotation")}
            className="h-1 w-48 rounded-full bg-gray-700 focus:outline-none appearance-none accent-blue-500"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm">Translation</label>
          <input
            type="range"
            min="-10"
            max="10"
            step="0.1"
            value={translation[axis]}
            onChange={(e) => handleSliderChange(e, "translation")}
            className="h-1 w-48 rounded-full bg-gray-700 focus:outline-none appearance-none accent-blue-500"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm">Shearing</label>
          <input
            type="range"
            min="0.1"
            max="3"
            step="0.1"
            value={shearing[axis]}
            onChange={(e) => handleSliderChange(e, "shearing")}
            className="h-1 w-48 rounded-full bg-gray-700 focus:outline-none appearance-none accent-blue-500"
          />
        </div>

        <div className="flex space-x-1">
          {["x", "y", "z"].map((ax) => (
            <button
              key={ax}
              onClick={() => handleAxisChange(ax)}
              className={`px-3 py-1 rounded-full ${
                axis === ax ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300"
              } hover:bg-blue-500`}
            >
              {ax.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="w-3/4 h-full">
        <Canvas camera={{ position: [7, 2, 5], fov: 70 }}>
          <group position={[0, 0, 0]}>
            <line>
              <bufferGeometry>
                <bufferAttribute
                  attach="attributes-position"
                  count={2}
                  itemSize={3}
                  array={new Float32Array([0, 0, 0, 5, 0, 0])}
                />
              </bufferGeometry>
              <lineBasicMaterial color="red" />
            </line>
            <line>
              <bufferGeometry>
                <bufferAttribute
                  attach="attributes-position"
                  count={2}
                  itemSize={3}
                  array={new Float32Array([0, 0, 0, 0, 5, 0])}
                />
              </bufferGeometry>
              <lineBasicMaterial color="green" />
            </line>
            <line>
              <bufferGeometry>
                <bufferAttribute
                  attach="attributes-position"
                  count={2}
                  itemSize={3}
                  array={new Float32Array([0, 0, 0, 0, 0, 5])}
                />
              </bufferGeometry>
              <lineBasicMaterial color="blue" />
            </line>
          </group>

          <group
            position={[translation.x, translation.y, translation.z]}
            rotation={[rotation.x, rotation.y, rotation.z]}
            scale={[scale.x * shearing.x, scale.y * shearing.y, scale.z * shearing.z]}
          >
            <primitive object={scene} />
          </group>

          <ambientLight intensity={0.7} />
          <directionalLight intensity={1.7} position={[0, 0, 5]} />
          <directionalLight intensity={1.7} position={[0, 5, 0]} />

          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
};

export default TransformationsInteractiveElement;
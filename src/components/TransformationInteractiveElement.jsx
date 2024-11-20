import { useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const TransformationsInteractiveElement = () => {
  const [scale, setScale] = useState({ x: 1, y: 1, z: 1 });
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });
  const [translation, setTranslation] = useState({ x: 0, y: 0, z: 0 });
  const [axis, setAxis] = useState("x");
  const [uniformScale, setUniformScale] = useState(false);

  const { scene, loading } = useGLTF("/assets/jwa_therizinosaurus.glb");
  const modelRef = useRef();

  if (loading) return <div>Loading...</div>;

  const handleSliderChange = (e, type) => {
    const value = parseFloat(e.target.value);
    switch (type) {
      case "scale":
        if (uniformScale) {
          setScale({ x: value, y: value, z: value });
        } else {
          setScale((prev) => ({ ...prev, [axis]: value }));
        }
        break;
      case "rotation":
        setRotation((prev) => ({
          ...prev,
          [axis]: (value * Math.PI) / 180, // Convert to radians
        }));
        break;
      case "translation":
        setTranslation((prev) => ({ ...prev, [axis]: value }));
        break;
      default:
        break;
    }
  };

  const handleAxisChange = (newAxis) => {
    setAxis(newAxis);
  };

  const handleReset = () => {
    setScale({ x: 1, y: 1, z: 1 });
    setRotation({ x: 0, y: 0, z: 0 });
    setTranslation({ x: 0, y: 0, z: 0 });
    setUniformScale(false);
    setAxis("x");
  };

  return (
    <div className="flex w-full h-full bg-gray-900 text-gray-100">
      <div className="w-1/3 h-full flex flex-col justify-start px-6 space-y-6">
        <h2 className="text-lg font-semibold text-blue-500">Transformations</h2>

        <div className="flex items-center space-x-2">
          <label className="text-sm">Uniform Scale</label>
          <input
            type="checkbox"
            checked={uniformScale}
            onChange={() => setUniformScale(!uniformScale)}
            className="accent-blue-500"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm">Scale</label>
          <input
            type="range"
            min="0.1"
            max="3"
            step="0.1"
            value={uniformScale ? scale.x : scale[axis]}
            onChange={(e) => handleSliderChange(e, "scale")}
            className="h-1 w-full max-w-[350px] rounded-full bg-gray-700 focus:outline-none appearance-none accent-blue-500"
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
            className="h-1 w-full max-w-[350px] rounded-full bg-gray-700 focus:outline-none appearance-none accent-blue-500"
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
            className="h-1 w-full max-w-[350px] rounded-full bg-gray-700 focus:outline-none appearance-none accent-blue-500"
          />
        </div>

        <div className="flex space-x-1">
          {["x", "y", "z"].map((ax) => (
            <button
              key={ax}
              onClick={() => handleAxisChange(ax)}
              className={`px-3 py-1 rounded-full ${
                axis === ax
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300"
              } hover:bg-blue-500`}
            >
              {ax.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="mt-4">
          <button
            onClick={handleReset}
            className="px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-500"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="w-2/3 h-[calc(100%-50px)]">
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
            scale={[scale.x, scale.y, scale.z]}
            ref={modelRef}
          >
            <primitive object={scene} />
          </group>

          <gridHelper
            args={[1000, 1000, 0xaaaaaa, 0x555555]}
            position={[0, 0, 0]}
          />

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

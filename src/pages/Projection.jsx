import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, OrthographicCamera } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { motion } from "framer-motion"; 
import SectionPage from "../components/TemplatePageHeader";
import { useLoader } from "@react-three/fiber";

function DinoModel() {
  const gltf = useLoader(GLTFLoader, "/assets/jwa_indominus_rex_gen_2.glb");
  return <primitive object={gltf.scene} scale={50} position={[3, 0, 0]} />;
}

const ProjectionTheory = [
  {
    type: "Orthographic",
    theory: "An orthographic projection presents objects without perspective distortion, commonly used in engineering and architectural drawings.",
    example: "In a dinosaur museum model, orthographic projection lets viewers examine the dinosaur without size distortion from any angle.",
    image: "public/assets/orthographic.jpg"
  },
  {
    type: "Isometric",
    theory: "Isometric projection is a type of orthographic projection where the object is rotated to reveal multiple sides, keeping proportions equal along three axes.",
    example: "Imagine a dinosaur skeleton on display; isometric views show the 3D structure evenly, perfect for viewing all bones without distortion.",
    image: "public/assets/isometric-example.jpg"
  },
  {
    type: "Dimetric",
    theory: "Dimetric projection has two of its three axes equally foreshortened, creating a slightly varied view compared to isometric.",
    example: "For a dinosaur model in dimetric view, two axes are scaled equally, enhancing one aspect of the dinosaur's structure.",
    image: "public/assets/dimetric-example.jpg"
  },
  {
    type: "Trimetric",
    theory: "Trimetric projection has all three axes foreshortened at different scales, offering the most realistic orthogonal view.",
    example: "In a dinosaur trimetric view, each axis gives a distinct scaling, presenting a more lifelike model.",
    image: "public/assets/trimetric-example.jpg"
  },
  {
    type: "Axonometric",
    theory: "Axonometric projection represents three dimensions without perspective, commonly used in video games and technical illustrations.",
    example: "In a dinosaur park map, axonometric projection allows a bird's eye view of the park layout without perspective foreshortening.",
    image: "public/assets/axonometric-example.jpg"
  },
  {
    type: "Oblique",
    theory: "Oblique projection is where one face is shown head-on, while the third dimension is represented at an angle.",
    example: "In paleoart, oblique views are used to show dinosaurs with depth, making them appear more realistic from a side view.",
    image: "public/assets/oblique-example.jpg"
  },
  {
    type: "Cavalier",
    theory: "Cavalier projection maintains scale along all axes, where the depth is represented without reduction, giving a more dramatic angle.",
    example: "Imagine a cavalier view of a dinosaur skeleton in a display case, with depth unaltered to capture all bones distinctly.",
    image: "public/assets/cavalier-example.jpg"
  },
  {
    type: "Cabinet",
    theory: "Cabinet projection reduces the scale along the depth axis, providing a more realistic perspective than cavalier.",
    example: "A cabinet view of a dinosaur fossil exhibit reduces the depth axis, offering a more lifelike impression.",
    image: "public/assets/cabinet-example.jpg"
  },
  {
    type: "One-Point Perspective",
    theory: "One-point perspective uses a single vanishing point, typically for interiors and road views.",
    example: "Imagine walking through a dinosaur exhibit hallway with rows of skeletons; this perspective emphasizes depth.",
    image: "public/assets/one-point-example.jpg"
  },
  {
    type: "Two-Point Perspective",
    theory: "Two-point perspective has two vanishing points, often used for viewing corners of buildings or objects.",
    example: "A two-point perspective of a dinosaur museum corner view shows depth on two walls, enhancing realism.",
    image: "public/assets/two-point-example.jpg"
  },
  {
    type: "Three-Point Perspective",
    theory: "Three-point perspective adds a third vanishing point, often for tall objects viewed from above or below.",
    example: "A three-point view of a towering dinosaur skeleton gives a dramatic upward perspective, emphasizing height.",
    image: "public/assets/three-point-example.jpg"
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Projection = () => {
  const [projection, setProjection] = useState("Perspective");

  const renderCamera = () => {
    switch (projection) {
      case "Orthographic":
        return <OrthographicCamera makeDefault zoom={30} position={[5, 5, 5]} near={0.1} far={1000} />;
      case "Isometric":
        return <OrthographicCamera makeDefault zoom={40} position={[5, 5, 5]} rotation={[-Math.PI / 6, Math.PI / 4, 0]} near={0.1} far={1000} />;
      case "Dimetric":
          return <OrthographicCamera makeDefault zoom={40} position={[5, 5, 5]} rotation={[-Math.PI / 8, Math.PI / 5, 0]} near={0.1} far={1000} />;
      case "Trimetric":
          return <OrthographicCamera makeDefault zoom={40} position={[5, 5, 5]} rotation={[-Math.PI / 10, Math.PI / 6, 0]} near={0.1} far={1000} />;
      case "Axonometric":
        return <OrthographicCamera makeDefault zoom={40} position={[5, 5, 5]} rotation={[-Math.PI / 8, Math.PI / 4, 0]} near={0.1} far={1000} />;
      case "Oblique":
        return <PerspectiveCamera makeDefault fov={75} position={[7, 5, 3]} rotation={[0.3, 0.3, 0]} />;
      case "Cavalier":
        return <PerspectiveCamera makeDefault fov={90} position={[7, 7, 0]} rotation={[0.5, 0.5, 0]} />;
      case "Cabinet":
        return <PerspectiveCamera makeDefault fov={63.4} position={[7, 5, 0]} rotation={[0.3, 0.3, 0]} />;
      case "One-Point":
        return <PerspectiveCamera makeDefault fov={75} position={[0, 0, 5]} />;
      case "Two-Point":
        return <PerspectiveCamera makeDefault fov={75} position={[5, 0, 5]} rotation={[0, Math.PI / 4, 0]} />;
      case "Three-Point":
        return <PerspectiveCamera makeDefault fov={75} position={[5, 5, 5]} rotation={[Math.PI / 8, Math.PI / 8, 0]} />;
      default:
        return <PerspectiveCamera makeDefault fov={75} position={[5, 5, 5]} />;
    }
  };

  return (
    <div className="main flex flex-col items-center">
      <SectionPage
        sectionTitle="3D Projection"
        sectionNumber="04"
        sectionDescription="Convert 3D objects to 2D using parallel and perspective projections."
        currentSection="Projection"
      />

      <div className="flex mt-6 w-full max-w-5xl justify-center gap-8">
        <div className="projection-buttons flex flex-col items-center gap-4 p-6 rounded-lg" style={{ backgroundColor: "#F2FFFC" }}>
          {ProjectionTheory.map((item, index) => (
            <div key={item.type} className="projection-category font-inter text-[#0B2640]">
              <button onClick={() => setProjection(item.type)} className="projection-btn">
                {item.type}
              </button>
            </div>
          ))}
        </div>

        <div className="model-frame p-4" style={{ backgroundColor: "#F2FFFC" }}>
          <Canvas style={{ width: "500px", height: "500px" }}>
            {renderCamera()}
            <ambientLight intensity={0.5} />
            <Suspense fallback={null}>
              <DinoModel />
            </Suspense>
            <OrbitControls />
          </Canvas>
        </div>
      </div>

      {/* Theory Section with Animation */}
      <div className="theory-section mt-12 w-full max-w-5xl">
        {ProjectionTheory.map((item, index) => (
          <motion.div
            key={item.type}
            className="theory-item flex flex-col md:flex-row items-center mb-8"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {index % 2 === 0 ? (
              <>
                <img src={item.image} alt={item.type} className="w-full md:w-1/2 rounded-lg mb-4 md:mb-0" />
                <div className="theory-text md:pl-8">
                  <h3 className="text-xl font-bold text-[#F2FFFC]">{item.type} Projection</h3>
                  <p>{item.theory}</p>
                  <p className="italic mt-2">{item.example}</p>
                </div>
              </>
            ) : (
              <>
                <div className="theory-text md:pr-8">
                  <h3 className="text-xl font-bold text-[#F2FFFC]">{item.type} Projection</h3>
                  <p>{item.theory}</p>
                  <p className="italic mt-2">{item.example}</p>
                </div>
                <img src={item.image} alt={item.type} className="w-full md:w-1/2 rounded-lg mt-4 md:mt-0" />
              </>
            )}
          </motion.div>
        ))}
      </div>
      {/* Styles */}
      <style jsx>{`
        .projection-btn {
          color: #1A4C86;
          transition: color 0.2s;
          cursor: pointer;
        }
        .projection-btn:hover {
          color: #A0CBE8;
        }
        .theory-section {
          padding: 20px;
          border-radius: 8px;
        }
        .theory-text {
          font-family: 'Inter', sans-serif;
          color: #FFFFFF;
        }
        .model-frame {
          box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
        }
      `}</style>
    </div>
  );
};

export default Projection;
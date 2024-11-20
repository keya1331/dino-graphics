import React, { useState } from "react";
import { motion } from "framer-motion";


const projectionsInfo = [
  {
    title: "Parallel",
    definition: "Parallel projection maintains the relative dimensions of objects without perspective distortion.",
    example: "Used in engineering and architectural drawings to maintain accurate proportions.",
    dinoUse: "In Dino World, it can be used to map terrain layouts for habitat design.",
  },
  {
    title: "Orthographic",
    definition: "Orthographic projection represents objects without perspective, as seen from infinite distance.",
    example: "Used in CAD software for precise modeling.",
    dinoUse: "Helps in creating a precise 2D blueprint of a dinosaur skeleton for study.",
  },
  {
    title: "Isometric",
    definition: "Isometric projection shows a 3D object equally foreshortened along three axes.",
    example: "Common in video games and technical illustrations.",
    dinoUse: "Great for creating 3D game assets of dinosaurs.",
  },
  {
    title: "Dimetric",
    definition: "Dimetric projection is a type of axonometric projection where two of the three axes are equally foreshortened.",
    example: "Used in technical illustrations where depth and width are important.",
    dinoUse: "Used in creating 2D dinosaur game assets with some depth representation.",
  },
  {
    title: "Trimetric",
    definition: "Trimetric projection is an axonometric projection where all three axes are scaled differently.",
    example: "Common in technical and engineering drawings where exact proportions are required.",
    dinoUse: "Helps in illustrating complex dinosaur environments with varied depth and scale.",
  },
  {
    title: "Oblique",
    definition: "Oblique projection represents objects with the front facing directly toward the viewer, while the depth is receded at an angle.",
    example: "Used in certain game designs and architectural illustrations.",
    dinoUse: "Used to create dinosaur landscapes or buildings where depth is important but perspective is simplified.",
  },
  {
    title: "Cavalier",
    definition: "Cavalier projection is a type of oblique projection where the depth is shown at full scale.",
    example: "Often used in engineering for showcasing 3D objects while maintaining dimensions.",
    dinoUse: "Used to create dynamic illustrations of dinosaur creatures, where depth is emphasized.",
  },
  {
    title: "Cabinet",
    definition: "Cabinet projection is an oblique projection where the depth is scaled by half, providing a more realistic view of the object.",
    example: "Commonly used in furniture design for better visualization of depth.",
    dinoUse: "Helps to create more realistic dinosaur habitat designs with emphasis on depth.",
  },
  {
    title: "Perspective",
    definition: "Perspective projection shows objects as they appear from a specific viewpoint, with parallel lines converging towards a vanishing point.",
    example: "Widely used in art and architecture to create realistic 3D views.",
    dinoUse: "Used in 3D dinosaur games and animations to create realistic depth and perception of the world.",
  },
  {
    title: "One-Point Perspective",
    definition: "One-point perspective uses a single vanishing point on the horizon line to depict the depth of objects.",
    example: "Common in art and architectural drawings to depict rooms or streets.",
    dinoUse: "Used to show a dinosaur in a corridor or a simple room with the focus on one vanishing point.",
  },
  {
    title: "Two-Point Perspective",
    definition: "Two-point perspective uses two vanishing points on the horizon line to represent depth and dimension.",
    example: "Common in architectural and environmental design to create a more dynamic view.",
    dinoUse: "Used to create realistic scenes where dinosaurs are interacting with their environment.",
  },
  {
    title: "Three-Point Perspective",
    definition: "Three-point perspective involves three vanishing points to depict height, depth, and width for more dramatic views.",
    example: "Used in dynamic views of large objects or scenes, such as skyscrapers.",
    dinoUse: "Used to depict large dinosaurs from an extreme angle, emphasizing height and depth.",
  },
];

const ProjectionInfoSlides = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleSlide = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      className="projection-info w-full text-white p-5 rounded-lg shadow-lg"
      style={{
        background: `linear-gradient(
          to right,
          #1a3757 0%,
          #11273f 5%,
          #061420 15%,
          #0b1e35 40%,
          #0a1426 60%,
          #0b1e35 75%,
          #0a1426 90%,
          #061420 100%
        )`,
      }}
    >
      <h1 className="text-2xl font-bold mb-4 text-center">Projection Information</h1>
      <div className="space-y-4 w-full">
        {projectionsInfo.map((projection, index) => (
          <div key={index} className="border-b border-gray-700 pb-3 w-full">
            <button
              className="w-full text-center text-lg font-semibold p-3 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              style={{
                background: `linear-gradient(
                  to right,
                  #0b1e35,
                  black
                )`,
                color: 'white',
              }}
              onClick={() => toggleSlide(index)}
            >
              {projection.title}
            </button>

            {activeIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-2 p-4 rounded-md shadow-inner w-full"
                style={{ backgroundColor: "#11273f" }}
              >
                <p className="mb-2">
                  <strong>Definition:</strong> {projection.definition}
                </p>
                <p className="mb-2">
                  <strong>Example:</strong> {projection.example}
                </p>
                <p>
                  <strong>In Dino World:</strong> {projection.dinoUse}
                </p>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectionInfoSlides;

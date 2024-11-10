// pages/HomePage.jsx
import React from "react";
import Chaptertitle from "../components/Chaptertitle";
import ThreeDModel from "../components/ThreeDModel";

const HomePage = () => {
  return (
    <div className="main">
      <div className="container flex items-center justify-center mx-56 flex-col">
        <div className="hero pt-12 self-start flex items-center justify-center flex-col gap-3 place-self-end">
          <img
            src="/assets/logo2.png"
            alt="Some error occurred"
            className="md:w-80"
          />
          <p className="text-9xl font-bold tracking-tighter text-[#e8f3fe]">
            DINO GRAPHICS
          </p>
          <p className="text-white text-center px-96">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima,
            amet doloribus qui impedit, tempore ducimus voluptatum iste porro
            harum neque quod fuga eligendi numquam tenetur. Nihil quisquam
            similique incidunt hic, natus ea.
          </p>
        </div>

        <div className="titles flex flex-col justify-center items-center py-24 px-12 gap-12">
          {[
            {
              number: "01",
              title: "Introduction",
              description:
                "Basics of computer graphics: classifications, coordinates, display and interactive devices, digital images, and graphics software.",
              position: "right",
            },
            {
              number: "02",
              title: "Graphics Primitives",
              description:
                "Fundamentals of lines, shapes, and polygons. Learn algorithms for drawing and filling.",
              position: "left",
            },
            {
              number: "03",
              title: "2D and 3D Transformations",
              description:
                "Matrix-based transformations in 2D and 3D for dynamic graphics.",
              position: "right",
            },
            {
              number: "04",
              title: "3D Projection",
              description:
                "Convert 3D objects to 2D using parallel and perspective projections.",
              position: "left",
            },
            {
              number: "05",
              title: "Clipping",
              description:
                "Techniques to display visible portions of graphics within viewports.",
              position: "right",
            },
            {
              number: "06",
              title: "Advanced Topics",
              description:
                "Explore shading, lighting, color, animation, and modern graphics hardware.",
              position: "left",
            },
          ].map((chapter, index) => (
            <div key={index} className={`title${index + 1} flex w-full items-center ${chapter.position === "left" ? "justify-start" : "justify-end"}`}>
              {chapter.position === "left" && (
                <ThreeDModel position={[2, 0, 0]} />
              )}
              <Chaptertitle
                number={chapter.number}
                title={chapter.title}
                description={chapter.description}
              />
              {chapter.position === "right" && (
                <ThreeDModel position={[-2, 0, 0]} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
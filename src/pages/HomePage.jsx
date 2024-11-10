import React from "react";
import Chaptertitle from "../components/Chaptertitle";

const HomePage = () => {
  return (
    <div className="main">
      <div className="container flex flex-col items-center justify-center">
        <div className="hero pt-12 flex flex-col items-center gap-3">
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
        
        <div className="titles flex flex-col items-center py-24 space-y-56 w-[80vw]">
          <div className="title1 right">
            <Chaptertitle
              number={"01"}
              title={"Introduction"}
              description={
                "Basics of computer graphics: classifications, coordinates, display and interactive devices, digital images, and graphics software."
              }
            />
          </div>
          <div className="title2 left">
            <Chaptertitle
              number={"02"}
              title={"Graphics Primitives"}
              description={
                "Fundamentals of lines, shapes, and polygons. Learn algorithms for drawing and filling."
              }
            />
          </div>
          <div className="title3 right">
            <Chaptertitle
              number={"03"}
              title={"2D and 3D Transformations"}
              description={
                "Matrix-based transformations in 2D and 3D for dynamic graphics."
              }
            />
          </div>
          <div className="title4 left">
            <Chaptertitle
              number={"04"}
              title={"3D Projection"}
              description={
                "Convert 3D objects to 2D using parallel and perspective projections."
              }
            />
          </div>
          <div className="title5 right">
            <Chaptertitle
              number={"05"}
              title={"Clipping"}
              description={
                "Techniques to display visible portions of graphics within viewports."
              }
            />
          </div>
          <div className="title6 left">
            <Chaptertitle
              number={"06"}
              title={"Advanced Topics"}
              description={
                "Explore shading, lighting, color, animation, and modern graphics hardware."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
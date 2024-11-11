import React from "react";
import Chaptertitle from "../components/Chaptertitle";
import HomeIndominus from "../components/HomePageIndominus.jsx";

const HomePage = () => {
  return (
    <div className="main">
      <div className="container flex items-center justify-center mx-40 flex-col">
        <div className="hero pt-40 pb-40 self-start flex items-center justify-center flex-col gap-3 place-self-end">
          <img
            src="/assets/logo2.png"
            alt="Some error occurred"
            className="md:w-80"
          />
          <p className="text-9xl font-bold tracking-tighter text-[#e8f3fe]">
            DINO GRAPHICS
          </p>
          <p className="text-white opacity-80 px-80 text-justify">
            Dive into computer graphics with a prehistoric twist! Explore
            digital design by bringing dinosaurs to life through drawing,
            transforming, and animating. Join us on this thrilling Jurassic
            journey and create dino-mite designs!
          </p>
        </div>

        <div className="navigator flex">
          <div className="sticky top-0 w-[30vw] h-[100vh]">
            <HomeIndominus />
          </div>

          <div className="titles flex flex-col justify-center items-center py-24 px-12 gap-12">
            <div className="title1 flex w-full items-center justify-start">
              <Chaptertitle
                number="01"
                title="Introduction"
                description="Basics of computer graphics: classifications, coordinates, display and interactive devices, digital images, and graphics software."
              />
            </div>
            <div className="title2 flex w-full items-center justify-end">
              <Chaptertitle
                number="02"
                title="Graphics Primitives"
                description="Fundamentals of lines, shapes, and polygons. Learn algorithms for drawing and filling."
              />
            </div>
            <div className="title3 flex w-full items-center justify-start">
              <Chaptertitle
                number="03"
                title="2D and 3D Transformations"
                description="Matrix-based transformations in 2D and 3D for dynamic graphics."
              />
            </div>
            <div className="title4 flex w-full items-center justify-end">
              <Chaptertitle
                number="04"
                title="3D Projection"
                description="Convert 3D objects to 2D using parallel and perspective projections."
              />
            </div>
            <div className="title5 flex w-full items-center justify-start">
              <Chaptertitle
                number="05"
                title="Clipping"
                description="Techniques to display visible portions of graphics within viewports."
              />
            </div>
            <div className="title6 flex w-full items-center justify-end">
              <Chaptertitle
                number="06"
                title="Advanced Topics"
                description="Explore shading, lighting, color, animation, and modern graphics hardware."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
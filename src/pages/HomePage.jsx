import React, { useEffect } from "react";
import Chaptertitle from "../components/Chaptertitle";
import HomeIndominus from "../components/HomePageIndominus.jsx";
import AOS from "aos"; 
import "aos/dist/aos.css"; 

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false }); 
  }, []);

  return (
    <div className="main">
      <div className="container flex items-center justify-center mx-40 flex-col">
        <div
          className="hero pt-40 pb-40 self-start flex items-center justify-center flex-col gap-3 place-self-end"
          data-aos="fade-up"
        >
          <img
            src="/assets/logo2.png"
            alt="Some error occurred"
            className="md:w-80"
            data-aos="zoom-in"
          />
          <p
            className="text-9xl font-bold tracking-tighter text-[#e8f3fe]"
            data-aos="fade-up"
          >
            DINO GRAPHICS
          </p>
          <p
            className="text-white opacity-80 px-80 text-justify"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Dive into computer graphics with a prehistoric twist! Explore
            digital design by bringing dinosaurs to life through drawing,
            transforming, and animating. Join us on this thrilling Jurassic
            journey and create dino-mite designs!
          </p>
        </div>

        <div className="navigator flex">
          <div
            className="sticky top-0 w-[30vw] h-[100vh]"
            data-aos="fade-right"
          >
            <HomeIndominus />
          </div>

          <div className="titles flex flex-col justify-center items-center py-24 px-12 gap-12">
            <div
              className="title1 flex w-full items-center justify-start"
              data-aos="fade-up"
            >
              <Chaptertitle
                number="01"
                title="Introduction"
                description="Basics of computer graphics: classifications, coordinates, display and interactive devices, digital images, and graphics software."
              />
            </div>
            <div
              className="title2 flex w-full items-center justify-end"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <Chaptertitle
                number="02"
                title="Graphics Primitives"
                description="Fundamentals of lines, shapes, and polygons. Learn algorithms for drawing and filling."
              />
            </div>
            <div
              className="title3 flex w-full items-center justify-start"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Chaptertitle
                number="03"
                title="2D and 3D Transformations"
                description="Matrix-based transformations in 2D and 3D for dynamic graphics."
              />
            </div>
            <div
              className="title4 flex w-full items-center justify-end"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Chaptertitle
                number="04"
                title="3D Projection"
                description="Convert 3D objects to 2D using parallel and perspective projections."
              />
            </div>
            <div
              className="title5 flex w-full items-center justify-start"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <Chaptertitle
                number="05"
                title="Clipping"
                description="Techniques to display visible portions of graphics within viewports."
              />
            </div>
            <div
              className="title6 flex w-full items-center justify-end"
              data-aos="fade-up"
              data-aos-delay="500"
            >
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
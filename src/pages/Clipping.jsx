import React, { useState } from "react";
import Chaptertitle from "../components/Chaptertitle";
import { useNavigate } from "react-router-dom"; 

const Clipping = () => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/"); 
  };

  const sections = [
    "Introduction",
    "GraphicsPrimitives",
    "Transformations",
    "Projection",
    "Clipping",
    "AdvancedTopics"
  ];

  const currentSectionIndex = sections.indexOf("Clipping");

  const navigateToSection = (index) => {
    navigate(`/${sections[index].toLowerCase()}`); 
  };

  const handleNext = () => {
    if (currentSectionIndex < sections.length - 1) {
      navigateToSection(currentSectionIndex + 1); 
    }
  };

  const handlePrevious = () => {
    if (currentSectionIndex > 0) {
      navigateToSection(currentSectionIndex - 1); 
    }
  };

  return (
    <div className="main flex flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center mx-40 gap-4">
        <div className="hero pt-40 pb-20 flex flex-col items-center justify-center gap-3">
          <img
            src="/assets/logo2.png"
            alt="Some error occurred"
            className="md:w-80"
            onClick={goToHomePage}
            style={{ cursor: 'pointer' }} 
          />

          <p className="text-5xl font-bold tracking-tighter text-[#e8f3fe]">
            DINO GRAPHICS
          </p>
        </div>

        <div className="content flex flex-col items-center gap-6 text-center">
          <Chaptertitle
            number="05"
            title="Clipping"
            description="Basics of computer graphics: classifications, coordinates, display and interactive devices, digital images, and graphics software."
          />
        </div>

        <div className="navigation-arrows flex justify-between w-full fixed bottom-10 px-10">
          <button
            className="text-[#e8f3fe] text-3xl"
            onClick={handlePrevious}
          >
            <img
              src="/assets/left-arrow.png" 
              alt="Previous"
              className="w-10 h-10"
            />
          </button>

          <button
            className="text-[#e8f3fe] text-3xl"
            onClick={handleNext} 
          >
            <img
              src="/assets/right-arrow.png" 
              alt="Next"
              className="w-10 h-10"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Clipping;

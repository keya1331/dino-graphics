import React, { useState } from "react";
import Chaptertitle from "../components/Chaptertitle";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Clipping = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const goToHomePage = () => {
    navigate("/"); // Redirects to the homepage (assuming it's defined in the routes as "/")
  };

  // Array of section names (update with your actual section names/paths)
  const sections = [
    "Introduction",
    "GraphicsPrimitives",
    "Transformations",
    "Projection",
    "Clipping",
    "AdvancedTopics"
  ];

  // Get the current index of the section in the array
  const currentSectionIndex = sections.indexOf("Clipping");

  const navigateToSection = (index) => {
    navigate(`/${sections[index].toLowerCase()}`); // Navigate to the corresponding section path
  };

  const handleNext = () => {
    if (currentSectionIndex < sections.length - 1) {
      navigateToSection(currentSectionIndex + 1); // Move to the next section
    }
  };

  const handlePrevious = () => {
    if (currentSectionIndex > 0) {
      navigateToSection(currentSectionIndex - 1); // Move to the previous section
    }
  };

  return (
    <div className="main flex flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center mx-40 gap-4">
        {/* Header Section */}
        <div className="hero pt-40 pb-20 flex flex-col items-center justify-center gap-3">
          <img
            src="/assets/logo2.png"
            alt="Some error occurred"
            className="md:w-80"
            onClick={goToHomePage} // Add click event handler
            style={{ cursor: 'pointer' }} // Optional: Change cursor to pointer to indicate it's clickable
          />

          {/* Smaller heading for subpages */}
          <p className="text-5xl font-bold tracking-tighter text-[#e8f3fe]">
            DINO GRAPHICS
          </p>
        </div>

        {/* Content Section */}
        <div className="content flex flex-col items-center gap-6 text-center">
          <Chaptertitle
            number="05"
            title="Clipping"
            description="Basics of computer graphics: classifications, coordinates, display and interactive devices, digital images, and graphics software."
          />
        </div>

        {/* Navigation Arrows */}
        <div className="navigation-arrows flex justify-between w-full fixed bottom-10 px-10">
          {/* Left Arrow */}
          <button
            className="text-[#e8f3fe] text-3xl"
            onClick={handlePrevious} // Handle previous section navigation
          >
            <img
              src="/assets/left-arrow.png" // Custom left arrow SVG
              alt="Previous"
              className="w-10 h-10"
            />
          </button>

          {/* Right Arrow */}
          <button
            className="text-[#e8f3fe] text-3xl"
            onClick={handleNext} // Handle next section navigation
          >
            <img
              src="/assets/right-arrow.png" // Custom right arrow SVG
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

import React from "react";
import { useNavigate } from "react-router-dom";
import Chaptertitle from "./Chaptertitle";

const TemplatePageHeader = ({ sectionTitle, sectionNumber, sectionDescription, currentSection }) => {
  const navigate = useNavigate();

  const sections = [
    "Introduction",
    "GraphicsPrimitives",
    "Transformations",
    "Projection",
    "Clipping",
    "AdvancedTopics"
  ];

  const currentSectionIndex = sections.indexOf(currentSection);

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
      <div className="container flex flex-col items-center justify-center mx-40 gap-4">
        
        <div className="hero pt-40 pb-20 flex flex-col items-center justify-center gap-3">
          <img
            src="/assets/logo2.png"
            alt="Some error occurred"
            className="md:w-80"
            onClick={() => navigate("/")}
            style={{ cursor: 'pointer' }}
          />

          <p className="text-5xl font-bold tracking-tighter text-[#e8f3fe]">
            DINO GRAPHICS
          </p>
        </div>
        
        <div className="content flex flex-col items-center gap-6 text-center">
          <Chaptertitle
            number={sectionNumber}
            title={sectionTitle}
            description={sectionDescription}
          />
        </div>

        <div className="navigation-arrows flex justify-between w-full fixed top-1/2 px-10 z-50 transform -translate-y-1/2">
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
  );
};

export default TemplatePageHeader;
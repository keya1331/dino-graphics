import React from "react";
import SectionPage from "../components/TemplatePageHeader";
import IntroductionInteractiveElement from "../components/IntroductionInteractiveElement";

const Introduction = () => (
    <div className="main flex flex-col items-center justify-center">
      <SectionPage
        sectionTitle="Introduction"
        sectionNumber="01"
        sectionDescription="Basics of computer graphics: classifications, coordinates, display and interactive devices, digital images, and graphics software."
        currentSection="Introduction"
      />

      <IntroductionInteractiveElement />

    </div>
);

export default Introduction;

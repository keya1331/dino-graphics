import React from "react";
import SectionPage from "../components/TemplatePageHeader";
import TransformationsInteractiveElement from "../components/TransformationInteractiveElement";

const Transformations = () => (
  <div className="main flex flex-col items-center justify-center">
    <SectionPage
      sectionTitle="2D and 3D Transformations"
      sectionNumber="03"
      sectionDescription="Matrix-based transformations in 2D and 3D for dynamic graphics."
      currentSection="Transformations"
    />
    <div>
      <TransformationsInteractiveElement />
    </div>
  </div>
);

export default Transformations;

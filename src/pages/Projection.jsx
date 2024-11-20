import React from "react";
import SectionPage from "../components/TemplatePageHeader";
import ProjectionViewer from "../components/ProjectionViewer";
import ProjectionInfoSlides from "../components/ProjectionInfoSlides";

const Projection = () => {
  return (
    <div className="main flex flex-col items-center">
      <SectionPage
        sectionTitle="3D Projection"
        sectionNumber="04"
        sectionDescription="Convert 3D objects to 2D using parallel and perspective projections."
        currentSection="Projection"
      />
      <ProjectionViewer />
      <ProjectionInfoSlides/>

      
    </div>
  );
};

export default Projection;

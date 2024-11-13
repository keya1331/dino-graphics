import React from "react";
import SectionPage from "../components/TemplatePageHeader";
import IntroductionInteractiveElement from "../components/IntroductionInteractiveElement";

const Introduction = () => (
  <div className="main">
    <div className="w-[50vw] flex flex-col items-center justify-center space-y-16 px-6 py-12">
      <SectionPage
        sectionTitle="Introduction"
        sectionNumber="01"
        sectionDescription="Basics of computer graphics: classifications, coordinates, display and interactive devices, digital images, and graphics software."
        currentSection="Introduction"
      />

      <div className="w-[90%] h-[60vh] mx-auto animate-fadeIn">
        <IntroductionInteractiveElement />
      </div>

      <div className="content-container space-y-16">
        <section className="overview animate-fadeIn">
          <h2 className="section-heading">Overview</h2>
          <p className="section-description">
            Computer Graphics is the field that transforms data into visual
            representations, enabling the creation, manipulation, and display of
            visual information. It plays a key role in fields like design,
            animation, gaming, and user interface development.
          </p>
        </section>

        <section className="classification animate-fadeIn">
          <h2 className="section-heading">Classification</h2>
          <div className="classification-types space-y-8">
            <div className="classification-item animate-slideInLeft">
              <h3 className="subheading">Interactive Graphics</h3>
              <p className="section-description">
                Enables user-controlled content and outcomes, such as video
                games and simulations.
              </p>
            </div>
            <div className="classification-item animate-slideInRight">
              <h3 className="subheading">Non-Interactive Graphics</h3>
              <p className="section-description">
                Pre-rendered visuals where no interaction is required, often
                seen in presentations and animated movies.
              </p>
            </div>
          </div>
        </section>

        <section className="characteristics animate-fadeIn">
          <h2 className="section-heading">Characteristics and Advantages</h2>
          <ul className="benefits-list">
            <li>Visualization of abstract data into comprehensible forms.</li>
            <li>Real-time interaction for dynamic user experiences.</li>
            <li>High realism and accuracy for simulations and modeling.</li>
            <li>Efficient development and testing via visual simulations.</li>
          </ul>
        </section>

        <section className="coordinates animate-fadeIn">
          <h2 className="section-heading">Coordinate Representation</h2>
          <p className="section-description">
            Coordinate systems define object placement. Graphics use both 2D
            Cartesian coordinates (x, y) and 3D Cartesian coordinates (x, y, z).
          </p>
        </section>

        <section className="scan-methods animate-fadeIn">
          <h2 className="section-heading">Raster Scan & Random Scan Methods</h2>
          <div className="scan-types space-y-8">
            <div className="scan-item animate-slideInLeft">
              <h3 className="subheading">Raster Scan</h3>
              <p className="section-description">
                Common in displays, draws the screen line-by-line from top to
                bottom.
              </p>
            </div>
            <div className="scan-item animate-slideInRight">
              <h3 className="subheading">Random Scan</h3>
              <p className="section-description">
                Used in vector displays, draws lines directly between specified
                points for high precision.
              </p>
            </div>
          </div>
          <div className="content-image animate-fadeIn">
            <img src="/assets/raster-random-displays.png" alt="" />
          </div>
        </section>

        <section className="video-basics animate-fadeIn">
          <h2 className="section-heading">Video Basics</h2>
          <p className="section-description">
            Covers how images are displayed on screens, including aspects like
            frame rates, resolution, and color depth.
          </p>
        </section>

        <section className="devices animate-fadeIn">
          <h2 className="section-heading">Display and Interactive Devices</h2>
          <div className="device-list space-y-8">
            <h3 className="subheading">Display Devices:</h3>
            <ul className="devices">
              <li>
                <strong>CRT:</strong> Older tech using electron beams.
              </li>
              <li>
                <strong>LCD:</strong> Uses liquid crystals and backlighting,
                common in most devices today.
              </li>
              <li>
                <strong>LED:</strong> Energy-efficient and widely used.
              </li>
            </ul>

            <h3 className="subheading">Interactive Devices:</h3>
            <ul className="devices">
              <li>
                Input tools like mouse, keyboard, stylus for screen
                manipulation.
              </li>
            </ul>
          </div>
        </section>

        <section className="digital-images animate-fadeIn">
          <h2 className="section-heading">
            Digital Images, Image Formation, Representation, and Modeling
          </h2>
          <p className="section-description">
            <strong>Digital Images:</strong> Composed of pixels, each
            representing a portion of the image.
          </p>
          <p className="section-description">
            <strong>Image Formation:</strong> Process by which digital sensors
            or algorithms capture and display images.
          </p>
          <p className="section-description">
            <strong>Image Representation:</strong> Encodes images as bitmap or
            vector data.
          </p>
          <p className="section-description">
            <strong>Modeling:</strong> Builds digital object representations for
            animation and visualization.
          </p>
        </section>

        <section className="applications animate-fadeIn">
          <h2 className="section-heading">Overview of Applications</h2>
          <ul className="applications-list">
            <li>
              <strong>Entertainment:</strong> Animation, visual effects, gaming
            </li>
            <li>
              <strong>Education:</strong> Interactive tutorials, simulations
            </li>
            <li>
              <strong>Healthcare:</strong> Medical imaging, surgery simulations
            </li>
            <li>
              <strong>Engineering and Design:</strong> CAD for architectural and
              mechanical design
            </li>
          </ul>
        </section>

        <section className="software animate-fadeIn">
          <h2 className="section-heading">Graphics Libraries & Software</h2>
          <p className="section-description">
            Libraries like <strong>OpenGL</strong>, <strong>WebGL</strong>, and{" "}
            <strong>DirectX</strong> support graphics development. Software like{" "}
            <strong>Photoshop</strong>, <strong>Blender</strong>, and{" "}
            <strong>AutoCAD</strong> are essential tools for graphic design and
            modeling.
          </p>
        </section>

        <div className="learn-more animate-fadeIn">
          <h3 className="section-heading">If you want to learn more</h3>
          <ul className="links-list">
            <li>
              <a
                href="https://www.geeksforgeeks.org/computer-graphics-2/"
                className="custom-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Introduction to Computer Graphics - GeeksforGeeks
              </a>
            </li>
            <li>
              <a
                href="https://www.tutorialspoint.com/computer_graphics/computer_graphics_basics.htm"
                className="custom-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Types of Computer Graphics - TutorialsPoint
              </a>
            </li>
            <li>
              <a
                href="https://www.geeksforgeeks.org/applications-of-computer-graphics/"
                className="custom-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Applications of Computer Graphics - GeeksforGeeks
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Introduction;

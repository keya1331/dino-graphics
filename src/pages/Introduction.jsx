import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS for animations
import SectionPage from "../components/TemplatePageHeader";
import IntroductionInteractiveElement from "../components/IntroductionInteractiveElement";

const Introduction = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (milliseconds)
      easing: "ease-in-out", // Easing function
      once: true, // Animation happens only once
    });
  }, []);

  return (
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
          <section className="overview" data-aos="fade-up">
            <h2 className="section-heading text-left">Overview</h2>
            <p className="section-description text-left">
              Computer Graphics is the field that transforms data into visual
              representations, enabling the creation, manipulation, and display of
              visual information. It plays a key role in fields like design,
              animation, gaming, and user interface development.
            </p>
          </section>

          <section className="classification" data-aos="fade-up">
            <h2 className="section-heading text-left">Classification</h2>
            <div className="classification-types space-y-8">
              <div className="classification-item" data-aos="fade-right">
                <h3 className="subheading text-left">Interactive Graphics</h3>
                <p className="section-description text-left">
                  Enables user-controlled content and outcomes, such as video
                  games and simulations.
                </p>
              </div>
              <div className="classification-item" data-aos="fade-left">
                <h3 className="subheading text-left">Non-Interactive Graphics</h3>
                <p className="section-description text-left">
                  Pre-rendered visuals where no interaction is required, often
                  seen in presentations and animated movies.
                </p>
              </div>
            </div>
          </section>

          <section className="characteristics" data-aos="fade-up">
            <h2 className="section-heading text-left">
              Characteristics and Advantages
            </h2>
            <ul className="benefits-list list-disc list-inside text-left">
              <li>Visualization of abstract data into comprehensible forms.</li>
              <li>Real-time interaction for dynamic user experiences.</li>
              <li>High realism and accuracy for simulations and modeling.</li>
              <li>Efficient development and testing via visual simulations.</li>
            </ul>
          </section>

          <section className="coordinates" data-aos="fade-up">
            <h2 className="section-heading text-left">Coordinate Representation</h2>
            <p className="section-description text-left">
              Coordinate systems define object placement. Graphics use both 2D
              Cartesian coordinates (x, y) and 3D Cartesian coordinates (x, y, z).
            </p>
          </section>

          <section className="scan-methods" data-aos="fade-up">
            <h2 className="section-heading text-left">
              Raster Scan & Random Scan Methods
            </h2>
            <div className="scan-types space-y-8">
              <div className="scan-item" data-aos="fade-right">
                <h3 className="subheading text-left">Raster Scan</h3>
                <p className="section-description text-left">
                  Common in displays, draws the screen line-by-line from top to
                  bottom.
                </p>
              </div>
              <div className="scan-item" data-aos="fade-left">
                <h3 className="subheading text-left">Random Scan</h3>
                <p className="section-description text-left">
                  Used in vector displays, draws lines directly between specified
                  points for high precision.
                </p>
              </div>
            </div>
          </section>

          <section className="video-basics" data-aos="fade-up">
            <h2 className="section-heading text-left">Video Basics</h2>
            <p className="section-description text-left">
              Covers how images are displayed on screens, including aspects like
              frame rates, resolution, and color depth.
            </p>
          </section>

          <section className="devices" data-aos="fade-up">
            <h2 className="section-heading text-left">
              Display and Interactive Devices
            </h2>
            <div className="device-list space-y-8">
              <h3 className="subheading text-left">Display Devices:</h3>
              <ul className="devices list-disc list-inside text-left">
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

              <h3 className="subheading text-left">Interactive Devices:</h3>
              <ul className="devices list-disc list-inside text-left">
                <li>
                  Input tools like mouse, keyboard, stylus for screen
                  manipulation.
                </li>
              </ul>
            </div>
          </section>

          <section className="digital-images" data-aos="fade-up">
            <h2 className="section-heading text-left">
              Digital Images, Image Formation, Representation, and Modeling
            </h2>
            <p className="section-description text-left">
              <strong>Digital Images:</strong> Composed of pixels, each
              representing a portion of the image.
            </p>
            <p className="section-description text-left">
              <strong>Image Formation:</strong> Process by which digital sensors
              or algorithms capture and display images.
            </p>
            <p className="section-description text-left">
              <strong>Image Representation:</strong> Encodes images as bitmap or
              vector data.
            </p>
            <p className="section-description text-left">
              <strong>Modeling:</strong> Builds digital object representations for
              animation and visualization.
            </p>
          </section>

          <section className="applications" data-aos="fade-up">
            <h2 className="section-heading text-left">Overview of Applications</h2>
            <ul className="applications-list list-disc list-inside text-left">
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

          <section className="software" data-aos="fade-up">
            <h2 className="section-heading text-left">Graphics Libraries & Software</h2>
            <p className="section-description text-left">
              Libraries like <strong>OpenGL</strong>, <strong>WebGL</strong>, and{" "}
              <strong>DirectX</strong> support graphics development. Software like{" "}
              <strong>Photoshop</strong>, <strong>Blender</strong>, and{" "}
              <strong>AutoCAD</strong> are essential tools for graphic design and
              modeling.
            </p>
          </section>

          <div className="learn-more" data-aos="fade-up">
            <h3 className="section-heading">If you want to learn more</h3>
            <ul className="links-list list-disc list-inside text-left">
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
};

export default Introduction;
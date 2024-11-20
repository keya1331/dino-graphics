import React, { useEffect } from "react";
import SectionPage from "../components/TemplatePageHeader";
import TransformationInteractiveElement from "../components/TransformationInteractiveElement";
import AOS from "aos"; // Make sure to install AOS with npm or yarn
import "aos/dist/aos.css"; // Import the AOS styles

const Transformations = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration for smooth animations
  }, []);

  return (
    <div className="main bg-black text-white">
      <div className="w-[50vw] flex flex-col items-center justify-center space-y-16 px-6 py-12">
        <SectionPage
          sectionTitle="2D and 3D Transformations"
          sectionNumber="03"
          sectionDescription="Explores the fundamental concepts of 2D and 3D transformations such as translation, scaling, rotation, and shearing."
          currentSection="2D and 3D Transformations"
          data-aos="fade-up" // Adding fade-up animation to this section
        />

        <div className="w-[100%] h-[80vh] mx-auto" data-aos="fade-up">
          <TransformationInteractiveElement />
        </div>

        <div className="content-container space-y-16 text-gray-300">
          <section className="overview" data-aos="fade-up">
            <h2 className="section-heading text-2xl font-semibold">Overview</h2>
            <p className="section-description text-lg">
              2D and 3D transformations are the core operations in computer graphics, allowing objects to be moved, resized, rotated, and distorted. These transformations form the basis for creating dynamic and interactive graphics.
            </p>
          </section>

          <section className="2d-transformations" data-aos="fade-up">
            <h2 className="section-heading text-2xl font-semibold">2D Transformations</h2>
            <div className="transformations-types space-y-8">
              <div className="transformation-item" data-aos="fade-up">
                <h3 className="subheading text-xl font-medium">Translation</h3>
                <p className="section-description text-lg">
                  Moves an object from one location to another in 2D space by adding a displacement vector to its coordinates.
                </p>
                <p className="text-lg font-semibold">Translation Matrix:</p>
                <pre className="text-white">
                  {`
T = [ 1  0  tx ]
    [ 0  1  ty ]
    [ 0  0  1  ]
                  `}
                </pre>
              </div>

              <div className="transformation-item" data-aos="fade-up">
                <h3 className="subheading text-xl font-medium">Scaling</h3>
                <p className="section-description text-lg">
                  Increases or decreases the size of an object in the x and y directions by multiplying its coordinates by scaling factors.
                </p>
                <p className="text-lg font-semibold">Scaling Matrix:</p>
                <pre className="text-white">
                  {`
S = [ sx  0  0 ]
    [ 0   sy  0 ]
    [ 0   0   1 ]
                  `}
                </pre>
              </div>

              <div className="transformation-item" data-aos="fade-up">
                <h3 className="subheading text-xl font-medium">Rotation</h3>
                <p className="section-description text-lg">
                  Rotates an object around the origin (or a specified point) by an angle, typically in the counterclockwise direction.
                </p>
                <p className="text-lg font-semibold">Rotation Matrix:</p>
                <pre className="text-white">
                  {`
R = [ cos(θ) -sin(θ)  0 ]
    [ sin(θ)  cos(θ)  0 ]
    [   0       0      1 ]
                  `}
                </pre>
              </div>

              <div className="transformation-item" data-aos="fade-up">
                <h3 className="subheading text-xl font-medium">Shearing</h3>
                <p className="section-description text-lg">
                  Distorts the shape of an object by shifting its points in one direction, creating a skewed effect.
                </p>
                <p className="text-lg font-semibold">Shearing Matrix:</p>
                <pre className="text-white">
                  {`
Sh = [ 1  shx  0 ]
     [ shy  1  0 ]
     [ 0    0  1 ]
                  `}
                </pre>
              </div>
            </div>
          </section>

          <section className="3d-transformations" data-aos="fade-up">
            <h2 className="section-heading text-2xl font-semibold">3D Transformations</h2>
            <div className="transformations-types space-y-8">
              <div className="transformation-item" data-aos="fade-up">
                <h3 className="subheading text-xl font-medium">Translation</h3>
                <p className="section-description text-lg">
                  Similar to 2D translation, 3D translation moves an object along the x, y, and z axes.
                </p>
                <p className="text-lg font-semibold">Translation Matrix:</p>
                <pre className="text-white">
                  {`
T = [ 1  0  0  tx ]
    [ 0  1  0  ty ]
    [ 0  0  1  tz ]
    [ 0  0  0  1  ]
                  `}
                </pre>
              </div>

              <div className="transformation-item" data-aos="fade-up">
                <h3 className="subheading text-xl font-medium">Scaling</h3>
                <p className="section-description text-lg">
                  Scales an object in three dimensions (x, y, and z) by applying different scaling factors for each axis.
                </p>
                <p className="text-lg font-semibold">Scaling Matrix:</p>
                <pre className="text-white">
                  {`
S = [ sx  0  0  0 ]
    [ 0  sy  0  0 ]
    [ 0  0  sz  0 ]
    [ 0  0  0  1 ]
                  `}
                </pre>
              </div>

              <div className="transformation-item" data-aos="fade-up">
                <h3 className="subheading text-xl font-medium">Rotation</h3>
                <p className="section-description text-lg">
                  Rotates an object in 3D space around the x, y, or z axes, requiring the use of rotation matrices.
                </p>
                <p className="text-lg font-semibold">Rotation Matrix (around the Z axis):</p>
                <pre className="text-white">
                  {`
Rz = [ cos(θ) -sin(θ)  0  0 ]
     [ sin(θ)  cos(θ)  0  0 ]
     [   0      0      1  0 ]
     [   0      0      0  1 ]
                  `}
                </pre>
              </div>

              <div className="transformation-item" data-aos="fade-up">
                <h3 className="subheading text-xl font-medium">Shearing</h3>
                <p className="section-description text-lg">
                  Similar to 2D shearing but in 3D space, which involves skewing the object along different planes.
                </p>
                <p className="text-lg font-semibold">Shearing Matrix:</p>
                <pre className="text-white">
                  {`
Sh = [ 1  shxy  shxz  0 ]
     [ shyx  1   shyz  0 ]
     [ shzx  shzy  1   0 ]
     [  0    0    0   1 ]
                  `}
                </pre>
              </div>
            </div>
          </section>

          <section className="homogeneous-coordinates" data-aos="fade-up">
            <h2 className="section-heading text-2xl font-semibold">Homogeneous Coordinates</h2>
            <p className="section-description text-lg">
              Homogeneous coordinates are used in computer graphics to represent transformations in a unified way, especially for 3D transformations. They extend the traditional 2D coordinates by adding an extra dimension, allowing translation, rotation, and scaling to be combined in a single matrix.
            </p>
          </section>

          <section className="transformation-matrices" data-aos="fade-up">
            <h2 className="section-heading text-2xl font-semibold">Transformation Matrices</h2>
            <p className="section-description text-lg">
              Transformation matrices are used to perform the various transformations. These matrices include:
            </p>
            <ul className="matrices-list space-y-4 text-gray-300 text-left">
              <li className="text-lg">
                <strong>2D Transformation Matrix:</strong> Used for translating, rotating, scaling, and shearing in 2D.
              </li>
              <li className="text-lg">
                <strong>3D Transformation Matrix:</strong> Extends the 2D transformation matrix for 3D objects, incorporating rotation about all three axes, scaling, and translation.
              </li>
            </ul>
          </section>

          <section className="applications" data-aos="fade-up">
            <h2 className="section-heading text-2xl font-semibold">Applications</h2>
            <ul className="applications-list space-y-4 text-left">
              <li className="text-lg">
                <strong>Animation:</strong> Smooth transitions of objects using transformations.
              </li>
              <li className="text-lg">
                <strong>Game Development:</strong> Simulating movement and interactions of 3D models.
              </li>
              <li className="text-lg">
                <strong>Computer-Aided Design (CAD):</strong> Creating and manipulating 2D and 3D models for engineering.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Transformations;
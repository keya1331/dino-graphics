import React from 'react';

const Introduction = () => {
  return (
    <div className="introduction">
      <h1>Introduction to Computer Graphics</h1>
      <section>
        <h2>What is Computer Graphics?</h2>
        <p>
          Computer Graphics is the art and science of using computers to create, manipulate, and display images. It combines 
          artistic, mathematical, and algorithmic principles to represent visual content. The key areas include:
        </p>
        <ul>
          <li><strong>2D & 3D Drawing:</strong> Lines, polygons, curves, and surfaces.</li>
          <li><strong>Modeling:</strong> Creating complex models through transformations.</li>
          <li><strong>Rendering:</strong> Techniques like shading, lighting, texture mapping, and ray tracing.</li>
        </ul>
      </section>

      <section>
        <h2>Coordinate Systems</h2>
        <p>
          Computer graphics uses two main coordinate systems: Right-hand and Left-hand systems. In the right-hand system, the Z-axis points out of the screen, and in the left-hand system, it points into the screen.
        </p>
        <ul>
          <li><strong>Right-Hand System:</strong> Positive rotations follow the right-hand rule, with counterclockwise being positive.</li>
          <li><strong>Left-Hand System:</strong> Clockwise rotations are positive, and Z points into the page.</li>
        </ul>
      </section>

      <section>
        <h2>Input Devices</h2>
        <p>Common devices used in interactive computer graphics include:</p>
        <ul>
          <li><strong>Mouse:</strong> For positioning cursors and selecting objects.</li>
          <li><strong>Joystick:</strong> Often used in games for controlling movement.</li>
          <li><strong>Data Gloves:</strong> Used in virtual reality to interact with virtual objects.</li>
          <li><strong>Digitizers:</strong> For hand-drawing images or tracing designs.</li>
        </ul>
      </section>

      <section>
        <h2>Applications of Computer Graphics</h2>
        <p>Computer graphics are used in a variety of fields, such as:</p>
        <ul>
          <li><strong>Computer-Aided Design (CAD):</strong> Designing buildings, vehicles, and machinery.</li>
          <li><strong>Entertainment:</strong> Creating animations, video games, and movies.</li>
          <li><strong>Visualization:</strong> Scientific data visualization and simulation.</li>
        </ul>
      </section>

      <section>
        <h2>Graphics Libraries and Software</h2>
        <p>There are various software and libraries that make creating graphics easier:</p>
        <ul>
          <li><strong>OpenGL:</strong> A cross-language, cross-platform API for rendering 2D and 3D graphics.</li>
          <li><strong>Blender:</strong> Free and open-source software for 3D modeling, animation, and rendering.</li>
          <li><strong>Three.js:</strong> A JavaScript library used to create 3D graphics in web browsers.</li>
        </ul>
      </section>
    </div>
  );
};

export default Introduction;
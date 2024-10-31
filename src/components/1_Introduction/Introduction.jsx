import React from 'react';

const Introduction = () => {
  return (
    <div className="max-w-3xl mx-auto mt-10 p-8 bg-gray-900 text-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-indigo-400 text-center mb-6">Introduction to Computer Graphics</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-indigo-300 mb-2">What is Computer Graphics?</h2>
        <img src="https://source.unsplash.com/800x400/?graphics,computer" alt="Computer Graphics" className="rounded-md shadow-md mb-4"/>
        <p className="text-gray-300 mb-4">
          Computer Graphics is the art and science of using computers to create, manipulate, and display images. It combines 
          artistic, mathematical, and algorithmic principles to represent visual content. The key areas include:
        </p>
        <ul className="list-disc list-inside text-gray-400 space-y-2">
          <li><span className="font-semibold text-indigo-400">2D & 3D Drawing:</span> Lines, polygons, curves, and surfaces.</li>
          <li><span className="font-semibold text-indigo-400">Modeling:</span> Creating complex models through transformations.</li>
          <li><span className="font-semibold text-indigo-400">Rendering:</span> Techniques like shading, lighting, texture mapping, and ray tracing.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-indigo-300 mb-2">Coordinate Systems</h2>
        <img src="https://source.unsplash.com/800x400/?coordinates,geometry" alt="Coordinate Systems" className="rounded-md shadow-md mb-4"/>
        <p className="text-gray-300 mb-4">
          Computer graphics uses two main coordinate systems: Right-hand and Left-hand systems. In the right-hand system, the Z-axis points out of the screen, and in the left-hand system, it points into the screen.
        </p>
        <ul className="list-disc list-inside text-gray-400 space-y-2">
          <li><span className="font-semibold text-indigo-400">Right-Hand System:</span> Positive rotations follow the right-hand rule, with counterclockwise being positive.</li>
          <li><span className="font-semibold text-indigo-400">Left-Hand System:</span> Clockwise rotations are positive, and Z points into the page.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-indigo-300 mb-2">Input Devices</h2>
        <img src="https://source.unsplash.com/800x400/?computer,mouse" alt="Input Devices" className="rounded-md shadow-md mb-4"/>
        <p className="text-gray-300 mb-4">Common devices used in interactive computer graphics include:</p>
        <ul className="list-disc list-inside text-gray-400 space-y-2">
          <li><span className="font-semibold text-indigo-400">Mouse:</span> For positioning cursors and selecting objects.</li>
          <li><span className="font-semibold text-indigo-400">Joystick:</span> Often used in games for controlling movement.</li>
          <li><span className="font-semibold text-indigo-400">Data Gloves:</span> Used in virtual reality to interact with virtual objects.</li>
          <li><span className="font-semibold text-indigo-400">Digitizers:</span> For hand-drawing images or tracing designs.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-indigo-300 mb-2">Applications of Computer Graphics</h2>
        <img src="https://source.unsplash.com/800x400/?design,animation" alt="Applications of Computer Graphics" className="rounded-md shadow-md mb-4"/>
        <p className="text-gray-300 mb-4">Computer graphics are used in a variety of fields, such as:</p>
        <ul className="list-disc list-inside text-gray-400 space-y-2">
          <li><span className="font-semibold text-indigo-400">Computer-Aided Design (CAD):</span> Designing buildings, vehicles, and machinery.</li>
          <li><span className="font-semibold text-indigo-400">Entertainment:</span> Creating animations, video games, and movies.</li>
          <li><span className="font-semibold text-indigo-400">Visualization:</span> Scientific data visualization and simulation.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-indigo-300 mb-2">Graphics Libraries and Software</h2>
        <img src="https://source.unsplash.com/800x400/?software,graphics" alt="Graphics Libraries and Software" className="rounded-md shadow-md mb-4"/>
        <p className="text-gray-300 mb-4">There are various software and libraries that make creating graphics easier:</p>
        <ul className="list-disc list-inside text-gray-400 space-y-2">
          <li><span className="font-semibold text-indigo-400">OpenGL:</span> A cross-language, cross-platform API for rendering 2D and 3D graphics.</li>
          <li><span className="font-semibold text-indigo-400">Blender:</span> Free and open-source software for 3D modeling, animation, and rendering.</li>
          <li><span className="font-semibold text-indigo-400">Three.js:</span> A JavaScript library used to create 3D graphics in web browsers.</li>
        </ul>
      </section>
    </div>
  );
};

export default Introduction;
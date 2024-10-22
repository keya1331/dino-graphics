import React from 'react';

const Introduction = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Introduction to Computer Graphics</h2>
      <p>
        Computer graphics involve creating and manipulating visual content using computers. This includes both 2D and 3D graphics, and it's used in various applications like video games, simulations, movies, and more.
      </p>
      <h3>Classification</h3>
      <ul>
        <li>Raster Graphics: Representation of images as a grid of pixels.</li>
        <li>Vector Graphics: Representation using geometric shapes like lines and curves.</li>
      </ul>
      <h3>Characteristics</h3>
      <ul>
        <li>Interactive Graphics</li>
        <li>Real-time Rendering</li>
      </ul>
      <h3>Coordinate Representation</h3>
      <p>Computer graphics rely on coordinate systems to map visual elements. For example, 2D graphics use x-y coordinates, while 3D graphics use x-y-z coordinates.</p>
    </div>
  );
};

export default Introduction;
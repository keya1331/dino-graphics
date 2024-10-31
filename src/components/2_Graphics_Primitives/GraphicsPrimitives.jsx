import React, { useState, useRef, useEffect } from 'react';
import * as THREE from 'three';

const GraphicsPrimitives = () => {
  const [primitive, setPrimitive] = useState('line');
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    let shape;
    if (primitive === 'line') {
      const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
      const points = [new THREE.Vector3(-1, 0, 0), new THREE.Vector3(1, 1, 0)];
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      shape = new THREE.Line(geometry, material);
    } else if (primitive === 'circle') {
      const material = new THREE.LineBasicMaterial({ color: 0x00ff00 });
      const geometry = new THREE.CircleGeometry(1, 32);
      shape = new THREE.Line(geometry, material);
    } else if (primitive === 'ellipse') {
      const material = new THREE.LineBasicMaterial({ color: 0xff00ff });
      const geometry = new THREE.EllipseGeometry(1, 0.5, 32);
      shape = new THREE.Line(geometry, material);
    } else if (primitive === 'polygon') {
      const material = new THREE.LineBasicMaterial({ color: 0xff0000 });
      const points = [
        new THREE.Vector3(-1, -1, 0),
        new THREE.Vector3(1, -1, 0),
        new THREE.Vector3(0, 1, 0),
        new THREE.Vector3(-1, -1, 0),
      ];
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      shape = new THREE.Line(geometry, material);
    }

    scene.add(shape);
    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, [primitive]);

  const handlePrimitiveChange = (newPrimitive) => {
    setPrimitive(newPrimitive);
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-8 bg-gray-900 text-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-indigo-400 text-center mb-6">Graphics Primitives</h1>
      <div className="controls mb-8">
        <p className="text-lg">Select a primitive to draw:</p>
        <div className="flex space-x-4">
          <button
            onClick={() => handlePrimitiveChange('line')}
            className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600"
          >
            Draw Line
          </button>
          <button
            onClick={() => handlePrimitiveChange('circle')}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            Draw Circle
          </button>
          <button
            onClick={() => handlePrimitiveChange('ellipse')}
            className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600"
          >
            Draw Ellipse
          </button>
          <button
            onClick={() => handlePrimitiveChange('polygon')}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            Draw Polygon
          </button>
        </div>
      </div>
      <div ref={mountRef} className="canvas mb-8"></div>
      <div className="description text-gray-300">
        {primitive === 'line' && (
          <>
            <p>
              This primitive uses <strong>Bresenham's Line Algorithm</strong>, which efficiently determines the points of a raster line
              between two given points using integer arithmetic, thus minimizing the use of floating-point operations.
            </p>
            <h3 className="text-xl font-semibold text-indigo-300 mt-4">Bresenham's Line Algorithm Steps:</h3>
            <ul className="list-disc list-inside">
              <li>Calculate the differences: <strong>dx</strong> and <strong>dy</strong>.</li>
              <li>Determine the slope of the line and its direction.</li>
              <li>Iterate over the points, incrementing either x or y based on the slope.</li>
              <li>Plot each calculated point on the grid.</li>
            </ul>
            <h4 className="text-lg font-semibold mt-4">Example Visualization:</h4>
            <p>
              You can visualize this algorithm by clicking the "Draw Line" button multiple times to see how different lines are drawn.
            </p>
          </>
        )}
        {primitive === 'circle' && (
          <>
            <p>
              This primitive demonstrates the <strong>Midpoint Circle Algorithm</strong>, which calculates points on a circle
              using symmetry. It starts from the top point of the circle and leverages the eight-way symmetry to reduce
              the number of calculations.
            </p>
            <h3 className="text-xl font-semibold text-green-300 mt-4">Midpoint Circle Algorithm Steps:</h3>
            <ul className="list-disc list-inside">
              <li>Calculate the initial decision parameter based on the radius.</li>
              <li>Iterate through each point and use symmetry to draw in all eight octants.</li>
              <li>Update the decision parameter based on the position of the current point.</li>
            </ul>
            <h4 className="text-lg font-semibold mt-4">Example Visualization:</h4>
            <p>
              Click the "Draw Circle" button to visualize how circles are plotted at different radii.
            </p>
          </>
        )}
        {primitive === 'ellipse' && (
          <>
            <p>
              This demonstrates the <strong>Midpoint Ellipse Algorithm</strong>, which is an extension of the midpoint circle algorithm for ellipses.
              It calculates the points on the ellipse's circumference by exploiting symmetry.
            </p>
            <h3 className="text-xl font-semibold text-pink-300 mt-4">Midpoint Ellipse Algorithm Steps:</h3>
            <ul className="list-disc list-inside">
              <li>Calculate initial decision parameters for both axes (major and minor).</li>
              <li>Iterate through the first quadrant and use symmetry to plot points in the other quadrants.</li>
              <li>Adjust the decision parameter based on the relative position of the current point to the ellipse.</li>
            </ul>
            <h4 className="text-lg font-semibold mt-4">Example Visualization:</h4>
            <p>
              Use the "Draw Ellipse" button to see how different ellipse shapes are rendered.
            </p>
          </>
        )}
        {primitive === 'polygon' && (
          <>
            <p>
              For polygons, we showcase a simple triangle and discuss polygon types. Polygons can be classified as convex or concave.
            </p>
            <h3 className="text-xl font-semibold text-red-300 mt-4">Polygon Types:</h3>
            <ul className="list-disc list-inside">
              <li><span className="font-semibold text-red-400">Convex:</span> All interior angles are less than 180°.</li>
              <li><span className="font-semibold text-red-400">Concave:</span> At least one interior angle is greater than 180°.</li>
            </ul>
            <h3 className="text-xl font-semibold text-red-300 mt-4">Polygon Filling Algorithms:</h3>
            <ul className="list-disc list-inside">
              <li><span className="font-semibold text-red-400">Scanline Fill:</span> Fills polygons by processing horizontal lines across the screen and determining intersection points.</li>
              <li><span className="font-semibold text-red-400">Flood Fill:</span> Starts at a point and spreads outwards, filling the polygon's interior.</li>
            </ul>
            <h4 className="text-lg font-semibold mt-4">Example Visualization:</h4>
            <p>
              Click the "Draw Polygon" button to visualize how polygons are rendered based on the vertex points.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default GraphicsPrimitives;
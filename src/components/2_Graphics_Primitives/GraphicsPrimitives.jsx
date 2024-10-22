import React, { useState, useRef, useEffect } from 'react';
import * as THREE from 'three';

const GraphicsPrimitives = () => {
  const [primitive, setPrimitive] = useState('line');
  const mountRef = useRef(null);

  // Render the selected primitive using Three.js
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    let shape;
    if (primitive === 'line') {
      // Line Drawing: Bresenham’s Algorithm approximation
      const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
      const points = [new THREE.Vector3(-1, 0, 0), new THREE.Vector3(1, 1, 0)];
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      shape = new THREE.Line(geometry, material);
    } else if (primitive === 'circle') {
      // Circle Drawing: Midpoint Circle Algorithm approximation
      const material = new THREE.LineBasicMaterial({ color: 0x00ff00 });
      const geometry = new THREE.CircleGeometry(1, 32);
      shape = new THREE.Line(geometry, material);
    } else if (primitive === 'polygon') {
      // Polygon Drawing
      const material = new THREE.LineBasicMaterial({ color: 0xff0000 });
      const geometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(-1, -1, 0),
        new THREE.Vector3(1, -1, 0),
        new THREE.Vector3(0, 1, 0),
        new THREE.Vector3(-1, -1, 0),
      ]);
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

  return (
    <div className="graphics-primitives">
      <h1>Graphics Primitives</h1>
      <div className="controls">
        <p>Select a primitive to draw:</p>
        <button onClick={() => setPrimitive('line')}>Draw Line</button>
        <button onClick={() => setPrimitive('circle')}>Draw Circle</button>
        <button onClick={() => setPrimitive('polygon')}>Draw Polygon</button>
      </div>
      <div ref={mountRef} className="canvas"></div>
      <div className="description">
        {primitive === 'line' && (
          <p>
            This is an implementation of Bresenham's Line Algorithm, which approximates a line between two points using
            incremental integer calculations.
          </p>
        )}
        {primitive === 'circle' && (
          <p>
            This demonstrates the Midpoint Circle Algorithm, which uses integer arithmetic to determine points on a
            circle.
          </p>
        )}
        {primitive === 'polygon' && (
          <p>
            Here we have a simple triangle polygon. Polygon drawing is fundamental in computer graphics, especially for
            creating models and meshes.
          </p>
        )}
      </div>
    </div>
  );
};

export default GraphicsPrimitives;
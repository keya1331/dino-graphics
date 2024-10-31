import React, { useState, useEffect } from 'react';
import * as THREE from 'three';

const Transformations = () => {
  const [translateX, setTranslateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ffcc }); // Changed color to fit the theme
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = function () {
      requestAnimationFrame(animate);
      cube.position.x = translateX;
      cube.rotation.y = THREE.MathUtils.degToRad(rotateY); // Convert to radians for rotation
      cube.scale.set(scale, scale, scale);
      renderer.render(scene, camera);
    };
    animate();

    return () => document.body.removeChild(renderer.domElement);
  }, [translateX, rotateY, scale]);

  return (
    <div className="max-w-3xl mx-auto mt-10 p-8 bg-gray-900 text-white rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold text-indigo-400 text-center mb-6">2D and 3D Transformations</h2>
      <div className="mb-4">
        <label className="text-gray-300">Translate X: </label>
        <input type="range" min="-5" max="5" step="0.1" value={translateX} onChange={(e) => setTranslateX(parseFloat(e.target.value))} className="w-full" />
      </div>
      <div className="mb-4">
        <label className="text-gray-300">Rotate Y: </label>
        <input type="range" min="0" max="360" step="1" value={rotateY} onChange={(e) => setRotateY(parseFloat(e.target.value))} className="w-full" />
      </div>
      <div className="mb-4">
        <label className="text-gray-300">Scale: </label>
        <input type="range" min="0.1" max="2" step="0.1" value={scale} onChange={(e) => setScale(parseFloat(e.target.value))} className="w-full" />
      </div>
    </div>
  );
};

export default Transformations;
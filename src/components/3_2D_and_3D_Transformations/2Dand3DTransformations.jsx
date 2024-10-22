import React, { useState, useEffect } from 'react';
import * as THREE from 'three';

const Transformations = () => {
  const [translateX, setTranslateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    // Scene and camera setup for 3D transformations
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = function () {
      requestAnimationFrame(animate);
      cube.position.x = translateX;
      cube.rotation.y = rotateY;
      cube.scale.set(scale, scale, scale);
      renderer.render(scene, camera);
    };
    animate();

    return () => document.body.removeChild(renderer.domElement);
  }, [translateX, rotateY, scale]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>2D and 3D Transformations</h2>
      <label>Translate X: </label>
      <input type="range" min="-5" max="5" step="0.1" value={translateX} onChange={(e) => setTranslateX(parseFloat(e.target.value))} />
      <br />
      <label>Rotate Y: </label>
      <input type="range" min="0" max="360" step="1" value={rotateY} onChange={(e) => setRotateY(parseFloat(e.target.value))} />
      <br />
      <label>Scale: </label>
      <input type="range" min="0.1" max="2" step="0.1" value={scale} onChange={(e) => setScale(parseFloat(e.target.value))} />
    </div>
  );
};

export default Transformations;
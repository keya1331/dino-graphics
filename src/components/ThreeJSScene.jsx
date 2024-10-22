import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ThreeJSScene = () => {
  const mountRef = useRef(null); // To reference the DOM element

  // State to control translation, rotation, and scaling
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [translateZ, setTranslateZ] = useState(0);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [rotateZ, setRotateZ] = useState(0);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2;

    // AxesHelper
    const axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);

    // Cube geometry
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Edges
    const edgesGeometry = new THREE.EdgesGeometry(geometry);
    const edgesMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });
    const edges = new THREE.LineSegments(edgesGeometry, edgesMaterial);
    scene.add(edges);

    // Camera position
    camera.position.z = 5;

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Apply transformations
      cube.position.set(translateX, translateY, translateZ);
      cube.rotation.set(
        THREE.MathUtils.degToRad(rotateX),
        THREE.MathUtils.degToRad(rotateY),
        THREE.MathUtils.degToRad(rotateZ)
      );
      cube.scale.set(scale, scale, scale);

      // Update edges position and scale as well
      edges.position.copy(cube.position);
      edges.rotation.copy(cube.rotation);
      edges.scale.copy(cube.scale);

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup function
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, [translateX, translateY, translateZ, rotateX, rotateY, rotateZ, scale]);

  return (
    <>
      <div ref={mountRef} style={{ width: '100vw', height: '100vh' }} />
      <div style={{ position: 'absolute', top: 10, left: 10, background: 'white', padding: '10px' }}>
        <label>Translation X: </label>
        <input
          type="range"
          min="-5"
          max="5"
          step="0.1"
          value={translateX}
          onChange={(e) => setTranslateX(parseFloat(e.target.value))}
        />
        <br />
        <label>Translation Y: </label>
        <input
          type="range"
          min="-5"
          max="5"
          step="0.1"
          value={translateY}
          onChange={(e) => setTranslateY(parseFloat(e.target.value))}
        />
        <br />
        <label>Translation Z: </label>
        <input
          type="range"
          min="-5"
          max="5"
          step="0.1"
          value={translateZ}
          onChange={(e) => setTranslateZ(parseFloat(e.target.value))}
        />
        <br />
        <label>Rotation X: </label>
        <input
          type="range"
          min="0"
          max="360"
          step="1"
          value={rotateX}
          onChange={(e) => setRotateX(parseFloat(e.target.value))}
        />
        <br />
        <label>Rotation Y: </label>
        <input
          type="range"
          min="0"
          max="360"
          step="1"
          value={rotateY}
          onChange={(e) => setRotateY(parseFloat(e.target.value))}
        />
        <br />
        <label>Rotation Z: </label>
        <input
          type="range"
          min="0"
          max="360"
          step="1"
          value={rotateZ}
          onChange={(e) => setRotateZ(parseFloat(e.target.value))}
        />
        <br />
        <label>Scale: </label>
        <input
          type="range"
          min="0.1"
          max="2"
          step="0.1"
          value={scale}
          onChange={(e) => setScale(parseFloat(e.target.value))}
        />
      </div>
    </>
  );
};

export default ThreeJSScene;
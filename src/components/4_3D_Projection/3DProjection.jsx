import React, { useEffect } from 'react';
import * as THREE from 'three';

const ProjectionDemo = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const perspectiveCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const orthoCamera = new THREE.OrthographicCamera(-5, 5, 5, -5, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    let usePerspective = true;
    perspectiveCamera.position.z = 5;
    orthoCamera.position.z = 5;

    const animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, usePerspective ? perspectiveCamera : orthoCamera);
    };
    animate();

    return () => document.body.removeChild(renderer.domElement);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>3D Projection</h2>
      <p>Switch between Parallel and Perspective Projections.</p>
    </div>
  );
};

export default ProjectionDemo;
import React, { useState } from 'react';
import './ClippingComponent.css';

const ClippingComponent = () => {
  const [zoom, setZoom] = useState(1);
  const [clipWindow, setClipWindow] = useState({
    x: 50,
    y: 50,
    width: 200,
    height: 150,
  });
  const [path, setPath] = useState({ x: 0, y: 100 });
  const [isLineClipping, setIsLineClipping] = useState(false);

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.1, 3));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.1, 0.5));

  const handleClipWindowResize = (e) => {
    setClipWindow({
      ...clipWindow,
      width: Math.max(e.clientX - clipWindow.x, 100),
      height: Math.max(e.clientY - clipWindow.y, 100),
    });
  };

  const handlePathMove = () => {
    setPath((prev) => ({
      x: prev.x + 20,
      y: prev.y + 20,
    }));
    setIsLineClipping(true);
  };

  const clipPath = () => {
    return (
      path.x > clipWindow.x &&
      path.x < clipWindow.x + clipWindow.width &&
      path.y > clipWindow.y &&
      path.y < clipWindow.y + clipWindow.height
    );
  };

  return (
    <div className="clipping-component">
      <h2>Clipping Demonstrations</h2>
      <div className="controls">
        <button onClick={handleZoomIn}>Zoom In</button>
        <button onClick={handleZoomOut}>Zoom Out</button>
      </div>
      <div
        className="clipping-area"
        style={{
          width: '100%',
          height: '400px',
          position: 'relative',
          backgroundColor: '#0B2640',
          overflow: 'hidden',
          borderRadius: '10px',
          transform: `scale(${zoom})`,
          transformOrigin: 'top left',
        }}
      >
        <div
          className="clip-window"
          style={{
            position: 'absolute',
            top: `${clipWindow.y}px`,
            left: `${clipWindow.x}px`,
            width: `${clipWindow.width}px`,
            height: `${clipWindow.height}px`,
            border: '2px solid #B9DDFF',
            borderRadius: '10px',
            pointerEvents: 'none',
          }}
        ></div>

        <div
          className={`dino-path ${isLineClipping ? (clipPath() ? 'clipped' : '') : ''}`}
          style={{
            position: 'absolute',
            top: `${path.y}px`,
            left: `${path.x}px`,
            width: '30px',
            height: '30px',
            backgroundColor: '#FFB0A0',
            borderRadius: '50%',
            transition: 'all 0.2s',
          }}
        ></div>

        <div className="dinosaur" style={{ position: 'absolute', bottom: '10px', left: '40%' }}>
          🦖
        </div>
      </div>

      <div className="actions">
        <button onClick={handlePathMove}>Move Dino Path</button>
        <p>
          <strong>Path Position:</strong> ({path.x}, {path.y})
        </p>
        <p>
          <strong>Clip Window:</strong> ({clipWindow.x}, {clipWindow.y}), Width: {clipWindow.width}, Height: {clipWindow.height}
        </p>
      </div>
    </div>
  );
};

export default ClippingComponent;

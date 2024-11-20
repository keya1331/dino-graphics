import React, { useState, useRef, useEffect } from 'react';
import './DinoPathClipping.css';

const DinoPathClipping = () => {
  // State to store the positions and zoom factor
  const [clipWindow, setClipWindow] = useState({ x: 100, y: 100, width: 300, height: 200 });
  const [dinoPos, setDinoPos] = useState({ x: 50, y: 50 });
  const [linePath, setLinePath] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);

  // Ref for the canvas
  const canvasRef = useRef(null);

  // Ref for the dinosaur image
  const dinoImageRef = useRef(new Image());
  dinoImageRef.current.src = 'https://cdn-icons-png.freepik.com/512/7120/7120044.png'; // Add path to your dinosaur image

  // Function to handle mouse down event
  const startDrawing = (e) => {
    setIsDrawing(true);
    const { offsetX, offsetY } = e.nativeEvent;
    setLinePath([{ x: offsetX, y: offsetY }]);
  };

  // Function to handle mouse move event
  const drawPath = (e) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = e.nativeEvent;
    setLinePath((prevPath) => [...prevPath, { x: offsetX, y: offsetY }]);
    // Update dinosaur position with mouse cursor
    setDinoPos({ x: offsetX, y: offsetY });
  };

  // Function to handle mouse up event
  const stopDrawing = () => {
    setIsDrawing(false);
  };

  // Function to check if the point is inside the clipping window
  const isInsideClipWindow = (x, y) => {
    return (
      x > clipWindow.x &&
      x < clipWindow.x + clipWindow.width &&
      y > clipWindow.y &&
      y < clipWindow.y + clipWindow.height
    );
  };

  // Function to draw the path and check if it's clipped
  const draw = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Clear the canvas before drawing
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the clipping window
    ctx.strokeStyle = '#CFE1B9';
    ctx.lineWidth = 2;
    ctx.strokeRect(clipWindow.x, clipWindow.y, clipWindow.width, clipWindow.height);

    // Draw the dino path and check if it's clipped
    ctx.beginPath();
    ctx.moveTo(dinoPos.x, dinoPos.y);
    linePath.forEach((point) => {
      ctx.lineTo(point.x, point.y);
    });

    // Clip the path dynamically based on whether it's inside the clipping window
    linePath.forEach((point, index) => {
      if (!isInsideClipWindow(point.x, point.y)) {
        ctx.lineTo(point.x, point.y);
        ctx.strokeStyle = '#FF0000'; // Color path in red if clipped
      }
    });

    ctx.stroke();
  };

  // Function to move the dinosaur along the path
  const moveDinosaur = () => {
    if (linePath.length > 0) {
      const [nextPoint] = linePath;
      setDinoPos(nextPoint);
      setLinePath((prev) => prev.slice(1)); // Remove the first point to simulate movement
    }
  };

  useEffect(() => {
    // Draw the path and clipping window whenever the line path changes
    draw();
  }, [linePath, clipWindow]);

  return (
    <div className="dino-path-clipping">
      <h2>Dinosaur Line Path Clipping Challenge</h2>
      <div className="canvas-container" style={{ position: 'relative' }}>
        <canvas
          ref={canvasRef}
          width={800}
          height={600}
          onMouseDown={startDrawing}
          onMouseMove={drawPath}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          className="dino-canvas"
        />
        {/* Dinosaur image following the cursor */}
        <img
          src={dinoImageRef.current.src}
          alt="Dinosaur"
          style={{
            position: 'absolute',
            top: `${dinoPos.y - 20}px`, // Adjust to center the dino image
            left: `${dinoPos.x - 20}px`, // Adjust to center the dino image
            width: '40px', // Adjust the size of the dinosaur
            height: '40px', // Adjust the size of the dinosaur
            pointerEvents: 'none', // Ensure the dinosaur doesn't interfere with canvas events
          }}
        />
      </div>

      <div className="controls">
        <button onClick={moveDinosaur}>Move Dinosaur</button>
        <p>
          <strong>Dinosaur Position:</strong> ({dinoPos.x}, {dinoPos.y})
        </p>
        <p>
          <strong>Clip Window:</strong> ({clipWindow.x}, {clipWindow.y}), Width: {clipWindow.width}, Height: {clipWindow.height}
        </p>
      </div>

     
    </div>
  );
};

export default DinoPathClipping;

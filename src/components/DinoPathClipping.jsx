import React, { useState, useRef, useEffect } from 'react';
import './DinoPathClipping.css';

const DinoPathClipping = () => {
  const [clipWindow, setClipWindow] = useState({ x: 100, y: 100, width: 300, height: 200 });
  const [dinoPos, setDinoPos] = useState({ x: 50, y: 50 });
  const [linePath, setLinePath] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);

  const canvasRef = useRef(null);

  const dinoImageRef = useRef(new Image());
  dinoImageRef.current.src = 'https://cdn-icons-png.freepik.com/512/7120/7120044.png'; 

  const startDrawing = (e) => {
    setIsDrawing(true);
    const { offsetX, offsetY } = e.nativeEvent;
    setLinePath([{ x: offsetX, y: offsetY }]);
  };

  const drawPath = (e) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = e.nativeEvent;
    setLinePath((prevPath) => [...prevPath, { x: offsetX, y: offsetY }]);
    setDinoPos({ x: offsetX, y: offsetY });
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const isInsideClipWindow = (x, y) => {
    return (
      x > clipWindow.x &&
      x < clipWindow.x + clipWindow.width &&
      y > clipWindow.y &&
      y < clipWindow.y + clipWindow.height
    );
  };

  const draw = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = '#CFE1B9';
    ctx.lineWidth = 2;
    ctx.strokeRect(clipWindow.x, clipWindow.y, clipWindow.width, clipWindow.height);

    ctx.beginPath();
    ctx.moveTo(dinoPos.x, dinoPos.y);
    linePath.forEach((point) => {
      ctx.lineTo(point.x, point.y);
    });

    linePath.forEach((point, index) => {
      if (!isInsideClipWindow(point.x, point.y)) {
        ctx.lineTo(point.x, point.y);
        ctx.strokeStyle = '#FF0000'; 
      }
    });

    ctx.stroke();
  };

  const moveDinosaur = () => {
    if (linePath.length > 0) {
      const [nextPoint] = linePath;
      setDinoPos(nextPoint);
      setLinePath((prev) => prev.slice(1)); 
    }
  };

  useEffect(() => {
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
        <img
          src={dinoImageRef.current.src}
          alt="Dinosaur"
          style={{
            position: 'absolute',
            top: `${dinoPos.y - 20}px`,
            left: `${dinoPos.x - 20}px`, 
            width: '40px', 
            height: '40px',
            pointerEvents: 'none',
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

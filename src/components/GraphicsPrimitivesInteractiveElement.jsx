import React, { useState, useRef } from "react";

const bresenhamLine = (x0, y0, x1, y1, ctx) => {
  let dx = Math.abs(x1 - x0);
  let dy = Math.abs(y1 - y0);
  let sx = x0 < x1 ? 1 : -1;
  let sy = y0 < y1 ? 1 : -1;
  let err = dx - dy;

  while (true) {
    ctx.fillRect(x0, y0, 1, 1);
    if (x0 === x1 && y0 === y1) break;
    let e2 = 2 * err;
    if (e2 > -dy) { err -= dy; x0 += sx; }
    if (e2 < dx) { err += dx; y0 += sy; }
  }
};

const midpointCircle = (cx, cy, r, ctx) => {
  let x = r;
  let y = 0;
  let p = 1 - r;

  const drawCirclePoints = (cx, cy, x, y, ctx) => {
    ctx.fillRect(cx + x, cy + y, 1, 1);
    ctx.fillRect(cx - x, cy + y, 1, 1);
    ctx.fillRect(cx + x, cy - y, 1, 1);
    ctx.fillRect(cx - x, cy - y, 1, 1);
    ctx.fillRect(cx + y, cy + x, 1, 1);
    ctx.fillRect(cx - y, cy + x, 1, 1);
    ctx.fillRect(cx + y, cy - x, 1, 1);
    ctx.fillRect(cx - y, cy - x, 1, 1);
  };

  while (x >= y) {
    drawCirclePoints(cx, cy, x, y, ctx);
    y++;
    if (p <= 0) {
      p = p + 2 * y + 1;
    } else {
      x--;
      p = p + 2 * (y - x) + 1;
    }
  }
};

const scanlineFill = (points, ctx) => {
  const minY = Math.min(...points.map(p => p.y));
  const maxY = Math.max(...points.map(p => p.y));

  for (let y = minY; y <= maxY; y++) {
    const intersections = [];
    for (let i = 0; i < points.length; i++) {
      const p1 = points[i];
      const p2 = points[(i + 1) % points.length];
      if ((p1.y <= y && p2.y > y) || (p2.y <= y && p1.y > y)) {
        const x = p1.x + ((y - p1.y) / (p2.y - p1.y)) * (p2.x - p1.x);
        intersections.push(x);
      }
    }
    intersections.sort((a, b) => a - b);

    for (let i = 0; i < intersections.length; i += 2) {
      const x1 = intersections[i];
      const x2 = intersections[i + 1];
      for (let x = x1; x <= x2; x++) {
        ctx.fillRect(x, y, 1, 1);
      }
    }
  }
};

const GraphicsPrimitivesInteractiveElement = () => {
  const canvasRef = useRef(null);
  const [points, setPoints] = useState([]);
  const [shape, setShape] = useState("line");
  const [fill, setFill] = useState("noFill");

  const handleCanvasClick = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPoints((prevPoints) => {
      const newPoints = [...prevPoints, { x, y }];
      redrawCanvas(newPoints, ctx);
      return newPoints;
    });
  };

  const redrawCanvas = (points, ctx) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    ctx.fillStyle = "#e0e0e0";
    points.forEach((point) => {
      ctx.fillRect(point.x, point.y, 3, 3);
    });

    if (points.length >= 2 && shape === "line") {
      bresenhamLine(points[0].x, points[0].y, points[1].x, points[1].y, ctx);
    }

    if (points.length >= 2 && shape === "circle") {
      const radius = Math.sqrt(
        Math.pow(points[0].x - points[1].x, 2) + Math.pow(points[0].y - points[1].y, 2)
      );
      midpointCircle(points[0].x, points[0].y, radius, ctx);
    }

    if (points.length >= 3 && shape === "polygon") {
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      points.forEach((point) => {
        ctx.lineTo(point.x, point.y);
      });
      ctx.closePath();
      ctx.strokeStyle = "#e0e0e0";
      ctx.stroke();

      if (fill === "fill") {
        scanlineFill(points, ctx);
      }
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setPoints([]);
  };

  return (
    <div className="flex flex-col items-center justify-center py-10 px-4 space-y-8 text-gray-100">
      <div className="relative">
        <canvas
          ref={canvasRef}
          width={600}
          height={400}
          onClick={handleCanvasClick}
          className="border border-gray-700 rounded-lg shadow-md"
          style={{ backgroundColor: "#1a1a1a" }}
        ></canvas>
        <div className="absolute top-2 left-2 px-2 py-1 bg-gray-800 text-xs font-medium text-gray-300 rounded-md shadow-md">
          Click to draw
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <label className="text-sm font-medium">Shape:</label>
        <select
          onChange={(e) => setShape(e.target.value)}
          className="bg-gray-800 text-gray-300 border border-gray-700 rounded-md px-3 py-1 shadow-sm focus:outline-none focus:ring focus:ring-gray-600"
        >
          <option value="line">Line</option>
          <option value="circle">Circle</option>
          <option value="polygon">Polygon</option>
        </select>

        <label className="text-sm font-medium">Fill:</label>
        <select
          onChange={(e) => setFill(e.target.value)}
          className="bg-gray-800 text-gray-300 border border-gray-700 rounded-md px-3 py-1 shadow-sm focus:outline-none focus:ring focus:ring-gray-600"
        >
          <option value="noFill">No Fill</option>
          <option value="fill">Fill</option>
        </select>

        <button
          onClick={clearCanvas}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-md shadow-sm font-medium transition-all duration-200"
        >
          Clear
        </button>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-xl font-semibold text-gray-300 mb-4">How to Use</h2>
        <p className="text-sm text-gray-400 mb-2">
          1. Click anywhere on the canvas to start drawing.
        </p>
        <p className="text-sm text-gray-400 mb-2">
          2. Choose a shape from the dropdown menu (Line, Circle, or Polygon).
        </p>
        <p className="text-sm text-gray-400 mb-2">
          3. If you select "Polygon", click to add points. The polygon will be completed when the last point connects to the first point.
        </p>
        <p className="text-sm text-gray-400 mb-2">
          4. Toggle the "Fill" option to fill the shape with color.
        </p>
        <p className="text-sm text-gray-400">
          5. Click "Clear" to reset the canvas and start fresh.
        </p>
      </div>
    </div>
  );
};

export default GraphicsPrimitivesInteractiveElement;
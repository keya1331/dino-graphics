import React, { useState, useRef } from "react";
import { FaDrawPolygon, FaCircle, FaPen, FaEraser } from "react-icons/fa"; // You can import icons for shapes

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

const GraphicsPrimitivesInteractiveElement = () => {
  const canvasRef = useRef(null);
  const [points, setPoints] = useState([]);
  const [shape, setShape] = useState("line");

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

    points.forEach((point) => {
      ctx.fillStyle = "black";
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
      ctx.strokeStyle = "black";
      ctx.stroke();
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setPoints([]);
  };

  return (
    <div className="flex">
      <div className="flex flex-col items-center w-20 bg-gray-200 p-4">
        <div
          onClick={() => setShape("line")}
          className="cursor-pointer p-2 hover:bg-gray-300"
        >
          <FaPen size={24} />
        </div>
        <div
          onClick={() => setShape("circle")}
          className="cursor-pointer p-2 hover:bg-gray-300"
        >
          <FaCircle size={24} />
        </div>
        <div
          onClick={() => setShape("polygon")}
          className="cursor-pointer p-2 hover:bg-gray-300"
        >
          <FaDrawPolygon size={24} />
        </div>
        <div
          onClick={clearCanvas}
          className="cursor-pointer p-2 hover:bg-red-500 hover:text-white mt-4"
        >
          <FaEraser size={24} />
        </div>
      </div>

      <div className="flex flex-col items-center ml-4">
        <canvas
          ref={canvasRef}
          width={600}
          height={400}
          onClick={handleCanvasClick}
          style={{ border: "1px solid black", backgroundColor: "#f0f0f0" }}
        ></canvas>
      </div>
    </div>
  );
};

export default GraphicsPrimitivesInteractiveElement;
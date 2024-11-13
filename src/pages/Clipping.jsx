import React, { useRef, useState, useEffect } from "react";
import SectionPage from "../components/TemplatePageHeader";
import { motion } from "framer-motion";
// Define the clipping boundary (Viewport)
const VIEWPORT = {
  xMin: 150,
  yMin: 150,
  xMax: 350,
  yMax: 350,
};

const topics = [
  {
    title: "Viewing Transformation",
    description:
      "Viewing transformation allows the adjustment of a 3D scene’s viewpoint, simulating how objects would appear from various perspectives. This is crucial for framing and orienting graphics effectively within a viewport.",
    image: "path/to/viewing-transformation-image.jpg",
  },
  {
    title: "Window to Viewport Coordinate Transformation",
    description:
      "This transformation scales and maps window coordinates to the viewport, ensuring graphics fit proportionally. It’s especially useful in creating a consistent view across different screen sizes and resolutions.",
    image: "path/to/window-to-viewport-image.jpg",
  },
  {
    title: "Point Clipping",
    description:
      "Point clipping determines if a given point is within the clipping boundaries. If outside, the point is discarded. This is an efficient way to manage points in a viewport without overloading the rendering process.",
    image: "path/to/point-clipping-image.jpg",
  },
  {
    title: "Line Clipping",
    description:
      "Line clipping removes line segments or parts of lines that fall outside the viewport, enhancing rendering efficiency by discarding unnecessary portions.",
    image: "path/to/line-clipping-image.jpg",
  },
  {
    title: "Cohen-Sutherland Line Clipping Algorithm",
    description:
      "The Cohen-Sutherland algorithm is an efficient line-clipping technique that uses region codes to determine whether a line segment is within or outside a clipping boundary.",
    image: "path/to/cohen-sutherland-image.jpg",
  },
  {
    title: "Mid-Point Line Clipping Algorithm",
    description:
      "This algorithm clips lines by iteratively checking and subdividing the midpoint of the line segment, making it a suitable choice for precise clipping of complex lines.",
    image: "path/to/mid-point-line-clipping-image.jpg",
  },
  {
    title: "Polygon Clipping",
    description:
      "Polygon clipping determines which portions of a polygon are visible within a viewport, discarding any areas outside the boundary. It is essential for rendering only relevant sections of complex shapes.",
    image: "path/to/polygon-clipping-image.jpg",
  },
  {
    title: "Sutherland-Hodgeman Algorithm",
    description:
      "A well-known algorithm for polygon clipping, the Sutherland-Hodgeman algorithm efficiently processes vertices to determine the clipped polygon within a given boundary.",
    image: "path/to/sutherland-hodgeman-image.jpg",
  },
  {
    title: "Weiler-Atherton Algorithm",
    description:
      "The Weiler-Atherton algorithm handles complex polygons by dividing and clipping concave polygons, making it more versatile in handling intricate shapes.",
    image: "path/to/weiler-atherton-image.jpg",
  },
  {
    title: "Curve Clipping",
    description:
      "Curve clipping trims sections of a curve outside the clipping boundaries, particularly useful in situations involving arcs and other curved lines.",
    image: "path/to/curve-clipping-image.jpg",
  },
  {
    title: "Text Clipping",
    description:
      "Text clipping controls how text is displayed within boundaries, ensuring words do not exceed designated areas. This is crucial in user interface design and data visualization.",
    image: "path/to/text-clipping-image.jpg",
  },
  {
    title: "Interior Exterior Clipping",
    description:
      "Interior and exterior clipping techniques help define boundaries within which graphics are displayed, allowing for precise control over what is rendered.",
    image: "path/to/interior-exterior-clipping-image.jpg",
  },
  {
    title: "3D Clipping",
    description:
      "3D clipping extends clipping techniques to three-dimensional space, determining which portions of 3D objects are visible within the viewing frustum.",
    image: "path/to/3d-clipping-image.jpg",
  },
  {
    title: "3D Mid-Point Subdivision Algorithm",
    description:
      "This 3D algorithm recursively subdivides objects to check visibility within a 3D boundary, an essential process for accurately displaying complex 3D scenes.",
    image: "path/to/3d-midpoint-subdivision-image.jpg",
  },
];

const Clipping = () => {
  const canvasRef = useRef(null);
  const [points, setPoints] = useState([]); // Store clicked points
  const [lines, setLines] = useState([]); // Store drawn lines
  const [clipType, setClipType] = useState("none"); // To toggle clipping
  const [isDrawing, setIsDrawing] = useState(false); // Toggle line drawing

  // Function to handle clicks on canvas
  const handleCanvasClick = (e) => {
    const ctx = canvasRef.current.getContext("2d");
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Add point on click
    setPoints((prevPoints) => [...prevPoints, { x, y }]);

    // If drawing is enabled, connect the last two points
    if (isDrawing && points.length > 0) {
      const lastPoint = points[points.length - 1];
      setLines((prevLines) => [
        ...prevLines,
        { x1: lastPoint.x, y1: lastPoint.y, x2: x, y2: y },
      ]);
    }
  };

  // Draw the viewport (clipping area)
  const drawViewport = (ctx) => {
    ctx.strokeStyle = "#FFFFFF"; // Change to #B9DDFF
    ctx.lineWidth = 2;
    ctx.strokeRect(
      VIEWPORT.xMin,
      VIEWPORT.yMin,
      VIEWPORT.xMax - VIEWPORT.xMin,
      VIEWPORT.yMax - VIEWPORT.yMin
    );
  };

  // Function to draw points and lines
  const drawElements = (ctx) => {
    ctx.fillStyle = "#FFB9FA"; // Change points to #FFB9FA
    points.forEach((point) => {
      ctx.beginPath();
      ctx.arc(point.x, point.y, 5, 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.strokeStyle = "#B9DDFF"; // Change lines to #FFF9B9
    ctx.lineWidth = 2;
    lines.forEach((line) => {
      ctx.beginPath();
      ctx.moveTo(line.x1, line.y1);
      ctx.lineTo(line.x2, line.y2);
      ctx.stroke();
    });
  };

  // Example of Point Clipping
  const pointClipping = (x, y, ctx) => {
    if (
      x >= VIEWPORT.xMin &&
      x <= VIEWPORT.xMax &&
      y >= VIEWPORT.yMin &&
      y <= VIEWPORT.yMax
    ) {
      ctx.fillStyle = "#00FF00"; // Green for clipped points
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, Math.PI * 2);
      ctx.fill();
    }
  };

  // Cohen-Sutherland Line Clipping Algorithm
  const cohenSutherlandLineClip = (x0, y0, x1, y1, ctx) => {
    let code0 = computeCode(x0, y0);
    let code1 = computeCode(x1, y1);
    let accept = false;

    while (true) {
      if ((code0 | code1) === 0) {
        accept = true;
        break;
      } else if ((code0 & code1) !== 0) {
        break;
      } else {
        let codeOut;
        let x, y;

        if (code0 !== 0) {
          codeOut = code0;
        } else {
          codeOut = code1;
        }

        if (codeOut & 8) {
          x = VIEWPORT.xMin + ((x0 - x1) * (VIEWPORT.yMax - y0)) / (y0 - y1);
          y = VIEWPORT.yMax;
        } else if (codeOut & 4) {
          x = VIEWPORT.xMin + ((x0 - x1) * (VIEWPORT.yMin - y0)) / (y0 - y1);
          y = VIEWPORT.yMin;
        } else if (codeOut & 2) {
          y = VIEWPORT.yMin + ((y0 - y1) * (VIEWPORT.xMax - x0)) / (x0 - x1);
          x = VIEWPORT.xMax;
        } else if (codeOut & 1) {
          y = VIEWPORT.yMin + ((y0 - y1) * (VIEWPORT.xMin - x0)) / (x0 - x1);
          x = VIEWPORT.xMin;
        }

        if (codeOut === code0) {
          x0 = x;
          y0 = y;
          code0 = computeCode(x0, y0);
        } else {
          x1 = x;
          y1 = y;
          code1 = computeCode(x1, y1);
        }
      }
    }

    if (accept) {
      ctx.beginPath();
      ctx.moveTo(x0, y0);
      ctx.lineTo(x1, y1);
      ctx.strokeStyle = "#00FF00"; // Green for the clipped line
      ctx.lineWidth = 2;
      ctx.stroke();
    }
  };

  // Cohen-Sutherland Code Calculation
  const computeCode = (x, y) => {
    let code = 0;
    if (x < VIEWPORT.xMin)
      code |= 1; // Left
    else if (x > VIEWPORT.xMax) code |= 2; // Right
    if (y < VIEWPORT.yMin)
      code |= 4; // Bottom
    else if (y > VIEWPORT.yMax) code |= 8; // Top
    return code;
  };

  // Draw the clipped elements based on the chosen clipping type
  const drawClip = (ctx) => {
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    drawViewport(ctx);
    drawElements(ctx);

    // Apply clipping if selected
    if (clipType === "point") {
      points.forEach((point) => pointClipping(point.x, point.y, ctx));
    } else if (clipType === "line") {
      lines.forEach((line) =>
        cohenSutherlandLineClip(line.x1, line.y1, line.x2, line.y2, ctx)
      );
    }
  };

  // Update canvas when points, lines or clipping changes
  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    drawClip(ctx);
  }, [points, lines, clipType]);

  return (
    <div className="main flex flex-col items-center justify-center px-6 py-10 text-center">
      <SectionPage
        sectionTitle="Clipping"
        sectionNumber="05"
        sectionDescription="Techniques to display visible portions of graphics within viewports."
        currentSection="Clipping"
      />

      <div className="flex flex-col items-center mt-10">
        <canvas
          ref={canvasRef}
          width={500}
          height={500}
          style={{ border: "2px solid black", marginTop: "20px" }}
          onClick={handleCanvasClick}
        ></canvas>
      </div>

      {/* Clipping buttons */}
      <div className="button-group mt-4 flex flex-wrap justify-center gap-4">
        <button
          onClick={() => setClipType("none")}
          className="bg-[#B9DDFF] text-[#0B2640] p-2 rounded shadow-lg hover:bg-[#A1C5D7] transition duration-300"
        >
          Reset Clipping
        </button>
        <button
          onClick={() => setClipType("point")}
          className="bg-[#B9DDFF] text-[#0B2640] p-2 rounded shadow-lg hover:bg-[#A1C5D7] transition duration-300"
        >
          Point Clipping
        </button>
        <button
          onClick={() => setClipType("line")}
          className="bg-[#B9DDFF] text-[#0B2640] p-2 rounded shadow-lg hover:bg-[#A1C5D7] transition duration-300"
        >
          Line Clipping
        </button>
      </div>

      {/* Drawing toggle button */}
      <div className="toggle-drawing mt-4">
        <button
          onClick={() => setIsDrawing(!isDrawing)}
          className="bg-[#B9DDFF] text-[#0B2640] p-2 rounded shadow-lg hover:bg-[#A1C5D7] transition duration-300"
        >
          {isDrawing ? "Stop Drawing Lines" : "Start Drawing Lines"}
        </button>
      </div>

      {/* Topics Section */}
      <div className="topics-container flex flex-col mt-10 space-y-10">
        {topics.map((topic, index) => (
          <motion.div
            key={index}
            className="topic-item flex items-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Image on the left */}
            <div className="w-1/3">
              <img
                src={topic.image}
                alt={topic.title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Content on the right */}
            <div className="w-2/3 pl-6">
              <h3 className="text-2xl font-bold text-[#F2FFFC] mb-2">
                {topic.title}
              </h3>
              <p className="text-base text-gray-700">{topic.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Clipping;

import React, { useEffect } from "react";
import SectionPage from "../components/TemplatePageHeader";
import CodeBlock from "../components/CodeBlock";
import GraphicsPrimitivesInteractiveElement from "../components/GraphicsPrimitivesInteractiveElement";
import AOS from 'aos';
import 'aos/dist/aos.css';

const algorithms = {
  DDA: `function DDA(x1, y1, x2, y2) {
  let dx = x2 - x1;
  let dy = y2 - y1;
  let steps = Math.max(Math.abs(dx), Math.abs(dy));
  let xIncrement = dx / steps;
  let yIncrement = dy / steps;
  let x = x1;
  let y = y1;
  for (let i = 0; i <= steps; i++) {
    plot(Math.round(x), Math.round(y));
    x += xIncrement;
    y += yIncrement;
  }
}`,
  bresenham: `function bresenham(x1, y1, x2, y2) {
  let dx = Math.abs(x2 - x1);
  let dy = Math.abs(y2 - y1);
  let p = 2 * dy - dx;
  let twoDy = 2 * dy;
  let twoDyMinusDx = 2 * (dy - dx);
  let x, y, xEnd;

  if (x1 > x2) {
    x = x2;
    y = y2;
    xEnd = x1;
  } else {
    x = x1;
    y = y1;
    xEnd = x2;
  }
  plot(x, y);

  while (x < xEnd) {
    x++;
    if (p < 0) {
      p += twoDy;
    } else {
      y++;
      p += twoDyMinusDx;
    }
    plot(x, y);
  }
}`,
  circle: `function midpointCircle(x0, y0, radius) {
  let x = radius;
  let y = 0;
  let p = 1 - radius;

  plotCirclePoints(x0, y0, x, y);

  while (x > y) {
    y++;
    if (p <= 0) {
      p = p + 2 * y + 1;
    } else {
      x--;
      p = p + 2 * y - 2 * x + 1;
    }
    plotCirclePoints(x0, y0, x, y);
  }
}`,
  ellipse: `function midpointEllipse(xCenter, yCenter, rx, ry) {
  let x = 0;
  let y = ry;
  let p1 = Math.pow(ry, 2) - Math.pow(rx, 2) * ry + 0.25 * Math.pow(rx, 2);

  while (2 * Math.pow(ry, 2) * x <= 2 * Math.pow(rx, 2) * y) {
    plotEllipsePoints(xCenter, yCenter, x, y);
    x++;
    if (p1 < 0) {
      p1 += 2 * Math.pow(ry, 2) * x + Math.pow(ry, 2);
    } else {
      y--;
      p1 += 2 * Math.pow(ry, 2) * x - 2 * Math.pow(rx, 2) * y + Math.pow(ry, 2);
    }
  }

  let p2 = Math.pow(ry, 2) * Math.pow(x + 0.5, 2) + Math.pow(rx, 2) * Math.pow(y - 1, 2) - Math.pow(rx * ry, 2);
  while (y >= 0) {
    plotEllipsePoints(xCenter, yCenter, x, y);
    y--;
    if (p2 > 0) {
      p2 -= 2 * Math.pow(rx, 2) * y + Math.pow(rx, 2);
    } else {
      x++;
      p2 += 2 * Math.pow(ry, 2) * x - 2 * Math.pow(rx, 2) * y + Math.pow(rx, 2);
    }
  }
}`,
  scanLine: `function scanLineFill(polygon, imageWidth, imageHeight) {
  let intersections = [];
  let filledPixels = [];
  for (let y = 0; y < imageHeight; y++) {
    intersections = [];
    for (let i = 0; i < polygon.length; i++) {
      let p1 = polygon[i];
      let p2 = polygon[(i + 1) % polygon.length];
      if ((p1.y > y && p2.y <= y) || (p2.y > y && p1.y <= y)) {
        let xIntersection = (y - p1.y) * (p2.x - p1.x) / (p2.y - p1.y) + p1.x;
        intersections.push(xIntersection);
      }
    }
    intersections.sort((a, b) => a - b);
    for (let i = 0; i < intersections.length; i += 2) {
      for (let x = intersections[i]; x < intersections[i + 1]; x++) {
        filledPixels.push({ x, y });
      }
    }
  }
  return filledPixels;
}`,
  edgeFill: `function edgeFill(polygon, imageWidth, imageHeight) {
  let filledPixels = [];
  for (let y = 0; y < imageHeight; y++) {
    let edgeStart = null;
    let edgeEnd = null;
    for (let i = 0; i < polygon.length; i++) {
      let p1 = polygon[i];
      let p2 = polygon[(i + 1) % polygon.length];
      if (p1.y == p2.y && p1.y == y) {
        if (p1.x < p2.x) {
          edgeStart = p1.x;
          edgeEnd = p2.x;
        } else {
          edgeStart = p2.x;
          edgeEnd = p1.x;
        }
      }
    }
    for (let x = edgeStart; x < edgeEnd; x++) {
      filledPixels.push({ x, y });
    }
  }
  return filledPixels;
}`,
  seedFill: `function seedFill(x, y, targetColor, fillColor, image) {
  let stack = [[x, y]];
  let filledPixels = [];
  while (stack.length > 0) {
    let [currentX, currentY] = stack.pop();
    if (currentX < 0 || currentX >= image.length || currentY < 0 || currentY >= image[0].length) continue;
    if (image[currentX][currentY] !== targetColor) continue;
    image[currentX][currentY] = fillColor;
    filledPixels.push({ x: currentX, y: currentY });
    stack.push([currentX + 1, currentY]);
    stack.push([currentX - 1, currentY]);
    stack.push([currentX, currentY + 1]);
    stack.push([currentX, currentY - 1]);
  }
  return filledPixels;
}`,
  floodFill: `function floodFill(x, y, targetColor, fillColor, image) {
  let stack = [[x, y]];
  let filledPixels = [];
  while (stack.length > 0) {
    let [currentX, currentY] = stack.pop();
    if (currentX < 0 || currentX >= image.length || currentY < 0 || currentY >= image[0].length) continue;
    if (image[currentX][currentY] !== targetColor) continue;
    image[currentX][currentY] = fillColor;
    filledPixels.push({ x: currentX, y: currentY });
    stack.push([currentX + 1, currentY]);
    stack.push([currentX - 1, currentY]);
    stack.push([currentX, currentY + 1]);
    stack.push([currentX, currentY - 1]);
  }
  return filledPixels;
}`,
};

const GraphicsPrimitives = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="main">
      <div className="w-[50vw] flex flex-col items-center justify-center space-y-16 px-6 py-12">
        <SectionPage
          sectionTitle="Graphics Primitives"
          sectionNumber="02"
          sectionDescription="Explore basic drawing algorithms for lines, circles, and ellipses, and learn the fundamentals of polygon filling and transformations in computer graphics."
          currentSection="GraphicsPrimitives"
        />

        <div>
          <GraphicsPrimitivesInteractiveElement />
        </div>

        <div className="content-container space-y-36">
          <section className="line-drawing" data-aos="fade-up">
            <h2 className="section-heading">Line Drawing Algorithms</h2>
            <p className="section-description">
              Explore methods to draw lines with different algorithms like DDA and Bresenham’s Line Algorithm.
            </p>

            <h3 className="subheading mt-12" data-aos="fade-up">DDA Line Algorithm</h3>
            <CodeBlock code={algorithms.DDA} data-aos="fade-up" />

            <h3 className="subheading mt-12" data-aos="fade-up">Bresenham's Line Algorithm</h3>
            <CodeBlock code={algorithms.bresenham} data-aos="fade-up" />
          </section>

          <section className="circle-drawing" data-aos="fade-up">
            <h2 className="section-heading">Circle Drawing Algorithm</h2>
            <p className="section-description">
              Learn how to draw a circle using the Midpoint Circle Algorithm.
            </p>

            <h3 className="subheading mt-12" data-aos="fade-up">Midpoint Circle Algorithm</h3>
            <CodeBlock code={algorithms.circle} data-aos="fade-up" />
          </section>

          <section className="ellipse-drawing" data-aos="fade-up">
            <h2 className="section-heading">Ellipse Drawing Algorithm</h2>
            <p className="section-description">
              Learn how to draw ellipses with the Midpoint Ellipse Algorithm.
            </p>

            <h3 className="subheading mt-12" data-aos="fade-up">Midpoint Ellipse Algorithm</h3>
            <CodeBlock code={algorithms.ellipse} data-aos="fade-up" />
          </section>

          <section className="polygon-filling" data-aos="fade-up">
            <h2 className="section-heading">Polygon Filling Algorithms</h2>
            <p className="section-description">
              Explore various techniques like scan-line, edge-fill, and flood-fill for filling polygons.
            </p>

            <h3 className="subheading mt-12" data-aos="fade-up">Scan Line Filling Algorithm</h3>
            <CodeBlock code={algorithms.scanLine} data-aos="fade-up" />

            <h3 className="subheading mt-12" data-aos="fade-up">Edge Fill Algorithm</h3>
            <CodeBlock code={algorithms.edgeFill} data-aos="fade-up" />

            <h3 className="subheading mt-12" data-aos="fade-up">Seed Fill Algorithm</h3>
            <CodeBlock code={algorithms.seedFill} data-aos="fade-up" />

            <h3 className="subheading mt-12" data-aos="fade-up">Flood Fill Algorithm</h3>
            <CodeBlock code={algorithms.floodFill} data-aos="fade-up" />
          </section>
        </div>

        <div className="learn-more" data-aos="fade-up">
          <h3 className="section-heading">If you want to learn more</h3>
          <ul className="links-list">
            <li>
              <a
                href="https://www.tutorialspoint.com/computer_graphics/computer_graphics_primitives.htm"
                className="custom-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Basic Computer Graphics Primitives - TutorialsPoint
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GraphicsPrimitives;
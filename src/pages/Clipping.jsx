import React, { useState } from "react";
import SectionPage from "../components/TemplatePageHeader";
import { motion } from "framer-motion";
import ClippingComponent from "../components/ClippingComponent";
import DinoPathClipping from "../components/DinoPathClipping";

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
    image: "https://media.geeksforgeeks.org/wp-content/uploads/20190616100441/window-viewport.jpg",
  },
  {
    title: "Window to Viewport Coordinate Transformation",
    description:
      "This transformation scales and maps window coordinates to the viewport, ensuring graphics fit proportionally. It’s especially useful in creating a consistent view across different screen sizes and resolutions.",
    image: "https://kartoweb.itc.nl/geometrics/Bitmaps/coordtrans%202D.gif",
  },
  {
    title: "Point Clipping",
    description:
      "Point clipping determines if a given point is within the clipping boundaries. If outside, the point is discarded. This is an efficient way to manage points in a viewport without overloading the rendering process.",
    image: "https://i.imgur.com/655n3WH.png",
  },
  {
    title: "Line Clipping",
    description:
      "Line clipping removes line segments or parts of lines that fall outside the viewport, enhancing rendering efficiency by discarding unnecessary portions.",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Line2_clipping.png",
  },
  {
    title: "Cohen-Sutherland Line Clipping Algorithm",
    description:
      "The Cohen-Sutherland algorithm is an efficient line-clipping technique that uses region codes to determine whether a line segment is within or outside a clipping boundary.",
    image: "https://media.teachingbee.in/wp-content/uploads/2022/05/Screenshot-2022-05-31-at-10.25.04-AM-1024x767.jpg",
  },
  {
    title: "Mid-Point Line Clipping Algorithm",
    description:
      "This algorithm clips lines by iteratively checking and subdividing the midpoint of the line segment, making it a suitable choice for precise clipping of complex lines.",
    image: "https://static.javatpoint.com/tutorial/computer-graphics/images/mid-point-subdivision-line-clipping-algorithm5.jpg",
  },
  {
    title: "Polygon Clipping",
    description:
      "Polygon clipping determines which portions of a polygon are visible within a viewport, discarding any areas outside the boundary. It is essential for rendering only relevant sections of complex shapes.",
    image: "https://images.javatpoint.com/tutorial/computer-graphics/images/computer-graphics-weiler-atherton-polygon-clipping.png",
  },
  {
    title: "Sutherland-Hodgeman Algorithm",
    description:
      "A well-known algorithm for polygon clipping, the Sutherland-Hodgeman algorithm efficiently processes vertices to determine the clipped polygon within a given boundary.",
    image: "https://images.javatpoint.com/tutorial/computer-graphics/images/computer-graphics-suther-and-hodgeman-polygon-clipping.png",
  },
  {
    title: "Weiler-Atherton Algorithm",
    description:
      "The Weiler-Atherton algorithm handles complex polygons by dividing and clipping concave polygons, making it more versatile in handling intricate shapes.",
    image: "https://images.javatpoint.com/tutorial/computer-graphics/images/computer-graphics-weiler-atherton-polygon-clipping1.png",
  },
  {
    title: "Curve Clipping",
    description:
      "Curve clipping trims sections of a curve outside the clipping boundaries, particularly useful in situations involving arcs and other curved lines.",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgD6Sn0__GEL7e83ukztYX7SZZ1r8oAwo1bF9-I5WGfd6UAArsz2yvXFbH22JLwKPJmji5HGi6S9q1s1CsVdGSuRunMHeVkJ0E1jApa5A0YmKsA-3EL7Qxk0KZxhimCVoIKh5o2Y6A3rQ/s1600/Area-or-Curve-Clipping-in-computer-graphics-www.allbca.com.webp",
  },
  {
    title: "Text Clipping",
    description:
      "Text clipping controls how text is displayed within boundaries, ensuring words do not exceed designated areas. This is crucial in user interface design and data visualization.",
    image: "https://www.tutorialspoint.com/computer_graphics/images/text_clipping.jpg",
  },
  {
    title: "Interior Exterior Clipping",
    description:
      "Interior and exterior clipping techniques help define boundaries within which graphics are displayed, allowing for precise control over what is rendered.",
    image: "https://images.javatpoint.com/tutorial/computer-graphics/images/computer-graphics-clipping1.jpg",
  },
  {
    title: "3D Clipping",
    description:
      "3D clipping extends clipping techniques to three-dimensional space, determining which portions of 3D objects are visible within the viewport.",
    image: "https://i.ytimg.com/vi/JfXDtLhQ00M/maxresdefault.jpg",
  },
];

const Clipping = () => {
  const [activeTopic, setActiveTopic] = useState(null);

  return (
    <div className="main">
      <div className="w-[50vw] flex flex-col items-center justify-center space-y-16 px-6 py-12">
        <SectionPage
          sectionTitle="Clipping"
          sectionNumber="05"
          sectionDescription="Learn about different clipping techniques, including point, line, polygon, and curve clipping. Explore algorithms like Cohen-Sutherland and Sutherland-Hodgeman."
          currentSection="Clipping"
        />

        <ClippingComponent/>

        <DinoPathClipping/>


        <div className="content-container space-y-16">
          {topics.map((topic, index) => (
            <motion.section
              key={index}
              className="topic-section"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <h2
                className="section-heading"
                onClick={() => setActiveTopic(activeTopic === topic.title ? null : topic.title)}
              >
                {topic.title}
              </h2>

              {activeTopic === topic.title && (
                <div className="section-description space-y-4">
                  <p>{topic.description}</p>
                  <img
                    src={topic.image}
                    alt={topic.title}
                    className="topic-image w-full h-auto rounded-md shadow-lg"
                  />
                </div>
              )}
            </motion.section>
          ))}
        </div>

        <div className="learn-more">
          <h3 className="section-heading">If you want to learn more</h3>
          <ul className="links-list">
            <li>
              <a
                href="https://www.geeksforgeeks.org/line-clipping-set-1-cohen-sutherland-algorithm/"
                className="custom-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cohen Sutherland Algorithm - GeeksforGeeks
              </a>
            </li>
            <li>
              <a
                href="https://techzzers.wordpress.com/midpoint-subdivision-line-clipping-algorithm/#:~:text=1)%20Read%20two%20end%20points,codes%20for%20P1%20and%20P2."
                className="custom-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Midpoint Line Clipping Algorithm - Teczzers
              </a>
            </li>
            <li>
              <a
                href="https://www.javatpoint.com/sutherland-hodgeman-polygon-clipping"
                className="custom-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sutherland Hodgeman Polygon Clipping Algorithm - Javapoint
              </a>
            </li>
            <li>
              <a
                href="https://www.geeksforgeeks.org/weiler-atherton-polygon-clipping-algorithm/"
                className="custom-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Weiler Atherton Polygon Clipping Algorithm - GeeksforGeeks
              </a>
            </li>
            <li>
              <a
                href="https://www.mdpi.com/1999-4893/16/4/201"
                className="custom-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Article - Line Clipping in 3D: Overview, Techniques and Algorithms
              </a>
            </li>
            <li>
              <a
                href="https://developer.nvidia.com/graphics"
                className="custom-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Graphics and AI - NVIDIA Developer
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Clipping;

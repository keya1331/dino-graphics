import React from "react";
import SectionPage from "../components/TemplatePageHeader";
import { motion } from "framer-motion";

// Topic data with individual titles, descriptions, and image paths
const topics = [
  {
    title: "Overview of Hidden Lines",
    description:
      "Hidden line and surface methods are essential for rendering 3D scenes accurately by determining which parts of objects should be visible from a specific viewpoint. These techniques enhance the realism and depth of 3D models by ensuring proper occlusion and visibility of surfaces.",
    example:
      "For instance, when viewing a cube from one angle, the back face should be hidden, and only the front, top, and side faces should be visible.",
    image: "https://images.javatpoint.com/tutorial/computer-graphics/images/computer-graphics-hidden-surface-removal.png",
  },
  {
    title: "Visible Surface Methods",
    description:
      "Techniques like Z-buffering, depth-sorting, and scan-line algorithms are commonly used to handle this task. Mastering these methods is crucial in creating realistic and complex visual representations in graphics, ensuring clarity and depth in 3D models.",
    subtopics: [
      {
        title: "Z-buffering",
        definition:
          "A method for determining visible surfaces by storing depth information for each pixel in a buffer.",
        example:
          "Used in gaming engines to manage real-time rendering of complex scenes.",
      },
      {
        title: "Depth-Sorting",
        definition:
          "Also known as the Painter’s Algorithm, it sorts surfaces by depth and renders them back to front.",
        example:
          "Useful for rendering transparent objects where overlapping occurs.",
      },
      {
        title: "Scan-Line Algorithms",
        definition:
          "Processes one horizontal line of the screen at a time to determine visible surfaces.",
        example:
          "Used in raster graphics for efficient rendering.",
      },
    ],
    image: "https://www.tutorialspoint.com/computer_graphics/images/area_subdivision_method.jpg",
  },
  {
    title: "Fundamentals of Bezier Curves",
    description:
      "Bezier curves are a foundational tool in curve generation, allowing for the creation and manipulation of smooth, natural shapes in computer graphics. They are widely used in vector graphics, animations, and modeling.",
    example:
      "A simple quadratic Bezier curve can be defined by three control points: P0, P1, and P2, which determine the shape and curvature.",
    image: "https://learn.scannerlicker.net/wp-content/uploads/2014/04/bezier0011.png",
  },
  {
    title: "Introduction to B-Splines",
    description:
      "B-splines extend the capabilities of Bezier curves, providing greater flexibility and control in 2D and 3D graphics applications such as character modeling and animation. They allow for more complex shapes with a higher degree of smoothness.",
    example:
      "A cubic B-spline curve can pass through or near multiple control points, maintaining smooth transitions.",
    image: "https://bsplines.org/wp-content/uploads/uniform-b-splines.svg",
  },
  {
    title: "Illumination and Shading Techniques",
    description:
      "Lighting and shading simulate how light interacts with surfaces and materials, enhancing the perception of depth and texture in graphics. These techniques contribute to the realism of scenes.",
    subtopics: [
      {
        title: "Flat Shading",
        definition:
          "Applies a single color to a polygon, resulting in a faceted appearance.",
        example:
          "Used in low-poly games or applications requiring simplistic rendering.",
      },
      {
        title: "Gouraud Shading",
        definition:
          "Interpolates vertex colors across a polygon for smooth transitions.",
        example:
          "Creates realistic lighting in 3D models with minimal computational cost.",
      },
      {
        title: "Phong Shading",
        definition:
          "Calculates pixel-level lighting for a smoother and more realistic appearance.",
        example:
          "Common in high-quality renderings of curved surfaces.",
      },
    ],
    image: "https://slideplayer.com/slide/16683696/96/images/6/SHADING+METHODS+POLYGON+RENDERING+METHODS.jpg",
  },
  {
    title: "Lighting and Color Dynamics",
    description:
      "Understanding color interactions and dynamic lighting is essential for achieving visually compelling and realistic scenes in computer graphics. These principles guide the use of light sources and color theory to enhance visual storytelling.",
    example:
      "For example, warm colors can evoke a sense of comfort, while dynamic lighting can highlight key areas of interest in a scene.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Phong_components_revised.png/544px-Phong_components_revised.png",
  },
  {
    title: "Animation Principles in Graphics",
    description:
      "Animation brings graphics to life, combining movement with light, color, and shading to create dynamic and immersive experiences. Principles such as timing, spacing, and arcs are critical to realistic animations.",
    example:
      "A bouncing ball animation uses timing to mimic gravity and elasticity, enhancing realism.",
    image: "https://fastercapital.com/i/Computer-graphics-animation--Understanding-the-Principles-of-Computer-Graphics-Animation--The-Future-of-Computer-Graphics-Animation.webp",
  },
  {
    title: "Graphics Processing Units (GPUs)",
    description:
      "GPUs are specialized hardware designed for parallel processing, enabling real-time rendering and handling large volumes of data in graphics tasks. They power applications from gaming to machine learning.",
    example:
      "NVIDIA’s RTX series GPUs support real-time ray tracing for highly realistic visuals.",
    image: "https://teachcomputerscience.com/wp-content/uploads/2020/06/1.-Graphical-Processor-Unit-GPU.png",
  },
  {
    title: "Specialized Graphics Hardware Advancements",
    description:
      "Advances in specialized hardware continue to push the boundaries of realistic gaming, virtual reality, and scientific simulations. Innovations include ray tracing cores and AI accelerators.",
    example:
      "Modern VR headsets use hardware with high refresh rates and low latency to create immersive experiences.",
    image: "https://media.licdn.com/dms/image/v2/D4D12AQHNrg-UottrPg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1723269133728?e=2147483647&v=beta&t=KDJij7ig61roBhengljNkMWLE93OEgdWyMaXRvjo3ns",
  },
  {
    title: "AI-Driven Rendering Technologies",
    description:
      "Artificial intelligence is revolutionizing computer graphics with breakthroughs in rendering, real-time ray tracing, and immersive experiences. AI accelerates rendering processes and generates realistic textures and animations.",
    example:
      "NVIDIA’s DLSS technology uses AI to upscale low-resolution images in real-time.",
    image: "https://fastercapital.com/i/Computer-Graphics--CSCE-s-Artistry--Exploring-Computer-Graphics--The-Advancements-in-Computer-Graphics-Technology.webp",
  },
];

const AdvancedTopics = () => (
  <div className="main flex flex-col items-center justify-center text-white font-inter">
    <SectionPage
      sectionTitle="Advanced Topics"
      sectionNumber="06"
      sectionDescription="Explore shading, lighting, color, animation, and modern graphics hardware."
      currentSection="AdvancedTopics"
    />

    <div className="content mt-8 w-3/4">
      {topics.map((topic, index) => (
        <motion.div
          key={index}
          className="topic-card bg-gray-800 p-4 rounded-lg mb-4"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h2 className="text-xl font-bold mb-2">{topic.title}</h2>
          <p className="mb-2">{topic.description}</p>
          <img src={topic.image} alt={topic.title} className="rounded-lg w-full h-auto" />
        </motion.div>
      ))}
    </div>
  </div>
);

export default AdvancedTopics;

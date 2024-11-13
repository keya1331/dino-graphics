import React from "react";
import SectionPage from "../components/TemplatePageHeader";
import { motion } from "framer-motion";

// Topic data with titles, descriptions, and image paths
const topics = [
  {
    title: "Overview of Hidden Lines and Visible Surface Methods",
    description:
      "Hidden line and surface methods are essential for rendering 3D scenes accurately by determining which parts of objects should be visible from a specific viewpoint. Techniques like Z-buffering, depth-sorting, and scan-line algorithms are commonly used to handle this task. Mastering these methods is crucial in creating realistic and complex visual representations in graphics, ensuring clarity and depth in 3D models.",
    image: "path/to/hidden-lines-image.jpg",
  },
  {
    title: "Fundamentals of Curve Generation",
    description:
      "Curve generation is the backbone of smooth and natural shape design in computer graphics. From Bezier curves to B-splines, these mathematical techniques allow us to create and manipulate curves for 2D and 3D graphics. Curves are used in applications like character modeling, animation, and even in path generation for simulations. Understanding these fundamentals is essential for creating elegant, organic shapes in a digital space.",
    image: "path/to/curve-generation-image.jpg",
  },
  {
    title: "Illumination, Shading, Lighting, Color, and Animation",
    description:
      "Lighting and shading techniques are critical for achieving realistic visuals in computer graphics. These methods simulate how light interacts with surfaces, materials, and colors, enhancing the perception of depth and texture. Animation adds movement and brings graphics to life, often combining light, color, and shading in complex ways to convey dynamic and immersive experiences. Together, these concepts create visually rich and compelling graphics.",
    image: "path/to/illumination-shading-image.jpg",
  },
  {
    title: "Special-Purpose Graphics Hardware",
    description:
      "Graphics Processing Units (GPUs) and other specialized hardware accelerate the complex calculations required for rendering high-quality graphics in real time. GPUs are optimized for parallel processing, making them ideal for handling the large volumes of data involved in graphics tasks. Specialized hardware advancements continue to push the boundaries of what’s possible, from realistic gaming environments to scientific simulations and virtual reality.",
    image: "path/to/special-purpose-hardware-image.jpg",
  },
  {
    title: "Recent Developments",
    description:
      "The field of computer graphics is rapidly evolving, with breakthroughs in real-time ray tracing, AI-driven rendering, and VR/AR technologies. These advancements are reshaping how we interact with digital worlds, providing more immersive and visually stunning experiences than ever before. Staying updated with these trends is vital for anyone interested in leveraging cutting-edge technology to create next-level visual effects and interactive media.",
    image: "path/to/recent-developments-image.jpg",
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
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl mb-4" style={{ color: "#F2FFFC" }}>
            {topic.title}
          </h2>
          <p className="mb-4">{topic.description}</p>
          <img
            src={topic.image}
            alt={topic.title}
            className="w-full h-auto rounded-md shadow-lg"
          />
        </motion.div>
      ))}
    </div>
  </div>
);

export default AdvancedTopics;
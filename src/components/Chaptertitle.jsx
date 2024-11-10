import React from "react";
import { Link } from "react-router-dom";

const chapterRoutes = {
  "Introduction": "/Introduction",
  "Graphics Primitives": "/GraphicsPrimitives",
  "2D and 3D Transformations": "/Transformations",
  "3D Projection": "/Projection",
  "Clipping": "/Clipping",
  "Advanced Topics": "/AdvancedTopics"
};

const Chaptertitle = (props) => {
  return (
    <div className="cont">
      <div className="rounded-3xl p-3 flex flex-col justify-center gap-4 hover:scale-105 transition-all">
        <Link to={chapterRoutes[props.title]} className="text-8xl text-[#8695a0] font-bold">
          {props.number}
        </Link>
        <Link to={chapterRoutes[props.title]} className="text-5xl text-white font-bold">
          {props.title}
        </Link>
        <p className="text-sm text-[#dadddf] text-wrap">{props.description}</p>
      </div>
    </div>
  );
};

export default Chaptertitle;
import React from "react";

const Chaptertitle = (props) => {
  return (
    <div className="cont">
      <div className="flex flex-col justify-center gap-4">
        <p className="text-8xl text-[#8695a0] font-bold">{props.number}</p>
        <p className="text-5xl text-white font-bold">{props.title}</p>
        <p className="text-sm text-[#dadddf] text-wrap">{props.description}</p>
      </div>
    </div>
  );
};

export default Chaptertitle;

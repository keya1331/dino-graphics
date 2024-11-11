import React from "react";
import IntroductionInteractiveElement from "../components/IntroductionInteractiveElement";

const Introduction = () => {
  return (
    <div className="main">
      <div className="container flex items-center justify-center mx-40 flex-col text-center space-y-11">
        <div className="hero flex items-center justify-center flex-col gap-3">
          <img
            src="/assets/logo2.png"
            alt="Some error occurred"
            className="md:w-80"
          />
          <p className="text-9xl font-bold tracking-tighter text-[#e8f3fe]">
            DINO GRAPHICS
          </p>
        </div>

        <div className="interactiveElement">
          <IntroductionInteractiveElement />
        </div>

        <div className="navigator flex text-white">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
          neque natus magnam iusto praesentium consequatur dolor. Repudiandae et
          aut nisi officia! Omnis dignissimos similique nostrum consequatur
          natus!
        </div>
      </div>
    </div>
  );
};

export default Introduction;

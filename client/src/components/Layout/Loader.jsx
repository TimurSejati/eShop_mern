import React from "react";
import Lottie from "react-lottie";
import animationData from "../../assets/animations/animation_lmwt5map.json";

const Loader = () => {
  const defaultOptions = {
    loop: false,
    autolau: true,
    animationData: animationData,
    renderSettings: {
      preserveAspecRation: "xMidYMid slice",
    },
  };

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <Lottie options={defaultOptions} width={300} height={300} />
    </div>
  );
};

export default Loader;

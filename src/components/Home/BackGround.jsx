import React from "react";

const BackGround = () => {
  return (
    <div className="fixed top-0 left-0 w-[100vw] h-[100vh] flex items-end justify-center overflow-hidden -z-[1]">
      <img
        src="/img/card-right-03.webp"
        className="bg__img-hero w-[400px] scale-[4] object-cover block  object-center-bottom"
        alt="hero"
      />
    </div>
  );
};

export default BackGround;

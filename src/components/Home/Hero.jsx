import React from "react";

const Hero = () => {
  return (
    <>
      <div className="hero p-[35px] w-[100%] h-[100%] relative">
        <div className="w-[300px] hero__intro-text self-start text-white fixed transition-all duration-200 ease-in-out">
          <p className=" text-[12px] text-whyte leading-[1.3] font-light">
            KPR is a brand that focuses on collective narrative and empowering
            storytellers. Keepers is a living story, an uncharted world waiting
            to be explored, to be imagined.
          </p>
        </div>
        <div className="text-whyte hero__main-text text-white transition-all duration-200 ease-in-out text-[120px] font-bold tracking-[-0.05em] leading-[.84] bottom-[0] right-[20px] uppercase fixed max-w-main-content w-[100vw] p-[35px]">
          <div className="flex w-full justify-center">
            <p className="relative">
              KEEP.
              <span className=" absolute -top-[25px] -left-[15px] text-[10px] font-normal block tracking-normal">
                01K
              </span>
            </p>
          </div>
          <div className="flex w-full justify-end ">
            <p className="relative">
              PROJECT.
              <span className=" absolute -top-[25px] -left-[15px] text-[10px] font-normal block tracking-normal">
                02P
              </span>
            </p>
          </div>
          <div className="flex w-full justify-start">
            <p className="relative">
              REIMAGINE.
              <span className=" absolute -top-[25px] -left-[15px] text-[10px] font-normal block tracking-normal">
                03R
              </span>
            </p>
          </div>
        </div>
        <p className=" uppercase text absolute bottom-[25px] right-[35px] text-[8px]">
          scroll
        </p>
      </div>

      <div className="h-[400vh]"></div>
    </>
  );
};

export default Hero;

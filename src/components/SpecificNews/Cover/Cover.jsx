import React from "react";
import SpecificNewsParallax from "../../vendors/Parallax/SpecificNewsParallax";

const Cover = ({ cover }) => {
  return (
    <div className="relative z-[2] translate-y-[-3%]">
      <SpecificNewsParallax img={cover.url} alt={cover.name} />
      {/* top */}
      <div className=" absolute z-[3] top-[-1px] left-0 w-full h-[var(--img-top-interverted-cut-height-spec-news)] flex items-center justify-between">
        <div className="w-[var(--img-top-interverted-cut-width-spec-news)] h-full bg-transparent"></div>
        <img src="/img/top.svg" className="h-full w-auto " alt="" />
        <div className="flex-grow h-full bg-white"></div>
      </div>

      {/* bottom */}
      <div className=" absolute  z-[3]  bottom-[-1px] left-0 w-full h-[var(--img-bottom-interverted-cut-height-spec-news)] flex  items-center justify-between">
        <div className="h-full w-[var(--img-bottom-interverted-cut-width-spec-news-1)] bg-white"></div>

        <div className="flex-grow h-full bg-transparent relative justify-between ">
          <img
            src="/img/bottom.svg"
            className="h-full w-[var(--svg-cut-for-img-bottom-interverted-cut-width-spec-news)] object-cover absolute top-0 left-0 bg-transparent "
            alt=""
          />
          <img
            src="/img/bottom-2.svg"
            className="h-full w-[var(--svg-cut-for-img-bottom-interverted-cut-width-spec-news)] object-cover absolute top-0 right-0 bg-transparent "
          />
        </div>

        <div className="flex-grow h-full bg-white relative justify-between w-[var(--img-bottom-interverted-cut-width-spec-news-2)] "></div>
      </div>
    </div>
  );
};

export default Cover;

import React from "react";
import RightCarousel from "../../../vendors/svg/RightCarousel";
import LeftCarousel from "../../../vendors/svg/LeftCarousel";

const ExploreButton = () => {
  return (
    <>
      <div className="w-explore_left_width flex-shrink-0 border-r-frame border-frame_color"></div>
      <div className="h-[var(--spec-news-explore-icon-box-size)] relative top-[-1px] ">
        <div
          className=" absolute top-0  -left-explore_icon_left_arrow_left
            w-explore_icon_frame_width 
            bg-transparent  aspect-square 
            flex items-center justify-center
            border-frame border-frame_color border-b-0
            hover:border-black hover:z-[1] cursor-pointer
        "
        >
          <LeftCarousel />
        </div>
        <div
          className=" absolute left-[-1px] top-0 
            w-explore_icon_frame_width 
            bg-transparent aspect-square 
            flex items-center justify-center
            border-frame border-frame_color border-b-0
            hover:border-black cursor-pointer

        "
        >
          <RightCarousel />
        </div>
      </div>
    </>
  );
};

export default ExploreButton;

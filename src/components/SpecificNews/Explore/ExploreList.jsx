import React from "react";
import ExploreItem from "./ExploreItem";
import ExploreButton from "./ExploreButton";

const ExploreList = () => {
  return (
    <div className=" flex-grow w-full overflow-scroll relative">
      <div
        className="w-full flex overflow-scroll 
      border-t-frame border-b-frame border-frame_color 
      gap-[var(--frame-line-width)] bg-frame_color"
      >
        <ExploreItem />
        <ExploreItem />
        <ExploreItem />
        <ExploreItem />
        <ExploreItem />
        <ExploreItem />
      </div>
    </div>
  );
};

export default ExploreList;

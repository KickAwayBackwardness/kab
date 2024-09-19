import React from "react";
import ExploreItem from "./ExploreItem";

const ExploreList = () => {
  return (
    <div className=" flex-grow w-full overflow-scroll">
      <div className="w-full flex">
        <ExploreItem />
        <ExploreItem />
        <ExploreItem />
      </div>
      <div>button</div>
    </div>
  );
};

export default ExploreList;

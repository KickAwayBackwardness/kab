import React from "react";
import ExploreSectionTitle from "./ExploreSectionTitle";
import ExploreList from "./ExploreList";

const Explore = () => {
  return (
    <div className="max-w-content w-full h-fit ml-content_left border-t-frame border-frame_color flex ">
      {/* left */}
      <ExploreSectionTitle />
      {/* right */}
      <ExploreList />
    </div>
  );
};

export default Explore;

import React from "react";
import ExploreSectionTitle from "./ExploreSectionTitle";
import ExploreList from "./ExploreList";
import ExploreButton from "./ExploreButton";

const Explore = () => {
  return (
    <section>
      <div className="max-w-content w-full h-fit ml-content_left">
        <div className="w-full h-full flex">
          {/* left */}
          <ExploreSectionTitle />
          {/* right */}
          <ExploreList />
        </div>
        <div className="w-full h-full flex">
          <ExploreButton />
        </div>
      </div>
    </section>
  );
};

export default Explore;

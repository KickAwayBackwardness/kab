import React from "react";
import Dot from "../../../vendors/Dot/Dot";
import SmallText from "../../../vendors/Text/SmallText";
import ExploreItemPhotoParallax from "../../../vendors/Parallax/ExploreItemPhotoParallax";

const ExploreItem = () => {
  return (
    <div
      className=" group relative z-[0]
        min-w-[var(--spec-news-explore-item-min-width)]
        w-[var(--spec-news-explore-item-width)]
        p-[var(--spec-news-explore-item-padding)]
        bg-white
        "
    >
      {/* details */}
      <div className="w-full">
        <div className="flex justify-between">
          <div className=" group-hover:text-white">
            <Dot color="black" />
            <SmallText text="finder lab" />
          </div>
          <div className=" group-hover:text-white">
            <SmallText text="20.10.24" />
          </div>
        </div>
        <div>
          <h4
            className="
            text-whyteInktrap text-spec_explore_item_title
            font-[var(--spec-news-explore-item-title-font-weight)]
            tracking-[var(--spec-news-explore-item-title-letter-spacing)]
            leading-[var(--spec-news-explore-item-title-line-height)]
            mt-[var(--spec-news-explore-item-title-margin-top)]
            group-hover:text-white
          "
          >
            Our Origin Story
          </h4>
        </div>
      </div>
      {/* photo */}
      <ExploreItemPhotoParallax
        img="https://a.storyblok.com/f/165555/3840x2160/a3e5b8f705/634caf4f13615-kprneon.png/m/311x250/smart/filters:quality(85)"
        alt="our story"
      />
      <div
        className="absolute w-full h-full bg-black z-[-1]
      top-[0px] left-0 opacity-0 rounded-explore_item
      group-hover:opacity-100 group-hover:rounded-explore_item transition-all duration-300 ease-in-out
      "
      ></div>
    </div>
  );
};

export default ExploreItem;

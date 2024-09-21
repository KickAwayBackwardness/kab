import React from "react";

const ExploreSectionTitle = () => {
  return (
    <div
      className="w-explore_left_width flex-shrink-0 
        border-t-frame border-r-frame border-frame_color
        pt-[var(--spec-news-explore-left-padding-top)]
        pl-[var(--spec-news-explore-left-padding-left)]
        
      "
    >
      <p
        className="
        text-whyteInktrap uppercase text-spec_explore_left
        font-[var(--spec-news-explore-left-font-weight)]
        tracking-[var(--spec-news-explore-left-letter-spacing)]
        leading-[var(--spec-news-explore-left-line-height)]
        
        "
      >
        Continue Exploring
      </p>
    </div>
  );
};

export default ExploreSectionTitle;

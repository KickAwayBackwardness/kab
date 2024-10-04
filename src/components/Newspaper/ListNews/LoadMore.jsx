import React from "react";
import DotSmall from "../../vendors/Dot/DotSmall";

const LoadMore = () => {
  return (
    <div className="max-w-content h-[var(--load-more-height)] ml-content_left flex justify-center items-center">
      <p className="text-load_more leading-[var(--load-more-line-height)] tracking-[var(--load-more-letter-spacing)]">
        LOAD MORE
      </p>
      <div className="flex items-center ml-[var(--load-more-3-dot-margin-left)]">
        <DotSmall />
        <DotSmall />
        <DotSmall />
      </div>
    </div>
  );
};

export default LoadMore;
